(ns om-lette.templater
  (:require [clojure.walk :as walk]
            [hickory.core :as hick]
            [clojure.string :as s]))

(defn dbg
  [l v]
  (.log js/console l)
  (.log js/console (JSON/stringify v))
  v)

(defn dbg->
  [v l]
  (dbg l v))

(defn dbg2
  [l v]
  (.log js/console l)
  (.log js/console v)
  v)

(defn dbg2->
  [v l]
  (dbg2 l v))

(defonce template-cache (atom {}))

(defn has-all-keys? [m keys]
  (apply = (map count [keys (select-keys m keys)])))

(defn make-done-loading?-fn [names callback]
  (fn []
    (if (has-all-keys? @template-cache names)
      (callback))))

;; regex
(def nonnum "[a-zA-Z\\*\\+!\\-\\_\\?]")
(def valid-sym-chars "[\\w\\d\\*\\+!\\-\\_\\?]")
(def valid-sym (str nonnum "+" valid-sym-chars "*"))

;; *******

(defn like-html-vec?
  [h]
  (if (and (vector? h) (-> h first keyword?)(-> h second map?))
    h
    nil))

(defn has-om-lette? [h kw] (if-let [v (-> h like-html-vec? second :om-lette kw)] [h v] nil))
(defn has-om-if? [h] (has-om-lette? h :om-if))
(defn has-om-repeat? [h] (has-om-lette? h :om-repeat))
(defn is-om-text? [h] (and (vector? h) (= (first h) :om-text) (second h)))
(defn is-om-code? [h] (and (vector? h) (= (first h) :om-code) (second h)))

(defn strip-attrs [tag & xattrs]
  (let [[name attrs & rest] tag] (vec (concat [name (apply dissoc attrs xattrs)] rest))))

(defn drop-delim
  [x]
  (filterv #(-> %
               #{"" (str (char 30))}
               not)
          x))

(defn flatten-out
  [t]
  (if (like-html-vec? t)
    (into (->> t (take 2) vec)
          (mapcat #(if (and (sequential? %)
                            (-> % like-html-vec? not))
                     %
                     [%])
                  (drop 2 t)))
    t))

#_(flatten-out [:div {} "a" [:div {}] '("whoa" [:a ""])])


(defn split-dbl-brackets
  [t]
  (-> t
      (s/replace "{{" (str (char 28) (char 29)))
      (s/replace "}}" (str (char 29) (char 30) (char 28)))
      (s/split (re-pattern (str (char 28))))
      (#(map (fn [x] (s/split x (re-pattern (str (char 29))))) %))))

(defn parse-code
  [s]
  (.parse js/parser s))


(defn eval-parsed-cljs-code
  [c state]
  (cond (= c "$") state
        (vector? c) (apply (let [func (first c)
                                 eval-func (eval-parsed-cljs-code func state)]
                             (if (fn? eval-func)
                               eval-func
                               (get-in state
                                       [:fns eval-func])))
                           (mapv #(eval-parsed-cljs-code % state)
                                 (rest c)))
        :default c))

(defn eval-parsed-code
  [pjs state]
  (eval-parsed-cljs-code (js->clj pjs)
                         state))

(defn tokenize-string
  [p]
  (->> p
       split-dbl-brackets
       (mapv (fn [x] (condp #(= % (count %2)) x
                       0 nil
                       1 [:om-text (first x)]
                       2 [:om-text (-> x drop-delim first)]
                       3 [:om-code (second x)])))
       (filterv #(-> % second not-empty))))

#_(tokenize-string "{{(a)}}")
#_(split-dbl-brackets "{{(a)}}")

(defn grab-om-attrs
  [a ks]
  (let [r (let [sel-ks (select-keys a ks)]
            (if (not-empty sel-ks)
              (-> a
                  (#(apply dissoc % ks))
                  (assoc :om-lette (select-keys a ks)))
              a))]
    r))

(defn eval-om-if-expr
  [x state]
  (get state (apply str (mapcat second x))))



(defn html->template
  [h]
  (->> h
       hick/parse-fragment
       first
       hick/as-hiccup
       (walk/postwalk (fn [t] (cond (string? t) (tokenize-string t)
                                    (like-html-vec? t) (-> t
                                                           (update-in [1] grab-om-attrs [:om-if :om-repeat])
                                                           (assoc-in [1 :on-click] #(.log js/console %)))
                                    :else t)))
       (walk/postwalk flatten-out)))

(defn load-templates [names get-html-template callback]
  (mapv #(->> (fn [response]
                (swap! template-cache assoc %
                       (html->template response))
                (if (has-all-keys? @template-cache names)
                  (callback)))
              (get-html-template %))
        names))

(def template->hiccup)

(defn processors
  [state]
  [[is-om-text? identity]
   [is-om-code? #(eval-parsed-code (-> % parse-code last) state) #_ #(get state % "")]
   [has-om-if? (fn [[h ifx]]
                 (if (eval-om-if-expr ifx state)
                   h
                   nil))]
   [has-om-repeat? (fn [[h repx]]
                     (mapv #(template->hiccup (update-in h
                                                         [1 :om-lette]
                                                         dissoc
                                                         :om-repeat)
                                              %)
                           (-> repx
                               first
                               second
                               parse-code
                               (eval-parsed-code state))))]])

(defn template->hiccup
  [tmplt state]
  (let [s (update-in state
                     [:fns]
                     (fn [fns] (merge {"=>" (fn [source dest]
                                              (mapv #(assoc state dest %)
                                                   source))
                                       "identity" identity
                                       "vector" vector
                                       "hashmap" hash-map
                                       "set" set
                                       "resolve-symbol" #(or (get-in % [:fns %2])
                                                             (get % %2 "[empty]"))}
                                      fns)))]
    (->> tmplt
         (walk/prewalk (fn [h]
                         (reduce (fn [current [pred proc-fn]]
                                   (if-let [r (pred current)]
                                     (proc-fn r)
                                     current))
                                 h
                                 (processors s))))
         (walk/postwalk flatten-out))))

(defn cached-template->hiccup
  [tname state]
  (let [r (template->hiccup (get @template-cache tname) state)]
    r))

#_ (-> "<div>{{a}}</div" html->template (template->hiccup {"a" 33}))

#_(html->template "<div>a <span></span></div>")


#_(load-templates ["hello.html"]
                  (fn [n h] (println "in get-html-template") (h "<div></div"))
                  (fn [] (println "callback!")))

(ns om-lette.templater
  (:require [clojure.walk :as walk]
            [hickory.core :as hick]
            [clojure.string :as s]))

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
(def om-repeat-expr (str "^=>\\s+(" valid-sym ")\\s+(" valid-sym ")\\s*$"))

;; *******

(defn like-html-vec?
  [h]
  (if (and (vector? h) (-> h first keyword?)(-> h second map?))
    h
    nil))

(defn has-om-if?
  [h]
  (-> h like-html-vec? second :om-if))

(defn has-om-repeat?
  [h]
  (->> h
       like-html-vec?
       second
       :om-repeat
       (#(or % ""))
       (re-find (re-pattern om-repeat-expr))
       rest
       not-empty
       ))

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

(defn tokenize-string
  [p]
  (->> p
       split-dbl-brackets
       (map (fn [x] (condp #(= % (count %2)) x
                      0 nil
                      1 [:om-text (first x)]
                      2 [:om-text (-> x drop-delim first)]
                      3 [:om-code (second x)])))
       (filter #(-> % second not-empty))))

(defn grab-om-attrs
  [a ks]
  (let [r (let [sel-ks (select-keys a ks)]
            (if (not-empty sel-ks)
              (-> a
                  (#(apply dissoc % ks))
                  (assoc :om-lette (select-keys a ks)))
              a))]
    r))

(defn html->template
  [h]
  (->> h
       hick/parse-fragment
       first
       hick/as-hiccup
       (walk/postwalk (fn [t] (cond (string? t) (tokenize-string t)
                                    (like-html-vec? t) (update-in t [1] grab-om-attrs [:om-if :om-repeat])
                                    :else t)))
       (walk/postwalk flatten-out)))

(defn load-templates [names get-html-template callback]
  (mapv #(->> (fn [response]
                (swap! template-cache assoc %
                       (html->template response))
                (println @template-cache)
                (if (has-all-keys? @template-cache names)
                  (callback)))
              (get-html-template %))
        names))

(defn template->hiccup
  [tmplt state]
  (walk/prewalk (fn [x]
                  (cond (and (vector? x)
                             (= (first x) :om-code)) (get state (second x) "")
                        :else x))
                tmplt))

#_ (-> "<div>{{a}}</div" html->template (template->hiccup {"a" 33}))

#_(html->template "<div>a <span></span></div>")


#_(load-templates ["hello.html"]
                  (fn [n h] (println "in get-html-template") (h "<div></div"))
                  (fn [] (println "callback!")))

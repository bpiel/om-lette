(ns om-lette.copy
  (:require [clojure.walk :as walk]
            [hickory.core :as hick]
            [clojure.string :as s]))

(defonce app-state (atom {"val1" 1 "val2" 1 "show" true "vec" [1 2 3]}))

(defonce template-cache (atom {}))

(defn has-all-keys? [m keys]
  (apply = (map count [keys (select-keys m keys)])))

(defn make-done-loading?-fn [names callback]
  (fn []
    (if (has-all-keys? @template-cache names)
      (callback))))

(defn make-template-handler [template-name callback]
  (fn handler [response]
    (swap! template-cache assoc template-name response)
    (callback)))

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

(defn cont-pass
  [& fns]
  (fn [v] (if (not-empty fns)
           ((first fns) v
            (->> fns rest (apply cont-pass)))
           v)))

(defn strip-attrs [tag & xattrs]
  (let [[name attrs & rest] tag] (vec (concat [name (apply dissoc attrs xattrs)] rest))))

(defn drop-delim
  [x]
  (filterv #(-> %
               #{"" (str (char 30))}
               not)
          x))

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
  (println "=== grab-om-attrs =======")
  (println [a ks])
  (let [r (let [sel-ks (select-keys a ks)]
            (if (not-empty sel-ks)
              (-> a
                  (#(apply dissoc % ks))
                  (assoc :om-lette (select-keys a ks)))
              a))]
    (println r)
    (println "=========")
    r))

(defn html->template
  [h]
  (->> h
       hick/parse-fragment
       first
       hick/as-hiccup
       (walk/postwalk (fn [t] (cond (string? t) (tokenize-string t)
                                    (like-html-vec? t) (update-in t [1] grab-om-attrs [:om-if :om-repeat])
                                    :else t)))))

#_(html->template "<div om-repeat='{{a}}'></div>")

#_(-> "<div></div>"
      hick/parse-fragment
      first
      hick/as-hiccup)

(defn process-html-struc
  [state html]
  (->> html (walk/prewalk
             (cont-pass
              (fn [v f]
                (if (string? v)
                  (clojure.string/replace v
                                          #"\{\{(.*?)\}\}"
                                          (fn [_ b] (get state b "")))
                  (f v)))
              (fn [v f]
                (if-let [ifx (has-om-if? v)]
                  (if (get state ifx)
                    (f v)))
                (f v))
              (fn [v f]
                (if-let [[lst kw] (has-om-repeat? v)]
                  (f (->> lst
                          (get state)
                          (mapv #(process-html-struc (assoc state kw %)
                                                     (strip-attrs v :om-repeat)))
                          (concat [:div {:data-om "bill"}]) ;; what should go here?
                          vec))
                  (f v)))
              ))))

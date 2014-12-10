(ns om-lette.core
  (:require [clojure.walk :as walk]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [sablono.core :as sab :refer-macros [html]]
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

(defn getTemplate [name handler]
  (GET (str "/js/templates/" name) {:handler handler}))

(defn load-templates [names callback]
  (mapv #(->> (make-done-loading?-fn names callback)
              (make-template-handler %)
              (getTemplate %)) names))

(defn dbg [x] (.log js/console x) x)
(defn sdbg [x] (.log js/console (str x)) x)

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
  (filter #(-> %
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
  (map (fn [x] (condp #(= % (count %2)) x
                 0 nil
                 1 [:om-text (first x)]
                 2 [:om-text (-> x drop-delim first)]
                 3 [:om-code (second x)]))
       p))

(defn grab-om-attrs [a ks] (-> (apply dissoc a ks) (assoc :om-lette (select-keys a ks))))

(defn html->template
  [h]
  (-> hick/parse-fragment
      (map hick/as-hiccup)
      first
      (walk/prewalk (cond (string? h) (tokenize-string h)
                     (like-html-vec? h) (update-in h [1] grab-om-attrs)
                     :else h))))

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

(defn process-template
  [state html-string]
  (sab/html (->> html-string
                 hick/parse-fragment
                 (map hick/as-hiccup)
                 first
                 (process-html-struc state)
                )))






(defn init []
  (let [main (fn [state owner]
               (reify om/IRender (render [this]
                                   (->> (get @template-cache "hello.html") (process-template state)))))]
    (om/root main app-state
             {:target (.getElementById js/document "app")})))





(load-templates ["hello.html"] init)

(js/setTimeout #(swap! app-state update-in ["val1"] inc) 1000)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 2000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 1200)
(js/setTimeout #(swap! app-state update-in ["val1"] inc) 3000)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 4000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 2400)
(js/setTimeout #(swap! app-state update-in ["val1"] inc) 5000)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 6000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 3600)
(js/setTimeout #(swap! app-state update-in ["show"] not) 4000)

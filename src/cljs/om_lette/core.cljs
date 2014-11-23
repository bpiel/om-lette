(ns om-lette.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [sablono.core :as sab :refer-macros [html]]
            [hickory.core :as hick]))

(defonce app-state (atom []))

(defonce template-cache (atom {}))

#_(def p (promise))



(defn init []
  (let [main (fn [state owner]
               (reify om/IRender (render [this]
                                         (sab/html (->> (get @template-cache "hello.html") hick/parse-fragment (map hick/as-hiccup) first))
                                         )))]
    (om/root main app-state
             {:target (.getElementById js/document "app")})))






(defn has-all-keys? [m keys]
  (apply = (map count [keys (select-keys m keys)])))

(defn make-done-loading?-fn [names callback]
  (fn []
    (if (has-all-keys? @template-cache names)
      (callback))))

(defn make-template-handler [template-name callback]
  (fn handler [response]
    (.log js/console (str response))
    (swap! template-cache assoc template-name response)
    (callback)))

(defn getTemplate [name handler]
  (.log js/console (str "entering getTemplate for " name))
  (GET (str "/js/templates/" name) {:handler handler}))

(defn load-templates [names callback]
  (.log js/console "entering load-templates")
  (.log js/console (str names))
  (mapv #(->> (make-done-loading?-fn names callback)
              (make-template-handler %)
              (getTemplate %)) names))


(load-templates ["hello.html"] init)



#_(.log js/console (->> "<div>hi</div>" hick/parse-fragment (map hick/as-hiccup) vec))
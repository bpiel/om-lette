(ns om-lette.core
  (:require [clojure.walk :as walk]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [sablono.core :as sab :refer-macros [html]]
            [hickory.core :as hick]))

(defonce app-state (atom {"hi" "yes!"}))

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

(defn dbg [x] (.log js/console x))

(defn process-template
  [html state]
  (sab/html (->> html
                 hick/parse-fragment
                 (map hick/as-hiccup)
                 first
                 (walk/postwalk
                   #(if (string? %)
                      (clojure.string/replace %
                                              #"\{\{.*?\}\}"
                                              "X")
                      %)))))





(defn init []
  (let [main (fn [state owner]
               (reify om/IRender (render [this]
                                         (-> (get @template-cache "hello.html") (process-template state)))))]
    (om/root main app-state
             {:target (.getElementById js/document "app")})))


(load-templates ["hello.html"] init)
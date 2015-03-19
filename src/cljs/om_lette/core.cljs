(ns om-lette.core
  (:require [clojure.walk :as walk]
            [om.core :as om :include-macros true]
            [ajax.core :refer [GET POST]]
            [om-lette.templater :refer [render-template load-templates cached-template->hiccup]]))

(defn get-html-template [name handler]
  (GET (str "/js/templates/" name) {:handler handler}))

;; LIB ENDS HERE

(defonce app-state (atom {"val1" 1 "val2" 1 "show" true "vec" ["hi" 1 2 3]}))

(defn init []
  (let [main (fn [state owner]
               (reify om/IRender (render [this]
                                   (render-template "hello.html"
                                                    state
                                                    :fns {"x" inc
                                                          "incval1" (fn [_]
                                                                      (swap! app-state
                                                                             update-in
                                                                             ["val1"]
                                                                             inc))}))))]
    (om/root main app-state
             {:target (.getElementById js/document "app")})))

(load-templates ["hello.html"] get-html-template init)

(js/setTimeout #(swap! app-state update-in ["val1"] inc) 1000)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 2000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 1200)
(js/setTimeout #(swap! app-state update-in ["val1"] inc) 3000)
(js/setTimeout #(swap! app-state update-in ["vec"] conj "a") 3200)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 4000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 2400)
(js/setTimeout #(swap! app-state update-in ["val1"] inc) 5000)
(js/setTimeout #(swap! app-state update-in ["vec"] conj "b") 5500)
(js/setTimeout #(swap! app-state update-in ["val2"] (partial * 2)) 6000)
(js/setTimeout #(swap! app-state update-in ["show"] not) 3600)
(js/setTimeout #(swap! app-state update-in ["show"] not) 4000)

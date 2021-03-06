(ns om-lette.core
  (:require [clojure.walk :as walk]
            [om.core :as om :include-macros true]
            [om-lette.templater :refer [render-template
                                        load-templates
                                        cached-template->hiccup
                                        make-template-fetch-fn]]))

(defonce app-state (atom {"recur" 1
                          "val1" 1
                          "val2" 1
                          "show" true
                          "vec" ["hi" 1 2 3]
                          "sub" {"a" "sub-a"}}))

(defn init []
  (let [main (fn [state owner]
               (reify om/IRender (render [this]
                                   (render-template "hello.html"
                                                    state
                                                    :fns {"x" inc
                                                          "incval1" (fn [cursor] (fn [_]
                                                                                   (om/transact! cursor
                                                                                              ["val1"]
                                                                                              inc)))
                                                          "print" (fn [x]
                                                                    (.log js/console x)
                                                                    x)}))))]
    (om/root main app-state
             {:target (.getElementById js/document "app")})))

(load-templates ["hello.html"
                 "t2.html"]
                (make-template-fetch-fn #(str "/js/templates/" %))
                init)

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

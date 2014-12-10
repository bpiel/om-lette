(ns om-lette.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.util.response :as response])
  (:gen-class))

(defn render-not-found []
  {:status 404
   :headers {"Content-Type" "text/html"}
   :body
   (str "NOPE")})

(defn handler [request]
  (if (= "/" (:uri request))
      (response/redirect "/index.html")
      (render-not-found)))

(def app
  (-> handler
    (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))

(defproject om-lette "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [ring "1.2.1"]
                 [om "0.7.0"]
                 [cljs-ajax "0.3.3"]
                 [sablono "0.2.22"]
                 [hickory "0.5.4"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.13"]]

  :hooks [leiningen.cljsbuild]

  :source-paths ["src/clj"]

  :cljsbuild {:builds {:main {:source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/core.js"
                                         :output-dir "resources/public/js"
                                         :source-map "resources/public/js/core.js.map"
                                         :optimizations :whitespace
                                         }}}}

  :main om-lette.server
  :ring {:handler om-lette.server/app})

(ns om-lette.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [sablono.core :as sab :refer-macros [html]]
            [hickory.core :as hick]))

(defonce app-state (atom []))

(defn main
  [state owner]
  (reify om/IRender (render [this]
                            (sab/html [:div "hello"])
                            )))

(om/root main app-state
         {:target (.getElementById js/document "app")})


(.log js/console (hick/parse "<div>hi</div>"))
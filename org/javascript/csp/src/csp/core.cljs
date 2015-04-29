(ns csp.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]
            [cljs.core.async :refer [>! <! chan timeout]]))

(enable-console-print!)

(def working (chan))
(def texting (chan))

(defn boss-yeiling []
  (go-loop [no 1]
    (<! (timeout 1000))
    (>! working (str "bose say: work " no))
    (recur (+ no 1))))

(defn wife-texting []
  (go-loop []
    (<! (timeout 4000))
    (>! texting "wife say: come home!")
    (recur)))

(defn reading-text []
  (go-loop []
    (println (<! texting) "me: ignore")
    (recur)))

(defn work []
  (go-loop []
    (println (<! working) " me: working")
    (recur)))

(boss-yeiling)
(wife-texting)
(work)
(reading-text)

// Compiled by ClojureScript 0.0-2371
goog.provide('om_lette.core');
goog.require('cljs.core');
goog.require('om_lette.copy');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('clojure.walk');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('om_lette.copy');
goog.require('clojure.string');
goog.require('hickory.core');
goog.require('clojure.walk');
if(typeof om_lette.core.app_state !== 'undefined')
{} else
{om_lette.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["val1",(1),"val2",(1),"show",true,"vec",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null));
}
om_lette.core.init = (function init(){var main = (function (state,owner){if(typeof om_lette.core.t9770 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_lette.core.t9770 = (function (owner,state,init,meta9771){
this.owner = owner;
this.state = state;
this.init = init;
this.meta9771 = meta9771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_lette.core.t9770.cljs$lang$type = true;
om_lette.core.t9770.cljs$lang$ctorStr = "om-lette.core/t9770";
om_lette.core.t9770.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"om-lette.core/t9770");
});
om_lette.core.t9770.prototype.om$core$IRender$ = true;
om_lette.core.t9770.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_lette.core.process_template.call(null,self__.state,cljs.core.get.call(null,cljs.core.deref.call(null,om_lette.core.template_cache),"hello.html"));
});
om_lette.core.t9770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9772){var self__ = this;
var _9772__$1 = this;return self__.meta9771;
});
om_lette.core.t9770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9772,meta9771__$1){var self__ = this;
var _9772__$1 = this;return (new om_lette.core.t9770(self__.owner,self__.state,self__.init,meta9771__$1));
});
om_lette.core.__GT_t9770 = (function __GT_t9770(owner__$1,state__$1,init__$1,meta9771){return (new om_lette.core.t9770(owner__$1,state__$1,init__$1,meta9771));
});
}
return (new om_lette.core.t9770(owner,state,init,null));
});return om.core.root.call(null,main,om_lette.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("")], null));
});
om_lette.copy.load_templates.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello.html"], null),om_lette.core.init);
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val1"], null),cljs.core.inc);
}),(1000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val2"], null),cljs.core.partial.call(null,cljs.core._STAR_,(2)));
}),(2000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["show"], null),cljs.core.not);
}),(1200));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val1"], null),cljs.core.inc);
}),(3000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val2"], null),cljs.core.partial.call(null,cljs.core._STAR_,(2)));
}),(4000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["show"], null),cljs.core.not);
}),(2400));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val1"], null),cljs.core.inc);
}),(5000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val2"], null),cljs.core.partial.call(null,cljs.core._STAR_,(2)));
}),(6000));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["show"], null),cljs.core.not);
}),(3600));
setTimeout((function (){return cljs.core.swap_BANG_.call(null,om_lette.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["show"], null),cljs.core.not);
}),(4000));

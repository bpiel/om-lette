// Compiled by ClojureScript 0.0-2371
goog.provide('om_lette.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('clojure.walk');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('hickory.core');
goog.require('clojure.walk');
if(typeof om_lette.core.app_state !== 'undefined')
{} else
{om_lette.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, ["val1",(1),"val2",(1),"show",true], null));
}
if(typeof om_lette.core.template_cache !== 'undefined')
{} else
{om_lette.core.template_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
om_lette.core.has_all_keys_QMARK_ = (function has_all_keys_QMARK_(m,keys){return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys,cljs.core.select_keys.call(null,m,keys)], null)));
});
om_lette.core.make_done_loading_QMARK__fn = (function make_done_loading_QMARK__fn(names,callback){return (function (){if(cljs.core.truth_(om_lette.core.has_all_keys_QMARK_.call(null,cljs.core.deref.call(null,om_lette.core.template_cache),names)))
{return callback.call(null);
} else
{return null;
}
});
});
om_lette.core.make_template_handler = (function make_template_handler(template_name,callback){return (function handler(response){cljs.core.swap_BANG_.call(null,om_lette.core.template_cache,cljs.core.assoc,template_name,response);
return callback.call(null);
});
});
om_lette.core.getTemplate = (function getTemplate(name,handler){return ajax.core.GET.call(null,("/js/templates/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
om_lette.core.load_templates = (function load_templates(names,callback){return cljs.core.mapv.call(null,(function (p1__9686_SHARP_){return om_lette.core.getTemplate.call(null,p1__9686_SHARP_,om_lette.core.make_template_handler.call(null,p1__9686_SHARP_,om_lette.core.make_done_loading_QMARK__fn.call(null,names,callback)));
}),names);
});
om_lette.core.dbg = (function dbg(x){console.log(x);
return x;
});
om_lette.core.like_html_vec_QMARK_ = (function like_html_vec_QMARK_(h){if((cljs.core.vector_QMARK_.call(null,h)) && ((cljs.core.first.call(null,h) instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,h))))
{return h;
} else
{return null;
}
});
om_lette.core.has_om_if_QMARK_ = (function has_om_if_QMARK_(h){return new cljs.core.Keyword(null,"om-if","om-if",1184973531).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,om_lette.core.like_html_vec_QMARK_.call(null,h)));
});
/**
* @param {...*} var_args
*/
om_lette.core.cont_pass = (function() { 
var cont_pass__delegate = function (fns){return (function (v){if(cljs.core.truth_(cljs.core.not_empty.call(null,fns)))
{return cljs.core.first.call(null,fns).call(null,v,cljs.core.apply.call(null,cont_pass,cljs.core.rest.call(null,fns)));
} else
{return v;
}
});
};
var cont_pass = function (var_args){
var fns = null;if (arguments.length > 0) {
  fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cont_pass__delegate.call(this,fns);};
cont_pass.cljs$lang$maxFixedArity = 0;
cont_pass.cljs$lang$applyTo = (function (arglist__9687){
var fns = cljs.core.seq(arglist__9687);
return cont_pass__delegate(fns);
});
cont_pass.cljs$core$IFn$_invoke$arity$variadic = cont_pass__delegate;
return cont_pass;
})()
;
om_lette.core.process_template = (function process_template(html,state){return sablono.interpreter.interpret.call(null,clojure.walk.prewalk.call(null,om_lette.core.cont_pass.call(null,(function (v,f){if(typeof v === 'string')
{return clojure.string.replace.call(null,v,/\{\{(.*?)\}\}/,(function (_,b){return cljs.core.get.call(null,state,b,"");
}));
} else
{return f.call(null,v);
}
}),(function (p1__9688_SHARP_,p2__9689_SHARP_){var temp__4124__auto__ = om_lette.core.has_om_if_QMARK_.call(null,p1__9688_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var ifx = temp__4124__auto__;if(cljs.core.truth_(cljs.core.get.call(null,state,ifx)))
{return p2__9689_SHARP_.call(null,p1__9688_SHARP_);
} else
{return null;
}
} else
{return p2__9689_SHARP_.call(null,p1__9688_SHARP_);
}
})),cljs.core.first.call(null,cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,html)))));
});
om_lette.core.init = (function init(){var main = (function (state,owner){if(typeof om_lette.core.t9693 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_lette.core.t9693 = (function (owner,state,init,meta9694){
this.owner = owner;
this.state = state;
this.init = init;
this.meta9694 = meta9694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_lette.core.t9693.cljs$lang$type = true;
om_lette.core.t9693.cljs$lang$ctorStr = "om-lette.core/t9693";
om_lette.core.t9693.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"om-lette.core/t9693");
});
om_lette.core.t9693.prototype.om$core$IRender$ = true;
om_lette.core.t9693.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_lette.core.process_template.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,om_lette.core.template_cache),"hello.html"),self__.state);
});
om_lette.core.t9693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9695){var self__ = this;
var _9695__$1 = this;return self__.meta9694;
});
om_lette.core.t9693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9695,meta9694__$1){var self__ = this;
var _9695__$1 = this;return (new om_lette.core.t9693(self__.owner,self__.state,self__.init,meta9694__$1));
});
om_lette.core.__GT_t9693 = (function __GT_t9693(owner__$1,state__$1,init__$1,meta9694){return (new om_lette.core.t9693(owner__$1,state__$1,init__$1,meta9694));
});
}
return (new om_lette.core.t9693(owner,state,init,null));
});return om.core.root.call(null,main,om_lette.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
om_lette.core.load_templates.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello.html"], null),om_lette.core.init);
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

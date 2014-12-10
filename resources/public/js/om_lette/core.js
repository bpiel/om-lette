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
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('hickory.core');
goog.require('clojure.walk');
if(typeof om_lette.core.app_state !== 'undefined')
{} else
{om_lette.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["val1",(1),"val2",(1),"show",true,"vec",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null));
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
om_lette.core.load_templates = (function load_templates(names,callback){return cljs.core.mapv.call(null,(function (p1__9722_SHARP_){return om_lette.core.getTemplate.call(null,p1__9722_SHARP_,om_lette.core.make_template_handler.call(null,p1__9722_SHARP_,om_lette.core.make_done_loading_QMARK__fn.call(null,names,callback)));
}),names);
});
om_lette.core.dbg = (function dbg(x){console.log(x);
return x;
});
om_lette.core.sdbg = (function sdbg(x){console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
return x;
});
om_lette.core.nonnum = "[a-zA-Z\\*\\+!\\-\\_\\?]";
om_lette.core.valid_sym_chars = "[\\w\\d\\*\\+!\\-\\_\\?]";
om_lette.core.valid_sym = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_lette.core.nonnum)+"+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_lette.core.valid_sym_chars)+"*");
om_lette.core.om_repeat_expr = ("^=>\\s+("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_lette.core.valid_sym)+")\\s+("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_lette.core.valid_sym)+")\\s*$");
om_lette.core.like_html_vec_QMARK_ = (function like_html_vec_QMARK_(h){if((cljs.core.vector_QMARK_.call(null,h)) && ((cljs.core.first.call(null,h) instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,h))))
{return h;
} else
{return null;
}
});
om_lette.core.has_om_if_QMARK_ = (function has_om_if_QMARK_(h){return new cljs.core.Keyword(null,"om-if","om-if",1184973531).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,om_lette.core.like_html_vec_QMARK_.call(null,h)));
});
om_lette.core.has_om_repeat_QMARK_ = (function has_om_repeat_QMARK_(h){return cljs.core.not_empty.call(null,cljs.core.rest.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,om_lette.core.om_repeat_expr),(function (p1__9723_SHARP_){var or__3640__auto__ = p1__9723_SHARP_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return "";
}
}).call(null,new cljs.core.Keyword(null,"om-repeat","om-repeat",-928707308).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,om_lette.core.like_html_vec_QMARK_.call(null,h)))))));
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
cont_pass.cljs$lang$applyTo = (function (arglist__9724){
var fns = cljs.core.seq(arglist__9724);
return cont_pass__delegate(fns);
});
cont_pass.cljs$core$IFn$_invoke$arity$variadic = cont_pass__delegate;
return cont_pass;
})()
;
/**
* @param {...*} var_args
*/
om_lette.core.strip_attrs = (function() { 
var strip_attrs__delegate = function (tag,xattrs){var vec__9726 = tag;var name = cljs.core.nth.call(null,vec__9726,(0),null);var attrs = cljs.core.nth.call(null,vec__9726,(1),null);var rest = cljs.core.nthnext.call(null,vec__9726,(2));return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.apply.call(null,cljs.core.dissoc,attrs,xattrs)], null),rest));
};
var strip_attrs = function (tag,var_args){
var xattrs = null;if (arguments.length > 1) {
  xattrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strip_attrs__delegate.call(this,tag,xattrs);};
strip_attrs.cljs$lang$maxFixedArity = 1;
strip_attrs.cljs$lang$applyTo = (function (arglist__9727){
var tag = cljs.core.first(arglist__9727);
var xattrs = cljs.core.rest(arglist__9727);
return strip_attrs__delegate(tag,xattrs);
});
strip_attrs.cljs$core$IFn$_invoke$arity$variadic = strip_attrs__delegate;
return strip_attrs;
})()
;
om_lette.core.drop_delim = (function drop_delim(x){return cljs.core.filter.call(null,(function (p1__9728_SHARP_){return cljs.core.not.call(null,cljs.core.PersistentHashSet.fromArray(["",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(30))))], true).call(null,p1__9728_SHARP_));
}),x);
});
om_lette.core.split_dbl_brackets = (function split_dbl_brackets(t){return (function (p1__9729_SHARP_){return cljs.core.map.call(null,(function (x){return clojure.string.split.call(null,x,cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(29))))));
}),p1__9729_SHARP_);
}).call(null,clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,t,"{{",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(28)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(29))))),"}}",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(29)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(30)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(28))))),cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(28)))))));
});
om_lette.core.tokenize_string = (function tokenize_string(p){return cljs.core.map.call(null,(function (x){var pred__9735 = (function (p1__9730_SHARP_,p2__9731_SHARP_){return cljs.core._EQ_.call(null,p1__9730_SHARP_,cljs.core.count.call(null,p2__9731_SHARP_));
});var expr__9736 = x;if(pred__9735.call(null,(0),expr__9736))
{return null;
} else
{if(pred__9735.call(null,(1),expr__9736))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om-text","om-text",-1248505803),cljs.core.first.call(null,x)], null);
} else
{if(pred__9735.call(null,(2),expr__9736))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om-text","om-text",-1248505803),cljs.core.first.call(null,om_lette.core.drop_delim.call(null,x))], null);
} else
{if(pred__9735.call(null,(3),expr__9736))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om-code","om-code",815069845),cljs.core.second.call(null,x)], null);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9736))));
}
}
}
}
}),p);
});
om_lette.core.grab_om_attrs = (function grab_om_attrs(a,ks){return cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,a,ks),new cljs.core.Keyword(null,"om-lette","om-lette",1214452781),cljs.core.select_keys.call(null,a,ks));
});
om_lette.core.html__GT_template = (function html__GT_template(h){return clojure.walk.prewalk.call(null,cljs.core.first.call(null,cljs.core.map.call(null,hickory.core.parse_fragment,hickory.core.as_hiccup)),((typeof h === 'string')?om_lette.core.tokenize_string.call(null,h):(cljs.core.truth_(om_lette.core.like_html_vec_QMARK_.call(null,h))?cljs.core.update_in.call(null,h,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),om_lette.core.grab_om_attrs):h
)));
});
om_lette.core.process_html_struc = (function process_html_struc(state,html){return clojure.walk.prewalk.call(null,om_lette.core.cont_pass.call(null,(function (v,f){if(typeof v === 'string')
{return clojure.string.replace.call(null,v,/\{\{(.*?)\}\}/,(function (_,b){return cljs.core.get.call(null,state,b,"");
}));
} else
{return f.call(null,v);
}
}),(function (v,f){var temp__4124__auto___9741 = om_lette.core.has_om_if_QMARK_.call(null,v);if(cljs.core.truth_(temp__4124__auto___9741))
{var ifx_9742 = temp__4124__auto___9741;if(cljs.core.truth_(cljs.core.get.call(null,state,ifx_9742)))
{f.call(null,v);
} else
{}
} else
{}
return f.call(null,v);
}),(function (v,f){var temp__4124__auto__ = om_lette.core.has_om_repeat_QMARK_.call(null,v);if(cljs.core.truth_(temp__4124__auto__))
{var vec__9740 = temp__4124__auto__;var lst = cljs.core.nth.call(null,vec__9740,(0),null);var kw = cljs.core.nth.call(null,vec__9740,(1),null);return f.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-om","data-om",-691292290),"bill"], null)], null),cljs.core.mapv.call(null,((function (vec__9740,lst,kw,temp__4124__auto__){
return (function (p1__9738_SHARP_){return process_html_struc.call(null,cljs.core.assoc.call(null,state,kw,p1__9738_SHARP_),om_lette.core.strip_attrs.call(null,v,new cljs.core.Keyword(null,"om-repeat","om-repeat",-928707308)));
});})(vec__9740,lst,kw,temp__4124__auto__))
,cljs.core.get.call(null,state,lst)))));
} else
{return f.call(null,v);
}
})),html);
});
om_lette.core.process_template = (function process_template(state,html_string){return sablono.interpreter.interpret.call(null,om_lette.core.process_html_struc.call(null,state,cljs.core.first.call(null,cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,html_string)))));
});
om_lette.core.init = (function init(){var main = (function (state,owner){if(typeof om_lette.core.t9746 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_lette.core.t9746 = (function (owner,state,init,meta9747){
this.owner = owner;
this.state = state;
this.init = init;
this.meta9747 = meta9747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_lette.core.t9746.cljs$lang$type = true;
om_lette.core.t9746.cljs$lang$ctorStr = "om-lette.core/t9746";
om_lette.core.t9746.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"om-lette.core/t9746");
});
om_lette.core.t9746.prototype.om$core$IRender$ = true;
om_lette.core.t9746.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_lette.core.process_template.call(null,self__.state,cljs.core.get.call(null,cljs.core.deref.call(null,om_lette.core.template_cache),"hello.html"));
});
om_lette.core.t9746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9748){var self__ = this;
var _9748__$1 = this;return self__.meta9747;
});
om_lette.core.t9746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9748,meta9747__$1){var self__ = this;
var _9748__$1 = this;return (new om_lette.core.t9746(self__.owner,self__.state,self__.init,meta9747__$1));
});
om_lette.core.__GT_t9746 = (function __GT_t9746(owner__$1,state__$1,init__$1,meta9747){return (new om_lette.core.t9746(owner__$1,state__$1,init__$1,meta9747));
});
}
return (new om_lette.core.t9746(owner,state,init,null));
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

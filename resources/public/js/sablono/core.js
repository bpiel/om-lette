// Compiled by ClojureScript 0.0-2371
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__9117__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__9116 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__9116,(0),null);var body = cljs.core.nthnext.call(null,vec__9116,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__9117 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9117__delegate.call(this,args);};
G__9117.cljs$lang$maxFixedArity = 0;
G__9117.cljs$lang$applyTo = (function (arglist__9118){
var args = cljs.core.seq(arglist__9118);
return G__9117__delegate(args);
});
G__9117.cljs$core$IFn$_invoke$arity$variadic = G__9117__delegate;
return G__9117;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4379__auto__ = (function iter__9123(s__9124){return (new cljs.core.LazySeq(null,(function (){var s__9124__$1 = s__9124;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9124__$1);if(temp__4126__auto__)
{var s__9124__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9124__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9124__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9126 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9125 = (0);while(true){
if((i__9125 < size__4378__auto__))
{var args = cljs.core._nth.call(null,c__4377__auto__,i__9125);cljs.core.chunk_append.call(null,b__9126,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__9127 = (i__9125 + (1));
i__9125 = G__9127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9126),iter__9123.call(null,cljs.core.chunk_rest.call(null,s__9124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9126),null);
}
} else
{var args = cljs.core.first.call(null,s__9124__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__9123.call(null,cljs.core.rest.call(null,s__9124__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4379__auto__ = (function iter__9132(s__9133){return (new cljs.core.LazySeq(null,(function (){var s__9133__$1 = s__9133;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9133__$1);if(temp__4126__auto__)
{var s__9133__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9133__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9133__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9135 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9134 = (0);while(true){
if((i__9134 < size__4378__auto__))
{var style = cljs.core._nth.call(null,c__4377__auto__,i__9134);cljs.core.chunk_append.call(null,b__9135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__9136 = (i__9134 + (1));
i__9134 = G__9136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9135),iter__9132.call(null,cljs.core.chunk_rest.call(null,s__9133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9135),null);
}
} else
{var style = cljs.core.first.call(null,s__9133__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__9132.call(null,cljs.core.rest.call(null,s__9133__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__9137){
var styles = cljs.core.seq(arglist__9137);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to9138 = (function() { 
var link_to9138__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to9138 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to9138__delegate.call(this,url,content);};
link_to9138.cljs$lang$maxFixedArity = 1;
link_to9138.cljs$lang$applyTo = (function (arglist__9139){
var url = cljs.core.first(arglist__9139);
var content = cljs.core.rest(arglist__9139);
return link_to9138__delegate(url,content);
});
link_to9138.cljs$core$IFn$_invoke$arity$variadic = link_to9138__delegate;
return link_to9138;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to9138);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to9140 = (function() { 
var mail_to9140__delegate = function (e_mail,p__9141){var vec__9143 = p__9141;var content = cljs.core.nth.call(null,vec__9143,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3640__auto__ = content;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to9140 = function (e_mail,var_args){
var p__9141 = null;if (arguments.length > 1) {
  p__9141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to9140__delegate.call(this,e_mail,p__9141);};
mail_to9140.cljs$lang$maxFixedArity = 1;
mail_to9140.cljs$lang$applyTo = (function (arglist__9144){
var e_mail = cljs.core.first(arglist__9144);
var p__9141 = cljs.core.rest(arglist__9144);
return mail_to9140__delegate(e_mail,p__9141);
});
mail_to9140.cljs$core$IFn$_invoke$arity$variadic = mail_to9140__delegate;
return mail_to9140;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to9140);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list9145 = (function unordered_list9145(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4379__auto__ = (function iter__9150(s__9151){return (new cljs.core.LazySeq(null,(function (){var s__9151__$1 = s__9151;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9151__$1);if(temp__4126__auto__)
{var s__9151__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9151__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9151__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9153 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9152 = (0);while(true){
if((i__9152 < size__4378__auto__))
{var x = cljs.core._nth.call(null,c__4377__auto__,i__9152);cljs.core.chunk_append.call(null,b__9153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__9154 = (i__9152 + (1));
i__9152 = G__9154;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9153),iter__9150.call(null,cljs.core.chunk_rest.call(null,s__9151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9153),null);
}
} else
{var x = cljs.core.first.call(null,s__9151__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__9150.call(null,cljs.core.rest.call(null,s__9151__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list9145);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list9155 = (function ordered_list9155(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4379__auto__ = (function iter__9160(s__9161){return (new cljs.core.LazySeq(null,(function (){var s__9161__$1 = s__9161;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9161__$1);if(temp__4126__auto__)
{var s__9161__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9161__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9161__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9163 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9162 = (0);while(true){
if((i__9162 < size__4378__auto__))
{var x = cljs.core._nth.call(null,c__4377__auto__,i__9162);cljs.core.chunk_append.call(null,b__9163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__9164 = (i__9162 + (1));
i__9162 = G__9164;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9163),iter__9160.call(null,cljs.core.chunk_rest.call(null,s__9161__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9163),null);
}
} else
{var x = cljs.core.first.call(null,s__9161__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__9160.call(null,cljs.core.rest.call(null,s__9161__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list9155);
/**
* Create an image element.
*/
sablono.core.image9165 = (function() {
var image9165 = null;
var image9165__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image9165__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image9165 = function(src,alt){
switch(arguments.length){
case 1:
return image9165__1.call(this,src);
case 2:
return image9165__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image9165.cljs$core$IFn$_invoke$arity$1 = image9165__1;
image9165.cljs$core$IFn$_invoke$arity$2 = image9165__2;
return image9165;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image9165);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__9166_SHARP_,p2__9167_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9166_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9167_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__9168_SHARP_,p2__9169_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9168_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9169_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field9170 = (function() {
var color_field9170 = null;
var color_field9170__1 = (function (name__5129__auto__){return color_field9170.call(null,name__5129__auto__,null);
});
var color_field9170__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5129__auto__,value__5130__auto__);
});
color_field9170 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return color_field9170__1.call(this,name__5129__auto__);
case 2:
return color_field9170__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field9170.cljs$core$IFn$_invoke$arity$1 = color_field9170__1;
color_field9170.cljs$core$IFn$_invoke$arity$2 = color_field9170__2;
return color_field9170;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field9170);
/**
* Creates a date input field.
*/
sablono.core.date_field9171 = (function() {
var date_field9171 = null;
var date_field9171__1 = (function (name__5129__auto__){return date_field9171.call(null,name__5129__auto__,null);
});
var date_field9171__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5129__auto__,value__5130__auto__);
});
date_field9171 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return date_field9171__1.call(this,name__5129__auto__);
case 2:
return date_field9171__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field9171.cljs$core$IFn$_invoke$arity$1 = date_field9171__1;
date_field9171.cljs$core$IFn$_invoke$arity$2 = date_field9171__2;
return date_field9171;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field9171);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field9172 = (function() {
var datetime_field9172 = null;
var datetime_field9172__1 = (function (name__5129__auto__){return datetime_field9172.call(null,name__5129__auto__,null);
});
var datetime_field9172__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5129__auto__,value__5130__auto__);
});
datetime_field9172 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return datetime_field9172__1.call(this,name__5129__auto__);
case 2:
return datetime_field9172__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field9172.cljs$core$IFn$_invoke$arity$1 = datetime_field9172__1;
datetime_field9172.cljs$core$IFn$_invoke$arity$2 = datetime_field9172__2;
return datetime_field9172;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field9172);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field9173 = (function() {
var datetime_local_field9173 = null;
var datetime_local_field9173__1 = (function (name__5129__auto__){return datetime_local_field9173.call(null,name__5129__auto__,null);
});
var datetime_local_field9173__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5129__auto__,value__5130__auto__);
});
datetime_local_field9173 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return datetime_local_field9173__1.call(this,name__5129__auto__);
case 2:
return datetime_local_field9173__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field9173.cljs$core$IFn$_invoke$arity$1 = datetime_local_field9173__1;
datetime_local_field9173.cljs$core$IFn$_invoke$arity$2 = datetime_local_field9173__2;
return datetime_local_field9173;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field9173);
/**
* Creates a email input field.
*/
sablono.core.email_field9174 = (function() {
var email_field9174 = null;
var email_field9174__1 = (function (name__5129__auto__){return email_field9174.call(null,name__5129__auto__,null);
});
var email_field9174__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5129__auto__,value__5130__auto__);
});
email_field9174 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return email_field9174__1.call(this,name__5129__auto__);
case 2:
return email_field9174__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field9174.cljs$core$IFn$_invoke$arity$1 = email_field9174__1;
email_field9174.cljs$core$IFn$_invoke$arity$2 = email_field9174__2;
return email_field9174;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field9174);
/**
* Creates a file input field.
*/
sablono.core.file_field9175 = (function() {
var file_field9175 = null;
var file_field9175__1 = (function (name__5129__auto__){return file_field9175.call(null,name__5129__auto__,null);
});
var file_field9175__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5129__auto__,value__5130__auto__);
});
file_field9175 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return file_field9175__1.call(this,name__5129__auto__);
case 2:
return file_field9175__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field9175.cljs$core$IFn$_invoke$arity$1 = file_field9175__1;
file_field9175.cljs$core$IFn$_invoke$arity$2 = file_field9175__2;
return file_field9175;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field9175);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field9176 = (function() {
var hidden_field9176 = null;
var hidden_field9176__1 = (function (name__5129__auto__){return hidden_field9176.call(null,name__5129__auto__,null);
});
var hidden_field9176__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5129__auto__,value__5130__auto__);
});
hidden_field9176 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return hidden_field9176__1.call(this,name__5129__auto__);
case 2:
return hidden_field9176__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field9176.cljs$core$IFn$_invoke$arity$1 = hidden_field9176__1;
hidden_field9176.cljs$core$IFn$_invoke$arity$2 = hidden_field9176__2;
return hidden_field9176;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field9176);
/**
* Creates a month input field.
*/
sablono.core.month_field9177 = (function() {
var month_field9177 = null;
var month_field9177__1 = (function (name__5129__auto__){return month_field9177.call(null,name__5129__auto__,null);
});
var month_field9177__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5129__auto__,value__5130__auto__);
});
month_field9177 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return month_field9177__1.call(this,name__5129__auto__);
case 2:
return month_field9177__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field9177.cljs$core$IFn$_invoke$arity$1 = month_field9177__1;
month_field9177.cljs$core$IFn$_invoke$arity$2 = month_field9177__2;
return month_field9177;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field9177);
/**
* Creates a number input field.
*/
sablono.core.number_field9178 = (function() {
var number_field9178 = null;
var number_field9178__1 = (function (name__5129__auto__){return number_field9178.call(null,name__5129__auto__,null);
});
var number_field9178__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5129__auto__,value__5130__auto__);
});
number_field9178 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return number_field9178__1.call(this,name__5129__auto__);
case 2:
return number_field9178__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field9178.cljs$core$IFn$_invoke$arity$1 = number_field9178__1;
number_field9178.cljs$core$IFn$_invoke$arity$2 = number_field9178__2;
return number_field9178;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field9178);
/**
* Creates a password input field.
*/
sablono.core.password_field9179 = (function() {
var password_field9179 = null;
var password_field9179__1 = (function (name__5129__auto__){return password_field9179.call(null,name__5129__auto__,null);
});
var password_field9179__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5129__auto__,value__5130__auto__);
});
password_field9179 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return password_field9179__1.call(this,name__5129__auto__);
case 2:
return password_field9179__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field9179.cljs$core$IFn$_invoke$arity$1 = password_field9179__1;
password_field9179.cljs$core$IFn$_invoke$arity$2 = password_field9179__2;
return password_field9179;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field9179);
/**
* Creates a range input field.
*/
sablono.core.range_field9180 = (function() {
var range_field9180 = null;
var range_field9180__1 = (function (name__5129__auto__){return range_field9180.call(null,name__5129__auto__,null);
});
var range_field9180__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5129__auto__,value__5130__auto__);
});
range_field9180 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return range_field9180__1.call(this,name__5129__auto__);
case 2:
return range_field9180__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field9180.cljs$core$IFn$_invoke$arity$1 = range_field9180__1;
range_field9180.cljs$core$IFn$_invoke$arity$2 = range_field9180__2;
return range_field9180;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field9180);
/**
* Creates a search input field.
*/
sablono.core.search_field9181 = (function() {
var search_field9181 = null;
var search_field9181__1 = (function (name__5129__auto__){return search_field9181.call(null,name__5129__auto__,null);
});
var search_field9181__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5129__auto__,value__5130__auto__);
});
search_field9181 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return search_field9181__1.call(this,name__5129__auto__);
case 2:
return search_field9181__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field9181.cljs$core$IFn$_invoke$arity$1 = search_field9181__1;
search_field9181.cljs$core$IFn$_invoke$arity$2 = search_field9181__2;
return search_field9181;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field9181);
/**
* Creates a tel input field.
*/
sablono.core.tel_field9182 = (function() {
var tel_field9182 = null;
var tel_field9182__1 = (function (name__5129__auto__){return tel_field9182.call(null,name__5129__auto__,null);
});
var tel_field9182__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5129__auto__,value__5130__auto__);
});
tel_field9182 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return tel_field9182__1.call(this,name__5129__auto__);
case 2:
return tel_field9182__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field9182.cljs$core$IFn$_invoke$arity$1 = tel_field9182__1;
tel_field9182.cljs$core$IFn$_invoke$arity$2 = tel_field9182__2;
return tel_field9182;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field9182);
/**
* Creates a text input field.
*/
sablono.core.text_field9183 = (function() {
var text_field9183 = null;
var text_field9183__1 = (function (name__5129__auto__){return text_field9183.call(null,name__5129__auto__,null);
});
var text_field9183__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5129__auto__,value__5130__auto__);
});
text_field9183 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return text_field9183__1.call(this,name__5129__auto__);
case 2:
return text_field9183__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field9183.cljs$core$IFn$_invoke$arity$1 = text_field9183__1;
text_field9183.cljs$core$IFn$_invoke$arity$2 = text_field9183__2;
return text_field9183;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field9183);
/**
* Creates a time input field.
*/
sablono.core.time_field9184 = (function() {
var time_field9184 = null;
var time_field9184__1 = (function (name__5129__auto__){return time_field9184.call(null,name__5129__auto__,null);
});
var time_field9184__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5129__auto__,value__5130__auto__);
});
time_field9184 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return time_field9184__1.call(this,name__5129__auto__);
case 2:
return time_field9184__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field9184.cljs$core$IFn$_invoke$arity$1 = time_field9184__1;
time_field9184.cljs$core$IFn$_invoke$arity$2 = time_field9184__2;
return time_field9184;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field9184);
/**
* Creates a url input field.
*/
sablono.core.url_field9185 = (function() {
var url_field9185 = null;
var url_field9185__1 = (function (name__5129__auto__){return url_field9185.call(null,name__5129__auto__,null);
});
var url_field9185__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5129__auto__,value__5130__auto__);
});
url_field9185 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return url_field9185__1.call(this,name__5129__auto__);
case 2:
return url_field9185__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field9185.cljs$core$IFn$_invoke$arity$1 = url_field9185__1;
url_field9185.cljs$core$IFn$_invoke$arity$2 = url_field9185__2;
return url_field9185;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field9185);
/**
* Creates a week input field.
*/
sablono.core.week_field9186 = (function() {
var week_field9186 = null;
var week_field9186__1 = (function (name__5129__auto__){return week_field9186.call(null,name__5129__auto__,null);
});
var week_field9186__2 = (function (name__5129__auto__,value__5130__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5129__auto__,value__5130__auto__);
});
week_field9186 = function(name__5129__auto__,value__5130__auto__){
switch(arguments.length){
case 1:
return week_field9186__1.call(this,name__5129__auto__);
case 2:
return week_field9186__2.call(this,name__5129__auto__,value__5130__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field9186.cljs$core$IFn$_invoke$arity$1 = week_field9186__1;
week_field9186.cljs$core$IFn$_invoke$arity$2 = week_field9186__2;
return week_field9186;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field9186);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box9187 = (function() {
var check_box9187 = null;
var check_box9187__1 = (function (name){return check_box9187.call(null,name,null);
});
var check_box9187__2 = (function (name,checked_QMARK_){return check_box9187.call(null,name,checked_QMARK_,"true");
});
var check_box9187__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box9187 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box9187__1.call(this,name);
case 2:
return check_box9187__2.call(this,name,checked_QMARK_);
case 3:
return check_box9187__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box9187.cljs$core$IFn$_invoke$arity$1 = check_box9187__1;
check_box9187.cljs$core$IFn$_invoke$arity$2 = check_box9187__2;
check_box9187.cljs$core$IFn$_invoke$arity$3 = check_box9187__3;
return check_box9187;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box9187);
/**
* Creates a radio button.
*/
sablono.core.radio_button9188 = (function() {
var radio_button9188 = null;
var radio_button9188__1 = (function (group){return radio_button9188.call(null,group,null);
});
var radio_button9188__2 = (function (group,checked_QMARK_){return radio_button9188.call(null,group,checked_QMARK_,"true");
});
var radio_button9188__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button9188 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button9188__1.call(this,group);
case 2:
return radio_button9188__2.call(this,group,checked_QMARK_);
case 3:
return radio_button9188__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button9188.cljs$core$IFn$_invoke$arity$1 = radio_button9188__1;
radio_button9188.cljs$core$IFn$_invoke$arity$2 = radio_button9188__2;
radio_button9188.cljs$core$IFn$_invoke$arity$3 = radio_button9188__3;
return radio_button9188;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button9188);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options9189 = (function() {
var select_options9189 = null;
var select_options9189__1 = (function (coll){return select_options9189.call(null,coll,null);
});
var select_options9189__2 = (function (coll,selected){var iter__4379__auto__ = (function iter__9198(s__9199){return (new cljs.core.LazySeq(null,(function (){var s__9199__$1 = s__9199;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9199__$1);if(temp__4126__auto__)
{var s__9199__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9199__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9199__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9201 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9200 = (0);while(true){
if((i__9200 < size__4378__auto__))
{var x = cljs.core._nth.call(null,c__4377__auto__,i__9200);cljs.core.chunk_append.call(null,b__9201,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9204 = x;var text = cljs.core.nth.call(null,vec__9204,(0),null);var val = cljs.core.nth.call(null,vec__9204,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__9204,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options9189.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__9206 = (i__9200 + (1));
i__9200 = G__9206;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9201),iter__9198.call(null,cljs.core.chunk_rest.call(null,s__9199__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9201),null);
}
} else
{var x = cljs.core.first.call(null,s__9199__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9205 = x;var text = cljs.core.nth.call(null,vec__9205,(0),null);var val = cljs.core.nth.call(null,vec__9205,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__9205,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options9189.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__9198.call(null,cljs.core.rest.call(null,s__9199__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,coll);
});
select_options9189 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options9189__1.call(this,coll);
case 2:
return select_options9189__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options9189.cljs$core$IFn$_invoke$arity$1 = select_options9189__1;
select_options9189.cljs$core$IFn$_invoke$arity$2 = select_options9189__2;
return select_options9189;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options9189);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down9207 = (function() {
var drop_down9207 = null;
var drop_down9207__2 = (function (name,options){return drop_down9207.call(null,name,options,null);
});
var drop_down9207__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down9207 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down9207__2.call(this,name,options);
case 3:
return drop_down9207__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down9207.cljs$core$IFn$_invoke$arity$2 = drop_down9207__2;
drop_down9207.cljs$core$IFn$_invoke$arity$3 = drop_down9207__3;
return drop_down9207;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down9207);
/**
* Creates a text area element.
*/
sablono.core.text_area9208 = (function() {
var text_area9208 = null;
var text_area9208__1 = (function (name){return text_area9208.call(null,name,null);
});
var text_area9208__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area9208 = function(name,value){
switch(arguments.length){
case 1:
return text_area9208__1.call(this,name);
case 2:
return text_area9208__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area9208.cljs$core$IFn$_invoke$arity$1 = text_area9208__1;
text_area9208.cljs$core$IFn$_invoke$arity$2 = text_area9208__2;
return text_area9208;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area9208);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label9209 = (function label9209(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label9209);
/**
* Creates a submit button.
*/
sablono.core.submit_button9210 = (function submit_button9210(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button9210);
/**
* Creates a form reset button.
*/
sablono.core.reset_button9211 = (function reset_button9211(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button9211);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to9212 = (function() { 
var form_to9212__delegate = function (p__9213,body){var vec__9215 = p__9213;var method = cljs.core.nth.call(null,vec__9215,(0),null);var action = cljs.core.nth.call(null,vec__9215,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to9212 = function (p__9213,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to9212__delegate.call(this,p__9213,body);};
form_to9212.cljs$lang$maxFixedArity = 1;
form_to9212.cljs$lang$applyTo = (function (arglist__9216){
var p__9213 = cljs.core.first(arglist__9216);
var body = cljs.core.rest(arglist__9216);
return form_to9212__delegate(p__9213,body);
});
form_to9212.cljs$core$IFn$_invoke$arity$variadic = form_to9212__delegate;
return form_to9212;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to9212);

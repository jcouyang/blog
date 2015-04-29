// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
clojure.browser.repl.xpc_connection = (function (){var G__16647 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16647) : cljs.core.atom.call(null,G__16647));
})();
clojure.browser.repl.repl_print = (function repl_print(data){
var temp__4124__auto__ = (function (){var G__16649 = clojure.browser.repl.xpc_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16649) : cljs.core.deref.call(null,G__16649));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var conn = temp__4124__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$58,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
} else {
return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$59,cljs.core.constant$keyword$63,cljs.core.constant$keyword$60,[cljs.core.str(eval(block))].join('')], null);
}catch (e16651){var e = e16651;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$59,cljs.core.constant$keyword$62,cljs.core.constant$keyword$60,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$61,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__2 = (function (url,data){
return send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
});
var send_print__3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$64,((function (conn){
return (function (_){
if((n < (10))){
return send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
});
send_print = function(url,data,n){
switch(arguments.length){
case 2:
return send_print__2.call(this,url,data);
case 3:
return send_print__3.call(this,url,data,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send_print.cljs$core$IFn$_invoke$arity$2 = send_print__2;
send_print.cljs$core$IFn$_invoke$arity$3 = send_print__3;
return send_print;
})()
;
clojure.browser.repl.order = (function (){var G__16658 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16658) : cljs.core.atom.call(null,G__16658));
})();
clojure.browser.repl.wrap_message = (function wrap_message(t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$65,t,cljs.core.constant$keyword$66,data,cljs.core.constant$keyword$67,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__4124__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__4124__auto__)){
var repl_connection = temp__4124__auto__;
var connection = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.constant$keyword$63,((function (connection,repl_connection,temp__4124__auto__){
return (function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$68,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$69,((function (connection,repl_connection,temp__4124__auto__){
return (function (data){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$70,data));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$58,((function (connection,repl_connection,temp__4124__auto__){
return (function (data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$58,data));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.constantly(null));

var G__16662 = ((function (connection,repl_connection,temp__4124__auto__){
return (function (){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$71,"ready"));
});})(connection,repl_connection,temp__4124__auto__))
;
var G__16663 = (50);
return setTimeout(G__16662,G__16663);
} else {
var G__16664 = "No 'xpc' param provided to child iframe.";
return alert(G__16664);
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$68,((function (repl_connection){
return (function (js){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$69,clojure.browser.repl.evaluate_javascript(repl_connection,js));
});})(repl_connection))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(repl_connection))
);

if(cljs.core.truth_(COMPILED)){
return null;
} else {
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gntp,repl_connection){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp,repl_connection))
,cljs.core.js_keys(gntp)));
})();

goog.isProvided_ = ((function (repl_connection){
return (function (_){
return false;
});})(repl_connection))
;

return goog.require = ((function (repl_connection){
return (function (name,reload){
if(cljs.core.truth_((function (){var or__3772__auto__ = !(cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,name));
if(or__3772__auto__){
return or__3772__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3772__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return document.body.appendChild((function (){var script = document.createElement("script");
script.type = "text/javascript";

script.src = [cljs.core.str(goog.basePath),cljs.core.str((goog.dependencies_.nameToPath[name]))].join('');

return script;
})());
} else {
return null;
}
});})(repl_connection))
;
}
});

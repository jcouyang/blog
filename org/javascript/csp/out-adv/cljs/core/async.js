// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t20460 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20460 = (function (f,fn_handler,meta20461){
this.f = f;
this.fn_handler = fn_handler;
this.meta20461 = meta20461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20462){
var self__ = this;
var _20462__$1 = this;
return self__.meta20461;
});

cljs.core.async.t20460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20462,meta20461__$1){
var self__ = this;
var _20462__$1 = this;
return (new cljs.core.async.t20460(self__.f,self__.fn_handler,meta20461__$1));
});

cljs.core.async.t20460.cljs$lang$type = true;

cljs.core.async.t20460.cljs$lang$ctorStr = "cljs.core.async/t20460";

cljs.core.async.t20460.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t20460");
});

cljs.core.async.__GT_t20460 = (function __GT_t20460(f__$1,fn_handler__$1,meta20461){
return (new cljs.core.async.t20460(f__$1,fn_handler__$1,meta20461));
});

}

return (new cljs.core.async.t20460(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,20,cljs.core.constant$keyword$33,16,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,13,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__20464 = buff;
if(G__20464){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20464.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20464.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20464);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_20481 = (function (){var G__20478 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20478) : cljs.core.deref.call(null,G__20478));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20479_20482 = val_20481;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20479_20482) : fn1.call(null,G__20479_20482));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20481,ret){
return (function (){
var G__20480 = val_20481;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20480) : fn1.call(null,G__20480));
});})(val_20481,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__20491 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20491) : cljs.core.deref.call(null,G__20491));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__20492 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20492) : cljs.core.deref.call(null,G__20492));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20493_20495 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20493_20495) : fn1.call(null,G__20493_20495));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__20494 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20494) : fn1.call(null,G__20494));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4659__auto___20496 = n;
var x_20497 = (0);
while(true){
if((x_20497 < n__4659__auto___20496)){
(a[x_20497] = (0));

var G__20498 = (x_20497 + (1));
x_20497 = G__20498;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20499 = (i + (1));
i = G__20499;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__20507 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20507) : cljs.core.atom.call(null,G__20507));
})();
if(typeof cljs.core.async.t20508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20508 = (function (flag,alt_flag,meta20509){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20509 = meta20509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20508.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20511 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20511) : cljs.core.deref.call(null,G__20511));
});})(flag))
;

cljs.core.async.t20508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20512_20514 = self__.flag;
var G__20513_20515 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20512_20514,G__20513_20515) : cljs.core.reset_BANG_.call(null,G__20512_20514,G__20513_20515));

return true;
});})(flag))
;

cljs.core.async.t20508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20510){
var self__ = this;
var _20510__$1 = this;
return self__.meta20509;
});})(flag))
;

cljs.core.async.t20508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20510,meta20509__$1){
var self__ = this;
var _20510__$1 = this;
return (new cljs.core.async.t20508(self__.flag,self__.alt_flag,meta20509__$1));
});})(flag))
;

cljs.core.async.t20508.cljs$lang$type = true;

cljs.core.async.t20508.cljs$lang$ctorStr = "cljs.core.async/t20508";

cljs.core.async.t20508.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t20508");
});})(flag))
;

cljs.core.async.__GT_t20508 = ((function (flag){
return (function __GT_t20508(flag__$1,alt_flag__$1,meta20509){
return (new cljs.core.async.t20508(flag__$1,alt_flag__$1,meta20509));
});})(flag))
;

}

return (new cljs.core.async.t20508(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,15,cljs.core.constant$keyword$33,146,cljs.core.constant$keyword$34,5,cljs.core.constant$keyword$35,141,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20519 = (function (cb,flag,alt_handler,meta20520){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20520 = meta20520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t20519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20521){
var self__ = this;
var _20521__$1 = this;
return self__.meta20520;
});

cljs.core.async.t20519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20521,meta20520__$1){
var self__ = this;
var _20521__$1 = this;
return (new cljs.core.async.t20519(self__.cb,self__.flag,self__.alt_handler,meta20520__$1));
});

cljs.core.async.t20519.cljs$lang$type = true;

cljs.core.async.t20519.cljs$lang$ctorStr = "cljs.core.async/t20519";

cljs.core.async.t20519.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t20519");
});

cljs.core.async.__GT_t20519 = (function __GT_t20519(cb__$1,flag__$1,alt_handler__$1,meta20520){
return (new cljs.core.async.t20519(cb__$1,flag__$1,alt_handler__$1,meta20520));
});

}

return (new cljs.core.async.t20519(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,11,cljs.core.constant$keyword$33,154,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,149,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__20529 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20529) : port.call(null,G__20529));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__20530 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20530) : port.call(null,G__20530));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20522_SHARP_){
var G__20531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20522_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20531) : fret.call(null,G__20531));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20523_SHARP_){
var G__20532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20523_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20532) : fret.call(null,G__20532));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20533 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20533) : cljs.core.deref.call(null,G__20533));
})(),(function (){var or__3772__auto__ = wport;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20534 = (i + (1));
i = G__20534;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3772__auto__ = ret;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$31)){
var temp__4126__auto__ = (function (){var and__3760__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3760__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3760__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$31], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20535){
var map__20537 = p__20535;
var map__20537__$1 = ((cljs.core.seq_QMARK_(map__20537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20537):map__20537);
var opts = map__20537__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20535 = null;
if (arguments.length > 1) {
var G__20538__i = 0, G__20538__a = new Array(arguments.length -  1);
while (G__20538__i < G__20538__a.length) {G__20538__a[G__20538__i] = arguments[G__20538__i + 1]; ++G__20538__i;}
  p__20535 = new cljs.core.IndexedSeq(G__20538__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__20535);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20539){
var ports = cljs.core.first(arglist__20539);
var p__20535 = cljs.core.rest(arglist__20539);
return alts_BANG___delegate(ports,p__20535);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6063__auto___20637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___20637){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___20637){
return (function (state_20613){
var state_val_20614 = (state_20613[(1)]);
if((state_val_20614 === (7))){
var inst_20609 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20615_20638 = state_20613__$1;
(statearr_20615_20638[(2)] = inst_20609);

(statearr_20615_20638[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (1))){
var state_20613__$1 = state_20613;
var statearr_20616_20639 = state_20613__$1;
(statearr_20616_20639[(2)] = null);

(statearr_20616_20639[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (4))){
var inst_20592 = (state_20613[(7)]);
var inst_20592__$1 = (state_20613[(2)]);
var inst_20593 = (inst_20592__$1 == null);
var state_20613__$1 = (function (){var statearr_20617 = state_20613;
(statearr_20617[(7)] = inst_20592__$1);

return statearr_20617;
})();
if(cljs.core.truth_(inst_20593)){
var statearr_20618_20640 = state_20613__$1;
(statearr_20618_20640[(1)] = (5));

} else {
var statearr_20619_20641 = state_20613__$1;
(statearr_20619_20641[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (13))){
var state_20613__$1 = state_20613;
var statearr_20620_20642 = state_20613__$1;
(statearr_20620_20642[(2)] = null);

(statearr_20620_20642[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (6))){
var inst_20592 = (state_20613[(7)]);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20613__$1,(11),to,inst_20592);
} else {
if((state_val_20614 === (3))){
var inst_20611 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20613__$1,inst_20611);
} else {
if((state_val_20614 === (12))){
var state_20613__$1 = state_20613;
var statearr_20621_20643 = state_20613__$1;
(statearr_20621_20643[(2)] = null);

(statearr_20621_20643[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (2))){
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20613__$1,(4),from);
} else {
if((state_val_20614 === (11))){
var inst_20602 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
if(cljs.core.truth_(inst_20602)){
var statearr_20622_20644 = state_20613__$1;
(statearr_20622_20644[(1)] = (12));

} else {
var statearr_20623_20645 = state_20613__$1;
(statearr_20623_20645[(1)] = (13));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (9))){
var state_20613__$1 = state_20613;
var statearr_20624_20646 = state_20613__$1;
(statearr_20624_20646[(2)] = null);

(statearr_20624_20646[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (5))){
var state_20613__$1 = state_20613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20625_20647 = state_20613__$1;
(statearr_20625_20647[(1)] = (8));

} else {
var statearr_20626_20648 = state_20613__$1;
(statearr_20626_20648[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (14))){
var inst_20607 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20627_20649 = state_20613__$1;
(statearr_20627_20649[(2)] = inst_20607);

(statearr_20627_20649[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (10))){
var inst_20599 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20628_20650 = state_20613__$1;
(statearr_20628_20650[(2)] = inst_20599);

(statearr_20628_20650[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20614 === (8))){
var inst_20596 = cljs.core.async.close_BANG_(to);
var state_20613__$1 = state_20613;
var statearr_20629_20651 = state_20613__$1;
(statearr_20629_20651[(2)] = inst_20596);

(statearr_20629_20651[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___20637))
;
return ((function (switch__6007__auto__,c__6063__auto___20637){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_20633 = [null,null,null,null,null,null,null,null];
(statearr_20633[(0)] = state_machine__6008__auto__);

(statearr_20633[(1)] = (1));

return statearr_20633;
});
var state_machine__6008__auto____1 = (function (state_20613){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20613);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e20634){if((e20634 instanceof Object)){
var ex__6011__auto__ = e20634;
var statearr_20635_20652 = state_20613;
(statearr_20635_20652[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20613);

return cljs.core.constant$keyword$62;
} else {
throw e20634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__20653 = state_20613;
state_20613 = G__20653;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20613){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___20637))
})();
var state__6065__auto__ = (function (){var statearr_20636 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_20636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___20637);

return statearr_20636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___20637))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__20839){
var vec__20840 = p__20839;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(1),null);
var job = vec__20840;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__6063__auto___21024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results){
return (function (state_20845){
var state_val_20846 = (state_20845[(1)]);
if((state_val_20846 === (2))){
var inst_20842 = (state_20845[(2)]);
var inst_20843 = cljs.core.async.close_BANG_(res);
var state_20845__$1 = (function (){var statearr_20847 = state_20845;
(statearr_20847[(7)] = inst_20842);

return statearr_20847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20845__$1,inst_20843);
} else {
if((state_val_20846 === (1))){
var state_20845__$1 = state_20845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20845__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results))
;
return ((function (switch__6007__auto__,c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_20851 = [null,null,null,null,null,null,null,null];
(statearr_20851[(0)] = state_machine__6008__auto__);

(statearr_20851[(1)] = (1));

return statearr_20851;
});
var state_machine__6008__auto____1 = (function (state_20845){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20845);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e20852){if((e20852 instanceof Object)){
var ex__6011__auto__ = e20852;
var statearr_20853_21025 = state_20845;
(statearr_20853_21025[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20845);

return cljs.core.constant$keyword$62;
} else {
throw e20852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21026 = state_20845;
state_20845 = G__21026;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20845){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results))
})();
var state__6065__auto__ = (function (){var statearr_20854 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_20854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21024);

return statearr_20854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___21024,res,vec__20840,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20855){
var vec__20856 = p__20855;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(1),null);
var job = vec__20856;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__20857_21027 = v;
var G__20858_21028 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__20857_21027,G__20858_21028) : xf.call(null,G__20857_21027,G__20858_21028));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4659__auto___21029 = n;
var __21030 = (0);
while(true){
if((__21030 < n__4659__auto___21029)){
var G__20859_21031 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20859_21031) {
case "async":
var c__6063__auto___21033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21030,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (__21030,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function (state_20872){
var state_val_20873 = (state_20872[(1)]);
if((state_val_20873 === (7))){
var inst_20868 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20874_21034 = state_20872__$1;
(statearr_20874_21034[(2)] = inst_20868);

(statearr_20874_21034[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20873 === (6))){
var state_20872__$1 = state_20872;
var statearr_20875_21035 = state_20872__$1;
(statearr_20875_21035[(2)] = null);

(statearr_20875_21035[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20873 === (5))){
var state_20872__$1 = state_20872;
var statearr_20876_21036 = state_20872__$1;
(statearr_20876_21036[(2)] = null);

(statearr_20876_21036[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20873 === (4))){
var inst_20862 = (state_20872[(2)]);
var inst_20863 = async(inst_20862);
var state_20872__$1 = state_20872;
if(cljs.core.truth_(inst_20863)){
var statearr_20877_21037 = state_20872__$1;
(statearr_20877_21037[(1)] = (5));

} else {
var statearr_20878_21038 = state_20872__$1;
(statearr_20878_21038[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20873 === (3))){
var inst_20870 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20872__$1,inst_20870);
} else {
if((state_val_20873 === (2))){
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20872__$1,(4),jobs);
} else {
if((state_val_20873 === (1))){
var state_20872__$1 = state_20872;
var statearr_20879_21039 = state_20872__$1;
(statearr_20879_21039[(2)] = null);

(statearr_20879_21039[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
});})(__21030,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
;
return ((function (__21030,switch__6007__auto__,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_20883 = [null,null,null,null,null,null,null];
(statearr_20883[(0)] = state_machine__6008__auto__);

(statearr_20883[(1)] = (1));

return statearr_20883;
});
var state_machine__6008__auto____1 = (function (state_20872){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20872);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e20884){if((e20884 instanceof Object)){
var ex__6011__auto__ = e20884;
var statearr_20885_21040 = state_20872;
(statearr_20885_21040[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20872);

return cljs.core.constant$keyword$62;
} else {
throw e20884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21041 = state_20872;
state_20872 = G__21041;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20872){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(__21030,switch__6007__auto__,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
})();
var state__6065__auto__ = (function (){var statearr_20886 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_20886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21033);

return statearr_20886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(__21030,c__6063__auto___21033,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
);


break;
case "compute":
var c__6063__auto___21042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21030,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (__21030,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function (state_20899){
var state_val_20900 = (state_20899[(1)]);
if((state_val_20900 === (7))){
var inst_20895 = (state_20899[(2)]);
var state_20899__$1 = state_20899;
var statearr_20901_21043 = state_20899__$1;
(statearr_20901_21043[(2)] = inst_20895);

(statearr_20901_21043[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20900 === (6))){
var state_20899__$1 = state_20899;
var statearr_20902_21044 = state_20899__$1;
(statearr_20902_21044[(2)] = null);

(statearr_20902_21044[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20900 === (5))){
var state_20899__$1 = state_20899;
var statearr_20903_21045 = state_20899__$1;
(statearr_20903_21045[(2)] = null);

(statearr_20903_21045[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20900 === (4))){
var inst_20889 = (state_20899[(2)]);
var inst_20890 = process(inst_20889);
var state_20899__$1 = state_20899;
if(cljs.core.truth_(inst_20890)){
var statearr_20904_21046 = state_20899__$1;
(statearr_20904_21046[(1)] = (5));

} else {
var statearr_20905_21047 = state_20899__$1;
(statearr_20905_21047[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20900 === (3))){
var inst_20897 = (state_20899[(2)]);
var state_20899__$1 = state_20899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20899__$1,inst_20897);
} else {
if((state_val_20900 === (2))){
var state_20899__$1 = state_20899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20899__$1,(4),jobs);
} else {
if((state_val_20900 === (1))){
var state_20899__$1 = state_20899;
var statearr_20906_21048 = state_20899__$1;
(statearr_20906_21048[(2)] = null);

(statearr_20906_21048[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
});})(__21030,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
;
return ((function (__21030,switch__6007__auto__,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_20910 = [null,null,null,null,null,null,null];
(statearr_20910[(0)] = state_machine__6008__auto__);

(statearr_20910[(1)] = (1));

return statearr_20910;
});
var state_machine__6008__auto____1 = (function (state_20899){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20899);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e20911){if((e20911 instanceof Object)){
var ex__6011__auto__ = e20911;
var statearr_20912_21049 = state_20899;
(statearr_20912_21049[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20899);

return cljs.core.constant$keyword$62;
} else {
throw e20911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21050 = state_20899;
state_20899 = G__21050;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20899){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(__21030,switch__6007__auto__,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
})();
var state__6065__auto__ = (function (){var statearr_20913 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_20913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21042);

return statearr_20913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(__21030,c__6063__auto___21042,G__20859_21031,n__4659__auto___21029,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21051 = (__21030 + (1));
__21030 = G__21051;
continue;
} else {
}
break;
}

var c__6063__auto___21052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___21052,jobs,results,process,async){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___21052,jobs,results,process,async){
return (function (state_20935){
var state_val_20936 = (state_20935[(1)]);
if((state_val_20936 === (9))){
var inst_20928 = (state_20935[(2)]);
var state_20935__$1 = (function (){var statearr_20937 = state_20935;
(statearr_20937[(7)] = inst_20928);

return statearr_20937;
})();
var statearr_20938_21053 = state_20935__$1;
(statearr_20938_21053[(2)] = null);

(statearr_20938_21053[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20936 === (8))){
var inst_20921 = (state_20935[(8)]);
var inst_20926 = (state_20935[(2)]);
var state_20935__$1 = (function (){var statearr_20939 = state_20935;
(statearr_20939[(9)] = inst_20926);

return statearr_20939;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20935__$1,(9),results,inst_20921);
} else {
if((state_val_20936 === (7))){
var inst_20931 = (state_20935[(2)]);
var state_20935__$1 = state_20935;
var statearr_20940_21054 = state_20935__$1;
(statearr_20940_21054[(2)] = inst_20931);

(statearr_20940_21054[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20936 === (6))){
var inst_20921 = (state_20935[(8)]);
var inst_20916 = (state_20935[(10)]);
var inst_20921__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20923 = [inst_20916,inst_20921__$1];
var inst_20924 = (new cljs.core.PersistentVector(null,2,(5),inst_20922,inst_20923,null));
var state_20935__$1 = (function (){var statearr_20941 = state_20935;
(statearr_20941[(8)] = inst_20921__$1);

return statearr_20941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20935__$1,(8),jobs,inst_20924);
} else {
if((state_val_20936 === (5))){
var inst_20919 = cljs.core.async.close_BANG_(jobs);
var state_20935__$1 = state_20935;
var statearr_20942_21055 = state_20935__$1;
(statearr_20942_21055[(2)] = inst_20919);

(statearr_20942_21055[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20936 === (4))){
var inst_20916 = (state_20935[(10)]);
var inst_20916__$1 = (state_20935[(2)]);
var inst_20917 = (inst_20916__$1 == null);
var state_20935__$1 = (function (){var statearr_20943 = state_20935;
(statearr_20943[(10)] = inst_20916__$1);

return statearr_20943;
})();
if(cljs.core.truth_(inst_20917)){
var statearr_20944_21056 = state_20935__$1;
(statearr_20944_21056[(1)] = (5));

} else {
var statearr_20945_21057 = state_20935__$1;
(statearr_20945_21057[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20936 === (3))){
var inst_20933 = (state_20935[(2)]);
var state_20935__$1 = state_20935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20935__$1,inst_20933);
} else {
if((state_val_20936 === (2))){
var state_20935__$1 = state_20935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20935__$1,(4),from);
} else {
if((state_val_20936 === (1))){
var state_20935__$1 = state_20935;
var statearr_20946_21058 = state_20935__$1;
(statearr_20946_21058[(2)] = null);

(statearr_20946_21058[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___21052,jobs,results,process,async))
;
return ((function (switch__6007__auto__,c__6063__auto___21052,jobs,results,process,async){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_20950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20950[(0)] = state_machine__6008__auto__);

(statearr_20950[(1)] = (1));

return statearr_20950;
});
var state_machine__6008__auto____1 = (function (state_20935){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20935);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e20951){if((e20951 instanceof Object)){
var ex__6011__auto__ = e20951;
var statearr_20952_21059 = state_20935;
(statearr_20952_21059[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20935);

return cljs.core.constant$keyword$62;
} else {
throw e20951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21060 = state_20935;
state_20935 = G__21060;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20935){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___21052,jobs,results,process,async))
})();
var state__6065__auto__ = (function (){var statearr_20953 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_20953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21052);

return statearr_20953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___21052,jobs,results,process,async))
);


var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__,jobs,results,process,async){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__,jobs,results,process,async){
return (function (state_20991){
var state_val_20992 = (state_20991[(1)]);
if((state_val_20992 === (7))){
var inst_20987 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
var statearr_20993_21061 = state_20991__$1;
(statearr_20993_21061[(2)] = inst_20987);

(statearr_20993_21061[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (20))){
var state_20991__$1 = state_20991;
var statearr_20994_21062 = state_20991__$1;
(statearr_20994_21062[(2)] = null);

(statearr_20994_21062[(1)] = (21));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (1))){
var state_20991__$1 = state_20991;
var statearr_20995_21063 = state_20991__$1;
(statearr_20995_21063[(2)] = null);

(statearr_20995_21063[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (4))){
var inst_20956 = (state_20991[(7)]);
var inst_20956__$1 = (state_20991[(2)]);
var inst_20957 = (inst_20956__$1 == null);
var state_20991__$1 = (function (){var statearr_20996 = state_20991;
(statearr_20996[(7)] = inst_20956__$1);

return statearr_20996;
})();
if(cljs.core.truth_(inst_20957)){
var statearr_20997_21064 = state_20991__$1;
(statearr_20997_21064[(1)] = (5));

} else {
var statearr_20998_21065 = state_20991__$1;
(statearr_20998_21065[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (15))){
var inst_20969 = (state_20991[(8)]);
var state_20991__$1 = state_20991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20991__$1,(18),to,inst_20969);
} else {
if((state_val_20992 === (21))){
var inst_20982 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
var statearr_20999_21066 = state_20991__$1;
(statearr_20999_21066[(2)] = inst_20982);

(statearr_20999_21066[(1)] = (13));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (13))){
var inst_20984 = (state_20991[(2)]);
var state_20991__$1 = (function (){var statearr_21000 = state_20991;
(statearr_21000[(9)] = inst_20984);

return statearr_21000;
})();
var statearr_21001_21067 = state_20991__$1;
(statearr_21001_21067[(2)] = null);

(statearr_21001_21067[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (6))){
var inst_20956 = (state_20991[(7)]);
var state_20991__$1 = state_20991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20991__$1,(11),inst_20956);
} else {
if((state_val_20992 === (17))){
var inst_20977 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
if(cljs.core.truth_(inst_20977)){
var statearr_21002_21068 = state_20991__$1;
(statearr_21002_21068[(1)] = (19));

} else {
var statearr_21003_21069 = state_20991__$1;
(statearr_21003_21069[(1)] = (20));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (3))){
var inst_20989 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20991__$1,inst_20989);
} else {
if((state_val_20992 === (12))){
var inst_20966 = (state_20991[(10)]);
var state_20991__$1 = state_20991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20991__$1,(14),inst_20966);
} else {
if((state_val_20992 === (2))){
var state_20991__$1 = state_20991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20991__$1,(4),results);
} else {
if((state_val_20992 === (19))){
var state_20991__$1 = state_20991;
var statearr_21004_21070 = state_20991__$1;
(statearr_21004_21070[(2)] = null);

(statearr_21004_21070[(1)] = (12));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (11))){
var inst_20966 = (state_20991[(2)]);
var state_20991__$1 = (function (){var statearr_21005 = state_20991;
(statearr_21005[(10)] = inst_20966);

return statearr_21005;
})();
var statearr_21006_21071 = state_20991__$1;
(statearr_21006_21071[(2)] = null);

(statearr_21006_21071[(1)] = (12));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (9))){
var state_20991__$1 = state_20991;
var statearr_21007_21072 = state_20991__$1;
(statearr_21007_21072[(2)] = null);

(statearr_21007_21072[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (5))){
var state_20991__$1 = state_20991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21008_21073 = state_20991__$1;
(statearr_21008_21073[(1)] = (8));

} else {
var statearr_21009_21074 = state_20991__$1;
(statearr_21009_21074[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (14))){
var inst_20971 = (state_20991[(11)]);
var inst_20969 = (state_20991[(8)]);
var inst_20969__$1 = (state_20991[(2)]);
var inst_20970 = (inst_20969__$1 == null);
var inst_20971__$1 = cljs.core.not(inst_20970);
var state_20991__$1 = (function (){var statearr_21010 = state_20991;
(statearr_21010[(11)] = inst_20971__$1);

(statearr_21010[(8)] = inst_20969__$1);

return statearr_21010;
})();
if(inst_20971__$1){
var statearr_21011_21075 = state_20991__$1;
(statearr_21011_21075[(1)] = (15));

} else {
var statearr_21012_21076 = state_20991__$1;
(statearr_21012_21076[(1)] = (16));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (16))){
var inst_20971 = (state_20991[(11)]);
var state_20991__$1 = state_20991;
var statearr_21013_21077 = state_20991__$1;
(statearr_21013_21077[(2)] = inst_20971);

(statearr_21013_21077[(1)] = (17));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (10))){
var inst_20963 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
var statearr_21014_21078 = state_20991__$1;
(statearr_21014_21078[(2)] = inst_20963);

(statearr_21014_21078[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (18))){
var inst_20974 = (state_20991[(2)]);
var state_20991__$1 = state_20991;
var statearr_21015_21079 = state_20991__$1;
(statearr_21015_21079[(2)] = inst_20974);

(statearr_21015_21079[(1)] = (17));


return cljs.core.constant$keyword$62;
} else {
if((state_val_20992 === (8))){
var inst_20960 = cljs.core.async.close_BANG_(to);
var state_20991__$1 = state_20991;
var statearr_21016_21080 = state_20991__$1;
(statearr_21016_21080[(2)] = inst_20960);

(statearr_21016_21080[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto__,jobs,results,process,async))
;
return ((function (switch__6007__auto__,c__6063__auto__,jobs,results,process,async){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_21020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21020[(0)] = state_machine__6008__auto__);

(statearr_21020[(1)] = (1));

return statearr_21020;
});
var state_machine__6008__auto____1 = (function (state_20991){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_20991);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e21021){if((e21021 instanceof Object)){
var ex__6011__auto__ = e21021;
var statearr_21022_21081 = state_20991;
(statearr_21022_21081[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20991);

return cljs.core.constant$keyword$62;
} else {
throw e21021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21082 = state_20991;
state_20991 = G__21082;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_20991){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_20991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__,jobs,results,process,async))
})();
var state__6065__auto__ = (function (){var statearr_21023 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_21023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_21023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__,jobs,results,process,async))
);

return c__6063__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$69);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$70);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__6063__auto___21205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___21205,tc,fc){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___21205,tc,fc){
return (function (state_21179){
var state_val_21180 = (state_21179[(1)]);
if((state_val_21180 === (7))){
var inst_21175 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21181_21206 = state_21179__$1;
(statearr_21181_21206[(2)] = inst_21175);

(statearr_21181_21206[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (1))){
var state_21179__$1 = state_21179;
var statearr_21182_21207 = state_21179__$1;
(statearr_21182_21207[(2)] = null);

(statearr_21182_21207[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (4))){
var inst_21156 = (state_21179[(7)]);
var inst_21156__$1 = (state_21179[(2)]);
var inst_21157 = (inst_21156__$1 == null);
var state_21179__$1 = (function (){var statearr_21183 = state_21179;
(statearr_21183[(7)] = inst_21156__$1);

return statearr_21183;
})();
if(cljs.core.truth_(inst_21157)){
var statearr_21184_21208 = state_21179__$1;
(statearr_21184_21208[(1)] = (5));

} else {
var statearr_21185_21209 = state_21179__$1;
(statearr_21185_21209[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (13))){
var state_21179__$1 = state_21179;
var statearr_21186_21210 = state_21179__$1;
(statearr_21186_21210[(2)] = null);

(statearr_21186_21210[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (6))){
var inst_21156 = (state_21179[(7)]);
var inst_21162 = (function (){var G__21187 = inst_21156;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21187) : p.call(null,G__21187));
})();
var state_21179__$1 = state_21179;
if(cljs.core.truth_(inst_21162)){
var statearr_21188_21211 = state_21179__$1;
(statearr_21188_21211[(1)] = (9));

} else {
var statearr_21189_21212 = state_21179__$1;
(statearr_21189_21212[(1)] = (10));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (3))){
var inst_21177 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21179__$1,inst_21177);
} else {
if((state_val_21180 === (12))){
var state_21179__$1 = state_21179;
var statearr_21190_21213 = state_21179__$1;
(statearr_21190_21213[(2)] = null);

(statearr_21190_21213[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (2))){
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21179__$1,(4),ch);
} else {
if((state_val_21180 === (11))){
var inst_21156 = (state_21179[(7)]);
var inst_21166 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21179__$1,(8),inst_21166,inst_21156);
} else {
if((state_val_21180 === (9))){
var state_21179__$1 = state_21179;
var statearr_21191_21214 = state_21179__$1;
(statearr_21191_21214[(2)] = tc);

(statearr_21191_21214[(1)] = (11));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (5))){
var inst_21159 = cljs.core.async.close_BANG_(tc);
var inst_21160 = cljs.core.async.close_BANG_(fc);
var state_21179__$1 = (function (){var statearr_21192 = state_21179;
(statearr_21192[(8)] = inst_21159);

return statearr_21192;
})();
var statearr_21193_21215 = state_21179__$1;
(statearr_21193_21215[(2)] = inst_21160);

(statearr_21193_21215[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (14))){
var inst_21173 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21194_21216 = state_21179__$1;
(statearr_21194_21216[(2)] = inst_21173);

(statearr_21194_21216[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (10))){
var state_21179__$1 = state_21179;
var statearr_21195_21217 = state_21179__$1;
(statearr_21195_21217[(2)] = fc);

(statearr_21195_21217[(1)] = (11));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21180 === (8))){
var inst_21168 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
if(cljs.core.truth_(inst_21168)){
var statearr_21196_21218 = state_21179__$1;
(statearr_21196_21218[(1)] = (12));

} else {
var statearr_21197_21219 = state_21179__$1;
(statearr_21197_21219[(1)] = (13));

}

return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___21205,tc,fc))
;
return ((function (switch__6007__auto__,c__6063__auto___21205,tc,fc){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_21201 = [null,null,null,null,null,null,null,null,null];
(statearr_21201[(0)] = state_machine__6008__auto__);

(statearr_21201[(1)] = (1));

return statearr_21201;
});
var state_machine__6008__auto____1 = (function (state_21179){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_21179);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e21202){if((e21202 instanceof Object)){
var ex__6011__auto__ = e21202;
var statearr_21203_21220 = state_21179;
(statearr_21203_21220[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21179);

return cljs.core.constant$keyword$62;
} else {
throw e21202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21221 = state_21179;
state_21179 = G__21221;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_21179){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_21179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___21205,tc,fc))
})();
var state__6065__auto__ = (function (){var statearr_21204 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_21204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21205);

return statearr_21204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___21205,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_21270){
var state_val_21271 = (state_21270[(1)]);
if((state_val_21271 === (7))){
var inst_21266 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21272_21290 = state_21270__$1;
(statearr_21272_21290[(2)] = inst_21266);

(statearr_21272_21290[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21271 === (6))){
var inst_21256 = (state_21270[(7)]);
var inst_21259 = (state_21270[(8)]);
var inst_21263 = (function (){var G__21273 = inst_21256;
var G__21274 = inst_21259;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21273,G__21274) : f.call(null,G__21273,G__21274));
})();
var inst_21256__$1 = inst_21263;
var state_21270__$1 = (function (){var statearr_21275 = state_21270;
(statearr_21275[(7)] = inst_21256__$1);

return statearr_21275;
})();
var statearr_21276_21291 = state_21270__$1;
(statearr_21276_21291[(2)] = null);

(statearr_21276_21291[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21271 === (5))){
var inst_21256 = (state_21270[(7)]);
var state_21270__$1 = state_21270;
var statearr_21277_21292 = state_21270__$1;
(statearr_21277_21292[(2)] = inst_21256);

(statearr_21277_21292[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21271 === (4))){
var inst_21259 = (state_21270[(8)]);
var inst_21259__$1 = (state_21270[(2)]);
var inst_21260 = (inst_21259__$1 == null);
var state_21270__$1 = (function (){var statearr_21278 = state_21270;
(statearr_21278[(8)] = inst_21259__$1);

return statearr_21278;
})();
if(cljs.core.truth_(inst_21260)){
var statearr_21279_21293 = state_21270__$1;
(statearr_21279_21293[(1)] = (5));

} else {
var statearr_21280_21294 = state_21270__$1;
(statearr_21280_21294[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21271 === (3))){
var inst_21268 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21270__$1,inst_21268);
} else {
if((state_val_21271 === (2))){
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21270__$1,(4),ch);
} else {
if((state_val_21271 === (1))){
var inst_21256 = init;
var state_21270__$1 = (function (){var statearr_21281 = state_21270;
(statearr_21281[(7)] = inst_21256);

return statearr_21281;
})();
var statearr_21282_21295 = state_21270__$1;
(statearr_21282_21295[(2)] = null);

(statearr_21282_21295[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
});})(c__6063__auto__))
;
return ((function (switch__6007__auto__,c__6063__auto__){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_21286 = [null,null,null,null,null,null,null,null,null];
(statearr_21286[(0)] = state_machine__6008__auto__);

(statearr_21286[(1)] = (1));

return statearr_21286;
});
var state_machine__6008__auto____1 = (function (state_21270){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_21270);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e21287){if((e21287 instanceof Object)){
var ex__6011__auto__ = e21287;
var statearr_21288_21296 = state_21270;
(statearr_21288_21296[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21270);

return cljs.core.constant$keyword$62;
} else {
throw e21287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21297 = state_21270;
state_21270 = G__21297;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_21270){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_21270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_21289 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_21289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_21289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_21374){
var state_val_21375 = (state_21374[(1)]);
if((state_val_21375 === (7))){
var inst_21356 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
var statearr_21376_21399 = state_21374__$1;
(statearr_21376_21399[(2)] = inst_21356);

(statearr_21376_21399[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (1))){
var inst_21350 = cljs.core.seq(coll);
var inst_21351 = inst_21350;
var state_21374__$1 = (function (){var statearr_21377 = state_21374;
(statearr_21377[(7)] = inst_21351);

return statearr_21377;
})();
var statearr_21378_21400 = state_21374__$1;
(statearr_21378_21400[(2)] = null);

(statearr_21378_21400[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (4))){
var inst_21351 = (state_21374[(7)]);
var inst_21354 = cljs.core.first(inst_21351);
var state_21374__$1 = state_21374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21374__$1,(7),ch,inst_21354);
} else {
if((state_val_21375 === (13))){
var inst_21368 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
var statearr_21379_21401 = state_21374__$1;
(statearr_21379_21401[(2)] = inst_21368);

(statearr_21379_21401[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (6))){
var inst_21359 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
if(cljs.core.truth_(inst_21359)){
var statearr_21380_21402 = state_21374__$1;
(statearr_21380_21402[(1)] = (8));

} else {
var statearr_21381_21403 = state_21374__$1;
(statearr_21381_21403[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (3))){
var inst_21372 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21374__$1,inst_21372);
} else {
if((state_val_21375 === (12))){
var state_21374__$1 = state_21374;
var statearr_21382_21404 = state_21374__$1;
(statearr_21382_21404[(2)] = null);

(statearr_21382_21404[(1)] = (13));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (2))){
var inst_21351 = (state_21374[(7)]);
var state_21374__$1 = state_21374;
if(cljs.core.truth_(inst_21351)){
var statearr_21383_21405 = state_21374__$1;
(statearr_21383_21405[(1)] = (4));

} else {
var statearr_21384_21406 = state_21374__$1;
(statearr_21384_21406[(1)] = (5));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (11))){
var inst_21365 = cljs.core.async.close_BANG_(ch);
var state_21374__$1 = state_21374;
var statearr_21385_21407 = state_21374__$1;
(statearr_21385_21407[(2)] = inst_21365);

(statearr_21385_21407[(1)] = (13));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (9))){
var state_21374__$1 = state_21374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21386_21408 = state_21374__$1;
(statearr_21386_21408[(1)] = (11));

} else {
var statearr_21387_21409 = state_21374__$1;
(statearr_21387_21409[(1)] = (12));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (5))){
var inst_21351 = (state_21374[(7)]);
var state_21374__$1 = state_21374;
var statearr_21388_21410 = state_21374__$1;
(statearr_21388_21410[(2)] = inst_21351);

(statearr_21388_21410[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (10))){
var inst_21370 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
var statearr_21389_21411 = state_21374__$1;
(statearr_21389_21411[(2)] = inst_21370);

(statearr_21389_21411[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21375 === (8))){
var inst_21351 = (state_21374[(7)]);
var inst_21361 = cljs.core.next(inst_21351);
var inst_21351__$1 = inst_21361;
var state_21374__$1 = (function (){var statearr_21390 = state_21374;
(statearr_21390[(7)] = inst_21351__$1);

return statearr_21390;
})();
var statearr_21391_21412 = state_21374__$1;
(statearr_21391_21412[(2)] = null);

(statearr_21391_21412[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto__))
;
return ((function (switch__6007__auto__,c__6063__auto__){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_21395 = [null,null,null,null,null,null,null,null];
(statearr_21395[(0)] = state_machine__6008__auto__);

(statearr_21395[(1)] = (1));

return statearr_21395;
});
var state_machine__6008__auto____1 = (function (state_21374){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_21374);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e21396){if((e21396 instanceof Object)){
var ex__6011__auto__ = e21396;
var statearr_21397_21413 = state_21374;
(statearr_21397_21413[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21374);

return cljs.core.constant$keyword$62;
} else {
throw e21396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21414 = state_21374;
state_21374 = G__21414;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_21374){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_21374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_21398 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_21398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_21398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj21416 = {};
return obj21416;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3760__auto__ = _;
if(and__3760__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4416__auto__ = (((_ == null))?null:_);
return (function (){var or__3772__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__21420 = x__4416__auto__;
return goog.typeOf(G__21420);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21422 = {};
return obj21422;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__21426 = x__4416__auto__;
return goog.typeOf(G__21426);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__21430 = x__4416__auto__;
return goog.typeOf(G__21430);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__21434 = x__4416__auto__;
return goog.typeOf(G__21434);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__21664 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21664) : cljs.core.atom.call(null,G__21664));
})();
var m = (function (){
if(typeof cljs.core.async.t21665 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21665 = (function (cs,ch,mult,meta21666){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21666 = meta21666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21665.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21665.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21665.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21665.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21668_21893 = self__.cs;
var G__21669_21894 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21668_21893,G__21669_21894) : cljs.core.reset_BANG_.call(null,G__21668_21893,G__21669_21894));

return null;
});})(cs))
;

cljs.core.async.t21665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21667){
var self__ = this;
var _21667__$1 = this;
return self__.meta21666;
});})(cs))
;

cljs.core.async.t21665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21667,meta21666__$1){
var self__ = this;
var _21667__$1 = this;
return (new cljs.core.async.t21665(self__.cs,self__.ch,self__.mult,meta21666__$1));
});})(cs))
;

cljs.core.async.t21665.cljs$lang$type = true;

cljs.core.async.t21665.cljs$lang$ctorStr = "cljs.core.async/t21665";

cljs.core.async.t21665.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t21665");
});})(cs))
;

cljs.core.async.__GT_t21665 = ((function (cs){
return (function __GT_t21665(cs__$1,ch__$1,mult__$1,meta21666){
return (new cljs.core.async.t21665(cs__$1,ch__$1,mult__$1,meta21666));
});})(cs))
;

}

return (new cljs.core.async.t21665(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,48,cljs.core.constant$keyword$33,397,cljs.core.constant$keyword$34,11,cljs.core.constant$keyword$35,390,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__21670 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21670) : cljs.core.atom.call(null,G__21670));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6063__auto___21895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___21895,cs,m,dchan,dctr,done){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___21895,cs,m,dchan,dctr,done){
return (function (state_21801){
var state_val_21802 = (state_21801[(1)]);
if((state_val_21802 === (7))){
var inst_21797 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21803_21896 = state_21801__$1;
(statearr_21803_21896[(2)] = inst_21797);

(statearr_21803_21896[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (20))){
var inst_21702 = (state_21801[(7)]);
var inst_21712 = cljs.core.first(inst_21702);
var inst_21713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21712,(0),null);
var inst_21714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21712,(1),null);
var state_21801__$1 = (function (){var statearr_21804 = state_21801;
(statearr_21804[(8)] = inst_21713);

return statearr_21804;
})();
if(cljs.core.truth_(inst_21714)){
var statearr_21805_21897 = state_21801__$1;
(statearr_21805_21897[(1)] = (22));

} else {
var statearr_21806_21898 = state_21801__$1;
(statearr_21806_21898[(1)] = (23));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (27))){
var inst_21742 = (state_21801[(9)]);
var inst_21749 = (state_21801[(10)]);
var inst_21744 = (state_21801[(11)]);
var inst_21673 = (state_21801[(12)]);
var inst_21749__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21742,inst_21744);
var inst_21750 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21749__$1,inst_21673,done);
var state_21801__$1 = (function (){var statearr_21807 = state_21801;
(statearr_21807[(10)] = inst_21749__$1);

return statearr_21807;
})();
if(cljs.core.truth_(inst_21750)){
var statearr_21808_21899 = state_21801__$1;
(statearr_21808_21899[(1)] = (30));

} else {
var statearr_21809_21900 = state_21801__$1;
(statearr_21809_21900[(1)] = (31));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (1))){
var state_21801__$1 = state_21801;
var statearr_21810_21901 = state_21801__$1;
(statearr_21810_21901[(2)] = null);

(statearr_21810_21901[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (24))){
var inst_21702 = (state_21801[(7)]);
var inst_21719 = (state_21801[(2)]);
var inst_21720 = cljs.core.next(inst_21702);
var inst_21682 = inst_21720;
var inst_21683 = null;
var inst_21684 = (0);
var inst_21685 = (0);
var state_21801__$1 = (function (){var statearr_21811 = state_21801;
(statearr_21811[(13)] = inst_21683);

(statearr_21811[(14)] = inst_21719);

(statearr_21811[(15)] = inst_21684);

(statearr_21811[(16)] = inst_21685);

(statearr_21811[(17)] = inst_21682);

return statearr_21811;
})();
var statearr_21812_21902 = state_21801__$1;
(statearr_21812_21902[(2)] = null);

(statearr_21812_21902[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (39))){
var state_21801__$1 = state_21801;
var statearr_21816_21903 = state_21801__$1;
(statearr_21816_21903[(2)] = null);

(statearr_21816_21903[(1)] = (41));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (4))){
var inst_21673 = (state_21801[(12)]);
var inst_21673__$1 = (state_21801[(2)]);
var inst_21674 = (inst_21673__$1 == null);
var state_21801__$1 = (function (){var statearr_21817 = state_21801;
(statearr_21817[(12)] = inst_21673__$1);

return statearr_21817;
})();
if(cljs.core.truth_(inst_21674)){
var statearr_21818_21904 = state_21801__$1;
(statearr_21818_21904[(1)] = (5));

} else {
var statearr_21819_21905 = state_21801__$1;
(statearr_21819_21905[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (15))){
var inst_21683 = (state_21801[(13)]);
var inst_21684 = (state_21801[(15)]);
var inst_21685 = (state_21801[(16)]);
var inst_21682 = (state_21801[(17)]);
var inst_21698 = (state_21801[(2)]);
var inst_21699 = (inst_21685 + (1));
var tmp21813 = inst_21683;
var tmp21814 = inst_21684;
var tmp21815 = inst_21682;
var inst_21682__$1 = tmp21815;
var inst_21683__$1 = tmp21813;
var inst_21684__$1 = tmp21814;
var inst_21685__$1 = inst_21699;
var state_21801__$1 = (function (){var statearr_21820 = state_21801;
(statearr_21820[(13)] = inst_21683__$1);

(statearr_21820[(15)] = inst_21684__$1);

(statearr_21820[(16)] = inst_21685__$1);

(statearr_21820[(18)] = inst_21698);

(statearr_21820[(17)] = inst_21682__$1);

return statearr_21820;
})();
var statearr_21821_21906 = state_21801__$1;
(statearr_21821_21906[(2)] = null);

(statearr_21821_21906[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (21))){
var inst_21723 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21825_21907 = state_21801__$1;
(statearr_21825_21907[(2)] = inst_21723);

(statearr_21825_21907[(1)] = (18));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (31))){
var inst_21749 = (state_21801[(10)]);
var inst_21753 = done(null);
var inst_21754 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21749);
var state_21801__$1 = (function (){var statearr_21826 = state_21801;
(statearr_21826[(19)] = inst_21753);

return statearr_21826;
})();
var statearr_21827_21908 = state_21801__$1;
(statearr_21827_21908[(2)] = inst_21754);

(statearr_21827_21908[(1)] = (32));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (32))){
var inst_21742 = (state_21801[(9)]);
var inst_21744 = (state_21801[(11)]);
var inst_21743 = (state_21801[(20)]);
var inst_21741 = (state_21801[(21)]);
var inst_21756 = (state_21801[(2)]);
var inst_21757 = (inst_21744 + (1));
var tmp21822 = inst_21742;
var tmp21823 = inst_21743;
var tmp21824 = inst_21741;
var inst_21741__$1 = tmp21824;
var inst_21742__$1 = tmp21822;
var inst_21743__$1 = tmp21823;
var inst_21744__$1 = inst_21757;
var state_21801__$1 = (function (){var statearr_21828 = state_21801;
(statearr_21828[(9)] = inst_21742__$1);

(statearr_21828[(22)] = inst_21756);

(statearr_21828[(11)] = inst_21744__$1);

(statearr_21828[(20)] = inst_21743__$1);

(statearr_21828[(21)] = inst_21741__$1);

return statearr_21828;
})();
var statearr_21829_21909 = state_21801__$1;
(statearr_21829_21909[(2)] = null);

(statearr_21829_21909[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (40))){
var inst_21769 = (state_21801[(23)]);
var inst_21773 = done(null);
var inst_21774 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21769);
var state_21801__$1 = (function (){var statearr_21830 = state_21801;
(statearr_21830[(24)] = inst_21773);

return statearr_21830;
})();
var statearr_21831_21910 = state_21801__$1;
(statearr_21831_21910[(2)] = inst_21774);

(statearr_21831_21910[(1)] = (41));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (33))){
var inst_21760 = (state_21801[(25)]);
var inst_21762 = cljs.core.chunked_seq_QMARK_(inst_21760);
var state_21801__$1 = state_21801;
if(inst_21762){
var statearr_21832_21911 = state_21801__$1;
(statearr_21832_21911[(1)] = (36));

} else {
var statearr_21833_21912 = state_21801__$1;
(statearr_21833_21912[(1)] = (37));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (13))){
var inst_21692 = (state_21801[(26)]);
var inst_21695 = cljs.core.async.close_BANG_(inst_21692);
var state_21801__$1 = state_21801;
var statearr_21834_21913 = state_21801__$1;
(statearr_21834_21913[(2)] = inst_21695);

(statearr_21834_21913[(1)] = (15));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (22))){
var inst_21713 = (state_21801[(8)]);
var inst_21716 = cljs.core.async.close_BANG_(inst_21713);
var state_21801__$1 = state_21801;
var statearr_21835_21914 = state_21801__$1;
(statearr_21835_21914[(2)] = inst_21716);

(statearr_21835_21914[(1)] = (24));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (36))){
var inst_21760 = (state_21801[(25)]);
var inst_21764 = cljs.core.chunk_first(inst_21760);
var inst_21765 = cljs.core.chunk_rest(inst_21760);
var inst_21766 = cljs.core.count(inst_21764);
var inst_21741 = inst_21765;
var inst_21742 = inst_21764;
var inst_21743 = inst_21766;
var inst_21744 = (0);
var state_21801__$1 = (function (){var statearr_21836 = state_21801;
(statearr_21836[(9)] = inst_21742);

(statearr_21836[(11)] = inst_21744);

(statearr_21836[(20)] = inst_21743);

(statearr_21836[(21)] = inst_21741);

return statearr_21836;
})();
var statearr_21837_21915 = state_21801__$1;
(statearr_21837_21915[(2)] = null);

(statearr_21837_21915[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (41))){
var inst_21760 = (state_21801[(25)]);
var inst_21776 = (state_21801[(2)]);
var inst_21777 = cljs.core.next(inst_21760);
var inst_21741 = inst_21777;
var inst_21742 = null;
var inst_21743 = (0);
var inst_21744 = (0);
var state_21801__$1 = (function (){var statearr_21838 = state_21801;
(statearr_21838[(27)] = inst_21776);

(statearr_21838[(9)] = inst_21742);

(statearr_21838[(11)] = inst_21744);

(statearr_21838[(20)] = inst_21743);

(statearr_21838[(21)] = inst_21741);

return statearr_21838;
})();
var statearr_21839_21916 = state_21801__$1;
(statearr_21839_21916[(2)] = null);

(statearr_21839_21916[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (43))){
var state_21801__$1 = state_21801;
var statearr_21840_21917 = state_21801__$1;
(statearr_21840_21917[(2)] = null);

(statearr_21840_21917[(1)] = (44));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (29))){
var inst_21785 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21841_21918 = state_21801__$1;
(statearr_21841_21918[(2)] = inst_21785);

(statearr_21841_21918[(1)] = (26));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (44))){
var inst_21794 = (state_21801[(2)]);
var state_21801__$1 = (function (){var statearr_21842 = state_21801;
(statearr_21842[(28)] = inst_21794);

return statearr_21842;
})();
var statearr_21843_21919 = state_21801__$1;
(statearr_21843_21919[(2)] = null);

(statearr_21843_21919[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (6))){
var inst_21733 = (state_21801[(29)]);
var inst_21732 = (function (){var G__21844 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21844) : cljs.core.deref.call(null,G__21844));
})();
var inst_21733__$1 = cljs.core.keys(inst_21732);
var inst_21734 = cljs.core.count(inst_21733__$1);
var inst_21735 = (function (){var G__21845 = dctr;
var G__21846 = inst_21734;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21845,G__21846) : cljs.core.reset_BANG_.call(null,G__21845,G__21846));
})();
var inst_21740 = cljs.core.seq(inst_21733__$1);
var inst_21741 = inst_21740;
var inst_21742 = null;
var inst_21743 = (0);
var inst_21744 = (0);
var state_21801__$1 = (function (){var statearr_21847 = state_21801;
(statearr_21847[(9)] = inst_21742);

(statearr_21847[(11)] = inst_21744);

(statearr_21847[(29)] = inst_21733__$1);

(statearr_21847[(20)] = inst_21743);

(statearr_21847[(21)] = inst_21741);

(statearr_21847[(30)] = inst_21735);

return statearr_21847;
})();
var statearr_21848_21920 = state_21801__$1;
(statearr_21848_21920[(2)] = null);

(statearr_21848_21920[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (28))){
var inst_21760 = (state_21801[(25)]);
var inst_21741 = (state_21801[(21)]);
var inst_21760__$1 = cljs.core.seq(inst_21741);
var state_21801__$1 = (function (){var statearr_21849 = state_21801;
(statearr_21849[(25)] = inst_21760__$1);

return statearr_21849;
})();
if(inst_21760__$1){
var statearr_21850_21921 = state_21801__$1;
(statearr_21850_21921[(1)] = (33));

} else {
var statearr_21851_21922 = state_21801__$1;
(statearr_21851_21922[(1)] = (34));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (25))){
var inst_21744 = (state_21801[(11)]);
var inst_21743 = (state_21801[(20)]);
var inst_21746 = (inst_21744 < inst_21743);
var inst_21747 = inst_21746;
var state_21801__$1 = state_21801;
if(cljs.core.truth_(inst_21747)){
var statearr_21852_21923 = state_21801__$1;
(statearr_21852_21923[(1)] = (27));

} else {
var statearr_21853_21924 = state_21801__$1;
(statearr_21853_21924[(1)] = (28));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (34))){
var state_21801__$1 = state_21801;
var statearr_21854_21925 = state_21801__$1;
(statearr_21854_21925[(2)] = null);

(statearr_21854_21925[(1)] = (35));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (17))){
var state_21801__$1 = state_21801;
var statearr_21855_21926 = state_21801__$1;
(statearr_21855_21926[(2)] = null);

(statearr_21855_21926[(1)] = (18));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (3))){
var inst_21799 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21801__$1,inst_21799);
} else {
if((state_val_21802 === (12))){
var inst_21728 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21856_21927 = state_21801__$1;
(statearr_21856_21927[(2)] = inst_21728);

(statearr_21856_21927[(1)] = (9));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (2))){
var state_21801__$1 = state_21801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21801__$1,(4),ch);
} else {
if((state_val_21802 === (23))){
var state_21801__$1 = state_21801;
var statearr_21857_21928 = state_21801__$1;
(statearr_21857_21928[(2)] = null);

(statearr_21857_21928[(1)] = (24));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (35))){
var inst_21783 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21858_21929 = state_21801__$1;
(statearr_21858_21929[(2)] = inst_21783);

(statearr_21858_21929[(1)] = (29));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (19))){
var inst_21702 = (state_21801[(7)]);
var inst_21706 = cljs.core.chunk_first(inst_21702);
var inst_21707 = cljs.core.chunk_rest(inst_21702);
var inst_21708 = cljs.core.count(inst_21706);
var inst_21682 = inst_21707;
var inst_21683 = inst_21706;
var inst_21684 = inst_21708;
var inst_21685 = (0);
var state_21801__$1 = (function (){var statearr_21859 = state_21801;
(statearr_21859[(13)] = inst_21683);

(statearr_21859[(15)] = inst_21684);

(statearr_21859[(16)] = inst_21685);

(statearr_21859[(17)] = inst_21682);

return statearr_21859;
})();
var statearr_21860_21930 = state_21801__$1;
(statearr_21860_21930[(2)] = null);

(statearr_21860_21930[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (11))){
var inst_21702 = (state_21801[(7)]);
var inst_21682 = (state_21801[(17)]);
var inst_21702__$1 = cljs.core.seq(inst_21682);
var state_21801__$1 = (function (){var statearr_21861 = state_21801;
(statearr_21861[(7)] = inst_21702__$1);

return statearr_21861;
})();
if(inst_21702__$1){
var statearr_21862_21931 = state_21801__$1;
(statearr_21862_21931[(1)] = (16));

} else {
var statearr_21863_21932 = state_21801__$1;
(statearr_21863_21932[(1)] = (17));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (9))){
var inst_21730 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21864_21933 = state_21801__$1;
(statearr_21864_21933[(2)] = inst_21730);

(statearr_21864_21933[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (5))){
var inst_21680 = (function (){var G__21865 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21865) : cljs.core.deref.call(null,G__21865));
})();
var inst_21681 = cljs.core.seq(inst_21680);
var inst_21682 = inst_21681;
var inst_21683 = null;
var inst_21684 = (0);
var inst_21685 = (0);
var state_21801__$1 = (function (){var statearr_21866 = state_21801;
(statearr_21866[(13)] = inst_21683);

(statearr_21866[(15)] = inst_21684);

(statearr_21866[(16)] = inst_21685);

(statearr_21866[(17)] = inst_21682);

return statearr_21866;
})();
var statearr_21867_21934 = state_21801__$1;
(statearr_21867_21934[(2)] = null);

(statearr_21867_21934[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (14))){
var state_21801__$1 = state_21801;
var statearr_21868_21935 = state_21801__$1;
(statearr_21868_21935[(2)] = null);

(statearr_21868_21935[(1)] = (15));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (45))){
var inst_21791 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21869_21936 = state_21801__$1;
(statearr_21869_21936[(2)] = inst_21791);

(statearr_21869_21936[(1)] = (44));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (26))){
var inst_21733 = (state_21801[(29)]);
var inst_21787 = (state_21801[(2)]);
var inst_21788 = cljs.core.seq(inst_21733);
var state_21801__$1 = (function (){var statearr_21870 = state_21801;
(statearr_21870[(31)] = inst_21787);

return statearr_21870;
})();
if(inst_21788){
var statearr_21871_21937 = state_21801__$1;
(statearr_21871_21937[(1)] = (42));

} else {
var statearr_21872_21938 = state_21801__$1;
(statearr_21872_21938[(1)] = (43));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (16))){
var inst_21702 = (state_21801[(7)]);
var inst_21704 = cljs.core.chunked_seq_QMARK_(inst_21702);
var state_21801__$1 = state_21801;
if(inst_21704){
var statearr_21873_21939 = state_21801__$1;
(statearr_21873_21939[(1)] = (19));

} else {
var statearr_21874_21940 = state_21801__$1;
(statearr_21874_21940[(1)] = (20));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (38))){
var inst_21780 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21875_21941 = state_21801__$1;
(statearr_21875_21941[(2)] = inst_21780);

(statearr_21875_21941[(1)] = (35));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (30))){
var state_21801__$1 = state_21801;
var statearr_21876_21942 = state_21801__$1;
(statearr_21876_21942[(2)] = null);

(statearr_21876_21942[(1)] = (32));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (10))){
var inst_21683 = (state_21801[(13)]);
var inst_21685 = (state_21801[(16)]);
var inst_21691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21683,inst_21685);
var inst_21692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21691,(0),null);
var inst_21693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21691,(1),null);
var state_21801__$1 = (function (){var statearr_21877 = state_21801;
(statearr_21877[(26)] = inst_21692);

return statearr_21877;
})();
if(cljs.core.truth_(inst_21693)){
var statearr_21878_21943 = state_21801__$1;
(statearr_21878_21943[(1)] = (13));

} else {
var statearr_21879_21944 = state_21801__$1;
(statearr_21879_21944[(1)] = (14));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (18))){
var inst_21726 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
var statearr_21880_21945 = state_21801__$1;
(statearr_21880_21945[(2)] = inst_21726);

(statearr_21880_21945[(1)] = (12));


return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (42))){
var state_21801__$1 = state_21801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21801__$1,(45),dchan);
} else {
if((state_val_21802 === (37))){
var inst_21760 = (state_21801[(25)]);
var inst_21769 = (state_21801[(23)]);
var inst_21673 = (state_21801[(12)]);
var inst_21769__$1 = cljs.core.first(inst_21760);
var inst_21770 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21769__$1,inst_21673,done);
var state_21801__$1 = (function (){var statearr_21881 = state_21801;
(statearr_21881[(23)] = inst_21769__$1);

return statearr_21881;
})();
if(cljs.core.truth_(inst_21770)){
var statearr_21882_21946 = state_21801__$1;
(statearr_21882_21946[(1)] = (39));

} else {
var statearr_21883_21947 = state_21801__$1;
(statearr_21883_21947[(1)] = (40));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_21802 === (8))){
var inst_21684 = (state_21801[(15)]);
var inst_21685 = (state_21801[(16)]);
var inst_21687 = (inst_21685 < inst_21684);
var inst_21688 = inst_21687;
var state_21801__$1 = state_21801;
if(cljs.core.truth_(inst_21688)){
var statearr_21884_21948 = state_21801__$1;
(statearr_21884_21948[(1)] = (10));

} else {
var statearr_21885_21949 = state_21801__$1;
(statearr_21885_21949[(1)] = (11));

}

return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___21895,cs,m,dchan,dctr,done))
;
return ((function (switch__6007__auto__,c__6063__auto___21895,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_21889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21889[(0)] = state_machine__6008__auto__);

(statearr_21889[(1)] = (1));

return statearr_21889;
});
var state_machine__6008__auto____1 = (function (state_21801){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_21801);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e21890){if((e21890 instanceof Object)){
var ex__6011__auto__ = e21890;
var statearr_21891_21950 = state_21801;
(statearr_21891_21950[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21801);

return cljs.core.constant$keyword$62;
} else {
throw e21890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__21951 = state_21801;
state_21801 = G__21951;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_21801){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_21801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___21895,cs,m,dchan,dctr,done))
})();
var state__6065__auto__ = (function (){var statearr_21892 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_21892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___21895);

return statearr_21892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___21895,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj21956 = {};
return obj21956;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__21960 = x__4416__auto__;
return goog.typeOf(G__21960);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__21964 = x__4416__auto__;
return goog.typeOf(G__21964);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__21968 = x__4416__auto__;
return goog.typeOf(G__21968);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__21972 = x__4416__auto__;
return goog.typeOf(G__21972);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__21976 = x__4416__auto__;
return goog.typeOf(G__21976);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21977){
var map__21983 = p__21977;
var map__21983__$1 = ((cljs.core.seq_QMARK_(map__21983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21983):map__21983);
var opts = map__21983__$1;
var statearr_21984_21988 = state;
(statearr_21984_21988[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__21983,map__21983__$1,opts){
return (function (val){
var statearr_21985_21989 = state;
(statearr_21985_21989[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21983,map__21983__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21986_21990 = state;
(statearr_21986_21990[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21987 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21987) : cljs.core.deref.call(null,G__21987));
})());


return cljs.core.constant$keyword$62;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21977 = null;
if (arguments.length > 3) {
var G__21991__i = 0, G__21991__a = new Array(arguments.length -  3);
while (G__21991__i < G__21991__a.length) {G__21991__a[G__21991__i] = arguments[G__21991__i + 3]; ++G__21991__i;}
  p__21977 = new cljs.core.IndexedSeq(G__21991__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21977);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21992){
var state = cljs.core.first(arglist__21992);
arglist__21992 = cljs.core.next(arglist__21992);
var cont_block = cljs.core.first(arglist__21992);
arglist__21992 = cljs.core.next(arglist__21992);
var ports = cljs.core.first(arglist__21992);
var p__21977 = cljs.core.rest(arglist__21992);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21977);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__22126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22126) : cljs.core.atom.call(null,G__22126));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$73);
var solo_mode = (function (){var G__22127 = cljs.core.constant$keyword$72;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22127) : cljs.core.atom.call(null,G__22127));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__22128 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22128) : attr.call(null,G__22128));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__22129 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22129) : cljs.core.deref.call(null,G__22129));
})();
var mode = (function (){var G__22130 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22130) : cljs.core.deref.call(null,G__22130));
})();
var solos = pick(cljs.core.constant$keyword$73,chs);
var pauses = pick(cljs.core.constant$keyword$71,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$74,solos,cljs.core.constant$keyword$75,pick(cljs.core.constant$keyword$72,chs),cljs.core.constant$keyword$76,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$71)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22131 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22131 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22132){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22132 = meta22132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22131.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22131.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22134_22259 = self__.cs;
var G__22135_22260 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22134_22259,G__22135_22260) : cljs.core.reset_BANG_.call(null,G__22134_22259,G__22135_22260));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__22136 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__22136) : self__.solo_modes.call(null,G__22136));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__22137_22261 = self__.solo_mode;
var G__22138_22262 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22137_22261,G__22138_22262) : cljs.core.reset_BANG_.call(null,G__22137_22261,G__22138_22262));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22133){
var self__ = this;
var _22133__$1 = this;
return self__.meta22132;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22133,meta22132__$1){
var self__ = this;
var _22133__$1 = this;
return (new cljs.core.async.t22131(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22132__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22131.cljs$lang$type = true;

cljs.core.async.t22131.cljs$lang$ctorStr = "cljs.core.async/t22131";

cljs.core.async.t22131.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t22131");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22131 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22131(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22132){
return (new cljs.core.async.t22131(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22132));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22131(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,25,cljs.core.constant$keyword$33,510,cljs.core.constant$keyword$34,11,cljs.core.constant$keyword$35,499,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
})()
;
var c__6063__auto___22263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22210){
var state_val_22211 = (state_22210[(1)]);
if((state_val_22211 === (7))){
var inst_22152 = (state_22210[(7)]);
var inst_22157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22152);
var state_22210__$1 = state_22210;
var statearr_22212_22264 = state_22210__$1;
(statearr_22212_22264[(2)] = inst_22157);

(statearr_22212_22264[(1)] = (9));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (20))){
var inst_22167 = (state_22210[(8)]);
var state_22210__$1 = state_22210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22210__$1,(23),out,inst_22167);
} else {
if((state_val_22211 === (1))){
var inst_22142 = (state_22210[(9)]);
var inst_22142__$1 = calc_state();
var inst_22143 = cljs.core.seq_QMARK_(inst_22142__$1);
var state_22210__$1 = (function (){var statearr_22213 = state_22210;
(statearr_22213[(9)] = inst_22142__$1);

return statearr_22213;
})();
if(inst_22143){
var statearr_22214_22265 = state_22210__$1;
(statearr_22214_22265[(1)] = (2));

} else {
var statearr_22215_22266 = state_22210__$1;
(statearr_22215_22266[(1)] = (3));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (24))){
var inst_22160 = (state_22210[(10)]);
var inst_22152 = inst_22160;
var state_22210__$1 = (function (){var statearr_22216 = state_22210;
(statearr_22216[(7)] = inst_22152);

return statearr_22216;
})();
var statearr_22217_22267 = state_22210__$1;
(statearr_22217_22267[(2)] = null);

(statearr_22217_22267[(1)] = (5));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (4))){
var inst_22142 = (state_22210[(9)]);
var inst_22148 = (state_22210[(2)]);
var inst_22149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22148,cljs.core.constant$keyword$76);
var inst_22150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22148,cljs.core.constant$keyword$75);
var inst_22151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22148,cljs.core.constant$keyword$74);
var inst_22152 = inst_22142;
var state_22210__$1 = (function (){var statearr_22218 = state_22210;
(statearr_22218[(11)] = inst_22151);

(statearr_22218[(12)] = inst_22150);

(statearr_22218[(7)] = inst_22152);

(statearr_22218[(13)] = inst_22149);

return statearr_22218;
})();
var statearr_22219_22268 = state_22210__$1;
(statearr_22219_22268[(2)] = null);

(statearr_22219_22268[(1)] = (5));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (15))){
var state_22210__$1 = state_22210;
var statearr_22220_22269 = state_22210__$1;
(statearr_22220_22269[(2)] = null);

(statearr_22220_22269[(1)] = (16));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (21))){
var inst_22160 = (state_22210[(10)]);
var inst_22152 = inst_22160;
var state_22210__$1 = (function (){var statearr_22221 = state_22210;
(statearr_22221[(7)] = inst_22152);

return statearr_22221;
})();
var statearr_22222_22270 = state_22210__$1;
(statearr_22222_22270[(2)] = null);

(statearr_22222_22270[(1)] = (5));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (13))){
var inst_22206 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22223_22271 = state_22210__$1;
(statearr_22223_22271[(2)] = inst_22206);

(statearr_22223_22271[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (22))){
var inst_22204 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22224_22272 = state_22210__$1;
(statearr_22224_22272[(2)] = inst_22204);

(statearr_22224_22272[(1)] = (13));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (6))){
var inst_22208 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22210__$1,inst_22208);
} else {
if((state_val_22211 === (25))){
var state_22210__$1 = state_22210;
var statearr_22225_22273 = state_22210__$1;
(statearr_22225_22273[(2)] = null);

(statearr_22225_22273[(1)] = (26));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (17))){
var inst_22183 = (state_22210[(14)]);
var state_22210__$1 = state_22210;
var statearr_22226_22274 = state_22210__$1;
(statearr_22226_22274[(2)] = inst_22183);

(statearr_22226_22274[(1)] = (19));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (3))){
var inst_22142 = (state_22210[(9)]);
var state_22210__$1 = state_22210;
var statearr_22227_22275 = state_22210__$1;
(statearr_22227_22275[(2)] = inst_22142);

(statearr_22227_22275[(1)] = (4));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (12))){
var inst_22168 = (state_22210[(15)]);
var inst_22163 = (state_22210[(16)]);
var inst_22183 = (state_22210[(14)]);
var inst_22183__$1 = (function (){var G__22228 = inst_22168;
return (inst_22163.cljs$core$IFn$_invoke$arity$1 ? inst_22163.cljs$core$IFn$_invoke$arity$1(G__22228) : inst_22163.call(null,G__22228));
})();
var state_22210__$1 = (function (){var statearr_22229 = state_22210;
(statearr_22229[(14)] = inst_22183__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22183__$1)){
var statearr_22230_22276 = state_22210__$1;
(statearr_22230_22276[(1)] = (17));

} else {
var statearr_22231_22277 = state_22210__$1;
(statearr_22231_22277[(1)] = (18));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (2))){
var inst_22142 = (state_22210[(9)]);
var inst_22145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22142);
var state_22210__$1 = state_22210;
var statearr_22232_22278 = state_22210__$1;
(statearr_22232_22278[(2)] = inst_22145);

(statearr_22232_22278[(1)] = (4));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (23))){
var inst_22195 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
if(cljs.core.truth_(inst_22195)){
var statearr_22233_22279 = state_22210__$1;
(statearr_22233_22279[(1)] = (24));

} else {
var statearr_22234_22280 = state_22210__$1;
(statearr_22234_22280[(1)] = (25));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (19))){
var inst_22192 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
if(cljs.core.truth_(inst_22192)){
var statearr_22235_22281 = state_22210__$1;
(statearr_22235_22281[(1)] = (20));

} else {
var statearr_22236_22282 = state_22210__$1;
(statearr_22236_22282[(1)] = (21));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (11))){
var inst_22167 = (state_22210[(8)]);
var inst_22173 = (inst_22167 == null);
var state_22210__$1 = state_22210;
if(cljs.core.truth_(inst_22173)){
var statearr_22237_22283 = state_22210__$1;
(statearr_22237_22283[(1)] = (14));

} else {
var statearr_22238_22284 = state_22210__$1;
(statearr_22238_22284[(1)] = (15));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (9))){
var inst_22160 = (state_22210[(10)]);
var inst_22160__$1 = (state_22210[(2)]);
var inst_22161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22160__$1,cljs.core.constant$keyword$76);
var inst_22162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22160__$1,cljs.core.constant$keyword$75);
var inst_22163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22160__$1,cljs.core.constant$keyword$74);
var state_22210__$1 = (function (){var statearr_22239 = state_22210;
(statearr_22239[(10)] = inst_22160__$1);

(statearr_22239[(16)] = inst_22163);

(statearr_22239[(17)] = inst_22162);

return statearr_22239;
})();
return cljs.core.async.ioc_alts_BANG_(state_22210__$1,(10),inst_22161);
} else {
if((state_val_22211 === (5))){
var inst_22152 = (state_22210[(7)]);
var inst_22155 = cljs.core.seq_QMARK_(inst_22152);
var state_22210__$1 = state_22210;
if(inst_22155){
var statearr_22240_22285 = state_22210__$1;
(statearr_22240_22285[(1)] = (7));

} else {
var statearr_22241_22286 = state_22210__$1;
(statearr_22241_22286[(1)] = (8));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (14))){
var inst_22168 = (state_22210[(15)]);
var inst_22175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22168);
var state_22210__$1 = state_22210;
var statearr_22242_22287 = state_22210__$1;
(statearr_22242_22287[(2)] = inst_22175);

(statearr_22242_22287[(1)] = (16));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (26))){
var inst_22200 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22243_22288 = state_22210__$1;
(statearr_22243_22288[(2)] = inst_22200);

(statearr_22243_22288[(1)] = (22));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (16))){
var inst_22178 = (state_22210[(2)]);
var inst_22179 = calc_state();
var inst_22152 = inst_22179;
var state_22210__$1 = (function (){var statearr_22244 = state_22210;
(statearr_22244[(7)] = inst_22152);

(statearr_22244[(18)] = inst_22178);

return statearr_22244;
})();
var statearr_22245_22289 = state_22210__$1;
(statearr_22245_22289[(2)] = null);

(statearr_22245_22289[(1)] = (5));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (10))){
var inst_22167 = (state_22210[(8)]);
var inst_22168 = (state_22210[(15)]);
var inst_22166 = (state_22210[(2)]);
var inst_22167__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22166,(0),null);
var inst_22168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22166,(1),null);
var inst_22169 = (inst_22167__$1 == null);
var inst_22170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22168__$1,change);
var inst_22171 = (inst_22169) || (inst_22170);
var state_22210__$1 = (function (){var statearr_22246 = state_22210;
(statearr_22246[(8)] = inst_22167__$1);

(statearr_22246[(15)] = inst_22168__$1);

return statearr_22246;
})();
if(cljs.core.truth_(inst_22171)){
var statearr_22247_22290 = state_22210__$1;
(statearr_22247_22290[(1)] = (11));

} else {
var statearr_22248_22291 = state_22210__$1;
(statearr_22248_22291[(1)] = (12));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (18))){
var inst_22168 = (state_22210[(15)]);
var inst_22163 = (state_22210[(16)]);
var inst_22162 = (state_22210[(17)]);
var inst_22187 = cljs.core.empty_QMARK_(inst_22163);
var inst_22188 = (function (){var G__22249 = inst_22168;
return (inst_22162.cljs$core$IFn$_invoke$arity$1 ? inst_22162.cljs$core$IFn$_invoke$arity$1(G__22249) : inst_22162.call(null,G__22249));
})();
var inst_22189 = cljs.core.not(inst_22188);
var inst_22190 = (inst_22187) && (inst_22189);
var state_22210__$1 = state_22210;
var statearr_22250_22292 = state_22210__$1;
(statearr_22250_22292[(2)] = inst_22190);

(statearr_22250_22292[(1)] = (19));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22211 === (8))){
var inst_22152 = (state_22210[(7)]);
var state_22210__$1 = state_22210;
var statearr_22251_22293 = state_22210__$1;
(statearr_22251_22293[(2)] = inst_22152);

(statearr_22251_22293[(1)] = (9));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6007__auto__,c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_22255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22255[(0)] = state_machine__6008__auto__);

(statearr_22255[(1)] = (1));

return statearr_22255;
});
var state_machine__6008__auto____1 = (function (state_22210){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_22210);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e22256){if((e22256 instanceof Object)){
var ex__6011__auto__ = e22256;
var statearr_22257_22294 = state_22210;
(statearr_22257_22294[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22210);

return cljs.core.constant$keyword$62;
} else {
throw e22256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__22295 = state_22210;
state_22210 = G__22295;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_22210){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_22210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6065__auto__ = (function (){var statearr_22258 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_22258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___22263);

return statearr_22258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___22263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj22297 = {};
return obj22297;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22301 = x__4416__auto__;
return goog.typeOf(G__22301);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22305 = x__4416__auto__;
return goog.typeOf(G__22305);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22311 = x__4416__auto__;
return goog.typeOf(G__22311);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22313 = x__4416__auto__;
return goog.typeOf(G__22313);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__22452 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22452) : cljs.core.atom.call(null,G__22452));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22454 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22454) : cljs.core.deref.call(null,G__22454));
})(),topic);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3772__auto__,mults){
return (function (p1__22314_SHARP_){
if(cljs.core.truth_((function (){var G__22455 = topic;
return (p1__22314_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22314_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22455) : p1__22314_SHARP_.call(null,G__22455));
})())){
return p1__22314_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22314_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__22456 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__22456) : buf_fn.call(null,G__22456));
})())));
}
});})(or__3772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22457 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22458){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22458 = meta22458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22457.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__22460 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__22460) : self__.ensure_mult.call(null,G__22460));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22461 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22461) : cljs.core.deref.call(null,G__22461));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22462 = self__.mults;
var G__22463 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22462,G__22463) : cljs.core.reset_BANG_.call(null,G__22462,G__22463));
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22459){
var self__ = this;
var _22459__$1 = this;
return self__.meta22458;
});})(mults,ensure_mult))
;

cljs.core.async.t22457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22459,meta22458__$1){
var self__ = this;
var _22459__$1 = this;
return (new cljs.core.async.t22457(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22458__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22457.cljs$lang$type = true;

cljs.core.async.t22457.cljs$lang$ctorStr = "cljs.core.async/t22457";

cljs.core.async.t22457.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t22457");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22457 = ((function (mults,ensure_mult){
return (function __GT_t22457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22458){
return (new cljs.core.async.t22457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22458));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22457(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,65,cljs.core.constant$keyword$33,603,cljs.core.constant$keyword$34,14,cljs.core.constant$keyword$35,591,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
})()
;
var c__6063__auto___22586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___22586,mults,ensure_mult,p){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___22586,mults,ensure_mult,p){
return (function (state_22535){
var state_val_22536 = (state_22535[(1)]);
if((state_val_22536 === (7))){
var inst_22531 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22537_22587 = state_22535__$1;
(statearr_22537_22587[(2)] = inst_22531);

(statearr_22537_22587[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (20))){
var state_22535__$1 = state_22535;
var statearr_22538_22588 = state_22535__$1;
(statearr_22538_22588[(2)] = null);

(statearr_22538_22588[(1)] = (21));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (1))){
var state_22535__$1 = state_22535;
var statearr_22539_22589 = state_22535__$1;
(statearr_22539_22589[(2)] = null);

(statearr_22539_22589[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (24))){
var inst_22514 = (state_22535[(7)]);
var inst_22523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22514);
var state_22535__$1 = state_22535;
var statearr_22540_22590 = state_22535__$1;
(statearr_22540_22590[(2)] = inst_22523);

(statearr_22540_22590[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (4))){
var inst_22466 = (state_22535[(8)]);
var inst_22466__$1 = (state_22535[(2)]);
var inst_22467 = (inst_22466__$1 == null);
var state_22535__$1 = (function (){var statearr_22541 = state_22535;
(statearr_22541[(8)] = inst_22466__$1);

return statearr_22541;
})();
if(cljs.core.truth_(inst_22467)){
var statearr_22542_22591 = state_22535__$1;
(statearr_22542_22591[(1)] = (5));

} else {
var statearr_22543_22592 = state_22535__$1;
(statearr_22543_22592[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (15))){
var inst_22508 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22544_22593 = state_22535__$1;
(statearr_22544_22593[(2)] = inst_22508);

(statearr_22544_22593[(1)] = (12));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (21))){
var inst_22528 = (state_22535[(2)]);
var state_22535__$1 = (function (){var statearr_22545 = state_22535;
(statearr_22545[(9)] = inst_22528);

return statearr_22545;
})();
var statearr_22546_22594 = state_22535__$1;
(statearr_22546_22594[(2)] = null);

(statearr_22546_22594[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (13))){
var inst_22490 = (state_22535[(10)]);
var inst_22492 = cljs.core.chunked_seq_QMARK_(inst_22490);
var state_22535__$1 = state_22535;
if(inst_22492){
var statearr_22547_22595 = state_22535__$1;
(statearr_22547_22595[(1)] = (16));

} else {
var statearr_22548_22596 = state_22535__$1;
(statearr_22548_22596[(1)] = (17));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (22))){
var inst_22520 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
if(cljs.core.truth_(inst_22520)){
var statearr_22549_22597 = state_22535__$1;
(statearr_22549_22597[(1)] = (23));

} else {
var statearr_22550_22598 = state_22535__$1;
(statearr_22550_22598[(1)] = (24));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (6))){
var inst_22514 = (state_22535[(7)]);
var inst_22516 = (state_22535[(11)]);
var inst_22466 = (state_22535[(8)]);
var inst_22514__$1 = (function (){var G__22551 = inst_22466;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__22551) : topic_fn.call(null,G__22551));
})();
var inst_22515 = (function (){var G__22552 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22552) : cljs.core.deref.call(null,G__22552));
})();
var inst_22516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22515,inst_22514__$1);
var state_22535__$1 = (function (){var statearr_22553 = state_22535;
(statearr_22553[(7)] = inst_22514__$1);

(statearr_22553[(11)] = inst_22516__$1);

return statearr_22553;
})();
if(cljs.core.truth_(inst_22516__$1)){
var statearr_22554_22599 = state_22535__$1;
(statearr_22554_22599[(1)] = (19));

} else {
var statearr_22555_22600 = state_22535__$1;
(statearr_22555_22600[(1)] = (20));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (25))){
var inst_22525 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22556_22601 = state_22535__$1;
(statearr_22556_22601[(2)] = inst_22525);

(statearr_22556_22601[(1)] = (21));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (17))){
var inst_22490 = (state_22535[(10)]);
var inst_22499 = cljs.core.first(inst_22490);
var inst_22500 = cljs.core.async.muxch_STAR_(inst_22499);
var inst_22501 = cljs.core.async.close_BANG_(inst_22500);
var inst_22502 = cljs.core.next(inst_22490);
var inst_22476 = inst_22502;
var inst_22477 = null;
var inst_22478 = (0);
var inst_22479 = (0);
var state_22535__$1 = (function (){var statearr_22557 = state_22535;
(statearr_22557[(12)] = inst_22477);

(statearr_22557[(13)] = inst_22479);

(statearr_22557[(14)] = inst_22476);

(statearr_22557[(15)] = inst_22478);

(statearr_22557[(16)] = inst_22501);

return statearr_22557;
})();
var statearr_22558_22602 = state_22535__$1;
(statearr_22558_22602[(2)] = null);

(statearr_22558_22602[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (3))){
var inst_22533 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22535__$1,inst_22533);
} else {
if((state_val_22536 === (12))){
var inst_22510 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22559_22603 = state_22535__$1;
(statearr_22559_22603[(2)] = inst_22510);

(statearr_22559_22603[(1)] = (9));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (2))){
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22535__$1,(4),ch);
} else {
if((state_val_22536 === (23))){
var state_22535__$1 = state_22535;
var statearr_22560_22604 = state_22535__$1;
(statearr_22560_22604[(2)] = null);

(statearr_22560_22604[(1)] = (25));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (19))){
var inst_22516 = (state_22535[(11)]);
var inst_22466 = (state_22535[(8)]);
var inst_22518 = cljs.core.async.muxch_STAR_(inst_22516);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22535__$1,(22),inst_22518,inst_22466);
} else {
if((state_val_22536 === (11))){
var inst_22476 = (state_22535[(14)]);
var inst_22490 = (state_22535[(10)]);
var inst_22490__$1 = cljs.core.seq(inst_22476);
var state_22535__$1 = (function (){var statearr_22561 = state_22535;
(statearr_22561[(10)] = inst_22490__$1);

return statearr_22561;
})();
if(inst_22490__$1){
var statearr_22562_22605 = state_22535__$1;
(statearr_22562_22605[(1)] = (13));

} else {
var statearr_22563_22606 = state_22535__$1;
(statearr_22563_22606[(1)] = (14));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (9))){
var inst_22512 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22564_22607 = state_22535__$1;
(statearr_22564_22607[(2)] = inst_22512);

(statearr_22564_22607[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (5))){
var inst_22473 = (function (){var G__22565 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22565) : cljs.core.deref.call(null,G__22565));
})();
var inst_22474 = cljs.core.vals(inst_22473);
var inst_22475 = cljs.core.seq(inst_22474);
var inst_22476 = inst_22475;
var inst_22477 = null;
var inst_22478 = (0);
var inst_22479 = (0);
var state_22535__$1 = (function (){var statearr_22566 = state_22535;
(statearr_22566[(12)] = inst_22477);

(statearr_22566[(13)] = inst_22479);

(statearr_22566[(14)] = inst_22476);

(statearr_22566[(15)] = inst_22478);

return statearr_22566;
})();
var statearr_22567_22608 = state_22535__$1;
(statearr_22567_22608[(2)] = null);

(statearr_22567_22608[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (14))){
var state_22535__$1 = state_22535;
var statearr_22571_22609 = state_22535__$1;
(statearr_22571_22609[(2)] = null);

(statearr_22571_22609[(1)] = (15));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (16))){
var inst_22490 = (state_22535[(10)]);
var inst_22494 = cljs.core.chunk_first(inst_22490);
var inst_22495 = cljs.core.chunk_rest(inst_22490);
var inst_22496 = cljs.core.count(inst_22494);
var inst_22476 = inst_22495;
var inst_22477 = inst_22494;
var inst_22478 = inst_22496;
var inst_22479 = (0);
var state_22535__$1 = (function (){var statearr_22572 = state_22535;
(statearr_22572[(12)] = inst_22477);

(statearr_22572[(13)] = inst_22479);

(statearr_22572[(14)] = inst_22476);

(statearr_22572[(15)] = inst_22478);

return statearr_22572;
})();
var statearr_22573_22610 = state_22535__$1;
(statearr_22573_22610[(2)] = null);

(statearr_22573_22610[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (10))){
var inst_22477 = (state_22535[(12)]);
var inst_22479 = (state_22535[(13)]);
var inst_22476 = (state_22535[(14)]);
var inst_22478 = (state_22535[(15)]);
var inst_22484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22477,inst_22479);
var inst_22485 = cljs.core.async.muxch_STAR_(inst_22484);
var inst_22486 = cljs.core.async.close_BANG_(inst_22485);
var inst_22487 = (inst_22479 + (1));
var tmp22568 = inst_22477;
var tmp22569 = inst_22476;
var tmp22570 = inst_22478;
var inst_22476__$1 = tmp22569;
var inst_22477__$1 = tmp22568;
var inst_22478__$1 = tmp22570;
var inst_22479__$1 = inst_22487;
var state_22535__$1 = (function (){var statearr_22574 = state_22535;
(statearr_22574[(12)] = inst_22477__$1);

(statearr_22574[(13)] = inst_22479__$1);

(statearr_22574[(14)] = inst_22476__$1);

(statearr_22574[(17)] = inst_22486);

(statearr_22574[(15)] = inst_22478__$1);

return statearr_22574;
})();
var statearr_22575_22611 = state_22535__$1;
(statearr_22575_22611[(2)] = null);

(statearr_22575_22611[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (18))){
var inst_22505 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22576_22612 = state_22535__$1;
(statearr_22576_22612[(2)] = inst_22505);

(statearr_22576_22612[(1)] = (15));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22536 === (8))){
var inst_22479 = (state_22535[(13)]);
var inst_22478 = (state_22535[(15)]);
var inst_22481 = (inst_22479 < inst_22478);
var inst_22482 = inst_22481;
var state_22535__$1 = state_22535;
if(cljs.core.truth_(inst_22482)){
var statearr_22577_22613 = state_22535__$1;
(statearr_22577_22613[(1)] = (10));

} else {
var statearr_22578_22614 = state_22535__$1;
(statearr_22578_22614[(1)] = (11));

}

return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___22586,mults,ensure_mult,p))
;
return ((function (switch__6007__auto__,c__6063__auto___22586,mults,ensure_mult,p){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_22582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22582[(0)] = state_machine__6008__auto__);

(statearr_22582[(1)] = (1));

return statearr_22582;
});
var state_machine__6008__auto____1 = (function (state_22535){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_22535);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e22583){if((e22583 instanceof Object)){
var ex__6011__auto__ = e22583;
var statearr_22584_22615 = state_22535;
(statearr_22584_22615[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22535);

return cljs.core.constant$keyword$62;
} else {
throw e22583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__22616 = state_22535;
state_22535 = G__22616;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_22535){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_22535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___22586,mults,ensure_mult,p))
})();
var state__6065__auto__ = (function (){var statearr_22585 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_22585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___22586);

return statearr_22585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___22586,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__22697 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22697) : cljs.core.atom.call(null,G__22697));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__6063__auto___22770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22736){
var state_val_22737 = (state_22736[(1)]);
if((state_val_22737 === (7))){
var state_22736__$1 = state_22736;
var statearr_22738_22771 = state_22736__$1;
(statearr_22738_22771[(2)] = null);

(statearr_22738_22771[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (1))){
var state_22736__$1 = state_22736;
var statearr_22739_22772 = state_22736__$1;
(statearr_22739_22772[(2)] = null);

(statearr_22739_22772[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (4))){
var inst_22700 = (state_22736[(7)]);
var inst_22702 = (inst_22700 < cnt);
var state_22736__$1 = state_22736;
if(cljs.core.truth_(inst_22702)){
var statearr_22740_22773 = state_22736__$1;
(statearr_22740_22773[(1)] = (6));

} else {
var statearr_22741_22774 = state_22736__$1;
(statearr_22741_22774[(1)] = (7));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (15))){
var inst_22732 = (state_22736[(2)]);
var state_22736__$1 = state_22736;
var statearr_22742_22775 = state_22736__$1;
(statearr_22742_22775[(2)] = inst_22732);

(statearr_22742_22775[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (13))){
var inst_22725 = cljs.core.async.close_BANG_(out);
var state_22736__$1 = state_22736;
var statearr_22743_22776 = state_22736__$1;
(statearr_22743_22776[(2)] = inst_22725);

(statearr_22743_22776[(1)] = (15));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (6))){
var state_22736__$1 = state_22736;
var statearr_22744_22777 = state_22736__$1;
(statearr_22744_22777[(2)] = null);

(statearr_22744_22777[(1)] = (11));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (3))){
var inst_22734 = (state_22736[(2)]);
var state_22736__$1 = state_22736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22736__$1,inst_22734);
} else {
if((state_val_22737 === (12))){
var inst_22722 = (state_22736[(8)]);
var inst_22722__$1 = (state_22736[(2)]);
var inst_22723 = cljs.core.some(cljs.core.nil_QMARK_,inst_22722__$1);
var state_22736__$1 = (function (){var statearr_22745 = state_22736;
(statearr_22745[(8)] = inst_22722__$1);

return statearr_22745;
})();
if(cljs.core.truth_(inst_22723)){
var statearr_22746_22778 = state_22736__$1;
(statearr_22746_22778[(1)] = (13));

} else {
var statearr_22747_22779 = state_22736__$1;
(statearr_22747_22779[(1)] = (14));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (2))){
var inst_22699 = (function (){var G__22748 = dctr;
var G__22749 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22748,G__22749) : cljs.core.reset_BANG_.call(null,G__22748,G__22749));
})();
var inst_22700 = (0);
var state_22736__$1 = (function (){var statearr_22750 = state_22736;
(statearr_22750[(9)] = inst_22699);

(statearr_22750[(7)] = inst_22700);

return statearr_22750;
})();
var statearr_22751_22780 = state_22736__$1;
(statearr_22751_22780[(2)] = null);

(statearr_22751_22780[(1)] = (4));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (11))){
var inst_22700 = (state_22736[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22736,(10),Object,null,(9));
var inst_22709 = (function (){var G__22752 = inst_22700;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__22752) : chs__$1.call(null,G__22752));
})();
var inst_22710 = (function (){var G__22753 = inst_22700;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22753) : done.call(null,G__22753));
})();
var inst_22711 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22709,inst_22710);
var state_22736__$1 = state_22736;
var statearr_22754_22781 = state_22736__$1;
(statearr_22754_22781[(2)] = inst_22711);


cljs.core.async.impl.ioc_helpers.process_exception(state_22736__$1);

return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (9))){
var inst_22700 = (state_22736[(7)]);
var inst_22713 = (state_22736[(2)]);
var inst_22714 = (inst_22700 + (1));
var inst_22700__$1 = inst_22714;
var state_22736__$1 = (function (){var statearr_22755 = state_22736;
(statearr_22755[(10)] = inst_22713);

(statearr_22755[(7)] = inst_22700__$1);

return statearr_22755;
})();
var statearr_22756_22782 = state_22736__$1;
(statearr_22756_22782[(2)] = null);

(statearr_22756_22782[(1)] = (4));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (5))){
var inst_22720 = (state_22736[(2)]);
var state_22736__$1 = (function (){var statearr_22757 = state_22736;
(statearr_22757[(11)] = inst_22720);

return statearr_22757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22736__$1,(12),dchan);
} else {
if((state_val_22737 === (14))){
var inst_22722 = (state_22736[(8)]);
var inst_22727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22722);
var state_22736__$1 = state_22736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22736__$1,(16),out,inst_22727);
} else {
if((state_val_22737 === (16))){
var inst_22729 = (state_22736[(2)]);
var state_22736__$1 = (function (){var statearr_22758 = state_22736;
(statearr_22758[(12)] = inst_22729);

return statearr_22758;
})();
var statearr_22759_22783 = state_22736__$1;
(statearr_22759_22783[(2)] = null);

(statearr_22759_22783[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (10))){
var inst_22704 = (state_22736[(2)]);
var inst_22705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22736__$1 = (function (){var statearr_22760 = state_22736;
(statearr_22760[(13)] = inst_22704);

return statearr_22760;
})();
var statearr_22761_22784 = state_22736__$1;
(statearr_22761_22784[(2)] = inst_22705);


cljs.core.async.impl.ioc_helpers.process_exception(state_22736__$1);

return cljs.core.constant$keyword$62;
} else {
if((state_val_22737 === (8))){
var inst_22718 = (state_22736[(2)]);
var state_22736__$1 = state_22736;
var statearr_22762_22785 = state_22736__$1;
(statearr_22762_22785[(2)] = inst_22718);

(statearr_22762_22785[(1)] = (5));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6007__auto__,c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_22766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22766[(0)] = state_machine__6008__auto__);

(statearr_22766[(1)] = (1));

return statearr_22766;
});
var state_machine__6008__auto____1 = (function (state_22736){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_22736);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e22767){if((e22767 instanceof Object)){
var ex__6011__auto__ = e22767;
var statearr_22768_22786 = state_22736;
(statearr_22768_22786[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22736);

return cljs.core.constant$keyword$62;
} else {
throw e22767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__22787 = state_22736;
state_22736 = G__22787;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_22736){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_22736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6065__auto__ = (function (){var statearr_22769 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_22769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___22770);

return statearr_22769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___22770,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___22897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___22897,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___22897,out){
return (function (state_22873){
var state_val_22874 = (state_22873[(1)]);
if((state_val_22874 === (7))){
var inst_22853 = (state_22873[(7)]);
var inst_22852 = (state_22873[(8)]);
var inst_22852__$1 = (state_22873[(2)]);
var inst_22853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22852__$1,(0),null);
var inst_22854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22852__$1,(1),null);
var inst_22855 = (inst_22853__$1 == null);
var state_22873__$1 = (function (){var statearr_22875 = state_22873;
(statearr_22875[(7)] = inst_22853__$1);

(statearr_22875[(8)] = inst_22852__$1);

(statearr_22875[(9)] = inst_22854);

return statearr_22875;
})();
if(cljs.core.truth_(inst_22855)){
var statearr_22876_22898 = state_22873__$1;
(statearr_22876_22898[(1)] = (8));

} else {
var statearr_22877_22899 = state_22873__$1;
(statearr_22877_22899[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (1))){
var inst_22844 = cljs.core.vec(chs);
var inst_22845 = inst_22844;
var state_22873__$1 = (function (){var statearr_22878 = state_22873;
(statearr_22878[(10)] = inst_22845);

return statearr_22878;
})();
var statearr_22879_22900 = state_22873__$1;
(statearr_22879_22900[(2)] = null);

(statearr_22879_22900[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (4))){
var inst_22845 = (state_22873[(10)]);
var state_22873__$1 = state_22873;
return cljs.core.async.ioc_alts_BANG_(state_22873__$1,(7),inst_22845);
} else {
if((state_val_22874 === (6))){
var inst_22869 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22880_22901 = state_22873__$1;
(statearr_22880_22901[(2)] = inst_22869);

(statearr_22880_22901[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (3))){
var inst_22871 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22873__$1,inst_22871);
} else {
if((state_val_22874 === (2))){
var inst_22845 = (state_22873[(10)]);
var inst_22847 = cljs.core.count(inst_22845);
var inst_22848 = (inst_22847 > (0));
var state_22873__$1 = state_22873;
if(cljs.core.truth_(inst_22848)){
var statearr_22882_22902 = state_22873__$1;
(statearr_22882_22902[(1)] = (4));

} else {
var statearr_22883_22903 = state_22873__$1;
(statearr_22883_22903[(1)] = (5));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (11))){
var inst_22845 = (state_22873[(10)]);
var inst_22862 = (state_22873[(2)]);
var tmp22881 = inst_22845;
var inst_22845__$1 = tmp22881;
var state_22873__$1 = (function (){var statearr_22884 = state_22873;
(statearr_22884[(11)] = inst_22862);

(statearr_22884[(10)] = inst_22845__$1);

return statearr_22884;
})();
var statearr_22885_22904 = state_22873__$1;
(statearr_22885_22904[(2)] = null);

(statearr_22885_22904[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (9))){
var inst_22853 = (state_22873[(7)]);
var state_22873__$1 = state_22873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22873__$1,(11),out,inst_22853);
} else {
if((state_val_22874 === (5))){
var inst_22867 = cljs.core.async.close_BANG_(out);
var state_22873__$1 = state_22873;
var statearr_22886_22905 = state_22873__$1;
(statearr_22886_22905[(2)] = inst_22867);

(statearr_22886_22905[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (10))){
var inst_22865 = (state_22873[(2)]);
var state_22873__$1 = state_22873;
var statearr_22887_22906 = state_22873__$1;
(statearr_22887_22906[(2)] = inst_22865);

(statearr_22887_22906[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22874 === (8))){
var inst_22853 = (state_22873[(7)]);
var inst_22845 = (state_22873[(10)]);
var inst_22852 = (state_22873[(8)]);
var inst_22854 = (state_22873[(9)]);
var inst_22857 = (function (){var c = inst_22854;
var v = inst_22853;
var vec__22850 = inst_22852;
var cs = inst_22845;
return ((function (c,v,vec__22850,cs,inst_22853,inst_22845,inst_22852,inst_22854,state_val_22874,c__6063__auto___22897,out){
return (function (p1__22788_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22788_SHARP_);
});
;})(c,v,vec__22850,cs,inst_22853,inst_22845,inst_22852,inst_22854,state_val_22874,c__6063__auto___22897,out))
})();
var inst_22858 = cljs.core.filterv(inst_22857,inst_22845);
var inst_22845__$1 = inst_22858;
var state_22873__$1 = (function (){var statearr_22888 = state_22873;
(statearr_22888[(10)] = inst_22845__$1);

return statearr_22888;
})();
var statearr_22889_22907 = state_22873__$1;
(statearr_22889_22907[(2)] = null);

(statearr_22889_22907[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___22897,out))
;
return ((function (switch__6007__auto__,c__6063__auto___22897,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = state_machine__6008__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var state_machine__6008__auto____1 = (function (state_22873){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_22873);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__6011__auto__ = e22894;
var statearr_22895_22908 = state_22873;
(statearr_22895_22908[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22873);

return cljs.core.constant$keyword$62;
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__22909 = state_22873;
state_22873 = G__22909;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_22873){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_22873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___22897,out))
})();
var state__6065__auto__ = (function (){var statearr_22896 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___22897);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___22897,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___23005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___23005,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___23005,out){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (7))){
var inst_22964 = (state_22982[(7)]);
var inst_22964__$1 = (state_22982[(2)]);
var inst_22965 = (inst_22964__$1 == null);
var inst_22966 = cljs.core.not(inst_22965);
var state_22982__$1 = (function (){var statearr_22984 = state_22982;
(statearr_22984[(7)] = inst_22964__$1);

return statearr_22984;
})();
if(inst_22966){
var statearr_22985_23006 = state_22982__$1;
(statearr_22985_23006[(1)] = (8));

} else {
var statearr_22986_23007 = state_22982__$1;
(statearr_22986_23007[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (1))){
var inst_22959 = (0);
var state_22982__$1 = (function (){var statearr_22987 = state_22982;
(statearr_22987[(8)] = inst_22959);

return statearr_22987;
})();
var statearr_22988_23008 = state_22982__$1;
(statearr_22988_23008[(2)] = null);

(statearr_22988_23008[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (4))){
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22982__$1,(7),ch);
} else {
if((state_val_22983 === (6))){
var inst_22977 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22989_23009 = state_22982__$1;
(statearr_22989_23009[(2)] = inst_22977);

(statearr_22989_23009[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (3))){
var inst_22979 = (state_22982[(2)]);
var inst_22980 = cljs.core.async.close_BANG_(out);
var state_22982__$1 = (function (){var statearr_22990 = state_22982;
(statearr_22990[(9)] = inst_22979);

return statearr_22990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22982__$1,inst_22980);
} else {
if((state_val_22983 === (2))){
var inst_22959 = (state_22982[(8)]);
var inst_22961 = (inst_22959 < n);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22961)){
var statearr_22991_23010 = state_22982__$1;
(statearr_22991_23010[(1)] = (4));

} else {
var statearr_22992_23011 = state_22982__$1;
(statearr_22992_23011[(1)] = (5));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (11))){
var inst_22959 = (state_22982[(8)]);
var inst_22969 = (state_22982[(2)]);
var inst_22970 = (inst_22959 + (1));
var inst_22959__$1 = inst_22970;
var state_22982__$1 = (function (){var statearr_22993 = state_22982;
(statearr_22993[(10)] = inst_22969);

(statearr_22993[(8)] = inst_22959__$1);

return statearr_22993;
})();
var statearr_22994_23012 = state_22982__$1;
(statearr_22994_23012[(2)] = null);

(statearr_22994_23012[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (9))){
var state_22982__$1 = state_22982;
var statearr_22995_23013 = state_22982__$1;
(statearr_22995_23013[(2)] = null);

(statearr_22995_23013[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (5))){
var state_22982__$1 = state_22982;
var statearr_22996_23014 = state_22982__$1;
(statearr_22996_23014[(2)] = null);

(statearr_22996_23014[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (10))){
var inst_22974 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22997_23015 = state_22982__$1;
(statearr_22997_23015[(2)] = inst_22974);

(statearr_22997_23015[(1)] = (6));


return cljs.core.constant$keyword$62;
} else {
if((state_val_22983 === (8))){
var inst_22964 = (state_22982[(7)]);
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22982__$1,(11),out,inst_22964);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___23005,out))
;
return ((function (switch__6007__auto__,c__6063__auto___23005,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23001[(0)] = state_machine__6008__auto__);

(statearr_23001[(1)] = (1));

return statearr_23001;
});
var state_machine__6008__auto____1 = (function (state_22982){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_22982);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23002){if((e23002 instanceof Object)){
var ex__6011__auto__ = e23002;
var statearr_23003_23016 = state_22982;
(statearr_23003_23016[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22982);

return cljs.core.constant$keyword$62;
} else {
throw e23002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23017 = state_22982;
state_22982 = G__23017;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___23005,out))
})();
var state__6065__auto__ = (function (){var statearr_23004 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___23005);

return statearr_23004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___23005,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t23030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23030 = (function (ch,f,map_LT_,meta23031){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23031 = meta23031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t23033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23033 = (function (fn1,_,meta23031,map_LT_,f,ch,meta23034){
this.fn1 = fn1;
this._ = _;
this.meta23031 = meta23031;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23034 = meta23034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t23033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23018_SHARP_){
var G__23036 = (((p1__23018_SHARP_ == null))?null:(function (){var G__23037 = p1__23018_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23037) : self__.f.call(null,G__23037));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23036) : f1.call(null,G__23036));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23035){
var self__ = this;
var _23035__$1 = this;
return self__.meta23034;
});})(___$1))
;

cljs.core.async.t23033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23035,meta23034__$1){
var self__ = this;
var _23035__$1 = this;
return (new cljs.core.async.t23033(self__.fn1,self__._,self__.meta23031,self__.map_LT_,self__.f,self__.ch,meta23034__$1));
});})(___$1))
;

cljs.core.async.t23033.cljs$lang$type = true;

cljs.core.async.t23033.cljs$lang$ctorStr = "cljs.core.async/t23033";

cljs.core.async.t23033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t23033");
});})(___$1))
;

cljs.core.async.__GT_t23033 = ((function (___$1){
return (function __GT_t23033(fn1__$1,___$2,meta23031__$1,map_LT___$1,f__$1,ch__$1,meta23034){
return (new cljs.core.async.t23033(fn1__$1,___$2,meta23031__$1,map_LT___$1,f__$1,ch__$1,meta23034));
});})(___$1))
;

}

return (new cljs.core.async.t23033(fn1,___$1,self__.meta23031,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,46,cljs.core.constant$keyword$33,737,cljs.core.constant$keyword$34,10,cljs.core.constant$keyword$35,731,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3760__auto__ = ret;
if(cljs.core.truth_(and__3760__auto__)){
return !(((function (){var G__23038 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23038) : cljs.core.deref.call(null,G__23038));
})() == null));
} else {
return and__3760__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23039 = (function (){var G__23040 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23040) : cljs.core.deref.call(null,G__23040));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23039) : self__.f.call(null,G__23039));
})());
} else {
return ret;
}
});

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23032){
var self__ = this;
var _23032__$1 = this;
return self__.meta23031;
});

cljs.core.async.t23030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23032,meta23031__$1){
var self__ = this;
var _23032__$1 = this;
return (new cljs.core.async.t23030(self__.ch,self__.f,self__.map_LT_,meta23031__$1));
});

cljs.core.async.t23030.cljs$lang$type = true;

cljs.core.async.t23030.cljs$lang$ctorStr = "cljs.core.async/t23030";

cljs.core.async.t23030.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t23030");
});

cljs.core.async.__GT_t23030 = (function __GT_t23030(ch__$1,f__$1,map_LT___$1,meta23031){
return (new cljs.core.async.t23030(ch__$1,f__$1,map_LT___$1,meta23031));
});

}

return (new cljs.core.async.t23030(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,46,cljs.core.constant$keyword$33,743,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,722,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23045 = (function (ch,f,map_GT_,meta23046){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23046 = meta23046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23048 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23048) : self__.f.call(null,G__23048));
})(),fn1);
});

cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23047){
var self__ = this;
var _23047__$1 = this;
return self__.meta23046;
});

cljs.core.async.t23045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23047,meta23046__$1){
var self__ = this;
var _23047__$1 = this;
return (new cljs.core.async.t23045(self__.ch,self__.f,self__.map_GT_,meta23046__$1));
});

cljs.core.async.t23045.cljs$lang$type = true;

cljs.core.async.t23045.cljs$lang$ctorStr = "cljs.core.async/t23045";

cljs.core.async.t23045.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t23045");
});

cljs.core.async.__GT_t23045 = (function __GT_t23045(ch__$1,f__$1,map_GT___$1,meta23046){
return (new cljs.core.async.t23045(ch__$1,f__$1,map_GT___$1,meta23046));
});

}

return (new cljs.core.async.t23045(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,34,cljs.core.constant$keyword$33,757,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,748,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23053 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23053 = (function (ch,p,filter_GT_,meta23054){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23054 = meta23054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23056 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23056) : self__.p.call(null,G__23056));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23053.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23055){
var self__ = this;
var _23055__$1 = this;
return self__.meta23054;
});

cljs.core.async.t23053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23055,meta23054__$1){
var self__ = this;
var _23055__$1 = this;
return (new cljs.core.async.t23053(self__.ch,self__.p,self__.filter_GT_,meta23054__$1));
});

cljs.core.async.t23053.cljs$lang$type = true;

cljs.core.async.t23053.cljs$lang$ctorStr = "cljs.core.async/t23053";

cljs.core.async.t23053.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async/t23053");
});

cljs.core.async.__GT_t23053 = (function __GT_t23053(ch__$1,p__$1,filter_GT___$1,meta23054){
return (new cljs.core.async.t23053(ch__$1,p__$1,filter_GT___$1,meta23054));
});

}

return (new cljs.core.async.t23053(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,48,cljs.core.constant$keyword$33,774,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,762,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___23144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___23144,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___23144,out){
return (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (7))){
var inst_23118 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23124_23145 = state_23122__$1;
(statearr_23124_23145[(2)] = inst_23118);

(statearr_23124_23145[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (1))){
var state_23122__$1 = state_23122;
var statearr_23125_23146 = state_23122__$1;
(statearr_23125_23146[(2)] = null);

(statearr_23125_23146[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (4))){
var inst_23104 = (state_23122[(7)]);
var inst_23104__$1 = (state_23122[(2)]);
var inst_23105 = (inst_23104__$1 == null);
var state_23122__$1 = (function (){var statearr_23126 = state_23122;
(statearr_23126[(7)] = inst_23104__$1);

return statearr_23126;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23127_23147 = state_23122__$1;
(statearr_23127_23147[(1)] = (5));

} else {
var statearr_23128_23148 = state_23122__$1;
(statearr_23128_23148[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (6))){
var inst_23104 = (state_23122[(7)]);
var inst_23109 = (function (){var G__23129 = inst_23104;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23129) : p.call(null,G__23129));
})();
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23109)){
var statearr_23130_23149 = state_23122__$1;
(statearr_23130_23149[(1)] = (8));

} else {
var statearr_23131_23150 = state_23122__$1;
(statearr_23131_23150[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (3))){
var inst_23120 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23122__$1,inst_23120);
} else {
if((state_val_23123 === (2))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23122__$1,(4),ch);
} else {
if((state_val_23123 === (11))){
var inst_23112 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23132_23151 = state_23122__$1;
(statearr_23132_23151[(2)] = inst_23112);

(statearr_23132_23151[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (9))){
var state_23122__$1 = state_23122;
var statearr_23133_23152 = state_23122__$1;
(statearr_23133_23152[(2)] = null);

(statearr_23133_23152[(1)] = (10));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (5))){
var inst_23107 = cljs.core.async.close_BANG_(out);
var state_23122__$1 = state_23122;
var statearr_23134_23153 = state_23122__$1;
(statearr_23134_23153[(2)] = inst_23107);

(statearr_23134_23153[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (10))){
var inst_23115 = (state_23122[(2)]);
var state_23122__$1 = (function (){var statearr_23135 = state_23122;
(statearr_23135[(8)] = inst_23115);

return statearr_23135;
})();
var statearr_23136_23154 = state_23122__$1;
(statearr_23136_23154[(2)] = null);

(statearr_23136_23154[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23123 === (8))){
var inst_23104 = (state_23122[(7)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23122__$1,(11),out,inst_23104);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___23144,out))
;
return ((function (switch__6007__auto__,c__6063__auto___23144,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23140 = [null,null,null,null,null,null,null,null,null];
(statearr_23140[(0)] = state_machine__6008__auto__);

(statearr_23140[(1)] = (1));

return statearr_23140;
});
var state_machine__6008__auto____1 = (function (state_23122){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_23122);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23141){if((e23141 instanceof Object)){
var ex__6011__auto__ = e23141;
var statearr_23142_23155 = state_23122;
(statearr_23142_23155[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23122);

return cljs.core.constant$keyword$62;
} else {
throw e23141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23156 = state_23122;
state_23122 = G__23156;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___23144,out))
})();
var state__6065__auto__ = (function (){var statearr_23143 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___23144);

return statearr_23143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___23144,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_23326){
var state_val_23327 = (state_23326[(1)]);
if((state_val_23327 === (7))){
var inst_23322 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23328_23370 = state_23326__$1;
(statearr_23328_23370[(2)] = inst_23322);

(statearr_23328_23370[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (20))){
var inst_23292 = (state_23326[(7)]);
var inst_23303 = (state_23326[(2)]);
var inst_23304 = cljs.core.next(inst_23292);
var inst_23278 = inst_23304;
var inst_23279 = null;
var inst_23280 = (0);
var inst_23281 = (0);
var state_23326__$1 = (function (){var statearr_23329 = state_23326;
(statearr_23329[(8)] = inst_23281);

(statearr_23329[(9)] = inst_23303);

(statearr_23329[(10)] = inst_23280);

(statearr_23329[(11)] = inst_23279);

(statearr_23329[(12)] = inst_23278);

return statearr_23329;
})();
var statearr_23330_23371 = state_23326__$1;
(statearr_23330_23371[(2)] = null);

(statearr_23330_23371[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (1))){
var state_23326__$1 = state_23326;
var statearr_23331_23372 = state_23326__$1;
(statearr_23331_23372[(2)] = null);

(statearr_23331_23372[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (4))){
var inst_23267 = (state_23326[(13)]);
var inst_23267__$1 = (state_23326[(2)]);
var inst_23268 = (inst_23267__$1 == null);
var state_23326__$1 = (function (){var statearr_23332 = state_23326;
(statearr_23332[(13)] = inst_23267__$1);

return statearr_23332;
})();
if(cljs.core.truth_(inst_23268)){
var statearr_23333_23373 = state_23326__$1;
(statearr_23333_23373[(1)] = (5));

} else {
var statearr_23334_23374 = state_23326__$1;
(statearr_23334_23374[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (15))){
var state_23326__$1 = state_23326;
var statearr_23338_23375 = state_23326__$1;
(statearr_23338_23375[(2)] = null);

(statearr_23338_23375[(1)] = (16));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (21))){
var state_23326__$1 = state_23326;
var statearr_23339_23376 = state_23326__$1;
(statearr_23339_23376[(2)] = null);

(statearr_23339_23376[(1)] = (23));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (13))){
var inst_23281 = (state_23326[(8)]);
var inst_23280 = (state_23326[(10)]);
var inst_23279 = (state_23326[(11)]);
var inst_23278 = (state_23326[(12)]);
var inst_23288 = (state_23326[(2)]);
var inst_23289 = (inst_23281 + (1));
var tmp23335 = inst_23280;
var tmp23336 = inst_23279;
var tmp23337 = inst_23278;
var inst_23278__$1 = tmp23337;
var inst_23279__$1 = tmp23336;
var inst_23280__$1 = tmp23335;
var inst_23281__$1 = inst_23289;
var state_23326__$1 = (function (){var statearr_23340 = state_23326;
(statearr_23340[(14)] = inst_23288);

(statearr_23340[(8)] = inst_23281__$1);

(statearr_23340[(10)] = inst_23280__$1);

(statearr_23340[(11)] = inst_23279__$1);

(statearr_23340[(12)] = inst_23278__$1);

return statearr_23340;
})();
var statearr_23341_23377 = state_23326__$1;
(statearr_23341_23377[(2)] = null);

(statearr_23341_23377[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (22))){
var state_23326__$1 = state_23326;
var statearr_23342_23378 = state_23326__$1;
(statearr_23342_23378[(2)] = null);

(statearr_23342_23378[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (6))){
var inst_23267 = (state_23326[(13)]);
var inst_23276 = (function (){var G__23343 = inst_23267;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23343) : f.call(null,G__23343));
})();
var inst_23277 = cljs.core.seq(inst_23276);
var inst_23278 = inst_23277;
var inst_23279 = null;
var inst_23280 = (0);
var inst_23281 = (0);
var state_23326__$1 = (function (){var statearr_23344 = state_23326;
(statearr_23344[(8)] = inst_23281);

(statearr_23344[(10)] = inst_23280);

(statearr_23344[(11)] = inst_23279);

(statearr_23344[(12)] = inst_23278);

return statearr_23344;
})();
var statearr_23345_23379 = state_23326__$1;
(statearr_23345_23379[(2)] = null);

(statearr_23345_23379[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (17))){
var inst_23292 = (state_23326[(7)]);
var inst_23296 = cljs.core.chunk_first(inst_23292);
var inst_23297 = cljs.core.chunk_rest(inst_23292);
var inst_23298 = cljs.core.count(inst_23296);
var inst_23278 = inst_23297;
var inst_23279 = inst_23296;
var inst_23280 = inst_23298;
var inst_23281 = (0);
var state_23326__$1 = (function (){var statearr_23346 = state_23326;
(statearr_23346[(8)] = inst_23281);

(statearr_23346[(10)] = inst_23280);

(statearr_23346[(11)] = inst_23279);

(statearr_23346[(12)] = inst_23278);

return statearr_23346;
})();
var statearr_23347_23380 = state_23326__$1;
(statearr_23347_23380[(2)] = null);

(statearr_23347_23380[(1)] = (8));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (3))){
var inst_23324 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23326__$1,inst_23324);
} else {
if((state_val_23327 === (12))){
var inst_23312 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23348_23381 = state_23326__$1;
(statearr_23348_23381[(2)] = inst_23312);

(statearr_23348_23381[(1)] = (9));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (2))){
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23326__$1,(4),in$);
} else {
if((state_val_23327 === (23))){
var inst_23320 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23349_23382 = state_23326__$1;
(statearr_23349_23382[(2)] = inst_23320);

(statearr_23349_23382[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (19))){
var inst_23307 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23350_23383 = state_23326__$1;
(statearr_23350_23383[(2)] = inst_23307);

(statearr_23350_23383[(1)] = (16));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (11))){
var inst_23292 = (state_23326[(7)]);
var inst_23278 = (state_23326[(12)]);
var inst_23292__$1 = cljs.core.seq(inst_23278);
var state_23326__$1 = (function (){var statearr_23351 = state_23326;
(statearr_23351[(7)] = inst_23292__$1);

return statearr_23351;
})();
if(inst_23292__$1){
var statearr_23352_23384 = state_23326__$1;
(statearr_23352_23384[(1)] = (14));

} else {
var statearr_23353_23385 = state_23326__$1;
(statearr_23353_23385[(1)] = (15));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (9))){
var inst_23314 = (state_23326[(2)]);
var inst_23315 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23326__$1 = (function (){var statearr_23354 = state_23326;
(statearr_23354[(15)] = inst_23314);

return statearr_23354;
})();
if(cljs.core.truth_(inst_23315)){
var statearr_23355_23386 = state_23326__$1;
(statearr_23355_23386[(1)] = (21));

} else {
var statearr_23356_23387 = state_23326__$1;
(statearr_23356_23387[(1)] = (22));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (5))){
var inst_23270 = cljs.core.async.close_BANG_(out);
var state_23326__$1 = state_23326;
var statearr_23357_23388 = state_23326__$1;
(statearr_23357_23388[(2)] = inst_23270);

(statearr_23357_23388[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (14))){
var inst_23292 = (state_23326[(7)]);
var inst_23294 = cljs.core.chunked_seq_QMARK_(inst_23292);
var state_23326__$1 = state_23326;
if(inst_23294){
var statearr_23358_23389 = state_23326__$1;
(statearr_23358_23389[(1)] = (17));

} else {
var statearr_23359_23390 = state_23326__$1;
(statearr_23359_23390[(1)] = (18));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (16))){
var inst_23310 = (state_23326[(2)]);
var state_23326__$1 = state_23326;
var statearr_23360_23391 = state_23326__$1;
(statearr_23360_23391[(2)] = inst_23310);

(statearr_23360_23391[(1)] = (12));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23327 === (10))){
var inst_23281 = (state_23326[(8)]);
var inst_23279 = (state_23326[(11)]);
var inst_23286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23279,inst_23281);
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23326__$1,(13),out,inst_23286);
} else {
if((state_val_23327 === (18))){
var inst_23292 = (state_23326[(7)]);
var inst_23301 = cljs.core.first(inst_23292);
var state_23326__$1 = state_23326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23326__$1,(20),out,inst_23301);
} else {
if((state_val_23327 === (8))){
var inst_23281 = (state_23326[(8)]);
var inst_23280 = (state_23326[(10)]);
var inst_23283 = (inst_23281 < inst_23280);
var inst_23284 = inst_23283;
var state_23326__$1 = state_23326;
if(cljs.core.truth_(inst_23284)){
var statearr_23361_23392 = state_23326__$1;
(statearr_23361_23392[(1)] = (10));

} else {
var statearr_23362_23393 = state_23326__$1;
(statearr_23362_23393[(1)] = (11));

}

return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto__))
;
return ((function (switch__6007__auto__,c__6063__auto__){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23366[(0)] = state_machine__6008__auto__);

(statearr_23366[(1)] = (1));

return statearr_23366;
});
var state_machine__6008__auto____1 = (function (state_23326){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_23326);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23367){if((e23367 instanceof Object)){
var ex__6011__auto__ = e23367;
var statearr_23368_23394 = state_23326;
(statearr_23368_23394[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23326);

return cljs.core.constant$keyword$62;
} else {
throw e23367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23395 = state_23326;
state_23326 = G__23395;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_23326){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_23326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_23369 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_23369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___23500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___23500,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___23500,out){
return (function (state_23475){
var state_val_23476 = (state_23475[(1)]);
if((state_val_23476 === (7))){
var inst_23470 = (state_23475[(2)]);
var state_23475__$1 = state_23475;
var statearr_23477_23501 = state_23475__$1;
(statearr_23477_23501[(2)] = inst_23470);

(statearr_23477_23501[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (1))){
var inst_23452 = null;
var state_23475__$1 = (function (){var statearr_23478 = state_23475;
(statearr_23478[(7)] = inst_23452);

return statearr_23478;
})();
var statearr_23479_23502 = state_23475__$1;
(statearr_23479_23502[(2)] = null);

(statearr_23479_23502[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (4))){
var inst_23455 = (state_23475[(8)]);
var inst_23455__$1 = (state_23475[(2)]);
var inst_23456 = (inst_23455__$1 == null);
var inst_23457 = cljs.core.not(inst_23456);
var state_23475__$1 = (function (){var statearr_23480 = state_23475;
(statearr_23480[(8)] = inst_23455__$1);

return statearr_23480;
})();
if(inst_23457){
var statearr_23481_23503 = state_23475__$1;
(statearr_23481_23503[(1)] = (5));

} else {
var statearr_23482_23504 = state_23475__$1;
(statearr_23482_23504[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (6))){
var state_23475__$1 = state_23475;
var statearr_23483_23505 = state_23475__$1;
(statearr_23483_23505[(2)] = null);

(statearr_23483_23505[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (3))){
var inst_23472 = (state_23475[(2)]);
var inst_23473 = cljs.core.async.close_BANG_(out);
var state_23475__$1 = (function (){var statearr_23484 = state_23475;
(statearr_23484[(9)] = inst_23472);

return statearr_23484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23475__$1,inst_23473);
} else {
if((state_val_23476 === (2))){
var state_23475__$1 = state_23475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23475__$1,(4),ch);
} else {
if((state_val_23476 === (11))){
var inst_23455 = (state_23475[(8)]);
var inst_23464 = (state_23475[(2)]);
var inst_23452 = inst_23455;
var state_23475__$1 = (function (){var statearr_23485 = state_23475;
(statearr_23485[(10)] = inst_23464);

(statearr_23485[(7)] = inst_23452);

return statearr_23485;
})();
var statearr_23486_23506 = state_23475__$1;
(statearr_23486_23506[(2)] = null);

(statearr_23486_23506[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (9))){
var inst_23455 = (state_23475[(8)]);
var state_23475__$1 = state_23475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23475__$1,(11),out,inst_23455);
} else {
if((state_val_23476 === (5))){
var inst_23455 = (state_23475[(8)]);
var inst_23452 = (state_23475[(7)]);
var inst_23459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23455,inst_23452);
var state_23475__$1 = state_23475;
if(inst_23459){
var statearr_23488_23507 = state_23475__$1;
(statearr_23488_23507[(1)] = (8));

} else {
var statearr_23489_23508 = state_23475__$1;
(statearr_23489_23508[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (10))){
var inst_23467 = (state_23475[(2)]);
var state_23475__$1 = state_23475;
var statearr_23490_23509 = state_23475__$1;
(statearr_23490_23509[(2)] = inst_23467);

(statearr_23490_23509[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23476 === (8))){
var inst_23452 = (state_23475[(7)]);
var tmp23487 = inst_23452;
var inst_23452__$1 = tmp23487;
var state_23475__$1 = (function (){var statearr_23491 = state_23475;
(statearr_23491[(7)] = inst_23452__$1);

return statearr_23491;
})();
var statearr_23492_23510 = state_23475__$1;
(statearr_23492_23510[(2)] = null);

(statearr_23492_23510[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___23500,out))
;
return ((function (switch__6007__auto__,c__6063__auto___23500,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23496[(0)] = state_machine__6008__auto__);

(statearr_23496[(1)] = (1));

return statearr_23496;
});
var state_machine__6008__auto____1 = (function (state_23475){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_23475);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23497){if((e23497 instanceof Object)){
var ex__6011__auto__ = e23497;
var statearr_23498_23511 = state_23475;
(statearr_23498_23511[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23475);

return cljs.core.constant$keyword$62;
} else {
throw e23497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23512 = state_23475;
state_23475 = G__23512;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_23475){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_23475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___23500,out))
})();
var state__6065__auto__ = (function (){var statearr_23499 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___23500);

return statearr_23499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___23500,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___23650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___23650,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___23650,out){
return (function (state_23620){
var state_val_23621 = (state_23620[(1)]);
if((state_val_23621 === (7))){
var inst_23616 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23622_23651 = state_23620__$1;
(statearr_23622_23651[(2)] = inst_23616);

(statearr_23622_23651[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (1))){
var inst_23583 = (new Array(n));
var inst_23584 = inst_23583;
var inst_23585 = (0);
var state_23620__$1 = (function (){var statearr_23623 = state_23620;
(statearr_23623[(7)] = inst_23584);

(statearr_23623[(8)] = inst_23585);

return statearr_23623;
})();
var statearr_23624_23652 = state_23620__$1;
(statearr_23624_23652[(2)] = null);

(statearr_23624_23652[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (4))){
var inst_23588 = (state_23620[(9)]);
var inst_23588__$1 = (state_23620[(2)]);
var inst_23589 = (inst_23588__$1 == null);
var inst_23590 = cljs.core.not(inst_23589);
var state_23620__$1 = (function (){var statearr_23625 = state_23620;
(statearr_23625[(9)] = inst_23588__$1);

return statearr_23625;
})();
if(inst_23590){
var statearr_23626_23653 = state_23620__$1;
(statearr_23626_23653[(1)] = (5));

} else {
var statearr_23627_23654 = state_23620__$1;
(statearr_23627_23654[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (15))){
var inst_23610 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23628_23655 = state_23620__$1;
(statearr_23628_23655[(2)] = inst_23610);

(statearr_23628_23655[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (13))){
var state_23620__$1 = state_23620;
var statearr_23629_23656 = state_23620__$1;
(statearr_23629_23656[(2)] = null);

(statearr_23629_23656[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (6))){
var inst_23585 = (state_23620[(8)]);
var inst_23606 = (inst_23585 > (0));
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23606)){
var statearr_23630_23657 = state_23620__$1;
(statearr_23630_23657[(1)] = (12));

} else {
var statearr_23631_23658 = state_23620__$1;
(statearr_23631_23658[(1)] = (13));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (3))){
var inst_23618 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23620__$1,inst_23618);
} else {
if((state_val_23621 === (12))){
var inst_23584 = (state_23620[(7)]);
var inst_23608 = cljs.core.vec(inst_23584);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23620__$1,(15),out,inst_23608);
} else {
if((state_val_23621 === (2))){
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23620__$1,(4),ch);
} else {
if((state_val_23621 === (11))){
var inst_23600 = (state_23620[(2)]);
var inst_23601 = (new Array(n));
var inst_23584 = inst_23601;
var inst_23585 = (0);
var state_23620__$1 = (function (){var statearr_23632 = state_23620;
(statearr_23632[(10)] = inst_23600);

(statearr_23632[(7)] = inst_23584);

(statearr_23632[(8)] = inst_23585);

return statearr_23632;
})();
var statearr_23633_23659 = state_23620__$1;
(statearr_23633_23659[(2)] = null);

(statearr_23633_23659[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (9))){
var inst_23584 = (state_23620[(7)]);
var inst_23598 = cljs.core.vec(inst_23584);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23620__$1,(11),out,inst_23598);
} else {
if((state_val_23621 === (5))){
var inst_23588 = (state_23620[(9)]);
var inst_23584 = (state_23620[(7)]);
var inst_23593 = (state_23620[(11)]);
var inst_23585 = (state_23620[(8)]);
var inst_23592 = (inst_23584[inst_23585] = inst_23588);
var inst_23593__$1 = (inst_23585 + (1));
var inst_23594 = (inst_23593__$1 < n);
var state_23620__$1 = (function (){var statearr_23634 = state_23620;
(statearr_23634[(12)] = inst_23592);

(statearr_23634[(11)] = inst_23593__$1);

return statearr_23634;
})();
if(cljs.core.truth_(inst_23594)){
var statearr_23635_23660 = state_23620__$1;
(statearr_23635_23660[(1)] = (8));

} else {
var statearr_23636_23661 = state_23620__$1;
(statearr_23636_23661[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (14))){
var inst_23613 = (state_23620[(2)]);
var inst_23614 = cljs.core.async.close_BANG_(out);
var state_23620__$1 = (function (){var statearr_23638 = state_23620;
(statearr_23638[(13)] = inst_23613);

return statearr_23638;
})();
var statearr_23639_23662 = state_23620__$1;
(statearr_23639_23662[(2)] = inst_23614);

(statearr_23639_23662[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (10))){
var inst_23604 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23640_23663 = state_23620__$1;
(statearr_23640_23663[(2)] = inst_23604);

(statearr_23640_23663[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23621 === (8))){
var inst_23584 = (state_23620[(7)]);
var inst_23593 = (state_23620[(11)]);
var tmp23637 = inst_23584;
var inst_23584__$1 = tmp23637;
var inst_23585 = inst_23593;
var state_23620__$1 = (function (){var statearr_23641 = state_23620;
(statearr_23641[(7)] = inst_23584__$1);

(statearr_23641[(8)] = inst_23585);

return statearr_23641;
})();
var statearr_23642_23664 = state_23620__$1;
(statearr_23642_23664[(2)] = null);

(statearr_23642_23664[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___23650,out))
;
return ((function (switch__6007__auto__,c__6063__auto___23650,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23646[(0)] = state_machine__6008__auto__);

(statearr_23646[(1)] = (1));

return statearr_23646;
});
var state_machine__6008__auto____1 = (function (state_23620){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_23620);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23647){if((e23647 instanceof Object)){
var ex__6011__auto__ = e23647;
var statearr_23648_23665 = state_23620;
(statearr_23648_23665[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23620);

return cljs.core.constant$keyword$62;
} else {
throw e23647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23666 = state_23620;
state_23620 = G__23666;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_23620){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_23620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___23650,out))
})();
var state__6065__auto__ = (function (){var statearr_23649 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___23650);

return statearr_23649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___23650,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6063__auto___23814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto___23814,out){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto___23814,out){
return (function (state_23783){
var state_val_23784 = (state_23783[(1)]);
if((state_val_23784 === (7))){
var inst_23779 = (state_23783[(2)]);
var state_23783__$1 = state_23783;
var statearr_23785_23815 = state_23783__$1;
(statearr_23785_23815[(2)] = inst_23779);

(statearr_23785_23815[(1)] = (3));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (1))){
var inst_23742 = [];
var inst_23743 = inst_23742;
var inst_23744 = cljs.core.constant$keyword$77;
var state_23783__$1 = (function (){var statearr_23786 = state_23783;
(statearr_23786[(7)] = inst_23743);

(statearr_23786[(8)] = inst_23744);

return statearr_23786;
})();
var statearr_23787_23816 = state_23783__$1;
(statearr_23787_23816[(2)] = null);

(statearr_23787_23816[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (4))){
var inst_23747 = (state_23783[(9)]);
var inst_23747__$1 = (state_23783[(2)]);
var inst_23748 = (inst_23747__$1 == null);
var inst_23749 = cljs.core.not(inst_23748);
var state_23783__$1 = (function (){var statearr_23788 = state_23783;
(statearr_23788[(9)] = inst_23747__$1);

return statearr_23788;
})();
if(inst_23749){
var statearr_23789_23817 = state_23783__$1;
(statearr_23789_23817[(1)] = (5));

} else {
var statearr_23790_23818 = state_23783__$1;
(statearr_23790_23818[(1)] = (6));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (15))){
var inst_23773 = (state_23783[(2)]);
var state_23783__$1 = state_23783;
var statearr_23791_23819 = state_23783__$1;
(statearr_23791_23819[(2)] = inst_23773);

(statearr_23791_23819[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (13))){
var state_23783__$1 = state_23783;
var statearr_23792_23820 = state_23783__$1;
(statearr_23792_23820[(2)] = null);

(statearr_23792_23820[(1)] = (14));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (6))){
var inst_23743 = (state_23783[(7)]);
var inst_23768 = inst_23743.length;
var inst_23769 = (inst_23768 > (0));
var state_23783__$1 = state_23783;
if(cljs.core.truth_(inst_23769)){
var statearr_23793_23821 = state_23783__$1;
(statearr_23793_23821[(1)] = (12));

} else {
var statearr_23794_23822 = state_23783__$1;
(statearr_23794_23822[(1)] = (13));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (3))){
var inst_23781 = (state_23783[(2)]);
var state_23783__$1 = state_23783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23783__$1,inst_23781);
} else {
if((state_val_23784 === (12))){
var inst_23743 = (state_23783[(7)]);
var inst_23771 = cljs.core.vec(inst_23743);
var state_23783__$1 = state_23783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23783__$1,(15),out,inst_23771);
} else {
if((state_val_23784 === (2))){
var state_23783__$1 = state_23783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23783__$1,(4),ch);
} else {
if((state_val_23784 === (11))){
var inst_23747 = (state_23783[(9)]);
var inst_23751 = (state_23783[(10)]);
var inst_23761 = (state_23783[(2)]);
var inst_23762 = [];
var inst_23763 = inst_23762.push(inst_23747);
var inst_23743 = inst_23762;
var inst_23744 = inst_23751;
var state_23783__$1 = (function (){var statearr_23795 = state_23783;
(statearr_23795[(11)] = inst_23761);

(statearr_23795[(12)] = inst_23763);

(statearr_23795[(7)] = inst_23743);

(statearr_23795[(8)] = inst_23744);

return statearr_23795;
})();
var statearr_23796_23823 = state_23783__$1;
(statearr_23796_23823[(2)] = null);

(statearr_23796_23823[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (9))){
var inst_23743 = (state_23783[(7)]);
var inst_23759 = cljs.core.vec(inst_23743);
var state_23783__$1 = state_23783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23783__$1,(11),out,inst_23759);
} else {
if((state_val_23784 === (5))){
var inst_23747 = (state_23783[(9)]);
var inst_23751 = (state_23783[(10)]);
var inst_23744 = (state_23783[(8)]);
var inst_23751__$1 = (function (){var G__23797 = inst_23747;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23797) : f.call(null,G__23797));
})();
var inst_23752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23751__$1,inst_23744);
var inst_23753 = cljs.core.keyword_identical_QMARK_(inst_23744,cljs.core.constant$keyword$77);
var inst_23754 = (inst_23752) || (inst_23753);
var state_23783__$1 = (function (){var statearr_23798 = state_23783;
(statearr_23798[(10)] = inst_23751__$1);

return statearr_23798;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23799_23824 = state_23783__$1;
(statearr_23799_23824[(1)] = (8));

} else {
var statearr_23800_23825 = state_23783__$1;
(statearr_23800_23825[(1)] = (9));

}

return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (14))){
var inst_23776 = (state_23783[(2)]);
var inst_23777 = cljs.core.async.close_BANG_(out);
var state_23783__$1 = (function (){var statearr_23802 = state_23783;
(statearr_23802[(13)] = inst_23776);

return statearr_23802;
})();
var statearr_23803_23826 = state_23783__$1;
(statearr_23803_23826[(2)] = inst_23777);

(statearr_23803_23826[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (10))){
var inst_23766 = (state_23783[(2)]);
var state_23783__$1 = state_23783;
var statearr_23804_23827 = state_23783__$1;
(statearr_23804_23827[(2)] = inst_23766);

(statearr_23804_23827[(1)] = (7));


return cljs.core.constant$keyword$62;
} else {
if((state_val_23784 === (8))){
var inst_23747 = (state_23783[(9)]);
var inst_23751 = (state_23783[(10)]);
var inst_23743 = (state_23783[(7)]);
var inst_23756 = inst_23743.push(inst_23747);
var tmp23801 = inst_23743;
var inst_23743__$1 = tmp23801;
var inst_23744 = inst_23751;
var state_23783__$1 = (function (){var statearr_23805 = state_23783;
(statearr_23805[(14)] = inst_23756);

(statearr_23805[(7)] = inst_23743__$1);

(statearr_23805[(8)] = inst_23744);

return statearr_23805;
})();
var statearr_23806_23828 = state_23783__$1;
(statearr_23806_23828[(2)] = null);

(statearr_23806_23828[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6063__auto___23814,out))
;
return ((function (switch__6007__auto__,c__6063__auto___23814,out){
return (function() {
var state_machine__6008__auto__ = null;
var state_machine__6008__auto____0 = (function (){
var statearr_23810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23810[(0)] = state_machine__6008__auto__);

(statearr_23810[(1)] = (1));

return statearr_23810;
});
var state_machine__6008__auto____1 = (function (state_23783){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_23783);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e23811){if((e23811 instanceof Object)){
var ex__6011__auto__ = e23811;
var statearr_23812_23829 = state_23783;
(statearr_23812_23829[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23783);

return cljs.core.constant$keyword$62;
} else {
throw e23811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__23830 = state_23783;
state_23783 = G__23830;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_23783){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_23783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto___23814,out))
})();
var state__6065__auto__ = (function (){var statearr_23813 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_23813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto___23814);

return statearr_23813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto___23814,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

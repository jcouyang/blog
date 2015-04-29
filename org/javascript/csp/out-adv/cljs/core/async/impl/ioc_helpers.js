// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$61);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t23872 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t23872 = (function (f,fn_handler,meta23873){
this.f = f;
this.fn_handler = fn_handler;
this.meta23873 = meta23873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t23872.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t23872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t23872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t23872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23874){
var self__ = this;
var _23874__$1 = this;
return self__.meta23873;
});

cljs.core.async.impl.ioc_helpers.t23872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23874,meta23873__$1){
var self__ = this;
var _23874__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t23872(self__.f,self__.fn_handler,meta23873__$1));
});

cljs.core.async.impl.ioc_helpers.t23872.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t23872.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t23872";

cljs.core.async.impl.ioc_helpers.t23872.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"cljs.core.async.impl.ioc-helpers/t23872");
});

cljs.core.async.impl.ioc_helpers.__GT_t23872 = (function __GT_t23872(f__$1,fn_handler__$1,meta23873){
return (new cljs.core.async.impl.ioc_helpers.t23872(f__$1,fn_handler__$1,meta23873));
});

}

return (new cljs.core.async.impl.ioc_helpers.t23872(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$32,19,cljs.core.constant$keyword$33,30,cljs.core.constant$keyword$34,3,cljs.core.constant$keyword$35,27,cljs.core.constant$keyword$36,"/Users/twer/Dropbox/blog/org/javascript/csp/out-adv/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e23876){if((e23876 instanceof Object)){
var ex = e23876;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e23876;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_23880_23883 = state;
(statearr_23880_23883[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_23880_23883[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_23881_23884 = state;
(statearr_23881_23884[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23882 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23882) : cljs.core.deref.call(null,G__23882));
})());

(statearr_23881_23884[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$62;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_23888_23891 = state;
(statearr_23888_23891[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_23888_23891[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_23889_23892 = state;
(statearr_23889_23892[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23890 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23890) : cljs.core.deref.call(null,G__23890));
})());

(statearr_23889_23892[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$62;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4375__auto__,k__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4375__auto____$1,k__4376__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4377__auto__,k23894,else__4378__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
var G__23896 = (((k23894 instanceof cljs.core.Keyword))?k23894.fqn:null);
switch (G__23896) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23894,else__4378__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4389__auto__,writer__4390__auto__,opts__4391__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
var pr_pair__4392__auto__ = ((function (this__4389__auto____$1){
return (function (keyval__4393__auto__){
return cljs.core.pr_sequential_writer(writer__4390__auto__,cljs.core.pr_writer,""," ","",opts__4391__auto__,keyval__4393__auto__);
});})(this__4389__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4390__auto__,pr_pair__4392__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4391__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4379__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4193__auto__ = self__.__hash;
if(!((h__4193__auto__ == null))){
return h__4193__auto__;
} else {
var h__4193__auto____$1 = cljs.core.hash_imap(this__4370__auto____$1);
self__.__hash = h__4193__auto____$1;

return h__4193__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4371__auto__,other__4372__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3760__auto__ = other__4372__auto__;
if(cljs.core.truth_(and__3760__auto__)){
return ((this__4371__auto____$1.constructor === other__4372__auto__.constructor)) && (cljs.core.equiv_map(this__4371__auto____$1,other__4372__auto__));
} else {
return and__3760__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4384__auto__,k__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$63,null,cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$66,null], null), null),k__4385__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4384__auto____$1),self__.__meta),k__4385__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4385__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4382__auto__,k__4383__auto__,G__23893){
var self__ = this;
var this__4382__auto____$1 = this;
var pred__23897 = cljs.core.keyword_identical_QMARK_;
var expr__23898 = k__4383__auto__;
if(cljs.core.truth_((function (){var G__23900 = cljs.core.constant$keyword$63;
var G__23901 = expr__23898;
return (pred__23897.cljs$core$IFn$_invoke$arity$2 ? pred__23897.cljs$core$IFn$_invoke$arity$2(G__23900,G__23901) : pred__23897.call(null,G__23900,G__23901));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__23893,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23902 = cljs.core.constant$keyword$64;
var G__23903 = expr__23898;
return (pred__23897.cljs$core$IFn$_invoke$arity$2 ? pred__23897.cljs$core$IFn$_invoke$arity$2(G__23902,G__23903) : pred__23897.call(null,G__23902,G__23903));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__23893,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23904 = cljs.core.constant$keyword$65;
var G__23905 = expr__23898;
return (pred__23897.cljs$core$IFn$_invoke$arity$2 ? pred__23897.cljs$core$IFn$_invoke$arity$2(G__23904,G__23905) : pred__23897.call(null,G__23904,G__23905));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__23893,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23906 = cljs.core.constant$keyword$66;
var G__23907 = expr__23898;
return (pred__23897.cljs$core$IFn$_invoke$arity$2 ? pred__23897.cljs$core$IFn$_invoke$arity$2(G__23906,G__23907) : pred__23897.call(null,G__23906,G__23907));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__23893,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23908 = cljs.core.constant$keyword$67;
var G__23909 = expr__23898;
return (pred__23897.cljs$core$IFn$_invoke$arity$2 ? pred__23897.cljs$core$IFn$_invoke$arity$2(G__23908,G__23909) : pred__23897.call(null,G__23908,G__23909));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__23893,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4383__auto__,G__23893),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4387__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4374__auto__,G__23893){
var self__ = this;
var this__4374__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__23893,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4380__auto__,entry__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4381__auto__)){
return cljs.core._assoc(this__4380__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4380__auto____$1,entry__4381__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4409__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4409__auto__,writer__4410__auto__){
return cljs.core._write(writer__4410__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__23895){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(G__23895),cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(G__23895),cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(G__23895),cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__23895),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__23895),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23895,cljs.core.constant$keyword$63,cljs.core.array_seq([cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_23912 = state;
(statearr_23912[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_23912;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3760__auto__ = exception;
if(cljs.core.truth_(and__3760__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3760__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3760__auto__ = exception;
if(cljs.core.truth_(and__3760__auto__)){
var and__3760__auto____$1 = catch_block;
if(cljs.core.truth_(and__3760__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
})())){
var statearr_23918 = state;
(statearr_23918[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_23918[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_23918[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_23918[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$63,null,cljs.core.array_seq([cljs.core.constant$keyword$64,null], 0)));

return statearr_23918;
} else {
if(cljs.core.truth_((function (){var and__3760__auto__ = exception;
if(cljs.core.truth_(and__3760__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3760__auto__;
}
})())){
var statearr_23919_23923 = state;
(statearr_23919_23923[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__23924 = state;
state = G__23924;
continue;
} else {
if(cljs.core.truth_((function (){var and__3760__auto__ = exception;
if(cljs.core.truth_(and__3760__auto__)){
var and__3760__auto____$1 = cljs.core.not(catch_block);
if(and__3760__auto____$1){
return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
})())){
var statearr_23920 = state;
(statearr_23920[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_23920[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$65,null));

return statearr_23920;
} else {
if(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.not(exception);
if(and__3760__auto__){
return cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3760__auto__;
}
})())){
var statearr_23921 = state;
(statearr_23921[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_23921[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$65,null));

return statearr_23921;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_23922 = state;
(statearr_23922[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_23922[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_23922;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

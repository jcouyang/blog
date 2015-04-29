// Compiled by ClojureScript 0.0-2755 {}
goog.provide('csp.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_();
csp.core.working = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
csp.core.texting = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
csp.core.boss_yeiling = (function boss_yeiling(){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_26464){
var state_val_26465 = (state_26464[(1)]);
if((state_val_26465 === (5))){
var inst_26451 = (state_26464[(7)]);
var inst_26458 = (state_26464[(2)]);
var inst_26459 = (inst_26451 + (1));
var inst_26451__$1 = inst_26459;
var state_26464__$1 = (function (){var statearr_26466 = state_26464;
(statearr_26466[(7)] = inst_26451__$1);

(statearr_26466[(8)] = inst_26458);

return statearr_26466;
})();
var statearr_26467_26478 = state_26464__$1;
(statearr_26467_26478[(2)] = null);

(statearr_26467_26478[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_26465 === (4))){
var inst_26451 = (state_26464[(7)]);
var inst_26455 = (state_26464[(2)]);
var inst_26456 = [cljs.core.str("bose say: work "),cljs.core.str(inst_26451)].join('');
var state_26464__$1 = (function (){var statearr_26468 = state_26464;
(statearr_26468[(9)] = inst_26455);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26464__$1,(5),csp.core.working,inst_26456);
} else {
if((state_val_26465 === (3))){
var inst_26462 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26464__$1,inst_26462);
} else {
if((state_val_26465 === (2))){
var inst_26453 = cljs.core.async.timeout((1000));
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26464__$1,(4),inst_26453);
} else {
if((state_val_26465 === (1))){
var inst_26451 = (1);
var state_26464__$1 = (function (){var statearr_26469 = state_26464;
(statearr_26469[(7)] = inst_26451);

return statearr_26469;
})();
var statearr_26470_26479 = state_26464__$1;
(statearr_26470_26479[(2)] = null);

(statearr_26470_26479[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
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
var statearr_26474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26474[(0)] = state_machine__6008__auto__);

(statearr_26474[(1)] = (1));

return statearr_26474;
});
var state_machine__6008__auto____1 = (function (state_26464){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_26464);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e26475){if((e26475 instanceof Object)){
var ex__6011__auto__ = e26475;
var statearr_26476_26480 = state_26464;
(statearr_26476_26480[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26464);

return cljs.core.constant$keyword$62;
} else {
throw e26475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__26481 = state_26464;
state_26464 = G__26481;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_26464){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_26464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_26477 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_26477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_26477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
csp.core.wife_texting = (function wife_texting(){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_26515){
var state_val_26516 = (state_26515[(1)]);
if((state_val_26516 === (5))){
var inst_26510 = (state_26515[(2)]);
var state_26515__$1 = (function (){var statearr_26517 = state_26515;
(statearr_26517[(7)] = inst_26510);

return statearr_26517;
})();
var statearr_26518_26528 = state_26515__$1;
(statearr_26518_26528[(2)] = null);

(statearr_26518_26528[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_26516 === (4))){
var inst_26508 = (state_26515[(2)]);
var state_26515__$1 = (function (){var statearr_26519 = state_26515;
(statearr_26519[(8)] = inst_26508);

return statearr_26519;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26515__$1,(5),csp.core.texting,"wife say: come home!");
} else {
if((state_val_26516 === (3))){
var inst_26513 = (state_26515[(2)]);
var state_26515__$1 = state_26515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26515__$1,inst_26513);
} else {
if((state_val_26516 === (2))){
var inst_26506 = cljs.core.async.timeout((4000));
var state_26515__$1 = state_26515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26515__$1,(4),inst_26506);
} else {
if((state_val_26516 === (1))){
var state_26515__$1 = state_26515;
var statearr_26520_26529 = state_26515__$1;
(statearr_26520_26529[(2)] = null);

(statearr_26520_26529[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
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
var statearr_26524 = [null,null,null,null,null,null,null,null,null];
(statearr_26524[(0)] = state_machine__6008__auto__);

(statearr_26524[(1)] = (1));

return statearr_26524;
});
var state_machine__6008__auto____1 = (function (state_26515){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_26515);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e26525){if((e26525 instanceof Object)){
var ex__6011__auto__ = e26525;
var statearr_26526_26530 = state_26515;
(statearr_26526_26530[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26515);

return cljs.core.constant$keyword$62;
} else {
throw e26525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__26531 = state_26515;
state_26515 = G__26531;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_26515){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_26515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_26527 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_26527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_26527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
csp.core.reading_text = (function reading_text(){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_26560){
var state_val_26561 = (state_26560[(1)]);
if((state_val_26561 === (4))){
var inst_26554 = (state_26560[(2)]);
var inst_26555 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_26554,"me: ignore"], 0));
var state_26560__$1 = (function (){var statearr_26562 = state_26560;
(statearr_26562[(7)] = inst_26555);

return statearr_26562;
})();
var statearr_26563_26572 = state_26560__$1;
(statearr_26563_26572[(2)] = null);

(statearr_26563_26572[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_26561 === (3))){
var inst_26558 = (state_26560[(2)]);
var state_26560__$1 = state_26560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26560__$1,inst_26558);
} else {
if((state_val_26561 === (2))){
var state_26560__$1 = state_26560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26560__$1,(4),csp.core.texting);
} else {
if((state_val_26561 === (1))){
var state_26560__$1 = state_26560;
var statearr_26564_26573 = state_26560__$1;
(statearr_26564_26573[(2)] = null);

(statearr_26564_26573[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
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
var statearr_26568 = [null,null,null,null,null,null,null,null];
(statearr_26568[(0)] = state_machine__6008__auto__);

(statearr_26568[(1)] = (1));

return statearr_26568;
});
var state_machine__6008__auto____1 = (function (state_26560){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_26560);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e26569){if((e26569 instanceof Object)){
var ex__6011__auto__ = e26569;
var statearr_26570_26574 = state_26560;
(statearr_26570_26574[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26560);

return cljs.core.constant$keyword$62;
} else {
throw e26569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__26575 = state_26560;
state_26560 = G__26575;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_26560){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_26560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_26571 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_26571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_26571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
csp.core.work = (function work(){
var c__6063__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6063__auto__){
return (function (){
var f__6064__auto__ = (function (){var switch__6007__auto__ = ((function (c__6063__auto__){
return (function (state_26604){
var state_val_26605 = (state_26604[(1)]);
if((state_val_26605 === (4))){
var inst_26598 = (state_26604[(2)]);
var inst_26599 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_26598," me: working"], 0));
var state_26604__$1 = (function (){var statearr_26606 = state_26604;
(statearr_26606[(7)] = inst_26599);

return statearr_26606;
})();
var statearr_26607_26616 = state_26604__$1;
(statearr_26607_26616[(2)] = null);

(statearr_26607_26616[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
if((state_val_26605 === (3))){
var inst_26602 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26604__$1,inst_26602);
} else {
if((state_val_26605 === (2))){
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26604__$1,(4),csp.core.working);
} else {
if((state_val_26605 === (1))){
var state_26604__$1 = state_26604;
var statearr_26608_26617 = state_26604__$1;
(statearr_26608_26617[(2)] = null);

(statearr_26608_26617[(1)] = (2));


return cljs.core.constant$keyword$62;
} else {
return null;
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
var statearr_26612 = [null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = state_machine__6008__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var state_machine__6008__auto____1 = (function (state_26604){
while(true){
var ret_value__6009__auto__ = (function (){try{while(true){
var result__6010__auto__ = switch__6007__auto__(state_26604);
if(cljs.core.keyword_identical_QMARK_(result__6010__auto__,cljs.core.constant$keyword$62)){
continue;
} else {
return result__6010__auto__;
}
break;
}
}catch (e26613){if((e26613 instanceof Object)){
var ex__6011__auto__ = e26613;
var statearr_26614_26618 = state_26604;
(statearr_26614_26618[(5)] = ex__6011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26604);

return cljs.core.constant$keyword$62;
} else {
throw e26613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6009__auto__,cljs.core.constant$keyword$62)){
var G__26619 = state_26604;
state_26604 = G__26619;
continue;
} else {
return ret_value__6009__auto__;
}
break;
}
});
state_machine__6008__auto__ = function(state_26604){
switch(arguments.length){
case 0:
return state_machine__6008__auto____0.call(this);
case 1:
return state_machine__6008__auto____1.call(this,state_26604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6008__auto____0;
state_machine__6008__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6008__auto____1;
return state_machine__6008__auto__;
})()
;})(switch__6007__auto__,c__6063__auto__))
})();
var state__6065__auto__ = (function (){var statearr_26615 = (function (){return (f__6064__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6064__auto__.cljs$core$IFn$_invoke$arity$0() : f__6064__auto__.call(null));
})();
(statearr_26615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6063__auto__);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6065__auto__);
});})(c__6063__auto__))
);

return c__6063__auto__;
});
csp.core.boss_yeiling();
csp.core.wife_texting();
csp.core.work();
csp.core.reading_text();

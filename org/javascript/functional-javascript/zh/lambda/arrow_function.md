# 箭头函数(arrow function)

来看看越来越函数式の JavaScript 新的草案[ECMAScript 6](http://kangax.github.io/compat-table/es6/) (虽然说是草案,但你可以看到 Firefox 其实已经实现大部分的 feature)都支持什么吧。

看见第一行的 arrow function，为什么叫箭头函数，呵呵，我也不知道。但如果你之前用过 Haskell(单箭头) 或者Scala(双箭头), 会发现匿名函数都用的是箭头.

**由于 arrow function 只在Firefox 22以上版本实现, 本节的所有代码请在Firefox中试, chrome 什么的都没有实现**

###声明一个箭头函数
你可以用两种方式定义一个箭头函数
```javascript
([param] [, param]) => {
   statements
}

param => expression
```
单个表达式可以写成一行, 而多行语句则需要 block `{}` 括起来.

###为什么要用箭头函数
看看旧的匿名函数怎么写一个使数组中数字都乘2的函数.
```javascript
var a = [1,2,3,4,5];
a.map(function(x){ return x*2 });
```
用箭头函数会变成
```javascript
a.map(x => x*2);
```

 只是少了` function` 和` return` 以及 block, 不是吗? 如果觉得差不多, 因为你看惯了 JavaScript 的匿名函数, 你的大脑编译器自动的忽略了,因为他们不需要显示的存在.

而` map(x => x*2)` 要更 make sense, 因为我们需要的匿名函数只需要做一件事情, 我们需要的是 一个函数 `f`, 可以将给定 `x`, 映射到 `y`. 翻译这句话的最简单的方式不就是`f = (x => x*2)`

### Lexical `this`
如果你觉得这还不足以说服改变匿名函数的写法, 那么想想以前写匿名函数中的经常需要` var self = this`的苦恼.
```javascript
var Multipler = function(inc){
  this.inc = inc;
}
Multipler.prototype.multiple = function(numbers){
  return numbers.map(function(number){
    return this.inc * number;
  })
}
new Multipler(2).multiple([1,2,3,4]) // => [NaN, NaN, NaN, NaN]  不 work, 因为 map 里面的 this 指向的是全局变量( window)

Multipler.prototype.multiple = function(numbers){
  var self = this; // 保持 Multipler 的 this 的缓存
  return numbers.map(function(number){
    return self.inc * number;
  })
}
new Multipler(2).multiple([1,2,3,4]) // => [ 2, 4, 6, 8 ]
```

很怪不是吗, 确实是 Javascript 的一个 bug, 因此经常出现在各种面试题中.

试试替换成 arrow function
```javascript
Multipler.prototype.multiple = function(numbers){
  return numbers.map((number) => number*this.inc);
};

console.log(new Multipler(2).multiple([1,2,3,4]));// => [ 2, 4, 6, 8 ]
```
不需要 `var self = this` 了是不是很开心☺️现在, arrow function 里面的 this 会自动 capture 外层函数的`this` 值.

[完整代码](http://jsbin.com/vawobe/2/edit?js)

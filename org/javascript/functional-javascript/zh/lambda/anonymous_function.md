# 匿名函数(anonymous function)

支持匿名函数, 也就意味着函数可以作为一等公民. 可以被当做参数, 也可以被当做返回值.因此, JavaScript 的支持一等函数的函数式语言, 而且定义一个匿名函数式如此简单.

### 创建一个匿名函数
```js
function(x){
    return x*x;
}// => SyntaxError: function statement requires a name
```
为什么报错了这里. 因为创建一个匿名函数需要用表达式(function expression).
表达式是会返回值的:
``` js
var a = new Array() // new Array 是表达式, 而这整行叫语句 statement
```
但为什么说 `function statement requires a name`. 因为 JavaScript 还有一种创建函数的方法--function statement.
而在上面这种写法会被认为是一个 function 语句, 因为并没有期待值. 而 function 语句声明是需要名字的.

简单将这个函数赋给一个变量或当参数传都不会报错, 因为这时他没有歧义,只能是表达式.比如:
```js
var squareA = function(x){
    return x*x;
}
```
但是这里比较 tricky 的是这下 `squareA` 其实是一个具名函数了.
```
console.log(squareA) // => function squareA()
```

虽然结果是具名函数,但是过程却与下面这种声明的方式不一样.

```js
function squareB(x){
    return x*x;
} // => undefined
```
`squareB` 用的是 function statement 直接声明(显然 statement 没有返回), 而` squareA` 则是先用 function expression 创建一个匿名函数, 然后将返回的函数赋给了名为` squareA` 的变量. 因为表达式是有返回的:
```
console.log(function(x){ return x*x});
// => undefined
// => function ()
```
第一个 undefined 是 console.log 的返回值, 因此 `function()`则是打印出来的 function 表达式穿件的匿名函数.

### 使用匿名函数
JavaScript 的函数是一等函数. 这意味着我们的函数

可以赋给变量:
```js
var square = function(x) {return x*x}
```
可以当参数, 如刚才见到的:
```js
 console.log(function(x){return x*x})
```
将函数传给了` console.log`

可以被返回:
```js
function multiply(x){
    return function(y){
        return x*y;
    }
}
multiply(1)(2) // => 2
```

 #+TITLE: 为什么要柯里化

 #+DESCRIPTION: 柯里化是函数式的一个基本概念，但是平常见到的使用频率并不见得高，js流行的自称函数式库的Underscore都没有鼓励（至少从设计上）使用柯里化，但是实际上确实非常有用的一项函数式编程技术。

还记得 Haskell Curry吗![](http://s3.amazonaws.com/lyah/curry.png)

多巧啊, 人家姓 Curry 名 Haskell, 难怪 Haskell 语言会自动柯里化, 呵呵. 但是不奇怪吗, 为什么要柯里化呢. 为什么如此重要导致 Haskell 会默认自动柯里化所有函数, 不就是返回一个部分配置好的函数吗.

我们来看一个 Haskell 的代码.
```haskell
max 3 4
(max 3) 4
```
结果都是4, 这有设么用呢.

这里看不出来, 放到`高阶函数`试试. 什么? 看不懂天书 Haskell, 来看看 JavaScript 吧.

### 我们来解一个问题

#### 1. 写一个函数, 可以连接字符数组, 如 `f(['1','2']) => '12'`

好吧,如果不用柯里化, 怎么写? 啊哈 `reduce`

```javascript
var concatArray = function(chars){
  return chars.reduce(function(a, b){
  	return a.concat(b);
  });
}
concat(['1','2','3']) // => '123'
```
很简单,对吧.

#### 2. 现在我要其中所有数字加1, 然后在连接
```javascript
var concatArray = function(chars, inc){
  return chars.map(function(char){
  	return (+char)+inc + '';
  }).reduce(function(a,b){
      return a.concat(b)
  });
}
console.log(concatArray(['1','2','3'], 1))// => '234'
```
#### 3. 所有数字乘以2, 再重构试试看

```javascript
var multiple = function(a, b){
  return +a*b + ''
}
var concatArray = function(chars, inc){
  return chars.map(function(char){
  	return multiple(char, inc);
  }).reduce(function(a,b){
      return a.concat(b)
  });
}
console.log(concatArray(['1','2','3'], 2)) // => '246'
```

是不是已经看出问题了呢? 如果我在需要每个数字都减2,是不是很麻烦呢.需要将`map` 参数匿名函数中的 multiple 函数换掉. 这样一来`concatArray`就不能同时处理加, 乘和减? 那么怎么能把他提取出来呢? 来对比下柯里化的解法.

### 柯里化函数接口
```javascript
var multiple = function(a){
  return function(b){
    return +b*a + ''
  }
}

var plus = function(a){
  return function(b){
    return (+b)+a + ''
  }
}
var concatArray = function(chars, stylishChar){
  return chars.map(stylishChar)
    .reduce(function(a,b){
      return a.concat(b)
  });
}
console.log(concatArray(['1','2','3'], multiple(2)))
console.log(concatArray(['1','2','3'], plus(2)))
```
有什么不一样呢
1. 处理数组中字符的函数被提取出来, 作为参数传入
2. 提取成柯里化的函数, 部分配置好后传入, 好处显而易见, 这下接口非常通畅
无论是外层调用
```javascript
concatArray(['1','2','3'], multiple(2))
```
还是内部的 map 函数
```
chars.map(stylishChar)
```
这些接口都清晰了很多, 不是吗

这就是函数式的思想, 用已有的函数组合出新的函数, 而柯里化每消费一个参数, 都会返回一个新的部分配置的函数, 这为函数组合提供了更灵活的手段, 并且使得接口更为流畅.

### 自动柯里化
在 Haskell 语言中, 函数是会自动柯里化的:
```haskell
max 3 4
```
其实就是
```
 (max 3) 4
```
可以看看` max`与` max 3`函数的 类型
```haskell
ghci> :t max
max :: Ord a => a -> a -> a
```
看明白了么, `Ord a =>` 表示类型约束为可以比较大小的类型, 因此`max` 的类型可以翻译成: 当给定一个`a`, 会得到`a -> a`, 再看看` max 3`的类型就好理解了
```
ghci> :t max 3
(Num a, Ord a) => a -> a
```
左侧表示类型约束 `a`可以是` Ord` 或者` Num`, 意思是` max 3`还是一个函数,如果给定一个` Ord`或者` Num` 类型的参数 则返回一个` Ord`或者` Num`.

现在是不是清晰了, 在 Haskell 中每给定一个参数, 函数如果是多参数的, 该函数还会返回一个处理余下参数的函数. 这就是自动柯里化.

而在 Javascript(以及大多数语言) 中不是的, 如果给定多参函数的部分参数, 函数会默认其他参数是` undefined`, 而不会返回处理剩余参数的函数.
```javascript
function willNotCurry(a, b, c) {
    console.log(a, b, c)
    return a*b-c;
}
willNotCurry(1)
// => NaN
// => 1 undefined undefined
```

如果使用自动柯里化的库 [eweda](https://github.com/CrossEye/eweda), 前面的例子简直就完美了
```javascript
var multiple = curry(function(a, b){
  return +b*a + ''
})
var plus = curry(function(a, b){
  return (+b)+a + ''
})
```

[完整代码](http://jsbin.com/hamoq/4/embed?js,console)

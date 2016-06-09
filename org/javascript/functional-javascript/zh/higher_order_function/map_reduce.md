# map fold filter

本节结束高阶函数的典型应用 map, fold/reduce(个人认为fold 比 reduce 形象多了).

![](http://www.backpacker.com/2007/images/september2010/mapfolding_200x170.png)
map 是对列表中每个元素应用特定操作( applying the function), 返回结果列表

fold 则是把元素进行"叠加"( 所以说fold比较形象), 最终叠成一个值, 一个数组或一个对象. fold 还可以分为两种, foldl, 从左开始叠, 以及 foldr, 从右开始叠.

filter 则跟名字一样, 按照一定的方式过滤数组.

### fold left
让我们先看如何实现与使用 foldl, 为什么要先实现 foldl, 一会就知道了

以下代码来自 [Eweda](https://rawgit.com/CrossEye/eweda/master/docs/eweda.html) 的实现.
```js
var foldl = function(fn, acc, list) {
    return (isEmpty(list)) ? acc : foldl(fn, fn(acc, head(list)), tail(list));
};
aliasFor("foldl").is("reduce");
```

可以看出 foldl 接收三个参数, 函数 fn, 累加值 acc, 以及需要叠的列表 list. 其中函数 fn接收两个参数, acc 以及列表中的元素.

这是一个简单的递归, foldl 调用了自身:
1. 递归结束条件是`isEmpty(list)`为` true`时
返回叠加的值acc
2. 否则用 累加值 acc 与列表第一个元素`head(list)` 调用 `fn` 函数. 调用结果作为累加值 acc 再传入 foldl.
3. 剩下的列表`tail(list)` 作为新的列表传入foldl

而且这是一个**尾递归**
> **Note**为什么尾递归
1. 每次递归本次的计算`fn(acc, head(list)`已经做完, 作为参数传入下次调用.
2. 这样到递归到最后时结果已经计算出来可直接返回.

那么一个工作的 foldl 就这样写好了, 来看看实现一个 foldr 是有多容易.
```js
var foldr = function(fn, acc, list) {
    return (isEmpty(list)) ? acc : fn(head(list), foldr(fn, acc, tail(list)));
}
```
foldr 就不是尾递归...
我们刚好可以看下尾不尾有什么区别.

假如我们要用加法把`[1,2,3]`叠起来, 来看foldl 的步骤:
```js
foldl((a, b) => a+b, 0, [1,2,3])
```
| acc |head| tail |
| -- | --| -- |
| (0,1) => 0+1 = 1 | 1| [2,3] |
| (1,2) => 1+2 = 3 | 2| [3] |
| (3,3) => 3+3 = 6 | 3| [] |

来看 foldr 的步骤
```js
foldr((a, b) => a+b, 0, [1,2,3])
```
> **note** 以下为了简便吧`(a, b) => a+b`缩写成 `fn`

| acc |head| tail |
| -- | --| -- |
| (1,foldr(fn, 0, [2,3])) => 1 + foldr(fn, 0, [2,3])| 1| [2,3] |
| (1,(2, foldr(fn, 0, [3]))) => 1 + (2 + foldr(fn, 0, [3]))| 2| [3] |
| (1,(2, (3, foldr(fn, 0, [])))) => 1 + (2 + (3 + foldr(fn, 0, [])))| 3| [] |
| (1,(2, (3, foldr(fn, 0, [])))) => 1 + (2 + (3 + 0))| 3| [] |
| (1,(2, (3, foldr(fn, 0, [])))) => 1 + (2 + (3))| 3| [] |
| (1,(2, (3, foldr(fn, 0, [])))) => 1 + (5)| 3| [] |
| (1,(2, (3, foldr(fn, 0, [])))) => 6| 3| [] |

这下是不一目了然了, 尾递归结束是就直接得到了结果, 为非尾递归(看见括号没有,每个括号就是一层递归, 也就是栈的深度)要到递归到`foldr(fn, 0, [])`获得结果后再一层一层的返回时做计算.

### map
看看 map 的实现
```js
var map = function(fn, list) {
    return reverse(foldl((acc, x) => prepend(fn(x), acc), [], list));
};
```
为什么会有 foldl 呢. 来分解一下
```js
map(a => a+2, [1,2,3])
```
| acc |head|tail |
| -- | --| -- |
| prepend(1+2,[]) = [3] | 1| [2,3] |
| prepend(2+2,[3]) = [4,3] | 2| [3] |
| prepend(3+2,[4,3]) = [5,4,3] | 3| [] |

最后 `reverse`, 于是 `return [3,4,5]`

所以, 这个例子中 map 的实现可以是从一个空数组, 一步一步把原数组的元素应用函数 prepend 操作,叠出一个新的数组.

### filter
跟实现 map 一样,同样可以用 foldl 轻松实现 filter.

想想 map 与 filter 有什么不一样. map 吧每个元素应用函数 fn 然后 prepand 到 acc 中, 而 filter, 很简单, 也是对每个元素应用函数 fn, 如果返回 true, 则 prepend 到 acc.
```js
var filter = function(fn, list) {
    return reverse(foldl((acc, x) => (fn(x)) ? prepend(x, acc) : acc; }, EMPTY, list));
};
```

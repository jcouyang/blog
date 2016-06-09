# Functor
### Functor
Functor 是 可以被 map over 的类型. 什么叫 map over...

比如 list 就可以说是可以被map over... 那么是不是可枚举类型?

不是的, 来看看 Haskell 中如何解释(其实所有函数式的概念可能用 haskell 是最能说明问题的了).

```haskell
ghci > :t fmap
fmap :: (a -> b) -> fa -> f b
```

`fmap` 又是什么东西, fmap 是 map over Functor 的函数. 这个函数只干一个事情, 可能通过前面解释的一点点 Haskell功夫,你可能能翻译`(a -> b) -> fa -> f b`了把. 给定一个从`a` 到` b` 的映射函数, 再给定一个 a 的 Functor, 返回一个 b 的 Functor.

虽然个个字都认识, 但怎么就不知道啥意思.

如果我再说一个新词, 你是不是会疯掉了-- Lift.

好吧, 把他们都串起来, 你就明白了.
1. 平常我们可以把`a`到`b` 的映射可以叫做 map, 映射的方式就是函数了.
2. 那么类似的对于函数或者其他可以做这种 map 操作的类型或一种计算方式, 叫做 Functor.
3. 而这种 map 就叫做 fmap, 给定 a 集合到 b 集合的映射方式(也就是一个函数), 就能找到 对 a 的一种计算(computation, 任何可变换的类型, 这就是 Functor) 的变换 -- 对 b 的对应计算方式.
4. 如果该计算是一个函数, 那么这个操作叫做 lifting. 非常形象的, 根据 a 到 b 的映射 lift(举) 到另一个层面上.

![](http://learnyouahaskell-zh-tw.csie.org/img/lifter.png)

虽然 lifting 很形象, 但是还是越说越抽象了, 来举个栗子.
### 举个栗子🌰
> **note** 注意我们还没有实现 Functor, 因此下面的栗子还不能运行在你的 console.

前面说了, Functor 可以是数组, 因为数组可以被 map over
```js
var plus1 = n => n+1;
fmap(plus1, [2, 4, 6, 8])// => [3,5,7,9]
```
这里,数组 Array 就是 Functor 类型, 而 fmap 把 2 -> 3 的映射方式对 Array [2,4,6,8] 进行了变换, 得到 [3,5,7,9]. 这跟数组的 map 方法一样, 比较好理解.

再试试换一种 Functor 类型, 试试函数
```js
var times2 = m => m*2;
fmap(plus1, times2) // => function(){}
fmap(plus1, times2)(3) // => 7 (3*2+1)
```
看到 fmap 返回的是一个函数, 因为你 map over 的是一个函数` times2`. 还记得 `(a -> b) -> f a -> f b`的公式么, 因为现在的 Functor 为 Function 类型, 我们可以把`f`替换成函数也就是 x 到 y 的映射, 因此我们可以将该公式替换为
```
(a -> b) -> (x -> a) -> (x -> b)
```

再用我们具体的函数 plus1 替换进去
```
(n->n*2) -> plus1(n) -> plus1(n*2)
```

也就是说, 这个 fmap 会把函数 times2 应用到 plus1 的任何结果上.

这不就是函数组合吗 `plus1(times2(3))`, 确实是的. 但这只是 Functor 的冰山一角, dan在来看看别的Functor

Functor 还可以是别的东西...比如
```
fmap(plus1, Either(10, 20))
```

Either也是 Functor, 慢着, Either 是什么类型, 好吧,在解释 Either 之前, 我们先忍一忍, 来先看看 JavaScript 中怎么实现以及使用一个 Functor.

### Functor in JavaScript
首先, 我们用定义一个确定 Functor 类型的函数, 如果没有注册的类型抛出异常.
```js
 var types = function(obj) {
throw new TypeError("fmap called on unregistered type: " + obj);
};
```

然后实现注册 Functor 的函数.
```js
 Functor = function(type, defs) {
        var oldTypes = types;
        types = (obj) => {
            if (type.prototype.isPrototypeOf(obj)) {
                return defs; // 这是递归的出口, 判断类型, 确定 fmap 的 Functor 实例属于注册的哪一个 Functor
            }
            return oldTypes(obj); //不断递归寻找 types, 这个效率会很低, 因为调用栈上好多闭包, 每个闭包都保持着 type 和 defs
        }
};
```
这样可以用 Functor 函数注册一个新的 Functor 类型并定义它自己的 fmap 方法(还记得前面说的 Functor 只有一个方法吗). 比如我们要把 Array 变成 Functor
```js
Functor(Array, {
    fmap: (fn, array) => {
        arr.map(x => fn(x))
    }
})
```
好像快要完成的样子. 现在还差 fmap Functor 类型函数了. 这个函数干两件事情, 找到实例属于哪个 Functor 类型, 并调用他的 fmap 方法.

```js
fmap = eweda.curry((fn, obj) => {
    return types(obj).fmap(f, obj)
})
```

同样的, 我们很快可以把 Function 也变成 Functor
```js
Functor(Function, {
    fmap: (f, g) => {
        return eweda.compose(f, g);
}})
```

还记得前面说 fmap 函数像函数组合吗, 呵呵, 我们这里就按函数组合实现.

---
来总结一下 fmap 和 Functor 到底是什么, fmap 可以将函数应用到 Functor 上, Functor 可以看做是容器或者是带 context 的值. 也就是说如果我们想变换 x 的值, 直接给一个函数映射 `x=> x*2` 即可. 如果我想变换一个数组, 一个函数, 或者 Either 这种带有 context 的或者说容器里面的值, 总不能直接把这些容器直接给函数吧，这时就需要 fmap 将函数的映射关系应用到容器里面的值. 其实就是打开，调一下函数，完了再包好。

好吧, 通过如何实现和使用一个简单的 Functor, 概念上已经估计可以理解了, 我们回过头来看看 Either 是神马玩意.

[完整代码](http://jsbin.com/xezun/1/embed?js,console)


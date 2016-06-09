# lambda

为什么一上来就讲 lambda aka λ算子

![](http://images.wikia.com/half-life/en/images/archive/3/3a/20120621181904!Lambda_reactor_complex_logo.png)

先来看下[定义](): lambda包括一条变换规则（变量替换）和一条函数定义方式，Lambda演算之通用在于，任何一个可计算函数都能用这种形式来表达和求值。因而，它是等价于图灵机的.

lambda其实就是`x`到`y`的映射关系, 但在大部分支持函数式的编程语言中, 它等价于匿名函数. 被称为 lambda 表达式. 因为这些函数只需要用一次或者几次, 不需要命名.

![](http://m.memegen.com/eo6ojw.jpg)
![](http://m.memegen.com/1qleyk.jpg)

匿名函数在程序中的作用是可以作为参数传给高阶函数, 或者作为闭包被返回.

但是匿名函数不是原本的 lambda 算子, 因为匿名函数也可以接受多个参数, 如
```
multiple(x, y) = x*y
```
写成简单映射的形式, 把名字去掉
```
(x,y) -> x*y
```
这就是 lambda 了吗, 不是, lambda的用意是简化这个映射关系以至不需要名字, 更重要的是只映射一个 x.

什么意思呢? 让我们来分解一下上面的这个映射的过程.

1. lambda 接受第一个参数 `5`, 返回另一个 lambda
```
(5) -> (y -> 5*y)
```
2. 该返回的 lambda `y -> 5*y` 接收 `y` 并且返回 `5*y`, 若在用`4`调用该 lambda
```
4 -> 5*4
```

因此这里的匿名函数 `(x,y)->x*y` 看似一个 lambda, 其实是两个 lambda 的结合.

而这种接受一个参数返回另一个接收第二个参数的函数叫柯里化,我会在第二章详细介绍.

这里我们先忍一忍, 来看下 Javascript 中的 lambda先.

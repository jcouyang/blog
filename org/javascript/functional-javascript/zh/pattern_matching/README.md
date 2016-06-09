# 模式匹配(Pattern Matching)
![](http://reasontostand.org/wp-content/uploads/2010/12/matchingshapes_2.jpg)

模式匹配意思是可以规定一种模式, 比如上图中那些坑的形状, 程序会把对应形状的数(积)据(木)放入匹配的坑中.

### destructuring
如果你用过 python 或 ruby 什么的， 可能会记得可以这样写
```python
a, b = (1, 2) # a=>1, b=>2
```
所以 swap(还记得 c 写 swap 是怎么写的吗) 就可以写成
```python
b, a = (a, b) # a=>2, b=>1
```

这就是 destructuring patterns, 这跟模式匹配有毛关系啊. 这里等号左边就是pattern (模式), 模式匹配就是吧右边的玩意按左边的模式匹配过来.

目前[ES6](http://kangax.github.io/compat-table/es6/#Destructuring) 已经支持了 destructuring, 而且还可 destructure 对象
> **note** 记得还是用firefox

```js
function hello(name){
    return {
        name: name,
        greet:{
            cn: "你好",
            en: "hello"
        }
    }
}
var {name:a, greet:{cn:b}} = hello('world');
// a => world
// b => 你好
```

###list compreshensions
还是 python, 你可能会见过生成一个原数组两倍的数组.
```python
[x*2 for x in range(5)] # => [0,2,4,6,8]
```

恭喜你, 同样的在 es6中你也可以这么写了
```js
[x*2 for (x of [0,1,2,3,4])]
```

让我们配合下前面的模式匹配来干这么个事情, 有一个 hello 对象数组, 我们要把里面的 greet 中文拿出来，连上一个名字, 再组成数组.
```js
[cn+name for ({name, greet:{cn}} of [hello('Li Lei'), hello('Han MeiMei')])]
// => ['你好Li Lei', '你好Han MeiMei']
```

是不是觉得模式匹配非常有用了.

> **comment** 在 haskell 中函数也可以用模式匹配, 但是 javascript 没有类型系统, 因此不好实现. 比如`hello`在 Haskell 中的类型是 `hello::(String a, HashTable b) => a -> b`, 而跟`hello::(String a) => a -> a` 是两个函数，因此可以根据参数类型匹配不同的函数。而在 javascript 定义的 hello 你可以往里传任何东西, 而且定义的同名函数会直接覆盖掉前一个，因此原生并不支持这样的匹配模式.

但是依然可以实现的，如果你对模式匹配特别有兴趣， [livescript](http://livescript.net)，或者一个小巧的库[pun](https://github.com/CRogers/pun) 就你能让你满足。

[livescript fibonacci](http://jsbin.com/budiga/1/edit?js)

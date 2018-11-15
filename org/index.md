

# [2016 Year in Review](2016-year-in-review.md)

*Dec 19, 2016*


## ㊙

去年翻译完 ㊙ 这本小书，小书内容涵盖了比underscore炫技更多的函数式概念，例如Pattern Matching，Functor，Monad。说是小书，其实只是我的博客合集。
开始在 gitbook 上，后来发现还是更习惯orgmode些，于是还是orgmode到我的博客上 <http://blog.oyanglul.us/javascript/functional-javascript.html>

[Read More&#x2026;](2016-year-in-review.md)

---


# [用Haskell48小时写你个Scheme](write-yourself-a-scheme-in-haskell/index.md)

*Sep 16, 2016*


## 前言

㊙
你可以当这是 ㊙ 的笔记，但并不是中文版。所以只是按我的理解来解释，如果有看不懂或者描述有误欢迎留言或者Pull Request。

[Read More&#x2026;](write-yourself-a-scheme-in-haskell/index.md)

---


# [Functional Ruby](fp-ruby.md)

*Jul 14, 2016*

话题已入选 ㊙, 没看懂的同学 <del>不服来战</del> 我们成都见 😉

-   slides 👉 <http://git.io/fprb>
-   cats.rb <https://github.com/jcouyang/cats.rb>

㊙
说到 ruby 都会觉得是纯面向对象语言，所有东西都是对象。但是，函数式与面向对象并无冲突（你看看Scala）。最近一个项目用 ruby 写了一个非常常用的 feeder，一不小心写得函数式了些，让我们看看fancy的ruby到底能干些什么fancy的函数式。

[Read More&#x2026;](fp-ruby.md)

---


# [Functional Ruby](functional-ruby.md)

*Jul 14, 2016*

话题已入选 ㊙, 没看懂的同学 <del>不服来战</del> 我们成都见 😉

-   slides 👉 <http://git.io/fprb>
-   cats.rb <https://github.com/jcouyang/cats.rb>

㊙
说到 ruby 都会觉得是纯面向对象语言，所有东西都是对象。但是，函数式与面向对象并无冲突（你看看Scala）。最近一个项目用 ruby 写了一个非常常用的 feeder，一不小心写得函数式了些，让我们看看fancy的ruby到底能干些什么fancy的函数式。

[Read More&#x2026;](functional-ruby.md)

---


# [Implicit, to be or not to be](scala/implicit-conversions.md)

*Jun 09, 2016*


## 隐式转换是什么鬼

有时候，一加一等于 11，比如 JavaScript

[Read More&#x2026;](scala/implicit-conversions.md)

---


# [Rethinking React Dataflow](javascript/rethinking-react-dataflow.md)

*Mar 01, 2016*

 所谓 redux，就是将动作(action) 变换成 state 转换函数(reducer)，然后放到一个统一的地方(store)来 setState 而已。
Redux 现在红的一塌糊涂，写这篇文章并不是专门来踢馆的，因为已经㊙。
我用过裸的 React，确实代码 scale 了会很难过，也用过 redux，predictable 不是吹的，但是这不该归功于 redux，而应该是纯函数，一个函数式编程顺带的最基本的好处。所以，撇开 redux 不聊，来看看除了纯函数，让我们来重新思考下函数式的其他一些奇技淫巧如何能帮助我们提升状态的可预测性。


## Reactive

相对于命令式的在各个地方 setState，setState 的顺序非常难确定， 就跟可变变量赋值一样，谁先谁后对结果影响巨大。这也是函数式要消灭的赋值。但是话说回来，我特么为什么要去推测状态呢？你永远无法列举完用户交互的操作顺序，即使可以也太头疼了。

[Read More&#x2026;](javascript/rethinking-react-dataflow.md)

---


# [看我们3天 hackday 都干了些什么](javascript/react-transdux-the-clojure-approach-of-flux.md)

*Nov 22, 2015*

好不容易有3天属于 hacker 的日子， 从 idea 到产品，我们到底能做些什么？从 **痛点** 出发，最近的项目被 React 和 React Router 虐的不算轻，很大程度上因为我们是半路接手的。真的算是前人 <del>瓦🖖肯</del> 后人 <del>植树</del> 擦屁股。
 到底干了些什么呢？ 专业剧透 🐶 30年提示您请看 url 👆️ 并点这里 👉 ㊙


# [A Compact React Cookbook](javascript/react-cookbook-mini.md)

*Nov 08, 2015*

这是一本非常 campact 的 React 煮书，收集了在实践 React 时的一些问题和解决方法。


## Why not 2 way binding/为毛不用双向绑定

[Read More&#x2026;](javascript/react-cookbook-mini.md)

---


# [使用 dotfiles 和 stow 管理你的 dotfiles](github/using-dotfiles-and-stow-to-manage-your-dotfiles.md)

*Oct 29, 2015*

curl "<https://raw.githubusercontent.com/jcouyang/dotfiles/master/README.org>"
可能看标题你觉得我疯了，什么叫用 dotfiles 管理你的 dotfiles。
第一个单词 ㊙ 指将 HOME 目录下的 `.XXX` (它们是真的字面意思dotfiles) 文件同步到 Github 上的方式。
通常情况下，我们在开发过程中装的大部分工具，都会在 HOME 目录下创建一个以 `.` 开头的文件或目录，放置配置或者状态。
因此我们希望的是用 github 版本管理这些 **配置** ，而不是 **状态** 。

[Read More&#x2026;](github/using-dotfiles-and-stow-to-manage-your-dotfiles.md)

---


# [Monadic Reactive Programming in JavaScript](javascript/reactive-programming.md)

*Sep 29, 2015*

当我们都用习惯 Promise Monad 之后，我再来介绍一个跟时间相关的 Stream Monad，通过 Stream Monad，我们可以完成 Promise 或者是数组的奇淫巧计，而且符合所有 monad 的公理，于是我们叫它 Monadic Reactive Programming。
㊙


### Stream

如果说数组是空间维度，那么 Stream 则是时间维度版本的数组。比如我们有一个数组，需要 reduce 一下再打印出结果，是非常容易做到的：
㊙.reduce((acc,x)=>acc+x)

[Read More&#x2026;](javascript/reactive-programming.md)

---


# [入语言第二试: readtable 与 core.async](javascript/ru-lang-second-attampt.md)

*Aug 16, 2015*

俺的小公举淼淼最近各种 <del>发肚子拉烧</del> 发烧拉肚子，难得抽点时间给入语言ru-lang加入俩个大大的 features，忍不住要 marketing 一下。
㊙
紧接㊙，在简单的介绍我是如何移植 clojure 的一些 macro 到 JavaScript 之后，我要介绍两个革命性的移植

-   readtable
-   core.async

[Read More&#x2026;](javascript/ru-lang-second-attampt.md)

---


# [理解JavaScript的原型链和继承](javascript/understand-prototype.md)

*Jul 03, 2015*


## instanceof 引发的问题

instanceof 运算符可以用来判断某个构造函数的prototype属性是否存在另外一个要检测对象的原型链上㊙。
什么意思呢？
来个题
Function instanceof Object;

[Read More&#x2026;](javascript/understand-prototype.md)

---


# [自制语言初试 - 入lang](javascript/clojure-essence-in-javascript-macro-2.md)

*Jun 22, 2015*


## Rationale(为毛要整一门语言)

㊙


### ClojureScript怎么就不好了

接上篇简单的介绍sweet.js之后, 萌发了特别crazy的idea. 如果CoffeeScript或者LiveScript也算
语言的话, 其实单单用sweet.js自制一堆macro就能实现类似的语言. 当然, 这两门语言都比较奇特, 一个

[Read More&#x2026;](javascript/clojure-essence-in-javascript-macro-2.md)

---


# [JavaScript玩转Clojure大法之 - Macro (1)](javascript/clojure-essence-in-javascript-macro.md)

*Jun 14, 2015*

-   ㊙
-   ㊙
-   ㊙
-   **JavaScript玩转Clojure大法之 - Macro (1)**

macro可以说是lisp语言的独门绝技, lisp语言数据即代码,以及s-expression的特点使得可以轻松自定义macro.

[Read More&#x2026;](javascript/clojure-essence-in-javascript-macro.md)

---


# [JavaScript玩转Clojure大法之 - Trampoline](javascript/clojure-essence-in-javascript-trampoline.md)

*May 30, 2015*

-   ㊙
-   ㊙
-   **㊙**
-   ㊙

在函数式编程中, 递归可以说是最关健甚至唯一的循环手段

[Read More&#x2026;](javascript/clojure-essence-in-javascript-trampoline.md)

---


# [JavaScript玩转Clojure大法之Transducer](javascript/clojure-essence-in-javascript-transducer.md)

*May 16, 2015*

-   ㊙
-   **㊙**
-   ㊙
-   ㊙

通过上一篇㊙介绍了如何用JavaScript享受到Clojure在并发编程的优势. 我决定

[Read More&#x2026;](javascript/clojure-essence-in-javascript-transducer.md)

---


# [Functional JavaScript Mini Book](javascript/functional-javascript.md)

*May 13, 2015*

⚠ DEPRETICATED ⚠
本书已 <del>过时</del> 停更，请转到新书 
👉 ㊙ 👈
当然，你依然可以请㊙ ☕
㊙

[Read More&#x2026;](javascript/functional-javascript.md)

---


# [Literal Programming Emacs Configure](emacs/literal-programming-emacs-config.md)

*May 08, 2015*

[Read More&#x2026;](emacs/literal-programming-emacs-config.md)

---


# [Clojure 风格的 JavaScript 并发编程](javascript/clojure-core.async-essence-in-native-javascript.md)

*Apr 28, 2015*

-   **㊙**
-   ㊙
-   ㊙
-   ㊙

在看到第一行JavaScript代码之前，我要啰嗦一下为什么要用 clojure core.async 的异步风格。

[Read More&#x2026;](javascript/clojure-core.async-essence-in-native-javascript.md)

---


# [Essential EcmaScript 6](javascript/essential-ecmascript6.md)

*Mar 20, 2015*

新的草案㊙
(虽然说是草案,但你可以看到 Firefox 其实已经实现大部分的
feature)离我们越来越近了, 而且我们已经可以通过 ㊙ 在项目中使用这些新的features. 是时候让我们
重新认识一下 JavaScript 了. 下面列出了一部分比较让人兴奋和期待的features. 剧透一下我最激动的还是㊙


## Arrow Function

[Read More&#x2026;](javascript/essential-ecmascript6.md)

---


# [Clojure The Mini Book](clojure/clojure-the-mini-book.md)

*Feb 26, 2015*

;; please using cider version of ob-clojure 
(require 'ob-clojure)
(require 'ob-js)
(setq org-babel-clojure-backend 'cider)

    cider

[Read More&#x2026;](clojure/clojure-the-mini-book.md)

---


# [make Bamboo support Github Pull Request with Status API](make Bamboo support Github Pull Request with Status API.md)

*Feb 18, 2015*


## what's wrong with Bamboo

if you used *travis-ci* on github, you may familiar with this thing when sending pull request
㊙
those green things came from github status api.
but *bamboo* does not come with native support for github status api

[Read More&#x2026;](make Bamboo support Github Pull Request with Status API.md)

---


# [About Me](jichao.ouyang.md)

*Feb 01, 1986*

不会 Haskell 的 Scala 程序员写不出好的 JavaScript
Hi, I'm programmer who program `JavaScript`, `Ruby`, sometime even `Scala` for living, meanwhile also play `Clojure/Script`, `Haskell` and my own language `rù` for **fun**.
If you want to find/ping me, I'm always available on


## Projects


## Books

[Read More&#x2026;](jichao.ouyang.md)

---


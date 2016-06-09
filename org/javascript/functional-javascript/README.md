👉 https://blog.oyanglul.us/javascript/functional-javascript.html

> 如果你觉得这本书对你有帮助,忍不住要请[我一杯咖啡](https://gum.co/fpjs), 那么你将同时获得一本pdf版本的FPJS mini nook ![](./images/shut-up-and-take-my-money.gif)

Preface
=======

这是本可能2小时就能看完的小书，但是涵盖了基本所有函数式编程的内容，还包含了一些 ECMAScript 6 定义的函数式新特性, 如箭头函数, 模式匹配等等. 还会介绍函数式一些重要概念在 JavaScript是如何实现即应用, 以及如何以函数式的思想编写 JavaScript 代码.

> 本书虽然与我翻译的Michael Fogus的[Functional JavaScript](http://book.douban.com/subject/22733640/)同名, 但是请不要当成是Fogus大师的mini版本, 这里的内容完全跟Fogus大师的不一样, 可能比大师的要再"函数式"一些[1], 用js实现了一些其他函数式语言(Clojure, Haskell)特有的函数式features.

对果JavaScript的基本概念对你来说:

![](./images/preface/what_you_talking.gif)

可能本书并不适合你, 请先移步 [JavaScript Allonge](https://leanpub.com/javascript-allonge), 但是如果你学习函数式编程时感到费解:

![I'm not reading the crap, summarize in one word](./images/preface/summarize_in_one_word.gif)

那么这本书将会对你会有所帮助.

我选用的 JavaScript 函数式库是 [Eweda](https://rawgit.com/CrossEye/eweda/master/docs/eweda.html)([Ramda](https://ramdajs.com) 的最初实现，更遵守函数式教条，但由于 javascript 的栈很容易爆，Ramda的实现要更 pratical 一些而且可以用的产品代码中， 千万不要在产品中用 eweda,这里只用eweda做介绍目的)

> [为什么不用 Underscore/Lodash](http://fr.umio.us/why-ramda/) 请移步第二章

> 由于会介绍 ECMAScript 6 的新特性, 书中很多写法都是 ECMAScript 6 标准, 只能在实现这些 feature 的浏览器(如 Firefox, 请目前参照各浏览器的[实现情况](http://kangax.github.io/compat-table/es6/)) 里运行. 另外, 大多数的例子源码都会在文章里的 jsbin 链接里.

[1] Fogus同时是The Joy of Clojure的作者,我 特别奇怪为什么不把Clojure真正Good part写进Functional JavaScript里

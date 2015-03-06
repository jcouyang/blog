 #+TITLE: Some React Tips

 #+DESCRIPTION: some tips and tricks when I using React

 #+KEYS: react,react.js,tips,facebook
 
 #+DATE: <2015-02-15>
 
### Prop Validation

http://facebook.github.io/react/docs/reusable-components.html#prop-validation

如果把每个Component想象成一个函数，那么props就是这个函数的参数。在有类型检查的语言中，很容易在编译期间就可以对参数类型检
查来避免一些不必要的错误。

javascript没有类型检查，但是我们仍然能筒高React的Prop Validation在运行期间检查props的类型。

只需要在Component声明里加上

```javascript
propTypes: {
  aProperty: React.PropTypes.any.isRequired
  ...
}
```

###Prop shortcut
一个嵌套多层的Component可能会有非常多的参数要通过props往下传，那么我们可以简单的这样

```
<a {...this.props}>
```
就可以吧所有的props传给子元素

但是如果某个中间Component消费了一些props, 那么我们完全可以只把剩下的props继续传下去。

```js
var { checked, ...other } = this.props;
var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
// `other` contains { onClick: console.log } but not the checked property
return (
  <div {...other} className={fancyClass} />
);
```

###mixin
可以mixin一些功能点

```javascript
var SetIntervalMixin = {
  ...
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
})
```

###className
样式class在React中叫做className，同样他是一个字符串，但是React
提供了方便的classset工具，让我们而已这样

```javascript
var cx = React.addons.classSet;
var classes = cx({
  'message': true,
  'message-important': this.props.isImportant,
  'message-read': this.props.isRead
});
```

从此就不用麻烦的拼接字符串了。

###Inline style
这么多年来我们一直被教育说不要用 `inline style`，但是React貌似非常支持这种写法

```javascript
var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

React.render(<div style={divStyle}>Hello World!</div>, mountNode);
```

开始不理解为什么要吧style从字符串改成一个map，但是看到最近React Native的session顿时开朗了。
React Native把android和ios的Native ui都封装成了Component，但是native的ui并不会使用css来控制样式。
那么facebook想出来的颠覆性的想法就是把样式写成inline的，然后native component去实现这些inline css样式
与native ui样式的bridge。

把样式弄成map，这样可以方便重用，我们就可以方便的把这些样式抽成module
### refs
我们知道如果想要子component发生某些变化是让父component做一些事情，可以把父componet的函数通过
props传给子component，然后等着被回调就好了。。

另外一个方向是，如果父component发生某些变化，想让子component做一些事情的话，比如我在父component点了
个按钮，想让一个子component显示或不显示，有两种方法可以做这件事情：
- 通过props传一个显示不显示的标志进去，然后子component通过不同的标志调整显示的样式。
- 子component暴露一个公开方法，父component通过拿到子component的引用`ref`，调用这个公开方法。

```js
var App = React.createClass({
  ...
  clearAndFocusInput: function() {
    // Clear the input
    this.setState({userInput: ''}, function() {
      // This code executes after the component is re-rendered
      this.refs.theInput.getDOMNode().focus();   // Boom! Focused!
    });
  },
  render: function() {
    return (
      <div>
        <div onClick={this.clearAndFocusInput}>
          Click to Focus and Reset
        </div>
        <input
          ref="theInput"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
      </div>
    );
  }
});
```
选择后者的好处是可以少传点props

###PureRenderMixin
想想如果一个纯函数，他每次相同输入都是相同的输出，我们就不需要再检查状态，不需要比较那个地方可能会被
不知道谁谁谁修改了，那么在shouldComponentUpdate的判断的时候，我们不会担心state里面某个很深的字段被改掉了没，只要做
一个浅比较就可以了。如果你用了一些Immutable的数据结构，大可以把这个mixin加上。
```js
var PureRenderMixin = require('react').addons.PureRenderMixin;
React.createClass({
  mixins: [PureRenderMixin],
  ...
```

shouldComponentUpdate 而且会跳过其子component的更新，所以最好你的子component也是纯的.
### Immutable datastructure
- [mori](http://swannodette.github.io/mori/)
基本上是clojure里面的数据结构，用法也基本一样
- [Immutable](http://facebook.github.io/immutable-js/)
facebook的，比较轻量一点

### [flow static type](http://flowtype.org/docs/react-example.html#_)
flow 可以让对js进行静态类型检查，也就是在编译期让我们可以避免很多类型带来的错误
```js
type Message = {
  id: string;
  threadID: string;
  authorName: string;
  date: Date;
  text: string;
  isRead: boolean;
};
// ...
get: function(id: string): ?Message {
  return _messages[id];
},
```

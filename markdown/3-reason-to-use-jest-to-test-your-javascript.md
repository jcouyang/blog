 #+TITLE: 3 Reason to move from jasmine to jest
 
 #+KEYS: jasmine,jest,facebook,javascript,test

 #+DATE: <2014-10-28 Tue>

- [slides](https://rawgit.com/jcouyang/cc0e65e36af9c7c001e2/raw/b100f45ebfe7c196043cb10f967123f9ebde7ffc/1-painless-javascript-testing.html#/28)
- [source](https://github.com/jcouyang/jest-sample)

Javascript 的测试, 不管在用 [jasmine](http://jasmine.github.io) 还是 [mocha](http://visionmedia.github.io/mocha/),
都是很头疼的事情. 但是自从有了 [jest](http://facebook.github.io/jest/), 一口气写7个测试, 腰也不疼了, 头也不疼了.

只需要 3 个理由

在说用 jest 测为什么好之前,我们先来看我们要测的一个例子.

## 🌰
 比如我要写一个模块要去取github 用户的follower 和他所有 repo 的 follower 数量.

那么我们应该有一个 User 的 Model.


```js
// user.js
var $ = require('jquery');
function User(name) {
  this.name = name;
  this.followers = 0;
}
User.prototype.fetch = function(){
  return $.ajax({
    url: 'https://api.github.com/users/' + this.name,
    method: 'get',
    dataType: 'json'
  }).then(function(data){
      this.followers = data.followers;
  }.bind(this));
};
module.exports = User;
```


我们还需要一个 repo 的 model, 大同小异略去

最后, 整合这俩我要的东西, 并显示在页面上

```js
// follower.js
var $ = require('jquery');
function followerOf(user, repo) {
  user.fetch().then(repo.fetch).then(function(_){
    $('#content').text(user.name +"'s followers: " + user.followers +
                       " and his repo "+ repo.name +"'s followers:" + repo.followers);
	});
};

module.exports = followerOf;
```
--

## 1. Auto Mock
自动 mock 实在是最大的亮点, jest 重写了 require, 所以你的代码里的所有 require 来的东西都自动 mock.

因为在你的测试中往往只关心一个模块, 对于他的所有依赖其实都是无所谓的.

在例子中, 如果我们在测 repo.js 的时候完全不关心那两个 jquery 的 ajax 方法到底
写对没写对,反正我们期望能从 ajax 里面拿到我们想要的东西就对了. 因此, 我希望 jquery 的
所有方法都是 mock 的. jest 让你很轻松的做到这点, 因为是自动mock所有require 的东西, 而
对于目标测试模块, 只需要说我` dontMock` 我的目标模块就好了.

```js
jest.dontMock('../repo');
describe('Repo Model', function(){
  var repo;
  beforeEach(function(){
		var $ = require('jquery').setAjaxReturn({stargazers_count: 23});
		var Repo = require('../repo');
    repo = new Repo('jcouyang', 'gira');

	});

  it('should populate properties with data from github api', function(){
		repo.fetch();
		expect(repo.followers).toBe(23);
  });
});

```

所以这个测试看起来就跟文档一样了,

1. `dontMock('./repo')` 说明我关心`repo`
这个模块, 其他我都不 care.
2. before 是我要进行操作所需要的东西.
  - 我要 jquery ajax 请求给我想要的数据
  - 我要一个我要测的 Repo 类的实例
3. it 说明我关心地行为是神马
  - 我关心 fetch 的行为,是去取数据并给我把数据填充到我的 repo 实例中

> 你可能要问 `segAjaxReturn` 是哪里冒出来的. 忍一忍稍后告诉你.

有没有看虽然我显式的 mock jquery, 但是 Repo 里面 require 的 jquery 其实是假的, 不然我们就真的访问
github api 了. 那样就不会每次都返回 23 个 follower 了.

## 2. jsdom
好了现在我们来测 follower.js, 先看 follower 到底干了什么, 拿到 user 和 repo
的信息然后组成一句话放到页面 id 为 content 的元素下面.

好, 所以我们关心
- 组出来的话对不对
- 有没有放到 content 元素下, 所以 jquery 的操作对不对也是我们关心的一部分

我们不关心
- user 干了什么
- repo 干了什么

这样,关心的就是不能 mock 的
```js
jest.dontMock('../follower')
    .dontMock('jquery');
describe('follower', function(){
  var user, repo, follower;
	var $ = require('jquery');
  beforeEach(function(){
		var Repo = require('../repo');
		var User = require('../user');
		follower = require('../follower');
		user = new User('jcouyang');
    repo = new Repo('jcouyang', 'gira');
    // 我们不关心 user, 但是我们希望他能返回一个 deferred 类型
	  user.fetch.mockReturnValue($.Deferred().resolve('dont care'));
    // 我们让我们不关心的 user 和 repo 返回我们期望的东西就好
		user.name ='jcouyang';
		user.followers = 20;
		repo.name = 'gira';
		repo.followers = 21;
    // 期待页面上有一个  id 为 content 的元素
		document.body.innerHTML = '<div id="content"></div>';
	});

  it('should populate properties with data from github api', function(){
		follower(user,repo);
    // 希望 content 上能得到想要的内容
		expect($("#content").text()).toBe('jcouyang\'s followers: 20 and his repo gira\'s followers:21');
  });
});

```

## 3. Manual Mock
好了, 说好的解释 `setAjaxReturn`是怎么回事的

嗯嗯, 是这样的, 虽然 jest 自动 mock 了我们不关心的模块, 但是我们还是会希望
这个 mock 的玩意能有一些我们期望的行为, 也就是按我们的期望返回一些东西. 比如
这里就是我们不关心 ajax 的逻辑, 但是我们需要他能给我们返回一个东西,并且可以
thenable. 所以单纯的 mock 对象或函数都不能做到, 所以有了 manual mock 这种东西.

用 manual mock 需要建一个`__ mocks__` 文件夹,然后把所有的 mock 都扔进去. 比如
我想 mock jquery, 那么我建一个` jquery.js` 扔进去
```javascript
var data = {};
var mockDefered = function(data){
	return {
		then: function(cb){
			return mockDefered(cb(data));
		}
	};
};

function ajax() {
  return mockDefered(data);
}

function setAjaxReturn(shouldbe){
	data = shouldbe;
}
exports.setAjaxReturn = setAjaxReturn;
exports.ajax = ajax;

```
终于看见`setAjaxReturn`在哪里定义了:sweat_smile: 这里暴露两个函数
- setAjaxReturn: 可以设置我希望 ajax 返回的值
- ajax: 单纯的返回这个 thenable.

所以我也不需要显示的声明 mock jquery什么什么的, 直接在测试里设置ajax 的返回值就好了.
``` js
var $ = require('jquery').setAjaxReturn({stargazers_count: 23});
```
这是 repo 里面 require 的 jquery 已经被 mock 并且只要掉 ajax 都会返回我
期望的值.

## etc
- **并行测试**:
还用说么, 既然已经如此模块化好了, user repo 以及 follower 的测试完全是互不依赖.
没有什么理由一个一个测. 因此3个测试的耗时取决于最长时间的那个. 所以如果有
那个测试特别耗时,说明模块还不够细, 多拆几个就快了.
- **promise**: 使用 pit() 来测试 thenable 的对象, 比如 repo 的例子,就 keyi
写成
```javascript
pit('should populate properties with data from github api', function(){
  return repo.fetch().then(
    expect(repo.followers).toBe(23);
  );
});
```
- **Timer mocks**: 可以使用 mock 的 timer 和 ticks, 也就是你可以加速
所有的setTimeout, setInterval, clearTimeout, clearInterval行为. 不需要等待.
```js
setTimeout(function() { callback(); }, 1000);
 expect(callback).not.toBeCalled();
 jest.runAllTimers();
expect(callback).toBeCalled()
 ```

----------------

## Wrapup
所以说白了, jest 其实也是个概念, 推荐使用模块化的思想, 这样我只需要保证每个接口的 IO 正确, 就可以保证整个程序没问题. 这样划分下来测试就会变得简单到只需要关心当然模块的 IO 从而
可以 mock 掉所有其他依赖. 真正模块化好的代码单纯的只用 jasmine 或者 mocha
都应该是很好测的. 只是在这个概念之上省去了很多不必要的 mock 代码, 因为要 mock 的
依赖总是占大多数的, 而关心的, 往往只是那么一两个.

![Analytics](https://ga-beacon.appspot.com/UA-32314154-5/blogist/3-reason-to-use-jest)
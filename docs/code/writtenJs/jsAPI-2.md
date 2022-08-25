---
title: 2. JavaScrpit API -2
sidebar_position: 2
date: 2022-08-04
tags: [手写JavaScript]
---

### 实现 ajax 🌟

```js
function getJSON(url) {
  return new Promise(function (resolve, reject) {
    // 1.创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    // 2.设置请求信息：请求行 + 请求头(可省)
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    // 3.接收响应（事件绑定）
    xhr.onreadystatechange = function () {
      // 0 已创建，1 已调用open，2 已调用send，3下载中，4 完成
      if (this.readyState !== 4) return;
      // 4.请求成功/失败时，promise 决议
      if (this.status === 200) resolve(this.response);
      else reject(this.statusText); // 返回错误状态码
    };
    // 5.网络异常监听
    xhr.onerror = function () {
      reject(this.statusText);
    };
    // 6. 网络超时监听
    xhr.timeout = 10000;  // 超时时间 10s
    xhr.ontimeout = function(){   // 超时回调
      reject('time out');
    }
    // 7.发送 http 请求
    xhr.send(null);
  });
}


// 使用：
getJSON("https://www.ninjee.co")
  .then((res) => {
  console.log(res);
})
  .catch((err) => {
  console.log(err);
});
```

### 实现 jsonp 🌟

要点：

1. 请求结束后，需要 **销毁** 本次请求产生的 **script 标签**和 **window上的回调函数**。
2. callback 需要注册在 window 对象上，因为 script 加载后的执行作用域是 window 作用域。
3. callback 名称要尽可能唯一。

```js
// @ts-nocheck
/**
 * url: baseURL
 * params: url携带参数
 * callback: 服务器返回数据的回调函数
 */
const jsonp = ({ url, params, callback }) => {
  // 构建请求的 url 地址：基本地址 + url参数 + 回调函数参数
  const generateUrl = () => {
    let urlParams = "?";
    Object.keys(params).forEach((key) => {
      urlParams += `${key}=${params[key]}&`;
    });
    urlParams += `callback=${callback}`;
    // "https://www.ninjee.co/test?name=ninjee&age=18&callback=handle"
    return url + urlParams;
    // `https://www.ninjee.co/test?name=ninjee&age=18&callback=() => {\n    console.log\n    ("i'm callback~");\n}`
  };

  return new Promise((resolve, reject) => {
    // 创建 script 元素
    const scriptElement = document.createElement("script");
    // .src 属性添加地址
    scriptElement.src = generateUrl();
    // 元素添加到网页上
    document.body.appendChild(scriptElement);
    // 收尾工作：在window上定义属性(名称为callback的函数代码，防止重名)，
    window[callback] = (res) => {
      try {
        resolve(res);
      } catch (e) {
        reject(e);
      } finally {
        //请求结束，移除 script 标签 + window上的回调函数
        document.body.removeChild(script);
        delete window[callback];
      }
    };
  });
};

// 使用
const baseURL = "https://www.ninjee.co/test";
const params = { name: "ninjee", age: 18 };
//声明一个全局函数，用于接收服务器的响应数据。
window.uniqueCallbackFunc = (res) => {
  console.log(res);
};

const result = jsonp(baseURL, params, uniqueCallbackFunc);
result
  .then((res) => {
  if (res.code === 0) console.log("响应成功：", res.value);
	})
  .catch((err) => {
  console.log("发送失败：", err);
	});

```

### ES6

- https://juejin.cn/post/7033275515880341512#heading-55
- 实现 ES6：Set
- 实现 ES6：Map
- 实现 ES6：Class



### 实现千分位分隔符

```js
//方法一
function func(number) {
	return String(number).replace(/\B(?=(\d{3})+$)/g, ",");
}
func(10000000);
func('10000000');  // '10,000,000'


// ❗️方法二：可以解决小数点问题
const number = 123456.789;
number.toLocaleString(); 	// '123,456.789'


// 方法三
const number = 1000000;
new Intl.NumberFormat().format(number);	// '1,000,000'


// ❗️方法四：小数点
function format(number) {
  const num = String(number);
  let [num1, num2] = num.split(".");   // 小数点右侧不切分

  const len = num1.length;
  if (len <= 3) return num;  // 正数部分小于3，直接返回

  const remainder = len % 3;   
  if (remainder === 0) {
    // 正好整除，第一个位置不需要添加逗号：100,000
    num1 = num1.match(/\d{3}/g).join(",");
  } else {
    // 8 % 3 = 2: 从下标2开始每隔3个数字加逗号: 12,345,678
    num1 = num1.slice(0, remainder) + "," + num1.slice(remainder).match(/\d{3}/g).join(",");
  }
  return num2 ? num1 + "." + num2 : num1; 
}
format(10000000.234);		// '10,000,000.234'
format(100000); 			// '100,000'
```

另：

- 保留两位小数：`num.toFixed(2)`

- ES20221 新特性：`_` 数字分隔符，用下划线符号分隔数字，会被 js 引擎正常读取，并转化为普通数字。

  ```js
  Number('123_456'); // NaN
  parseInt('123_456'); // 123
  ```

方法一：正则解释

| 含义                     | 规则    |
| ------------------------ | ------- |
| 匹配：单个数字, [0-9]    | \d      |
| 匹配左侧规则  1或 0 次   | ?       |
| 匹配左侧规则 1次或无数次 | +       |
| 匹配左侧规则 3 次        | {3}     |
| 字符串结尾               | $       |
| 匹配：非单词的边界       | \B      |
| 先行断言                 | (?=xxx) |
| 后行断言                 | (?!xxx) |

先行断言：`x(?=y)`：如果 x 后面跟的是 y，则匹配 x。

后行断言：`(?!y)`

什么是单词的边界：

- 单词的边界 / 非单词的边界，匹配的不是一个具体的字符，而是一个 **位置**。
- `word wrod2 word3` 这三个单词，通过 `\b` `word` `\b` 就能匹配到第一个 word 单词，而第二个 word2 不会匹配到。
- `123456` 在这个例子中，每个字母的间隙，就是非单词的边界。因为这个边界的左右两侧，都无法构成一个单词。
  - 这里利用 `\B` 匹配每个数字之间的缝隙。



- `\B(?=xx)`：如果 [非单词的边界] 后面是 xx，则匹配到 \B
- `\B(?=\d{3})`：如果 [非单词的边界] 后面出现连续 3 个数字，则匹配到 \B。
- `\B(?=\d{3})+`：添加了 + 号，则这个规则执行无数次。

方法三：**`Intl`** 对象

- 是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。[Collator](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FIntl%2FCollator)，[NumberFormat](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FIntl%2FNumberFormat) 和 [DateTimeFormat](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FIntl%2FDateTimeFormat) 对象的构造函数是 `Intl` 对象的属性。
- [🔗](https://juejin.cn/post/7124989393156177928)



### 属性名样式转化

##### Pascal to Camel

把一个 JSON 对象中，全部的 key 从下划线形式（Pascal）转换到小驼峰形式（Camel）

```js
// 方法一：正则表达式
function getCamelCase(str) {
    return str.replace(/_([a-z])/g, function(all, i) {
      // _ninjee: all为_a，i为a。这里只要把 a 替换掉即可
        return i.toLowerCase();
    })
}

// 方法二：数组切割
function getCamelCase(str) {
	const arr = str.split('_');  // 把JSON通过_切分开，数组中第一个成员不需要替换字母
  return arr.map((item, index) => {
    if (index === 0) return item;
    return item.charAt(0).toUpperCase() + item.slice(1); // 把第一个字母修改为小写，然后拼接剩余字母
  }).join('');
}
```

- **charAt()** ：字符串的下标访问
  - `str.charAt(index)` ，这相当于对数组进行 `arr[0]` 操作。

```js
// test
const signInfo = [
  {
    field_id: 539,
    value: undefined
  },
  {
    field_id: 540,
    value: undefined
  },
  {
    field_id: 546,
    value: undefined
  },
]
const str = JSON.stringify(signInfo);
// '[{"field_id":539},{"field_id":540},{"field_id":546}]'

getCamelCase(s)  // '[{"fieldId":539},{"fieldId":540},{"fieldId":546}]'

// 执行时，str.split('_') 把字符串切割为：
// 0: "[{\"field"      // 第一个成员不需要替换首字母，其余成员需要全部替换
// 1: "id\":539},{\"field"
// 2: "id\":540},{\"field"
// 3: "id\":546}]"
```

##### Camel to Pascal

把一个 JSON 对象中，全部的 key 从小驼峰形式（Camel）转换到下划线形式（Pascal）

```js
// 方法一：正则
function getKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function(i) {
    return '_' + i.toLowerCase();
  })
  if (temp.slice(0,1) === '_') {
    temp = temp.slice(1);   //如果首字母是大写，执行replace时会多一个_，需要去掉
  }
  return temp;
}

// 方法二：数组
function getKebabCase(str) {
  let arr = str.split('');
  let result = arr.map((item) => {
    if (item.toUpperCase() === item) {
      return '_' + item.toLowerCase();
    } else {
      return item;
    }
  }).join('');
  return result;
}
```



### 数组转树

流程：

- 判断入参必须为数组
- 遍历：所有节点都登记到Map中
- 遍历：根据pid，在Map中查找父节点
  - 找到父节点，则把当前节点加入 parent.children 中。三元运算判断，如果 children 不存在则创建；
  - 找不到父节点，证明为顶级节点，res 赋值为该节点。

```js
function jsonToTree(data) {
  // 判断数组
  if (!Array.isArray(data)) {
    throw new Error("data must be an array");
  }
  // 1. 登记Map
  const map = new Map();
  data.forEach(item => map.set(item.id, item))
  // 2. 根据pid查找父节点，并添加
  let res = {};
  data.forEach(item => {
    const parent = map.get(item.pid, item);   // 找到父节点
    // 如果父节点不存在，则为顶级节点，用 res 指向
    if (!parent) res = item;
    else parent.children ? parent.children.push(item) : parent.children = [item];
  })
  return res;
}

const source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
  {
    id: 4,
    pid: 2,
    name: "html",
  },
];
jsonToTree(source);
//   {
//       "id": 1,
//       "pid": 0,
//       "name": "body",
//       "children": [
//           {
//               "id": 2,
//               "pid": 1,
//               "name": "title",
//               "children": [
//                   {
//                       "id": 3,
//                       "pid": 2,
//                       "name": "div"
//                   },
//                   {
//                       "id": 4,
//                       "pid": 2,
//                       "name": "html"
//                   }
//               ]
//           }
//       ]
//   }
```



### 解析 URL Params

解析 URL 参数

方法一：

```js
const url = "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 组装成数组
  city: '北京', // 中文需解码
  enabled: undefined, // 未指定值得 key 约定为 true
}
*/

function parseParam(url) {
  // 没有参数，直接返回
  if (!url.includes("?")) return {};
  const paramStr = url.match(/\?(.*)/)[1];  // user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled
  const paramArr = paramStr.split("&");			// ['user=anonymous', 'id=123', 'id=456', 'city=%E5%8C%97%E4%BA%AC', 'enabled']
  const paramObj = {};
  paramArr.forEach(item => {
    // 判断是否有 value
    if (item.includes("=")) {
      let [key, value] = item.split("=");		// 切割
      value = decodeURIComponent(value);	// 解析转译符
      // 如果 key 重复出现
      if (key in paramObj) {
        paramObj[key] = [].concat(paramObj[key], value);  // 创建数组，合并新旧value
      } else {
        paramObj[key] = value;
      }
    } else {
      paramObj[item] = true;
    }
  });
  return paramObj;
}

parseParam(url);
```

方法二：使用 API

- [【API】](https://juejin.cn/post/6999077663587434533)

```js
// const search = document.location.search;   // 获取 ？后的参数
// 这里为了测试，直接赋值
const url = "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
const search = url.match(/\?(.*)/)[1];  // user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled

const params = new URLSearchParams(search);  // 获取可遍历迭代器
const res = {}
for(const [key ,value] of params.entries()) {
	res[key] = decodeURIComponent(value);
}
console.log(res);
// {user: 'anonymous', id: '456', city: '北京', enabled: ''}
```



### sleep函数

```js
// promise
const sleep = (time) => 
  return new Promise(resolve => setTimeout(resolve, time));
}
sleep(1000).then(()=>{
  console.log('time out');
  // 之后的代码
})

// ES5
function sleep(callback, time) {
  if(typeof callback === 'function')
    setTimeout(callback, time);
}

function output(){
  console.log('time out');
  // 之后的代码
}
sleep(output,1000);
 

// 使用：async/await
async function func(){
  console.log('start');
  await sleep(1000);
  console.log('script 2');
  await sleep(1000);
  console.log('script 3')
}
```



### 工厂、观察者、发布订阅的区别

**工厂模式**：见下文。

- 观察者：**1 个发布者 + n 个观察者**
- 发布订阅：**n 个发布者 +  1 个调度中心 + n 个订阅者**
  - 双方通过中介完成。发布者无需维护订阅者信息，只专注于发布事件。订阅者无需关注发布者信息，只需专注订阅事件。


| 设计模式 | 观察者模式                                    | 发布订阅模式                                            |
| -------- | --------------------------------------------- | ------------------------------------------------------- |
| 主体     | Object观察者、Subject目标对象                 | Publisher发布者、Event Channel事件中心、Subscribe订阅者 |
| 主体关系 | Subject中通过observerList记录ObServer         | Publisher和Subscribe 不想知道对方，通过中介联系         |
| 优点     | 角色明确，Subject和Object要遵循约定的成员方法 | 松散耦合，灵活度高，通常应用在异步编程中                |
| 缺点     | 紧耦合                                        | 当事件类型变多时，会增加维护成本                        |
| 使用案例 | 双向数据绑定                                  | 事件总线 EventBus                                       |

观察者的应用：单发布者

- 页面 DOM 的事件绑定，`addEventlistener`，同一个 DOM 上，可以绑定多个事件回调。
- Promise，同一个结果返回，可以触发多个 `then` 处理结果。
- React 生命周期触发。

发布订阅的应用：多发布者

- 中台开发：一个表上有 修改、添加、删除、刷新等等按钮，在点击按钮后，有各自的逻辑，在完成功能逻辑后，都需要调用刷新功能。多个发布者，通过发布-订阅，通知刷新。
- React 的组件间通信 context。父组件 provider 发布数据，React 作为事件中心处理，子组件 consumer 订阅数据。



### 工厂模式

一种创建对象的方式。

输入不同的参数如：dog、cat、monkey 等，可以对应生成不同的实例。但其都是遵循 animal 接口。

- 遵循 animal 接口：必须实现：name、age 属性、call 方法。
- 不同的动物类：不同动物，name、age、call 实现方式不同。

应用：有构造函数的地方，就应该想到简单工厂；在写了大量构造函数、调用了大量的 new 代码非常重复，每次创建相同的实例。

- 创建对象过程可能很复杂，但我们只需要关心创建结果。
- 构造函数和创建者分离，符合 “开闭原则”。
- 一个调用者想创建一个对象，只要知道其名称就可以。
- 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。

简单抽象模式：

```js
class Woman {
  call() {
    console.log('a woman...');
  }
}
class Man {
  call() {
    console.log('a man...');
  }
}
class Factory {
  getWoman() {
    return new Woman();
  }
  getMan() {
    return new Man();
  }
}

// 通过工厂，创建Man、Woman两种实例，创建出来的实例完全相同
const f1 = new Factory();
f1.getWoman().drive();
f1.getMan().drive(); 
```

工厂方法模式：

```js
class FactoryInterface {
  constructor() {
    if (Object.getPrototypeOf(this) === FactoryInterface.prototype) {
      throw new Error('该类是抽象类，无法实例化')
    }
  }
  getCar() {
    throw new Error('派生类必须实现该方法，抽象函数无法直接调用！');
  }
}   
class BMWFactory extends FactoryInterface {
  getCar() {
    return new BMW();
  }
}
class BenzFactory extends FactoryInterface {
  getCar() {
    return new Benz();
  }
}
var bmwF = new BMWFactory();
var benzF = new BenzFactory();
bmwF.getCar().drive();
benzF.getCar().drive();
```



### 观察者模式

当对象之间存在一对多的依赖关系时，其中一个对象的状态发生改变，所有依赖它的对象都会收到通知，这就是观察者模式。

- **1 个目标对象，n 个观察者。**

在观察者模式中，有两种主体：目标对象 (`Object`) 和 观察者 (`Observer`)。

- 目标对象 Subject：
  - 属性： `observerList` 观察者列表，数组中保存着已订阅的观察者；
  - 方法：`addObserver` 添加观察者，将观察者登记到列表中；
  - 方法：`deleteObserver` 删除观察者，将观察者从列表中删除；
  - 方法：`notify` ，当自身发生变化后，通过调用自己的 `notify` 方法依次通知每个观察者执行 `update` 方法。
- 观察者 Observer：
  - 方法： `update` ，供目标对象调用。`update`方法中可以执行自定义的业务逻辑。

```js
class Subject {
  constructor() {
    this.observerList = [];
  }
  
  addObserver(...name){
    this.observerList.push(...name);
  }
  deleteObserver(name){
    const index = this.observerList.indexOf(name);
    if (index === -1) console.log("不存在该成员");
		else this.observerList.splice(index, 1);
  }
  notify(event){
    console.log("发布事件");
    this.observerList.forEach((item) => item.update(event));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update({eventType, eventInfo}) {
    // 自己的逻辑
    if (eventType === 'normal') console.log(this.name, "日常事件,信息:", eventInfo);
    else if (eventType === 'error') console.log(this.name, "错误事件,信息:", eventInfo);
  }
}

const subject = new Subject();
const ob1 = new Observer('ninjee');
const ob2 = new Observer('moxy');

// test
subject.addObserver(ob1, ob2);
subject.notify({eventType: 'normal', eventInfo: '没什么大事'});
// 发布事件
// ninjee 日常事件,信息: 没什么大事
// moxy 日常事件,信息: 没什么大事
subject.deleteObserver(ob1);
subject.notify({eventType: 'error', eventInfo: '大事
// moxy 错误事件,信息: 大事!
```

### 发布订阅模式

基于一个事件（主题）通道，希望接收通知的对象 `Subscriber` 通过自定义事件订阅主题，被激活事件的对象 `Publisher` 通过发布主题事件的方式通知各个订阅该主题的 `Subscriber` 对象。

- **n 个发布者 + n 个订阅者 + 1 个调度中心**

因此发布订阅模式与观察者模式相比，发布订阅模式中有三个角色，发布者 `Publisher` ，事件调度中心 `Event Channel` ，订阅者 `Subscriber` 。

- 任务发布者 `Publisher`
  - 方法：根据事件类型，触发事件发布，传递事件信息
- 任务接受者 `Subscriber`
  - 方法：订阅指定事件后，事件发生时触发的回调函数
- 事件调度中心 `Pubsub` (Event Channel)
  - 属性：`events` 对象，维护全部事件类型（数组），成员是每种事件下的回调函数。
  - 方法：`subscribe` 订阅，将回调函数放入对应的事件类型数组中。
  - 方法： `publish` 发布，根据类型发布事件，依次调用回调函数 + 传递参数
  - 方法：`unsubscribe` 取消订阅，根据事件类型，取消该回调函数的订阅
  - 方法：`unsubscribeAll` 全部取消，根据事件类型，取消该类型的全部回调。

```js
class PubSub {
  constructor() {
    // 事件中心
    // 每种事件下存放其订阅者的 [回调函数]
    this.events = {
      // errorEvent: [],
      // routeEvent: []
    };
  }
  // 订阅方法
  subscribe(type, cb) {
    // 如果该列表尚不存在，则创建
    if (!this.events[type]) this.events[type] = [];
    this.events[type].push(cb);
  }
  // 发布方法
  publish(type, ...args) {
    // 列表存在：遍历回调函数 + 传递参数
    if (this.events[type]) {
      this.events[type].forEach((cb) => cb(...args));
    }
  }
  // 取消订阅方法
  unsubscribe(type, cb) {
    if (this.events[type]) {
      const index = this.events[type].indexOf(cb);
      if (index != -1) this.events[type].splice(index, 1);
      else console.log("找不到该订阅者");
    }
    // 即使删除空列表
    if (this.events[type].length === 0) {
      delete this.events[type];
    }
  }
  // 取消订阅 全部删除
  unsubscribeAll(type) {
    if (this.events[type]) {
      delete this.events[type];
    }
  }
}

// 调度中心
let pubsub = new PubSub();

// 订阅者 和 回调：
const ob1 = {
    route:  (eventInfo)  => console.log(`ob1，订阅日常事件：${eventInfo.type}，${eventInfo.data}`),
    error:  (eventInfo)  => console.log(`ob1，订阅错误事件：${eventInfo.type}，${eventInfo.data}`)
}
const ob2 = {
    route:  (eventInfo)  => console.log(`ob2，订阅日常事件：${eventInfo.type}，${eventInfo.data}`),
    error:  (eventInfo)  => console.log(`ob2，订阅错误事件：${eventInfo.type}，${eventInfo.data}`)
}

// 订阅任务
pubsub.subscribe("routeEvent", ob1.route);
pubsub.subscribe("routeEvent", ob2.route);

pubsub.subscribe("errorEvent", ob1.error);
pubsub.subscribe("errorEvent", ob2.error);

// 发布任务
pubsub.publish("errorEvent", {type: 'errorEvent', data: '错误事件'});
// ob1，订阅错误事件：errorEvent，错误事件
// ob2，订阅错误事件：errorEvent，错误事件
pubsub.publish("routeEvent", {type: 'routeEvent', data: '日常事件'});
// ob1，订阅日常事件：routeEvent，日常事件
// ob2，订阅日常事件：routeEvent，日常事件

// 取消订阅
pubsub.unsubscribe("errorEvent", ob1.error);
pubsub.publish("errorEvent", {type: 'errorEvent', data: '错误事件2'});
// ob2，订阅错误事件：errorEvent，错误事件2

// 全部取消
pubsub.unsubscribeAll('routeEvent');
pubsub.publish("routeEvent", {type: 'routeEvent', data: '日常事件2'});
// 没有人的回调被触发
```

### 字符串首尾空格

使用正则表达式去除字符串中首尾两端的空格

```js
const str = '  #id div.class  ';
str.replace(/^\s+|\s+$/g, ''); // "#id div.class"

// 相当于
str.trim();
str.trimStart().trimEnd();  // ES2021?
```

- `\s` 匹配空格（包括换行符、制表符、空格符等），相等于 `[ \t\r\n\v\f]`。



### 循环打印红黄绿

红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？

##### 方法1：回调

```javascript
function task(time, light, callback) {
  setTimeout(() => {
    // 1. 根据 light 确定灯亮
    if (light === "red") red();
    else if (light === "yellow") yellow();
    else green();
    // 2. 执行回调（下一个灯）
    callback();
  }, time);
}

function step() {
  task(3000, "red", () => {
    task(2000, "yellow", () => {
      task(1000, "green", step);   // 最后传入step，形成循环
    });
  });
}

step();
```

##### 方法2：promise

```javascript
function task(time, light) {
  return new Promise( resolve => {
    setTimeout(() => {
      // 1. 根据 light 确定灯亮
      if (light === "red")  red();
      else if (light === "yellow") yellow();
      else green();
      // 2. 决议
      resolve();
    }, time);
  });
}

function step() {
  task(3000, "red")
    .then(() => task(2000, "yellow"))
    .then(() => task(1000, "green"))
    .then(step);	// 最后调用step，形成循环
}

step();
```

##### 方法3：async/await

```javascript
function task(time, light) {
  return new Promise( resolve => {
    setTimeout(() => {
      // 1. 根据 light 确定灯亮
      if (light === "red")  red();
      else if (light === "yellow") yellow();
      else green();
      // 2. 决议
      resolve();
    }, time);
  });
}

async function step() {
  await task(3000, "red");
  await task(2000, "yellow");
  await task(1000, "green");
  step();	// 最后调用step，形成循环
}

step();
```



### 判断一个变量是否为数组

这道题实际上是在考两个方向的知识点：原型链和类型转换。

以下是 ES5 常用的判断方式。基于原型链，会导致如果绑定原型链后，会判断错误：

```js
var a = []; 
var b = {};
b.__proto__ = Array.prototype;

// 方式一
a.constructor === Array; 			// true，通过原型链访问构造函数来判断


// 方式二
a instanceof Array; 				// true, instanceof 基于原型链判断，可判断引用类型，
Array.prototype.isPrototypeOf(a); 	// true，isPrototypeOf 基于原型链判断，a 的原型链上是否有 Array.prototype

// 方式三
Object.getPrototypeOf(a) === Array.prototype;  	// true，获取原型链，判断是否是 Array.prototype
a.__proto__ === Array.prototype 				// true，获取原型链，判断是否是 Array.prototype
```

以下是可以准确判断的方式：

```js
Object.prototype.toString.call(a) === '[object Array]';   // true，通过 toString 方式判断类型，是最常用的方法。

Array.isArray(a) 					// true，直接判断出

// polyfill
if (!Array.isArray){ 
    Array.isArray = function(arg){ 
        return Object.prototype.toString.call(arg) === '[object Array]'; 
    }; 
}
```



### 遍历 JSON 中查找 value

```js
// 查找 200
function findItems(list, targetValue){
    let res = [];
    traversal(res, list, targetValue);
    return res

    function traversal(res, list, targetValue) {
        for (let item of list) {
            const { value, children, label } = item;

            if (value && value === targetValue)
                res.push({ label, value });

            if (Array.isArray(children) && children.length)
                traversal(res, children, targetValue);
        }
    }
}
	
const res = findItems(list, 200)
console.log(res) 	// [{label: '财务部', value: 200}]
```

数据：

```js
  const list = [{
      "value": 192,
      "label": "技术部",
      "children": [{
          "value": 193,
          "label": "软件组",
          "children": [{
              "value": 195,
              "label": "软件一组"
            },
            {
              "value": 196,
              "label": "软件二组"
            }
          ]
        },
        {
          "value": 198,
          "label": "运维组"
        }
      ]
    },
    {
      "value": 200,
      "label": "财务部",
      "children": [{
          "value": 201,
          "label": "会计"
        },
        {
          "value": 203,
          "label": "出纳"
        }
      ]
    },
    {
      "value": 300,
      "label": "人资部",
      "children": [{
          "value": 301,
          "label": "行政"
        },
        {
          "value": 302,
          "label": "人资"
        }
      ]
    }
  ]
```



### 问题：实现 setInterval

实现定时器，使用 setTimeout 来实现 setInterval。

基础实现：

```js
function mySetInterval(fn, time) {
  interval();
  
	function interval() {
    setTimeout(() => {
      fn();
      interval();
    }, time);
  };
}

// 使用
mySetInterval(() => console.log('执行一次'), 1000);
```

可以让定时器暂停：

```js
function mySetInterval(callback, time) {
  let timer = null;

  return {
    stop: function(){
      clearTimeout(timer);
    },
    interval: function(){
      timer = setTimeout(() => {
        callback();
        this.interval();  // 注意这里调用对象方法，使用this
      }, time); 
    }
  }
}

//创建
const go = mySetInterval(() => console.log('执行一次'), 1000);
// 启动
go.interval();
// 清除
go.stop();
```

可以每次间隔 `[a, a+b, a+2b, ..., a+nb]` 的时间执行 fn：

```js
function mySetInterval(fn, a, b) {
  let count = 0;
  interval();
	function interval() {
    setTimeout(() => {
      fn()
      count++
      interval()
    }, a + count * b)
  }
}

// 执行
mySetInterval(() => {
  console.log('执行');
}, 1000, 1000);
```



### 问题：实现字符串模版解析

```js
let template2 = "我是{{name}}，职业是{{job}}，工资有{{salary}}";
let person = { name: "ninjee", job: "前端", salary: 30000 };

function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 匹配：{{变量}}，w: 字符 [A-Za-z0-9_]，+: (1, Infinity)
  if (reg.test(template)) {
    // @ts-ignore
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    // 递归，匹配下一个
    return render(template, data);
  }
  return template;
}

render(template2, person); // 我是阿巴，职业前端，工资30000
```

如果输入的是对象：

```js
let template = '你好，我们公司是{{company}}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。';

let obj = {
  group: {
    name: "天猫",
    jobs: ["前端", "后端", "产品"],
  },
  company: "阿里巴巴",
};

function render(template, data) {
  const origins = [];		// 字符串中的文字
  const words = [];			// 字符串中的变量名	
  let origin = "";
  let word = "";
  let flag = 0;	  // 0：没变量，1 已有一个左括号，2 已有两个左括号，3 第一个右括号
  // 重制 flag 状态和 word 的存储
  const defalutState = () => {
    word = "";
    flag = 0;
  };
	// 遍历
  for (let i = 0; i < template.length; i++) {
    if (template[i] === "{") {
      if (flag == 0) {
        flag = 1;
      } else if (flag == 1) {
        flag = 2;
        origins.push(origin);
        origin = "";
      } else throw new Error("错误");
    }
    else if (template[i] === "}") {
      if (flag == 2) flag = 3;
      else if (flag == 3) {
        words.push(word);
        defalutState();
      } else {
        defalutState();
      }
    }
    // 读取变量
    else if (flag === 2) word += template[i];
    else {
      origin += template[i];
      flag = 0;
    }
  }
  if (origin) origins.push(origin);
  // words: ['company', 'group.name', 'group.jobs[0]', 'group["jobs"][1]']
  // origin ['你好，我们公司是', '，我们属于', '业务线，我们在招聘各种方向的人才，包括', '、', '等。']
  let res = "";
  for (let i = 0; i < Math.max(words.length, origins.length); i++) {
    if (i < origins.length) res += origins[i];
    if (i < words.length) res += eval("data." + words[i]);
  }
  return res;
}

const res = render(template, obj);
// '你好，我们公司是阿里巴巴，我们属于天猫业务线，我们在招聘各种方向的人才，包括前端、后端等。'
```


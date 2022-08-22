---
title: JavaScript相关
sidebar_position: 0.8
date: 2022-08-08
keywords:
  - 面试题
  - 面经
---

### 问题：isNaN, Number.isNaN

**isNaN() 是es5中的语法，而 Number.isNaN() 是es6的新语法**

- `isNaN` 用来判断一个值是否为NaN。但是，**只对数值有效**，如果传入其他值，会被先转成数值。
  - 比如，传入字符串的时候，字符串会被先转成 NaN，所以最后返回 true。也就是说，isNaN 为 true 的值，有可能不是 NaN，而是一个字符串。

- `Number.isNaN()` 不存在转换的过程，只有对于 NaN 才返回 true，非 NaN 一律返回 false。

```js
isNaN('abc')  // true
Number.isNaN('abc')  // false
```



### 问题：常见的登录方式/前端鉴权

- [前端登录](https://juejin.cn/post/6845166891393089544)
- [前端鉴权：cookie、session、token、jwt、单点登录](https://juejin.cn/post/6898630134530752520)



### 问题：防抖 / 节流的应用场景

![image-20220817170155198](images/JavaScript.assets/image-20220817170155198.png)

**防抖 debounce**

只有等待了一段时间没有事件触发，才会真正的执行响应函数。

- 当事件触发时，相应的函数并不会立即触发，会等待一定的时间，**延迟执行**。
- 当事件密集触发时，函数的触发会被 **频繁的推迟**；

**应用场景**

- 监听浏览器滚动事件，完成某些特定操作； 
- 用户缩放浏览器的 resize 事件。
  - 只在缩放结束，才触发事件，减少页面的频繁渲染，造成卡顿。和 Windows 页面的缩放 / 拖动优化相同
- 输入框中频繁的输入内容，搜索或者提交信息；
  - 比如，在淘宝中搜索：MacBook。当用户按下 M，会进行一次联想内容搜索，将 M 开头的内容呈现出来。但用户可能对 M 开头的内容联想并不关心。依次输入剩余的字母。如果没有防抖，会进行 7 次网络请求，消耗系统性能。
    - 引入防抖：设置 1s 的防抖，用户如果快速输入 "Mac"，在期间时不会进行网络请求的联想搜索的。只在 'Mac' 输入结束时，进行一次网络请求。
      - 从用户角度：用户可能会对 Mac 的相关产品感兴趣，有可能忘记 MacBook 的全称怎么拼。
      - 从性能角度：节约了多次网络请求。



**节流 throttle**

立即执行。事件触发时，就会立即执行。

- 如果事件被频繁触发，节流函数会按照 **一定频率** 来执行函数； 
- 不论有多少次触发这个事件，**执行频繁总是固定的**；

**应用场景**

- 监听页面的滚动事件； 
- 监听鼠标移动事件； 
- 用户频繁点击按钮操作； 
- 游戏中的一些设计：经典飞机大战，用户会持续按下 / 频繁发射按钮，但子弹的射速需要保持一定。



### 问题：Number.MAX_SAFE_INTEGER 怎么来的

Js 用双精度 64 位浮点格式 Double-precision floating-point format，表示数字。

JS 中的`Number`类型只能安全地表示`-9007199254740991 (-(2^53-1))` 和`9007199254740991(2^53-1)`之间的整数，任何超出此范围的整数值都可能失去精度。

- `Number.MAX_SAFE_INTEGER` 常量，表示最大安全 **整数**
  `Number.MIN_SAFE_INTEGER` 常量，表示最小安全整数
- `Number.MAX_VALUE` 常量，表示最大数，属性值接近于 `1.79E+308`。大于 `MAX_VALUE` 的值代表 "`Infinity`"。

javascript 中的数都是用 IEEE754 标准的双精度浮点数来表示的：

![img](images/JavaScript.assets/17263be557add8c8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

sign 为 0 表示正数，为 1 表示负数；exponent 表示科学计数法中的指数部分，实际存储的时候必须加上一个偏移值 1023；fraction 表示小数点后的部分，整数部分永远为 1，计算机不存储，但是运算的时候会加上。

```js
// 最大数：
(Math.pow(2, 53) - 1) * Math.pow(2, 971) // 1.7976931348623157e+308
(Math.pow(2, 53) - 1) * Math.pow(2, 971) === Number.MAX_VALUE // true

// 最大安全整数：
Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER // true
2 ** 53 - 1 === Number.MAX_SAFE_INTEGER					// true
```

`0.1 + 0.2 == 0.3` 的判断，使用最小精度值：

```js
Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON;
```



### 问题：js 中怎么表示浮点数？

- `parseFloat(number/string)`：解析一个参数（必要时先转换为字符串）并返回一个浮点数。

- `parseInt(string, radix)` ：解析一个字符串并返回指定基数的十进制整数。

  - `radix` 是 2-36 之间的整数，表示被解析字符串的基数。

  - 默认为 10， 例如 `16` 是十六进制数，尽量指定。

```js
parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });
// 均为 3.14
```

### 问题：0.1+0.2=？0.6-0.4=？

![img](images/JavaScript%E7%9B%B8%E5%85%B3.assets/1630157012636-bb9e556a-a082-4130-8d0b-7a85406efedc.png)

解决 0.1 + 0.2 的问题，用 `toFixed(num)`

-  `num.toFixed(num)`：**截断。**保留 num 位小数，格式化一个数值。
  - 入参：默认为 0；出参：string 返回字符串。

```js
// 解决
(0.1 + 0.2).toFixed(2).;  // '0.30' string
parseFloat((0.1 + 0.2).toFixed(2)) // 0.3


// 常用
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
```



### 问题：闭包的使用场景

几乎所有开发都离不开闭包。只要对逻辑进行封装和模块化，就会有闭包的产生。

注意目的是：

- 将变量私有。
- 持有一个在当前作用域之上的公共变量。

防抖、节流、柯里化、包括组件内也大量使用。

- 回调函数中，大概率会产生闭包。

附：

- 柯里化的意义：单一职责（让每个函数处理逻辑单一）、复用参数逻辑（处理好的逻辑可以复用）
- 柯里化的使用场景：log 日志打印、`connect(state, dispath)(Component)`



### 问题：WeakSet/Map 使用场景 / 注意事项

weak 特点：对象约束（成员只能是对象）、垃圾回收（弱引用）、无法遍历、无法清空。

- WeakMap 只支持 object 作为成员的 key。

使用场景：通常和 Reflex 相关。



### 问题：什么是栈空间、堆空间

在 JavaScript 的运行时， 主要有三种类型内存空间：代码空间、栈空间、堆空间。

栈内存：存放基本类型的变量，对象的引用和方法调用，遵循先入后出的原则。

- 体积小，速度快。

堆内存：存放所有引用类型、闭包 (是一个集合) 变量。

- 在运行时，Js 会在堆中 **动态地** 申请某个大小的内存空间。堆内存实际上指的就是（满足堆内存性质的）优先队列的一种数据结构，即更靠前的元素有更高的优先权。
- 操作系统中：空闲内存通过链表登记保存。当系统收到程序的申请时，会遍历该链表，寻找第一个空间大于所申请空间的分区，切分申请的大小，将剩余的分区再链接到链表上。
  - 根据链表的形式，有：
    - **（使用）首次适应算法：链表按地址递增串联。 查表顺序从 0 开始；**
    - 临近适应算法：链表首位相连，查表则从上一次查找位置开始；
    - 最佳适应算法：链表按空间递增串联。查表也从小到大开始；
    - 最差适应算法：链表按空间递减串联。查表也从大到小开始，先用大的。
- 有闭包的存在，容易有内存泄露产生。



### 问题：Symbol 的作用

在 ES6 前，对象的属性名都是字符串形式，那么很容易造成属性名的冲突：

- 如，在某个外来对象中添加一个新属性，但是我们在不确定它原来内部有什么内容的情况下，很容易造成命名冲突，从而覆盖掉它内部的某个属性； 
- 如，手写 js 中的 apply、call、bind 实现时，要添加一个 fn 属性，如果它内部原来已经有了 fn 属性就会发生覆盖；
- 如，开发中使用混入，如果混入的多个对象间出现了同名属性，必然有一个会被覆盖掉；

Symbol 用来生成一个 **独一无二的值**。 



### 问题：为什么 Symbol/BigInt 不能 new

在引用类型中，有三种原始值包装类型：String、Number、Boolean。

- 原始值："abc"、123 等不是对象，**原始值包装类型**  是用来把原始值包装成包装类型的对象。
- 使用 new 创建 string、number、boolean 会创建一个对象，而不再是基本数据类型。

```js
const num = new Number(123);
typeof num; // "object"
Object.prototype.toString.call(num); // '[object Number]'
num == 123;  // true
num === 123; // false
```

- 不使用 new 创建，则会发生自动类型转化，将入参转化为基本数据类型。

```js
Number('123');	 // 123
```

包装类型的主要目的，是可以让基本数据类型调用包装方法，**自动装箱/拆箱**

```js
// 自动装箱/拆箱
'abc'.length // 3 让不能具有方法的 string，可以使用 length 属性
(123).toString // '123'
```

**而 Symbol、BigInt 没有原始值的包装类型，自然也能不存在 new 创建。**



更进一步，如何鉴定是否用 new 调用？ `this instaneof xxx`

- new 调用的过程：创建空对象、绑定原型链，所以用 instanceof 可以检测出。

```js
function mySymbol() {
  console.log(this);
  if (this instanceof mySymbol) {
    throw new Error('Uncaught TypeError: mySymbol is not a constructor')
  }
}
// 测试
mySymbol() // window
new mySymbol() // mySymbol {}
// Uncaught TypeError: A is not a constructor
```



## 事件循环的题：

```js
 const async1 = async () => {
  console.log('async1');
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise(resolve => {   // promise没有resolve后续不会执行
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
} 
console.log('script start');
async1().then(res => console.log(res));
console.log('script end');
Promise.resolve(1)						// 	这里把 1 顺次传递，因为下面的 then 方法没有接收 res。
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)

// script start
// async1
// promise1
// script end
// 1
// timer2
// timer1
```





====== 坑 =============================

**常用 API：**

- 包装对象：string / number 常用 api：[🔗](https://juejin.cn/post/6985349103681011725#heading-12)
- 引用类型：array 常用 api：笔记
- object 常用 api：笔记



WeakMap、WeakSet、Reflect

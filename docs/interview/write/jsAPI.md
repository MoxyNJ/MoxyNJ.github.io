## 1. 实现 call / apply / bind

```js
// mycall
Function.prototype.mycall = function (thisArg, ...args){
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	thisArg._fn = this;
  // func调用
  var result = thisArg._fn(...args);
  delete thisArg._fn;
	// return
  return result;
}

// myapply
Function.prototype.myapply = function (thisArg, args){
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	thisArg._fn = this;
  // func调用
  var result = args
  	? thisArg._fn(...args) 
  	: thisArg._fn();
  delete thisArg._fn;
	// return
  return result;
}

// mybind
Function.prototype.mybind = function (thisArg, ...args) {
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	var fn = this;
  // 返回绑定函数
  return function (...newargs) {  
    fn._fn = thisArg._fn // 动态绑定
    var result = thisArg._fn(...args, ...newargs); 
    delete thisArg._fn; 
    return result;
  };
};
```

优化：

- `thisArg` 中绑定 `_fn` 有可能会覆盖原有同名函数的定义。这里可以的思路有：
  - 使用 uuid 命名 `_fn`；
  - 使用 Symbol 命名 `_fn`；



### 1.1 call

Js 中，call 是用 C++ 实现的，这里只考虑基本实现，不考虑边界问题：

`func.call(thisArg, ...args)` 第一个参数传递一个用于绑定 this 的对象，具有以下特性：

- 如果传递一个对象，需要把 func 的 this 指向这个对象 thisArg。这里 mycall 无法实现无副作用的指向对象，只能先在对象上添加一个 func 函数，然后用隐式调用  `thisArg.func` 来确定关系，最后用 delete 删除 thisArg 上添加的 func 函数。
- 如果传递的是非对象，如：number、string、boolean 等基本数据类型，call 会进行包装，形成一个包装对象。mycall 通过 `object(thisArg)` 来把传递的非对象包装为一个对象。
- 如果传递的是非对象，且为 `null / undefined`，ca ll 会默认指向 window（node环境是undefined）。这里 mycall 通过 `object(thisArg)` 会把  `null / undefined` 包装为空对象 `{}`。那么在执行包装前，要判断一下 thisArg 是否存在，如果不存在则绑定为 window。

`func.call(thisArg, ...args)` 第二个以后的参数，是 func 的入参。mycall 直接用剩余运算符全部收集，然后在调用时全部展开即可 `...args`。

代码如下

```js
// test
func.mycall(obj, 10, 20);
func.mycall();
func.mycall(undefined, 10, 20);


// 绑定在函数类原型上
Function.prototype.mycall = function (thisArg, ...args){
  // 1.获取需要执行的函数
 	var fn = this;   // function内的this，由于是隐式调用(func.mycall())，所以指向待执行函数func
  var result = undefined;
  
  // 2.包装thisArg，如果为空则绑定window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  
  // 3.调用待执行函数：添加属性、隐式调用、删除属性
  thisArg._fn = fn;
	result = thisArg._fn(...args);
  delete thisArg._fn;
  
  // 4.返回函数执行结果
  return result;
}
```

### 1.2 apply

apply 和 call 大体一样，不同的是对 func 的入参格式处理，apply 第二个参数要传递一个数组，成员是所有的入参。所以，在 myapply 内执行 `thisArg._fn` 时，要判断数组是否存在，不存在则不传参数：

```js
// func调用，判断数组是否存在
var result = args
  ? thisArg._fn(...args) 
  : thisArg._fn();
```

### 1.3 bind

`var bar = func,bind()`

- 对 `thisArg._fn = fn` 要动态绑定，即只有在调用 bar 时，才进行绑定，对 thisArg 对象的影响降低到最小化。
- bind 有两种用法，mybind 这两种用法都要考虑到（下面代码）；

```js
// bind时，传入参
var bar = func.bind(obj, arg1, arg2)；
bar(arg3, ...);

// bind时，不传入参
var bar = func.bind(obj)；
bar(arg1, arg2 ,arg3 ...);
```

最后代码如下：

```js
Function.prototype.mybind = function (thisArg, ...args) {
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	var fn = this;
  // 返回绑定函数
  return function (...newargs) {  // 调用bar时传递的参数
    fn._fn = thisArg._fn // 动态绑定，只有在调用时才进行绑定，
    var result = thisArg._fn(...args, ...newargs); // 先保存执行result
    delete thisArg._fn; // 解除绑定关系
    return result; // 返回结果
  };
};

// test
function sum(num1, num2, num3) {
  console.log(this, num1, num2, num3);
  return num1 + num2 + num3;
}

var obj = { call: "moxy" };

// 用法一
var bar = sum.mybind(obj, 10, 20);
bar(30);
// 用法二
var baz = sum.mybind(obj);
baz(20, 10, 5);
```


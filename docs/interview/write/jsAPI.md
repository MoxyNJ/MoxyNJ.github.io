## 1. 实现 call / apply / bind

```js
// mycall
Function.prototype.mycall = function (thisArg, ...args){
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	const fn = Symbol();
  thisArg[fn] = this;
  // func调用
  const result = thisArg[fn](...args);
  delete thisArg[fn];
	// return
  return result;
}

// myapply，入参附默认值
Function.prototype.myapply = function (thisArg, args = []){
  // this绑定
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	const fn = Symbol();
  thisArg[fn] = this;
  // func调用
  const result = thisArg[fn](...args) 
  delete thisArg[fn];
	// return
  return result;
}

// mybind
Function.prototype.mybind = function (thisArg, ...args) {
  // 保留this引用
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	const thisfn = this;
  // 返回绑定函数
  return function (...newargs) { 
    const fn = Symbol();  // 动态绑定
    thisArg[fn] = thisfn;
    const result = thisArg[fn](...args, ...newargs); 
    delete thisArg[fn]; 
    return result;
  };
};
```



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

```js
// bar 作为返回参数，下次调用其内部 this 指向 obj
const bar = func.bind(obj, arg1, arg2, ..)
```

1. 第一个参数作为 this 值；
   - 若是基础类型，则要包装为包装对象，使用 `Object()` 可以根据不同基础类型进行包装。
   - 若是 `null` 和 `undefined`，则 this 指向全局 `window`，node 环境下指向 undefined。	
2. 剩余的参数作为返回函数 bar 的入参，待调用返回函数是自动传入。
3. 如果 bar 在调用时用 `new bar()` 调用，那么有两个变化：
   1. bind 绑定 this 失效，this 按照 `new` 关键字的设定，绑定实例化对象；
   2. 实例化对象的原型指向原方法 `func` 的原型链上。

bind方法返回的新方法，如果使用new实例化，那么原本通过bind绑定的this指向的对象会失效，this将指向到新实例化的对象上，且可以使用原方法原型链上的属性或方法。

换句话说：一个 绑定函数 也能使用 new 操作符创建对象,这种行为就像把原函数当成构造器，thisArg 参数无效。也就是 new 操作符修改 this 指向的优先级更高。



动态绑定技巧：

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
// ❗️考虑 new 的样式
Function.prototype.mybind = function (thisArg, ...args) {
  // 保留this引用（缓存this）
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  const thisfn = this;
  
  // 定义绑定函数，不直接返回是因为需要函数名foo
  const foo = function (...innerArgs) {
    // new foo，不修改this指向，此时this为foo的实例化对象
    if (this instanceof foo) {
      return new thisfn(...args, ...innerArgs);
    } 
    // 普通函数调用，this指向thisArg对象
    const fn = Symbol();
    thisArg[fn] = thisfn;   // 动态绑定
    const result = thisArg[fn](...args, ...innerArgs);
    delete thisArg[fn];
    return result;
  };
  return foo;  //返回函数
};



// ❗️不考虑 new 的样式：
Function.prototype.mybind = function (thisArg, ...args) {
  // 保留this引用
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
	const thisfn = this;
  // 返回绑定函数
  return function (...newargs) {  // 调用bar时传递的参数
    const fn = Symbol(); 
    thisArg[fn] = thisfn; // 动态绑定，只有在调用时才进行绑定
    const result = thisArg[fn](...args, ...newargs); // 先保存执行result
    delete thisArg[fn]; // 解除绑定关系
    return result; // 返回结果
  };
};

// test
function sum(num1, num2, num3) {
  console.log(this, num1, num2, num3);
  this.name = num1;
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



## 2. 实现 currying

实现函数的柯里化：详细讲解在 **JavaScript笔记—06-函数与函数式编程.md**。

```js
function currying(fn) {
  // 递归 curried，接受所有参数
  function curried(...args) {
    // base case
    if (fn.length <= args.length) return fn.call(this, ...args);
    // 递归
    return function(...args2) {
      return curried.call(this, ...args, ...args2);
    }
  }
  return curried;
}
```


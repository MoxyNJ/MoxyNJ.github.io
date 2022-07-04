---
title: 4. this与箭头函数
sidebar_position: 4
date: 2022-07-01
tags: [JavaScript]
---

## 0 this

每一个函数（全局）作用域中，都会有一个 `this` 关键字。`this` 的值保存在执行上下文中。在全局上下文被创建时，也就是 JS 引擎的编译时，会让 `this` 值根据特定规则去 **指向一个对象**。

- this 是在运行时动态绑定的（箭头函数）除外；
- this 和定义位置（代码位置）没有关系，只和调用方式（调用位置）有关。

![imgx](images/04-this%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.assets/image-20210905222654919.png)

全局执行上下文中的 `this`，默认指向 window 对象。而函数执行上下文中的 `this` 则根据函数调用的实际情况而发生改变。

`this` 和声明位置没有关系，和作用域链没有关系，和词法作用域也没有关系；`this` 和调用位置，和调用栈也没有关系。 `this` 是由调用者决定的，确切的说。`this` 是由一套自有的规则决定的，只有按照它自有的规则，才能确定 `this` 的指向。

**所以，作用域链、调用栈、`this` 是三套不同的规则体系。**



## 1 this 的规则

`this` 有四种绑定方式，按照优先级从高到低，依次是：

1. `new` 绑定：通过 `new` 关键字调用函数。`new person()`
2. 显式绑定：通过 `call`，`apply` 和 `bind` 硬绑定三种方法。`func.call(obj)`
3. 隐式绑定：通过 `对象.` 的方式调用函数。`obj.func()`
4. 默认绑定：直接调用函数。`func()`
   - 实际上是：`func.call()`



下面分别细说这四种绑定方式

### 1.1 new 绑定

回顾：new 一个新对象的过程，发生了什么？

```js
let person1 = new Person("Moxy", 15);
```

要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 5 个步骤：

1. 创建一个 **新对象** `{}`；
2. 为新对象绑定 **原型链**：`{}.__proto__ = Person.prototype`；
3. 将构造函数的作用域 **`this`** 赋给新对象 `{}`；
4. 执行构造函数中的代码，为 `{}` 添加属性：`Person.call(this)`；
5. 如果构造函数最终会返回一个对象，就返回 **构造函数中的对象**。
6. 如果构造函数没有返回其他对象，就会返回 **新对象  `{}`** 。

最终，代码中左侧的 `person1` 变量接收到了新创建的那个对象。



使用 `new` 绑定，`this` 的优先级是最高的，此时 `this` 指向 `new` 时创建的那个新对象。



### 1.2 显示绑定

我们可以通过 `call`，`apply` 和 `bind` 硬绑定三种方法来设置函数执行上下文中的 `this` 指向，比如：

```js
let person = {
    name : "Moxy"
}

function callName(age){
	console.log(this.name, age)
}

let name = "Ninjee"
callName.call(person, 18)	// Moxy 18
```

这里，我们没有直接调用 `callName` 函数，而是采用了 `call` 方法，把 `person` 对象作为第一个参数传递给了 `callName()`。`call` 方法会自动的把 `callName`  执行上下文中的 `this` 指向 `person`。



`call` 函数调用的完整形式是：

```js
func.call(context, p1, p2)
```

`func` 执行上下文的 `this`  会指向 `context`，而其余参数则被当成实参处理。



与之对应的，`apply` 函数调用的形式是：

```js
func.apply(context, [p1, p2])
```

可以看到，`apply` 与 `call` 唯一的不同在于传递给 `func` 函数的实参是通过一个数组的形式。



硬绑定 `bind`，是一种强制的显示绑定，看如下代码：

```js
function bind(func, obj) {
    return function() {
        return func.apply(obj, arguments)
    }
}

function callName(age){
    console.log(this.name, age)
}

var person = {
    name : "Moxy"
}

var animal = {
    name : "Monkey"
}

var name = "Ninjee"
var newCall = bind(callName, person)
newCall(18)				// Moxy 18
newCall.call(animal,2)	// Moxy 2
```

可以看到，通过 `bind` 方法，把`callName` 的执行上下文中 `this` 固定指向了 `person` 对象。这种方法称为硬绑定。

每次调用 `newCall` 时，都会重新绑定一次它执行上下文中的 `this` ，让他永远指向 `person` 对象。即使我们通过 `call` 去调用，也会在真正执行 `callName` 方法之前改变 `this` 的指向。

而这种方法，就是 `bind`，在 JS 种早已形成 API，正确的形式如下：

```js
ler newFunc = func.bind(obj)
```

使用 `bind` 方法给被调用函数 `func` 传递一个对象。该方法不会 “污染” 原有的被调用函数 `func`，而是会返回一个全新的函数。这个全新的函数的执行上下文中， `this` 会一直指向 `obj` 对象。



### 1.3 隐式绑定

```js
function callName() {
    console.log(this.name)
}

let person = {
    name: "Moxy",
    callName: callName
}

let name = "Ninjee"
person.callName()	// Moxy
```

当出现 `obj.func()`形式时，会触发隐式绑定。此时函数执行上下文的 `this` 会指向 `obj` 对象。

如果有多级的调用位置， `this` 会指向最后一级标识符：

```js
function func() {
    console.log(this.name)
}

let child2 = { name: "child2", func: func}
let child1 = { name: "child1", child2: child2, func: func}
let obj = { name: "obj", child1: child1, func: func}

obj.child1.child2.func()	// child2
```

事实上，隐式绑定利用了函数调用的规则（见2.）：`func.call(obj, p1, p2, ..)`



### 1.4 默认绑定

```js
function foo(){
    debugger
}
foo()
```

这种调用形式可能是我们最常见的了。这种独立函数调用，会把该函数执行上下文的 `this` 指向全局对象 Window。

![imgx](images/04-this%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.assets/image-20210907123120888.png)

在严格模式下，会指向 `undefined`。

![imgx](images/04-this%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0.assets/image-20210907123202590.png)





## 2 函数调用

函数调用的完整形式，实际上是通过 `call` 调用：

```js
foo.call(context, p1, p2, ..)
```

第一个参数 `context` 是调用函数时给 `foo`传递的 `this` 指向；后面的参数则是传递给 `foo` 的参数。

比如以下几组函数声明：

```js
callName("Moxy", 18)  // 与下面等价
callName.call(undefined, "Moxy", 18)

person.method.callName("Moxy", 18)	// 与下面等价
person.method.callName.call(person.method, "Moxy", 18)
```



所以，当我们去判断一个函数调用的 `this` 指向时，不妨用 `foo.call()` 转换一下，就很快得到了答案。



隐式调用 `obj.foo(p1)`，转换后为：

```js
obj.foo(obj, p1)
```

显然 `foo` 的执行上下文中 `this` 指向 `obj`。



默认调用 `foo(p1)`，转换后为：

```js
foo.call(undefined, p1)
```

如果 `context` 传递的是 `null` 或 `undefined`，则浏览器让 `this` 默认指向 `window` 对象；如果在严格模式下，会指向 `undefined`。



## 3 箭头函数

箭头函数与作用域链是一套规则。

箭头函数并不会创建其自身的执行上下文，没有 `this`，`arguments`，`super` 或 `new.target` 等等这些函数属性。如果要使用 `this` ，引擎会沿着作用域链 `outer`，去查找外部作用域的 `this` 的值。

所以，箭头函数与外部作用域的 this 保持一致。

- 箭头函数无法与构造函数一起使用，即箭头函数无法用 new 调用，会报错。
- 作用域关系在代码的编译阶段已经确定，也就是说，作用域关系是静态绑定的，直接看代码分析的，而不考虑代码的执行。**（见问题4的双红色叹号）**

```js
function foo() {
	return(a) => {
		console.log( this.a )
    }
}
var obj1 = { a: 1 }
var obj2 = { a: 2 }

var bar = foo.call(obj1)
bar.call(obj2)  	// 1
```

在 `foo()` 内部创建的箭头函数，会通过 `outer` 查询到 `foo` 的 `this`。由于 `foo` 的 `this` 绑定到 `obj1`，`bar` 引用的 this 也会绑定到 `obj1`，箭头函数的绑定无法被修改。



## 4 思考

### 问题1

```js
function foo() {
    console.log(this);
}
debugger;
var a = "global"; 		// var 声明，绑定到 window
let obj = { a:"obj", foo:foo};
let bar = obj.foo;
bar();    // global
```

`let bar = obj.foo` 代码，右侧表达式的含义是通过 RHS 获取了 `obj.foo`的值，也就是函数的地址。然后赋值给 `bar` 变量。此时 `bar` 变量得到了 `obj.foo` 的地址值。

调用 `bar()` 实际上是 `bar.call(undefined)`，也就是默认绑定。最终 `this` 绑定到全局对象 `window`。

而下面的例子，最终输出 `undefined`。

```js
function foo() {
    console.log( this )
}
debugger
let a = "global"		// let 声明，不在window绑定
let obj = { a:"obj", foo:foo}
let bar = obj.foo
bar()    // undefined
```

因为用 `let` 声明的变量不会在 window 对象中绑定。即使 `bar()` 调用会把 `this`指向 Window 也无法访问到 `a`，所以进行 RHS 的结果是 `undefined`。

### 问题2

```js
var name = "window";

var person = {
  name: "person";
  sayName: function() {
    console.log(this.name);
  }
}

function sayName(){
  var sss = person.sayName;
  sss(); 								// window,默认绑定
  person.sayName();			// person,隐式调用
  (person.sayName)();		// person,隐式调用。有没有括号无所谓
  (b = person.sayName)(); // window,默认绑定。
  												// 赋值产生了RHS右查询，返回了函数本身，接着小括号调用函数本身。
}
sayName();
```

### 问题3

```js
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1(); // person1，隐式
person1.foo1.call(person2);  // person2，显式

person1.foo2();  // window，箭头函数的父作用域（全局）。person1是对象，不是一个作用域
person1.foo2.call(person2);  // window，同上

person1.foo3()(); // window，默认，括号1返回了一个函数，括号2直接调用
person1.foo3.call(person2)(); // window，默认，同上
person1.foo3().call(person2); // person2，显式，括号2调用时绑定了this

// ‼️foo4内的箭头函数没有this，内部的this永远等于它的父作用域：foo4
person1.foo4()();  // person1，隐式+箭头
person1.foo4.call(person2)(); // person2，显式+箭头，foo4显式绑定了this = person2
person1.foo4().call(person2); // person1，隐式+箭头，显示绑定对箭头函数无效
```

### 问题4

❗️❗️即使下面的 Person 是通过 new 调用的。但 foo2 箭头函数的上级作用域依然是 Person 函数作用域。

- `person1.foo2()` 调用，会输出 `person1`。此时 Person 函数作用域中的 this 指向了 person1 对象。

```js
var name = 'window'

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

// new 创建 person1/2 对象
var person1 = new Person('person1');
var person2 = new Person('person2');

person1.foo1()  								// person1
person1.foo1.call(person2) 			// person2

//‼️ 箭头函数的上层作用域：函数作用域 Person
person1.foo2() 									// person1，‼️函数作用域Person此时的this指向person1
person1.foo2.call(person2)      // person1，‼️显式绑定对箭头无效

person1.foo3()()								// window
person1.foo3.call(person2)()    // window
person1.foo3().call(person2)    // person2

person1.foo4()()								// person1，箭头函数父作用域foo4
person1.foo4.call(person2)()    // person2，同上
person1.foo4().call(person2)    // person1，显式绑定对箭头无效
```

### 问题5

```js
var name = 'window'

function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()  // window
person1.obj.foo1.call(person2)() // window
person1.obj.foo1().call(person2) // person2

// ‼️箭头函数的上层作用域:foo2
// 多级隐式调用，this最终绑定最后一级标识符:foo2的this绑定obj
person1.obj.foo2()()   // ‼️obj
person1.obj.foo2.call(person2)() // ‼️person2
person1.obj.foo2().call(person2)  // ‼️obj
```





# 引用：

> 《你不知道的JavaScript》
>
> 《重学前端》- winter
>
> 《浏览器工作原理与实》- 李兵
>
> [this 的值到底是什么？一次说清楚 - 知乎 (zhihu.com)]
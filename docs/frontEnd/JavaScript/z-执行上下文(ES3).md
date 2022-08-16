---
title: 执行上下文(ES3)
sidebar_position: 99
date: 2022-07-01
tags: [JavaScript]
---

这里介绍的执行上下文，是 ES3 概念。

## 1 Js 的执行过程：

提到的知识点：

编译时：词法作用域、函数作用域、提升、作用域链、变量对象 VO；

运行时：执行上下文、活跃的变量对象 AO、this。



在进一步阅读本文之前，可以先回顾一下相关篇章：“Js 的执行过程”。



在 JavaScript 引擎内部，每次调用执行上下文，会分为两个阶段：

1. 编译阶段，有人称创建执行上下文阶段，此时函数被调用，但未执行任何其内部代码：

   1. 创建 scopeChain 作用域链，保存该函数可访问的 AO 变量对象（包括自身）。

   2. 创建 activation object（AO） 变量对象，保存内部的变量、函数声明、函数参数 arguments。
   3. 确定 this 的指向。

2. 运行阶段：

   1. 指派变量的值和函数的引用，解释/执行代码。



在编译时，会创建执行上下文，主要是做了下面三件事：

1. 创建作用域链（scope chain）；
2. 创建变量对象（variable object）；
3. 确定 this 的指向。

每个执行上下文会形成如下的结构：

```js
executionContextObj = {
    scopeChain: [ /* AO + 所有父执行上下文的变量对象*/ ],
    variable object: { /* arguments、变量、函数声明 */ }, 
    this: xxx
}
```



## 2 变量对象 variable object

在确定作用域时，会涉及到一个数据结构，即 VO 变量对象。每个作用域内，都会有一个变量对象，这里面保存了该作用域中所有的变量和函数声明。

也就是说，变量对象其实是一个可以查询的表，登记了作用域范围内所有的变量和函数。让程序可以快速的了解当前作用域内部，有哪些变量和函数可以访问。

- 变量对象 VO，只保存了自身作用于范围内部的可访问变量和函数。它不保存外部的父作用域，自身的子作用域内部的数据。
- VO 同该函数一齐保存在堆内存中。



创建变量对象主要是经过以下过程：

1. 创建 arguments 对象。以 K/V 的形式存储。key 为从0开始的数字，value 为 `undefined`（变量），地址值（函数）；
2. 检查当前上下文的**函数声明**。以 K/V 的形式存储。key 为函数名称，value 为函数的地址值，指向堆内存中的那个函数。
   - 如果存在同名函数声明，则后出现的函数声明会覆盖先出现的。

3. 检查当前上下文的**变量声明**。以 K/V 的形式存储。key 为变量名称，value 为 `undefined`。
   - 如果存在同名的变量声明，不会出现覆盖问题（因为变量声明的值都是 `undefined`。
   - 如果存在同名的函数声明，则忽略变量声明。

注意优先级：函数声明 > 函数的参数 > 变量声明



其基本结构的伪代码如下：

```js
VO:{
    arguments 函数的参数,
    函数（FunctionDeclaration, 缩写为FD),
    变量（var 声明的变量）
}
```

举例：

```js
var a = 10;
function test(x) {
  var b = 20;
};
foo(30);
```

其在编译阶段，解析的变量对象有两个，分别是：

```js
// 全局作用域的变量对象
globalVO = {
  foo: pinter to foo function,
  a: undefined
};
 
// foo函数作用域的变量对象
fooVO = {
  arguments: {
      0: undefined,
      length: 1
  },
  x: undefined,
  b: undefined
};
```



## 3 活动对象 activation object

activation object 活动对象，是相对 变量对象 VO 来描述的。

创建变量对象（VO）发生在编译时，还没有进入到运行时，此时的变量对象中的变量属性尚未赋值，值仍为undefined。只有运行时，变量中的变量属性才进行赋值后，变量对象（Variable Object）转为活动对象（Active Object）后，才能进行访问，这个过程就是VO -> AO过程。

- VO 是在编译时，收集当前作用域内可访问的所有变量和函数信息。
- AO 是在运行时，基于 VO 转变而来的。

AO 的作用 和 VO 大致相同，保存了该作用域中所有的变量和函数声明。

也就是说，活动对象也是一个可以查询的表，登记了作用域范围内所有的变量和函数。让程序可以快速的了解当前作用域内部，有哪些变量和函数可以访问。



其基本结构的伪代码如下：

```js
AO:{
    函数的参数,
    函数（FunctionDeclaration, 缩写为FD),
    变量（var 声明的变量）
}
```

举例：

```js
var a = 10;
function test(x) {
  var b = 20;
};
foo(30);
```

在运行时，当运行到 `foo(30)` ，

在编译阶段，是变量对象 variable object

```js
// foo函数作用域的变量对象
fooVO = {
  arguments: {
      0: undefined,    // 注意，这里和 AO 不同
      length: 1
  },
  x: undefined, 
  b: undefined
};
```

进入运行阶段时，是活动对象 scope object

```js
// foo函数作用域的活动对象
fooAO = {
  arguments: {
      0: 30     // 注意，这里和VO不同，VO是undefined。
      length: 1
  },
  x: 30
  b: undefined  // 如果代码执行到相关赋值语句，这里的值也会发生变化。
};
```

可以看到，和编译时的 VO 的不同，就是函数的参数 arguments 的变量，在运行时刚刚开始的时候就已经赋值了。因为运行时传递了函数参数的缘故，AO 是有具体变量值，而 VO 是 `undefined`。然后，随着代码的一步步执行，AO 内变量和函数的具体值还会更新。



## 4 作用域 scope

在编译阶段，会对所有的变量和函数进行提升，也就是变量和函数声明的提前编译。提前编译的核心目的，就是为了确定各自的作用域，形成作用域链。

```js
function foo() {
    function bar() {
        ...
    }
}
```

在编译时，会对这些函数声明进行解析，解析后形成 `[[scope]]` 保存了函数自身可访问到的所有 **父作用域**，形成了一个 “作用域链”。

- 此时并不是一个完整的作用域链，因为该作用域链只保存了父作用域的 VO，未保存把自身的 VO 也加入进来。
- 作用域链（scope chain）当于 `VO + [[scope]]`。

```js
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
    fooContext.VO,
    globalContext.VO
];
```

可以看到，  `[[scope]]` 就是把所有可访问的父作用域 VO 全部按顺序保存进来。



## 5 作用域链 scope chain

作用域链由当前执行环境的变量对象 VO（未进入到运行时）与上层环境的一系列活动对象 AO （运行时）组成。

```js
var num = 30;

function foo() {
    var a = 10;

    function innerFoo() {
        var b = 20;

        return a + b
    }

    innerTest()
}

test()
```

innerFoo 的执行上下文，其中包含了它的作用域链：

```js
innerFooExecutiveContext = {
    //变量对象
    VO: {b: undefined}, 

    //作用域链
    scopeChain: [innerFooContext.VO, fooContext.AO, globalContext.AO],  
    //相当于：
    scopeChain: [VO, ...[[scope]]],  
    
    //this指向
    this: window
}
```

使用数组表示作用域链，其内容的活动对象、变量对象就是一个个作用域。

- 作用域链中最后一个成员，是当前作用域（当前上下文的变量对象（编译时）、活动对象（运行时）；
- 作用域链中的第一个成员，是全局作用域（全局上下文的活动对象）；



作用域链保证了变量和函数的 **有序访问**，查找方式是沿着作用域链，从尾至头查找变量或函数。

- 如果找到了索要寻找的变量或函数，便停止查找，返回找到的key/value（变量或函数名称 / 值）
  - 如果是 LHS 左查找，则返回变量或函数的 key；
  - 如果是 RHS 右查找，则返回变量或函数的 value。
- 一直向上查找至全局作用域，如果在全局作用域中也无法找到，则停止查找，抛出错误。



## 6 执行上下文栈 ECStack

执行上下文栈也成为调用栈。

调用栈是一个机制，用来让 JavaScript 引擎方便地去追踪函数执行。当一次有多个函数被调用时，通过调用栈就能够追踪到哪个函数正在被执行，以及查看各函数之间的调用关系。



JS 的 **运行环境** 主要有 3 种：

1. 全局环境（在开始执行代码时，最先进入的就是全局环境）；
2. 函数环境（函数调用的时候，进入到该函数环境）；
3. eval环境（存在安全和性能问题）。



由于浏览器里的 JavaScript 解释器是单线程的。和 Java 一样，Javascript 在执行时也是一个栈的结构：

每进入到一个不同的运行环境，都会创建一个相应的 **执行上下文（execution context）**。

JS 引擎会以栈的数据结构对这些执行上下文进行处理，形成**执行上下文栈（ECStack）**。

栈底永远是 **全局执行上下文（global execution context）**，栈顶则永远时当前的执行上下文。

- 全局执行上下文，在运行时会最先被放入栈底，且一直存在，直到代码全部执行完毕才会出栈。
- 活跃指针：指针会一直指向栈的最顶端，也是此时正活跃的执行上下文。“活跃” 指的是，当前正在执行的代码，其所处的执行上下文。
- 入栈：当正在执行的代码中，出现函数调用，即会对应的创建一个新的执行上下文，把该执行上下文压入栈中。活跃指针指向了这个新建的执行上下文。开始执行新执行上下文中的代码。
- 出栈：当执行上下文中的代码全部执行完毕，执行上下文会从栈中弹出。活跃指针指向上一个执行上下文。



另外：JavaScript 的引用数据存储，是在一个堆结构中。包括 function、 array 等各种对象，都保存在堆内存中。栈中的变量中，保存的是这些数据在堆内存的地址。所以才会把引用数据类型的值，称之为”地址值“。相反，基本数据类型的值，就是具体的值。因为 string、number 等数据，都是直接保存在栈中的（具体来讲，是栈中，每一个执行上下文中的 VO / AO）。



举个例子：

```js
    function foo1() {
        console.log("foo1")
        foo2()
    }

    function foo2() {
        console.log("foo2")
        foo3()
    }

    function foo3() {
        console.log("foo3")
    }
    foo1()
```

先判断一下这里在编译时的词法作用域：

1. 全局作用域中：保存了 2 个函数声明，foo1，foo2；
2. foo1 的函数作用域：保存了 1 个函数声明，foo2；
3. foo2 的函数作用域：内部没有变量和函数声明。

然后，在运行时，会创建执行上下文堆栈：

1. 默认压入全局执行上下文 `global execution context`；
2. 当执行到 `foo1()` 时，出现函数调用，此时创建并压入 `foo1 execution context ` 。活跃指针指向这个新创建的执行上下文，开始执行里面的代码。
3. 当执行到 `foo2()` 时，出现函数调用，此时创建并压入 `foo2 execution context` 。活跃指针指向这个新创建的执行上下文，开始执行里面的代码。

此时执行上下文堆栈，从下至上依次是：`global execution context` --> `foo1 execution context` --> `foo2 execution context ` 。

4. 当 `foo2()` 执行完毕时，其对应的执行上下文会弹出栈。此时活跃指针指向了 `foo1 execution context ` ，继续执行 `foo1 execution context ` 中的代码；
5. 当 `foo1()` 执行完毕时，其对应的执行上下文会弹出栈。此时活跃指针指向了 `global execution context`，继续执行 `global execution context` 中的代码；
6. 全部代码执行完毕。

![img](images/z-%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87(ES3).assets/137.jpg)

注：

1. 全局上下文在运行时首先被压入栈中，且一直存在，直到全部代码执行完毕。
2. 每次函数被调用创建新的执行上下文，包括调用自身。



### 6.1 如何查看上下文栈

1. 设置 `debugger`，然后利用浏览器开发者工具 - call stack。
2. 设置 `console.trrace()`，输出当前函数调用关系。



## 7 执行上下文的步骤（ES3）

下面进一步说明每一个小阶段所要做的事情：

当代码执行到某一个函数调用，如 `foo(name, 1); ` 会创建一个新的执行作用域，并压入栈中，此时：

**进入编译阶段**，创建一个 **foo 执行上下文对象** `fooExecutionContextObj` ，并其内容：

1. **初始化作用域链**。通过向父作用域访问，获取到当前 foo 函数可访问到的所有变量对象 AO。可以用一个数组结构理解，先写入当前作用域中的所有变量对象 VO，最后形成：`[VO, ...[[scope]]]`。
2. **创建变量对象 VO**，并扫描当前执行上下文中的：
   1. 扫描 **函数参数 arguments**，写入  VO 中；
      - 以 K/V 的形式存储，Key 为变量名称，Value 为 `undefined`。
   2. 扫描当前执行上下文中的 **函数声明**，并写入  VO 中。
      - 以 K/V 的形式存储，Key 为函数名称，Value 为函数地址值。
      - 若出现同名函数，则后出现的会覆盖前面的。
   3. 扫描当前执行上下文中的 **变量声明**，并写入  VO 中。
      - 以 K/V 的形式存储，Key 为变量名称，Value 为 `undefined`。
      - 若已存在同名函数，则忽略变量声明。也就是说函数声明不会被覆盖。
3. 求出当前执行上下文中的 **this** 。

**在运行时**，当前执行上下文的变量对象 VO 转化为引擎可访问的 活动对象 AO。然后对代码进行一行行的执行，并会查询 / 更新 AO 的内容。

- **注意：函数声明优先级 > 函数的参数 > 变量声明**



举例：

```js
var name = "Moxy";
function foo(name, number) {
    var age = 18;
    var sex = "male";
    function callName() {
    // ...
    }
};
foo(name, 1); 
```

当调用  `foo(name, 1); `  时，执行上下文对象在创捷阶段完成后如下：

```js
fooExecutionContext = {
    scopeChian: [variableObject, {...}],  // 作用域链的内容，见“作用域链”章节
    variableObject: {
        arguments: {
            0: undefined,
            1: undefined,
            length: 2
        },
        callName: <pointer to function callName()>,
        name: undefined,
        number: undefined,
    	age: undefined,
        sex: undefined,
	},
	this: window;
}
```

该行代码在执行完函数后，被销毁前， foo 的执行上下文对象是这个样子的：

```js
fooExecutionContext = {
    scopeChian: [variableObject, {...}],  // 作用域链的内容，见“作用域链”章节
    variableObject: {
        arguments: {
            0: "Moxy",
            1: 1,
            length: 2
        },
        name: "Moxy",
        number: 1,
        callName: <pointer to function callName()>,
    
        age: 18,
        sex: "male",
   	},
	this: window;
}
```


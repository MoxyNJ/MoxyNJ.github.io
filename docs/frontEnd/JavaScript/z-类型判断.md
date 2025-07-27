---
title: 类型判断与类型转换
sidebar_position: 50
date: 2021-04-03
tags: [JavaScript]
draft: true
---

# 1 类型

## 1.1 类型

运行时类型：

-   运行时类型是代码实际执行过程中我们用到的类型。所有的类型数据都会属于 8 个类型之一。从变量、参数、返回值到表达式中间结果，任何 JavaScript 代码运行过程中产生的数据，都具有运行时类型。



类型是值的内部特征，它定义了值的行为，以使其区别与其他值。

JavaScript引擎通过区分不同值的类型，来进行不同的操作。比如遇到 "42"，则知道这是一个String类型，遇到 42，则知道这是一个 Number类型。



JavaScript 中，变量是没有类型的，只有值才有。变量可以随时持有任何类型的值。

-   JavaScript引擎不要求变量总是持有与其初始值同类型的值。一个变量可以现在被赋值为字符串类型值，随后又被赋值为数字类型值。



程序在需要把某个值保存下来以便将来使用时，会把这个值赋给（或存入）变量。变量有名字，程序可以通过变量的名字来引用值。



## 1.2 类型的划分：

-   基本数据类型（8）
    -   原始类型：Null，Undefined，Boolean，Number，BigInt，String，Symbol；
    -   对象类型：Object
-   引用类型
    -   包装类型：Boolean，Number，String；
    -   Array 
    -   Date 
    -   RegExp 
    -   Function 
    -   Error
    -   Map
    -   ... 

列举所有引用类型将会在其他章节讲到。



总结基本类型：

-   ES6以前。6种：Undefined、Null、Number、Boolean、String、Object；

-   ES6标准。7种：Undefined、Null、Number、Boolean、String、Symbol、Object；

-   ES2020标准。8种：Undefined、Null、Number、Boolean、String、Symbol、BigInt、Object；



### 1.2.1 引用类型

一个引用类型的值就是 Object 类型的一个实例。 通常情况下，引用类型的原型链最终都指向 `Object.prototype`。通常需要通过 new 来对某个引用类型创建实例对象。

所以，对象就是某个特定引用类型的实例。



### 1.2.3 内置类型

内置类型是由JavaScript引擎在运行开头，就通过 `object` 创建好的一系列类型。所以这些类型的原型链都指向 `object.prototype`。

内置类型有：Function、Array、Set、WeakSet、Error、RegExp等等。

其中，包装类型也属于内置类型，下面会介绍包装类型。关于内置类型、内置对象等等更多内容，参见“对象”专题。



### 1.2.3 包装类型

JavaScript 对每个原始数据类型，都对应的创建了一组内置类型。这些内置类型被称为包装类型。

包装类型的主要目的，是可以把对这些原始数据类型的操作方法，作为属性绑定在对应的包装类型中，方便调用。

-   Boolean、Number、String、Symbol、BigInt (ES2020)

>   引用类型和包装类型的主要区别就是对象的生存期，使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而自基本类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型添加属性和方法。



## 1.3 值与变量

类型是对值的抽象，把各式各样的值划分为不同的类型。

反过来说，值就是类型的具体化、实例化。



### 1.3.1 变量

值，根据不同类型，信息把各式各样的信息保存在其中。为了方便区分这些值、使用这些值，可以对每一个值绑定名字。将名字和值进行绑定，就是一种赋值操作，这个操作被称为“把值赋给变量”，而这个“变量”，就是“名字”。

所以，变量就是一个标识符 / 或称一个名字，也是一个容器。名字用来指代某个值。这个值可能是一个原始值，那么容器就保存这个值；这个值若是一个引用值，那么容器就保存这个对象值的地址。

-   `a = 123`：左边是变量，右边是值。



### 1.3.2 原始值

PrimitiveValue 原始值

原始值是 Javascript 中最基本的值。也就是所有的原始数据类型对应的值（6 种：Null、Undefined、Number、BigInt、Boolean、String、Symbol）。其在 Javascript 中大小固定，数据结构简单。所有原始类型的值是按值访问的。

同时，这些值都保存在栈内存中，提高访问速度。

>   栈内存：
>
>   -   存储的值大小固定
>   -   空间较小
>   -   可以直接操作其保存的变量，运行效率高
>   -   由系统自动分配存储空间



### 1.3.3 引用值

引用值、引用、对象值、复合值，他们都是同一个概念。

引用值时为了区别与 原始类型（7种）而定义的。所有基于 Object 类型的值，都是引用值。引用值是通过引用复制的方式来赋值 / 传递。也就是说，在发生值传递时，传递的不是具体的值，而是在传递地址。是指向这个值的地址。

同时，这些值都保存在堆内存中。

>   堆内存：
>
>   -   存储的值大小不定，可动态调整
>   -   空间较大，运行效率低
>   -   无法直接操作其内部存储，使用引用地址读取
>   -   通过代码进行分配空间



## 1.3 基本数据类型

下面分别简述 JavaScript 的 8 种基本数据类型：

-   Undefined、Null、String、Number、Boolean、Symbol、BigInt、Object

### 1.3.1 Undefined

整理 3 个特点，塑造 Undefined：

**1. 类型中的唯一值**

`undefined`是 Undefined类型中，唯一的值。



**2. `undefined` 变量**

根据 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)，`undefined` 是一个全局对象的属性。也就是说，在全局范围内，定义了一个变量，名字就是 `undefined`。这个`undefined`变量的初始值，就是 `undefined`。所以，要区分 `undefined` 变量，和  `undefined` 值。

`undefined`变量是一个不可配置、不可写的属性。如果有需要用到它的地方（比如变量尚未赋值、函数默认返回值），就会返回 `undefined`值。



**3. `undefined` 变量的可篡改**

因为设计失误，`undefined`变量不是一个关键字，而是一个普通的、不可配置、不可写的属性。但是这个属性依然可以被篡改。所以，尽量少的直接调用 `undefined`变量，来获取 `undefined`值。而是用 `void 0` 返回一个`undefined` 值。



### 1.3.2 Null

整理 2 个特点，塑造 Null：

**1. 类型中的唯一值**

`null` 是 Null 类型中，唯一的值，而且是一个关键字，这与`undefined`不同。关键字就避免了会被篡改的风险。



**2. typeof 为 object**

`null` 在最初的 JavaScript 并没有添加。所以，由于历史原因，通过运算符 `typeof` 检测 `null` 的数据类型，不是返回 `null`，而是返回 `object`。 	



### 1.3.2.1 区分：undeclared、`undefined` 和 `null`

**总体思想：**

根据《JavaScript 权威指南》来说，undefined 和 null 在使用差别不大，更多的是程序员自己定义的“语义”差别。也就是说不同的程序风格，会对这两个类型用不同倾向的语义理解。可能有的风格会不允许使用  null，可能有的风格这两个都不会使用。



为了方便区分，还是整理了其中一个解释：

-   undeclared 未声明：
    -   `ReferenceError: xxx is not defined`，引用错误：xxx 尚未声明。也就是说，xxx这个变量还没有被声明。既然变量还没有被生命，更不用提变量所持有的值是否存在了。

-   undefined 未定义：
    -   Undefined 类型表示为 “值的尚未定义”。任何变量在赋值前，它的值都是 Undefined 类型，值表现为 `undefined`。也就是说，这个变量已经被声明了，但还没有持有任何值。
-   null 空的：
    -   Null 类型表示为“值是空的”。对于变量来说，如果变量持有 `null`值。表示这个变量的值“已经有了定义，但是为空”。



我的个人理解：

-   如果声明了一个变量，那 JavaScript 会默认给这个变量持有 `undefined`。即暗示的含义是：程序员已经声明了这个变量，但是对这个变量除了声明以外，没有其他任何操作。
-   若之后我们手动给这变量赋值为 `null`，即表示：我对这个变量除了声明以外，还进行了额外的操作。
-   比如我之前给某个变量赋值了一些数字，然后使用完这些数字后，我想删除了这些数字。为了表示我使用过这个变量，区别于只声明未使用的状态，我把这个变量赋值为 `null`。即这个变量的值“已经被我定义了，但是目前为空”。



### 1.3.3 String

整理 3 个特点，塑造 String：

**1. 不可改变**

字符串值，是无法改变的，一旦被构造出来，就无法用任何方式改变其内容。



**2. 最大长度**

String的最大长度是 2^53 - 1bit。字符串是使用 UTF16编码的。这个数字的概念：大约9PB，中国自古以来所有出版物字数加起来约0.1PB。实际上，引擎不允许分配这么大的字符串长度。V8分配的单个字符串上限约 512MB。如果用UTF16编码换算，大约2.68亿个字符，足够使用。



**3. UTF16编码**

字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。

>   Note：现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。
>
>   JavaScript 字符串把每个 UTF16 单元当作一个字符来处理，所以处理非 BMP（超出 U+0000 - U+FFFF 范围）的字符时，你应该格外小心。

初始化：

```js
console.log(c)       // Uncaught ReferenceError: c is not defined
let a = undefined;   // 通过 undefined变量，获取undefine值
let b = void 0;      // 直接获取 undefined值
```



### 1.3.4 Number

整理 4 个特点，塑造 Number：

**1. 双精度**

JavaScript 中的 Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值。

JavaScript 中的 Number 类型是双精度浮点数。

根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。

根据浮点数的定义，非整数的 Number 类型无法用 ==（=== 也不行）来比较。浮点数运算的精度问题导致等式左右的结果并不是严格相等，而是相差了一个微小的值。

可以用系统提供的 EPSILON 最小精度值，解决这个问题。

```js
// 由于双精度问题，导致了微小差别。
console.log( 0.1 + 0.2 == 0.3);    // false

// 将结果与最小精度值 EPSILON 比较，得出正确结果。
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);    // true

```



**2. 无穷大**

JavaScript 中的 Number 类型基本符合 IEEE 754-2008 规定的双精度浮点数规则，但是 JavaScript 为了表达几个额外的语言场景（比如不让除以 0 出错，而引入了无穷大的概念），规定了几个例外情况：

-   `NaN`，占用了 9007199254740990。
-   `Infinity`，无穷大；
-   `-Infinity`，负无穷大。
-   `-0`，`+0`。区分正负0的主要方法，就是用 1/x ，是 Infinity（+0） 还是 -Infinity（-0）。
    -   为什么区分为两个零？下文，特点 3 有讲到。



**3. NaN**

-   NaN 是JavaScript中，唯一一个自身不相等的值。

判断`NaN`方式：

-   利用唯一非自等性：`a != a`

-   利用内置方法 (2 种)：

    ```js
    let a = 2 / "abc";
    let b = "abc"
    isNaN(a);    // true 利用 isNaN 可以分辨传入的数字是否为NaN，但无法分辨传入的是不是数字。
    isNaN(b);    // true 若传入非数字，出现判断错误。
    
    Number.isNaN(a)  // true
    Number.isNaN(b)  // false  用ES6新方法判断正确
    ```

    

**4. `-0`**

`-0` 存在的必要性：在应用程序中的数据需要保存正负符号（比如动画帧的移动），数字的符号位具有特殊信息（移动的方向）。如果一个值为 0 时，就失去了符号位。所以保留 0 的符号位可以防止这种情况发生。

在 `===`严格相等、`>`、`<`中，`-0`、 `+0`、 `0` 之间完全相等。若想真实的区分出来，用 `Object.is(+0, -0);  // false` 。



### 1.3.5 Boolean

Boolean 类型只有两个值：`true`和`false`。



### 1.3.6 Symbol

整理 5 个特点，塑造 Symbol：

**1. 重塑**

在 ES6 规范中，整个对象系统被用 Symbol 类型重塑。Symbol 是一切非字符串的对象的key的集合。反过来说，Symbol 类型是一个 key 集合，这些 key 是所有非字符串的对象名。

重塑的主要原因，就是可以规范化的将内置对象/属性/函数暴露出来，提供给程序员做更深层次的修改。定义Proxy与Reflect也是这个初衷。



**2. 唯一性**

每当一个 Symbol 被创建，都是独一无二的，具有唯一性。即使有两个 Symbol 的描述是相同的，但其值也不相等。

-   备注：获得一个相同的 Symbol 值，采用 `Symbol.for()`。具体会在 Symbol 章节中讲到。



**3. 创建**

使用 Symbol 函数创建。不需要调用 new 。

```js
let sym = Symbol("my new Symbol")
```



**4. 公开 Symbol**

Symbol 具有内置的全局表单，这是 JavaScript 预先定义的 Symbol，称为公开 Symbol（Well-Known Symbol, WKS），更贴切的理解可以称之为全局 Symbol。

定义这些 Symbol 主要是为了提供专门的元属性，以便把这些元属性暴露给 JavaScript 程序以获取对 JavaScript 行为更多的控制。

需要强调的是，这些预制的 Symbol 不是保存在全局作用域中，而是作为 Symbol 函数对象的属性中保存。所以这些 Symbol 的描述采用 `Symbol.` 开头：比如 `[Symbol.iterator]`保存了一个迭代器。`for...of` 等函数会自动调用这个迭代器。



**5. 作为接口**

Symbol 在对象系统中的广泛运用，构成了一类接口形式。利用 Symbol 可以访问、修改更多的API接口。这一点在特点 4 提到过。

-   Symbol、Proxy & Reflect、属性描述符 defineProperty 从不同的方式和角度参与了修改系统默认的行为。具体异同将会单独分析。



### 1.3.7 BigInt

BigInt 是 ES2020新增的基本数值类型。BigInt只能保存整数，增加这个类型的主要原因是兼容性。可以表示 64 位整数，兼容其他语言和通用API。同时，BigInt满足了对于大数的需求。

-   区别：与 Numbuer 的表现形式上，区别在于 BigInt 末尾多了一个 `n`：`123n`
-   进制：可以有 二进制(`0b11n`)、八进制(`0o77n`)、十进制（默认）、十六进制(`0xffn`)。
-   除法：除法运算会丢弃余数、向下取整（截断）。
-   精确：BigInt 表示的整数是完全精确的，没有 Number 的四舍五入，没有 `Inifinity`，没有指数计数法。



### 1.3.8 Object

对象是属性的集合，其中每个属性都有一个名字和一个值（原始值或其他对象）。

**1. 对象的结构**

-   属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。



**2. 全局对象**

JavaScript 会有一个全局对象，在 JavaScript 解释器启动后（或浏览器加载新页面时），都会创建一个新的全局对象并为其添加一组初始的属性，定义了：

-   全局变量：`undefined`、`Infinity`、`NaN`、...
-   全局函数：`isNaN()`、`parseInt()`、`eval()`、...
-   构造函数：`Date()`、`RegExp()`、`Object()`、`Array()`、...
-   全局对象：`Math`、`JSON`、...

在 node环境中，全局对象还有一个 `global` 属性，值为全局对象本身；在 浏览器中，全局对象有一个`window`属性，值为全局对象本身。ES2020 定义了 `globalThis` 不论在哪一个环境中，其值都指向全局对象本身。



**3. 引用类型**

所有引用类型，都是由 Object 类型创造而来的。包括 Array、Error、Function 等等，他们的原型链最终都指向了 `object`。更多内容将会在对象章节讲到。



# 2 类型判断

上文讲述了什么是类型，有哪些类型。类型、值和变量的关系是什么。那么，当我们在编写程序的时候遇到某个值，我们想知道这个值的具体类型，应该如何判断？

所以，与其说“类型判断”，更确切的是我们要解决“值的类型判断”。

-   注意，JavaScript中，变量没有类型，只有值区分类型。所以判断的是值的类型。



## 2.1 类型判断

首先先总体概览一下本小结将会介绍的知识。判断值的类型，一共有三个方法，接下来会分别介绍这三个方法。可以按照各自的异同区分记忆。

类型判断的方法：

-   `typeof` 操作符。可以判断基本数据类型值。
-   `instenceof` 操作符。可以判断引用类型值，但不好用。
-   `Object.prototype.toString()`函数。可以判断引用类型值，替代`instanceof` 操作符。



判断哪些类型：

上文讲过，类型划分为：基本数据类型和引用类型，而基本数据类型又划分为 7 个原始类型和 1 个对象类型（object）。引用类型都是源于 object 类型的。所以某种程度上，引用类型也是对象类型。

引用类型中，有许多 JavaScript 提供的内置类型。如：Function、Date、Array、Error、RegExp、Map、Set等等。

所以，我们通常讲基本类型的判断，主要是区分 7 个原始类型和JavaScript提供的内置类型。



## 2.2 `typeof` 

使用 `typeof` 运算符，可以判断基本数据类型值的类型。

```js
// 基本数据类型（7）
typeof undefined         // "undefined"
typeof null              // "object"  -- bug!
typeof true              // "boolean"
typeof 777               // "number"
typeof "777"             // "string"
typeof Symbol()          // "symbol"
typeof {}                // "object"

// 内置的引用数据类型
typeof function(){}      // "function"
typeof /\+a/g            // "object"  -- not RegExp
typeof (new Date())      // "object"  -- not Date
typeof [1,2,3]           // "object"  -- not Array
```

特点：

1.  基本数据类型中，唯一不能判断 `null`；
2.  内置引用数据类型中，唯一可以判断 `function`；



解决 bug：

 Null 类型无法通过 typeof 运算符查找出。这是一个由来已久的bug。解决Bug 的方法，利用了 null 的两个特性组成的唯一性：

-   Object 类型通过强制转换为 Boolean类型后，是 true。即，`Boolean({})` 返回 `true`。

-   null 通过强制类型转换为 Boolean类型后，是 false。即，`Boolean(null)` 返回 `false`

所以，通过对一个变量判断：转换为 Boolean 后是 false，且类型是 object 的，就是null:

```js
let a = null;
(!a && typeof a === "object");    // true
```



## 2.3 `instanceof`

`instanceof`操作符可以判断引用类型是什么类型对象：

```js
// 内置的引用数据类型
(function foo(){}) instanceof Function // true
/\+a/g instanceof RegExp               // true
(new Date()) instanceof Date           // true
[] instanceof Array                    // true
```



关于原型链：

-   所有函数，都拥有一个 `__proto__` 属性，指向一个普通对象；

-   所有引用类型，都有用一个 `protptype` 属性，指向一个普通对象。

换句话说：

-   构造函数，拥有一个 `prototype` 属性，指向它的原型对象。

-   引用类型 / 实例对象，拥有一个 `__proto__` 属性，指向它的原型对象。

所以，当尝试在一个对象上寻找属性时，如果该对象本身没有这个属性，则会通过 `__proto__` 去它的原型中寻找。



事实上，`instanceof` 是根据原型链来判断左边表达式的原型链，是否可以指向右边表达式的原型。

`[] instanceof Array`，`instanceof`会在 `[]` 这个对象的原型链（`__proto__`属性）不断向上寻找，直到 `Object.prototype` 。如果在期间找到了 `Array.prototype`，则返回 `true	`。

注意：虽然右侧表达式是`Array`，这只是 Array 类名，或称之为 Array 的构造函数、构造对象，实际上我们寻找的是 Array 的原型，即：`Array.prototpye`。



所以，`instanceof` 可以大致检测引用数据类型（根据原型），不能检测基本数据类型。其设计的初衷是探寻原型链。更多的是用来判断某个实例化对象，是否在某个用户自定义的类中。



## 2.4 `Object#toString()`

使用`Object#toString()`来判断数据类型也是一个不错的思路： 

`toString()`后文会介绍，其方法可以被不同对象覆盖 / 自定义，用以实现对象自己的字符串表现形式。这里，我们调用 `Object.prototype.toString`，换句话说，就是调用默认的 toString 方法来判断数据类型。

如果调用默认的`toString`，会返回 `"object type"`。其中 `type` 是对象的类型。

-   需要注意的是，`call` 本身会产生装箱操作，所以需要配合 `typeof` 来区分基本类型还是对象类型。

```js
// 基本数据类对应的对象类型 (8种)
Object.prototype.toString.call()            // "[object Undefined]"
Object.prototype.toString.call(null)        // "[object Null]"
Object.prototype.toString.call(undefined)   // "[object Undefined]"
Object.prototype.toString.call(123)	    // "[object Number]"
Object.prototype.toString.call(123n)        // "[object BigInt]"
Object.prototype.toString.call(true)        // "[object Boolean]"
Object.prototype.toString.call(Symbol(123)) // "[object Symbol]"
Object.prototype.toString.call("moxy")      // "[object String]"
Object.prototype.toString.call({})          // "[object Object]"

// 内置引用数据类型
Object.prototype.toString.call(function(){}) // "[object Function]"
Object.prototype.toString.call([])           // "[object Array]"
Object.prototype.toString.call(new Error())  // "[object Error]"
Object.prototype.toString.call(/\+a/g)       // "[object RegExp]"
Object.prototype.toString.call(window)       // "[object Window]"
Object.prototype.toString.call(JSON)         // "[object JSON]"
Object.prototype.toString.call(new Map())    // "[object Map]"
// ...
```



为何 `Object.prototype.toString` 可以详细区分内置的引用数据类型：

>   每一类装箱对象都在一个私有属性 [[Class]]，这些属性通过 `Object.prototpype.toString()`获取。
>
>   在 JavaScript 中，没有任何方法可以更改私有的 Class 属性，因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。



# 3 类型转换

## 3 类型转换

介绍了类型、类型判断，最后就是最令人头痛的类型转换了。



为什么要发生“类型转换”？

举一个很简单的情况：`Number()`函数，会期待接收一个 Number 类型的参数。当我们传递给他一个其他类型值的时候，JavaScript 就会在运行时尝试将这个值转换为一个 Number类型值，以确保这个函数的正常运行。

举另一个情况：当发生` "hello Moxy" + 777n` 的时候，左边是一个 String，右边是一个 BigInt。这是就会发生类型转换，左右两边的表达式转换为相同类型值后，才能执行 `+` 运算。



当我们讨论类型转换的时候，我们要讨论什么？

1.  类型转换的分类：显式类型转换、隐式类型转换。

2.  类型转换的思想：现将不同的类型值，转化为相同类型，然后执行下一步操作。

3.  触发类型转换的值，通常最终都会转化为：Number 、String 或 Boolean。



简单概述：

1.  从结果上讲，被转换的类型几乎都会转换为：Number、Boolean、String、 这三种原始基本类型：
    1.  ToNumber。其他值转换为数值。
    2.  ToString。其他值转换为字符串。
    3.  ToBoolean。其他值转换为布尔值。
2.  从转换方式上讲，通常划分为显式转换、隐式转换。
    -   显式类型转换：
        -   包装函数 ：`Boolean()`、`String()`、`Number()`、`BigInt()`；
        -   转换为 Number：`Number()`、`parseInt()`、`parseFloat()`；
        -   转换为 String：`String()`、`toString()`；
    -   隐式类型转换：
        -   减法运算符：`-`；
        -   加法运算符：`+`；
        -   抽象相等运算符：`==`。
        -   使用到的方法：`ToPrimitive()`、`valueOf()`、`toString()`；



## 3.1 区分：强制？显式？隐式？

强制类型转换：

当遇到值的类型不同时，需要将值转化为其他类型值，这个过程即为强制类型转换。简称类型转换。

在 JavaScript 中，强制类型转换两种形式：显式强制类型转换、隐式强制类型转换。简称显式类型转换、隐式类型转换。



显式与隐形

-   显式类型转换：代码中可以看到，用包装函数或转换函数等，程序员手动的将值的类型转变。

-   隐式类型转换：JavaScript 引擎看到需要处理的操作和值不对应的时候，自动的尝试讲值转换为可以操作的类型。

    ```js
    let a = String(42)  // 显式类型转换，“手动”将 number 转换为 stirng
    let b = "" + 42     // 隐式类型转换，由引擎发现问题，尝试“自动”转换。
    ```



note：

1.  关于显式 / 隐式类型转换的看法：就像《你不知道的JavaScript》中说的那样，这其实是一个相对而言的看法。如果你清楚的了解所有类型转换是怎么发生的，那这些转换都可以称之为“显式”的；反之，如果完全不知道怎么转换，甚至有时根本没有察觉到你的代码中发生了类型转换，那这个类型转换对你而言就是“隐式”的。

    所以，完全可以不用区分显式、隐式这样的概念，直接按照 “类型转换有哪些方法” 来记忆。

2.  根据 ECMAScript 2020的标准：BigInt 类型没有隐式转换，程序员必须显示调用 BigInt 来转换其他类型的值。



## 3.2 转换结果整理

### 3.2.1 表

|                 | 转换为String | 转换为Boolean              | 转换为Number | 转换为Object |
| --------------- | ------------ | -------------------------- | ------------ | ------------ |
| Null            | "null"       | false                      | 0            | TypeError    |
| Undefined       | "undefined"  | false                      | NaN          | TypeError    |
| true - Boolean  | "true"       | -                          | 1            | #装箱        |
| false - Boolean | "false"      | -                          | 0            | #装箱        |
| Number          | #ToString    | true<br />false  -- 0, NaN | -            | #装箱        |
| String          | -            | true<br />false -- ""      | #ToNumber    | #装箱        |
| Symbol          | TypeError    | true                       | TpeError     | #装箱        |
| Object          | #ToPrimitive | true                       | #ToPrimitive | -            |

Object 转换为原始值（String、Boolean、Number)，会在隐式类型转换中介绍，采用 `ToPrimitive` 方法。



### 3.2.2 结果1：ToString

首先要区分 ToString 和 toSrting 之间的区别：ToString 值的是其他基本类型转换为 String，是泛指的一个转化过程或者说转化思维；而 `toString()` 是一个具体的函数。

7 种基本类型转换为 String：

|              | 转换为 Sring 的结果                                          |
| ------------ | ------------------------------------------------------------ |
| Null         | `"null"`                                                     |
| Undefined    | `"undefined"`                                                |
| Boolean      | `"false"` / `"true"`                                         |
| Number       | 普通数字：`"123"`<br />较大数字：`"1e+21"` 科学计数法<br />超出范围的数字：`"Infinity"` |
| BigInt       | 普通数字：`"123"` 结尾没有 `n`<br />较大数字：不采用科学计数法，且结尾依然没有 `n` |
| Symbol       | `"Symbol(SymbolName)"`                                       |
| Object(其他) | 调用该对象的 `toString()` 方法。<br />不同类型的对象结果不同，具体在 `toString`分析。 |

把主流的格式也列出来：

-   Date、RegExp、Array、normal Object、 ...



### 3.2.2.1 Number To String：

##### `Number.protype.toString()`

把一个数字转化为字符串。接受一个可选参数：`2`, `8`, `16`。可以指定数字最终转化为字符串的基数。

```js
Number.prototype.toString.call(20, 2)   // "10100" -- 二进制的 20
Number.prototype.toString.call(20, 8)   // "24"    -- 八进制的 20
Number.prototype.toString.call(20, 16)  // "14"    -- 十六进制的 20
```



以下三个方法常用在金融领域：

`toFixed()`：把 Number 转化为 String 时，指定小数点后面的位数。

`toExponential()`：把 Number 转化为 String 时，使用指数计数法，执行小数点后的有效位数。

`toPrecision()`：把 Number 转化为 String 时，指定有效字数个数。

以上三个方法，当不满足条件是，会截断：社区末尾的数字，或者补零。

```js
let n = 123456.789
n.toFixed(2)       // "123456.79"   -- 截断
n.toFixed(5)       // "123456.78900"-- 补零
n.toExponential(3) // "1.235e+5"
n.toPrecision(7)   // "123456.8"    -- 截断
n.toPrecision(10)  // "123456.7890" -- 补零
```



### 3.2.3 结果2：ToNumber

7 种基本类型转换为 Number：

|           | 转换为 Number 的结果                                         |
| --------- | ------------------------------------------------------------ |
| Null      | `0`                                                          |
| Undefined | `NaN`                                                        |
| String    | 数字形式：`"1.123"` --> `1.123`<br />其他形式：`"1.123px"` --> `NaN`<br />空字符串：`""`  --> `0` |
| Boolean   | `true`    -->  `1`<br />`false`  -->  `2`                    |
| BigInt    | 在范围内：`123n`   --> `123`<br />超出范围：`(一个超级大的数)`  --> `Inifinity` |
| Symbol    | TypeError，无意义                                            |
| Object    | 调用该对象的 `ToPrimitive()` 方法。<br />不同类型的对象结果不同，具体在 `ToPrimitive()`分析。 |



### 3.2.3.1 String To Number：

绝大多数输出都为 `NaN`。以下是不为 `NaN` 的情况：

`Number()`：输出基数为10的字符串形式，如果较大会用指数计数法（节约内存）。

-   忽略：如果开头有空格，会忽略空格。

-   可能的返回值：十进制的数字、`NaN`、`Infinity`、`-Infinity`、`NaN`、`+0`、`-0`

```js
Number("123")       // 123
Number("Infinity")  // Infinity
Number("-Infinity") // -Infinity
Number("aa")        // NaN
Number("-0")        // -0
Number("+0")        // 0   -- 正零返回 0
Number("")          // 0   -- 空字符串返回 0
Number()            // 0   -- 空参数返回 0
Number("      123") // 123   -- 忽略空格
```



`parseInt()`：把 String 转化为 Number时，只解析整数。

-   忽略：忽略小数点后内容；如果开头数字前有空格，也会忽略。
-   基数：开头是 `0x`或`0X`，会解析为十六进制的数字。
-   NaN：开头不是数字，而是其他内容，则返回 NaN。
-   第二个参数：指定要解析的数值的基数。合法值是 2～36。

```js
parseInt("123")     // 123
parseInt("12.1px")  // 12
parseInt("     12") // 12    -- 空格
parseInt("-0x123")  // -291   -- 十六进制
parseInt("")        // NaN   -- 空串返回 NaN，这和 Number() 不一样
parseInt()          // NaN   -- 空串返回 NaN，这和 Number() 不一样
parseInt("A123")    // NaN

// 第二个参数
parseInt("110", 2)     // 6
parseInt("110777", 2)  // 6  -- 自动忽略777，不满足二进制条件。
parseInt("1110110", 16)// 17891600
```



`parseFloat()`：把 String 转化为 Number 时，解析整数或浮点数。

-   忽略：开头数字前有空格，则会忽略空格。
-   小数点：以小数点开头，会自动补零。
-   NaN：开头不是数字。而是其他内容，则返回 NaN。

```js
parseFloat("12.1")     // 12.1
parseFloat("12.1px")   // 12.1
parseFloat("   12.1")  // 12.1  -- 空格
parseFloat(".13")      // 0.13  -- 小数点
parseFloat("")         // NaN   -- 空串返回 NaN，这和 Number() 不一样
parseFloat()           // NaN   -- 空串返回 NaN，这和 Number() 不一样
parseInt("A123.12")    // NaN
```



### 3.2.3.2 String To BigInt：

字符串转化为 BigInt 整体与转化为 Number 差别不大。理解了转化为 Number 有哪些情况后，通过对比即可理解转化 BigInt 的规则：

-   BigInt 都是精确的数字，没有小数点、`Inifinity`、四舍五入、指数计数法。
-   String 如果转化为 Number 时，是 `NaN`，那么转化为 BigInt 也是 `NaN`。



### 3.2.4 结果3：ToBoolean

背下 7 种假值：“false、null、undefined、空、0 (0n)、not a Number。”

|                                   | 转换为 Boolean 的结果 |
| --------------------------------- | --------------------- |
| null                              | `false`               |
| undefined                         | `false`               |
| String          --> `""` 空字符串 | `false`               |
| Number     --> `0`                | `false`               |
| Number     --> `NaN`              | `false`               |
| BigInt          --> `0n`          | `false`               |
| Boolean      --> `false`          | `false`               |
| Object         --> 全部是 `true`  |                       |



### 3.2.4.1 `!`

 运算符`!` 会对右侧的值执行两个操作：

-   先把右侧的值转换为 Boolean 类型值；
-   在对该值取反，即 `true` 变 `false`；`false` 变 `true`。

```js
!true   // false
![]     // false

// 列举假值取反：
!null   // true
!NaN	// true
!""	// true
```



## 3.3 显式类型转换

### 3.3.1 封装对象

JavaScript 为基本数据类型提供了封装对象，称为原生函数。他们为基本数据类型提供了该子类型所持有的方法和属性。

原生函数：`String()`、`Number()`、`Boolean()`、`BigInt()`、`Symbol`。



### 3.3.1.1 装箱转换

>   每一种基本类型 Number、String、Boolean、Symbol、BigInt() 在对象中都有对应的类。
>
>   所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。



**自动装箱**

把基本类型转换为对应的包装类型。

因为基本类型值无法调用方法和属性，为了方便直接调用。每当我们对基本类型值进行方法和属性调用的时候，JavaScript引擎会对这个基本类型自动包装一个包装类型对象。

```js
let arr = [1,2,3]
arr.toString();    // "1,2,3"
```



自动装箱的过程：

-   声明：创建一个 `Array` 的包装类型实例；
-   装箱：把该包装实例的基本值赋为 `[1,2,3]`；
-   调用：在实例上调用 `toString` 方法；
-   拆箱：使用完毕后，销毁该实例，还原为基本数据类型值。



**自动拆箱**

把包装类型还原为对应的基本类型。



### 3.3.2 `ToString()`

返回对象的字符串表示。默认情况下，`Object.prototype.toString()` 方法会返回以下形式： `[object XXX]`

内置对象自定义的 `toString()`：

-   Array 类：数组的每个元素转化为字符串，在使用逗号作为分隔符把他们相接。
-   Function 类：返回 JavaScript 源代码字符串 / 或 `"function xxx() { [native code] }"`。
-   Date 类：返回一个人类友好（且JavaScript可解析）的日期 + 时间字符串。
-   RegExp 类：返回一个 RegExp 字面量的字符串。
-   包装函数（Boolean、Number、BigInt、Symbol）：返回对应的被包装原始值的字符串形式。

```js
// Array
[1, 2, 3].toString();   // "1,2,3"
([]).toString();        // ""
[10].toString();        // "10"

// Function
(function(x) {return x}).toString();  // "function(x) {return x}"
(Object.create).toString();           // "function create() { [native code] }"

// Date
(new Date()).toString();     // "Sun Apr 18 2021 21:23:13 GMT+0800 (中国标准时间)"

// RegExp
(/\d+/g).toString();    // "/\d+/g"
```



### 3.3.3 `valueOf()`

核心：调用`valueOf()` ，不是所有对象都返回一个可以代表对象的原始值。

-   当对象有一个可以代表的原始值时，返回这个原始值；
-   默认情况下，返回对象本身。



内置对象的`valueOf()`

-   Array、Function：返回对象本身；
-   RegExp：直接返回被包装的正则表达式。
-   Date：返回日期的内部表示形式：自 1970 年 1 月 1 日至今的毫秒数。
-   包装函数（Boolean、Number、BigInt、Symbol）：直接返回被包装的原始值。

```js
// Array
[1, 2, 3].valueOf();   // (3) [1, 2, 3] 返回自身

// RegExp
(/\d+/g).valueOf()    // /\d+/g 返回正则表达式

// Date
(new Date()).valueOf()  // 1618753134122 毫秒数

// 包装函数
(Symbol("123")).valueOf()   // Symbol(123) 返回原始值
```



## 3.4 隐式类型转换

### 3.4.1 `ToPrimitive(input [,PreferredType])`

作用：通过抽象操作 ToPrimitive 将 input 转换为原始基本类型。如果 input 可以转换多种基本类型，可以通过 PreferredType 来选取更倾向的类型进行转换。



`toString()` 和 `valueOf()`，所有 object 都会继承这两个方法，他们承担了把对象转化为原始值的任务。而 `ToPrimitive`就是调用了这两个方法，实现对象的转化。



使用场景：发生类型转换时，遇到 object 类型需要转换，JavaScript引擎就会自动调用该对象的 `[Symbol.toPromitive]` 方法。如果找不到该方法，则通过原型链向上寻找，直到找到 `Object#ToPrimitive`。通过该方法把对象类型转换为原始基本类型（通常就是转换为Number、String 这两种）。



参数：抽象操作 ToPrimitive 接受一个 `input` 和一个可选参数 `PreferredType`。

-   第一个参数的类型：
    -   原始基本类型：ToPrimitive 只对传入参数为 Object 类型进行转换，对非对象直接返回。
    -   Object 类型：返回该对象的默认值。该对象的默认值是通过把 PreferredType 作为 hint 参数，传入该对象的内部方法 [[DefaultValue]] 得到。
-   第二个参数：
    -   传入参数：
        -   可传入 String、Number。
    -   不传入参数，则函数自动赋默认值：
        -   input 为 Data 类型，PreferredType 赋值为 String；
        -   input 为 非 Date 类型，PreferredType 赋值为 Number。

**所以，通常情况下，ToPrimitive 会首先尝试将 object 转换为 Number。**



算法：本质上，就是把一个 object，通过分析`PreferredType` 的类型，来分先后顺序调用`valueOf()`和`toString()`，得到一个原始类型值。如果得不到原始值就报错。 

1.  如果 `input` 为原始基本类型，直接返回，函数执行结束。
2.  先分析 `PreferredType` 的类型：

3.  如果是 Number：
    1.  先尝试调用 `input.valueOf()`，执行结果是原始类型值，返回该值，函数执行结束。
    2.  否则，尝试调用 `input.toString()`，执行结果是原始类型值，返回该值，函数执行结束。
    3.  `valueOf()`和`toString()` 都无法得到原始值。报错。
4.  如果是 String：
    1.  先尝试调用 `input.toString()`，执行结果是原始类型值，返回该值，函数执行结束。
    2.  否则，尝试调用 `input.valueOf()`，执行结果是原始类型值，返回该值，函数执行结束。
    3.  `valueOf()`和`toString()` 都无法得到原始值。报错。



补充1：

在ES6，经过 Symbol 改造的 `ToPrimitive()` ，是通过 `[Symbol.toPrimitive]` 绑定在对象上的。也就是说，在调用 Torimitive()方法时，JavaScript引擎会优先调用对象的 `someObject[Symbol.toPrimitive](hint)`。

```js
obj[Symbol.toPrimitive] = function(hint) {
	// hint，通过 PreferredType 传入的："string", "number", "default" 其中之一
  // return，最终返回一个原始类型值
}
```

实例：

```js
let person = {
    a : 123,
    [Symbol.toPrimitive](hint) {
        console.log(`我重写了你: ${hint}`);
        return 0;
    }
}

console.log(person)  	// {a: 123, Symbol(Symbol.toPrimitive): ƒ}
console.log(+person)	// 我重写了你: number
			// 0
console.log({}+person)  // 我重写了你：default
			// [object Object]0
console.log(person+123) // 我重写了你: default
			// 123
```



### 3.4.1.1 Object to PrimitiveValue 

对象到原始值的转换。

总体来说，就是通过 `ToPrimitive` 算法，大致划分为三种思路：

-   思路一：先执行 `toString()`，后执行`valueOf()`;
-   思路二：先执行 `valueOf()`，后执行`toString()`；
-   思路三：根据程序员对特定对象的自定义。



具体转换：

Object to Boolean：

-   所有对象都转化为 `true`。包括包装对象、自己创建的对象等等，无一例外。

Object to String：

-   执行思路一，先 `toString()`，再 `valueOf()`，寻找原始值。得到原始值后，把原始值转化为 String。

Object to number：

-   执行思路二：先 `valueOf()`，再 `toString()`，寻找原始值。得到原始值后，再把原始值转化为 Number。



### 3.3.2 The Addition Operato 加法运算符 `+`

加法运算符有二义性：它有时被当成是字符串的链接，最终得到一个更长的字符串；有时被当成是数字运算，最终得到一个数字计算结果。

三步走口诀：干掉 Object，优先 String ，最后 Number。



执行流程：

1.  全部转化为原始值（干掉 object）：
    -   若有 object，通过 ToPrimitive 转化为原始值，继续下一步。
2.  若有 String：
    -   把原始值都转化为 String 类型，然后链接，得到一个 String。
3.  没有 String
    -   把原始值都转化为 Number 类型，然后相加，得到一个 Number。



### 3.3.2.1 一元 `+`

若形式为 `+ someThing`，则会在调用 ToPrimitive 时，传入的 hint 参数为 `"Number"`。即，强制会发生强制转换为 Number 类型。

```js
+ {}   // NaN -- Object 强制转换为 Number 类型
+ ["1","3","4"]  // NaN -- Array 也是 Oject类型，转换为 Number 类型
```



### 3.3.3 Relational Operators 关系运算符

`<`，`>`，`<=`，`>=` 四种关系运算符。关系运算符左右两边的值比较具有二义性，即它有时是两个数值比较，有时是两个字符串比较。

执行流程：

1.  全部转化为原始值（干掉 object）：
    -   若有 object，通过 ToPrimitive 转化为原始值，继续下一步。
2.  若有 String：
    -   左右两边都是 String：直接用 String 方法进行比较，按照字典顺序比大小。
    -   有一个是 String，另一个是 BigInt：转化为 BigInt，然后进行比较。
    -   有一个是 String，另一个是 Number / Boolean：转化为 Number 进行比较。
3.  以上都不满足，则剩余的类型有：BigInt、Number、Boolean，全部转化为 Number 进行比较。



### 3.3.4 Abstract Equality Comparison 抽象相等运算符 `==`

牢记以下几个原则，假设 `x == y`：

1.  `number` 比较。
2.  只要有 `NaN`，就是 `false`。
3.  `undefined` 和 `null` 自身相等、互相相等，和其他值比都是 `false`。



解释：

1.  `number`比较：宽松相等，左右两侧的值不是转换为 `true` / `false` 比较，而是几乎都转换为 number 比较。ToNumber 优先。原始基本类型都是转换为 Number 类型然后比较。
2.  `undefined` 和 `null`
    -   自身相等：`undefined == undefined`, `null == null`；
    -   互相相等：`undefined == null`。



**人类的思考流程**（遇到题目这么想）：

1.  先找特殊值：
    1.  先看 `NaN`，只要有它，就是 `false`；
    2.  再看 `undefined` 和 `null `，这俩自身相等，互相相等，与别人全不相等。
    3.  最后看 Symbol 类型，他们自身相等，与别人全不相等。
2.  再看他们类型是否相等（5 种类型）：
    1.  他们类型相同：根据类型去判断，相当于 `===` 严格相等（6 种）：
        -   String：比较字符内容和长度。
        -   Number：比较值。
        -   Boolean：直接比较。
        -   object：比较地址值。
        -   （Symbol：比较地址值。）
3.  再看左右两个值的基本类型：
    -   全部是（Boolean、String、Number）基本类型：
        -   执行 Other2Number，全部转换为 Number 然后进行比较。
    -   有一个（object）：
        -   另一个是 Boolean：
            -   object 转换为 Boolean（总是转换为 true）；
        -   另一个是 String、Number：
            -   object 执行 ToPrimitive()后，转化为原始类型值比较。



**人类的思考流程** ES2020 版（遇到题目这么想）：

1.  先找特殊值：
    1.  先看 `NaN`，只要有它，就是 `false`；
    2.  再看 `undefined` 和 `null `，这俩自身相等，互相相等，与别人全不相等。
    3.  最后看 Symbol 类型，他们自身相等，与别人全不相等。
2.  再看他们类型是否相等（5 种类型）：
    1.  他们类型相同：根据类型去判断，相当于 `===` 严格相等（6 种）：
        -   String：比较字符内容和长度。
        -   Number：比较值。
        -   **BigInt**：比较值。
        -   Boolean：直接比较。
        -   object：比较地址值。
        -   （Symbol：比较地址值。）
3.  再看左右两个值的基本类型：
    -   全部是（Boolean、String、Number、**BigInt**）基本类型：
        -   没有 **BigInt**：执行 Other2Number，全部转换为 Number 然后进行比较。
        -   有**BigInt**：
            -   **BigInt** 与 String 比较： String 转化为 **BigInt** 进行比较；
            -   **BigInt** 与 其他类型 比较：**BigInt** 转化为具体值，不进行位数舍弃。
    -   有一个（object）：
        -   另一个是 Boolean：
            -   object 转换为 Boolean（总是转换为 true）；
        -   另一个是 String、Number、**BigInt**：
            -   object 执行 ToPrimitive()后，转化为原始类型值比较。



**计算机的执行流程**：

下图为 [ECMAScript 2020](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison) 标准对 `==` 的执行描述。


![image-20210418191735217.png](images/z-%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD.assets/d9ecfdde3b3c40fbbac87aba59eafe38~tplv-k3u1fbpfcp-watermark.png)


# 4  案例分析

## 4 案例分析

这里会把日常考到的、特殊的案例都收纳进来。方便以后查阅。



## 4.1 补充：Array to Number

总体思想，直接当作普通对象对待：先转化为原始值（Number、String任意一个）。再根据情况转化为对应的原始值： Number 或 String。

数组是一个对象，则转化为原始值（数字），需要调用 `ToPrimitive` 方法。

1.  先调用 `valueOf`（返回数组本身），没有得到原始值。
2.  再调用 `toString`，返回 “数组的每个元素转化为字符串，在使用逗号作为分隔符把他们相接。”此时得到了一个字符串。
3.  最后调用 `valueOf`，把 String 转化为 Number。

```js
Number([1,2,3])  // NaN     

// 数组转化为Number，经历了下面两个步骤：
String([1,2,3])  // "1,2,3" -- 先转化为 String
Number("1,2,3")  // NaN     -- 再转化为 Number
```

所以，因为数组没有 `valueOf`方法，数组只能先转化为 String 形式。如果需要，String 会再转化为 Number形式。

由此，Array to Number 可划分为两种情况：

-   数组内容为空、或只有一个元素：
    -   BigInt 情况：
        -   `[123n]` 最终转化为 `123`；
        -   `["123n"]` 最终转化为 `NaN`。
    -   其他情况，该元素可以转化为一个 Number，就返回这个 Number。
        -   比如：`[]`、`[1]`、`["1"]`、`["123.1"]`、`(["Infinity"])`
-   不满足上面的条件，返回 `NaN`。
    -   比如：`["123abc"]`、`["abc"]`



以下举例可能出现的情况：

```js
// 特殊值：undefined、null、空
Number([undefined])    // 0
Number(["undefined"])  // NaN
Number([null])    // 0
Number(["null"])  // NaN
Number([])        // 0
Number([""])      // 0

// Number可能的值：NaN、-0、+0、Infinity、-Infinity、指数计数法
Number([NaN])		// NaN
Number(["NaN"])		// NaN
Number([-0])		// 0
Number(["-0"])		// -0
Number([+0])		// 0
Number(["+0"])		// 0
Number([Infinity])	// Infinity
Number(["Infinity"])	// Infinity
Number([-Infinity]) 	// -Infinity
Number(["-Infinity"]) // -Infinity
Number([1.23E+07])    // 12300000 -- 指数计数法
Number(["1.23E+07"])  // 12300000 -- 指数计数法

// BigInt
Number([123n])    // 123
Number(["123n"])  // NaN -- 这里很特殊


// to String
String([1,undefined,null,1]) // “1,,,1” -- undefined 和 null 当作“空”处理
String([undefined])          // ""
```



## 4.2 `+` 合集

```js
[] + []   // "" -- Array 会先转化为 String，所以执行字符串拼接
[] + {}   // "" -- Array 会先转化为 String，{} 也会转化为 String，所以执行字符串拼接，
{} + []   // 0  -- {} 会被识别为一个块作用域，最终执行“+ []”，也就是 Array to String。
({} + []) // "[object Object]" -- {}此时会被识别为一个 Object 类型。

{} + {}   // 这个表达式有歧义，根据不同的解析环境有可能会有不同的结果：
	  // 第一个识别为块作用域：NaN，此时第一个忽略，为“+{}”，强制求出 Object 类型的 Number。
	  // 两个{}都识别为 Object 类型："[object Object][object Object]" 
({}) + {} // "[object Object][object Object]" 

0 + {}   // "0[object Object]"
{} + 0   // 0
0 + []   // "0"
[] + 0   // "0"

true + true + true  // 3  -- true to Number 为1；false to Number 为 0
true - true         // 0
true - false        // 1

10 + "1"      // "101" -- 上文的口诀：干掉 Object，优先 String ，最后 Number
"1" + 10			// "110"

[1,2,3] + "10"        // "1,2,310" -- 优先 String
["1","2","3"] + "10"  // "1,2,310"
["1","2","3"] + 10    // "1,2,310"

// string + 其他
"1" + 123 	 	// "1123"
"1" + (new Map())       // "1[object Map]"
"1" + false  		// "1false"
"1" + undefined         // "1undefined"
"1" + null 		// "1null"
"moxy" + null	        // "moxynull"

// 数字 + 其他
7 + "123" 	 // "7123"
7 + null	 // 7
7 + undefined    // NaN
7 + true	 // 8

// Date 对象的特殊性。上文说过，Date转化，会优先调用toSring
1 + (new Date()) // "1Tue Apr 20 2021 12:06:43 GMT+0800 (中国标准时间)" -- valueOf
+ new Date()  	 // 1618891593545
```



## 4.3 `==` 合集

见上文，优先转化为 Number 比较

```js
// !运算符优先级高，先运算，把它右侧的值转变为 boolean 类型：
// 判断!运算符，要先回忆之前讲的 7 种假值：“false、null、undefined、空、0 (0n)、not a Numbe
[] == ![] 		// true -- 相当于 [] == false -->  0 == 0 --> true
[] == !null 		// false
[] == !!null 		// true
[] == !!undefined       // false

// 特殊值 undefined、null、NaN
undefined == undefined	// true
null == undefined	// true
null == null		// true
NaN == NaN		// false

// 普通 object
NaN == NaN  	// false
({}) == true	// false  -- 对象转化为 Number，值为 NaN。
({}) == false	// false
({}) == NaN     // false

// Array
[] == 0 		// true
[2] == 2 		// true
["2"] == 2          // true
[null] == 0         // true -- Array 先转化为String得到：""，再转化为Number，得到 0
[undefined] == 0    // true -- 同上 
["undefined"] == 0  // false -- Array先转化为String得："undefined"，再转化为Number，得 NaN
["null"] == 0       // false，同上

[undefined] == undefined // false -- Array先转化为String得：“”,再转化为Number
[null] == null           // false

// Boolean 最后都会转化为 number进行比较
1 == true  	// true
2 == true	// false
0 == false	// true
'true' == true  // false
```



## 4.4 问题

定义一个变量`a`，使得下面的表达式结果为`true`

```js
a == 1 && a == 2 && a == 3   // true
```

解答1：通过修改对象的 `toString()` 和 `valueOf()` 方法。

```js
var a = {
    i: 1,
    valueOf() {
      return this.i++
    }
}

a == 1 && a == 2 && a == 3 // true
```

解答2：用户定义的普通 object，根据 `ToPrimitive` ，会首先尝试将 object 转换为 Number，调用 `valueOf()`。得不到原始值，则会调用 `toString()`。所以，定义 `toString()`也可以。

```js
var a = {
    i: 1,
    toString() {
        return this.i++;
    }
}

a == 1 && a == 2 && a == 3 // true
```

解答3：归根结底，是调用 `ToPrimitive` 所以，利用定义` [Symbol.toPrimitive]`也可以：

```js
var a = {
    i: 1,
    [Symbol.toPrimitive]() {
        return this.i++;
    }
}

a == 1 && a == 2 && a == 3 // true
```

进一步追问：` [Symbol.toPrimitive]()`	、`toString()`、`valueOf` 执行的先后顺序是什么：

```js
// 检测一
var a = {
    i: 1,
    [Symbol.toPrimitive]() {
        console.log("[Symbol.toPrimitive]");
        return 0;
    },
    valueOf() {
        console.log("valueOf()");
        return 0;
    },
    toString() {
        console.log("toString()");
        return 0;
    },
}
a == 1  // 输出：[Symbol.toPrimitive]

// 检测二
var a = {
    i: 1,
    valueOf() {
        console.log("valueOf()");
        return 0;
    },
    toString() {
        console.log("toString()");
        return 0;
    },
}
a == 1 // 输出：valueOf()
```

结论：`[Symbol.toPrimitive]` 的优先级最高、`valueOf()` 其次，最后是`toString()` 这和前文讲的一致。


# 参考：

专栏：重学前端 —— winter

《你不知道的 JavaScript 中》

《JavaScript 权威指南 7》

《JavaScript 高级程序设计 4》

https://262.ecma-international.org/11.0/

https://juejin.cn/post/6844903854882947080

https://juejin.cn/post/6844903694039777288

https://juejin.cn/post/6844904095774425101

https://segmentfault.com/a/1190000008038678

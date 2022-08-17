---
title: Typescript
sidebar_position: 3
date: 2022-03-03
tags: [TypeScript]
---

# 1 JavaSc**1** 概述

### TypeScript 是什么

Typescript 为 JavaScript 丰富了类型检查功能，并不是取代 JavaScript。

Typescript 是 JavaScript 的超集，是 js 在基础之上的扩展。

ts 最终需要 bebel 转译为 js 后才能运行。



### TypeScript 的发展历史

- 2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。
  - ​	2014-04：TypeScript 发布了 1.0 版本。
- 2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。
- 2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。
- 2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。
- 2016-05：`@types/react` 发布，TypeScript 可以开发 React 应用了。
- 2016-05：`@types/node` 发布，TypeScript 可以开发 Node.js 应用了。
- 2016-09：TypeScript 发布了 2.0 版本。
- 2018-06：TypeScript 发布了 3.0 版本。
- 2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。
- 2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。
- 2020-08：TypeScript 发布了 4.0 版本。
- 2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。



### Typescript 的核心特点

- **TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错**。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。
- **TypeScript 编译的时候即使报错了，还是会生成编译结果**，仍然可以使用这个编译之后的文件。





## 2 类型

Javascript 的类型分为两种：基本数据类型和引用数据类型。

- 基本数据类型：`boolean`、`string`、`number`、`null`、`undefined`，在 Ts 中有对应的类型定义；
- 引用数据类型：`object`，在 Ts 使用接口定义；
- 其他补充：
  - `any`：让变量绕开了 Ts 的类型检查。
  - `never`：
  - `void` 代表一个什么没有的空值。默认环境下，可以赋值为 `undefined` 或 `void`。

### 2.1 基本数据类型

#### void

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：

```ts
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`（只在 --strictNullChecks 未指定时）：

```ts
let unusable: void = undefined;
```



#### Null 和 Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```ts
let u: undefined = undefined;
let n: null = null;
```

与 `void` 的区别是，**`undefined` 和 `null` 是所有类型的子类型。**也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```ts
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

#### any 任意值

任意值（Any）用来表示允许赋值为任意类型。

- any 类型的变量，不会被 Ts 类型检查。

**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

```ts
// any允许被赋值为任意类型,其他类型不可
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

#### 类型推论

当一个变量在定义时，没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

- 如果变量在定义的时候，没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查。

#### 联合类型 ' | '

联合类型（Union Types）表示取值可以为多种类型中的一种。

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

#### 访问联合类型的属性或方法[§](https://ts.xcatliu.com/basics/union-types.html#访问联合类型的属性或方法)

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，**只能访问此联合类型的所有类型里共有的属性或方法**：

```ts
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```ts
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 `myFavoriteNumber` 被推断成了 `string`，访问它的 `length` 属性不会报错。

而第四行的 `myFavoriteNumber` 被推断成了 `number`，访问它的 `length` 属性时就报错了。

### 2.2 引用数据类型

#### 1 接口 - 规范对象的属性和方法

**使用接口（Interfaces）来定义对象的类型。**

- **接口是一个类型，不是一个对象，也不是一个具体的值。**

- 接口只出现在编译阶段，而在真正的 JavaScript 运行阶段时会被删除。

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

接口一般首字母大写。

```typescript
// 接口
interface Person {
    name: string;
    age: number;
}

// 对象变量
let tom: Person = {
    name: 'Tom',
    age: 25
};
```

- 定义的变量不可比规定的接口少、或者多一些属性。**在对变量赋值的时候，其形状上必须和接口保持一致。**



**可选属性**

如果变量对象可以不定义接口的某些属性，那就让这些属性变成 **可选属性**

```typescript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```

**任意属性**

如果想让变量对象任意定义一些属性，这些属性冰没有在接口中定义，那就在接口中定义一个  **任意属性**

```ts
interface Person {
    name: string;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```

任意属性让变量对象可以额外的定义属性，还对接口的 **可选属性** 和 **确定属性** 提出了限制。

- **一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

```ts
// 这样是可以的
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```



而这样会报错

- 任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```

事实上，当定义了任意属性后，Ts 会把这个接口判断为联合类型和接口的结合：

- ` { [x: string]: string | number; name: string; age: number; gender: string; }`



一个接口中只能定义一个任意属性。

- `[propName: string]: any` 中，
  - `propName` 表示该属性名可以任意取，`:string` 表达了它的类型是字符串，`any` 代表属性值类型是任意的。

**只读属性**

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

```ts
interface Person {
    readonly id: number;			// 只读属性，对象变量必须满足，且必须是定义对象变量的时候赋值，之后不可再修改。
    name: string;							// 基本属性，对象变量必须满足
    age?: number;							// 可选属性，对象变量可以不满足
    [propName: string]: any;	// 任意属性，赋予对象变量任意定义属性的能力
}

let tom: Person = {
  	id: 1234567   // 必须赋值
    name: 'Tom',
    gender: 'male'
};

tom.id = 111     //	 报错，不可以对只读属性再做修改。
```



#### 2 数组 - 规范数组的成员

Ts 可以对数组的成员定义类型，有三种定义方式：

- `类型 + [方括号]`：基本表示法	
- `Array<elemType>` ：数组泛型（Array Generic）
- 用接口表示，接口规范了对象的属性，数组属于 object，当然也可以用接口来表示。

```ts
// 两种方式都规定了 fibonaccil 数组的成员只能是 number
let fibonacci1: number[] = [1, 1, 2, 3, 5];
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 接口表示
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// 接口使用了任意属性规定对象变量的属性
// 对象变量的属性名必须是 number 类型（也就是数组下标）
// 对象变量的属性值必须是 number 类型（也就是数组成员）
```



#### 3 类数组 - 规范对象的属性和方法[§](https://ts.xcatliu.com/basics/type-of-array.html#类数组)

用接口表示数组并不常见，而更常见的使用用接口表示类数组

类数组（Array-like Object）不是数组类型，比如函数的 `arguments` 属性：

```ts
// 如果我们想把函数的 arguments 赋值到 args 时：
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```

上例中，`arguments` 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 `length` 和 `callee` 两个属性。

事实上常用的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```ts
function sum() {
    let args: IArguments = arguments;
}
```

其中 `IArguments` 是 TypeScript 中定义好了的类型，它实际上就是：

```ts
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```



#### 4 函数 - 规范函数的参数和返回值

JavaScript 中有两种声明函数的方式：函数声明和函数表达式。

```js
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let sum = function (x, y) {
    return x + y;
};

// 箭头函数
let sum = (x, y) => {
  	return x + y;
}
```

Ts 规定了参数的类型（必须是规定的类型）、数量（不可多也不可少）。



他们对应在 Ts 中的声明方式如下：

- 函数声明方式
- 函数表达式方式
- 箭头函数表达式方式
- **接口定义函数的形状**

```ts
// 函数声明（Function Declaration）
function sum(x: number, y: number): number {
    return x + y;
}


// 函数表达式（Function Expression）
// 完整写法
// 注意这里的箭头并不是箭头函数，而是表达这个函数返回值类型是 number
// 箭头的左侧是输入类型（arguments），箭头的右侧是输出类型（return）
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 简写,对左侧的变量类型进行了简写
// 只对等号右侧的匿名函数进行了类型定义，而等号左边的mySum，是通过赋值操作进行类型推论而推断出来
let mySum = function (x: number, y: number): number {
    return x + y;
};


// 箭头函数表达式方式
// 先看等号，等号左边是对 mySum 变量的限定，等号右边是对函数的限定。
// 再看左边的 =>，箭头左边是对输入的限定，右边是对输出的限定。
let mySum: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
};


// 接口定义函数的形状
// SearchFunc定义了函数变量的参数和返回值。
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

- 采用函数表达式/接口定义函数的方式时，对等号左侧进行类型限制，
- 可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。



**可选参数**

用 `?` 表示可选的参数：

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

定义函数时，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**。



**参数默认值 - 可选参数的变种**

在 ES6 中，我们允许给函数的参数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数**：

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

此时就不受「**可选参数必须接在必需参数后面**」的限制了：

```ts
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```



**剩余参数**

ES6 中，可以使用 `...rest` 的方式获取函数中的剩余参数（rest 参数）。

- `...rest` 是一个数组。所以我们可以用数组的类型来定义它。
- 注意，rest 参数只能是最后一个参数。

```ts
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```



**重载 - reverse 关键字**

重载允许一个函数接受不同数量或类型的参数，根据参数的不同，作出不同的处理。

Ts 中通过联合类型实现重载：

- 假设函数有三种重载定义，联合类型无法清晰的表达出每一种函数定义的输入和输出类型具体是如何对应的，可以通过多个 `reverse` 关键字对一个函数进行多次重载定义。

```ts
/**需求
 * 需要实现一个函数 reverse，
 * 输入数字 123 的时候，输出反转的数字 321；
 * 输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
*/

// 一个联合类型对函数重载进行定义，无法清晰的表达出当输入参数是number时，返回number；输入string时，返回string
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// reverse
// 使用reverse后先定义两个重载形式，再对函数下具体的定义，就能清晰的表达输入和输出的对应关系
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

- 上例中，我们重复定义了多次函数 `reverse`，前几次都是函数定义，最后一次是函数实现。



## 3 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

**类型断言的目的就是让编译通过。**

- 它是一个临时性的解决方案。它的作用范围仅限于当前语句（表达式）。换句话说，类型断言只对当前语句（表达式）产生影响。

- 实质同 any 任意值类型一样，是一个绕开 Typescript 编译器对类型限制和判断的工具。
- 这最终可能会引发运行时错误。

#### 语法

```ts
值 as 类型
```

或

```ts
<类型>值
```

在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 `值 as 类型`。

形如 `<Foo>` 的语法在 tsx 中表示的是一个 `ReactNode`，在 ts 中除了表示类型断言之外，也可能是表示一个[泛型](https://ts.xcatliu.com/advanced/generics.html)。

故建议大家在使用类型断言时，统一使用 `值 as 类型` 这样的语法，本书中也会贯彻这一思想。

#### 断言的用途

1. 将一个联合类型断言为其中一个类型

   - 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型中共有的属性或方法**

2. 将一个父类断言为更加具体的子类

3. 将任何一个类型断言为 any。

   - 比如，当我们执行 `window.foo = 1;` 给 window 定义一个全局变量 foo 会报错，因为 Ts 会判断 window 上不存在 foo 这个变量，所以无法执行赋值操作。
   - 解决：将 `window` 临时断言为一个 `any` 后，就可以执行一下代码了：`(window as any).foo = 1;`
   - 因为，在 any 上可以访问任何属性。any 类型的变量不再受 ts 编译器的约束了，可以直接当成一个 普通的 js 变量。

4. 将 any 断言为一个具体的类型

   - 在日常的开发中，我们不可避免的需要处理 `any` 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景。

   - 遇到 `any` 类型的变量时，无视它会任由它滋生更多的 `any`。
   - 可以选择改进它，通过类型断言及时的把 `any` 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。



#### 欺骗

**注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：**



#### 将一个联合类型断言为其中一个类型

假设，我们需要在还不确定类型的时候就访问其中一个类型特有的属性或方法：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.
```

获取 `animal.swim` 的时候会报错。

而我们如果添加了类型断言，告知 Ts `animal` 一定是 `Fish`，可以绕开 Ts 编译器的编译时检查，但无法避免运行时的错误：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```

如果我们不添加 `if` 判断，就有可能会在运行时发生 Js 错误：

```ts
function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function
```



#### `instanceof` 和 `typeof` 的区别

当我们要判断一个类中是否存在某个属性，两者都可以实现：

```ts
// 使用 typeof + 断言，判断是否存在 code 属性
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

// 使用 instanceof 判断是否存在 code 属性
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
```

当我们要判断一个接口中是否存在某属性时，不能使用 `instanceof`。因为接口并不是一个值，不是一个对象。它只是一个在编译时存在的类型，在运行时阶段会被删除。换句话说，`instanceof` 无法在运行时做出判断。

- 此时我们只能用 `typeof` + 类型断言，通过判断是否存在 `code` 属性，来判断传入的参数是不是 `ApiError` 了：

```ts
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
```



## 4 结构类型系统[§](https://ts.xcatliu.com/basics/type-assertion.html#类型断言的限制)

不同的两个类型之间，TypeScript 对比只会比较它们最终的结构，而会忽略它们定义时的关系。

- JavaScript 会比较他们定义时是否存在 prototype 原型链的继承关系。

```ts
// Animal 接口
interface Animal {
    name: string;
}

// Cat 接口
interface Cat {
    name: string;
    run(): void;
}

// tom对象，符合Cat接口
let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};

// animal对象，符合Animal接口，可以让tom直接赋值
let animal: Animal = tom;

// 因为 Animal 接口没有run属性，所以 Ts 会报错。
let anima2: Animal = {
  name: 'Moxy',
  run: () => { console.log('wink') }
}
```



**类型断言的限制**

- **这里原文讲的非常好，全部记录在这里：**

下面我们通过一个简化的例子，来理解类型断言的限制：

```ts
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tom;
```

我们知道，TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。

在上面的例子中，`Cat` 包含了 `Animal` 中的所有属性，除此之外，它还有一个额外的方法 `run`。TypeScript 并不关心 `Cat` 和 `Animal` 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 `Cat extends Animal` 是等价的：

```ts
interface Animal {
    name: string;
}
interface Cat extends Animal {
    run(): void;
}
```

那么也不难理解为什么 `Cat` 类型的 `tom` 可以赋值给 `Animal` 类型的 `animal` 了

- ——就像面向对象编程中我们可以将子类的实例赋值给类型为 **父类的变量**。 ？？？ 这里没看懂，是说父类变量吗。
  - 反过来是不可以的，也就是说不可以用父类的实例赋值给类型为子类的变量。

我们把它换成 TypeScript 中更专业的说法，即：`Animal`  包含(兼容)  `Cat`。

当 `Animal` 包含(兼容) `Cat` 时，它们就可以互相进行类型断言了：

```ts
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}
```

这样的设计其实也很容易就能理解：

- 允许 `animal as Cat` 是因为「父类可以被断言为子类」，这个前面已经学习过了
- 允许 `cat as Animal` 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」

需要注意，这里我们使用了简化的父类子类的关系来表达类型的包含性，而实际上 TypeScript 在判断类型的包含性时这种情况更复杂。

总之，若 `A` 包含 `B`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`。

同理，若 `B` 包含 `A`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`。

所以这也可以换一种说法：

要使得 `A` 能够被断言为 `B`，只需要 `A` 包含 `B` 或 `B` 包含 `A` 即可，这也是为了在类型断言时的安全考虑，毕竟毫无根据的断言是非常危险的。

综上所述：

- 联合类型可以被断言为其中一个类型
- 父类可以被断言为子类
- 任何类型都可以被断言为 any
- any 可以被断言为任何类型
- 要使得 `A` 能够被断言为 `B`，只需要 `A` 包含 `B` 或 `B` 包含 `A` 即可

其实前四种情况都是最后一个的特例。



**双重断言**

既然：

- 任何类型都可以被断言为 any
- any 可以被断言为任何类型

那么我们是不是可以使用双重断言 `as any as Foo` 来将任何一个类型断言为任何另一个类型呢？

```ts
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}
```

在上面的例子中，若直接使用 `cat as Fish` 肯定会报错，因为 `Cat` 和 `Fish` 互相都不包含。

但是若使用双重断言，则可以打破「要使得 `A` 能够被断言为 `B`，只需要 `A` 包含 `B` 或 `B` 包含 `A` 即可」的限制，将任何一个类型断言为任何另一个类型。

若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。

**除非迫不得已，千万别用双重断言。**



**类型断言 vs 类型转换**

类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除。

所以类型断言不是类型转换，它不会真的影响到变量的类型。



**类型断言 vs 类型声明**

**类型断言**：

```ts
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom = animal as Cat;
```

在上面的例子中，由于 `Animal` 包含 `Cat`，故可以将 `animal` 断言为 `Cat` 赋值给 `tom`。



**类型声明**：

但是若直接声明 `tom` 为 `Cat` 类型，则会报错，不允许将 `animal` 赋值为 `Cat` 类型的 `tom`。

```ts
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom: Cat = animal;

// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
```

`Animal` 可以看作是 `Cat` 的父类，当然不能将父类的实例赋值给类型为子类的变量。

深入的讲，它们的核心区别就在于：

- `animal` 断言为 `Cat`，只需要满足 `Animal`  包含 `Cat` 或 `Cat` 包含 `Animal` 即可；
- `animal` 赋值给 `tom`，需要满足 `Cat` 包含 `Animal` 才行；

但是 `Cat` 并不包含 `Animal`。

而在前一个例子中，由于 `getCacheData('tom')` 是 `any` 类型，`any` 包含 `Cat`，`Cat` 也包含 `any`，故

```ts
const tom = getCacheData('tom') as Cat;
```

等价于

```ts
const tom: Cat = getCacheData('tom');
```

知道了它们的核心区别，就知道了类型声明是比类型断言更加严格的。

所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 `as` 语法更加优雅。



## 5 声明文件

把各种声明语句放到一个单独的文件中，这个文件声明文件。

- 声明文件必需以 `.d.ts` 为后缀。
- 一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `jQuery.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `jQuery` 的类型定义了。
- 通常，一个库的声明文件，会官方给提供好。比如 `jQuery` 的声明文件：`npm install @types/jquery --save-dev`



在不同的场景下，声明文件的内容和使用方式会有所区别。

库的使用场景主要有以下几种：

- [全局变量](https://ts.xcatliu.com/basics/declaration-files.html#quan-ju-bian-liang)：通过 `<script>` 标签引入第三方库，注入全局变量
- [npm 包](https://ts.xcatliu.com/basics/declaration-files.html#npm-bao)：通过 `import foo from 'foo'` 导入，符合 ES6 模块规范
- [UMD 库](https://ts.xcatliu.com/basics/declaration-files.html#umd-ku)：既可以通过 `<script>` 标签引入，又可以通过 `import` 导入
- [直接扩展全局变量](https://ts.xcatliu.com/basics/declaration-files.html#zhi-jie-kuo-zhan-quan-ju-bian-liang)：通过 `<script>` 标签引入后，改变一个全局变量的结构
- [在 npm 包或 UMD 库中扩展全局变量](https://ts.xcatliu.com/basics/declaration-files.html#zai-npm-bao-huo-umd-ku-zhong-kuo-zhan-quan-ju-bian-liang)：引用 npm 包或 UMD 库后，改变一个全局变量的结构
- [模块插件](https://ts.xcatliu.com/basics/declaration-files.html#mo-kuai-cha-jian)：通过 `<script>` 或 `import` 导入后，改变另一个模块的结构



### 5.1 全局声明

`declare` 定义的类型只会用于编译时的检查，编译结果中会被删除。

它的目的仅仅是为了让第三方库等引入的全局变量，通过 ts 的编译检查，仅仅是一个声明的作用。

```ts
// 声明语句，用来定义全局变量
// 使第三方的、Ts识别不出的变量/函数/类/枚举等等，顺利通过Ts编译。

// 声明全局变量
declare let xx
declare const xx
declare var jQuery('#foo');
// 编译后：
jQuery('#foo');


// 声明全局函数
declare function jQuery(selector: string): any;


// 声明全局类
declare class Animal {
  name: string;
}


// 声明全局枚举
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}


// 声明全局空间，早期用于模块化
// 现在用于声明一个全局对象
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}


// 嵌套的命名空间
// 如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型
// 比如，jQuery对象内有两个属性：ajax、fn；而fn属性内还有一个extend属性，形成了多层命名空间。
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    namespace fn {
        function extend(object: any): void;
    }
}
// 使用：
jQuery.ajax('/api/get_something');
jQuery.fn.extend({
    check: function() {
        return this.each(function() {
            this.checked = true;
        });
    }
});


// 声明接口和类型，直接使用而不需要用 declare 关键字
interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
// type 和 interface 的效果相同
type xxx



// 通常为了防止全局命名冲突，interface 和 type 的定义会放在 namespace 下，而不是在全局环境直接定义

// src/jQuery.d.ts
declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}

// 在使用时，也要加上全局变量前缀 jQuery
// src/index.ts
let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings);
```



### 5.2 声明的合并

上文的例子中，jQuery 既是一个函数，可以直接被调用 `jQuery('#foo')`，又是一个对象，拥有子属性 `jQuery.ajax()`。那必然需要组合多个声明：

```ts
// src/jQuery.d.ts
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

// src/index.ts
jQuery('#foo');
jQuery.ajax('/api/get_something');
```



更多相关内容，[看这里：声明文件 -- Typescript 入门教程](https://ts.xcatliu.com/basics/declaration-files.html#declare-function)



## 6 定义值 type

“联合” 这个概念，是 ts 对类型进行了限制：

- 联合类型（Union Types）表示取值可以为多种类型中的一种。

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```



而 `type`，是 ts 对变量的值进行了限制：

```ts
//【1】限定变量的取值
// 规定string变量的值只能是以下几种
type EventNames = 'click' | 'scroll' | 'mousemove';
// 规定number变量的值只能是以下几种
type nums = 1 | 2 | 3;

//【2】类别别名
// 通常给代码较长的联合类型定义一个别名，实质上这也是对值的限制，只不过这个“值”是“类别名称”
type Name = string;
type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```



## 7 元组 Tuple

元组和数组形式相同，都是拥有一系列成员的集合。

上文提到，ts 统一规定了数组必须是相同的成员：

```ts
// 两种方式都规定了 fibonaccil 数组的成员只能是 number
let fibonacci1: number[] = [1, 1, 2, 3, 5];
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];
```



而元组则是更为细致，对数组中每一个成员的类型都要做出规定：

```ts
let x: [string, number] = ['Tom', 25];
// 或
let x: [string, number]
x = ['hello', 10]; // OK 
x = ['hello', 10,10]; // Error 
x = [10, 'hello']; // Error

// 这样是不允许的，如果对元组类型的变量整体进行初始化时，必须全部赋值
let tom: [string, number];
tom = ['Tom'];
// Property '1' is missing in type '[string]' but required in type '[string, number]'.
```

**越界的元素** 

当我们定义了两个成员的类型，且 **全部添加完毕**。此时如果要再添加一个成员，它的类型会被限制为元组中全部已定义类型的联合类型：

```ts
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);

// Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

**因此，使用元祖可以确定元素数据类型，但不要超出范围**，元祖的成员如果超出定义范围，变脱离管控，不能保证其类型。



## 8 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

有点类似：规定 string 变量的值只能是以下几种

```ts
type EventNames = 'click' | 'scroll' | 'mousemove';
```

规定变量的值：

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
// 形成了 index 和 value 的一一对应
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

事实上，上面的例子会被编译为：

```js
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

我们也可以给枚举项手动赋值：

```ts
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

- 上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。

**常数枚举**

常数枚举是使用 `const enum` 定义的枚举类型：

```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

上例的编译结果是：

```js
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```



## 9 类

### 9.1 类的概念[§](https://ts.xcatliu.com/advanced/class.html#类的概念)

虽然 JavaScript 中有类的概念，但是可能大多数 JavaScript 程序员并不是非常熟悉类，这里对类相关的概念做一个简单的介绍。

- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 `new` 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat` 和 `Dog` 都继承自 `Animal`，但是分别实现了自己的 `eat` 方法。此时针对某一个实例，我们无需了解它是 `Cat` 还是 `Dog`，就可以直接调用 `eat` 方法，程序会自动判断出来应该如何执行 `eat`
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

看到了类，看完之后补充一下类似 keyof、infer、extends、Record、ReturnType 等的相关知识。



### 9.2 ES7 中类的用法[§](https://ts.xcatliu.com/advanced/class.html#es7-中类的用法)

ES7 中有一些关于类的提案，TypeScript 也实现了它们，这里做一个简单的介绍。

**1 实例属性[§](https://ts.xcatliu.com/advanced/class.html#实例属性)**

ES6 中实例的属性只能通过构造函数中的 `this.xxx` 来定义，ES7 提案中可以直接在类里面定义：

```js
class Animal {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let a = new Animal();
console.log(a.name); // Jack
```

**2 静态属性[§](https://ts.xcatliu.com/advanced/class.html#静态属性)**

ES7 提案中，可以使用 `static` 定义一个静态属性：

```js
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```



### 9.3 Ts 类的用法[§](https://ts.xcatliu.com/advanced/class.html#typescript-中类的用法)

**public private 和 protected[§](https://ts.xcatliu.com/advanced/class.html#public-private-和-protected)**

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、 `protected` 和 `private`。



属性的 `public`、 `protected` 和 `private`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的；
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的；
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问。

```ts
class Animal {
  public name;   	// 均可访问
  protected age;	// 仅类内部 + 子类内部可访问
  private class;	// 仅类内部可访问
  public constructor(name, age, class) {
    this.name = name;
    this.age = age;
    this.class = class;
  }  
}
```

```ts
// protected 保护的变量，只能在本类内部访问
class Animal {
  private name;
  public constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  // console.log(this.name)   // Property 'name' is private and only accessible within class 'Animal'.
  														// 不能在子类访问
}

let a = new Cat('cat');
a.name;  											// Property 'name' is private and only accessible within class 'Animal'.(2341)
															// 不能在外部访问
```



构造函数的 `public`、 `protected` 和 `private`

- 当构造函数修饰为 `protected` 时，该类只允许被继承，不可实例化；

- 当构造函数修饰为 `private` 时，该类不允许被继承、不可实例化。

```ts
// protected
class Animal {
protected constructor(name) {
    this.name = name;
  }  
}

// private
class Car {
private constructor(name) {
    this.name = name;
  }  
}
```

**参数属性**

修饰符和 `readonly` 可以在构造函数的参数部分简写：

```ts
class Animal {
  // public name: string;
  public constructor(public name) {
    // this.name = name;
  }
}
// 这样就不需要提前声明，和不需要 this.name = name 属性初始化赋值两步操作了。
```



**readonly[§**](https://ts.xcatliu.com/advanced/class.html#readonly)

只读属性关键字，只允许出现在属性声明、索引签名、构造函数中。

- 注意如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面。

```ts
class Animal {
  public constructor(public readonly name) {
  }
}
```



**抽象类**

`abstract` 用于定义抽象类和其中的抽象方法。

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('Jack');
// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```

特点：

1. 抽象类不允许被实例化；
2. 抽象类中的方法必须被子类实现；



**类的类型**

形式类似抽象类

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```



没有记录完整，https://ts.xcatliu.com/advanced/class-and-interfaces.html 中，以下章节尚未记录：

- 类的后半部分、类与接口、范型、声明合并。整体难度不大，细节有一些，有空可以再合并起来。



## 10 泛型

**当定义函数或者类时，遇到类型不明确时可以使用泛型**。这种用 `<X>` 包裹起来的类型声明，是 TS 中的“泛型”。理论上是可以使用任意单词，常常会有一些约定。

- state -> S -> 约定表示某种 “数据”
- type -> T -> 约定表示某种 “类型”
- props -> P -> 约定表示 “属性传值对应的props”
- initial -> I -> 约定表示某个 “初始值”



**定义多个参数**：

- typescript 给我们自动推断出输入、返回的类型

```tsx
function getValue<T, U>(arg:[T,U]):[T,U] {
  return arg;
}

// 使用
const str = getValue(['树哥', 18]);
```

![截屏2022-08-17 12.18.16](images/Typescript.assets/%E6%88%AA%E5%B1%8F2022-08-17%2012.18.16.png)



**给泛型定义别名**

```tsx
// Cart
type Cart<T> = { list: T[] } | T[];
let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = [1];
```



**给泛型定义默认值**

类似 js 里函数默认参数，当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

```tsx
// T = string，默认参数为 string
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```



### 10.1 泛型约束

**可以使用 `extends` 关键字来对泛型进行约束**。

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

```tsx
function getLength<T>(arg:T):T  {
  console.log(arg.length); // 报错，不能调用 length 属性
}
```

泛型 T 不一定包含属性 length，如果想让 getLength 这个函数只允许传入包含 length 属性的变量：

```tsx
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg:T):T  {
  console.log(arg.length); 
  return arg;
}

// test
const str = getLength('why')
const arr = getLength([1,2,3])
const obj = getLength({ length: 5 })
```



### 10.2 范型接口 / 类

在定义接口的时候指定泛型

```tsx
interface KeyValue<T,U> {
  key: T;
  value: U;
}

const person1:KeyValue<string,number> = {
  key: '树哥',
  value: 18
}
const person2:KeyValue<number,string> = {
  key: 20,
  value: '张麻子'
}
```

定义类的时候：

```js
class Test<T> {
  value: T;
  add: (x: T, y: T) => T;
}

let myTest = new Test<number>();
myTest.value = 0;
myTest.add = function (x, y) {
  return x + y;
};
```



### 10.3 内置工具

**从现有类型 / 接口中创建新的类型**

1. Required：将类型的所有属性变成 **必选**。
1. Partial：将所有属性转换为 **可选**。

```tsx
interface Person {
  name: string,
  age?: number,
  hobby?: string[]
}

// 全员必选
const user: Required<Person> = {
  name: "ninjee",
  age: 18,
  hobby: ["code"]
}

// 全员可选
type User = Partial<Person>
// 编译正确
const shuge: User = {
  name:'ninjee';
} 
```

3. `Exclude<T, U>` ：将某个类型中属于另一个的 **类型** 移除掉，剩余的属性构成新的类型
4. `Extract<T,U>`：和 exclude 相反，从 T 中提取出 U。

```tsx
// 剔除
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// 提取
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () =>void
```

5. `Readonly`：相当于转变为 const，把数组、对象的属性转换为只读，不能被重新赋值。
6. `Record<K extends keyof any, T>`：将 K 中所有的属性的值转化为 T 类型。

```js
// Readonly
let p: Readonly<Person> = {
  name: "hello",
  age: 10,
  gender: "male",
};
p.age = 11; // error  Cannot assign to 'age' because it is a read-only property.

// Record
type Property = 'key1'|'key2'
type Person = Record<Property, string>;

const p: Person = {
  key1: "hello 啊",
  key2: "树哥",
};
```

7. Pick：从某个类型中挑出一些 **属性**
8. Omit：与 Pick 相反，`Omit<T,K>` 从 T 中剔除 K 属性，然后返回剩余的属性集合。

```js
type Person = {
  name: string;
  age:number;
  gender:string
}

// Pick
type P1 = Pick<Person, "name" | "age">; // { name: string; age: number; }

const user:P1={
  name:'树哥',
  age:18
}

// Omit
type P2 = Omit<Person, "age" | "gender">
const user:P2  = {
  name: '树哥'
}
```

9. NonNullable：去除类型中的 `null` 和 `undefined`
10. ReturnType：得到一个函数的返回值类型
11. Parameters：获得函数的参数类型所组成的元组类型。
12. InstanceType：返回构造函数类型T的实例类型



## 11 常用

问题：常用的接口管理：

常用：

- Required / Partial：必选、可选转换。
- Pick / Omit：从原类型中挑选部分属性 / 剔除部分属性。
- extends / `&`：拓展类型 / 接口

```tsx
//【1】拓展类型 / 接口
// 扩展接口 extends
interface Animal{ name: string }
interface Bear extends Animal{ honey: boolean }
//声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
const bear: Bear = {
    name:'winie',
    honey:true
}

// 扩展类型：&
type Animal = { name:string }
// Animal 扩展类型
type Bear = Animal & { honey:boolean }
const bear: Bear = {
  name:'winie',
  honey:true
}

//【2】从原类型中挑选部分属性 / 剔除部分属性
type Person = {
  name: string;
  age:number;
  gender:string
}

// 挑选 Pick
type P1 = Pick<Person, "name" | "age">;

const user: P1 = {
  name:'ninjee',
  age:18
}

// 剔除 Omit
type P2 = Omit<Person, "age" | "gender">
const user: P2 = {
  name: 'ninjee'
}
```





=== todo =============

interface 和 type 的区别是什么


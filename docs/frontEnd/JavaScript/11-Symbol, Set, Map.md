---
title: 11-Symbol, Set, Map
sidebar_position: 11
date: 2022-07-28
tags: [JavaScript]
---



## 1 Symbol

为什么要引入 Symbol：

在ES6之前，对象的属性名都是字符串形式，那么很容易造成属性名的冲突； 

- 如，在某个外来对象中添加一个新属性，但是我们在不确定它原来内部有什么内容的情况下，很容易造成命名冲突，从而覆盖掉它内部的某个属性； 
- 如，手写 js 中的 apply、call、bind 实现时，要添加一个 fn 属性，如果它内部原来已经有了 fn 属性就会发生覆盖；
- 如，开发中使用混入，如果混入的多个对象间出现了同名属性，必然有一个会被覆盖掉；



Symbol 用来生成一个 **独一无二的值**。 

- **独一无二**。Symbol 每一次创建，都会创建不同的值，不存在相同。
- **对象属性名**。Symbol 值是通过 Symbol 函数来生成的，生成后可以作为属性名。
- **描述符**。（ES2019）在创建 Symbol 值的时候传入一个描述 description。
  - 相当于：`toString()`

- **方括号读取**。用方括号获取 Symbol 对象 `obj[s1]`。

```js
// 1.Symbol 的独一无二
const s1 = Symbol();
const s2 = Symbol();
const s4 = Symbol();

console.log(s1 === s2)  // false

// 2. Symbol 有 description
const s3 = Symbol("es2019");
console.log(s3.description)  // es2019

// 3. Symbol 作为 key，用 [方括号]
// 3.1 字面量
const obj = {
  [s1]: "s111",
  [s2]: "s222"
}

// 3.2 新增属性
obj[s3] = "s333";

// 3.3 特性定义
Object.defineProperty(obj, s4, {  // 这里的s4, 如果是string要加引号
  enumerable: true,
  configurable: true,
  writable: true,
  value: "s444"
})

// 3.3 读取Symbol
console.log(obj[s1], obj[s2], obj[s3], obj[s4])
// s111 s222 s333 s444
```

### 1.1 属性的遍历

**Symbol 不可常规遍历**。

- Symbol 作为属性名，遍历对象的时候，该属性不会出现在 `for...in`、`for...of` 循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。

Symbol 的遍历方式：

- `Object.getOwnPropertySymbols()`：可以遍历所有 Symbol；
- `Reflect.ownKeys()` ：可以遍历所有类型的键名（Symbol，String）；

```js
const s1 = Symbol();
const s2 = Symbol('description2');
const s3 = Symbol('description3');
const obj = {
  [s1]: "val-1",
  [s2]: "val-2",
  [s3]: "val-3",
  s4: 'string'
}

// 4.1 常规API无法遍历 symbol
console.log(Object.keys(obj)) // ['s4']
console.log(Object.getOwnPropertyNames(obj)) // ['s4']

// 4.2 只遍历symbol
const sKeys = Object.getOwnPropertySymbols(obj);
// (3) [Symbol(), Symbol(description2), Symbol(description3)]
for (const sKey of sKeys) {
  console.log(obj[sKey]);
	// val-1 val-2 val-3
}

// 4.3 遍历全部属性
const keys = Reflect.ownKeys(obj);
for (const key of keys) {
  console.log(obj[key]); 
  // string val-1 val-2 val-3
}
```



### 1.2 Symbol.for / .keyFor

用于创建相同的 Symbol 和 查找 Symbol。

1. `Symbol.for(key)`。
   - 参数：Symbol 的描述符。
   - 作用：找到并返回 **描述符相同** 的 Symbol。

2. `Symbol.keyFor(symbol)`。
   - 参数：Symbol (引用)。
   - 找到并返回 **变量名相同** 的 Symbol 描述符。

```js
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb);  // true

const key = Symbol.keyFor(sa);
console.log(key);		 // aaa 返回描述符
const sc = Symbol.for(key);
console.log(sa === sc);  	// true
```

更多补充：ES6 相关笔记

### 1.3 内置的 Symbol “值”

当 ES6 版本以后更新了 Symbol 时，Js 内置对象中许多固定的内部属性和方法都采用 Symbol 来定义。这些属性和方法：

- 都拥有固定的 Symbol 描述符。

- 为了规范命名空间， 全部放在 Symbol 对象下，采用 `[Symbol.xx]` 的方式可以找到他们。



#### Symbol.iterator

指向该对象的 iterator 迭代器。

```javascript
const person = {}
person[Symbol.iterator] = function*() {
  yield 1
  yield 2
  yield 3
}

[...person]   // (3) [1, 2, 3]
// 或：
for(let value of person){
    console.log(value)
}
// 1
// 2
// 3
```



#### 一、字符串/对象 API

Symbol.match、Symbol.replace、Symbol.search、Symbol.split

实际上就是对应的 String 字符串中的方法。个人认为，多设计一个 Symbol 的目的，就是为了可以方便的在一个新建的实例对象中 “覆盖 / 重写” 该方法。



**(1) Symbol.match**

`match()` ：可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。

作用：指向一个函数。调用时，需要一个String实例来调用。`str.match(Obj)`，"str"最终会作为参数，传递给match 指向的那个函数。在对象添加了Symbol.match属性后，就会有两个调用match的方式：

- String 实例：调用字符串对象的 `prototype.match()` 方法。
- 对象实例：调用对象的 `[Symbol.match]()` 方法。

参数：实例对象，里面保存着Symbol.match属性。

返回：函数的返回值。

```javascript
class Person {
	[Symbol.match](value){
		return '执行该方法：' + value
	}
}
let p = new Person()

'value'.match(p)   // "执行该方法：value"
// 相当于
p[Symbol.match]('value')  // "执行该方法：value"


// 下面两个调用，效果是一样的
'str'.prototype.match(newObj) 
newObj[Symbol.match]('str')

//如果采用正则匹配 ：regexp
String.prototype.match(regexp)
regexp[Symbol.match](this)
```



**(2) Symbol.replace**

`replace()` ：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

Symbol.replace 的两个调用方法：

- 字符串实例：调用字符串对象的`prototype.replace()`方法。
- 对象实例：调用实例对象的`[Symbol.replace](this, )` 方法。

作用：指向一个方法。方式与上文 match 大致相同。

参数1： 实例对象。
参数2：

返回：方法的返回值。

```javascript
// 下面两个调用，效果是一样的
'str'.prototype.replace(searchValue, replaceValue)
searchValue[Symbol.replace](this, replaceValue)
```



**(3) Symbol.search**

search() ：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

```javascript
// 下面两个调用，效果是一样的
String.prototype.search(regexp)
regexp[Symbol.search](this)
```



**(4) Symbol.split**

```javascript
// 下面两个调用，效果是一样的
String.prototype.split(separator, limit)
separator[Symbol.split](this, limit)
```



#### 二、原型链 / 继承 API

(1) Symbol.hasInstance**

指向一个内部方法。当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，调用该方法。

下例中，调用 instanceof 函数，最终调用了 Person类中的，Symbol.hasInstance。

函数的返回：布尔值，true 表示 instanceof 判断类相同，false 表示不相同。

```javascript
// 例子一
class Person {
  [Symbol.hasInstance](value) {
    return value instanceof Array;
  }
}

let person1 = new Person()
[1,2,3] instanceof person1   // true

// 例子二
// class + static 类方式
class DoubleNumber {
  static [Symbol.hasInstance](value) {
    return Number(value) % 2 === 0    // 判断是否是 2 的倍数
    // true，表示是2的倍数，
  }
}

// 等同于： const 方式
const DoubleNumber2 = {
  [Symbol.hasInstance](value) {
    return Number(value) % 2 === 0
  }
}

1 instanceof DoubleNumber  // false 不能被2整除
2 instanceof DoubleNumber  // true 可以被2整除
```

**(2) Symbol.species**

指向一个构造函数。创建衍生对象时，调用该属性中的函数。`Symbol.species`是一个 getter 函数。

例子中，Father类，继承 Array数组。然后 a 是 Father 的实例化，b 是 a 的衍生对象。

a 和 b 既是 Father 的实例，也是 Array 的实例。

```javascript
class Father extends Array { }

let a = new Father(1,2,3)   // Father(3) [1, 2, 3]
let b = a.map(x => x*2)     // Father(3) [2, 4, 6]

b instanceof Father  // true
b instanceof Array   // true
```



如果给 Father 类中，设置 Symbol.species 指向调用方法。该方法是一个构造函数，衍生对象在被创建时，会调用该方法。

定义`Symbol.species`属性采用`get`取值器。

```javascript
// 默认的`Symbol.species`属性的写法。
static get [Symbol.species]() {
  return this;
}

// 对上例的Father设置一个衍生对象调用方法
class Father extends Array { 
	static get [Symbol.species]() { return Array }  // 调用Array创建衍生对象，而不是 Father
}

let a = new Father(1,2,3)   // Father(3) [1, 2, 3]
let b = a.map(x => x*2)     // Father(3) [2, 4, 6]

// b 是被Array创建的
b instanceof Father // false
b instanceof Array // true

// a 不受影响
a instanceof Father // true
a instanceof Array // true
```

**Promise**

Promise对象，会返回一个新的Promise实例。如果调用 then方法，会继续返回一个Promise实例。

```javascript
class T1 extends Promise {}

let a = new T1 (r => r)
let b = a.then (r => r)

a === b  // false 两个Promise实例不相等
b instanceof T1
b instanceof Promise  // 可以看到，b是由T1的构造函数创建的。
```



如果希望 then() 方法返回的Promise实例，是由 Promise构造函数创建的，而不是 T1，需要用到 Symbol.species。创建一个 getter函数。

```javascript
class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}

let a = new T2(r => r)
let b = a.then(v => v) 
b instanceof T2 // false
b instanceof Promise // true
```



#### 三、原始值/打印值 API

**(1) Symbol.toPrimitive**

作用：执行一个方法。该方法的触发：该对象被转为原始类型的值。

参数：字符串参数，表示当前的运算模式：
	Number：转成数值
	String：转成字符串
	Default：数值，字符串都可转

返回：该对象对应的原始类型值。



**(2) Symbol.toStringTag**

作用：指向一个方法。在某个对象上调用 `Object.prototype.toString` 时，如果该属性存在，则：

- 调用该属性指向的方法；
- 该方法在执行后，return 的 '字符串' 就是该对象的 **类型**。

也就是说，这个属性可以用来定制 `[object Object]`、`[object Array]`中`object` 后面的那个字符串。

```js
// 方法一
const obj = {};
obj[Symbol.toStringTag] = 'func';
obj.toString()   // "[object func]"

// 方法二
class Person {
   get [Symbol.toStringTag]() {
    return 'func';
  }
}

const p = new Person();
p.toString(); 					// "[object func]"
p[Symbol.toStringTag];	//  'func'
```



#### 四、其他 API

**(1) Symbol.isConcatSpreadable**

> Spreadable  a. 可扩展的，可传播的
>

该属性是一个布尔值。表示对象用于`Array.prototype.concat()`时，是否可以展开。

如果是数组：默认**支持展开**，值为 undefined，如果等于true，也是支持展开。
如果是类数组对象：默认**不支持展开**。



**回顾 concat()**

作用：合并两个/多个数组。

参数：要合并的数组。

返回：新数组，合并后的数组（浅拷贝，只拷贝值）。

问题：合并的数组/类数组对象中，会有是作为整体合并，还是展开为一个个元素再合并的问题。

```js
let arr1 = ['a','b','c']
let arr2 = [1,2,3]
let arr3 = ['x','y','z']

let allArr = arr1.concat(arr2, arr3)
// (9) ["a", "b", "c", 1, 2, 3, "x", "y", "z"]

```



如果是数组：默认**支持展开**，值为 undefined。如果等于true，也是支持展开。

```js
let arr1 = ['a','b','c']
let arr2 = [1,2,3]
let arr3 = ['x','y','z']

arr1[Symbol.isConcatSpreadable]  // 数组默认：undefined
let allArr1 = arr1.concat(arr2, arr3)
// (9) ["a", "b", "c", 1, 2, 3, "x", "y", "z"]

arr2[Symbol.isConcatSpreadable] = false // 无法展开
let allArr2 = arr1.concat(arr2, arr3)
// (7) ["a", "b", "c", Array(3), "x", "y", "z"]
//                    [1, 2, 3]
```



如果是类数组对象：默认**不支持展开**。

```js
let arr1 = [1,2,3]
let arr2 = [6,7,8]
let obj = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
}
arr1.concat(obj, arr2)    // 默认不支持展开
//(7) [1, 2, 3, {…}, 6, 7, 8]
//              {0: "a", 1: "b", 2: "c", length: 3}

obj[Symbol.isConcatSpreadable] = true
arr1.concat(obj, arr2)  // 可以展开了
// (9) [1, 2, 3, "a", "b", "c", 6, 7, 8]
```



**(2) Symbol.unscopables**

与 with 相关，感觉用不到，没细看。



## 2. Set  & Map

在 es5 时代，有两种存储数据的结构：数组、对象。

- 他们底层是用 hash table 实现的。

es6 新增了四个数据结构：

- Set、Map、WeakSet、WeakMap

### 2.1 Set

- **只有值**。类数组的数据结构，只有 value，没有 key。
- **值为一**。成员的值都唯一，也就是说 **没有重复的值** 。
  - Set 常用的功能：**数组去重**。
- **可遍历**。Set 是可遍历的。

```js
// 初始化：可以接受具有Iterator接口的数据结构
const set = new Set([1,2,3,4,5])
[...set]   // (5)[1,2,3,4,5]
set.size   // 5


// 添加：重复的成员不会被添加
set.add([1,2,100])     // Set(6) {1, 2, 3, 4, 5, 100}
[...set]   // [1,2,3,4,5,100]


// 去除数组中重复成员的方法：
// 方法一：
[...new Set([1,2,2,3,3,4])]  //(4) [1, 2, 3, 4]

// 方法二：
function func(array) {
  return array.from(new Set(array))
}
func([1,2,2,3])   //[1,2,3]
// 利用原理：
// 1  new Set() :生成一个Set结构（消除重复成员）;
// 2 Array.from :将Set结构转为数组。
const set = new Set([1,2,2,3]);
const array = Array.from(set)   // [1,2,3]
```



Set 新增数值不发生类型转换： 5 和 “5” 是两个不同的值。

- 判断相等的算法：Same-value-zero equality 类似于 “===”。
  - 不同点： Set 加入值中 NaN 等于自身，更符合逻辑；
    严格相等运算符 NaN 不等于自身：

```js
NaN === NaN   // false

// 可以看到，不会重复添加两个NaN，说明内部判断 NaN相等
let set = new Set([1, NaN, 2])
set.add(NaN, 3)       // Set(3) {1, NaN, 2}

// add添加，参数如果带[方括号]，会直接变成添加该数组：
set.add([NaN, 3])     // Set(3) {1, NaN, [NaN, 3]}
```



#### Set 的实例属性和方法

实例属性：

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

实例方法：

分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。

四个操作方法：

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

四个遍历方法：

- `Set.prototype.keys()`：返回 Key 的遍历器
- `Set.prototype.values()`：返回 Value 的遍历器。是它的默认遍历器
- `Set.prototype.entries()`：返回 `[K, V]` 的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员，无返回值。

```js
let set = new Set(['red', 'green', 'yellow']);
for(let v of set.keys()) {
  console.log(v);
}
// red 	
// green	 
// yellow


for(let v of set.entries()) {
  console.log(v);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]


// 默认遍历器，就是values()。
Set.prototype[Symbol.iterator] === Set.prototype.values; // true
// 所以，可以直接用 for of 遍历，不需要 values()
for(let v of set) {
  console.log(v)
}


// forEach()，参数固定：值、键、对象本身
set.forEach((value, key, mySet) => 
  console.log(key + " : " + value ));
// red : red
// green : green
// yellow : yellow


// ...扩展运算符内部使用for...of循环，所以也可以用于Set结构
[...set]  // red   green    yellow
// ...遍历循环，相当于一个数组了
[...set] instanceof Array      //true
```



数组的 `map` 和 `filter` 方法也可以间接用于 Set ，实现 并集、交集、差集：

- `filter()`: 规定一个条件。符合条件的元素将被返回，组成新数组。
- `map()` : 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

```js
let a = new Set([1,2,3])
let b = new Sete([2,3,4])

// 并集
let union = new Set([...a, ...b])
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))  // 从 a 中，依次判断是否含有b成员
// Set {2, 3}

// 差集：a 相对于 b 的差集
let difference = new Set([...a].filter(x => !b.has(x)));
```



### 2.2 WeakSet

特点：类似 Set 结构，不重复的值的集合。

不同的是，**弱引用** 导致：

1. **对象约束**。成员只能是 **对象**（不能是 Number、Boolean、Symbol、String）；
2. **垃圾回收**。WeakSet 内的成员对象是 **弱引用**，即垃圾回收机制：**不考虑对WeakSet的持有，对垃圾回收的影响**。换句话说，就是如果某个对象其他方式（非 Weak）的引用次数为 0 后，就会被垃圾回收，WeakSet / WeakMap 的引用不在考虑范围内。
3. **无法遍历**。WeakSet 不能遍历，因为成员是弱引用，随时都可能消失。WeakSet没有 size 属性，没有 forEach 属性。
4. **无法清空**。没有 clear 方法。

```javascript
// 创建 WeakSet数据结构
const ws = new WeakSet();

// 构造函数的参数：一个数组/类数组对象，成员必须是非基本数据类型（对象、数组等等）
const a = [[1,2],[3,4]];
const ws = new WeakSet(a);
// WeakSet {Array(2), Array(2)} 
// 可以看到，a 数组的成员被展开后，加入了 ws。

const b = [1,2,3,4];
const ws2 = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set
// 类型错误：b数组的成员都是数字，所以不可以。

const c = ['happy', 'every', 'day'];
const ws3 = new WeakSet(c);
// Uncaught TypeError: Invalid value used in weak set
// 类型错误：c数组的成员都是字符串，不可以。

const d = [['happy', 'every'], ['day', '!']];
const ws4 = new WeakSet(c);
// WeakSet {Array(2), Array(2)}
// d数组展开后还是两个数组（对象），所以加入到 ws4 种。
```



#### 实例方法

- **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
- **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
- **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

```javascript
class obj1 {}
class obj2 {}
class obj3 {}
const ws = new WeakSet([obj1])  // 创建一个WeakSet数据结构，参数必须是数组、类数组对象。

ws.add(obj2)   // WeakSet {ƒ, ƒ}
ws.add(obj3)   // WeakSet {ƒ, ƒ, ƒ}
ws.has(obj2)   // true
ws.delete(obj2)  // true
ws.has(obj2)     // false
ws.delete(obj2)  // false
```



### 2.3 Map

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构）。用字符串 / Symbol 当作 Key。

Map 数据结构，也是一种 Hash 结构，类似对象，也是 k/v 对组合。不同的是，key 不仅仅是字符串或 symbol，支持多种类型。

- Object 结构：“字符串/Symbol —— 值” 对应
- Map 结构：“值——值” 对应

构造函数： `new Map()`，接受参数：一个数组，数组的成员是多个数组，每个数组成员是`[key, value]` 组合。

- 数组入参时，会自动展开。

```javascript
// 创建
const m = new Map();

// 添加，读取
m.set(person, 'Moxy');
m.get(person);   // "Moxy"

// 判断是否存在，删除
m.has(person);    // true
m.delete(person); // true

m.has(person);    // false
m.has(person);    // false
```

#### 构造函数

构造函数的入参：

```javascript
// 构造函数传入参数创建：
const m = new Map([
  ['name', 'Moxy'],
  ['age', 25],
  ['man', true],
])
// Map(3) {"name" => "Moxy", "age" => 25, "man" => true}

// 背后的逻辑是：
const items = [
  ['name', 'Moxy'],
  ['age', 25],
  ['man', true],  
]
const map = new Map();
items.forEach(([key, value]) => map.set(key,value));
// Map(3) {"name" => "Moxy", "age" => 25, "man" => true}

// 注意：使用forEach循环赋值时，注意要添加[方括号]解构：[key, value] 
```

> 事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个**双元素数组**的数据结构（详见《Iterator》一章）都可以当作`Map`构造函数的参数。这就是说，`Set`、`Map`，都可以用来生成新的 Map。

```javascript
const set = new Set([
  ['name', 'Moxy'],
  ['age', 25],
  ['man', true]
])
const m1 = new Map(set)
// Map(3) {"name" => "Moxy", "age" => 25, "man" => true}
```



#### 要点

- 对同一个键多次赋值，后面的值将覆盖前面的值。
- 只有对同一个对象的引用，Map 结构才将其视为同一个 Key。这一点要非常小心。
- 相反，如果两个内容相同的数组，作为两个 Key 放入 Map 中，因为内存地址的不同，也会判定为两个 Key。

```javascript
// 1. 对同一个键多次赋值，后面的值将覆盖前面的值。
map.set('name', 'Moxy').set('name', 'NJ')
// Map(1) {"name" => "NJ"}

// 2. 只有对同一个对象的引用，Map 结构才将其视为同一个键。
// 如果是基本类型：Boolean、Number、String，不存在地址引用问题；
// 如果面对的是数组、对象等，会发现这样无法读取：
const map = new Map();

map.set(['a'], 555);
map.get(['a'])     // undefined
// 这是因为，['a'] 是一个数组，两个数组的引用地址是完全不相同的，所以无法读取到。
// 必须用同一个变量来引用：
let k1 = ['a']
map.set(k1, 555);
map.get(k1)   // 555

// 3. 如果两个内容相同的数组，作为两个键放入Map中，因为内存地址的不同，也会判定为两个键。
const map = new Map()
map.set(['a'], 555);
map.set(['a'], 666);
map.set(['a'], 777);
map  // Map(3) {["a"] => 555, ["a"] => 666, ["a"] => 777}
```



#### 属性、方法、遍历

Map实例属性：

- `size` 属性：保存Map结构的成员总数。

Map实例方法：

1. `Map.prototype.set(key, value)`

- 作用：给 Map结构中添加成员。
- 参数：key + value
- 返回：添加后的Map。所以可以采用链式写法来添加成员：`map.set(1, 'a').set(2, 'b').set(3, 'c')`

2. `Map.prototype.get(key)`

- 作用：读取 key 对应的 value。找不到返回 undefined；

3. `Map.prototype.has(key)`

- 作用：返回一个布尔值，判断key是否在当前Map实例中；

4. `Map.prototype.delete(key)`

- 作用：删除某个 key。返回 true 成功，false 失败；

5. `Map.prototype.clear()`

- 作用：删除所有成员，无返回值。

Map的遍历方法：

Map 结构拥有：3 个遍历器生成函数 + 1 个遍历方法。遍历顺序 ===  插入顺序。

- `Map.prototype.keys()`：返回 key 的遍历器。
- `Map.prototype.values()`：返回 value 的遍历器。
- `Map.prototype.entries()`：返回 [ key , value] 的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员，并依次执行回调函数。
  - 两个参数：回调函数 + 函数中this指向的对象
    - 回调函数：三个参数（key，value，map 本身）
    - this指向的对象：引用，指向一个对象。在回调函数中使用this，会执行这个对象。

```javascript
const map = new Map([
  [1, 'aaa'],
  [2, 'bbb'],
  [3, 'ccc'],
  [4, 'ddd'],
])

// map.entries()
for (let item of map.entries()) {
  console.log(item);
}
// (2) [1, "aaa"]
// (2) [2, "bbb"]
// (2) [3, "ccc"]
// (2) [4, "ddd"]

// 等同于：map.entries()，再次复习：Map成员是双值对的数组
for (let [key, value] of map) {
  console.log(key, value);
}
// 因为Map的默认遍历器接口，就是 entries()
map[Symbol.iterator] === map.entries  // true


// forEach方法：value、key、map 三个参数，可以省略。
map.forEach((value, key, map) => {
  console.log("Key: %s, Value: %s", key, value);
});
// Key: 1, Value: aaa
// Key: 2, Value: bbb
// Key: 3, Value: ccc
// Key: 4, Value: ddd

// forEach方法：第二个参数传入一个对象，可以绑定this
// 此时需要注意：不可以使用箭头函数，会出现 this 的固定定义问题（this在箭头函数是定义时确定的）
let person = { name : "moxy"}
map.forEach(function(value, key, map) {
  console.log("Name: %s, Key: %s, Value: %s",this.name, key, value);
}, person);
// Name: moxy, Key: 1, Value: aaa
// Name: moxy, Key: 2, Value: bbb
// Name: moxy, Key: 3, Value: ccc
// Name: moxy, Key: 4, Value: ddd
```



#### 数组转化

```javascript
// 使用 [...扩展运算符]
[...map.keys()]
// (4) [1, 2, 3, 4]
[...map.values()]
// (4) ["aaa", "bbb", "ccc", "ddd"]
[...map.entries()]
// (4) [Array(2), Array(2), Array(2), Array(2)]
// (4) [[1, "aaa"], [2, "bbb"], [3, "ccc"], [4, "ddd"]]
[...map]   // 默认遍历器，调用：entries()
// (4) [[1, "aaa"], [2, "bbb"], [3, "ccc"], [4, "ddd"]]

```

转换为数组后，配合 `map()` 和 `filter()`，可以实现Map 的遍历和过滤。

- 同 set 结构，略。



### 2.4 WeakMap

`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合。**弱引用**。

补充：JavaScript 的七种数据类型

1. 基本数据类型 / 原始数据类型：Nudefined, Null, String, Boolean, Number, Symbol
2. 引用数据类型 ： Object

不同点，**弱引用** 导致：

1. **对象约束**。`WeakMap`只接受对象（引用数据类型）作为键名（`null`除外）。不支持原始数据类型（其他 6 种）；
2. **回收机制**。`WeakMap`的键名所指向的对象，不计入垃圾回收机制。（和WeakSet相同，可以看看WeakSet）；
3. **无法遍历**。没有遍历操作（即没有`keys()`、`values()`和`entries()`方法），也没有`size`属性；
4. **无法清空**。不支持 `clear` 方法。

3 和 4，都是因为 WeakMap 是 **弱引用**，遍历会具有不确定性，无法准确的给出 “当前时间点” 一定存在的成员。（这一点和 MySQL 数据库事务的安全问题很相似）。

`WeakMap`只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。

#### WeakMap 的应用

Vue3 响应式原理，使用了 WeakMap 数据结构。

```js
// 应用场景(vue3响应式原理)
const obj1 = {
  name: "why",
  age: 18,
};

function obj1NameFn1() {
  console.log("obj1NameFn1被执行");
}

function obj1NameFn2() {
  console.log("obj1NameFn2被执行");
}

function obj1AgeFn1() {
  console.log("obj1AgeFn1");
}

function obj1AgeFn2() {
  console.log("obj1AgeFn2");
}

const obj2 = {
  name: "kobe",
  height: 1.88,
  address: "广州市",
};

function obj2NameFn1() {
  console.log("obj1NameFn1被执行");
}

function obj2NameFn2() {
  console.log("obj1NameFn2被执行");
}

// 1.创建WeakMap
const weakMap = new WeakMap();

// 2.收集依赖结构
// 2.1.对obj1收集的数据结构
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
weakMap.set(obj1, obj1Map);

// 2.2.对obj2收集的数据结构
const obj2Map = new Map();
obj2Map.set("name", [obj2NameFn1, obj2NameFn2]);
weakMap.set(obj2, obj2Map);

// 3.如果obj1.name发生了改变
// 监听触发器：Proxy/Object.defineProperty
obj1.name = "james";
const targetMap = weakMap.get(obj1);   // 通过weakMap，找到对应Map，Map存储属性名和对应的依赖函数
const fns = targetMap.get("name");		 // 找到Map中，找到依赖函数，数组形式
fns.forEach((item) => item());         // 遍历数组，执行依赖
// obj1NameFn1被执行
// obj1NameFn2被执行
```

为什么要用 WeakMap？

利用 WeakMap 收集存在依赖的对象，当对象中属性发生改变，就通过 WeakMap 找到这个对象对应的依赖 Map，从而触发对应的回调函数。

如果 obj1 使用完毕，设置为 `obj1 = null` 期望销毁 obj1。此时用 weakMap 的好处：

- 因为是弱引用，所以当 obj1 想要销毁时，不需要考虑 WeakMap 的依赖数据结构，直接销毁即可。




# 3 函数

JavaScript 函数有两个不同的内部方法：[[Call]] 和 [[Construct]]。当通过 new 关键字调用函数时，执行的是 [[Construct]] 函数，它负责创建一个通常被称作实例的新对象，然后再执行函数体，讲 this 绑定到实例上：如果不通过 new 关键字调用函数，则执行 [[Call]] 函数，从而直接执行代码中的函数体。

具有 [[Construct]] 方法的函数被统称为构造函数。

—— 第三章《函数》P54



#### 元属性（Metaproperty）new.target

为了解决判断函数是否通过 new 关键字调用的问题，ECMAScript6 引入了 new.target 这个元属性。

元属性是指非对象的属性，其可以提供非对象目标的补充信息（例如 new）。当调用函数的 [[Construct]] 方法时，new.target 被赋值为 new 操作符的目标，通常是新创建对象实例，也就是函数体内 this 的构造函数；如果调用 [[Call]] 方法，则 new.target 的值为 undefined。

有了这个元属性，可以通过检查 new.target 是否被定义过，从而安全低检测一个函数是否是通过 new 关键字调用的，就像这样：

```js
function Person(name) {
    if (typeof new.target !== "undefined") {
        this.name = name;
    } else {
        throw new Error("必须通过 new 关键字来调用 Person");
    }
}

let person = new Person("Moxy");    // 
let person2 = Person.call(person, "Moxy")  // 报错，没有用 new，new.target值为 undefined
```

—— 第三章《函数》P55



# 4 扩展对象的功能性

### 对象类别

对象的主要类别如下：

- 普通对象 Ordinary。具有 JavaScript 对象所有的默认内部行为。
- 特异对象 Exotic。具有某些与默认行为不符的内部行为。
- 标准对象 Standard。ECMAScript 6 规范中定义的对象，例如 Array、Date等。
  - 标准对象既有可能是普通对象，也可以是特意对象。
- 内建对象。脚本开始执行时，就存在于 JavaScript 执行环境中的对象。所有标准对象都是内建对象。



这是两种划分方式：

- 普通 + 特异
- 内建 + 标准



# 5 解构

解构赋值表达式的值与表达式右侧的值相等，如此一来，再任何可以使用值的地方你都可以使用解构赋值表达式。

想象一下给函数传递参数值的过程：

```js
let node = {
		type: "Identifier",
    	name: "foo"
	},
	type = "Literal",
	name = 5;

function outputInfo(value) {
    console.log(value === node);      // true
}

outputInfo({ type, name} = node);

console.log(type);	// "Identifier"
console.log(name);	// "foo"
```

上面的代码中，参数代码：`outputInfo({type, name} = node);` 做了两件事，可以拆分成两个步骤来看：

1. `{type, name} = node` 是一个解构表达式，
   - 发生了：把 `node.type` 和 `node.name` 赋值到 `type` 和 `name`。
2. 解构表达式完成后，最终该 `{type, name} = node` 算式的值是等于号右边的值，即 `node`。
   - 所以，参数最终会传入 `node` 变量。



```js
let node = {
    type: "Identifier",
    name: "foo"
};

let {type: localType, name: localName} = node;

console.log(localType);		// "Identifier"
console.log(localName);		// "foo"
```

这段代码使用了解构赋值来声明变量 localType 和 localName， 这两个变量分别包含 node.type 和 node.name 属性的值。type: localType 语法的含义是读取 node中，名为 type 的属性并将其值存储再变量 localType 中，这种语法实际上与传统对象字面量的语法相悖，原来的e语法名称在冒号左边，值在右边；现在值在冒号右边，而对象的属性名在左边。

- 所以，单反涉及到解构赋值的表达式，值都是在右边。



**复制数组的方法**

在设计 JavaScript 时，很明显遗漏掉了数组复制的功能。而再 ECMAscript 5 中，开发者们经常使用 concat( ) 方法来克隆数组：

```js
// 在 ECMAScript5中，克隆数组
let colors = { "red", "green", "blue"};
let clonedColors = colors.concat();

console.log(cloneColors);      // "[red,green,blue]"
```






























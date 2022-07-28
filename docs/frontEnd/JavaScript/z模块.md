---
title: 10. 类（ES6）
sidebar_position: 10
date: 2022-07-26
tags: [JavaScript]
---



## 2 Module 模块

即 ES Module。其包含的两个关键词`export` 和 `import `均只能用在最顶层的作用域中。



### 2.1 export 导出

`export` 关键字放在声明的前面。

- `default export` 导出的是这些变量 / 函数的地址（类似指针），而不是它们的值。所以，在一个函数 / 变量被导出后，这个函数 / 变量的结构或值发生了改变，外部也会得到对应的更新。

- `export` 导出的是变量名称（标识符），也就是说当这个变量指向了新的函数，就会导出新的函数。

特点：

1. **不支持双向绑定**，也就是说，不支持对一个导入的模块进行修改，只能读取和使用。
2. 在模块内没有全局作用域。在模块内是一个模块的作用域。
3. 模块内没有用 `export` 标识的变量 / 函数都在莫块作用域内部保持私有，被标识的则会被导出。

#### 1 命名导出

命名导出：导出变量 / 函数时，把标识符名称导出：

```js
// 方式一
export function foo() {...}
export let arr = [1,2,3]
export let a = 42

// 方式二
function foo() {...}
let arr = [1, 2, 3]
let a = 42
export {foo, arr, a}
```

导出时可以重命名：

```js
function foo() {...}
export {foo as bar}
```



#### 2 默认导出

默认导出，把一个特定导出，绑定设置为导入模块时的默认导出。绑定的名称就是 `default`。

- **每个模块定义只能有一个 `default`  默认导出。**

- **只有 `export default` 导出的是具体函数地址，其余 export 都是导出标识符。**

```js
// 情况一: 导出的是具体函数
function foo() {...}
export default foo
                
// 情况二: 导出的是具体函数
export default function foo() {...}

// 情况三: 导出的是foo标识符
function foo() {...}
export { foo as default }
```

`export default ..` 接收一个表达式，导出的是这个表达式返回地址值。

情况一 和 情况二：默认导出的是 `foo` 绑定的那个表达式地址，而不是标识符 `foo`。这意味着如果后续代码把 `foo` 修改引用了其他函数 / 变量，默认导出的依然是最初的那个函数。

- 情况一和情况二，是两种不同的表达方式，通常会使用更简洁的情况二。

情况三：默认导出的是标识符 `foo`，也就是说，后续如果把 `foo` 标识符引用别的函数 / 变量，导出的值也就跟着发生改变，



#### 3 连续导出

连续导出，当从一个模块导入一些函数 / 变量后，可以选择再次将它们导出：

```js
export {foo, bar} from "baz";
export {foo as f, bar as b} from "baz";
export * from "baz";
```



### 2.2 import 导入

导入一个模块 API 的某个特定成员到当前模块的顶层作用域中。

```js
import {foo, bar, baz} from "foo";

// 支持重命名
import {foo as f} from "foo";

// 只有一个导入模块时，省略括号
import foo from "foo";

// 把foo.js 默认导出 和 命名导出 的成员，全部一起导入：
import defaultFoo, {bar, baz as b} from "foo";
// defaultFoo 就是默认导出的成员，此为对这个成员进行命名
```



**命名空间导入 namespace import**

```js
import * as foo from "foo"

// 该方式必须用通配符，不可以像下面这样只导入一部分：
import {bar,baz} as foo from "foo"
```

这段代码的意思是：

1. 把 `foo.js` 文件中，导出的成员全部导入到当前模块中；
2. 把这些成员全部绑定到 `foo` 对象名下。

如果全部导入中，有默认成员，则这个默认成员的名称就是 `default`。比如上例中，该模块中导入的默认成员名称为 `foo.default`。

所有导入的成员是只读的，不可修改，否则会报错：`TypeError!`




































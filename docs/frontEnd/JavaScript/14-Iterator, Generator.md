---
title: 14. Iterator, Generator.md
sidebar_position: 14
date: 2022-07-31
tags: [JavaScript]
---

本文是异步编程（上），内容主要包括：

1. 迭代器 iterator
   - 可迭代对象 iterable object
2. 生成器 generator / yield



## 0 引子

简要介绍异步编程相关的知识点：

### 1 迭代相关

**Iterator**：一个迭代器包含了一个 `next()` 方法，它可以循环迭代出所在对象的所有值。

**iterable object**：当一个对象包含 iterator 迭代器的对象，同时拥有一个  `Symbol.iterator` 方法后，就可以利用 `for...of` 自动，或 `it.next()` 手动迭代。

**generator / yield**： 是一个生成器，通过这个生成器函数，我们可以方便的随时暂停 / 重启一个函数的执行，同时建立了一个和调用者双向传递的通道，可以多次的传入 / 传出值。generator 的实现原理，就是利用了 iterator 迭代器。当生成器函数在 `yield` 处暂停后，会处于暂时挂起状态，其函数本身依然在调用栈中存在。

### 2 异步相关

**promise**：优化了异步编程的形式，传统依赖回调的异步编程，经常会出现回调地狱。采用使用 `promise` 后，就有了 `then` 链，使异步编程的难度得到缓解。

**async / await**：是一个进一步优化的异步编程的形式，它本质是一个 `promise` 和 `p.then()` 的语法糖，优化了 `then` 链的编程方式。可以集中处理 rejected promise、更专注于对 promise 成功回调后的处理。

### 3 迭代 + 异步

promise + generator：实现了 generator 的异步迭代能力。

**async generator**：实质上是 promise + generator 的优化版本。promise 令 generator 拥有了异步迭代的能力。也就是 generator 每次迭代都是异步获取值的，一旦获取到值，就自动的把值返回给调用者。调用者可以利用在 async 环境中的 `for await ...of` 来遍历出 async generator 异步获取的值。



### 4 举例：

需求：模拟向服务器依次发送多个请求。

- 第一次发送：`"why"`，收到信息 `res = "why"`；
- 第二次发送：`res + "aaa"`，收到信息 `res = "whyaaa"`；
- 第三次发送：`res + "bbb"`，收到信息 `res = "whyaaabbb"`；
- 第四次发送：`res + "ccc"`，收到信息 `res = "whyaaabbbccc"`；

请求逻辑：

```js
function requestData(url) {
  // 异步请求的代码会被放入到 executor 中
  return new Promise((resolve, reject) => {
    setTimeout(() => {    // 模拟网络请求
      resolve(url);  			// 模拟受到请求，并返回请求结果
    }, 2000);
  });
}
```

#### 1. promise 回调

- 传统使用会有回调地狱问题。

```js
requestData("why").then((res) => {
  requestData(res + "aaa").then((res) => {
    requestData(res + "bbb").then((res) => {
      console.log(res); // 'whyaaabbb'
    });
  });
});
```

#### 2. promise 链

- promise 的 then 链，采用延迟绑定回调函数的方式，避免了回调地狱。

```js
requestData("why")
  .then((res) => {
  return requestData(res + "aaa");
})
  .then((res) => {
  return requestData(res + "bbb");
})
  .then((res) => {
  console.log(res);  // 'whyaaabbb'
});
```

#### 3. Promise + generator

- 利用生成器可暂停 / 继续函数执行，并实现双向通信的特点，改变 then 链的调用形式。

把 then 调用链封装起来，程序员对业务逻辑的书写更符合直觉。

```js
function* getData() {
  const res1 = yield requestData("why");
  const res2 = yield requestData(res1 + "aaa");
  const res3 = yield requestData(res2 + "bbb");
  const res4 = yield requestData(res3 + "ccc");
  console.log(res4);
}
```

使用 then 调用链的方式：

3.1 如果要手工调用：

```js
const generator = getData();

generator.next().value.then((res) => {
  generator.next(res).value.then((res) => {
    generator.next(res).value.then((res) => {
      generator.next(res);  // 'whyaaabbbccc'
    });
  });
});
```

3.2 通过递归，把重复逻辑封装，实现递归调用：

```js
execGenerator(getData);  // 'whyaaabbbccc'

function execGenerator(genFn) {
  const generator = genFn();
  exec();

  function exec(res) {
    const result = generator.next(res);
    // 遍历完毕，递归结束
    if (result.done) return result.value;

    result.value.then((res) => {
      exec(res); // 递归调用
    });
  }
}
```

3.3 exec 自动化方法，有现成的包：

co，由 TJ 编写的，已经实现了自动化执行。利用 co，程序员只关心业务逻辑（`getData()`）即可。

> TJ 还开发了：
>
> co、n（类似 nvm）
>
> commander（vue cil 使用过）
>
> express（服务器框架）
>
> koa（express 的升级版，另外目前基于 koa 的 egg 也比较流行）

```js
const co = require('co')
co(getData);
```



#### 4. promise + async/await

- ES2017 特性，官方引入了 promise + generator 思路，形成 async/await 结构。

```js
async function getData() {
  const res1 = await requestData("why");
  const res2 = await requestData(res1 + "aaa");
  const res3 = await requestData(res2 + "bbb");
  const res4 = await requestData(res3 + "ccc");
  console.log(res4);
}

getData();
```



## 1 Async / await  异步编程

async (asynchronous) 异步、psync (synchronous) 同步。

```js
async function foo() {
    return 1 
}
```

如果函数前加入了 `async` 关键字，这个函数就成为了一个 Async。Async 通常和 Promise 配合使用，Async 进一步优化了 promise 的 `then` 调用链,使异步编程更舒适。

执行中：

- 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。
- 异步函数内部，如果出现异常，并不影响函数外部作用域，而是会在异常处立即返回一个已决议的 rejected promise，并把异常原因返回。



返回值：

- `async` 函数的返回值，永远是一个 `promise`，且该 `promise` 是已决议的。

- 如果 `return` 的是一个立即值，则包装为一个 rsolved promise 后返回；
- 如果 `return` 的是一个 `promise`，则直接返回这个 `promise`。
- 如果 `return` 的是一个 thenable，则会展开 (执行 `then()` )，得到一个立即值或 `promise`。
- 如果没有手动 `return`，且没有错误的情况下， 默认返回一个值为 `undefined` 的 resolved promise。
- 如果没有手动 `return`，且有 `reject`，如果没有用 `try...catch` 捕获，就会返回这个 `rejected promise`。



### 3.1 `await`

和 `generator` / `yield` 类型，`async` / `await` 也是相互的搭档。`await` 只能在 `async` 中使用。

`await... ` 表达式是一个暂停点，其右侧是一个 `promise`。当程序执行到 `await...`  时，`await` 会暂停函数的执行，直到 promise 状态变为 settled，然后以 promise 的结果继续执行。这个行为不会耗费任何 CPU 资源，因为 JavaScript 引擎可以同时处理其他任务：执行其他脚本，处理事件等。

- **完成自动解析**。`await` 实际上就是 `p.then()` 的语法糖（参考0.4 举例）。`await` 会把右侧的 `promise` 通过 `.then( res => res)` 把 res 提取出来，返回给 `await` 的左侧。
  - 所以，如果 `await` 后是一个立即值，则直接返回这个立即值。

- **错误顺延抛出**。`await` 只负责解析 resolved 的 promise，如果 promise 是一个 rejected 的，那当前 async 函数会立即 rejected，把 await 处的 rejeted promise 值，当作 async rejected 的值抛出。
  - asnyc function 的返回值也是一个 promise。
  - 如果不想顺延抛出，需要通过 try ... catch 捕获 await 右侧那个 rejected promise。




### 3.2 Error 处理

如果一个 promise 正常 `fulfilled`，`await promise` 返回的就是其结果，是一个已决议的 `promise`。

如果这个 promise 是 `rejected`，它将 `throw` 这个 `error` ，控制台中会显示一个未处理的 promise error：

```js
async function foo() {
    let p = await Promise.reject("错误")
    return p
}
foo() // 错误
// Uncaught (in promise) 错误
```



#### `try...catch`

使用 `try...catch` 可以把 `await` 等待的 `promise` 中发生的错误捕获：

```js
async function foo() {
    try {
        let p = await Promise.reject("错误")
        } catch (e) {
            console.log(e)
        }

}
foo() // 错误
```

如果没有 `await` 等待，promise 中发生的错误就只在 promise 中抛出错误，需要 `p.then()` 或 `p.catch()` 去接收错误，无法使用 `try...catch` 捕获错误：

```js
async function foo() {
    try {
        let p = Promise.reject("错误")
        } catch (e) {
            console.log(e)
        }

}
foo() // Uncaught (in promise) 错误
```

如果不用 `try..catch` 去捕获 `promise` 中的错误，那么也可以在外部调用 `async` 函数的时候，添加一个 `.catch()` 作为“兜底”，处理 `async` 中可能出现的错误。

这就相当于， 异步函数 `foo()` 最终返回了一个 `rejected` 的 `promise`：

```js
async function foo() {
    let p = await Promise.reject("错误")
}

foo().catch(e => {
    console.log(e)		// 错误
}) 
```



**所以，`async` / `await` 是 `promise` / `p.then()` 的语法糖。**

`await` 解决了 `then()` 长长的一条链条，我们把 `then` 中 `rejected` 失败回调函数放到了 `try...catch` 中统一处理。然后 `await` 就只需等待正确的 resolve promise 了。



## 4 async generator 异步迭代

声明一个异步迭代函数，用 `async `

异步迭代允许我们对按需通过异步请求而得到的数据进行迭代。例如，我们通过网络分段（chunk-by-chunk）下载数据时。异步生成器（generator）使这一步骤更加方便。



### 4.1 异步的可迭代对象 async iterable object

我们知道，要使一个对象可迭代，我们需要给它添加 `[Symbol.iterator]`。

现象，如果令一个对象可异步迭代，需要添加 `[Symbol.asyncIterator]`。



当迭代的值通过异步形式输出时，iterator 的定义和使用产生了以下变化：

1. 引擎不再调用 `[Symbol.iterator]` 函数来迭代，而是使用 `[Symbol.asyncIterator]`。
2. `await it.next()` 方法会返回一个 fulfilled promise，且这个 `promise` 携带有返回值 IteratorResult。
3. `for...of` 应该使用异步迭代：`for await (let v of iterable)`。

`for...of` 通过调用异步可迭代对象的 `[Symbol.iterator]` 函数，获得一个包含 `async next()` 方法的对象。然后每次调用 `async next()` 都会获得一个包含结果值 IteratorResult 的 promise。

下面是一个每个 1000ms 后，输出一个数字的例子，采用异步的可迭代对象：

```js
let number = {
    array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    [Symbol.asyncIterator]() {
        return {
            array: this.array,
            index: 0,
            async next() {
                let num = await new Promise((resolve) => {
                    setTimeout(() => {
                            resolve(this.array[this.index++])
                        }, 1000)
                });

                return {
                    done: num === undefined ? true : false,
                    value: num
                }
            }
        }
    }
};

// 必须包含在一个 async 中，才能使用 await
(async () => {
    for await (let value of number) { // (4)
        console.log(value)	// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    }
})()
```



### 4.2 async generator 异步生成器

当我们想创建一个 **异步生成一系列值的对象** 时，我们都可以使用异步 generator。

```js
async function* gen() {
    for (let i = 0, i < 20; i++) {
        await new Promise(reslove => setTimeout(reslove, 1000));
        yield i;
    }
};

// for await ...of 遍历
(async() => {
    let it = gen();
    for await(let v of it) {
        console.log(v)	// 间隔 1s，输出0 ~ 19
    }
})();
```



定义异步 generator 时，注意几个要点：

1. 定义异步 generator ：`async function*`；
2. 在异步 generator 中通过 `await` 等待，来异步获取值；
3. 在异步 generator 中通过 `yield` 来和调用者进行双向交互，把自己获取的值传递出去。

使用异步 generator 时，注意几个要点：

1. 要异步环境中创建并调用使用启动器，创建一个 `async` 环境的 IIFE；
2. 通过 `for await ...of` 来逐次的获取异步值。
   - 使用  `for await ...of` 原因是，异步值时通过 `await it.next()` 获取的。

```js
// 上面的程序进行手动遍历
// 运行时输入：
(async() => {
    let it = gen();
    console.log(await it.next())
    console.log(await it.next())
    console.log(await it.next())
    console.log(await it.next())
    console.log(await it.next())
})();
// 控制台依次输出：
// {value: 0, done: false}
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: 4, done: false}
```



### 4.3 `async [Symbol.asyncIterator]`

使用异步的 `[Symbol.asyncIterator]`，来替换同步的 `[Symbol.asyncIterator]`

```js
let range = {
  from: 1,
  to: 5,

  // 这一行等价于 [Symbol.asyncIterator]: async function*() {
  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {

      // 在 value 之间暂停一会儿，模拟异步获取值
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 通过 yield 返回值，而不再用 next() 方法
      yield value;
    }
  }
};

(async () => {
  for await (let value of range) {
    console.log(value); // 间隔 1s 依次输出：1, 2, 3, 4, 5
  }
})();
```



### 4.4 总结

异步 iterator 与常规 iterator 在语法上的区别：

|                            | Iterator          | async iterator                   |
| :------------------------- | :---------------- | :------------------------------- |
| 提供 iterator 的对象方法： | `Symbol.iterator` | `Symbol.asyncIterator`           |
| `next()` 返回的值是：      | IteratorResult    | promise，决议值是 IteratorResult |
| 要进行循环，使用：         | `for..of`         | `for await..of`                  |



异步 generator 函数与常规 generator 函数在语法上的区别：

|                     | Generator             | 异步 Generator                   |
| :------------------ | :-------------------- | :------------------------------- |
| 声明方式：          | `function* gen(){..}` | `async function* gen(){..}`      |
| `next()` 返回的值是 | IteratorResult        | promise，决议值是 IteratorResult |
| 要进行循环，使用：  | `for..of`             | `for await..of`                  |



应用背景：

在 Web 开发中，经常会遇到数据流，它们分段流动（flows chunk-by-chunk）。例如，下载或上传大文件。

此时，我们可以使用异步 generator 来处理此类数据。

值得注意的是，浏览器环境下，还有一个被称为 Streams 的 API，它提供了特殊的接口来处理此类数据流，转换数据、并将数据从一个数据流传递到另一个数据流（例如，从一个地方下载并立即发送到其他地方）。




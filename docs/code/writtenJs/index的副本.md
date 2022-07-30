---
title: 1. Promise
sidebar_position: 1
date: 2022-07-30
tags: [时间复杂度]
---

## 1 Promise

### 1.1 Promise 实现

1. 搭建架子：
   - MyPromise 对象：
     - constrictor 三个函数 resolve、reject、executor；
   - promise 实例对象
     - 传入 executor 的入参（回调函数）；
     - 尝试在 executor 的回调函数中，调用 resolve 和 reject。
2. 定义状态：pending、fulfilled、rejected；
3. 定义 resolve 和 reject 内的状态执行逻辑。

```js
// ES6 ES2015 https://promisesaplus.com/
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      // 如果状态已经决议，则不执行resolve
      if (this.status !== PROMISE_STATUS_PENDING) return;
      this.status = PROMISE_STATUS_FULFILLED;
      this.value = value;
      console.log("resolve被调用");
    };

    const reject = (reason) => {
      // 如果状态已经决议，则不执行reject
      if (this.status !== PROMISE_STATUS_PENDING) return;
      this.status = PROMISE_STATUS_REJECTED;
      this.reason = reason;
      console.log("reject被调用");
    };

    executor(resolve, reject);
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  resolve(1111);
  reject(2222);
});
```



### 1.2 then 实现

1. 先写出 `promise.then(回调1， 回调2);` 通过函数调用构思 then 的内容；

2. Promise 实现了回调函数的延时绑定技术，所以只有通过 `.then(回调1，回调2)` 调用时，才会动态绑定通过 then 传递进去的回调函数，绑定完毕后立即根据 promise 的结果（成功/失败）来执行对应的回调函数。

   - 延迟绑定的思路：让 `.then()` 这行代码的执行顺序提前，先绑定好 then 中的两个回调函数，再执行回调函数。

   1. 使用 `setTimeout` 定义，让 reslove 和 reject 中，执行回调函数变成宏任务等待。
   2. 使用 `queueMicrotask` 定义，变成微任务，原理和上文相同。

```js
// @ts-nocheck
// ES6 ES2015 https://promisesaplus.com/
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      // 如果状态已经决议，则不执行resolve
      if (this.status !== PROMISE_STATUS_PENDING) return;
      this.status = PROMISE_STATUS_FULFILLED;
      this.value = value;
      console.log("resolve被调用");
      // 延迟，等回调函数绑定成功后再执行
      queueMicrotask(() => {
        // ?. 确保 onFulfiled 存在才调用，有可能then中没有定义onFulfilled
        this.onFulfilled?.(this.value); 
      });
    };

    const reject = (reason) => {
      // 如果状态已经决议，则不执行reject
      if (this.status !== PROMISE_STATUS_PENDING) return;
      this.status = PROMISE_STATUS_REJECTED;
      this.reason = reason;
      console.log("reject被调用");
      // 延迟，等回调函数绑定成功后再执行
      queueMicrotask(() => {
        this.onRejected?.(this.reason);
      });
    };
    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    // 判断：如果入参时一个函数，才绑定，否则不绑定
    if (onFulfilled instanceof Function) this.onFulfilled = onFulfilled;
    if (onRejected instanceof Function) this.onRejected = onRejected;
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  resolve(1111);
  reject(2222);
});

promise.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err", err);
  }
);
```

对 `then` 的优化：

1. 对同一个 promise，可以调用多次 then，获得各自的结果：
   - 这里在 Promise 对象中定义两个数组，分别来存放多个 `.then()` 调用时，添加的 `onFulfilled` 和 `onRejected` 函数。在 promise 状态敲定后，把数组中的全部回调都执行一下即可。

```js
promise.then(
  (res) => {
    console.log("第一个成功调用", res);
  },
  (err) => {
    console.log("err", err);
  }
);

promise.then(
  (res) => {
    console.log("第二个成功调用", res);
  },
  (err) => {
    console.log("err", err);
  }
);
```

2. then 可以形成调用链
   - 让 then 方法再返回一个新的 promise 对象。

```js
promise.then().then().then()
```

最终代码如下：

```js
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status !== PROMISE_STATUS_PENDING) return;
      // 添加微任务
      queueMicrotask(() => {
        if (this.status !== PROMISE_STATUS_PENDING) return;
        this.status = PROMISE_STATUS_FULFILLED;
        this.value = value;
        this.onFulfilledFns.forEach((fn) => {
          fn(this.value);
        });
      });
    };

    const reject = (reason) => {
      if (this.status !== PROMISE_STATUS_PENDING) return;
      // 添加微任务
      queueMicrotask(() => {
        if (this.status !== PROMISE_STATUS_PENDING) return;
        this.status = PROMISE_STATUS_REJECTED;
        this.reason = reason;
        this.onRejectedFns.forEach((fn) => {
          fn(this.reason);
        });
      });
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 1.如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch(err) {
          reject(err);
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        try {
          const reason = onRejected(this.value);
          resolve(reason);
        } catch(err) {
          reject(err);
        }
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => {
          try {
            const value = onFulfilled(this.value);
            resolve(value);
          } catch(err) {
            reject(err);
          }
        });
        if (onRejected) this.onRejectedFns.push(() => {
          try {
            const reason = onRejected(this.reason);
            resolve(reason)
          } catch(err) {
            reject(err);
          }
        });
      }
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("状态pending");
  // resolve(1111) // resolved/fulfilled
  reject(2222);
  // throw new Error("executor error message")
});

// 调用then方法多次调用
promise
  .then(
  (res) => {
    console.log("res1:", res);
    return "aaaa";
    // throw new Error("err message")
  },
  (err) => {
    console.log("err1:", err);
    return "bbbbb";
    // throw new Error("err message")
  }
)
  .then(
  (res) => {
    console.log("res2:", res);
  },
  (err) => {
    console.log("err2:", err);
  }
);
```

**注意执行顺序：**

- `new MyPromise(executor)` 
  - 实例化一个 promise 对象，给 promise 对象上绑定了 status、value、reason 属性，以及 resolve、reject、exectuor 方法。
  - 执行 `executor(resolve, reject)` 方法。
    - 执行 executor 逻辑 ...
    - 执行 resolve 或 reject。
      - 此时，遇到微任务 queueMicrotask，后续执行放入队列中。
- `.then(成功回调, 失败回调)` 
  - 执行 `promise.then()` 方法，把成功回调和失败回调两个参数传递到 `then` 中，添加到内部的 `onfulfilledFn` 和 `onRejectedFn` 数组上。

- 当前队列代码执行完毕，进行微任务队列执行
- 继续执行刚才 resolve 或 reject 剩余的代码，此时的 then 已经完成了回调函数绑定，可以执行 `onfulfilledFn` 或 `onRejectedFn` 数组上的回调函数了。
  - 改变 promise 的状态（fulfilled or rejected)，表明 executor 逻辑执行完毕。
  - 执行 `onfulfilledFn` 或 `onRejectedFn` 数组内的全部回调。



这里没有完美实现 A+。



### 1.3 catch 实现

实现起来较为繁琐，先略过。

```js
catch(onRejected) {
  this.then(undefined, onRejected);
}
```



### 1.4 finally 实现

实现起来较为繁琐，先略过。

```js
```


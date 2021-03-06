---
title: 1. Promise API
sidebar_position: 1
date: 2022-07-30
tags: [时间复杂度]
---

## 1 Promise

> Promise A+：https://promisesaplus.com
>
> 中文：https://www.ituring.com.cn/article/66566

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
// ES6 ES2015 
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
   - resolve 和 reject 在执行结束前，察看一下当前 callbacks 队列中是否有需要执行的回调，如果有依次执行
   - then 在绑定 onFulfilled 和 onRejected 回调时，判断一下当前 promise 的状态：
     - 如果还在 pending，说明 executor 内部存在异步，把回调加入 callbacks 回调队列。
     - 如果已经 fulfilled 或 rejected，executor 函数已经执行完毕，直接执行回调。
3. 对同一个 promise，可以调用多次 then，获得各自的结果：
   - 这里在 Promise 对象中定义两个数组，分别来存放多个 `.then()` 调用时，添加的 `onFulfilled` 和 `onRejected` 函数。在 promise 状态敲定后，把数组中的全部回调都执行一下即可。

```js
// @ts-nocheck
class MyPromise {
  static STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
  };

  constructor(executor) {
    this.state = MyPromise.STATE.PENDING;
    this.result = undefined;
    this.fulfilledCallbacks = [];
    this.rejectedCallbacks = [];

   this.resolve = (value) => {
      if (this.state !== MyPromise.STATE.PENDING) return;
      queueMicrotask(() => {
        this.state = MyPromise.STATE.FULFILLED;
        this.result = value;
        this.fulfilledCallbacks.forEach( cb => {
          cb(this.result);
        })
      })
    };

    this.reject = (reason) => {
      if (this.state !== MyPromise.STATE.PENDING) return;
      queueMicrotask(() => {
        this.state = MyPromise.STATE.REJECTED;
        this.result = reason;
        this.rejectedCallbacks.forEach( cb => {
          cb(this.result);
        })
      })
    };

    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  then = (onFulfilled, onRejected) => {
    // 1 判断：如果不是函数
    // onFulfilled将 value 原封不动的返回，
    //onRejected 返回 reason, 通过 throw Error 来返回
    onFulfilled = 
      onFulfilled instanceof Function ? onFulfilled : (value) => {return value};
    onRejected = 
      onRejected instanceof Function ? onRejected : (value) => {throw value};

    // 2 如果promise状态还在pending，则加入执行队列
    if (this.state === MyPromise.STATE.PENDING) {
      this.fulfilledCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }
    
    // 3 如果promise状态已经确认，则异步执行回调
    if (this.state === MyPromise.STATE.FULFILLED) {  
      queueMicrotask(() => {
        onFulfilled(this.result);
      })
    }
      
    if (this.state === MyPromise.STATE.REJECTED) {
      queueMicrotask(() => {
        onRejected(this.result);
      })
    }
  };
}

const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  // 异步执行
  setTimeout(()=> {
    resolve("resolve-1");
    reject("reject-1");  
  }, 1000)
});

promise.then(
  (res) => {
    console.log("成功", res);
  },
  (err) => {
    console.log("失败", err);
  }
);

// 多个then调用
promise.then(
  (res) => {
    console.log("成功2", res);
  },
  (err) => {
    console.log("失败2", err);
  }
);
```

三处异步处理的地方：

- then
  - then 的调用时机是异步的，所以添加异步回调。
- resolve、reject
  - executor 内，当出现 `resolve()` 执行时，promise 状态改变，但此时 resolve 内不能立即执行保存的 onFulfilled 回调，因为按照 A+ 规定，此时还要把 executor 剩余的代码执行完闭，下一个 异步时钟才执行 onFulfilled 回调。所以 resolve 和 reject 也添加异步。

执行顺序测试：

```js
console.log(1);
let promise1 = new MyPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A', promise1.state);
        resolve('这次一定');
        console.log('B', promise1.state);
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('C', promise1.state);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```

![截屏2022-07-31 12.06.53](images/Promise%20API.assets/%E6%88%AA%E5%B1%8F2022-07-31%2012.06.53.png)



2. then 可以形成调用链
   - 让 then 方法再返回一个新的 promise 对象。

```js
promise.then().then().then()
```

注意以下几点：

- then 返回一个新的 promise，所以在 then 方法中，返回一个新的 MyPromise 实例。
- `onFulfilled` 和 `onRejected` 有返回结果，所以用 value 拿到这个返回结果，做为新的 promise 决议信息，通过 `resolve(value)` 决议这个新的 promise。
- 在执行 `onFulfilled` 和 `onRejected`  如果出现错误，新的 promise 的状态就立即修改为 `rejected`，所以用 try catch 包裹这两个回调函数的执行。如果 catch 到错误，就用 `reject(value)` 来决议这个新的 promise。
- 所以在情况2 “如果 promise 状态还在 pending，则加入执行队列” 时，加入队列的回调函数也要添加 try catch，同时给他们添加异步回调，确保执行顺序在 executor 执行完毕之后。
- 在 `resolve` 和 `reject`函数中，当执行异步后，再次判断一下 promise 是否决议，如果已经决议，则不再执行后面的代码。



最终代码如下：

```js
class MyPromise {
  static STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
  };

  constructor(executor) {
    this.state = MyPromise.STATE.PENDING;
    this.result = undefined;
    this.fulfilledCallbacks = [];
    this.rejectedCallbacks = [];

    this.resolve = (value) => {
      if (this.state !== MyPromise.STATE.PENDING) return;
      queueMicrotask(() => {
        // 第二次判断是否已经决议
        if (this.state !== MyPromise.STATE.PENDING) return;
        this.state = MyPromise.STATE.FULFILLED;
        this.result = value;
        this.fulfilledCallbacks.forEach((cb) => {
          cb(this.result);
        });
      });
    };

    this.reject = (reason) => {
      if (this.state !== MyPromise.STATE.PENDING) return;
      queueMicrotask(() => {
        // 第二次判断是否已经决议
        if (this.state !== MyPromise.STATE.PENDING) return;
        this.state = MyPromise.STATE.REJECTED;
        this.result = reason;
        this.rejectedCallbacks.forEach((cb) => {
          cb(this.result);
        });
      });
    };

    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  then = (onFulfilled, onRejected) => {
    // 1 判断：如果不是函数
    // onFulfilled将 value 原封不动的返回，
    //onRejected 返回 reason, 通过 throw Error 来返回
    onFulfilled =
      onFulfilled instanceof Function ? onFulfilled : (value) => {return value};
    onRejected =
      onRejected instanceof Function ? onRejected : (value) => {throw value};

    return new MyPromise((resolve, reject) => {
      // 2 如果promise状态还在pending，则加入执行队列
      if (this.state === MyPromise.STATE.PENDING) {
        this.fulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const value = onFulfilled(this.result);
              resolve(value);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.rejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const value = onRejected(this.result);
              resolve(value);
            } catch (e) {
              reject(e);
            }
          });
        });
      }

      // 3 如果promise状态已经确认，则异步执行回调
      if (this.state === MyPromise.STATE.FULFILLED) {
        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.result);
            resolve(value);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.state === MyPromise.STATE.REJECTED) {
        queueMicrotask(() => {
          try {
            const value = onRejected(this.result);
            resolve(value);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  };
}
```

测试 then 调用链：

```js
const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  setTimeout(() => {
    resolve("resolve-1");
    reject("reject-1");
  }, 1000);
  // resolve("resolve-1");
  // reject("reject-1");
});

promise.then(
  (res) => {
    console.log("成功1", res);
    return "resolve-2";
  },
  (err) => {
    console.log("失败1", err);
  }
).then(
  (res) => {
    console.log("成功2", res);
    throw "失败了 抛出错误";
    return "resolve-3";
  },
  (err) => {
    console.log("失败2", err);
  }
).then( 
  (res) => {
    console.log(res);
}, 
  (err) => {
    console.log('失败3', err);
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



### 1.3 catch 实现

直接添加该函数：

- 注意 catch 也会返回一个新的 promise，借用 `return this.then()` 来调用它。

```js
catch(onRejected) {
  return this.then(undefined, onRejected);
}
```

测试：

可以看到，第一个 then 中没有定义错误处理，所以异常继续抛出，在 catch 上成功捕获。

```js
promise.then(
  (res) => {
    console.log("成功1", res);
    return "resolve-2";
  },
).catch(
  (err) => {
    console.log('catch 到错误：', err);
  }
)
// pending 状态
// catch 到错误： reject-1
```



### 1.4 finally 实现

直接添加函数：

```js
finally(onFinally) {
  this.then(() => {
    onFinally()
  }, () => {
    onFinally()
  })
}
```

测试：

```js
const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  setTimeout(() => {
    reject("reject-1");
    resolve("resolve-1");
  }, 1000);
});

promise.then(
  (res) => {
    console.log("成功1", res);
    return "resolve-2";
  },
).catch(
  (err) => {
    console.log('catch 到错误：', err);
  }
).finally(
  ()=> {
    console.log('执行完毕！')
  })

// pending 状态
// catch 到错误： reject-1
// 执行完毕
```



## 2 Promise API

### 2.1 类：resolve reject

在 MyPromise 类中添加：

```js
static resolve(value) {
	return new MyPromise((resolve) => resolve(value));
}

static reject(reason) {
  return new MyPromise((resolve, reject) => reject(reason));
}
```

测试:

```js
MyPromise.resolve('对了').then((res) => {console.log('resolve', res)});
// resolve 对了

MyPromise.reject('错了').then((res) => {}, (err) =>{console.log('reject', err)});
// or
MyPromise.reject('错了').catch((err) =>{console.log('reject', err)});
// reject 错了
```



### 2.2 .all .allSettled

all：全部 **成功** 后返回保存为数组返回，期间一旦有一个失败，直接返回失败结果。

allSettled：全部 **决议** 后保存为 object 放入数组返回，保存成员的决议状态(fulfilled / rejected)



确保结果返回的数组中，所有成员顺序和输入时不变：

- 遍历 `promises` 时不能用 forEach，而是用 for 循环，通过下标方式添加到 values 数组中。这样保证顺序不会发生改变

```js
Promise.all([p1, p2, p3])
.then(res => {
  // 返回的结果 res 顺序也应当是：[p1, p2, p3]
  console.log(res)
})
```

最终代码如下：

```js
class MyPromise extends Promise {
  constructor(values) {
    super(values);
  }
  
  static all(promises) {  
    // 1. 传入的参数不一定是数组对象，可以是 iterator，Array.from 转化为 array
    // 2. 每个成员必须是 promise，通过回调函数包装
    promises = Array.from(promises, (promise) => MyPromise.resolve(promise));
    const values = [];
    let count = promises.length;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promise.then(
          (res) => {
            values.push(res);
            // count === 0 时，返回 fulfilled 状态
            if (!--count) resolve(values);
          }
          ,(err) => {
            reject(err);
          }
        )
      };
    })
  }
  
  // allSettled 最终状态一定是fulfilled
  // 返回成员的不再是值，而是一个有status和value/reason属性的对象
  // 最终在finally，把对象push到数组中
  static allSettled(promises) {
    promises = Array.from(promises, (promise) => MyPromise.resolve(promise));
    const values = [];
    let count = promises.length;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const result = {}
        promises[i].then((res) => {
          result.status = 'fulfilled';
          result.value = res;
        }, (err) => {
          result.status = 'rejected';
          result.reason = err;
        }).finally(()=> {
          values[i] = result;
          // count === 0 时，返回 fulfilled 状态
          if (!--count) resolve(values);
        })
      }
    })
  }
}
```

代码测试：

```js
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => { resolve('p1 resolve') }, 0);
})

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => { resolve('p2 resolve') }, 100);
})

const p3= new MyPromise((resolve, reject) => {
  setTimeout(() => { resolve('p3 resolve') }, 1000);
})

const p4 = new MyPromise((resolve, reject) => {
  setTimeout(() => { reject('p4 reject') }, 101);
})

MyPromise.all([p1, p2, p3])
  .then((res) => {
  console.log('all resolved', res);
}).catch((err) => {
  console.log('someone err', err);
})
// a few moments later ...
// all resolved (3) ['p1 resolve', 'p3 resolve', 'p2 resolve']

MyPromise.all([p1, p2, p3, p4])
  .then((res) => {
  console.log('all resolved', res);
}).catch((err) => {
  console.log('someone err', err);
})
// someone err p4 reject

// 3测试入参成员是非Promise时处理
MyPromise.all([p1, p3, "heihei~"])
.then((res) => {
    console.log('all resolved', res);
}).catch((err) => {
    console.log('someone err', err);
})
// all resolved (3) ['heihei~', 'p1 resolve', 'p3 resolve']4


// 4 allSettled 测试
MyPromise.allSettled([p1, p2, p3, p4, 'heihei~'])
.then((res) => {
    console.log('all settled:', res);
}).catch(err => console.log(err));
// 输出如下：
```

![截屏2022-07-31 18.04.18](images/Promise%20API.assets/%E6%88%AA%E5%B1%8F2022-07-31%2018.04.18.png)



### 2.3 .race .any

race：返回第一个跨过终点线的 Promise 对象，而抛弃其他 Promise。

any：返回第一个决议为 **成功** 的 Promise 对象，不关心 promise 的错误结果。

- 如果全部失败，则返回特定的 reject 信息。
- 同时, `err.errors` 保存了一个数组，内容是所有promise成员（都失败了）按序的失败信息。

```js
class MyPromise extends Promise {
  constructor(value) {
    super(value);
  }

  static race(promises) {
    // 解决两个问题：迭代器转数组、普通值转promise对象
    promises = Array.from(promises, (promises) => MyPromise.resolve(promises));
    return new MyPromise((resolve, reject) => {
      promises.forEach( promise => {
        promise.then((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })            
      });
    })
  }


  // 如果有一个成功，就直接返回成功
  // 如果全部失败，则返回一个AggregateError，同时用 .errors 按序保存了所有错误信息
  // 固只能用 for 循环来遍历 promises，以确保按序登记错误信息
  static any(promises) {
    promises = Array.from(promises, (promise) => MyPromise.resolve(promise));
    return new MyPromise((resolve, reject) => {
      const errValues = [];
      let count = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then((res) => {
          resolve(res);
        }, (err) => {
          errValues[i] = err;
          if (!--count) {  // count === 0 时，全部promise决议完毕
            const message = new AggregateError('All promises were rejected');
            message.errors = errValues;
            reject(message);
          }
        })
      }
    })
  }
}
```





测试：

```js
// p1 p2 p3 p4 和 2.2 的测试举例相同，不再赘述

//* race测试
// 谁先完成就返回谁（成功/失败都算）
MyPromise.race([p2, p3, p4])
.then((res) => {
    console.log('res:', res);
}).catch((err)=> {
    console.log('err:', err);
})
// res: p2 resolve

// 如果传入立即值，则直接返回
MyPromise.race([p2, p3, p4, 'heihei~'])
.then((res) => {
    console.log('res:', res);
}).catch((err)=> {
    console.log('err:', err);
})
// res: heihei~

//* any测试
const p5 = new MyPromise((resolve, reject) => {
    setTimeout(() => { reject('p5 reject') }, 3001);
})

MyPromise.any([p3, p4])
.then((res) => {
    console.log('res:', res);
}).catch((err)=> {
    console.log('err:', err);
})
// res: p3 resolves

// 顺序相反
MyPromise.any([p5, p4])
.then((res) => {
    console.log('res:', res);
}).catch((err)=> {
    console.log('err:', err);
    console.log(err.errors);
})
//err: AggregateError: All promises were rejected 
// (2) ['p5 reject', 'p4 reject']
```




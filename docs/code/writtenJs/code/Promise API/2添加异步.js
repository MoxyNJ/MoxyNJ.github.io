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
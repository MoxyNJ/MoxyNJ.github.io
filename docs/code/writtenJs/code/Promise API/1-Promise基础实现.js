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
      this.state = MyPromise.STATE.FULFILLED;
      this.result = value;
    };

    this.reject = (reason) => {
      if (this.state !== MyPromise.STATE.PENDING) return;
      this.state = MyPromise.STATE.REJECTED;
      this.result = reason;
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
    onFulfilled = onFulfilled instanceof Function ? onFulfilled : (value) => value;
    onRejected = onRejected instanceof Function ? onRejected : (value) => {throw value};
    
    // 2 如果promise状态已经确认，则直接执行回调
    if (this.state === MyPromise.STATE.FULFILLED) onFulfilled(this.result);
    else if (this.state === MyPromise.STATE.REJECTED) onRejected(this.result);

    // 3 如果promise状态还在pending，则加入执行队列
    this.fulfilledCallbacks.push(onFulfilled);
    this.rejectedCallbacks.push(onRejected);
  };
}

const promise = new MyPromise((resolve, reject) => {
  console.log("pending 状态");
  resolve("resolve-1");
  reject("reject-1");
});

promise.then(
  (res) => {
    console.log("成功", res);
  },
  (err) => {
    console.log("失败", err);
  }
);

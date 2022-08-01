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

  then(onFulfilled, onRejected) {
    // 1 判断：如果不是函数
    // onFulfilled将 value 原封不动的返回，
    //onRejected 返回 reason, 通过 throw Error 来返回
    onFulfilled =
      onFulfilled instanceof Function
        ? onFulfilled
        : (value) => {
            return value;
          };
    onRejected =
      onRejected instanceof Function
        ? onRejected
        : (value) => {
            throw value;
          };

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

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }
  
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }
}

MyPromise.resolve('对了').then((res) => {console.log('resolve', res)});
// resolve 对了

MyPromise.reject('错了').then((res) => {}, (err) =>{console.log('reject', err)});
// reject 错了
// @ts-nocheck
// race：返回第一个跨过终点线的 Promise 对象，而抛弃其他 Promise。
// any：返回第一个决议为 **成功** 的 Promise 对象，不关心 promise 的错误结果。
            // - 如果全部失败，则返回特定的 reject 信息，同时 err.errors 返回数组，内容是按序的成员错误内容。


class MyPromise extends Promise {
  constructor(value) {
    super(value);
  }

  static race(promises) {
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
                if (!--count) {
                    const message = new AggregateError('All promises were rejected');
                    message.errors = errValues;
                    reject(message);
                }
            })
        }
    })
  }
}

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

// 谁先完成就返回谁（成功/失败都算）
// MyPromise.race([p2, p3, p4])
// .then((res) => {
//     console.log('res:', res);
// }).catch((err)=> {
//     console.log('err:', err);
// })
// // res: p2 resolve

// // 如果传入立即值，则直接返回
// MyPromise.race([p2, p3, p4, 'heihei~'])
// .then((res) => {
//     console.log('res:', res);
// }).catch((err)=> {
//     console.log('err:', err);
// })
// // res: heihei~

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
// (2) ['p4 reject', 'p5 reject']
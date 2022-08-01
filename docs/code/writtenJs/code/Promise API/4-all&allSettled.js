// @ts-nocheck
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
            promises[i].then(
                (res) => {
                    values[i] = res;
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

//* all 测试
// 1测试是否全部完成后，再返回
MyPromise.all([p1, p2, p3])
.then((res) => {
    console.log('all resolved', res);
}).catch((err) => {
    console.log('someone err', err);
})
// a few moments later ...
// all resolved (3) ['p1 resolve', 'p3 resolve', 'p2 resolve']

// 2测试遇到 reject 后直接返回
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
// all resolved (3) ['heihei~', 'p1 resolve', 'p3 resolve']

//* allSettled 测试
MyPromise.allSettled([p1, p2, p3, p4, 'heihei~'])
.then((res) => {
    console.log('all settled:', res);
}).catch(err => console.log(err));
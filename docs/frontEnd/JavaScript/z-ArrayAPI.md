---
title: Array API
sidebar_position: 50
date: 2022-07-01
tags: [JavaScript]
draft: true
---

整理：统计常用的 Array API

## 静态方法

### Array.from()

将类似数组对象或可迭代对象，转化并创建为一个数组，浅拷贝。

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

参数：

1. arrayLike：想要转换成数组的类数组对象或可迭代对象。
2. mapFn：回调函数，新数组中每个成员都会执行一次该函数。
3. 执行回调函数时 `this` 的指向。

```js
console.log(Array.from('foo')); 	// ['f', 'o', 'o'] string是可迭代对象
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
```



### Array.of()

当使用数组的构造器函数去新建一个数组的时候，如果只传递一个数字 `10`，就会被判定为 “指定数组的长度”，而不是该数组第一个成员值为 `10`。使用 `Array.of()` 就会避免这个问题，它创建一个数组，而不考虑参数的数量或类型。

```js
let arr1 = new Array(10)	// (10) [empty × 10]
let arr2 = Array.of(10)		// [10]
```



### Array.isArray()

判断一个值是否是 Array。

```js
Array.isArray(obj)
```

返回：boolean

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

Array.isArray(arr1)		// true
Array.isArray("foo")	// falses
```



## 数组的查询

### Array.prototype.includes()

判断一个数组是否包含一个指定的值。

```js
arr.includes(valueToFind[, fromIndex])
```

参数：

1. valueToFind：需要查找的元素值。
2. fromIndex：可选。默认为 0。
   - 从`fromIndex` 索引处开始查找 `valueToFind`。
   - 如果为负值，从 `array.length + fromIndex` 的索引开始搜，然后往后搜寻。

返回：包含则返回 true，否则返回false。

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]

arr2.includes("Moxy")	// true
arr2.includes("Ninjee", 0) // true
// 值 0，从下标 0 开始找（包含下标0）
arr2.includes("Moxy", -1)  // false
// 值-1，倒数，从第一个开始找（包含第1个）
```



### Array.prototype.indexOf()

在数组中查找给定元素的 **第一个索引位**，如果不存在，则返回-1。

```js
arr.indexOf(searchElement[, fromIndex])
```

参数：

1. searchElement：要查找的元素；
2. 开始查找的位置。可选，默认 0；
   - 索引值 >= 数组长度，则直接返回 -1；
   - 负数，从倒数位置开始找：如果为 -1，从最后一个成员开始找。

返回：找到的索引位，找不到为 -1。

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]

arr2.indexOf("Walnut")	// 2
arr2.indexOf("Walnut", -1)	// 2
```



### Array.prototype.lastIndexOf()

在数组中查找给定元素的 **最后一个索引位**，如果不存在，则返回-1。

```js
arr.lastIndexOf(searchElement[, fromIndex])
```

参数：

1. searchElement：要查找的元素；
2. 开始查找的位置。可选，默认 0；
   - 索引值 >= 数组长度，则直接返回 -1；
   - 负数，从倒数位置开始找：如果为 -1，从最后一个成员开始找。

返回：找到的索引位，找不到为 -1。

```js
let arr = ["Moxy", "Ninjee", "Walnut","Ninjee"]
arr.lastIndexOf("Ninjee")	// 3
```



## 数组操作

### Array.prototype.concat()

用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
var new_array = old_array.concat(value1, [value2, value3...])
```

参数：

- 数组和/或值，将被合并到一个新的数组中。
  - 如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。

返回：一个合并后的新数组

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let arr2 = ["Moxy", "Ninjee", "Walnut"]

let newArr = arr1.concat(arr2, [1,2,3], "Hello")
// (17) [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 'Moxy', 'Ninjee', 'Walnut', 1, 2, 3, 'Hello']
```



### Array.prototype.copyWithin()

浅复制数组的一部分到同一数组中的另一个位置，返回原数组。不会改变原数组的长度。

```js
arr.copyWithin(target[, start[, end]])
```

参数：

1. target：索引下标，会复制到该位置。如果为负数，则从最后一个开始计算。
   - 如果 `target` >= `arr.length`=，则不发生拷贝。
2. start：索引下标，要复制的元素的起始位置（不包含下标本身）。如果为负数，则从最后一个开始计算。
   - 默认 start 为 0。
3. end：索引下标，要复制的元素的结束位置。如果为负数，则从最后一个开始计算。
   - 默认 end 为 `arr.length`（不是 -1），一直复制到末尾。

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]

arr2.copyWithin(1, 0, 1)	// (3) ['Moxy', 'Moxy', 'Walnut']
arr2.copyWithin(-1, 0, 1)	// (3) ['Moxy', 'Ninjee', 'Moxy']
arr2.copyWithin(2, 0, 1)	// (3) ['Moxy', 'Ninjee', 'Moxy']
```



### Array.prototype.slice()

返回一个新的数组。是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝数组**（包括 `begin`，不包括`end`）。

```
arr.slice([begin[, end]])
```

参数：

1. begin：可选，开始拷贝的数组下标，负数则从倒数开始。

   - 如果是省略，相当于 `0` 下标，则从第一个开始。

   - 如果是 `-1` ，从倒数第一个开始（包含倒数第一个）。
   - 如果是 超出数组范围，则返回空数组。

2. end：可选，结束拷贝的数组下标（不包含数字位下标），负数则从倒数开始。

   - 如果是省略，会一直拷贝到末尾。
   - 如果是 `-1` ，从倒数第一个开始（包含倒数第一个）。
   - 如果是 超出数组范围，也拷贝到末尾。

返回：拷贝好的新数组

```js
let arr2 = ["Moxy", "Ninjee", "Walnut", "Black"]
let arr3 = arr2.slice(1,2)
arr2	// (4) ['Moxy', 'Ninjee', 'Walnut', 'Black']
arr3	// ['Ninjee']
```



## 数组的遍历

### Array.prototype.map()

### Array.prototype.flatMap()

`map` 会创建一个新数组，其结果是该数组中的每个元素用调用一次回调函数后的返回值。

与 `map` 不同的是，`flatMap` 可以顺势展开一层，使返回的新数组扁平化，但它只会只开一层。

```js
let new_array = arr.Map((currentValue[, index[, array]]) => {
    // return element for new_array
}[, thisArg])

let new_array = arr.flatMap((currentValue[, index[, array]]) => {
    // return element for new_array
}[, thisArg])
```

参数：

1. callback：回调函数，每个成员都会执行一遍；
   - currentValue：当前处理中的数组元素；
   - index：可选，当前元素的下标；
   - array：当前数组，正在被调用的数组；
2. thisArg：回调函数内的 `this` 指向；

 返回：一个新的数组，是每个成员执行完回调后 `return` 的结果。



`map()` 与 `flatMap()`

```js
// example 1
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);			// [[2], [4], [6], [8]]
arr1.flatMap(x => [x * 2]);		// [2, 4, 6, 8]
// only one level is flattened
arr1.flatMap(x => [[x * 2]]);	// [[2], [4], [6], [8]]

// example 2
let arr2 = ["it's Sunny in", "", "California"];

arr2.map(x => x.split(" "));	// [["it's","Sunny","in"],[""],["California"]]
arr2.flatMap(x => x.split(" "));// ["it's","Sunny","in", "", "California"]
```

map  的其他应用：

```js
// example 1
//  创建一个新数组，值为原数组中对应数字的平方根。
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
roots 	// [1, 2, 3]
numbers // [1, 4, 9]

// 相当于：
let roots2 = numbers.map((elem) => {
    return Math.sqrt(elem)
})
roots2 	// [1, 2, 3]

// example 2
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

let reformattedArray = kvArray.map(obj => {
   let rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

// kvArray 数组未被修改:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```



### Array.prototype.reduce()

### Array.prototype.reduceRight()

`reduce` 对数组中的每个元素执行一次回调函数（reducer函数）。通过累计值，对当前回调函数的结果进行记录，给下一个回调函数使用，这样直到全部元素的回调函数执行完毕，得出一个最终的累计值返回。

- `reduceRight` 基本和 `reduce` 相同，唯一的区别是它是倒着从后向前遍历的。

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

参数：

1. callback：回调函数，数组中每个成员都会执行一次，如果没有提供 `initialValue` 参数，则第一个元素不执行回调，而是作为 `initialValue` 。
   - accumulator：累计值，累计回调的返回值，它是上一次调用回调时返回的累积值，或 `initialValue`。
   - currentValue：当前处理中的数组元素
   - index：可选，当前元素的下标
   - array：可选，当前数组。
2. initialValue：可选，第一次调用 `callback` 时的 `accumlator` 累计值。
   - 如果没有设置，则数组中第一个元素就是 `initialVauel`。则回调从第二个成员开始执行。

返回：最终的累计值

```js
// example 1 计算数组成员的和
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let res = arr1.reduce((acc, cur) => {
    return acc + cur;
})
console.log(res) // 100

// example 2 数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (acc, cur) {
    if (acc.indexOf(acc) === -1) {
        acc.push(acc)
    }
    return acc
}, [])

console.log(myOrderedArray) // (5) ['a', 'b', 'c', 'e', 'd']

// 将二维数组转化为一维
let flattened = [[0, 1], [2, 3], [4, 5]].reduce((prev, cur) => {
        return prev.concat(cur);
    },[]);
flattened //  [0, 1, 2, 3, 4, 5]
```



### Array.prototype.forEach()

对数组的每个元素执行一次给定的函数。不返回有意义的值，返回 `undefined`。

- 那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。
- 除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环。
  - 后文的 `every()`，`some()`，`find()`，`findIndex()`，以及 `for...of` 和 `for...in` 可以提前终止。

```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

参数：

1. callback：数组中每个元素都会执行回调函数。
   1. currentValue：当前正在处理的元素；
   2. index：可选，当前元素的下标；
   3. array：可选，当前数组；
2. thisArg：回调函数中 `this` 的指向。

```js
// example 1 统计数组中已初始化的元素：
let arr1 = [1, 3, , , , 5, 7, 9, 11, , , 13, , 15, 17, , 19]
let num = 0;
arr1.forEach((cur, idx) => {
    console.log(cur) // 循环输出：1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    num++
})
console.log(num) // 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```



### Array.prototype.every()

### Array.prototype.some()

`every()`：测试一个数组内的 **所有元素** 是否都能通过回调函数的测试。如果都能通过，返回 true。

`some()`：测试一个数组内 是不是 **至少有 1 个元素** 通过了回调函数的测试。如果有1 个通过，返回 true。

```js
arr.every(callback(element[, index[, array]])[, thisArg])
arr.some(callback(element[, index[, array]])[, thisArg])
```

参数：

1. callback：用来测试的回调函数，接收 3 个参数：
   1. element：用于测试的当前值。
   2. index：可选，当前值的索引
   3. array：可选，当前数组
2. thisArg：可选，

返回：

- `every()`：如果回调函数的 `每一次` 返回都为 true，则最终返回 true；否则返回 false。
- `some()`：如果回调函数的 `有一个` 返回都为 true，则最终返回 true；否则返回 false。



举例：`erery()`

```js
// 下例检测数组中的所有元素是否都大于 10。
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```



举例：`some()`

```js
// 下例检测数组中，是否有存在大于10的元素。
function isBigEnough(element, index, array) {
    return element >= 10;
}
[1.2, 5, 8, 1.30, 4.4].some(isBigEnough); // false
[12, 54, 18, 130, 44].some(isBigEnough); // true
```



### Array.prototype.find()

### Array.prototype.findIndex()

`find`：返回数组中满足提供的回调函数的第一个 **元素的值**，否则返回 `undefined`。

`findIndex` ：返回数组中满足提供的回调函数的第一个 **元素的下标**，否则返回 `undefined`。

```js
arr.find(callback(element[, index[, array]])[, thisArg])
arr.findIndex(callback(element[, index[, array]])[, thisArg])
```

参数：

1. callback：每个成员都要执行的回调函数。一旦有一个回调返回 `true`，则执行结束。
   1. element：当前遍历到的成员；
   2. index：可选，当前成员下标
   3. array：可选，当前数组
2. thisArg：回调函数中，`this` 的指向。

`find` 返回：第一个满足回调函数的**成员的值**，全不满足返回 `undefined`。

`findIndex`  返回：第一个满足回调函数的**成员的值**，全不满足返回 `undefined`。

```js
// find
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function findItem(query) {
    return fruits.find(e =>
                       e.toLowerCase().indexOf(query.toLowerCase()) > -1
                      )
}
console.log(findItem("an"))	// banana
console.log(findItem("ng")) // mango
```

```js
// findIndex
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function findIndexItem(query) {
    return fruits.findIndex(e =>
                            e.toLowerCase().indexOf(query.toLowerCase()) > -1
                           )
}
console.log(findIndexItem("an")) // 1
console.log(findIndexItem("ng")) // 3
```



### Array.prototype.filter()

创建一个新数组, 把原数组中所有成员都通过回调函数过滤一遍，满足条件的成员会添加到新数组中。

```js
let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

参数：

1. callback：回调函数，原数组中所有成员都会执行一遍。如果返回 `true` 则证明成员通过测试，放入新数组中，反正则不保留。
   1. element：当前处理的数组成员；
   2. index：可选，当前成员的下标；
   3. array：可选，`arr` 数组本身；
2. thisArg：可选，回调函数中的 `this` 指向

返回：一个过滤后的新数组。

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

function isBigEnough(element) {
  return element >= 10;
}

let filtered = arr1.filter(isBigEnough);
filtered // (5) [11, 13, 15, 17, 19]


// 在数组中查找某关键字：
const  fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
    return fruits.filter(el => 
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```





## 数组的操作2

### Array.prototype.flat()

饭后一个新数组，展开一个层层嵌套的数组，或者说将一个 **数组扁平化**。

```js
let newArray = arr.flat([depth])
```

参数：depth，可选，要展开嵌套数组的结构深度，默认为  1，即只展开一层。

返回：展开后的一个新数组。

```js
// 数组arr需4层可完全扁平化
let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
let arr1 = arr.flat() // (5)[1, 2, 3, 4, Array(3)]
let arr2 = arr.flat(2) // (7)[1, 2, 3, 4, 5, 6, Array(3)]
let arr3 = arr.flat(5) // (10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```



### Array.prototype.join()

将一个数组（或类数组对象）的所有元素连接成一个字符串，并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```js
arr.join([separator])
```

参数：separator，可选，指定数组成员之间相连的分隔符。

- 默认为逗号 `,`。
- 如果是 `""` 空字符串，则元素之间没有分隔符。

返回：一个 string，连接好的 string。如果没有数组成员，则返回空字符串。

```js
// 数组
let arr2 = ["Moxy", "Ninjee", "Walnut"]
console.log(arr2.join())		// Moxy,Ninjee,Walnut
console.log(arr2.join(""))		// MoxyNinjeeWalnut
console.log(arr2.join("--"))	// Moxy--Ninjee--Walnut

// 类数组对象
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
```



### Array.prototype.fill()

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

```js
arr.fill(value[, start[, end]])
```

参数：

1. value：用来填充数组元素的值。
2. atart：起始索引，默认值为 `0`。可以为负数
3. end：终止索引，默认值为 `this.length`，可以为负数，不包含索引位。

```js
[1, 2, 3].fill(4);               // [4, 4, 4]

Array(3).fill({"name": "Moxy"})	// (3) [{…}, {…}, {…}]
        // 0: {name: 'Moxy'}
        // 1: {name: 'Moxy'}
        // 2: {name: 'Moxy'}

[1, 2, 3, 4, 5].fill(4, 1, -2);         // (5) [1, 4, 4, 4, 5]
```



### Array.prototype.splice()

此方法会改变原数组。对一个原数组，可以执行 **删除** 、 **替换** 或  **添加** 元素，并以数组形式返回被修改的内容。

```js
array.splice(start[, deleteCount[, item1, item2 ... ]]])
```

参数：

1. start：指定修改的开始下标。

   - 如果超出数组长度，则从末尾开始；
   - 如果是负数，则从倒数开始。

2. deleteCount：可选，整数，表示要 **删除** 的元素个数；

   - 如果省略，或 大于 `start` 后元素的总数，则 `start` 后的元素全部被删除（含 `start` 位置）；

   - 如果是 0 ，或 负数，则不移除元素。通常会执行添加元素

3. item1, item2 ... ：可选，要天添加的元素，从 `start` 位置开始添加。

返回：由被删除的元素组成的一个数组。

- 如果只删除了一个元素，则返回只包含一个元素的数组。
- 如果没有删除元素，则返回空数组。

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]
// 删除
arr2.splice(1, 1)	// ['Ninjee']
console.log(arr2)	// (3) ['Moxy', 'Walnut', 'Black']

// 替换,删除2个元素，添加3个元素，原数组长度发生改变
arr2.splice(0, 2, "Green", "Blue", "Red")	// (2) ['Moxy', 'Walnut']
console.log(arr2)	// (4) ['Green', 'Blue', 'Red', 'Black']

// 添加
arr2.splice(2, "", "Pink")	// []
console.log(arr2)	// (5) ['Green', 'Blue', 'Pink', 'Red', 'Black']
```



### Array.prototype.sort()

数组排序，使用原地算法。会修改原数组，并返回原数组。

```js
arr.sort([compareFunction])
```

参数：

1. compareFunction：可选，执行比较的函数。如果省略，默认按照转化为字符串的 `Unicode` 位置进行排序。

   - firstEl：当前元素。

   - secondEl：下一个元素。

返回：排序后的原数组，不会创建一个新数组，会修改数组。



`compareFunction`的具体解释：

- 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；

- 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变；

- 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前；



默认排序：数字、大写、小写：`1,2,3.. + A,B,C.. + a,b,c..`

```js
let arr = [1, 2, 4, 6, 5, 3, "a", "A", "B", "z", "Z"]
arr.sort() // (11) [1, 2, 3, 4, 5, 6, 'A', 'B', 'Z', 'a', 'z']
```

数字从大到小排序，降序：

```js
let arr = [1, 2, 4, 6, 5, 3]
arr.sort((a, b) => {
    return b - a
})
arr // (6) [6, 5, 4, 3, 2, 1]
```



## Iterator

### Array.prototype.entries()

返回一个新的 **Array Iterator** 对象，该对象包含数组中每个索引的 **键/值对**。

```js
arr.entries()
```

返回：一个 Iterator，可以用 `next()` 迭代

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

let it = arr1.entries()
for(let v of it()){
	console.log(it)
}
// (2) [0, 1]
// (2) [1, 3]
// (2) [2, 5]
// (2) [3, 7]
// (2) [4, 9]
// (2) [5, 11]
// (2) [6, 13]
// (2) [7, 15]
// (2) [8, 17]
// (2) [9, 19]
```



### Array.prototype.keys()

### Array.prototype.values()

### Array.prototype`[@@iterator]()`

返回一个包含数组中每个元素（键 / 值）的 `Array Iterator` 对象。

```js
arr.keys()		// 返回键 key
arr.values() 	// 返回值 value
arr[Symbol.iterator]() // 返回值 value，和 arr.values() 相同
```

返回：一个 iterator 迭代器。



举例：`arr.keys()	`

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]
let it = arr2.keys()
it.next()	// {value: 0, done: false}
it.next()	// {value: 1, done: false}
it.next()	// {value: 2, done: false}
it.next()	// {value: undefined, done: true}
```

对比 `Object.keys(arr)`，`arr.keys()` 

1. `arr.keys()` 会返回所有元素下标，包括没有对应元素的索引；
2. `arr.keys()` 返回一个迭代器，`Object.keys(arr)` 返回一个数组。

```js
let arr = ["a", , "c"];
let sparseKeys = Object.keys(arr);	// 返回一个数组
let denseKeys = [...arr.keys()];	// 返回一个迭代器
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```



举例：`arr.values() `

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]
let it = arr2.values()
it.next()	// {value: 'Moxy', done: false}
it.next()	// {value: 'Ninjee', done: false}
it.next()	// {value: 'Walnut', done: false}
it.next()	// {value: undefined, done: true}
```



举例：`arr[Symbol.iterator]()`

```js
let arr2 = ["Moxy", "Ninjee", "Walnut"]
let it = arr2[Symbol.iterator]()
it.next()	// {value: 'Moxy', done: false}
it.next()	// {value: 'Ninjee', done: false}
it.next()	// {value: 'Walnut', done: false}
it.next()	// {value: undefined, done: true}
```





## 队列

### Array.prototype.pop()

### Array.prototype.push()

### Array.prototype.shift()

### Array.prototype.unshift()

这四个方法是队列操作：

1. Push：在队列尾部插入一个或多个元素；
2. Pop：在队列尾部取出一个元素；
3. Unshift：在队列头部插入一个元素；
4. Shift：在队列头部取出一个元素。

这四个方法均会更改数组的长度：

1. `arr.push(elem1, ...elemeN)`：将一个或多个元素添加到数组的 `末尾`，并返回该数组的新长度。
2. `arr.pop()`：从数组中删除 **最后一个** 元素，并返回该元素的值。
   - 如果数组为空，则返回 `undefined`。
3. `arr.unshift(eleme1 ...elemN)`**开头**，并返回该数组的**新长度**。
4. `arr.shift()`：从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。
   - 如果数组为空，则返回 `undefined`。

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let arr2 = ["Moxy", "Ninjee", "Walnut"]

// push
let l = arr2.push("Walnut", "Black")
console.log(l, arr2) // 5 (5) ['Moxy', 'Ninjee', 'Walnut', 'Walnut', 'Black']

// pop
let v = arr2.pop()
console.log(v, arr2) // Black (4) ['Moxy', 'Ninjee', 'Walnut', 'Walnut']

// unshift
l = arr2.unshift("Green", "Blue")
console.log(l, arr2) // 6 (6) ['Green', 'Blue', 'Moxy', 'Ninjee', 'Walnut', 'Walnut']

// shift
v = arr2.shift()
console.log(v, arr2) // (5) ['Blue', 'Moxy', 'Ninjee', 'Walnut', 'Walnut']
```



## 打印

### Array.prototype.toString()

返回一个 string，表示指定的数组及其元素。

```js
arr.toString()
```

```js
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let arr2 = ["Moxy", "Ninjee", "Walnut", "Black"]

console.log(arr1.toString()) // 1,3,5,7,9,11,13,15,17,19
console.log(arr2.toString()) // Moxy,Ninjee,Walnut,Black
```



### Array.prototype.toLocaleString()

本地化输出：

```js
arr.toLocaleString([locales[,options]]);
```

```js
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', {
    timeZone: 'UTC'
});

console.log(localeString); // 1,a,12/21/1997, 2:12:00 PM
```



# 引用：

[Array - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


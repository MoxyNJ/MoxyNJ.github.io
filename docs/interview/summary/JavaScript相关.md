---
title: JavaScript相关
sidebar_position: 0.8
date: 2022-08-08
keywords:
  - 面试题
  - 面经
---

### 问题：isNaN, Number.isNaN

**isNaN() 是es5中的语法，而 Number.isNaN() 是es6的新语法**

- `isNaN` 用来判断一个值是否为NaN。但是，**只对数值有效**，如果传入其他值，会被先转成数值。
  - 比如，传入字符串的时候，字符串会被先转成 NaN，所以最后返回 true。也就是说，isNaN 为 true 的值，有可能不是 NaN，而是一个字符串。

- `Number.isNaN()` 不存在转换的过程，只有对于 NaN 才返回 true，非 NaN 一律返回 false。

```js
isNaN('abc')  // true
Number.isNaN('abc')  // false
```



### 问题：0.1+0.2=？0.6-0.4=？

![img](images/JavaScript%E7%9B%B8%E5%85%B3.assets/1630157012636-bb9e556a-a082-4130-8d0b-7a85406efedc.png)



### 问题：常见的登录方式/前端鉴权

- [前端登录](https://juejin.cn/post/6845166891393089544)
- [前端鉴权：cookie、session、token、jwt、单点登录](https://juejin.cn/post/6898630134530752520)



### 问题：

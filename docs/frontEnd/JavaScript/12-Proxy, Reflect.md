---
title: 12. Proxy, Reflect
sidebar_position: 12
date: 2022-07-28
tags: [JavaScript]
draft: true
---

## 1 Proxy



https://juejin.cn/post/7080916820353351688

## 为什么需要Proxy

回想一下在 ES6 之前，是如何监听对象的操作呢？

通过 `Object.defineProperty()` 来实现的。get set 作为拦截器，监听对象属性的数值变化。

缺点：

1. 改变了 Object.defineProperty的初衷，其初衷仅仅只是对象属性的描述符进行设置，现在在里面进行逻辑操作。
2. 改变了属性的描述符。从默认的**数据属性描述符**转变成了**存取属性描述符**了，改变了属性的本意。
3. 拦截的对象操作有限，只能对获取和**设置**进行**拦截**，其他操作（删除等）就无能为力了。

**Proxy** 创建一个**代理**。

1. 简单的来说，监听对一个对象的操作，可以先创建一个代理对象（Proxy对象）。
2. 之后对该对象的操作，都是通过对代理对象操作来完成的，**代理对象可以监听了对原来对象进行了哪些的操作，进行捕捉**。
   - 13种：set、get、has、deleteProperty、getPrototypeOf、setPrototypeOf、isExtensible、preventExtensions、getOwnPropertyDescriptor、defineProperty ...

**Reflect** 提供了对应的 13 种操作对象的方法，捕捉器一一对应。




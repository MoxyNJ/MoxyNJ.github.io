---
title: 1. React笔记
sidebar_position: 1
date: 2022-08-05
tags: [React]
---

React 架构体系三大模块

- 调度
- 协调
- 渲染



## React 设计理念

### 问题：React 运行机制 / 架构

##### 设计理念

浏览器的性能瓶颈在 CPU 和 IO。

React 解决 CPU / IO 的瓶颈：**异步可中断的更新**。

浏览器的刷新率通常为 60Hz/s，也就是 16.6ms 刷新一次页面。

- 16.6ms 中，浏览器需要完成：JS脚本执行、样式布局、样式绘制。

当渲染的处理时间超过 16.6ms，页面就会卡顿。通常使用节流（间隔触发）、防抖（最后一个触发），都是通过限制更新频率来提升性能。

React 把同步更新，变为异步可中断进行更新。React 通过 fiber 把渲染任务切分为多个小段，每个小段执行完毕后会把主动权交还浏览器，浏览器则可根据当前任务的优先级，把剩余时间分配给更重要的任务，以确保尽可能的响应及时。

- 16.6ms 中，当浏览器执行完重要任务后，会把剩余时间交给 React 取执行尚未处理完的任务，如果剩余时间不够，就会把剩余任务在下一个 16.6ms 周期中执行。

这样，浏览器就有充足的时间进行样式布局和页面绘制，而 React 也可以在分配给自己的时间内执行完任务。

##### 异步可中断

React 15+ 实现了异步可中断的架构。

- Scheduler 调度器：调度更新，给更新任务安排优先级。
- Reconcoler 协调器：决定需要更新什么组件，当更高优任务来到时，可中断当前任务。
- Renderer 渲染器：将组件更新到视图中，渲染过程是同步且不可中断的，需要一气呵成。

在 render 函数的执行周期中，有调度（事件触发）、协调（render）、渲染（commit）三个阶段：

![image-20220806230807382](images/React_Note.assets/image-20220806230807382.png)



#### 1 调度阶段

当 React 需要更新时，更新任务首先被 Scheduler 调度器 处理。

处理的工作有：

- **创建项目根 Fiber 节点**。首次渲染页面时，会创建唯一的根节点 FiberRoot Node。
- **创建应用根 Fiber 节点**。每一个 `ReactDOM.render()` 都会创建一个 rootFiber。
- **初始化事件**。Scheduler 会把任务按照优先级排序，让更高优的任务首先进入 Reconciler 协调器进行下一步处理。



#### 2 协调阶段

**协调阶段是 Reconcoler 协调器在参与，也被称为 render 阶段**，如下图 renderRootSync 都为协调阶段。

![image-20220806231908259](images/React_Note.assets/image-20220806231908259.png)

Scheduler 调度器会通过 diff 算法，处理传入的更新任务。diff 完毕后，会由 fiber 构成一颗新的 virtualDOM 树，然后提交给 Renderer 渲染器进一步处理。

##### 该阶段的特点：

- **可暂停**。而在 Reconciler 在进行 diff 算法时，如果调度器传来一个更高优的任务，那么当前处理的更新任务会被暂停，让调度器放入任务队列中，优先处理传入的更高优任务。
- **用户透明**。由于调度器和协调器是在内存中工作，即使 diff 中断，用户也无法感知到页面渲染被中断 / 卡顿。
- **构建 work In Progres 树**。diff 算法会构建一颗虚拟 dom 树，视图上真实存在的节点，都有一个对应的节点在虚拟 dom 上。需要更新的节点会被打上标记 Update。被打了标记的虚拟 dom 会交给渲染器。

##### 该阶段的工作：

**调和 work IN Progress Tree**，也可以理解为构建 work IN Progress Tree。

构建过程是一个递归过程，从  `rootFiber`  开始向下深度优先遍历的，具体可以分为 n 个：递阶段 + 归阶段。

**（1）递阶段**

递阶段，是向下调和的过程。

调用 **beginWork** 方法，从  `rootFiber`  开始向下深度优先遍历，为遍历到的每个 fiber 节点。

该方法会根据传入的 `Fiber节点` 创建 `子Fiber节点`，并将这两个 `Fiber节点` 连接起来（**fiber.child** 指针）。当遍历到叶子节点（即没有子组件的组件）时就会进入 “归” 阶段。

如果不是初次渲染，而是更新页面，此时已经存在一个构建好的 **Current Tree**，**beginWork** 方法会由 fiberRoot 根节点，按照 **child** 指针逐层向下调和。

beginWork 具体的工作如下：

- 对于组件，执行部分生命周期，执行 render ，得到最新的 children。
- 向下遍历调和 children ，复用 oldFiber ( diff 算法)。
- 打不同的副作用标签 effectTag ，比如类组件的生命周期，或者元素的增加，删除，更新。这些被标记的节点，会在归阶段收集起来，形成单项链表 effectList。

```js
// 生命周期钩子会在协调阶段被调用：
constructor
componentWillMount 废弃
componentWillReceiveProps 废弃
static getDerivedStateFromProps
shouldComponentUpdate
componentWillUpdate 废弃
render


// 常见的 effect tag
export const Placement = /*             */ 0b0000000000010;  // 插入节点
export const Update = /*                */ 0b0000000000100;  // 更新fiber
export const Deletion = /*              */ 0b0000000001000;  // 删除fiebr
export const Snapshot = /*              */ 0b0000100000000;  // 快照
export const Passive = /*               */ 0b0001000000000;  // useEffect的副作用
export const Callback = /*              */ 0b0000000100000;  // setState的 callback
export const Ref = /*                   */ 0b0000010000000;  // ref
```



**（2）归阶段**

归阶段，是向上并归的过程。

调用 **completeWork** 方法，来处理当前的 Fiber 节点。

当某个 `Fiber节点` 执行完 `completeWork`，如果其存在 `兄弟Fiber节点`（**fiber.sibling** 指针 ），会进入其 `兄弟Fiber` 的 “递”阶段。如果不存在 `兄弟Fiber`，会进入 `父级Fiber` 的“归”阶段（**fiber.return** 指针）。

在此期间会形成 effectList 单项副作用链表。如果是初次渲染的初始化流程，会创建 DOM ，对于 DOM 元素进行事件收集，处理 style，className 等工作。

- completeUnitOfWork
  会将 effectTag 的 Fiber 节点会被保存在一条被称为 effectList 的单向链表中。在 之后的 commit 阶段，将不再需要遍历每一个 fiber ，只需要执行更新 effectList 就可以了。
- completeWork 阶段
  对于组件，会处理 context ；
  对于元素标签初始化，会创建真实 DOM ，将子孙 DOM 节点插入刚生成的 DOM 节点中；
  会触发 diffProperties 处理 props ，比如事件收集，style，className 处理，在15章讲到过。



**（3）进入循环**

“递”和“归”阶段会交错执行，直到 “归” 到 `rootFiber` 根结点。至此，`render阶段` 的工作就结束了。

- 构成（调和）了由 fiber节点构成的 work IN Progress Tree 树。
- 构成了接下来 commit 阶段需要执行更新的 effectList 副作用链表。

![截屏2022-08-08 00.27.04](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2000.27.04.png)



#### 3 渲染阶段

**渲染器工作的阶段，是 Renderer 渲染器在参与，被称为 commit 阶段**，下图中，commitRoot 就是 commit 阶段。

![image-20220806232428977](images/React_Note.assets/image-20220806232428977.png)

本次更新由哪些组件需要更新视图，会让渲染器来分别执行这些视图更新操作。

每一个子阶段都是一个 while 循环，**从头开始** 遍历副作用链表。

- 视图更新操作：对 DOM 节点的增、删、查、改。
- 渲染器把被打了标记的虚拟 dom 对应的真实 dom 节点执行更新 dom 的操作。
- Mutation 突变，对于浏览器来说，就是 DOM 操作。



该阶段触发的生命周期函数有：

```js
// before mutation 阶段
getSnapshotBeforeUpdate

// mutation 阶段
componentWillUnmount

// layout 阶段
componentDidMount
componentDidUpdate
```



**（1）mutation 前阶段**

通常被称之为 before mutation 阶段，调用函数 `commitBeforeMutationEffects`。

- **class 组件**。执行 `getSnapshotBeforeUpdate` 生命周期函数。因为 Before mutation 还没修改真实的 DOM 所以此时类组件可以获得更新 DOM 前的快照。
- **函数组件**。创建微任务，给 `useEffect` 的回调函数设定 normal Scheduler Priority，然后等待 commit 完成后，再 **异步执行**。防止同步执行时阻塞浏览器做视图渲染（如果对 dom 操作，则又要重协调）。



**（2）mutaiton 阶段**

通常被称之为 mutation 阶段，调用函数 `commitMutationEffects`。

遍历包含 EffectTag 的 fiber 节点，所组成的 effectList 链表。处理每一个 fiber 节点的副作用，这些副作用有：

- **DOM 相关操作**：增删改。Placement 插入，Update 更新 DOM 属性，Deletion 删除。
- **class 组件**。调用 class 组件 componentWillUnmount 生命周期函数。
- **函数组件**。执行 useLayoutEffect 的销毁函数，useLayoutEffect 是 **同步执行** 的。
- **Ref 属性**。解绑/更新 Ref 属性。



**（2.1）更改 current 指针**

在进入 layout 节点前，会执行：

```js
root.current = finishedWork;
```

这就是 React 架构的双缓存机制中，Work In Progress Fiber 树完成渲染，此时 `fiberRoot.current` 指针会从之前的 current Fiber 树，指向现在的 Work In Progress Fiber 树。此时，Work In Progress Fiber 树，就变成了新的 Current Fiber 树。

在该实际触发，是因为在 layout 阶段会执行 `componentDidMount` 和 `componentDidUpdate `这两个生命周期函数，此时，Current Fiber 树已经指向了本次完成的 Work In Progress Fiber 树，这两个生命周期会对新的 Current Fiber 树进行操作。



**（3）mutation 后阶段**

通常被称之为 layout 阶段，调用函数 `commitLayoutEffects`。

- **函数组件**。
  - 执行 useLayoutEffect 的回调函数，是 **同步执行** 的。
  - 绑定 useEffect 的销毁 + 回调函数，以便在 commit 阶段完成后，**异步执行** useEffect 销毁 + 回调函数。
- **类组件**。
  - 根据组件状态，同步执行，调用 class 生命周期：
    - ComponentDidMount（组件挂载）、ComponentDidUpdate（组件卸载）
  - 同步执行 `this.setState(arg, callback)` 中的 `callback`回调。
- 处理 Ref 属性。



### 问题：algebraic effects

Process 进程、Thread 线程、Coroutine 协程、Fiber 纤程

- JavaScript 通过 Generator，在协程层面实现了异步可中断更新。

algebraic effects 代数效应：是函数式编程中的概念，用于将副作用从函数调用中分离。

> - https://zhuanlan.zhihu.com/p/380855727
>
> - https://juejin.cn/post/6844903976299675662



#### algebraic effects 的由来

- 在异步编程中，如果想用同步的思维编写代码，就要使用 async/await。但 async 函数具有传染性，调用 async 的函数也必须要用 async 定义。这样逐渐传染出去，所有的函数都需要变成异步函数，造成了大范围影响，同步异步代码也不易区分。

新的需求：在同步代码中，可以调用异步函数并获得结果。但不影响同步函数的逻辑（同步函数不要 async 定义）

- try/catch  + throw 具有跳出当前代码块（throw 区），然后冒泡到 try/catch 被捕获，在 catch 继续执行代码的能力。

新的需求：Js 中，具有从同步代码跳出的逻辑，就是 try/catch 了，但只能从 throw 跳出到 catch，不可以再携带结果回到 throw 中。我们如何定义这样的功能呢？

- 此时我们需要一个可以在 throw 区暂停执行，从 catch 区域获取答案，再跳回 throw 处继续执行代码的 “异步” 能力。这就是许多文章中说的定义一个语法：perform，try/handle，resume with。

```js
function getName(user) {
  let name = user.name;
  if (name === null) {
    // 1. 我们在这里 perform 了一个 effect：name = perform 'ask_name';
    name = perform 'ask_name';
    // 4. …… 然后最终回到了这里（name 现在是「Arya Stark」了 
  }
  return name;
}

function makeFriends(user1, user2) {
  user1.friendNames.add(getName(user2));
  user2.friendNames.add(getName(user1));
}

const arya = { name: null };
const gendry = { name: 'Gendry' };

try {
  makeFriends(arya, gendry);
} handle (effect) {
  // 2. 我们跳到了handler（就像 try/catch）
  if (effect === 'ask_name') {
    // 3. 然而我们可以 resume with 一个值（这就不像 try / catch 了！）
    resume with 'Arya Stark';
  }
}
```

- 通过 perform + resume with 实现对后续流程的控制，控制反转 + 控制恢复。
- 通过 try/handle 实现跨调用栈捕获当前 continuation（延续—），在上面的例子中，就是让同步代码可以继续执行下去的那个值（name）。resume with 可以替换 当前的 continuaiton，让 perform 处恢复执行。

需求满足：通过上述的语法糖，实现了在同步代码中，调用一个异步函数但不影响同步代码区的目的。



#### Algebraic Effects 解决的问题

**分离了 "主逻辑做什么" 和 "副作用实现"**。

在上面的例子中，

- **主逻辑** 就是 getName 函数要通过 user 对象获得并返回 name。
- **副作用** 就是当出现找不到名字时，通过 perform 拿到一个名字。

所以，副作用的实现：perform 处的 `ask_name` 换来了 resume with 处的 `Arya Stark`。就是代数效应需要解决的核心问题。通过穿透调用栈的换元法实现副作用。

- Algebraic: 代数式，可以理解成初中数学的 **换元法**。
- Effect：副作用。

总结来说，代数效应解决了 **分离了 "主逻辑做什么" 和 "副作用实现"**，也就是确保主逻辑和代码不受影响的情况下，实现副作用。这需要：

1. 穿透能力：可以跨调用栈获取当前 Continuation。
2. 恢复执行：可以替换当前 Continuation 内 Effect 的实现。



#### React Hooks 思想

React Hooks 的代码示例：

```jsx
function useLog(id) { 
  useEffect(() => { 
    console.log(id, 'mount') 
    return () => { 
      console.log(id, 'unmount') 
    } 
  }, []) 
} 
 
function Foo() { 
  useLog('Example') 
  return <div>Foo</div> 
} 
 
function Bar() { 
  useLog('Bar') 
  return <div>Bar</div> 
} 
```

穿透能力：

useHook 实现了穿透调用栈的效果。不论 hooks 如何嵌套在作用域中，只要保证是同步调用 hooks，都能正确作用于对应组件。

每一个 Function Component 看作是 React 里的 Continuation，对 Continuation 的调度是交给 React Fiber 控制的，也就是 fiber 实现了代数效应。

恢复执行：`useHook(callback)` 中，callback 是该组件副作用的实现，hook 抽象出了 React 组件里的副作用。让组件内的主逻辑不受影响。



### 问题：初次渲染 / 更新 的区别

##### 初次渲染

初次渲染时，没有两颗相同的 fiber tree。 FiberRootNode.current 会指向一个单独的 RootFiberNode 节点，其节点下没有任何子节点（即`current Fiber树`为空）。

于此同时，会在内存中构建 Work In Progress Fiber Tree。WIP 树和 CUR 树的 FiberNode 节点会通过 .alternate 相互指向：

![截屏2022-08-07 22.42.10](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-07%2022.42.10.png)

当 workInProgress 树构建完成后，代码中称之为 finishedTree，此时 `.current` 指针指向 finishedTree，使其变为 current fiber tree，初始化流程在协调阶段的任务完成。



##### 更新 Update

基于上述 tree，当用户点击一次按钮，发生页面更新时，会重新创建一颗 workInProgress tree。

通过 diff 算法，workInProgress tree 会决定是否复用 current fiber tree 同一层级的 fiber 节点数据。

- 能被复用，本次更新中，需要做组件的 update、元素的 move 和 update 等操作；
- 不能复用，本次更新中，需要做组件的 mount 和 umount、元素的 insert 和 delete 等操作。

在构建 workInProgress Fiber 树时,  **会尝试复用 current Fiber 树中已有的 Fiber 节点内的属性**。在 **首屏渲染** 时，只有 rootFiber 存在对应的 current fiber（即 rootFiber.alternate），无法复用。

- **处于同一层次的节点，会通过 .alternate 属性相互指向，workInProgress tree 也会优先复用 current fiber tree  处在同一层次节点的属性。**

RootFiber 已经创建不需要复制，但其子节点由于尚不存在， 则 react 需要重新创建一份，和 current 树上的 fiber 建立起 alternate 关联，然后复制 current 树上节点的属性。渲染完毕后，workInProgresss 再次变成 current 树。

![截屏2022-08-07 22.49.01](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-07%2022.49.01.png)



##### 再次更新

如果进行下一次更新，那么会将 current 的 alternate 作为基础（如图右树），复制一份作为 workInProgresss ，然后进行更新。

- 所谓 “复制”，具体是指在构建 workInProgress Fiber 树时会尝试复用 current Fiber 树中已有的 Fiber 节点（.alternate 可以相互指向的，同一层次的节点）内的属性。而决定是否复用过程，就是 diff 算法。



> https://juejin.cn/post/7118259566868955167
>
> https://github.com/lizuncong/mini-react/blob/master/docs/render/%E6%B7%B1%E5%85%A5%E6%A6%82%E8%BF%B0%20React%E5%88%9D%E6%AC%A1%E6%B8%B2%E6%9F%93%E5%8F%8A%E7%8A%B6%E6%80%81%E6%9B%B4%E6%96%B0%E4%B8%BB%E6%B5%81%E7%A8%8B.md
>
> https://www.jianshu.com/p/6660d3ab0394



### 问题：哪些方式可以触发 update 更新？

对于用户来说，对 UI 的操作都有可能触发 update 更新：拖动组件、输入文本、点击按钮改变 state 等等。

对 React 内部来说，通过对 DOM 事件监听，会触发对应的回调函数，按照可以触发更新的方法所隶属的组件分类：

- `ReactDOM.render()` —— HostRoot
- `this.setState()` —— ClassComponent
- `this.forceUpdate()` —— ClassComponent
- `useState()` —— FunctionComponent
- `useReducer()` —— FunctionComponent

可以看到，一共三种组件（`HostRoot` | `ClassComponent` | `FunctionComponent`）可以触发 update 更新。



## diff 相关

### 问题：什么是 virtual DOM

从结构来看：虚拟 DOM 是一个 JavaScript 对象。其保存了每一个节点的 type、props、key、ref、children 等信息（具体看 fiber 结构）。

从本质来看：在 React 运行时，有两颗 virtual DOM（双缓存机制）：current fiber 树 + work in progress fiber 树。其是由于 fiber 对象所组成的。

从来源来看：虚拟 DOM 是通过 `React.creatElement()` 创建的 React Element 构建的 DOM 树。

对比真实DOM来看：virtual DOM要比真实 DOM 轻的多，少了很多用不到的默认属性和方法。



测试：

用 `React.createElement` 和 `document.createElement` 创建节点并打印：

```js
const VDOM = React.createElement('div', {}, '小杜杜');
const DOM = document.createElement("div");
DOM.innerHTML = '小杜杜';

console.log(`虚拟DOM：`, VDOM);
console.log(`真实DOM：`, DOM);
```

结果：

![1.png](images/React_Note.assets/58db2ee32bde44b3afd5e2e6af3e3647~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

虚拟 DOM 是一个 js 对象，而真实 DOM 上还挂在了许多默认属性和方法：

![2.png](images/React_Note.assets/c859397a03024903939f934907052cc2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

虚拟 DOM 的结构：

- type：实际的标签
- props：标签内部的属性（除 `key` 和 `ref` ，会形成单独的 `key` 名）
- children: 为节点内容

```jsx
// 转化前
<div className='Index'>
  <div>Hello World 123</div>
  <ul>
    <li>React</li>
    <li>Vue</li>
  </ul>
</div>

// 转化后
{
  type: 'div',
    props: { class: 'Index' },
      children: [
        {
          type: 'div',
          children: 'Hello World 123'
        },
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: 'React'
            },
            {
              type: 'li',
              children: 'Vue'
            },
          ]
        }
      ]
}
```





### 问题：virtual DOM 的优势

主要有三：提高效率、提升性能、增强兼容性。

##### 1. 提高效率

使用原生 JS 的时候，我们需要的关注点在 **操作DOM** 上，而 `React` 会通过 `virtual DOM` 来确保 `DOM` 的匹配。程序员只需使用 JSX 来进行声明式编程，也就是说，程序员不需关系 dom 是如何构建 / 操作 / 更新的，React 会处理一切，而只需要关系业务逻辑。

##### 2. 提升性能

虚拟 DOM 通过 diff 算法 + 基于双缓存的批量处理机制，优化了每次更新真实 DOM 得操作，使更新尽可能的局部、改动尽可能的少，从而减少对真实 DOM 的操作，最终提升性能。

##### 3. 增强兼容性

基于 virtual DOM，让 React 可以兼容各种浏览器，甚至跨平台兼容。

- `React` 基于虚拟 DOM 实现了一套自己的事件机制，并且模拟了事件冒泡和捕获的过程，采取 **事件代理**、**批量更新** 等方法，从而磨平了各个浏览器的事件兼容性问题。
- 对于跨平台，`React` 和 `React Native` 都是根据 **虚拟DOM** 渲染出相应平台的 `UI` 层，只不过不同的平台有不同的渲染引擎而已。

> - https://juejin.cn/post/7116326409961734152



### 问题：diff 原理

##### 概述

从 React 的运行原理来说，React diff 是协调（**reconciliation**）阶段的主要任务，协调阶段也称 render 阶段。React diff 会计算出 Virtual DOM 中真正变化的部分，并构建好一颗 Work In Progress Fiber Tree 和一个 EffectList 单项符作用链表，**指名哪些节点需要被更新**。在渲染阶段（commit 阶段），React 会只针对 effectList 上的 fiber 节点进行 DOM 操作，而不是对整个页面（树）进行重新渲染。

传统 diff 算法使用循环递归对节点一次对比，时间复杂度为 *O(n^3)* 。React 改进后将时间复杂度降为 *O(n)*。

React diff 的策略有：

1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

基于以上三个前提策略，React 分别对 tree diff、component diff 以及 element diff 进行算法优化：

- tree diff、component diff、element diff

##### tree diff

基于策略一，React 对树的 diff 算法进行优化，即两棵树只会对同一层次的节点进行比较，而不考虑跨等次的节点比较。而在初次构建 fiber tree 时，基于双缓存的思想，已经构建好了 work in progress fiber tree 和 current fiber tree，且两棵树的统一层级的 fiber 节点会用 fiber.alternate 相互连接。这样对一棵树只需遍历一次，便能完成整个 DOM 树的比较。

- **跨层级移动操作的处理**。React 对节点跨层级的移动操作不会 diff 比较，只有销毁旧节点和重新创建。所以通过同层遍历，React 发现同级节点已经发生变化，则会把该节点和其子节点全部销毁，然后重新创建新节点。



**🚀 性能优化**：在页面中使用 antd 的 model 模态框时，尽可能不要移除该节点，而是使用 css 隐藏掉。



##### component diff

React 是基于组件构建应用的，diff 算法会在组件间也有优化，基于策略 2：

- 如果是不同类型的组件进行 diff，和 “跨层级的移动操作” 一样，会直接销毁整个旧组件，重新创建新组件。
- 如果是同一类型的组件进行 diff，则 DOM 结构大致相似，会按照 tree diff 算法进行比较。



**🚀 性能优化**：如果是同一个组件，本次更新时 Virtual DOM 没有任何变化（props、state 也没有变化），那么用户可以通过性能优化告知 React ，diff 会跳过该组件的对比。

- 对于 class 组件来说，通过 shouldComponentUpdate + shallowEqual，或直接使用 PureComponent。
- 对于 function 组件来说，通过 React.memo 包裹。

> **shouldComponentUpdate** 
>
> render （调合）阶段的生命周期函数。**用于拦截组件渲染**。
>
> 1. 父组件更新，子组件必须更新。
>
> 当使用component时，父组件的state或prop更新时，无论子组件的state、prop是否更新，都会触发子组件的更新，这会形成很多没必要的render，浪费很多性能。
>
> 2. shallowEqual 可以浅对比组件的 props 和 state 是否发生变化，从而避免无意义的 render。
>
> 在 shouldComponentUpdate 中，使用 shallowEqual 比较组件的 props 和 state 是否发生变化，最后返回 true 的时候，当前组件进行 render；返回 false 则不进行 render。
>
> 
>
> **PureComponent / React.memo**
>
> PureComponent 是针对类组件的语法糖，而 React.memo 让函数组件也可以使用，通过 React.memo 包裹函数组件，回返回一个高阶组件。
>
> - 另：函数组件没有 shouldComponentUpdate 周期。
>
> React 给出了官方的定义：使用 PureComponent 定义组件。可以完成上述 2 的操作。PureComponent 会在 shouldComponentUpdate 周期进行一次 shallowEqual 浅对比，从而尽可能避免 render。



##### element diff

当 fiber 节点处于同一层级时，React diff 提供了三种节点操作，分别为：**INSERT_MARKUP**（插入）、**MOVE_EXISTING**（移动）和 **REMOVE_NODE**（删除）。

- **插入**：当前节点所在的组件，不在原来的集合中存在，即是全新的节点，执行插入操作。
- **移动**：当前节点所在的组件，存在于原来的集合中，且节点内可更新（ DOM 结构相似等递归判断），则根据 React 唯一 key 进行区分，并且执行移动操作。
  - 如：(A,B,C,D) → (A,D,B,C)，传统 diff 会把 B,C,D 全部销毁并重新创建，而 React 仅移动位置。
- **删除**：当前节点的所在组件虽然存在在原来的集合中，但节点不能直接复用和更新，所以需要删除旧节点。或旧节点已经不再需要，执行销毁。

节点间的移动策略，是通过节点下标 lastIndex/_mountIndex 判断，这里不细说了。



可否复用的原则：

- 如果 key 未定义，则默认 key = null。
- 更新后，判断 key 是否改变：
  - key 改变，不能复用。
  - key 没改变，继续判断 type 是否改变：
    - type 改变，不能复用。
    - type 没变，当前节点可以复用。需要判断其 children 下的节点是否需要更新。





**🚀 性能优化**：

1. 对同一层级的一组子节点，可以给它们添加唯一的 key 进行区分，则 React 可以在更新前后通过 key 去判断该节点及其子节点是否发生更新，提升性能。
2. 尽可能保持 DOM 结构稳定，减少大量移动同级节点的操作，比如从队头插入新节点 / 将对尾巴的节点移动到队头。

> 参考：
>
> https://juejin.cn/post/7116326409961734152
>
> https://juejin.cn/post/6844903944796258317
>
> https://zhuanlan.zhihu.com/p/20346379
>
> https://juejin.cn/book/6945998773818490884/section/6959807335720026150



### 问题：双缓存模型

**产生原因**：

1. 双缓存模型是一个解决图形编程中 “**闪烁问题**” 的方案。其基本原理是在内存中绘制当前帧，绘制完毕后直接用当前帧替换上一帧，由于省掉了帧与帧之间替换的时间因此可以有效的避免闪烁问题。 
2. react 15+ 的新架构，协调阶段的异步可中断。通过双缓存，当更高优任务来到，需要中断当前 diff 的树时，由于存在 current fiber tree 正常工作。所以 workInProgress fiber tree 的中断并重新构建，不会影响页面的正常展示，对用户透明。



**实施阶段**：在协调阶段，react 通过 双缓存机制输出两颗 fiber tree（work in progress fiber tree 内存中的树，current fiber tree 渲染树）。这两棵树中，同级节点通过 `fiber.alternate` 指针相互连接。current fiber tree 代表了页面正在展示的 DOM 内容，而 work in progress fiber tree 是内存中 react 正在构建的 fiber tree，是本次更新之后页面展示的 DOM 内容。

**实施过程**：当触发更新时，react 会通过 diff 算法（官方称 Reconciliation）对比 current fiber tree，构建一颗 work in progress fiber tree。

- 在构建 workInProgress Fiber 树时,  **会尝试复用 current Fiber 树中已有的 Fiber 节点内的属性**。在 **首屏渲染** 时，只有 rootFiber 存在对应的 current fiber（即 rootFiber.alternate）。
  - 更多见问题：初次渲染 / 更新的区别。
- 引入协调阶段的工作内容：深度遍历优先、递阶段、归阶段、构建 effectList 副作用链。
- 渲染阶段：在下一次渲染的时候，直接复用缓存树做为下一次渲染树，上一次的渲染树又作为缓存树，这样可以防止只用一颗树更新状态的丢失的情况，又加快了 DOM 节点的替换与更新。

总结：一个元素最多存在两个版本的 fiber 节点，一个 current 版本和当前浏览器页面对应，一个 WorkInProgress 版本，WorkInProgress 版本是正在协调的节点。



## Fiber

### 问题1 为什么要引入 Fiber 架构？

fiber 是针对单进程的一种调度策略。

在操作系统中，介绍过常见的单处理进程调度策略：

- 先到先得(First-Come-First-Served, FCFS)
  - 优点：简单，易实现
  - 缺点：对短进程不利、对 I/O 密集型进程不理。
- 轮转
  - 抢占策略。确定合理的时间片长度，公平地给每一个进程一定的执行时间，当时间消耗完毕或阻塞，操作系统就会调度其他进程，将执行权抢占过来。
- 最短进程优先(Shortest Process Next, SPN)
  - 缺点：对长进程不利，会饥饿。
- 最短剩余时间(Shortest Remaining Time, SRT)
  - 根据剩余时间的长短，优先执行可最快完成的进程。
  - 缺点：对长进程不利，会饥饿。
- 最高响应比优先(HRRN)
  - 响应比 = （等待执行时间 + 进程执行时间） / 进程执行时间
  - 解决长进程饥饿问题，引入了等待执行时间，让等待时间较长的可以尽可能优先执行。
- 反馈法，多队列
  - 每个进程一开始都有相同的优先级，每次被抢占(需要配合其他抢占策略使用，如轮转)，优先级就会降低一级。因此通常它会根据优先级划分多个队列

浏览器中，JavaScript 的执行也是单线程的。Javascript 引擎和页面渲染引擎在同一个`渲染线程`，GUI 渲染和 Javascript执行 两者是互斥的。如果让 js执行长期占据渲染进程，浏览器就会呈现 “卡死” 状态，页面无法刷新。

对于’前端框架‘来说，解决这种问题有三个方向:

- 1️⃣ 优化每个任务，让它有多快就多快。挤压CPU运算量
- 2️⃣ 快速响应用户，让用户觉得够快，不能阻塞用户的交互
- 3️⃣ 尝试 Worker 多线程

Vue 从1⃣️角度入手，通过模版 + 响应式机制，提升任务运行速度。

React 从2⃣️角度入手，通过 fiber 架构，把任务切分，提升浏览器响应速度。

具体为：

React 有三大模块：

- Scheduler 调度器：调度更新.

- Reconcoler 协调器：决定需要更新什么组件.

- Renderer 渲染器：将组件更新到视图中.

其中，`Reconcilation` 协调阶段是 CPU 密集型操作，fiber 把该环节切分，使 `Reconcilation` 过程变成可中断，适时的让出 CPU 执行权（16.6ms），好处：

- 不再一次性操作大量 DOM 节点，而是分批延时对 DOM 进行操作。提升了浏览器的响应速度。
- 给浏览器一点喘息的机会，他会对代码进行编译优化（JIT）及进行热代码优化，或者对reflow进行修正



### 问题2 什么是 Fiber

是一种流程控制机制：

- 一个动态执行单元
- 一种静态数据结构



#### 1 流程控制机制

Fiber 也称协程、或者纤程。 是一种控制流程的让出机制。协程和线程并不一样，协程本身是没有并发或者并行能力的（需要配合线程）。

Fiber 实现了代数效应（看代数效应的例子），可以近似的理解为是 async/await + try/catch 的结合。

- 普通函数的执行过程中无法被中断和恢复：async/await 实现了中断和恢复。
- 但因此导致了副作用：async具有传染性，需要全部的函数都为 async。如果可以类似 try/catch 的效果，让副作用和主逻辑分离，则代码逻辑更清晰。

**React 渲染的过程可以被中断，可以将控制权交回浏览器，让位给高优先级的任务，浏览器空闲后再恢复渲染**



合作式调度 Cooperative Scheduling：浏览器中没有抢占机制，无法中断正在执行的任务，所以 React 需要具备让出机制，主动让出控制权。

这是一种给予信任的契约合作机制：React 会根据自己的任务量，向浏览器申请适量的时间片。而浏览器会先执行更高优先级的任务，再把剩余时间分给 React，React 也会在规定的时间内完成任务执行，归还控制权。

![img](images/React_Note.assets/16deecc37fdd60d7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

那么，如何确定剩余时间呢？或者哪些任务是更高优先级的呢？

在一帧（16.6 ms）中，浏览器会执行以下任务：

- 处理用户输入事件
- Javascript执行
- requestAnimation 调用
- 布局 Layout
- 绘制 Paint

如果在执行完这些必须任务后，还有剩余的时间，就可给 React 去使用：

浏览器调用 `requestIdleCallback` 的回调：

![img](images/React_Note.assets/16deecc43c710e16~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

为了避免剩余时间不足，任务被饿死，React 定义了一个超时时间。如果任务等待时间到达超时时间后，就会提升优先级，立即执行。

- `Immediate`(-1) - 这个优先级的任务会同步执行, 或者说要马上执行且不能中断
- `UserBlocking`(250ms) 这些任务一般是用户交互的结果, 需要即时得到反馈
- `Normal` (5s) 应对哪些不需要立即感受到的任务，例如网络请求
- `Low` (10s) 这些任务可以放后，但是最终应该得到执行. 例如分析通知
- `Idle` (没有超时时间) 一些没有必要做的任务 (e.g. 比如隐藏的内容), 可能会被饿死



#### 2 执行单元

FIber 另一个概念是一种数据结构，或者说执行单元。

- 将它视作一个执行单元，每次执行完一个 '执行单元'，React 就会检查现在还剩多少时间，如果没有时间就将控制权让出去。

流程：

- 假设用户调用 `setState` 更新组件, 这个待更新的任务会先放入队列中，然后通过 `requestIdleCallback` 请求浏览器调度。

- 浏览器有空闲时间，或者任务超时，就会调用 `performWork` 来循环遍历，并执行队列中的任务。

`workLoop` ：它会从更新队列 (updateQueue) 中弹出更新任务来执行，每执行完一个 ‘`执行单元`‘ ，就检查一下剩余时间是否充足，如果充足就进行执行下一个 `执行单元`，反之则停止执行，保存现场，等下一次有执行权时恢复。

![img](images/React_Note.assets/16deed1711f281b3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

#### 3 一种数据结构

查看问题3.



### 问题3 Fiber 的结构

在 React 16以前，Reconcilation 是同步的、递归执行的。也就是说，Dom 的构建基于 **函数调用栈** 的Reconcilation算法，因此通常也称它为`Stack Reconcilation`。

但基于调用栈的方式不能随意中断 / 恢复现场，也不利于异步处理的代数效应实现。 如果要恢复递归现场，可能需要从头开始，恢复到之前的调用栈。

所以，React 16 通过模拟函数调用栈，将递归转化成迭代，使用 **链表** 构建。

 每个 VirtualDOM 节点，都使用一个 `Fiber` 表示：

```js
interface Fiber {
  /**
   * ⚛️ 节点的类型信息
   */
  // 标记 Fiber 类型: 函数/类组件、根元素、dom元素、文本节点、Fragment、MemoComponent等
  tag: WorkTag,
  // 节点元素类型, 是具体的类组件、函数组件、宿主组件(字符串)
  type: any,

  /**
   * ⚛️ 结构信息
   */ 
  // 指向父节点，或者render该节点的组件
  return: Fiber | null,
  // 指向第一个子节点
  child: Fiber | null,
  // 指向下一个兄弟节点
  sibling: Fiber | null,
    
  /**
   * ⚛️ 节点状态 state
   */
  // 节点实例(状态)：
  //        对于宿主组件，这里保存宿主组件的实例, 例如DOM节点。
  //        对于类组件来说，这里保存类组件的实例
  //        对于函数组件说，这里为空，因为函数组件没有实例
  stateNode: any,
  // 新的、待处理的props
  pendingProps: any,
  // 上一次渲染的props
  memoizedProps: any, // The props used to create the output.
  // 上一次渲染的组件状态
  memoizedState: any,

  /**
   * ⚛️ 副作用
   */
  // 当前节点的副作用类型，例如节点更新、删除、移动
  effectTag: SideEffectTag,
  // 和节点关系一样，React 同样使用链表来将所有有副作用的Fiber连接起来
  nextEffect: Fiber | null,

  /**
   * ⚛️ 替身
   * 指向旧树中的节点，如果节点不发生任何改变，就会直接使用旧节点，而无需重新创建
   */
  alternate: Fiber | null,
}
```

Fiber 包含的属性可以划分为 5 个部分:

- **🆕 结构信息**
  - Fiber 使用链表的形式来表示节点在树中的定位，将 virtualDom 构建起来。
- **节点类型信息**
  - tag 表示节点的分类、type 保存具体的类型值，如div、Component。
- **节点的状态**
  - 节点的组件实例、props、state 等，它们将影响组件的输出。
- **🆕 副作用**
  - 在 Reconciliation 过程中发现的 '副作用'(**变更需求**) 就保存在节点的 `effectTag` 中(想象为打上一个标记)。
  - 使用链表结构，将本次渲染的所有节点副作用都收集起来。在遍历过程中 React 会将所有有 ‘副作用’ 的节点都通过 `nextEffect` 连接起来。
- **🆕 替身** 
  - React 在 Reconciliation 过程中会构建一颗新的 virtualDOm (官方称为**workInProgress tree**，**WIP树**)。是一颗表示当前工作进度的树。
  - 还有一颗表示已渲染界面的**旧树（current tree）**，这棵树代表了已经渲染的并正在显示的页面。
  - React就是一边和旧树比对，一边构建WIP树的。 alternate 指向旧树的同等节点。

![img](images/React_Note.assets/16deecce3162b355~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

上图是 Reconciliation 完成后的状态，左边是旧树，右边是WIP树。对于需要变更的节点，都打上了'标签'。 在提交阶段，React 就会将这些打上标签的节点应用变更。



## 其他



### 问题：JSX, element, fiber, dom 的关系

首先必须需要弄明白 React.element ，fiber 和真实 DOM 三者是什么关系。

- jsx 语法，是创建 `React.creatElement()` 的语法糖。
  - jsx 语法最终会被 babel 转译为各种 `React.creatElement()`。最终，这些代码会被执行，从而创建 React element 对象，
- React element 是 js 对象，上面保存了 props，children 等信息。
- DOM 是元素在浏览器上给用户直观的表象。
- fiber 可以说是是 element 和真实 DOM 之间的交流枢纽站。
  - 每一个类型 element 都会有一个与之对应的 fiber 类型，element 变化引起更新流程都是通过 fiber 层面做一次调和改变，fiber 通过链表形式，构建出一颗 virtualDOM 树。最终会在渲染阶段，转化为真实 DOM 并渲染在页面上。

![2.jpg](images/React_Note.assets/0a90368f24f0477aaf0d446a8f6736db~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)







JSX 最终会转变为 `React.createElement()` 并执行，从而创建 React element，最终合并到 fiber 节点上。而 fiber 节点之间通过链表连接，最终构造为一颗 virtualDOM 树。



### 问题：Fiber 更新机制

初始化更新：

**第一步：创建 fiberRoot 和 rootFiber**

- `fiberRoot`：首次构建应用， 创建唯一的 fiberRoot 节点，是整个 React 应用的根基。
- `rootFiber`： 通过 `ReactDOM.render()` 渲染出来的。一个 React 应用可以有多 ReactDOM.render 创建的 rootFiber ，但是只能有一个 fiberRoot（应用根节点）。

```js
// rootFiber
ReactDOM.render(<Index/>, document.getElementById('app'));
```

第一次挂载的过程中，会将 fiberRoot 和 rootFiber 建立起关联。

- `fiberRoot.current = rootFiber;`

![3.jpg](images/React_Note.assets/cb68640d39914c03bc77ea15616c7918~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

**第二步：workInProgress 和 current**





### 问题：useEffect 和 useLayoutEffect 的区别

useEffect 是异步调用的，useLayoutEffect 是同步调用的。

- useEffect 在 before mutation 阶段给它定义 mormal 优先级，然后绑定调用时机，在 commit 阶段完成后异步调用。在 layout 阶段，会绑定 useEffect 的 销毁函数、回调函数。在 commit 阶段完成后，按照优先级，最终会异步执行 销毁函数、回调函数。
- useLayoutEffect 在 muation 阶段会执行销毁函数，在layout 阶段会执行回调函数。



![截屏2022-08-07 00.18.02](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-07%2000.18.02.png)





### 问题：React 生命周期（8）

> - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

类组件的生命周期，从 React 运行阶段 + 组件处理类型来分析。

- React 运行有三个阶段：调度、协调、渲染。
- 组件的处理有三个类型：挂载、更新、卸载。

![截屏2022-08-08 15.34.10](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2015.34.10.png)

组件挂载会执行：

- 协调阶段：constructor、static getDerivedStateFrpmProps、render

- 渲染阶段：componentDidMount

组件更新会执行：

- 协调阶段：static getDerivedStateFrpmProps、shouldComponentUpdate（forceUpdate不执行）、render
- 渲染阶段：getSnapshotBeforeUpdate、componentDidUpdate

组件卸载会执行：

- 渲染阶段：componentWillUnmount



#### 协调阶段 render

协调阶段的生命周期函数是不包含副作用的。

组件挂载：

**`constructor(props)`**
类组件的继承、props 传递、初始化 state。

- 在初始化阶段执行，可直接对 `this.state` 赋值。其他生命周期函数中只能通过 `this.setState` 修改 state，不能直接为 `this.state` 赋值。

```js
constructor(props) {
  super(props);
  this.state = {number: 0};
  this.handlexxx = this.handlexxx.bind(this);
}
```



共有：

**`static get­Derived­State­From­Props（props, state)`**

做为 `componentWillMount`、`componentWillUpdate` 和 `componentWillReceiveProps` 的替代方案。在调用 render 前，最后一次修改 state 的机会。它可以返回一个对象，用来更新 state；返回 null 则不更新。

- 做为静态方法，其内部使用 this 拿不到组件实例。



组件更新：

**`shouldComponentUpdate(nextProps, nextState)`**

只有在通过修改 props 或 state 时才会触发。首次渲染和 forceUpdate 不会触发。这里是 React 给用户判断，组件是否应当更新的时机。如果返回 flase，则组件不会调用 render 及以后的方法，不会更新。

- **性能优化**。通过将  `this.props` 和 nextProps 比较，以及将 `this.state` 与 nextState 比较，并返回 false，让组件跳过更新。
- **关联知识**：`Diff`、`PureComponent`、`React.memo()`。



**`render`**

render 函数必须实现，它的返回值将构建为 fiber node，参与到 WorkInProgress Fiber Tree 的构建。

render 函数是纯函数，相同的 state 和 props，它总是返回相同的渲染结果。

render 会返回：React Element、Fragments、string / number（会当作文本节点）、false / null（空）。



#### 渲染阶段 commit

渲染阶段又有三个阶段：before mutation、mutation、layout。

**(1) 在 before mutation 时**

 **`getSnapshotBeforeUpdate(prevProps, prevState)` 组件更新** 

在页面即将渲染、DOM 树尚未改变时触发。可以在这里获取 DOM 改变前的信息。

它接收两个参数，分别是：上一个状态的 props 和上一个状态的 state。它的返回值将会传递给 componentDidUpdate 生命周期钩子的第三个参数。

**使用场景：**获取更新前 DOM 的信息时。例如：需要以特殊方式处理滚动位置的聊天线程等。



**(2) 在 mutaiton 时**

**`componentWillUnmount` 组件卸载**

会在组件卸载以及销毁之前调用。

**使用场景**：执行组件的清理操作，例如：清除 timer、取消网络请求、清除订阅等。



**(3) 在 layout 时**

layout 阶段，这两个生命周期的调用时机是相同的，一个是针对组件首次挂载，一个是针对组件更新。

**`componentDidMount` 组件挂载**

该生命周期方法会在组件挂载之后执行，也只会执行一次，也就是将组件对应的 DOM 插入 DOM 树中之后调用。

- **注意避免**：它会在浏览器更新视图之前调用，如果在 componentDidMount 中**直接调用** `this.setState`，它会触发额外的渲染，会再一次调用 render 函数，但是浏览器中视图的更新只会执行一次。
- **使用场景**：依赖于 DOM 的初始化操作。发送网络请求、监听事件、获取到真实 DOM。

```js
componentDidMount(){
  fetch('https://api.github.com/users').then(res=>res.json()).then(users=>{
    console.log(users);
    this.setState({users});
  });
}
```



**`componentDidUpdate(prevProps, PrevState, snapshot) ` 组件更新**

该生命周期方法会在组件更新之后执行，只会执行一次。

该函数有三个参数：前一个状态的 props，前一个状态的 state、getSnapshotBeforeUpdate 的返回值。

可以（不建议）在生命周期中直接调用 `this.setState`。但必须包裹在一个条件语句中，否则会导致死循环。

**使用场景：**对 DOM 进行操作，或者进行网络请求。



#### 问题：React 17 为什么会废弃 3 个生命周期

componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期函数在 React 17 版本被废弃。而 React 添加静态方法 static getDerivedStateFromProps 来代替。

React 16 更新了 fiber 架构，提出了调度、协调、渲染三大阶段。其中协调阶段是异步可中断的，如果调度阶段安排了优先级更高的任务，当前协调的任务可被中断。

这导致协调（render）阶段的生命周期函数可能会被多次执行，所以这些函数需要实现无副作用的纯函数。如果使用旧生命周期函数，在这里定义了网络请求，那么有可能会执行多次网络请求。而通过新的静态方法 getDerivedStateFromProps，开发者无法从 this 正常获取组件实例，那么就不能修改 state 和发送网络请求了。避免生命周期的不安全使用。



### 问题：生命周期函数的执行顺序

父子组件间，生命周期函数的触发顺序：

![img](images/React_Note.assets/307ff86d82ce4d8eaab1a436234aeada~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

总结：

在 render 阶段的生命周期函数，自上而下调用，即父组件先调用，子组件后调用。

然后是 commit 阶段中，划分每一个子阶段。每个在阶段都是子组件先调用，后父组件调用。

- before mutation：getSnapshotBeforeUpdate（更新）
- mutation：componentWillUnmoun (卸载)
- layout：componentDidMount（挂载）或 componentDidUpdate（更新）

最后的生命周期函数

```jsx
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0,}
    console.log('App constructor');
  }

  static getDerivedStateFromProps() {
    console.log('App static getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(nextProps) {
    console.log('App shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps) {
    console.log('App getSnapshotBeforeUpdate');
    return null;
  }
  
  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

  render() {
    console.log('App render');
    return (
      <div>
        <div onClick={() => this.setState((count) => ({ count: count + 1 }))}>App</div>
        <Child order={1} />
        <Child order={2} />
      </div>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    console.log(`Child${this.props.order} constructor`);
  }

  static getDerivedStateFromProps(props) {
    console.log(`Child${props.order} static getDerivedStateFromProps`);
    return null;
  }

  shouldComponentUpdate(nextProps) {
    console.log(`Child${nextProps.order} shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps) {
    console.log(`Child${prevProps.order} getSnapshotBeforeUpdate`);
    return null;
  }
  
  componentDidMount() {
    console.log(`Child${this.props.order} componentDidMount`);
  }
  
  componentDidUpdate() {
    console.log(`Child${this.props.order} componentDidUpdate`);
  }

  render() {
    console.log(`Child${this.props.order} render`);
    return (
      <div onClick={() => this.setState((count) => ({ count: count + 1 }))}>
        Child{this.props.order}
      </div>
    )
  }
}

export default App;
```

首次渲染：

![截屏2022-08-08 16.24.03](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2016.24.03.png)

子组件状态改变：当点击文字 Child1 时，其执行结果如下：

![截屏2022-08-08 16.30.47](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2016.30.47.png)

父组件状态改变：点击父组件文字，让 `this.seteState` 触发

![截屏2022-08-08 16.34.02](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2016.34.02.png)



### 问题：React hooks

React 16+ 开始，通过 fiber 结构实现了协调阶段的异步可中断。每个组件都会被转化为 fiber node，参与 WorkInProgress fiber tree 的构建。

#### Hooks 的特点

在调和阶段，hooks 会被初始化并绑定在函数组件 fiber.memoizedState 上。

- 对于类组件 fiber ，用 memoizedState 保存 state 信息；**对于函数组件 fiber ，用 memoizedState 保存 hooks 信息**。

**链表**。在 memoizedState 属性中，hooks 通过 .next 属性把绑定在当前函数组件的 hooks 连接起来，形成一个链表。

**创建**。函数组件的 hooks 在挂载会调用 Mount 函数，在更新时会调用 update函数。比如第一次调用 useState 会执行 mountState，后面再调用 useState 会执行 updateState。而这个函数的执行，会根据不同的 hooks 会生成对应的 hooks 对象，绑定在 next 链上。

- updateQueue 存放每个 useEffect/useLayoutEffect 产生的副作用组成的链表。在 commit 阶段更新这些副作用。

**有序**。所以，React 用链表来严格保证 hooks 的顺序。如果我们在函数组件中对 hooks 的添加使用 if 判断语句。这会导致一次更新的前后 hooks 链不一致，具体来说，current tree 和  WorkInProgress 中，对同一个函数组件的 hooks 链保存的内容不一致。如果此时 WorkIn Progress 要从 current 中读取 `state`、`ref` 等信息，原本按照 next 链条去对等读取（类似数组下标读取），但因为前后两次 hooks 链已经发生改变，对等位的 hooks 对象不一致，所以发生错误，React 防止错误发生，会抛出错误。

- 这就是为什么 Hooks 不可以在条件语句定义了。

![截屏2022-08-08 17.20.09](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-08%2017.20.09.png)

#### Hooks 介绍 (9)

数据更新驱动：useState、useReducer

执行副作用：useEffect、useLayoutEffect

状态获取/传递：useContext、useRef、useImperativeHandle

状态派生/保存：useMemo、useCallback



#### useState

```js
const [ state , setState ] = useState(initData);
```

- state：目的提供给 UI ，作为渲染视图的数据源。
- setState：改变 state 的函数，推动函数组件渲染的触发函数。
- initData：获得 state 的初始值。有两种情况，如果是具体值，直接作为初始值。 如果是函数，执行函数的返回值做为初始化值。

**注意事项**：

- **“所谓异步”**，在函数组件一次执行上下文中，state 的值是固定不变的。
  - 且当前执行上下文中获取不到 setState 改变的值，只有在下一次 render 后才能获取到。
- **浅对比**，如果 setState 传入了相同的值，组件就不会触发 render 更新。



#### useReducer

useReducer 是 react-hooks 提供的能够在无状态组件中运行的，类似 redux 的功能 api。

useReducer 是 useState hooks 的扩展。在逻辑相对复杂的情况下，可以用 reducer 的 switch 进行判断，通过 dispatch 达到对同一个 state 有不同的更新方法。

```js
const [ state , dispatch ] = useReducer((state, action) => {
  switch(action.type) {
      //增加、减少、清空、赋值..
      return newState;
  }
});

// 使用：
dispatch({ type: "increment" });
```

- state：目的提供给 UI ，作为渲染视图的数据源。
- dispatch：改变 state 的函数，推动函数组件渲染的触发函数。和 useState 的 setState 一样。
- reducer：相当于 redux 的 reducer。是一个入参有 旧state + action、内部有 switch 的纯函数。函数内部实现了根据不同的 type，对 state 进行操作并返回，从而更新 state。

使用方式：

1. **封装**。当对 state 更新的逻辑相对复杂，可以通过 useReducer 包装。
2. **复用**。如果多个组件均有一个相同的判断方式（可以用同一个 switch 判断），那么单独定义一个 reducer 纯函数，然后不同的组件 import 引入这个 reducer 即可。



#### useEffect

```js
useEffect(()=>{
  // code..
  return destory;
},[dep1, dep2])
```

- 第一个参数为 callback，主体为 useEffect 的回调函数，当依赖发生变化时执行。
- return destory 销毁函数，作为下一次 callback 执行之前调用，用于清除上一次 callback 产生的副作用。
- 第二个参数为依赖，是一个数组，当依赖项改变，就会执行上一次的销毁函数，新的回调函数。
  - 如果不添加任何依赖，组件 render 就会触发，挂载 / 更新都会触发；
  - 如果添加空数组 `[]`，组件只有在挂载时触发。

useEffect 是 **异步调用** 的。关联知识：渲染（commit阶段工作流程）：

- before mutation：创建微任务，给 `useEffect` 的回调函数设定 normal Scheduler Priority，加入任务队列。
- layout：绑定 useEffect 的销毁 + 回调函数。
- commit 完成，等待主线程任务完成（DOM 更新，视图绘制完毕）。异步执行 useEffect 的（上一次）销毁函数 + （本次）回调函数。

**useEffect 回调函数不会阻塞浏览器绘制视图。**

**使用方式**：

- 回调函数：初始化 state、异步数据请求、注册事件监听、设置定时器；
- 销毁函数：注销事件监听、清楚定时器。



#### useLayoutEffect

参数逻辑和 useEffect 相同，只是触发时机不同，useLayoutEffect 同步调用。在渲染阶段：

- mutation 阶段：执行 useLayoutEffecta 的销毁函数；
- layout 阶段：执行 useLayoutEffect 的回调函数。

**使用方式：**

- 回调函数：在最后绘制 dom 前，需要对 dom 进行调整，注意不要死循环。



useEffect 和 useLayoutEffect 的区别：

1. 前者异步调用，后者同步调用（参考在 commit 阶段的处理流程）。
2. 前者不会阻塞浏览器绘制，后者的回调函数会阻塞浏览器绘制。

所以，如果要对 DOM 进行修改，则不可以在 useEffect 中设置， useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，会导致浏览器再次回流和重绘。而 useLayoutEffect 在 commit 阶段同步执行，阻塞浏览器的绘制，重新进入协调阶段，则页面不会发生画面闪现，抖动的问题。



#### useContext

```js
const contextValue = useContext(context);
```





#### useRef





#### useImperativeHandle





#### useMemo





#### useCallback









`useState` 两次值相等的时候，组件不触发渲染，因为其内部通过浅对比发现相等，则不触发更新。防止同步执行时阻塞浏览器做视图渲染（如果对 dom 操作，则又要重协调）。







===todo========================== 

类组件生命周期、函数组件有生命周期吗？

函数组件的 hooks，坑：函数组件 hooks 实现类组件的生命周期（找笔记）。

考虑简历投递前，哪些知识还需要复习（看笔试题总结 + 牛客网笔试面经）。



hooks 我在项目中的用法。











> 来源：
>
> React课程：https://ke.segmentfault.com/course/1650000023864436/section/1500000023864578
>
> https://github.com/lizuncong/mini-react/blob/master/docs/render/%E6%B7%B1%E5%85%A5%E6%A6%82%E8%BF%B0%20React%E5%88%9D%E6%AC%A1%E6%B8%B2%E6%9F%93%E5%8F%8A%E7%8A%B6%E6%80%81%E6%9B%B4%E6%96%B0%E4%B8%BB%E6%B5%81%E7%A8%8B.md
>
> https://segmentfault.com/a/1190000039227345
>
> https://juejin.cn/post/6844903975112671239
>
> https://juejin.cn/post/7118259566868955167
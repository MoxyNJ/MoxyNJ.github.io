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

### 问题：react 架构

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

- Scheduler 调度器：调度更新.
- Reconcoler 协调器：决定需要更新什么组件.
- Renderer 渲染器：将组件更新到视图中.

在 render 函数的执行周期中，有调度（事件触发）、协调（render）、渲染（commit）三个阶段：

![image-20220806230807382](images/React_Note%20.assets/image-20220806230807382.png)



#### 1 调度阶段

当 React 需要更新时，更新任务首先被 Scheduler 调度器 处理。

处理的工作有：

- **创建项目根 Fiber 节点**。首次渲染页面时，会创建唯一的根节点 FiberRoot Node。
- **创建应用根 Fiber 节点**。每一个 `ReactDOM.render()` 都会创建一个 rootFiber。
- **初始化事件**。Scheduler 会把任务按照优先级排序，让更高优的任务首先进入 Reconciler 协调器进行下一步处理。



#### 2 协调阶段

**协调阶段是 Reconcoler 协调器在参与，也被称为 render 阶段**，如下图 renderRootSync 都为协调阶段。

![image-20220806231908259](images/React_Note%20.assets/image-20220806231908259.png)

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
- 打不同的副作用标签 effectTag ，比如类组件的生命周期，或者元素的增加，删除，更新。

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



#### 3 渲染阶段

**渲染器工作的阶段，是 Renderer 渲染器在参与，被称为 commit 阶段**，下图中，commitRoot 就是 commit 阶段。

![image-20220806232428977](images/React_Note%20.assets/image-20220806232428977.png)

本次更新由哪些组件需要更新视图，会让渲染器来分别执行这些视图更新操作。

- 视图更新操作：对 DOM 节点的增、删、查、改。
- 渲染器把被打了标记的虚拟 dom 对应的真实 dom 节点执行更新 dom 的操作。

- Mutation 突变，对于浏览器来说，就是 DOM 操作。

该阶段出发的生命周期钩子有：

```js
// before mutation 阶段
getSnapshotBeforeUpdate
componentWillUnmount

// layout 阶段
componentDidMount
componentDidUpdate
```



**（1）mutation 前阶段**

通常被称之为 before mutation 阶段。



- 执行 `getSnapshotBeforeUpdate` 生命周期函数。因为 Before mutation 还没修改真实的 DOM 所以此时类组件可以获得更新 DOM 前的快照。
- 给 `useEffect` 的回调函数设定 normal Scheduler Priority，然后等待 commit 完成后，再 **异步执行**。防止同步执行时阻塞浏览器做视图渲染。



**（2）mutaiton 阶段**

通常被称之为 mutation 阶段。

遍历包含 EffectTag 的 fiber 节点，所组成的 effectList 链表。处理每一个 fiber 节点的副作用，这些副作用有：

- 重制文本节点；
- 解绑/更新 Ref；
- DOM 相关操作（增删改：Placement 插入 DOM，Update 更新 DOM 属性，Deletion 删除 DOM）；
- 执行 useLayoutEffect 的销毁函数，useLayoutEffect 是 **同步执行** 的。



**（2.1）更改 current 指针**

在进入 layout 节点前，会执行：

```js
root.current = finishedWork;
```

这就是 React 架构的双缓存机制中，Work In Progress Fiber 树完成渲染，此时 `fiberRoot.current` 指针会从之前的 current Fiber 树，指向现在的 Work In Progress Fiber 树。此时，Work In Progress Fiber 树，就变成了新的 Current Fiber 树。

在该实际触发，是因为在 layout 阶段会执行 `componentDidMount` 和 `componentDidUpdate`这两个生命周期函数，此时，Current Fiber 树已经指向了本次完成的 Work In Progress Fiber 树，这两个生命周期会对新的 Current Fiber 树进行操作。



**（3）mutation 后阶段**

通常被称之为 layout 阶段。

- 处理 Ref 属性。
- 执行 useLayoutEffect 的回调函数，是 **同步执行** 的。
- 绑定 useEffect 的销毁/回调函数，以便在 commit 阶段完成后，执行 useEffect 销毁/回调函数。



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

![1.png](images/React_Note%20.assets/58db2ee32bde44b3afd5e2e6af3e3647~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

虚拟 DOM 是一个 js 对象，而真实 DOM 上还挂在了许多默认属性和方法：

![2.png](images/React_Note%20.assets/c859397a03024903939f934907052cc2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

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

![img](images/React_Note%20.assets/16deecc37fdd60d7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

那么，如何确定剩余时间呢？或者哪些任务是更高优先级的呢？

在一帧（16.6 ms）中，浏览器会执行以下任务：

- 处理用户输入事件
- Javascript执行
- requestAnimation 调用
- 布局 Layout
- 绘制 Paint

如果在执行完这些必须任务后，还有剩余的时间，就可给 React 去使用：

浏览器调用 `requestIdleCallback` 的回调：

![img](images/React_Note%20.assets/16deecc43c710e16~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

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

![img](images/React_Note%20.assets/16deed1711f281b3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

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
  // 标记 Fiber 类型, 例如函数组件、类组件、宿主组件
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

![img](images/React_Note%20.assets/16deecce3162b355~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

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

![2.jpg](images/React_Note%20.assets/0a90368f24f0477aaf0d446a8f6736db~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)







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

![3.jpg](images/React_Note%20.assets/cb68640d39914c03bc77ea15616c7918~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

**第二步：workInProgress 和 current**





### 问题：useEffect 和 useLayoutEffect 的区别

useEffect 是异步调用的，useLayoutEffect 是同步调用的。

- useEffect 在 before mutation 阶段给它定义 mormal 优先级，然后绑定调用时机，在 commit 阶段完成后异步调用。在 layout 阶段，会绑定 useEffect 的 销毁函数、回调函数。在 commit 阶段完成后，按照优先级，最终会异步执行 销毁函数、回调函数。
- useLayoutEffect 在 muation 阶段会执行销毁函数，在layout 阶段会执行回调函数。



![截屏2022-08-07 00.18.02](images/React_Note%20.assets/%E6%88%AA%E5%B1%8F2022-08-07%2000.18.02.png)







> 来源：
>
> React课程：https://ke.segmentfault.com/course/1650000023864436/section/1500000023864578
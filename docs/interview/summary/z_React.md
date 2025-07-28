---
title: React
sidebar_position: 51
date: 2022-08-05
tags: [React]
---

## Fiber

### 空闲时间判断

问：React 是如何判断浏览器还有多少空闲时间来执行低优先级任务的？是否使用了 requestIdleCallback？

答：React 没有直接使用 requestIdleCallback，而是通过内部的调度器 scheduler 模块模拟了类似的机制。

不用 requestIdleCallback 的原因

-   requestIdleCallback 是浏览器原生 API，用于在主线程空闲时执行任务，适合后台任务；
-   存在兼容性问题，Safari、IE 不兼容；
-   调度不可预测，受到浏览器策略影响较大；
-   不够实时，对动画 / 渲染类任务控制不细致，如标签页不可视时，可能不会触发回调；

React 内部实现了一个调度器（scheduler），它：

-   使用 MessageChannel + setTimeout 等组合，模拟 requestIdleCallback；
-   通过时间片切分任务（Time Slicing）；
-   内部维护任务优先级、过期时间，动态判断当前是否要让步；
    -   `shouldYield()` 记录每一帧的起始时间，减去当前时间，判断是否还有剩余时间（如超过 5ms 就放弃）

### React 的运行机制

-   React 运行有三个阶段：调度、协调、渲染

1. 调度阶段：发起更新（setState、useState 等触发）
    - 创建根节点 FiberRoot Node；创建应用根节点，每个 `render()`，对应 rootFiber。标记哪些 Fiber 节点需要更新。
    - 初始化事件。分配优先级，并放入任务队列中，等待浏览器空闲处理任务。
    - 可随时中断、延迟，并会丢弃低优先级任务。
2. 协调阶段：从 current 指针指向的 Fiber tree 开始 DFS 递归遍历，构建新的 Fiber tree。
    - 逐层执行函数组件，调用 Hook（注册 callback、通过链表记录依赖，不执行回调）；
    - 生成子节点，并通过 Diff 新旧 Fiber 节点，记录变更。
    - 遇到同级节点，会相互对比。发现不同则会丢弃包括子节点的所有节点，准备重新构建。
    - 可随时中断（时间切片），此时尚未改动真实 DOM。
3. 渲染阶段：根据新的 Fiber tree，一次性更新到真实 DOM 上；
    - 并执行副作用触发 useEffect，触发回调等。更新后 current 指针指向新 fiber tree。
    - 不可中断，必须一次性完成，保持 DOM 一致性。

### React fiber 的优势在哪里

Fiber 是 React 中最小的静态数据结构，动态执行单元。React 提供了一种控制流程的让出机制。来实现 “异步可中断的更新” 能力，使 React 响应迅速、支持并发和更细粒度的更新调度。

-   浏览器的性能瓶颈在 CPU 和 IO。刷新率通常为 60Hz/s，也就是 16.6ms 刷新一次页面。
-   16.6ms 中，浏览器需要完成：JS 脚本执行、样式布局、样式绘制。

React 把同步更新，变为异步可中断进行更新，也就是说 React 通过 fiber 把渲染任务切分为多个小段，每个小段执行完毕后会把主动权交还浏览器，浏览器则可根据当前任务的优先级，把剩余时间分配给更重要的任务，以确保尽可能的响应及时。

-   基于合作式调度 Cooperative Scheduling：浏览器中没有抢占机制，无法中断正在执行的任务，所以 React 需要具备让出机制，主动让出控制权。

这是一种给予信任的契约合作机制：React 会根据自己的任务量，向浏览器申请适量的时间片。而浏览器会先执行更高优先级的任务，再把剩余时间分给 React，React 也会在规定的时间内完成任务执行，归还控制权。

### React 合成事件 绑定

概念：事件委托，React 没有每一个元素都设置事件监听，这样监听数量过多，影响浏览器性能。而是统一在根元素 app (17) 上设置监听，并通过 terget 捕获具体元素触发。

-   性能提升：减少内存消耗，不需要每个元素处理自己的事件，易于管理。
-   兼容性：提供了统一的事件对象接口，内部抹平了不同浏览器的兼容性差异；
-   控制事件传播：React 模拟 DOM 事件的捕获与冒泡过程，对外统一 API，这样在批处理、调度事件池等，更好地做性能优化。

### 一次点击事件触发的流程

如点击一个 button 按钮，触发 onClick 事件。

React 事件系统可分为三个部分：

1. 事件合成。初始化会注册不同的事件插件。
2. 事件绑定。在一次渲染过程中，对事件标签中事件的收集，向 container 注册事件。
3. 事件触发。第三个就是一次用户交互，事件触发，到事件执行一系列过程。

事件绑定：React 事件会绑定在对应 DOM 元素的 fiber 对象上，具体是 fiber.memoizedProps 属性上。

![截屏2022-08-09 20.44.13](images/React_Note.assets/%E6%88%AA%E5%B1%8F2022-08-09%2020.44.13.png)

（1）批量更新

执行 dispatchEvent，会把真实事件源 DOM (button) 传递给 dispatchEvent，通过真实 DOM 找到对应的 fiber 节点。

（2）合成事件源

接下来会通过 onClick 找到对应的处理插件 SimpleEventPlugin ，合成事件源 event。

-   event 包含 preventDefault (阻止默认行为)、stopPropagation (阻止继续冒泡) 等方法。

（3）形成事件队列

通过事件源 fiber.return 向上遍历，遇到元素类型 fiber，就会收集事件到数组中：

-   遇到 onClickCapture 捕获阶段触发，就 unshift 放在队头，
-   遇到 onClick 冒泡阶段触发，就 push 放在对尾。

最终收集到顶端 app 组件，形成执行队列。

（4）执行事件队列

依次执行数组里面的事件回调函数，如果遇到 `event.isPropagationStopped === true` 就会中断后续的回调执行，达到阻止冒泡的效果。

### Component、PureComponent 、memo()

**`PureComponent` 组件创建了默认的 `shouldComponentUpdate` 行为。**

这个默认的 `shouldComponentUpdate` 行为会执行 shallow equal，逐一比较即将 render 前后， `props` 和 `state` 是否发生改变，如果没有改变，就会阻止组件接下来的 render 以及之后的生命周期函数的执行，提升性能。

而函数组件没有生命周期的概念，也无法使用 PureComponent，所以 React 16+ 定义了`React.memo()` 方法，它既可以包裹 class component，也可以包裹 function component，达到和 PureComponent 相同的效果。

-   通常和 useMemo、useCallback hooks 配合使用。

### 类组件 / 函数组件的区别

类组件：使用 ES6 的 class 语法创建，需要继承 React.Component。

函数组件：使用普通函数，可以通过 Hooks 管理状态和生命周期。

-   类组件的特定使用场景：对生命周期函数的控制需求非常精细。
    1. useEffect 可以模拟大部分生命周期，但仍然不如类组件中的生命周期函数清晰；
    2. 类组件的生命周期钩子在调试工具中有更明显的阶段（挂载/更新/卸载）。
    3. 使用 ErrorBoundary 捕获子组件的 js 执行错误，并展示回退 UI，函数组件没有。

### 函数式组件：调用、触发更新

React 的渲染触发是“自顶向下”的。当前组件需要重新更新，则其子组件全部都要更新。

-   函数组件是一个 普通的 JavaScript 函数，每次渲染时，React 都会重新执行它。
-   子组件只有在使用 React.memo + props 没有改变时，才不会调用。

什么情况下会触发组件更新？

1. React，见上文，自顶向下的 Fiber 结构。对比有变化就会当前组件连着子组件都更新；
2. Vue，自动追踪响应式数据的依赖关系，当前数据变化，会自动触发依赖关系上的其他组件和 DOM 发生更新。比如：ref/reactive 发生变化，绑定它的 computed、props，所在组件都会发生变化。

### 子组件无 props，父组件更新，子组件会渲染吗

-   React：默认父组件更新，一定会重新执行所有子组件的 render；
    -   子组件使用 React.memo 包裹后，只有 props 变化才会触发更新；
-   Vue：父组件响应式数据变化，触发自身的重新渲染，子组件不依赖父组件，不渲染。

## 构建/优化

### React.memo

-   React.memo 会对组件的 props 进行浅比较，只有当 props 发生变化时，组件才会重新渲染；否则会跳过重新执行函数，提高性能。

具体流程，每当组件需要渲染时，React 会走如下流程：

1. 判断父组件是否更新（或强制触发 render）；
2. 如果子组件是普通函数组件，直接重新执行它；
3. 如果子组件是 React.memo(Component) 包裹的组件：
    1. 当前 props 变化做浅比较：原始值直接比较，引用值只比较引用地址。
        - 可以传入自定义比较函数，做精确控制。
    2. 若 props 没变，则跳过组件的执行过程（render）；
    3. 若 props 有变，才会重新执行组件函数。

### useCallback

useCallback：`useCallback(()=> { ...}, [a, b])`

useMemo：useMemo 可以缓存人意内容，useCallback 是 useMemo 语法糖，专用缓存函数；

记忆化的函数，只有当依赖项变化时才会返回新的函数引用，否则复用旧函数引用，防止子组件不必要的重新渲染。

-   React 中，每次组件函数执行，都会重新创建所有内部函数。如果没有 useCallback，每次都会创建新函数。

### React 优化 + 自动处理

1. 避免不必要的重新渲染：
    1. 组件：React.memo() 包裹，阻止 props 没变时的重新执行；
    2. 计算值：useMemo() 缓存；
    3. 函数引用：useCallback() 缓存，避免子组件不必要刷新；
2. 可以使用 HOC 对 React.memo() 进行封装，或者使用 Hook 对 useMemo 进行封装；

### JSX 会被转义为

JSX 是不能被浏览器直接运行的，它在编译阶段用 Babel 转译成普通的 JavaScript 函数调用代码。

比如：`React.createElement("h1", props, 'Hi')` 方法。React 17+ 则是 `_jsx(...);`

## Hook

### Hook 的实现原理

Hook 的本质，是基于“链式结构 + 渲染顺序”的状态管理机制

React 在每次渲染函数组件时，通过“依次执行 Hook”，在内部记录每个 Hook 的状态和数据。

-   React 内部会为每个组件 Fiber 节点维护一个 hook 链表，有序排列。
-   自定义的 Hook，是多个基础 Hook 的组合，封装逻辑。调度和时机依然是 React 的 Hook 栈

### Hook 的限制条件原因

React 函数组件，而 Hooks 是在没有类组件的情况下，为函数组件引入「状态」和「副作用」的能力。为了提高性能，React 依赖 Hook 调用顺序来正确管理状态，因此有两条限制：

1. Hook 必须纯粹，只能在函数组件或自定义 Hook 顶层调用，不能在 for / if / 回调函数中；不依赖运行时条件，只依赖 props/state 等数据；相同输入一定获得相同状态结果。
2. 不能在普通函数、类组件中调用。

React 用数组来存储多个 useState, useEffect 等 Hook 的状态记录，不靠变量名，而是靠调用顺序。每次渲染该组件时，React 会按顺序一次性调用内部所有 Hook。不变的 Hook 也会执行(触发注册)，但不会触发更新，只是按顺序读取旧值。

如果写在 f 中，则调用顺序在运行时无法确保，于是造成渲染异常。

### useCallback / useMemo 场景不适合

React 内部的缓存机制：在当前组件的多次 render 过程中缓存“某个值”或“某个函数引用”

-   包裹：当前函数 / 方法有明确依赖，且计算代价高，或者给子组件进行传递了。
-   开销增大：useMemo 和 useCallback 本质上也会执行比较逻辑（比较依赖数组）。
    -   **额外逻辑**：每次 render，都要检查依赖是否变化，才能判断是否复用缓存。依赖变化很频繁（如每次 render 都变），那相当于没有缓存，增加额外比较成本。
    -   **内存压力**：缓存要放在 React 内部。

本质上增加了比较开销：

-   流程上，要先读取上次缓存的值，然后比较 deps 依赖是否发生变化。
-   如果变化则执行并更新缓存；如果没有变化则返回上次缓存的值。

### useLayoutEffect / useEffect

-   useEffect 是异步的副作用，在 DOM 更新 + 浏览器绘制后执行，不会阻塞页面渲染；
    -   数据请求，事件监听。渲染优先，可以避免卡顿。
-   useLayoutEffect 是同步的副作用，在 DOM 更新后、浏览器绘制前执行，会阻塞渲染。
    -   必须用的场景：当一个字组件尺寸变化，父组件需要跟着改变容器尺寸。需要阻塞当前绘制，否则会出现字组件容器撑开，父组件没来得及调整的瞬间，有页面抖动的问题。
    -   会阻塞浏览器绘制，谨慎使用。
-   requestAnimationFrame 是浏览器提供的异步 api，在下一帧绘制前触发。
    -   rAF 不会阻塞页面渲染，适合设置一些连续帧动画。



### state 的批量更新

关联问题：setState 的更新流程、state 是同步更新 (同步执行) 还是异步更新？

**关于更新流程：**

setState 会调用 dispathAction，创建一个 update 对象放到对应元素 fiber 节点的 updateQueue 上，然后调度渲染。

**关于同步还是异步：**

我的理解：如果没有异步环境更新 state，state 是在同一个执行上下文（调用栈）执行的。所以理论上来说是同步执行的。通常讨论的点是 state 是批量更新，还是非批量更新。

-   虽然我们讨论的是 setState 的同步异步，但这个不是 setTimeout、Promise 那种异步调用，而是指 setState 执行后，state 是否立刻改变了，是否可以在当前执行上下文中得到改变的值，组件是否 render 了。
-   回答批量更新的要点：
    -   先说 state 的更新顺序：flushSync 可以提前批量更新，直接 render。然后是批量更新，最后一个 setState 执行并 render。最后是异步环境（微任务/宏任务）遇到一个 setState，就立即 render。
    -   再说类组件和函数组件的区别：（1）类组件 api 可以回调监听到 state 更新，函数组件只能用 useEffect 副作用监听。（2）类组件异步更新 state，可在当前执行上下文获取到更新后的值（看起来像同步的），函数组件在当前执行上下文的 state 不会发生变化。

**关于批量更新：**

用户触发事件，会推动 React 的组件更新。所以 state 更新的源头还是触发事件。React 使用自定义的事件机制（关联：React 事件知识）。

React 使用 dispatchEvent 同一调度所有元素 fiber 上绑定的事件，在 dispatchEvent 中，会开启 state 批量更新，待 **同步** 更新完毕后，关闭批量更新：

-   如没有定义异步 state 操作（没有在 setTimeout、promise 中更新 state），连续的 setState 更新操作会被统一的批量更新。也就是说多个 setState 只会执行最后一个，得到一个 state 结果后，才**执行一次 render 函数**。

当异步环境时，批量更新是默认关闭的：

-   如果定义异步 state 操作，如在同一个 setTimeout 中连续定义三个 setState，因为此时没有批量更新，就会遇到一个 setState，就先执行，然后触发 render，触发 setState 回调，接着继续往下执行其他 setState。最终会 **执行 3 次 render 函数**。

**所以，如果采用异步环境更新 state，就会导致多次的 render 调用，也会导致视图的多次渲染，影响性能。**



## HOC

HOC（高阶组件）是 React 中一种复用组件逻辑的技术。其本质是一个函数，接收一个组件作为参数，对这个组件进行功能增强后，返回一个新组件。

场景：

1. 权限控制：控制是否渲染组件，如果未授权则先跳转登录。
2. 日志埋点：进入组件时自动进行曝光打点；
3. 组件注入：可以增加一些默认的 props，比如 userInfo、theme 等公共配置；
4. 条件渲染：固定的一些 Error 通用处理，可以通过 HOC 注入，判断 props；
5. 除此之外，也可以将一些数据请求，比如表单分页逻辑写在 HOC 中，组件内可专注于 UI 的实现。不过这种现在也可以用 hook 去实现，可读性更高一些。



## Hooks 介绍

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

useContext 可以代替 `context.Consumer` 来获取 Provider 中保存的 value 值，而不需要创建 `comsumer`。

- 使用 `Context` 可以避免的组件的层层 `props` 嵌套的问题。但是使用 `context.Consumer` 拿值时，会包裹一层 `<Comsumer>` 组件。

使用 useContext hook 可以不用 `<Consumer>` 嵌套。

**使用方式**：获取全局的class 前缀，或者国际化，UI 主题颜色等。

```jsx
/* 用useContext方式 */
const DemoContext1 = ()=> {
  const value = useContext(Context);
  return <div> my name is { value.name }</div>
}

/* 用Context.Consumer 方式 */
const DemoContext2 = ()=>{
  return <Context.Consumer>
    { (value)=> <div> my name is { value.name }</div> }
  </Context.Consumer>
}

export default ()=>{
  return <div>
    <Context.Provider value={{ name:'alien' , age:18 }} >
      <DemoContext1 />
      <DemoContext2 />
    </Context.Provider>
  </div>
}
```



#### useRef

useRef 用来保持一个对象的引用。接受一个状态 initState 作为初始值，返回一个 ref 对象。该对象的 `.current` 属性就是 ref 对象保持引用的对象（initState），也可以通过 `.current` 来改变引用状态。

```js
const cur = React.useRef(initState);
cur.current  // ref element
```

特点：不论该组件如何更新，该引用都不会被销毁，而一直保存在内存中不变。

**使用方式**：通常用来保持对 DOM 元素的引用，或对一个固定状态的引用。

```jsx
const DemoUseRef = () =>{
  const dom = useRef(null);
  const handerSubmit = () =>{
    console.log(dom.current);
    //  打印dom节点：<div>表单组件</div>  
  }
  return <div>
    <div ref={dom}>表单组件</div>
    {/* ref 标记当前dom节点 */}
    <button onClick={()=>handerSubmit()}>提交</button> 
  </div>
}
```



#### useImperativeHandle

用于父组件调用子组件的属性/方法。子组件对外暴露 / 提供部分功能，供父组件调用。



引：**`React.forwardRef()`** 用于转发 ref。

- 把一个函数组件（有 props, ref 两个参数）传入 forwardRef，会返回一个 绑定好 ref 的新组件。

下面的例子中，通过 forwardRef，Father 传递给 Son 一个 sonRef 对象。而 Son 接收到 sonRef 后，把它绑定在 input DOM 元素上。这样，父组件就持有了一个子组件中 input 元素的引用。

```jsx
import React,{useRef,forwardRef} from 'react'

const Son = forwardRef((props, ref) => {
  return <div>
    <input type="text" defaultValue={props.value} ref={ref} />
  </div>
})

const Father = () => {
  const sonRef = useRef(null);
  return <div>
    <Son ref={sonRef} value='子组件' />
    <button onClick={() => console.log(sonRef.current)}>点击打印 sonRef</button>
   
  </div>
}

// 点击子组件的 button 后，控制栏输出：<input type="text" value="子组件"></input>
```

> 代码：https://codesandbox.io/s/festive-elion-4w514b?file=/src/App.js

上面的例子可以看到，对于 Son 来说，入参 `ref` 就是父组件发来的，用于调用子组件的引用。但有时子组件需要对父组件暴露更多指定的属性和方法，这是就需要 `useImperativeHandle` 对其打包。

**useImperativeHandle**  接收三个参数：

- ref：父组件传递过来的 ref，也就是将要绑定的 ref 引用。
- callback：初始化时会调用该函数，返回一个对象，这个对象会绑定在 ref 引用上，被父组件引用。
- deps：数组，成员是依赖项，当依赖发生改变，就会重新执行 callback，重新添加绑定。

```jsx
const SonComponent = forwardRef((props, ref) => {

  useImperativeHandle(ref,() => {
    return {
      handle1: () => {},
      handle2: () => {}
      // ..
    }
  }, deps);

}
```

**使用场景**：当父组件需要使用子组件部分属性和方法，而子组件不希望把自己全部内容都对外暴露时，通过 `forward.Ref` + `useImperativeHandle` 的配合，可以针对性的暴露部分功能。实现父组件调用子组件的部分方法。

- 父组件是一个提交组件，n 个子组件是表单。父组件需要调用全部子组件的提交函数，让子组件把表单信息提交给父组件。



#### useMemo

```js
const memoizedValue = useMemo(() => { 
  // function 
}, deps);
```

性能优化。useMemo 会缓存一个 **引用**，这个引用可以是一个具体的值、对象、函数。在初始化组件时，会调用回调函数，并让 `memoizedValue` 缓存回调函数的返回值。当 deps 依赖项不发生变化时，即使发生多次 render，也不会重新执行回调函数，`memoizedValue` 会一直持相同的引用，从而节省相同代码的执行。

- 如果不添加依赖，则 `useMemo` 在每次渲染时都会计算新的值。

**使用场景**：

1. 复杂计算，当创建一个值，会产生高昂的开销（比如计算上千次才会生成变量值），有必要使用 `useMemo`，当然这种场景少之又少。
2. 通过 props ，父组件给子组件传递局部变量。父组件把这个局部变量通过 useMemo 传递给子组件。不论父组件如何 rerender，该变量不会发生改变。所以通过 `memo()` 的包裹的子组件，会对传入的变量 shallow equal，顺利的避免重新渲染。
   - 如果传入变量在父组件中，没有通过 useMemo 包裹，仅使用 `memo()`包裹自组件是没用的。加入传入变量是一个对象 object，父组件每次 render 都会导致该 object 重新创建，子组件的 shallow equal 会发现前后 object 地址不一致，从而判定为 props 发生改变，而重新 render。



#### useCallback

和 useMemo 的功能、触发机制相同，在依赖项变化后，会让 `memoizedValue` 重新缓存引用。不同的是，useMemo 会执行回调函数，并缓存得到的函数返回值；而 useCallback 直接缓存这个回调函数，并不会执行。

```jsx
const memoizedValue = useCallback(() => { 
  // function 
}, deps);
```

- 这个回调函数并不会执行，而是直接缓存。
- useCallback 是 useMemo 的一种特例，因为 useMemo 可以引用/缓存任何值（对象、函数），而 useCallback 只能引用/缓存函数。

**使用场景**：父组件给子组件传递一个回调函数时，会把该回调函数通过 useCallback 包裹后再返回。原理同 useMemo 一样，子组件需要用 `memo()` 包裹。这样，即使父组件 render，但被 useCallback 包裹的回调函数不会发生改变，所以子组件通过 shallow equal，顺利避免重新渲染。



useMemo 和 useCallback 的区别：

相同：

1. 从逻辑上来说，触发逻辑相同，两个 hooks 的返回值 `memoizedValue` 会对一个值保持引用(缓存)。在依赖项不变的情况下，不论组件 render 多少次，都不该引用(缓存)都不会更新。
2. 从目的上来说，两者都是性能优化，尽可能减少子组件的 render。

不同：

1. 从代码上来说，useMemo 的回调函数会被执行，`memoizedValue` 缓存被执行的返回值；useCallback 的回调函数不会被执行，而是被 `memoizedValue` 直接缓存。
2. 从效果上来说，useMemo 可以缓存任何值（基本值、对象、函数），而 useCallback 仅能缓存函数。
3. 从原理上来说，useCallback 是 useMemo 的语法糖，是一个特例。useMemo 除了可以避免子组件重新渲染外，还可以包裹计算复杂的函数，减少复杂计算的执行次数。

5. 

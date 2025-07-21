---
title: 框架对比
sidebar_position: 52
date: 2022-08-05
tags: [Vue, Svelte, React]
---

### Vue3 / Svelte / React 的 diff DOM

**（1）React：基于虚拟 DOM + Fiber 架构**

**更新原理**：每次更新时，有调度、协调、渲染三个阶段。会构造新的虚拟 DOM Fiber Tree；与旧的 Fiber Tree 进行 diff 比较；生成最小的变更列表（effect list），再统一渲染到真实 DOM。

-   优点：实现了异步可中断更新，通过时间切片分割成子任务，随时将控制权交还给浏览器。以减少线程的长期占用，造成页面卡顿。
-   缺点：虚拟 DOM 创建、遍历比较重。

**（2）Vue：虚拟 DOM（VNode）+ 模板 AST 优化**

**更新原理：**通过当响应式系统追踪依赖，在数据变化时重新生成虚拟 DOM（VNode），与上一次带额 VNode 进行 diff，最后将变更 patch 到真实 DOM。

1. 响应式系统，依赖追踪。通过 getter 收集依赖 / setter 通知依赖更新。
2. 当某个组件需要更新时，会加入到更新队列中；更新队列会在 nextTick 异步合并改动，批刷新；
3. 在 flush 刷新时，会调用待更新组件的 render 函数，得到新的 VNode 虚拟 DOM。

-   优点：「模板驱动」，语法的限制可以让 vue 静态时预优化，减少 dif。
    1. patchFlag：Vue 可以在编译生成 VNode 时打 patchFlag，更精细的知道是 class、还是 title 等 props 发生变化。在渲染时只更新有变化的部分。
    2. 双端指针 + 最长递增子序列：尽可能减少 v-for 列表发生变化是的 VNode 调整。
-   缺点：不可中断，必须是同步递归的执行 diff。

**（3）Svelte：无虚拟 DOM，编译时 diff**

**Svelte 是模板编译器，而不是运行时框架。**

**更新原理：**编译时优化、静态依赖分析、精确 DOM 操作。

1. 编译时追踪依赖关系：语法限制，Svelte 在编译阶段就知道哪个 DOM 节点依赖，完全没有虚拟 DOM 或 diff，全靠状态追踪生成最小更新指令。
2. 编译为最小更新指令：和 Vue/React 渲染再 diff 的做法不同，Svelte 把更新逻辑编译为明确 DOM API 指令，没有 DOM Tree 递归比较，没有 diff 过程。

-   优点：diff 不是运行时行为，而是编译期分析。静态分析模板结构、绑定变量关系，生成精确的 DOM 更新指令，无需虚拟 DOM、无需 diff，避免了运行时开销。
-   缺点：编译成最小 DOM 操作指令，会造成打包体积膨胀的问题。每个组件都存在私有代码，而不是统一调度，无法复用。但它没有 dif 又节约了调度器的体积。

所以，如果是小型组件上使用 svelte，体积是很极致的。但在大型项目上打包体积会变大。

## 微前端

### qiankun 的隔离机制

子应用之间需要隔离：

1. 全局 Window、公共 JS 变量冲突、CSS 样式污染、事件/ 定时器及时清理

JS 隔离思路：

1. 默认使用 Proxy 沙箱，也就是子应用处在代理 window 对象中。当子应用访问 window 时，实际通过 getter 访问的是代理的 window 环境。
    - qiankun 通过 eval 执行子应用的脚本，注入代理的 window / globalThis，让子应用在 proxy 作用域下执行。
2. 但 Proxy 不兼容低版本 IE。于是有 Snapshot 快照沙箱，当前挂载的子应用如果在 window 上登记全局变量，就会被记下。
    - 在挂载子应用时，会浅拷贝一份当前 window，然后把上一次的快照应用到 window 上；
    - 在卸载子应用时，会先 diff 下当前 window 和快照的区别，作为下次恢复子应用的依据同时删除新增的全局变量，恢复环境。
    - 缺点：只会有一个快照变量保存，在 window 保存快照和灰度状态时，可以读取到 window 上的脏数据。同时不允许有两个子应用并存。
3. iframe
    - 天然隔离 widnow、CSS 样式、全局状态等。但每个 frame 有独立的上下文环境，性能会降低，同时主子应用通信困难。

网络请求隔离：使用 fetch 代理所有网络请求，以确定是哪一个子应用发起的请求。

CSS 隔离：Shadow DOM，或者给子应用的 CSS 样式全部增加前缀。

-   子应用渲染在一个带有 Shadow DOM 的容器内，隔离了 DOM 环境。

### qiankun 的缓存机制

如果开启 kee-alive，流程是：

1. 第一次访问子应用：拉取 HTML 文件（纯字符串），解析内容，拉取相关的 CSS、JS 等资源；
    - 等待基座触发子应用 `mount()` 时，才会在沙箱中执行这些资源。具体来说，如果是 Vue，就会执行暴露的 createAp 方法，挂载整个页面。
    - 在切走子应用时，会触发 `umount()` 生命周期，执行暴露给子应用基座的卸载方法。最后完全销毁 DOM、事件、沙箱。但是会缓存 JS 执行的模块定义、CSS 解析后的样式规则。
2. 再次访问子应用时：不会重复拉 HTML 以及相关的资源，因为有缓存，会重新 `mount()`。
    - 如果有 SDK 脚本，不会重复下载和执行，全局变量和对象会被清除，需在 mount 中重新调初始化逻辑。

### 子应用通信 / window 挂变量

1. 在基座中注册子应用时，可以传递 props。props 中增加一个写入方法，子应用调；
2. Actions 通信 (`推荐`)，基座定义 initGlobalState 公共变量区，子应用可以在 props 拿到并读写；
3. 自定义事件，子应用触发一个 CustomEvent，并负担参数；基座实时监听，并处理参数。
4. 在非严格沙箱环境下，基座可以在注册子应用时，增加 globalVarWhiteList 全局变量访问白名单，子应用可以直接 `window.xxx` 访问这些变量。
5. PostMessage：iframe 的通信方式。获取到对方 widnow 后，进行 postMessage，对方监听

## Vue

### Vue2/3 响应式

-   Vue 2 响应式用的是 Object.defineProperty 劫持属性，只能劫持已有字段；
-   Vue 3 用的是 Proxy 实现响应式代理，可以深层递归、动态追踪所有对象操作，性能更优。
    -   使用 Proxy 拦截对象访问，通过 track 收集依赖、trigger 派发更新，构建了一个细粒度、按需追踪的响应式系统。

Vue3 流程：

1. 调用 `reactive()` 时，会返回一个 Proxy 对象，内部封装了 getter / setter 两个拦截器。
    1. 访问属性时，会触发 getter，进而调用 track 进行依赖收集，记录当前的副作用函数；
    2. 修改属性时，会触发 setter，进而调用 trigger，查找所在依赖这个 target 的副作用函数，然后依次触发这些函数的重新执行。
2. 调用 `effect(() => state.count)` 时，会立即执行内部函数，并标记为“当前活跃副作用”。
    1. 在执行过程中，访问了响应式对象的属性，会触发调用 `getter` → `track` ，然后收集当前的副作用函数。放在，`targetMap` 全局依赖图，是一个 WeakMap 用于收集和查找依赖。
    2. 当依赖的属性变更时，则调用 `setter` → `trigger` ，调用这个副作用。
3. 副作用函数内存在 `if/else` 等逻辑，不同于 React，这里是动态变化的。依赖关系需要更新。
    1. 所以在每次执行 `effect` 之前，都会清空之前收集的依赖，重新收集本次访问的依赖。

### vue 双向数据绑定 v-model

Vue 的双向绑定是依靠响应式系统（getter/setter 或 Proxy）+ 模板编译生成的监听与更新逻辑，做到数据变动更新视图、用户输入更新数据。`<input v-model="msg" />`

1. 数据绑定：在初始化时将 data.msg 变成响应式，Proxy 劫持 setter 和 getter；读取时记录依赖，赋值时视图更新；
2. 视图监听：编译模板时，Vue 为 v-model 元素自动加上 `:value` 和 `@input:` ，用户输入更新数据，触发 setter → 更新视图；

### vue 有 computed，react 是怎么处理的

-   computed 是基于响应式依赖自动追踪的 “缓存计算属性”，只有依赖项变化时才重新计算，否则返回缓存值。
-   React 使用 useMemo() 实现同样的缓存功能，只是它需要额外在增加依赖数组，没有实现自动化的响应式追踪机制。

### vue 编译原理

编译阶段：把 template 编译为 render 函数

1. 解析阶段 Parse：把 HTML 模板字符串转换成一棵 AST 抽象语法树，保留标签、属性等信息；
2. 优化阶段：根据依赖关系，标记 PatchFlag 更新点，用于后续跳过不必要的 diff；
3. 生成阶段：将 AST 转化为可执行的渲染函数代码（字符串），最终会返回一个 render 函数；

运行阶段：

1. 执行 render 函数，生成虚拟 DOM（VNode ）；
2. 与上次的 VNode 进行 diff 比较；根据差异生成 patch 操作，更新真实 DOM。

### vue 组件逻辑复用方式

Vue 中常见的组件逻辑复用方式包括：

1. mixins：混入多个逻辑对象，属性合并；
2. extends：继承单一逻辑对象，单一来源扩展；
3. Vue 3 推荐：组合式 API（Composition API） 和 自定义 hooks（可复用函数）。

### 组件封装思路

提取可复用 UI + 逻辑 + 状态，对外暴露清晰的 props/slots/events 接口，对内保证灵活可控、可维护、可拓展。

### vue 两种路由模式

-   hash 模式基于 location.hash 实现，兼容性好无需服务端支持；
    -   使用 URL 中的 `#` 锚点，来模拟路径变化，对服务器透明。
    -   通常是同一个 SPA 内进行路由跳转。
-   history 模式基于 HTML5 History API，更美观但依赖后端配置。
    -   如果用户刷新页面，增加的跳转参数就会传给后端，后端需支持对应数据的拉取。

## NestJs

### NestJS 核心思想

NestJS 借助面向对象 + 函数式编程 + TypeScript 装饰器 + IOC/AOP 模型，实现了高度可扩展的、模块化的 Node.js 应用框架。

1. IOC（控制反转）+ DI（依赖注入）
    - 核心是通过装饰器 + 元数据反射 来注册类及其依赖
    - `@Injectable()` 标记服务为可注入，Nest 的容器（IoC Container）负责实例化和注入
    - 控制权从开发者手动 new 转为框架自动管理（解耦、可测试、可替换）
    - 底层实现：
        - Nest 的 IoC 容器（内部维护一个 token → provider 的映射）；
        1. 装饰器 `@Injectable, @Controller`：会将 构造函数传递给装饰器中，以此能获取构造函数需要的入参，获取依赖关系。
        2. 装饰器内用 `Reflect.getMetadata()`：用户对 A Class 注入 token，Nest 可以获取构造函数的参数类型（获取元属性），然后递归实例化每个依赖，并注入 A Class 中，实现增强。
2. AOP（面向切面编程）
    - 通过 拦截器（Interceptor）、守卫（Guard）、管道（Pipe）、异常过滤器（Filter） 实现通用逻辑的抽离与复用；
    - 典型场景：权限控制、日志埋点、统一错误处理、响应封装。
    - 底层实现：在函数调用前后，通过对 Controller 中方法的高阶包装，进行调用前后的拦截。
3. 模块化架构（Module）
    - 每个业务逻辑单位（控制器、服务等）被组织在 @Module() 中。
    - 支持模块之间导入/导出 Provider，遵循单一职责、封装边界清晰。

### 核心工具 / 执行顺序 / 面向切面编程

执行顺序，请求处理的**完整流程**：

1. 请求阶段：中间件 → 守卫 → 拦截器 → 管道；
2. controller：控制器方法处理 handle；
3. 响应阶段：拦截器
4. 发生异常：异常过滤器

**面向切面编程**：

1. 中间件：请求会被 middleware 处理，这一层可以复用 express 的中间件生态，实现 session 功能。这个 middleware 也可以是 class 实现，可以注入其他 provider。
    - 适用于：处理原始 HTTP 请求/响应
        - 日志记录：记录所有请求的  IP、方法、URL  和响应时间
        - 身份验证基础设施：解析 JWT token，设置 req.user
2. 守卫：在具体的路由会经历 Guard 的处理，它可以通过 ExecutionContext 拿到目标 class、handler 的 metadata 等信息，可以实现权限验证等功能。
    - 适用于：基于条件的访问控制
        - 权限控制：检查用户是否有权访问特定资源
        - 角色验证：验证用户是否拥有执行操作的角色
3. 拦截器：Interceptor 可在请求前做处理，可通过 ExecutionContext 拿到 class、handler 信息。
    - 适用于：转换请求/响应，添加横切逻辑
        - 响应转换：统一响应格式为 {status, message, data}
        - 缓存：将耗时操作（数据查询）的结果临时存储起来，当相同请求再次到来时，直接返回缓存的结果，而不必重新执行操作。
4. 管道：在到达 handler 之前，还会对参数用 Pipe 做下检验和转换。
    - 适用于：数据转换和验证
    - 参数验证：验证 request 参数是否正确；
    - 数据转换：将 string 参数转换为 number 等；
5. handler：逻辑处理，调用 controller 中的函数去解决；
6. 拦截器：Interceptor 在请求后处理逻辑；
7. 异常过滤器：在任何位置抛出异常，都会用 Exception Filter 处理，返回统一的响应信息。

### **Express、Koa、NestJS 对比**

| **特性**        | **Express**                       | **Koa**                   | **NestJS**                                                                    |
| --------------- | --------------------------------- | ------------------------- | ----------------------------------------------------------------------------- |
| 1. 中间件模型   | (req,res,next) 链式调用           | async (ctx,next) 洋葱模型 | 装饰器驱动 + 多模块化管道（middleware, guards, pipes, interceptors, filters） |
| 2. Context 对象 | 分散：req/res 分离                | ctx 聚合（封装 req/res）  | ExecutionContext 抽象，封装 req/res 适配多平台（HTTP、WebSocket、gRPC）       |
| 3. 异步语法     | 早期 callback；支持 promise/async | 原生 async/await 设计     | 完整 async/await，结合 RxJS（可选）                                           |
| 4. 类型支持     | JS 原生；TS 靠社区类型声明        | 同 Express                | 原生 TypeScript                                                               |

**Context 上下文对象**

-   是框架在处理请求时创建的一个中间层封装，用来统一访问 HTTP 请求（req）和响应（res）相关数据和方法，并在中间件链/控制器中传递。

它封装了：

-   请求的参数访问：query, body, params, headers；
-   响应的输出内容：status, body, setHeader；
-   中间件共享的数据；
-   平台无关的封装（如 HTTP or WebSocket）。

三个平台的对比：

1. Express：没有共享的 context 对象。而是使用拆分的 req 请求体 + res 响应体。
2. Koa：有 ctx 共享对象，聚合了请求、响应、共享上下文等信息，可在不同中间件传递。
3. NestJs：封装了通用上下文对象 ExecutionContext，适配不同平台 HTTP、RPC、WebSocket。并且可以通过装饰器注入 req / Res 对象，通过 getHandler 获取元信息，支持复杂业务场景。



## NodeJs




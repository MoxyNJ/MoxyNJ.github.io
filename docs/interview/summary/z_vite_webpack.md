---
title: Vite、Webpack
sidebar_position: 12
date: 2022-08-05
tags: [Vite, Webpack]
---

### vite 原理

-   开发阶段：
    -   基于原生 ES Module，依赖浏览器按需加载，利用 ESBuild 对依赖包（node_modules）预构建，加速启动；
    -   自身代码不打包，只在请求时动态编译并返回模块；
    -   浏览器在加载页面时，会按需 http 请求对应的 js 模块，请求路径就是模块的相对路径；
    -   vite 会拦截这些请求，并将源码转译成浏览器可读的 ESM 代码返回；
-   生产阶段：
    -   基于 Rollup 打包生成生产版本，构建 loader 处理文件，依赖图… 和 webpack 相同。

### webpack tapable 模块

-   基于发布订阅模式，让 webpack 可以在各个阶段灵活的注册和执行回调函数，以实现各个阶段的生命周期 hook，从而让 plugin 可以插入到这些生命周期中，增强 webpack 构建流程。

### **loader pitch**

-   是 webpack 中 loader 的一个特殊阶段和函数，它允许 loader 在正常处理资源之前插入自定义逻辑，影响后续 loader 的执行流程。

1. 如果是 Normal 阶段: loader 上的 常规方法，按照 `前置(pre)、普通(normal)、行内(inline)、后置(post)` 的顺序调用。
2. 应用 style-loader：模块源码的转换， 发生在这个阶段。

### **style-loader 原理**

1. css-loader：解析 CSS 文件的 `@import` 和 `url()` 依赖，将 CSS 转换为 JavaScript 模块；
2. style-loader 则负责将模块内容注入 DOM。

### **webpack 是怎么处理 commonjs/esm**

1. 内部通过 babel 构建 AST 抽象语法数；
2. 根据模块类型，调用不同的模块工厂函数，构建成品。

### **移动端这块的问题，适配不同屏幕**

1. postcss plugin，px-to-vw 实现自适应。定义设计稿宽度：375，然后自动计算。
2. 通常不会转换 1px，因为 1px 通常是边框，换成 vw 可能粗细不同设备不统一。

### **模块联邦**

类似于 npm 包，但是通过动态 import 的形式。需要经过 http 拉取 js 文件。不同模块独立部署，上线；支持共享组件、函数等封装个个体模块。

### 🍊  自定义插件

比如：需要在每次构建后自动输出打包产物的文件大小统计，并在 CI 中报警：

-   插件介入 Webpack 的 emit 钩子，遍历 assets 资源统计每个文件的大小；
-   超过阈值的文件通过 CI 日志或信息通知告警；
-   使用 Tapable 的 async hook 编写，兼容异步通知。

这样可以在不侵入构建逻辑的情况下，动态监控产物大小，帮助团队持续优化打包体积。

**vite：routerBundlePlugin**

背景：有一个技驱前端工程，发现会重复加载 index.js，看代码第一次加载时 `import index_20250303.js` ，后续还会加载 `index.js` 。而 `index.js` 因为没有 hash 和时间戳，会走本地缓存的文件，导致上线后页面会加载出问题，导致白屏。

排查了，实际流程是:

-   Vite 构建输出简单命名文件  `assets/index.js` ；
-   部署到 CDN  路径  `https://j1.xxcdn.com.cn/git/.../assets/index.js` ，同时部署了带时间戳的 `index_v2025xxx.js`；
-   后端渲染模版页面时，getURL  函数将其转换为  `index_v20250208175300.js` ，所以主路由最终使用了带时间戳的 `index_vxxxx.js` 。

这就导致了，前端在打包时 `outputOptions` 阶段配置打包策略：

1. 常规 chunk 可使用 `name.hash.js` ，入口文件必须用 `name.js` 无 hash 值。
2. 路由懒加载时，vite 默认的打包策略可能导致组件间互相引用，共同引用一个基础模块，比如这里打包后引用了主文件 `index.js` ，导致了缓存问题。

**解决方案：**

Vite 默认的代码分割机制在处理动态导入时的命名方式：

-   在 `outputOptions` 勾子阶段，自定义 router Bundle Plugin 插件，自动识别 router.js 中的路由动态导入的组件，将他们单独打包为 `chunk-目录-文件名.js`
-   在执行 `rollupOptions` 的主文件打包名 `index.js` ，其他 chunk 打包 `name.hash.js` 之前；
-   主文件使用哈希命名：index_xxxxx.js（防缓存），动态导入的模块使用简单命名：index.js；
-   自定义 routerBundlePlugin，对路由 router.js 中动态导入的 `() => import(xx.js)` 进行判断，然后增加 hash 后缀，每个路由组件名称为 `chunk-目录名-文件名.js` 。
-   然后调用 `vite.config` 中配置的 `name.hash.js` 打包策略，增加 hash 值。
-   这样打包路由之间不会存在相互引用，自然也就没有缓存问题了。

### **Loader 与 Plugin 的区别**

Loader (加载器)

-   定义：文件转换器，处理特定类型的文件
-   职责：将源文件转换成标准模块，供 Webpack 处理
-   执行方式：针对单个文件进行操作
-   配置位置：module.rules 数组中

Plugin (插件)

-   定义：扩展  Webpack 功能的工具
-   职责：干预 Webpack 构建流程的各个阶段
-   执行方式：监听 Webpack  构建过程中的事件，全局性工作
-   配置位置：plugins 数组中

| **类型** | **关注点**                               | **执行阶段**                               |
| -------- | ---------------------------------------- | ------------------------------------------ |
| Loader   | **单个文件内容的转换**                   | buildModule 期间                           |
| Plugin   | **编译全流程、资源、输出、生命周期管理** | 多个阶段可插入，如 compilation, emit, done |

### **Webpack 构建流程**

1. **初始化阶段：**创建 Compiler 实例(上下文控制)，加载配置，注册插件，准备生命周期钩子。
2. **开始编译（compiler.run）：**启动 Compilation 实例，表示一次构建过程。
3. **构建模块（buildModule）：**入口文件开始，解析所有依赖模块：
    - 一个递归过程，包含：解析模块、执行 Loader、解析依赖、递归构建模块
    - 对于某一个模块：
        1. **Loader 处理**：每个文件在被解析前，按配置的 loader 规则进行转换；
        2. **模块解析**：JS 源码转换为 AST 抽象语法树，比如用 `@babel/parser`；
        3. **收集依赖**：根据 AST，找到依赖关系，收集，并继续构建；
4. **Chunk 构建：**根据入口和代码拆分规则，生成 Chunk。Tree-shaking 逻辑在这里。
5. **构建 + emit**：构建 bundle、JS/CSS 文件，并输出到配置的 output.path 目录。

### **Loader 的执行顺序和时机**

**Loader 的匹配时机**

Webpack 在构建时，递归的处理每一个依赖模块，对于具体的某一个模块：

1. 解析这个模块中依赖的文件，根据 rules 中的匹配规则，找到匹配的 rule；
2. 调用对应的 loader 处理文件
3. Loader  链从下 → 上，依次处理文件内容
4. 每个  loader 接收上一个 loader  的输出，最终输出  JS  模块代码。
    - 即使是 css，也是转换为 css 内容的字符串，放在 js 文件中，append 到 document 上

**同一个 Rule 中，Loader 执行顺序**

-   Loader 在同一规则：从下到上执行
-   例如 CSS  处理链：style-loader → css-loader → postcss-loader → sass-loader；
-   实际处理时：
    1. 执行 sass-loader  将 SCSS 编译为 CSS；
    2. 然后经过 postcss-loader 处理，px → vw，增加浏览器后缀；
    3. 再由 css-loader  解析依赖，导入关系；
    4. 最后由  style-loader 将 CSS 注入 DOM；

### 🍊 Plugin 的**执行顺序和时机**

Plugin 通过 webpack 生命周期的钩子插入，在各个阶段可介入：

-   编译过程、生成资源(assets)、构建结果

| **生命周期钩子** | **说明**              | **典型插件**                                         |
| ---------------- | --------------------- | ---------------------------------------------------- |
| initialize       | 初始化 Compiler 时    | 自定义插件初始化、校验                               |
| run / watchRun   | 构建启动时            | ProgressPlugin：构建进度展示                         |
| beforeCompile    | 开始 compile 前       | **🌈 自定义插件：动态生成入口文件**                  |
| compile          | 编译流程启动          | **🌈  自定义插件：启动时间，日志打点**               |
| compilation      | 创建 compilation 实例 | HtmlWebpackPlugin：生成/修改 HTML 文件，操作资源     |
| make             | 从入口递归构建依赖图  | **🌈  自定义插件：动态生成依赖、做源码分析**         |
| afterCompile     | 所有模块编译完成      | BannerPlugin：在打包文件头部插入版权、版本等注释信息 |
| emit             | 输出前，修改 assets   | CopyWebpackPlugin：复制静态资源到 output 目录        |

CompressionPlugin：在输出前生成 gzip、brotli 压缩文件
**🌈 自定义插件：可以监控构建产物体积** |
| afterEmit | 文件写入后 | **🌈  自定义插件：可用于通知、日志记录** |
| done | 完整构建结束 | 打印构建信息 |
| failed | 构建失败时 | **🌈  自定义告警：发送告警、企业通知、自动清理** |

### **Tree-Shaking 的构建流程**

是一个多阶段优化过程，发生在构建 chunk 时。依赖于之前的依赖图分析，并在最终代码生成时真正删除未使用的代码。

在优化阶段：

1. 标记阶段。Webpack 分析模块间的依赖关系，标记哪些导出被实际引用，哪些未被使用；
    - 这一过程依赖于 ES  模块的静态结构。
2. 优化阶段。基于标记信息，进行 "Shaking" 操作，确定哪些代码可以安全删除；
    - sideEffects 配置在这里起作用，指明哪些文件有副作用，不可 Shaking。
3. 生成阶段。真正移除未使用的代码，执行代码压缩和混淆；
    - 生成最终的 bundle。

**什么产物可以 Tree shaking？**

1. Tree-shaking 只能对 “静态可分析的 ES Module 导出” 生效。
2. 静态导出、无副作用、使用 es module 规范（import/export）

**class 中没被使用的到代码会优化？**

1. 不会，tree-shake 是基于静态分析的。只要 class 内这个模块被引用，就会打包；无法动态识别具体的某个方法是否被调用。

### **打包产物类型有哪些？**

模块类型（Module Format） 分类：

-   决定了「打包后的 JS 文件该如何被加载和使用」。

| **模块类型** | **全称**                                | **应用场景**                           | **是否支持浏览器** | **是否支持 Node.js** |
| ------------ | --------------------------------------- | -------------------------------------- | ------------------ | -------------------- |
| **ESM**      | ES Module (import/export)               | 浏览器原生支持、现代前端构建工具标准   | ✅ 现代浏览器      | ✅ Node ≥ v12        |
| **CJS**      | CommonJS (require/module.exports)       | Node.js 的默认模块系统（早期标准）     | ❌（浏览器不支持） | ✅ 所有 Node 版本    |
| **IIFE**     | Immediately Invoked Function Expression | 一种自执行函数格式，适合 <script> 引用 | ✅                 | ❌                   |
| **UMD**      | Universal Module Definition             | 可运行在 Node、AMD 和浏览器中          | ✅                 | ✅                   |

-   Vue2 使用 vite.legacy 插件进行兼容性打包后，默认产物是「IIFE」格式，也可以指定为 UMD

```jsx
// UMD 打包产物特征:开头有大段环境检测代码
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else { //... }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';
  // 模块内容...
	return {}
}

// IIFE 打包产物特征:立即执行函数
var liveBusinessList = (function() {
  'use strict';
  // 模块内容...
  return {
    showCouponPopup: showCouponPopup,
    showBusinessListPopup: showBusinessListPopup
  };
})();
```

### 编译产物

1. **es6 的 class 最终被降级编译成了什么**
    1. 构造函数 + 原型链
2. **打包降级编译的时候是怎么处理的**

    - 降级编译核心是用 Babel 将现代代码转成 ES5，配合 polyfill 提供 API 兼容，并由打包工具输出目标格式代码。现代工具通过自动多版本打包，兼顾新旧浏览器加载性能。
    - Vite 使用 vite-plugin-legacy：生成一份兼容性的降级版本，可配置具体的兼容性版本；
    - webpack 使用 Babel Loader：通过 `@babel/preset-env` + `core-js` 按需 polyfill；

    ```jsx
    <script type="module" src="modern.js"></script>
    <script nomodule src="legacy.js"></script>
    ```

### **产物体积优化**

SDK 体积：

-   商业产品列表 PC / M：50+ KB
-   商业产品列表：82 KB

1. 代码压缩：TerserPlugin 可以压缩和混淆 JS 代码，移除注释、console、优化表达式；
2. Tree-Shaking：通过依赖关系图 + 标记，打包时删除多余代码；
3. 模块合并：`concatenateModules` 将小模块整合成大的作用域，减少导入导出；
4. 内联图片：`url-loader` 将 <8k 图片内链为 base64，减少 http 请求；
5. 按需引入：`@babel/preset-env` 配置时，按需引入 polyfill

**其他：**

1. PurgeCSS：删除未使用的 CSS；
2. 动态导入：非核心功能使用 `import()` 延迟加载；
3. 资源优化：使用 `CompressionPlugin` 对资源预压缩，优化图片格式；
4. 差异化打包：提供 ESM 和 legacy 两个版本的构建，现代浏览器可以省略很多 polyfill。
5. CDN 引入依赖：将大型公共库设为外部依赖，通过 CDN 引入；使用 externals 配置排除打包；

### **热更新原理**

webpack 自己  **开启了 express 应用**。添加了对 webpack 编译的监听，建立和浏览器的 websocket 长连接。

-   当文件变化，触发 webpack 进行编译并完成后，通过 sokcet 消息告诉浏览器准备刷新。
-   为了减少刷新的代价，就是  **不用刷新网页**，而是 \*_刷新某个模块_。

webpack-dev-server 支持热更新，通过文件的 hash 值比对，找到需要更新的模块，浏览器再进行热替换。

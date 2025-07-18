---
title: Webpack
sidebar_position: 12
date: 2022-07-01
tags: [webpack]
draft: true
---

## 1. Webpack 定义

放到了最下面的问题。



### 1.2 webpack 产生的背景

首先，为什么打包？因为：

1. 各个依赖文件的关系难以梳理，耦合程度较高，代码难以维护。
2. 把所有依赖包都打包成为一个js文件（bundle.js）文件，会有效降低文件请求次数，一定程度提升性能。
3. 逻辑多、文件多，项目复杂度提高

为什么要用webpack？因为：

1. webpack 除提供上述功能外，还充当了“翻译官”的角色，例如将 TS、ES6 翻译为低版本的语法，将less、sass 翻译为 css 等功能。
2. 强大而灵活，plugin 可插拔，按需加载。



重点：

1. 理解前端模块化，各种模块化方式是如何实现的；
2. 理解 Webpack 打包的核心思路；
3. 理解 Webpack 中的 ‘关键人物’；



### 1.3 前端模块化

早起模块化的实现方法：

不同的 module（moduleA.js， moduleB.js，moduleC.js） 会放在不同的 js 文件中。但是如果把所有的 js 文件通过 `script` 标签引入同一个 HTML 文件中时，这些 js 文件都会绑定到全局作用域中。这就导致了如果在不同的 js 文件中不小心使用了相同的变量名，就会发生命名冲突和值的覆盖。

为了避免这种命名空间的冲突，会采用模块化封装，下面是一个早期的封装方式，采用立即执行函数 IIFE 和 闭包实现：

```js
// 定义模块内的模块作用域
(function(window){
    var name = "susan"
    var sex = "female"
    functioon tell(){
        console.log("im ", this.name)
    }
    window.susanModule = {tell}
})(window)
```

最终这个 susanModule 绑定在了 window 全局对象中，在 node 环境中是 global 对象。

封装的好处就是，该暴露的数值可以暴露，想隐藏的数值也隐藏。

- 这里的例子中 name  和 sex 的变量就变得无法修改，而只能通过 tell function 去访问，达到了对数据的封装，提升安全性。



#### 模块化的优点

- 模块化的封装（该暴露的暴露，该隐藏的隐藏）
- 重用性（不同的网页可以通用相同的模块）
- 解除耦合（不同的模块之间不会相互关联影响）



### 1.4 模块化方案进化史

随着模块化优势体现，开发者更倾向于使用模块化协同开发项目，于是在发展过程中形成了很多规范：AMD、COMMONJS、ES6 MODULE



#### 1.4.1 AMD

Asynchronous Module Definition（异步模块定义）
定义最早，目前很少使用。

```js
// 求和模块，参数依次是：当前模块名、依赖的模块、模块内容
define("getSum", ["math"], function(math){
	return function (a,b){
    	log("sum:"+ math.sum(a, b))
    }
})
```

#### 1.4.2 COMMONJS

2009年出的规范，原本是为服务端的规范，后来 nodejs 采用 commonjs 模块化规范

- 模块必须显示的引入

```js
// 通过require函数来引用
const math = require("./math");

// 通过exports将其导出
exports.getSum = function(a,b){
	return a + b;
}
```



#### 1.4.3 ES6 MODULE

目前使用最多的便是这个，JavaScript 提供了原生支持的模块打包方式，使用 `import` 和 `export`。

```js
// 通过import函数来引用
import math from "./math";

// 通过export将其导出
export function sum(a, b){
	return a + b;
}
```


### 1.5 Webpack 的打包机制

根据 `import` 引入等关键字，将依赖文件打包成一个文件。



#### 1.5.1 输出文件

输出文件的大体结构：

```js
(function(module) {
	var installedModules = {};
    function __webpack_require__(moduleId){
    	// SOME CODE
    }
    // 。。。
    return __webpack_require__(0); // entry file
})([ /* modules array */])
```

上述结构中的核心方法：

```js
function __webpack_require__(moduleId){
	// check if module is in cache
    if(installedModules[moduleId]){
    	return installedModules[moduleId].exports;
    }
    // create a new module (and put into cache)
    var module = installedModules[moduleId] = {
    	i: moduleId,
        l: false,
        exports: {}
    };
    // exe the module func
    modules[moduleId].call{
    	module.exports,
        module,
        module.exports,
        __webpack_require__
    };
    // flag the module as loaded
    module.l = true;
    // return the exxports of the module
    return module.exports;
}
```

#### 1.5.2 Webpack打包过程

1. 从入口文件开始，分析整个应用的依赖树
2. 将每个依赖模块包装起来，放到一个数组中等待调用
3. 实现模块加载的方法，并把它放到模块执行的环境中，确保模块间可以互相调用
4. 把执行入口文件的逻辑放在一个函数表达式中，并立即执行这个函数



## 2. 配置开发环境

-  创建一个工程：`npm init`
-  也可以使用 `npm init -y`，直接生成了一个默认配置的 `package.json`，不需要一路回车。

分析：`package.json` 版本信息文件

![image-20220630213046661](images/webpack.assets/image-20220630213046661.png)

- 运行自定义命令：`npm run test`，就可以运行 `test` 后面命令的值，类似一个快捷键。这里就执行了后面的 `echo..` 这个命令。



安装时的命令：

- `npm config set registry https://registry.npm.taobao.org` 下载包的地址调整为淘宝镜像
- `npm install loadash --save`
  - `--save`，npm5xx 以上可省略。下载好包后，还会把这个包放到 `package.json` 的 `dependencies` 字段下保存：`"loadash: "^1.0.0`。
  - `--save-dev`，指定当前环境是开发环境。会把这个包放到 `package.json` 的 `devDependencies` 字段下保存：`"loadash: "^1.0.0`。
  - `--only=prod`，`--only=dev` 指定这个包安装在生产环境下 / 开发环境下。如果不指定，则默认会安装在 `node_modules` 中。在较大的工程项目中会实现环境区分， 比如只安装 `dependencies` 提升安装速度。
- `npm` 安装 `webpack-cli`，`webpack-dev-server`。
  - 事实上，在 `node_modules` 中项目已经装好了这些依赖，不需要在重新 `npm` 安装后才能运行 `webpack-dev-server` ，可以直接：`./node_modules/.bin/webpack-dev-server` 运行该依赖。



![image-20220630213057347](images/webpack.assets/image-20220630213057347.png)

主要有两种依赖：

1. `dependencies` 生产环境下的依赖。通常项目迁移到别处时，重现安装依赖会默认 `dependencies` 中的依赖，这里放和项目习惯的功能模块。
2. `devDependencies`  开发环境下的依赖。 通常反正构建工具、质量检测工具



`package.json` 中的 `"scripts"` 字段

```json
"scripts" : {
    "test": "echo \"Error: no test specifed\" && exit 1",
    "dev" : 
}
```

`dev`：运行 `npm run dev` 可以原地启动一个 webpack 开发服务器。

- 更新：`npm run start` 是最新的命令

`build`：运行 `npm run build` 可以对代码格式做校验，对文件进行打包。



`npm install` 的过程：

1. 寻找包版本信息文件 (package.json)，依照它来进行安装；
2. 查找 `package.json` 中的依赖，并检查项目中其他的版本信息文件；
3. 如果发现了新包，就更新版本信息文件； 



## 3. Webpack 核心特性

### 3.1 安装和入口

入口文件： `src/index.js` 当运行 `webpack ` 进行打包后，会把 `index` 入口文件中引入的全部模块打包起来，放到 `dist/main.js` 中。

如果想修改入口文件，就需要自定义配置，通常会在根目录一个定义文件 `webpack.config.js` 来修改和定义配置：

![image-20220630213112204](images/webpack.assets/image-20220630213112204.png)

- `entry` ：工程资源的入口，俗称入口文件，可以理解为依赖树的根，可以有多个入口，每个入口都会有一个对应的打包结果： `./app.js`。
- `output` ：打包结果，俗称出口文件：`dist/bundule.js`。
  - `path` ：必须是绝对路径，所以这里用到了 `path.join()` 校验地址；
  - `filename`：打包结果的文件名。



`webpack-dev-server`：监听工程文件的改动，可以自动打包文件，刷新浏览器。

- `port`，修改默认的服务器地址，：`localhost:8080`



### 3.2 loader - 文件加载器

`loader` 是一个文件维度的操作，通常文件的操作的包，就需要用 loader 加载。比如后面会讲到的 babel 就需要通过 loader 加载。



接着上文的 webpack.config.js 文件

![image-20220630213122115](images/webpack.assets/image-20220630213122115.png)

可以让 webpack 打包和引入 css、less、scss、png 等各种模块；

`npm install css-loader --save-dev`，安装可以引入 css 的 loader。

在 `webpack.config.js` 使用 `loader`。

- `module` 下的 `rules` 中配置。
  - `test`：`.css` 处理 `.css` 文件。
  - `use`：这个文件需要被哪些 loader 来处理；
    - `style-loader`：自动生成一个样式 style 标签，加载该样式；
    - `css-loader`：让  js 可以解析  `import sytle.css`  这个代码；

**注意，loader 的实际配置顺序是从下往上的，和书写的方式相反。**

- 所以我们想优先加载的配置，要放在末尾。这里的顺序是固定的，即，先加载 `css-loader` 再加载 `style-loader`。

生效后，可以解析 js 代码中的 `import sytle.css` 这类文件了。



### 3.3 plugins - 插件

节点维度的处理。

`plugin` 通过事件监听机制，改变文件打包后的输出结果。

- 比如，对资源进行压缩处理，让文件更快的从服务端传递给浏览器。从代码中去掉不需要的内容，如注释、换行、空格等等，减小整体体积。



安装一个压缩的 plugin：`npm install uglifyjs-webpack-plugin --save-dev`

安装后，就可以在 `webpack.config.js` 的 `plugin` 中引入并生效：

1. 在文件的开头需要引入这个库：`const UglifyJSPlugin = require('uglifyjs-webpack-plugin')` 
2. 在 `plugin` 字段中创建并引入这个库：

![image-20211201120058877](images/webpack.assets/image-20211201120058877.png)



## 4. webpack 构建工程

### 4.1 构建

模拟一个 `react` 项目的构建过程：

- `npm install react react-dom`
- 安装 webpack 依赖，webpack 和 webpack 的命令行 cil工具。
  - `npm install webpack webpack-cli -d`
    - development 开发环境下安装，是 `--save-dev` 的简写。模块会写入到 `devDependencies ` 字段下，安装在项目的 `node_modules` 中。需要输入 `./node_modules/.bin/webpack` 命令使用 webpack。
  - `npm install webpack webpack-cli -g`
    - 安装在电脑操作系统的全局中，可以输入 `webpack` 命令直接启动。一般会安装到AppDataAppData\Roaming\npm目录下
  - `npm install webpack webpack-cli`
    - 默认，在生产环境下安装



### 4.2 babel

`babel` 可以把 ES6、Jsx 等形式的 js 文件，转化为 ES5 版本的 js 文件。通常使用 loader 引入。

相关的常用库有 (5)：

- `@babel/core`、`@babel/cil`、`@babel/preset-env`、`@babel/preset-react`、`babel-loader`



- `npm install @babel/core @babel/cil -g`

  - 安装 babel 的核心库 core 和命令行 cil 工具。

- `npm install @babel/preset-env @babel/preset-react` 

  - 安装 babel 的转换规则，这个包可以把高版本的 JS 代码转换为 低版本的 ES5；

  - `preset-env` 可以把高版本 Js 代码转化为 ES5；

  - `preset-react` 可以把 Jsx 格式的文件转化为 Js 文件；

  - 安装好后，可以把包含 ES5 的代码 `test.js` ，通过在命令行运行 `babel test.js --presets=@babel/preset-env` 直接转化为  ES5 代码:

    ```js
    // test.js 文件
    [1,2,3].map((item) => {
        console.log(item)
    })
    ```

    ![image-20211201122704381](images/webpack.assets/image-20211201122704381.png)

- `npm install babel-loader` 

  - 通过 loader 的方式引入 babel，需要这个库的支持。



**改进1：**可以在 `package.json` 中制定 babel 规则：

![image-20211201122807296](images/webpack.assets/image-20211201122807296.png)

这样就不需要在输入 `babel test.js --presets=@babel/preset-env`  去寻找规则，直接 `babel test.js` 就可以了。

**改进2：**直接创建一个独立的文件 `.babelrc` ，可以更方便的修改 babel 规则。

- `babel` 会优先查找 `.babelrc` 这个文件，如果不存在就会遍历到 `package.json` 中去寻找。

![image-20211201123112000](images/webpack.assets/image-20211201123112000.png)



在项目中引入 `babel`，通过文件操作层级的 `loader`。

在 `webpack.config.js` 中自定义：

![image-20220630213201704](images/webpack.assets/image-20220630213201704.png)

- test：通过正则，引入 .js 和 .jsx 格式文件。
- exclude：排除在外的地址，不转换 node_modules 中的文件。
- use：
  - loader：加载方式使用 babel-loader，需要提前 npm 安装 `babel-loader`。

```js
module.exports = {
  module:{
    rules: [
      {
        test: /\.jsx?/,							// 需要转化 .js 和 .jsx 文件
        exclude: /node_modules/,		// 排除 node_modules 地址的文件
        use: {
					loader: 'babel-loader',		// 使用babel-loader加载babel规则
          options: {
            babelrc: false,					// 告知babel，没有babelrc规则文件，babel规则都在这里找
            presets: [							// 引入babel转化规则
              require.resolve('@babel/preset-react'),		// 转化jsx语法
              [require.resolve('@babel/preset-env', {module: false})] //转化高版本JS语法，
            ],													//不转化module规则，因为webpack支持import,export规则
            cacheDirecrtory: ture,			//需要添加缓存，默认是false，添加缓存后可以提升加载速度
          }
      	}
      }
    ]
  }
}
```



### 4.3 html-webpack-plugin

插件的基本作用就是转化并生成 html 文件。

- 为 html 文件中引入的外部资源如 script、link 动态添加每次 compile 后的 hash，防止引用缓存的外部文件问题；
- 可以生成创建 html 入口文件，比如单页面可以生成一个 html 文件入口，配置 N 个 html-webpack-plugin 可以生成 N 个页面入口；

安装：`npm install html-webpack-plugin -d`

配置：在 `webpack.config.js` 中，

1. 引入 `const HtmlWebPackPlugin = require('html-webpack-plugin')`

2. 在 module 中配置：

   ```js
   const HtmlWebPackPlugin = require('html-webpack-plugin')
   const path = require('path')   // 会把所有路径引入，并转化为绝对路径
   
   module.exports = {
     module: {
      // 上面 babel 相关设置在这里
     },
     plugins :[
       new HTMLWebPackPlugin({														// 引入HTMLWebPackPlugin
         template: path.resolve(__dirname, 'src/index.html'),    // 打包的文件地址
         filename: 'index.html'					 // 文件打包完后在目标地址中的名字，通常与原文件名称相同
       })
     ]
   }
   ```

   

`import` 不写后缀：

`import ./text.js` node.js 中，默认可以不写 .js 文件后缀，在 webpack.consig.js 中可以配置更多的文件：

```json
module.exports = {
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json']
  }
}
```

指定 jsx 的入口文件：

```json
module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx')
}
```



### 4.4 wepack-dev-server

webpack-dev-server 是一个小型的node.js Express 服务器。 简单来说，webpack-dev-server就是一个小型的静态文件服务器。使用它，可以为 webpack 打包生成的资源文件提供Web服务。

1.  webpack-dev-server 有两种模式支持自动刷新——iframe模式和inline模式。
    - 在 iframe 模式下：页面是嵌套在一个 iframe 内，在代码发生改动的时候，这个 iframe 会重新加载；
    - 在 inline 模式下：一个小型的 webpack-dev-server 客户端会作为入口文件打包，这个客户端会在后端代码改变的时候动态刷新页面。
2.  webpac-dev-server 支持 Hot Module Replacement，即模块热替换，在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。使用 HMR 功能也有两种方式：命令行方式和 Node.js API。



使用 HMR 热替换，`webpack.config.js`：

1. 引入 `webpack`

```js
const webpack = require('webpack')
module.exports = {
  // ... 其他文件
  plygins:[
    // ... 其他文件
    ,
    new webpack.HotModuleReplacementPlugin()
  ],
    devServer: {
      hot: true;
    }
}
```

2. 对需要热更新的文件添加配置，在 `index.jsx` 入口文件，添加：

```js
import App from "./App"

if(module.hot) {      // 如果发现module中有hot属性，表明已经设置了热替换，则引入热替换功能
  module.hot.accept( error => {
      if(error) console.log("热替换出BUG了")
    })
}
```

3. `webpack-dev-server --open` 启动服务，查看是否有效果。
   - 在 `scripts` 中，可以配置命令行提升代码效率，不需要再输入一长串的命令了，只需要 `npm run start`：



## 5. 包管理工具

### 问题：包管理工具的作用

包管理工具是 JavaScript 模块化功能的延伸。

- 工具封装。通过模块化的方式来封装自己的代码，并且封装成一个第三方工具； 
- 该工具可以让其他开发者通过导入的方式来使用。

分享第三方工具的方式：

1. 上传到 GitHub，其他程序员通过 GitHub 下载第三方工具。
   - 必须知道包在 GitHub 上的地址，并且从 GitHub 上手动下载。
   - 不需要使用的时候，需要手动来删除相关的依赖。
   - 当遇到版本升级或者切换时，需要重复上面的操作。下载最新版本 / 历史版本繁琐。
2. 使用专业的工具来管理我们的代码
   - 通过工具将代码发布到特定的位置（如 npm）
   - 直接通过工具来安装、升级、删除自己项目中的工具代码。



### 问题：npm 的配置文件

每个项目都会有一个对应的配置文件，无论是前端项目（Vue、React）还是后端项目 （Node）。

配置文件 `package.json`，记录：

- 项目的名称、版本号、项目描述等
- 项目所依赖的其他库的信息、依赖库的版本号。

常见属性：

```json
// 必填name、version
name 				// 项目名称 
version			// 当前项目版本号
description	// 描述信息，多数是项目的基本描述
author			// 作者相关信息（发布时用到）； 
license			// 开源协议（发布时用到）；

//rivate 属性：
private			// 项目是否是私有：true时，npm不能发布，防止私有项目或模块不小心发布出去。
```



**`main` 属性**

设置程序引入时的入口

- 我们使用 axios 模块的 `const axios = require('axios');` 
- 实际上是找到 `axios` 中 `main` 属性查找文件，然后引入的。如果没有 main 属性，npm 会默认导入包的 `index.js`。

![截屏2022-08-16 16.49.07](images/webpack.assets/%E6%88%AA%E5%B1%8F2022-08-16%2016.49.07.png)



**scripts 属性**

用于配置一些脚本命令，以键值对的形式存在。方便把常用命令行，缩减为统一的几个单词。

- 配置后可以通过 npm run 命令的 key 来执行这个命令
- 如：`npm start` 和 `npm run start`
- 对于常用的 start、 test、stop、restart 可以省略掉 `run` 直接通过 `npm xxx` 方式运行。



**dependencies 属性**

指定 **开发环境**、**生产环境** 都需要依赖的包。 

- 项目实际开发用到的库模块 vue、vuex、vue-router、react、react-dom、axios等



**devDependencies 属性**

仅在 **开发环境** 使用的依赖包。

- 一些包在生成环境是不需要的，比如webpack、babel 等；
- 通过 `npm install webpack --save-dev`，将它安装到 devDependencies 属性中。



**peerDependencies 属性**

一种项目依赖关系是 **对等依赖**，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的。

- 比如 element-plus 是依赖于 vue3 的，ant design 是依赖于 react、react-dom。

```json
"peerDependencies": {
  "react": ">=16.9.8",
  "react-dom": ">=16.9.0" 
}
```



### 问题：版本依赖规范

npm 的包通常需要遵从 semver 版本规范： 

- semver：https://semver.org/lang/zh-CN/ 
- npm semver：https://docs.npmjs.com/misc/semver

semver 版本规范是 `X.Y.Z`： 

- X 主版本号（major）：新版本可能存在不兼容的 API 修改。
- Y 次版本号（minor）：新版本新功能增加，但是兼容之前的版本。
- Z 修订号（patch）：新版本没有新功能，修复了之前版本的 bug。

语义化版本：

在 `dependencies` 和 `devDependencies`  中的依赖，可以使用语义化版本号。重新安装依赖 `npm install` 后，会实现自动更新小版本或中版本，在不该动大版本的情况下，不需要用户手动修改版本号，就可以尽可能的使最新的版本。**通常 `package.json` 中的版本会添加一个 `^`。**

- `^version`：会自动更新中版本和小版本；
  - `^1.0.1`  ==> `1.x.x`
- `~version`：会自动更新小版本；
  - `~1.0.1` ===> `1.0.x`
- `version`：不更新，只安装规定的版本。

注意： `package-lock.json` 会锁定版本，**优先级比 `package.json` 更高**。



### 问题：执行 `npm install xxx -???`

| npm install xxx + | [不写]   /  -s  /  --save     | -d  /  --save-dev             | -g  /  --global            |
| ----------------- | ----------------------------- | ----------------------------- | -------------------------- |
| 安装方式          | 项目默认安装                  | 项目默认安装                  | 操作系统全局安装           |
| 安装位置          | node_modules 文件夹下         | node_modules 文件夹下         | AppDataAppData\Roaming\npm |
| 模块引入          | dependencies 字段下           | devDependencies 字段下        | dependencies 字段下        |
| 使用              | `./node_modules/.bin/webpack` | `./node_modules/.bin/webpack` | `webpack` 直接启动         |

```shell
# 安装全局依赖
npm install axios --global
npm install axios -g

# 安装开发和生产依赖 
npm install axios 
npm i axios

# 开发依赖 
npm install webpack --save-dev 
npm install webpack -D 
npm i webpack –D

# 根据package.json中的依赖包 
npm install
```



### 问题：`npm install` 原理

![截屏2022-08-16 17.13.49](images/webpack.assets/%E6%88%AA%E5%B1%8F2022-08-16%2017.13.49.png)

**`package-lock.json` 的作用** 

如果项目没有 `package-lock.json`，安装是参考 `package.json`。

- 以 `"axios": "^1.23"` 为例，在不同的程序员电脑，去下载相同的项目时，由于电脑本地缓存的 axios 版本不一致
- 这导致不同环境加载项目的 axios 版本依赖不同，这有可能导致项目运行时的表现不一致。



**流程：没有 `package-lock.json`**

以 `install axios` 为例。

- **构建依赖关系**：查找 axios 会依赖哪些包，并且多个包之间会产生相同依赖的情况；
- **registry 下载**：从 registry 仓库中下载压缩包（如果设置镜像，会从镜像服务器下载）
- **压缩包缓存**：npm5 开始，会对下载的压缩包进行主机本地缓存，减少重复下载。
- **安装**：将压缩包解压到项目的 node_modules 文件夹中。require 导入时会从 node_modules 中查找。

**流程：有 `package-lock.json`**

- **一致性检查**：检测 lock 中包版本是否和 package.json 中一致（会按照semver版本规范）
  - 不一致，重新构建依赖关系，放弃 lock，走顶层的流程； 
  - 一致，**本地查找缓存**：
    - 没有找到，从 registry 仓库下载，直接走顶层流程；
    - 查找到，获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中；



### 问题：其他包管理工具

**yarn**

由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具

- yarn 是为了弥补 npm 的一些缺陷而出现的；
- 早期的 npm 存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱、没有版本缓存等一系列问题。

**cnpm**

npm 的备胎。由于网络，从 https://registry.npmjs.org下载包卡顿，可以把镜像代理绑定到 cnpm 上。

解决方式：

```shell
# 查看当前的 npm 镜像：
npm config get registry

# 设置 npm 淘宝镜像：
npm config set registry https://registry.npm.taobao.org
```

如果不希望把 npm 镜像全局修改，防止淘宝镜像不稳定。

- 可以使用 cnpm，并且将 cnpm 设置为淘宝的镜像：

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org cnpm config get registry # https://r.npm.taobao.org/
```

**npx**

npx 是 npm5.2 之后自带的一个命令。

- npx 的作用非常多，但是比较常见的是使用它来调用项目中的某个模块的指令。
- 如果使用 `npx`，代替 `npm` 输入命令，它会到当前目录的 `node_modules/.bin` 目录下查找对应的命令； 

以 webpack 为例：全局安装的是 webpack5.1.3；项目安装的是 webpack3.6.0。

- 如果在终端执行 `webpack --version`，会通过环境变量里找，找到的是全局的 webpack 5.1.3。

解决方式：

- 方式一：在终端中使用如下命令（在项目根目录下）:`./node_modules/.bin/webpack --version`
- 方式二：修改 package.json 中的 scripts：`webpack": "webpack --version"`
- 方式三：使用npx：`npx webpack --version`



## 6. webpack 性能优化

1. 打包结果优化

2. 构建过程优化

3. Tree-Shaking



### 5.1 打包体积优化

webpack 自带的压缩方式

1. 安装 `npm install webpack-bundle-analyzer` 可视化 webpack 分析器，打包过程中会出现分析后的页面
2. 在 webpack.config.js 中，开头引入`const TerserPlugin = require('terser-webpack-plugin')`
3. 配置：

```js
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,   // 使用缓存，加快构建速度
      parallel： true,   // 开启多线程，提高打包速度
      terserOptions: {
      compress: {			// 	移除无用代码：断点、控制台输出等等
      unsed: true,
      drop_debugger: true, 
      drop_console: true,
      dead_code: true
    }
    }
    })]
  }
}
```



执行后，可以通过 `webpack-bundle-analyzer` 查看哪些文件体积大，然后针对性的优化。

![image-20220630213222846](images/webpack.assets/image-20220630213222846.png)



WebPack 5 自带。

内部本身就自带 js 压缩功能，他内置了 terser-webpack-plugin 插件，我们不用再下载安装。而且在 mode=“production” 的时候会自动开启 js 压缩功能。

> 如果你要在开发环境使用，就用下面：

```js
  // webpack.config.js中
  module.exports = {
     optimization: {
       usedExports: true, //只导出被使用的模块
       minimize : true // 启动压缩
     }
  }
```



### 5.2 打包速度优化

思路一，减少干活的量：从文件体积上减小。删掉体积大的，用不上的文件，不去打包，比如：

```js
module:{
  rules: [
    {
      exclude: /node_loader/,
    }
  ]
}
```

思路二，增加干活的人：采用多线程打包，可以根据cpu数量构建线程池，有两种常见的库：

- `HappyPack`

- `thread-loader`

思路三，提前干活：预编译一些不常变化的模块。

思路四，缓存：虽然时效性会差，但上次编译过的模块，如果没有修改，应该依然可用。

思路五，使用更好的库，比如：

- `fast-sass-loader`，快速的处理 sass 文件，比 `sass-loader` 速度更快。



### 5.3 Tree-Shaking

webpack 自带的优化方法，顾名思义，摇晃树把不好的树叶都晃下来，这里的实现原理是把文件中的无用代码全部消除。

- 作用：例如定义了一个 util，里面很多公用的方法，但是很多方法没有用到，那么在 dev 环境打包时候，输出文件中就可以看到很多没用到的方法声明，但是在 product 生产环境打包时候，输出文件中就没有这些方法，消除掉这部分没用的代码。





## 7. webpack 相关问题

### 问题：webpack 各文件的作用？

| 文件名                |                                                     |
| --------------------- | --------------------------------------------------- |
| `node_modules` 文件夹 | 项目引入的模块都放置在这里                          |
| `dist` 文件夹         | 打包成功后，文件会放置在这里                        |
| `dist/index.html`     | 打包后，html 入口文件                               |
| `dist/main.js`        | 打包后，js 文件                                     |
|                       |                                                     |
| `src` 文件夹          | 编写的代码文件都放置在这里                          |
| `src/App.jsx`         | React 包裹在最外层的组件                            |
| `src/index.jsx`       | React 接入 html 的入口文件                          |
| `src/index.html`      | html 入口文件                                       |
|                       |                                                     |
| `package.json`        | 默认的配置文件                                      |
| `package-lock.json`   |                                                     |
| `webpack.config.js`   | webpack 额外的配置文件，通常在这里调整 webpack 设置 |
| `.babelrc`            | 调整 babel 的设置文件                               |



### 问题：plugin 是什么

plugin 是节点纬度的操作。某一个事件节点，会触发特定的 plugin。

-   从机制上来说，plugin 基于 **事件监听** 实现。
    -   Webpack 运行的生命周期中会广播出许多事件（钩子），Plugin 可以 **监听事件**，在合适的时机通过 Webpack 提供的 API 改变输出结果。
-   从结果上来说，plugin 是一个 **扩展器 / 拦截器**。
    -   webpack 打包的是基于事件驱动的，plugin 通过监听 webpack 打包过程中的某些节点，从而通过 **回调函数** 执行各种任务。



### 问题：loader 是什么

loader 是文件纬度的操作。通过 loader 可以将各种格式的文件转化为浏览器可识别的格式。

它具有三个特点：文件加载器、一个函数、单一职责。

-   它是 **文件加载器**。它能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等。
-   它只是 **一个函数**，是一个封装的 JavaScript 模块。它接收其他代码，然后返回将其转化后的结果，并且一个文件还可以链式的经过多个 `loader` 转化（如 ` scss-loader => css-loader => style-loader` ）。
    -   函数的柯里化。
-   一个 `Loader` 的 **职责是单一**，只需要完成一种转化。如果一个源文件需要经历多步转化才能正常使用，就通过多个 `Loader` 去转化。



### 问题：loader 和 plugin

loader 是文件维度的操作，将 Webpack 不认识的、多种多样的格式内容转化为认识的、低版本的内容。

- 比如使用 babel 把所有的 js 文件都进行转化，`babel-loader`
- CSS 相关的引入：`css-loader`、`sass-loader`、`sass-loader`
  - `style-loader` 把 CSS 代码注⼊到 JavaScript 中，DOM 操作，动态添加 `style` 标签的方式，引入样式到节点。
  - `postcss `、`postcss-loader`、`postcss-preset-env` 自动添加CSS3属性前缀
- 导入图片和使用地址：`url-loader`、`file-loader`
- 解析文件：`vue-loader`、`ts-loader`、`markdown-loader`、`raw-loader`、`svg-sprite-loader`。
- `eslint-loader`：通过 ESLint 检查 JavaScript 代码。



plugin 是节点维度的操作，基于事件监听。比如 `index.html` 所谓入口文件，需要引入全部的 js  库等等。插件（Plugin）可以贯穿 Webpack 打包的生命周期，执行不同的任务

- 使用 `copy-webpack-plugin`，将已经存在的单个文件或整个目录复制到本项目的构建目录。
- 使用 `html-webpack-plugin`，把打包好的 js 和 css 文件自动引入 HTML 入口中。
- 使用 `clean-webpack-plugin`，在每次打包前，清空上次打包遗留的历史文件。
- 使用 `mini-css-extract-plugin`，将 CSS 单独提取，为每个 JS 文件创建一个对应的 CSS 文件。
- 使用 `webpack.HotModuleReplacementPlugin`，HMR 模块热替换插件。部分修改，无需重新加载页面。
- 使用 `webpack-bundle-analyzer`，可视化查看各打包 bundle 文件体积，



### 问题：Webpack 是什么？

一个现代 JavaScript 应用程序的静态模块打包器

1. 默认：只对 js 进行处理，其他类型文件	需要配置 loader 或者插件进行处理。
2. 打包：将各个依赖文件进行梳理打包，形成一个 JS 依赖文件。



从历史看来，前端正在经历蓬勃发展：

- 更方便的实现 html，出现 jsx
- 更好用的实现 css，出现 sass less
- 更好的模块化开发，出现 AMD，commonJs，ES6
- 把各种新方案应用到支持较旧的浏览器中，出现 babel
- 因为文件格式越来越多样，转化方式越来越多，出现了对打包方式、打包速度等优化的需求。
- Webpack 应运而生，是一个模块打包的解决方案，也是一个融合前端新技术的平台；

只要在 Webpack 中简单配置，就可以使用 jsx、TypeScript、babel 等各种各样的功能，所以，Webpack 是：

- 是前端发展的产物：
- 模块化打包方案；
- 工程化方案。



### 问题：Webpack hash 作用

在`webpack`中有三种`hash`可以配置，分别是`hash`、`chunkhash`、`contenthash`。

- hash：项目级。整个项目，打包一次，改变一次 hash。所有文件 hash 值相同。
- chunkhash：依赖代码块。从入口 entry 出发，到它的依赖，以及依赖的依赖，依赖的依赖的依赖，等等，一直下去，所打包构成的代码块 (模块的集合) 叫做一个chunk，也就是说，入口文件和它的依赖的模块构成的一个代码块，被称为一个chunk。 所以，一个入口对应一个chunk，多个入口，就会产生多个chunk 所以，单入口文件，打包后 chunkhash 和 hash 值是不同的，但是效果是一样的。
- contenthash：只跟内容有关系，内容不变，哈希值不变。



### 问题：webpack 构建流程

- **初始化参数**：解析 webpack 配置参数，合并用户输入 shell 和 webpack.config.js 文件配置的参数，形成最后的配置结果；
- **开始编译**：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件监听webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译；
- **确定入口**：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去；
- **编译模块**：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过编译。
- **完成模块编译并输出**：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk;
- **输出完成**：输出所有的 chunk 到指定的文件目录；



### 问题：热更新原理

webpack 自己 **开启了express应用**。添加了对 webpack 编译的监听，建立和浏览器的websocket 长连接。

- 当文件变化，触发 webpack 进行编译并完成后，通过 sokcet 消息告诉浏览器准备刷新。
- 为了减少刷新的代价，就是 **不用刷新网页**，而是 **刷新某个模块*。

webpack-dev-server 支持热更新，通过文件的 hash 值比对，找到需要更新的模块，浏览器再进行热替换。



### 问题：webpack 优化前端性能

⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。

- **压缩代码**：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css
- **利⽤CDN加速**: 在构建过程中，将引⽤的静态资源路径修改为 CDN 上对应的路径。可以利⽤ webpack 对于 output 参数和各 loader 的 publicPath 参数来修改资源路径。
- **Tree Shaking**: 将代码中永远不会执行的⽚段删除掉。可以通过在启动 webpack 时追加参数 --optimize-minimize 来实现。
- **Code Splitting**：懒加载。将代码按路由维度或者组件分块(chunk)，做到按需加载，同时可以充分利⽤浏览器缓存
- **提取公共第三⽅库**： SplitChunksPlugin 插件来进⾏公共模块抽取，利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码。



### 问题：版本依赖规范

npm 的包通常需要遵从 semver 版本规范： 

- semver：https://semver.org/lang/zh-CN/ 
- npm semver：https://docs.npmjs.com/misc/semver

semver 版本规范是 `X.Y.Z`： 

- X 主版本号（major）：新版本可能存在不兼容的 API 修改。
- Y 次版本号（minor）：新版本新功能增加，但是兼容之前的版本。
- Z 修订号（patch）：新版本没有新功能，修复了之前版本的 bug。

语义化版本：

在 `dependencies` 和 `devDependencies`  中的依赖，可以使用语义化版本号。重新安装依赖 `npm install` 后，会实现自动更新小版本或中版本，在不该动大版本的情况下，不需要用户手动修改版本号，就可以尽可能的使最新的版本。**通常 `package.json` 中的版本会添加一个 `^`。**

- `^version`：会自动更新中版本和小版本；
  - `^1.0.1`  ==> `1.x.x`
- `~version`：会自动更新小版本；
  - `~1.0.1` ===> `1.0.x`
- `version`：不更新，只安装规定的版本。

注意： `package-lock.json` 会锁定版本，**优先级比 `package.json` 更高**。



### 问题：package-lock.json

`package-lock.json` 的内容：

- 通常 package-lock.json 的内容会比 package.json 多很多。这是因为 package-lock.json 里是会保存项目所有的依赖 (包括依赖的依赖) 的版本，下载地址等所以往往还会有一个树型的结构。

**修改：**

- 如果改了 package.json，且 package.json 和 lock 文件不同，那么执行 `npm i` 时 npm 会根据 package 中的版本号以及语义含义去下载最新的包，并更新至 `lock.json`。
- 所以，package.json 和 lock 文件不同的条件下，会进行更新；如果两个文件没有冲突的时候就不会有更新产生。

最后：

- 使用 `npm ci` 安装依赖包，会严格按照 lock 文件去下载；
- 使用 `npm i` 安装依赖包，会按照 package 去下载，如果有更新发生，会更新 lock 文件。


---
title: HTML
sidebar_position: 0.5
slug: /frontEnd/HTML&CSS
date: 2022-01-01
tags: [HTML]
---

# 0 引言

这里是基本要了解的内容，但不是要一次性全部记忆。

整理完这个，再整理一个精简版的，目的是要当下全部背下来，提升整体认知即可。

表单类标签和表格类标签用的会非常的少。

#### 整理属性：全局属性、全局事件

#### 一些基础概念：渐进增强



# 1 概述

## 1.1 HTML

### 1 HTML的定义

HTML(HyperText Markup Language) 不是一门编程语言，是一个**标记语言**。用来告知浏览器如何组织页面。HTML 由一系列的**元素**（elements）组成，每个元素包围不同部分的内容。



### 2 HTML 的结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>HTML Document</title>
  </head>
  <body>
    <p>Pages....</p>
  </body>
</html>
```

注意这里面的顺序， utf-8 编码排在第一，后面紧接着是 title。

-   根元素：`<html></html>`。包裹了整个完整的11页面。
    -   其中，`lang` 属性确定了文档的主语言。
-   头元素：`<head></head>`。包裹了能在 HTML 页面中，但不在页面中显示出内容的东西。
-   ut-8字符集编码：`<meta charset="utf-8">`，设置文档使用utf-8字符集编码，是目前最常用的字符集编码之一。
-   标题元素：`<title></title>`
-   body元素：包含页面内所有显示在页面上的内容、文本、图片、音视频。



### 3 常用的特殊字符

| 原义字符 | 等价字符引用 |
| :------- | :----------- |
| <        | `&lt`        |
| >        | `&gt`        |
| "        | `&quot`      |
| '        | `&apos`      |
| &        | `&amp`       |



## 1.2 HTML 元素

以下为 MDN 中的解释图片：

![element](images/%E6%9C%AA%E5%91%BD%E5%90%8D.assets/element.png)

通常，一个基本的元素，是由：开始标签、结束标签、内容组成。



### 元素的属性

元素在开始标签中，可以添加属性。用来给元素指定一些更多的特性。

![attribute](images/%E6%9C%AA%E5%91%BD%E5%90%8D.assets/attribute.png)



属性由：属性名、等于号、两个引号、属性值构成。

-   布尔属性。有些属性没有属性值，`<input type="text" disabled />`，该属性就是布尔属性，没有属性值默认为`true`。



# 2 HTML 标签的分类

以下只展示了常见的 HTML 标签，少见 / 不推荐使用的标签没有列入其中。



### 1 内联元素 inline element

内联元素。在页面中，某个内联元素依不会在页面新一行呈现，而是继续按照原来的文档流顺次排下来。

-   img：图片
-   a、br、span、bdo：锚点、换行、行内元素、文字顺序
-   abbr、b、i、s、u：缩写、(粗) 关键字、(斜) 变调、(删除线) 错误内容、(下划线) 避免歧义；
-   em、strong、dfn、mark：(斜体) 强调、(粗体) 更强调、(斜体) 术语、黄色高亮、
-   q、cite：短引用、作品名引用；
-   kbd、code、samp、var：(等宽) 键盘输入、(等宽) 代码相关：源代码、预处理、变量；
-   input、select、textarea、label：输入、下拉列表、多行文本输入、标注 (绑定在 input 等，成为触发区)
-   sub、sup：下标、上标。



### 2 块级元素 block element

块级元素。在页面中，块级元素以块的形式展现。它会出现在页面的新一行，以独立于前面/后面内容而展现。

-   div、main、section、article、aside、header、footer、nav：块盒 + 语义类元素
-   p、h1 to h6、hr、blockquote：段、标题、水平分割线、长引用
-   address、pre：联系信息、预格式化文本 (源代码)；
-   dl、ul、ol、table：列表容器、无序列表、有序列表、表格：
-   form、fieldset：表单、表单分组
-   menu、noscript：菜单、不支持JavaScript则显示



### 3 替换型元素

把文件的内容引入，替换掉自身位置的一类标签。凡是替换型元素，都是使用 `src` 属性来引用文件的。研究替换型元素，是为了解决渲染后重排版问题。这个在后面的 CSS 或 浏览器工作原理中进一步讲解。

可替换元素一共有：

-   script、img、picture、audio、video、iframe



#### 为什么有的属性是 `href` 指向 URL，有的是 `src`？

从：是否为替换型元素分析。替换型元素是 src 属性。最终 URL 传递过来的值会替换掉该元素的位置。而非替换元素 `href` 不会有替换行为。

易混淆的非替换型元素：

-    `<a>` 标签不是替换型元素，它的属性是 `href`。
-    `<style>` 标签不是替换型元素，它使用 link 引入，也是用 `href`属性。



#### script

既是替换型（引入代码），又是非替换型（内联代码）；



#### img

一个技巧，使用 Data URL。好处是：当图片体积小的时候，加载该图片不会作为一个文件，而占用一次 HTTP 会话。Data URL 直接把图片的 “源代码” （正确的说，是base64字符串格式）放到了 HTML 中，而不是一个地址。

```html
 <img src='data:image/svg+xml;charset=utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/></svg>'/>
```



#### iframe

现在不推荐使用。在移动端有无法正确平铺展开的问题，也容易被黑客进行 CSS 攻击。



#### picture

图片容器，利用 `<source>` + `<img>`，可以为 img 引入多个不同格式、不同尺寸的源。以提高浏览器或设备的兼容性。

-   `<source>` 利用标签，可以为媒体资源（img、video、audio）引入不同格式和尺寸的源。一个源对应一个 source 标签。



### 4 HTML5 新增元素：

1.   所有语义类标签：通常所说的新增元素，主要就是语义类元素。具体标签见下面的分类。
2.   `<figure>`、`<figcaption>`：独立流（图片、音/视频）；
3.   `<output>` 绑定元素后浏览器输出；
4.   `<svg>`、`<canvas>`、`<audio>`、`<video>`、`<embed>`



### 5 语义类标签

-   main、header、footer、aside、article、nav、section：唯一主体、页眉、页脚、侧栏、文章、目录、节
-   hgroup、h1 to h6：标题组、标题
-   abbr、em、strong、dfn、address：缩写、强调、更强调、（斜体）定义/术语、联系地址
-   blockquote、q、cite：长的块引用、短的行内引用、作品名/书名引用
-   figure、figcaption：（照片、音/视频）包裹容器、容器内的标题
-   pre、samp、code：预排版内容、程序示例输出、代码
-   time、sub、sup：时间、上标、下标

-   列表相关：ul、ol、li、dl、dt、dd



### 6 链接 / 资源

-   a、link、area：（area + map 用在一张图片中部分区域需要做跳转时的情况）
-   script、noscript、embed、object



### 7 结构类标签

列表相关：

-   ul、ol、li：无序、有序、具体项目
-   dl、dt、dd：列表容器、项目标题、项目描述

表格相关：

-   table、caption、tr、th、td：容器、标题、行、列-表头单元格、列-标准单元格
-   col、colgroup：批量定义列属性值、分祖后再定义列属性值

媒体资源：

-   容器：figure、figcaption：（照片、音/视频）包裹容器、容器内的标题
-   图像：img、svg、canvas：**区分**
-   音/视频：audio、video、source：音频、视频、容器（存放一个资源的多个版本）



### 8 输入类标签

1.   容器：form、fieldset、legend：表单容器、表单内分组容器、分组容器的标题
2.   通用：input、output、label：用户输入、浏览器输出、输入标注（点击label也会触发绑定的元素）
     -   `<input type="???">`：button、checkbox、file、hidden、password、image、radio、reset、submit、text。
3.   输入：textarea 多行输入；
4.   选择：select、datalist、option、optgroup、label：下拉列表、可输入的下拉列表、具体项目、项目分组、项目分组的标题。
5.   按钮：button（type：button、reset、submit 按钮、重置、提交）；



### 9 空元素

（Empty elements / Void elements）不是所有的元素都有开始和结束标签。有些元素只有一个标签，在这个元素位置上，浏览器会嵌入一些额外的内容。

`<area>`、`<base>`、`<br>`、`<col>`、`<colgroup> `、`<command>`、`<embed>`、`<hr>`、`<img>`、`<input>`、`<keygen>`、`<link>`、`<meta>`、`<param>`、`<source>`、`<track>`、`<wbr>`



### 10 元信息标签

有四个：head、title、meta、base



元信息：是指描述自身的信息。绝大多数情况下，元信息是给浏览器、搜索引擎等机器阅读的。有时这些信息会在页面之外显示给用户，有时候则不会。

元信息类标签：就是 HTML 用于描述文档自身的一类标签。它们通常出现在 head 标签中，一般都不会在页面被显示出来。

-   语义类标签：描述业务内容的标签。



常见的元信息类标签有：

-   head 标签：元信息的容器；
-   title 标签：文档的标题；
-   base 标签：页面的基准URL（历史）；
-   meta 标签：元信息通用标签。



#### 1 head 标签

head 标签本身不携带任何信息，而是作为一个存放其他宇异类标签的容器。

HTML 规定，

1.   head 标签必须是 `<html>` 根标签中第一个标签；
2.   head 标签的内容必须有一个 title 标签，当文档是 iframe 可以不包含；
3.   head标签最多只能包含一个 base 标签。



#### 2 title 标签

title 作为元信息，会被浏览器展示在收藏夹、微信推送卡片、微博转发标题等应用场景。是一个可以完整概括整个网页内容的信息。



#### 3 base 标签

历史遗留标签。它的作用是给页面上所有的 URL 相对地址提供一个基础。

base 标签最多只有一个，它改变全局的链接地址，是一个非常危险的标签。很容易造成跟 JavaScript 的配合问题，所以在实际开发中，很	少使用，常用 JavaScript 实现相同的功能。



#### 4 meta 标签

不能由HTML元相关元素表示的其他元数据信息，都通过 `<meta>`元素引入到 HTML 网页中。

head 中，可以出现任意多个 meta 标签。通常用一组键值对（name、content属性），来表达信息。是一种通用的元信息表示标签。

-   引申：元相关（meta-related）元素：`<base>`、`<link>`、`<script>`、`<style>`、`<title>`；



##### 4.1 meta 标签的常见作用：

1.   声明文档的字符编码（`charset`）；
2.   添加页面作者和内容概述，以便搜索引擎可以在搜索页面介绍该网页（`name, content`）。
3.   声明自动化行为（众多，下文**拓展**有列举）。



##### 4.2 属性：

- `name` ：指定 meta 元素的类型，说明该元素包含了什么类型的信息。

- `content`：元数据内容。name 和 content 实际上是一个 K/V 对。

  利用 meta 元素的 name 和 content 属性，可以给页面添加作者信息和页面内容概述：

  ```html
  <meta name="author" content="Chris Mills">
  <meta name="description" content="The MDN Learning Area aims to provide
  complete beginners to the Web with all they need to know to get
  started with developing web sites and applications.">
  ```

- `charset`：声明文档的字符编码。`<meta charset="utf-8">` 。简化了书写，不再需要 name 和 content。

- `http-equiv`：表示执行一个命令，此时 meta 标签可以不需要 name 属性。



##### 4.3 name 为 viewport 的 mate

```html
<meta name="viewport" content="width=500, initial-scale=1">
```

name 为 viewport 的 mate，其 content 中也包括了一系列的键值对，用逗号分隔。

这些键值对可以指定如下属性：

-   width：页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
-   height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。
-   initial-scale：初始缩放比例。
-   minimum-scale：最小缩放比例。
-   maximum-scale：最大缩放比例。
-   user-scalable：是否允许用户缩放。



常用于禁止移动端用户的缩放功能，提高网页整体结构：

```html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
```



##### 4.4 拓展：关于 meta 其他功能

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 默认使用最新浏览器 -->
<meta http-equiv="Cache-Control" content="no-siteapp">
<!-- 不被网页(加速)转码 -->
<meta name="robots" content="index,follow">
<!-- 搜索引擎抓取 -->
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<!-- 设置苹果工具栏颜色 -->
```

1.   Open Graph 标签组，包括 title, type, URL, site_name, description, image，为 Facebook 分享提供信息；
2.   Twitter 标签组，包括 card, title, description, image，为 Twitter 分享提供信息；
3.   msapplication 标签组，包括 TileColor, TileImage，为 Windows 8 以及以上系统识别 favicons 用的。



#### 5 引申：link

常见作用：

1.   添加 favicon 图标：`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
2.   添加 CSS ：`<link rel="stylesheet" href="my-css-file.css">`



# 3 HTML 标签列表

## 1 基础

| 标签             | 基本使用                                       | 常用属性     | 语义化 |
| ---------------- | ---------------------------------------------- | ------------ | ------ |
| `<!DOCTYPE>`     | 文档类型                                       | lang="zh-CN" |        |
| `<html>`         | HTML 文档                                      |              |        |
| `<head>`         | 关于文档的信息，<br />内容不会出现在 HTML 页面 |              |        |
| `<title>`        | 文档的标题                                     |              |        |
| `<body>`         | 文档的主体                                     |              |        |
| `<h1> `to `<h6>` | HTML 标题                                      |              | ✅      |
| `<p>`            | 段落                                           |              |        |
| `<br>`           | 折行                                           |              |        |
| `<hr>`           | 水平线                                         |              |        |
| `<!--...-->`     | 注释                                           |              |        |



## 2 格式化

| 标签                 | 基本使用                                                     | 常用属性                                                     | 语义化 |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| `<abbr>`             | 缩写、简称                                                   | title：缩写原本的正式形式                                    | ✅      |
| `<address>`          | 文档作者或拥有者的联系信息                                   | /                                                            | ✅      |
| `<bdo>`<br />`<bdi>` | 文字的左右方向                                               | dir：ltr (从左向右输出)；rtl (从右向左输出)；                | ✅      |
| `<em>`               | 斜体文本 - 强调文本                                          |                                                              | ✅      |
| `<strong>`           | 粗体文本 - 更强调文本                                        |                                                              | ✅      |
| `<dfn>`              | 斜体文本 - 定义或术语                                        |                                                              | ✅      |
| `<del>`              | 被删除文本，有一条上下居中的删除线。<br />常于 ins 配合一起使用。 | cite：URL，通常那儿有删除原因。<br />datetime：YYYYMMDD 删除日期和时间。 | ✅      |
| `<ins>`              | 新插入文本，有一条在底部的下划线。<br />常于 del 配合一起使用。 | cite：URL，通常那儿有插入原因。<br />datetime：YYYYMMDD 插入日期和时间。 | ✅      |
| `<mark>`             | 有记号的文本，有一个黄色的高亮底色                           |                                                              | ✅      |
| `<kbd>`              | 等宽字体 - 键盘文本                                          |                                                              | ✅      |
| `<code>`             | 等宽字体 - 计算机代码文本                                    |                                                              | ✅      |
| `<samp>`             | 程序示例输出                                                 |                                                              |        |
| `<var>`              | 变量，配合 code 标签使用。                                   |                                                              | ✅      |
| `<pre>`              | 预格式化文本，常放置源代码。                                 |                                                              | ✅      |
| `<cite>`             | 引用作品名，书籍或杂志的标题。                               |                                                              | ✅      |
| `<blockquote>`       | 长引用，一个引用段落                                         | cite：引用来源                                               | ✅      |
| `<q>`                | 短引用，一个行内引用，通常浏览器会添加引号。                 | cite：引用来源                                               | ✅      |
| `<meter>`            | 一个有范围的度量条，一个尺度                                 | 可以指定：受控表单、范围的大小、值的大小、度量粒度、当前值。 | ✅      |
| `<progress>`         | 一个有范围的进度条                                           | max：总任务量，value：目前已完成                             | ✅      |
| `<sup>`              | 上标文本，常在公式中用到，常配合 a 做超链接角注。            |                                                              | ✅      |
| `<sub>`              | 下标文本，常在公式中用到                                     |                                                              | ✅      |
| `<template>`         | 是一个容器。里面放置页面加载时，对用户隐藏的 HTML 内容。利用 Js 稍后呈现。 |                                                              | ✅      |
| `<time>`             | 日期 / 时间，浏览器均没有支持。                              |                                                              | ✅      |
| `<wbr>`              | 一个换行时机。单词太长，可以用此方法提示浏览器此处可以换行。 |                                                              | ✅      |
| `<small>`            | HTML5 重定义：补充评论                                       |                                                              | ✅      |
| `<s>`                | HTML5 重定义：错误内容，电商打折前价格                       |                                                              | ✅      |
| `<u>`                | HTML5 重定义：避免歧义标记                                   |                                                              | ✅      |
| `<i>`                | 斜体，HTML5 重定义：读音变调                                 |                                                              | ✅      |
| `<b>`                | 粗体，HTML5 重定义：关键字                                   |                                                              | ✅      |

HTML 5 中已 **不支持** / **非常不赞成** 的标签：

`<font>`、`<center>`、`<acronym>`、`<big>`、`<strike>`、`<tt>`、`<u>`



ruby 相关：

`<rp>`： 若浏览器不支持 ruby 元素显示的内容。

`<rt>`：ruby 注释的解释。

`<ruby>`：ruby 注释。



## 3 样式和语义

| 标签        | 基本使用                                                     | 常用属性                   | 语义化 |
| ----------- | ------------------------------------------------------------ | -------------------------- | ------ |
| `<style>`   | 文档的 CSS 样式信息。                                        | type="text/css" 唯一且必须 |        |
| `<div>`     | 块级元素                                                     |                            |        |
| `<span>`    | 行内元素                                                     |                            |        |
| `<main>`    | 唯一。文档的主要内容，里面放置各种 article 文章。<br />不可以是：`<article>`、`<aside>`、`<footer>`、`<header>` 或 `<nav>` 的后代。 |                            | ✅      |
| `<section>` | 文章中的节                                                   |                            | ✅      |
| `<article>` | 一篇文章                                                     |                            | ✅      |
| `<aside>`   | 文章的侧栏                                                   |                            | ✅      |
| `<header>`  | section 或 page 的页眉。<br />主要是介绍类信息               |                            | ✅      |
| `<footer>`  | section 或 page 的页脚。<br />文档的作者、版权信息、使用条款链接、联系信息等 |                            | ✅      |
| `<nav>`     | 一个导航条，包裹了多个 a 标签                                |                            | ✅      |
| `<details>` | 某节的细节，会折叠起来，用户点击后展开。<br />折叠后，只显示 summary 标题；展开后，才显示其余内容。 |                            | ✅      |
| `<summary>` | 为 `<details>` 元素可见的标题。                              |                            | ✅      |
| `<dialog>`  | 对话框或窗口。浏览器支持度低。                               |                            | ✅      |
| `<data>`    | 添加给定内容的机器可读翻译。浏览器支持度低。                 | value 值为机器可读的翻译。 | ✅      |

结构化的目的：

1.   突出文章内容主次。提升用户阅读体验；
2.   为搜索引擎展示页面基本信息提供方便，标题、基本概述等等。
3.   为视力障碍者提供方便的屏幕阅读器。可以展示文档的基本内容。



## 4 表单和输入

| 标签         | 基本使用                                                     | 常用属性                                                     |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `<form>`     | 供用户输入的 HTML 表单，向服务器传输数据。<br />表单可以包含 input 、menus、textarea、fieldset、legend、label等元素。 | name：表单名<br />action 发送表单数据的地址；<br />method：get/post 下文详细讲述。<br /><br />rel：资源和文档之间的关系<br />target：打开URL的框架，下文有。<br />autocomplete：自动发送 novalidate：表单提交时不验证； |
| `<input>`    | 输入控件                                                     | type、name、value、readonly、disabled、size、maxlength、max、min、placeholder、autocomplete、autofocus、checked、required、height、width |
| `<textarea>` | 多行的文本输入控件                                           | name、placeholder、readonly、autofocus、cols / rows、disabled、maxlength |
| `<button>`   | 按钮                                                         | type：button 按钮、reset 重置（清除表单数据）、submit 提交<br />name、value、autofocus、disabled |
| `<select>`   | 选择列表（下拉列表）                                         | name、required、disabled、autofocus、<br />size：下拉列表的可见数目；<br />multiple：可选择多个选项。 |
| `<datalist>` | 带输入框的下拉列表。<br />与 input 元素配合提交。            |                                                              |
| `<option>`   | 选择列表中的选项，被 select 包裹                             | disabled、selected 默认选中的选项、value 传递给服务器的值。  |
| `<optgroup>` | 下拉列表中分类、进行分组                                     | label：分组的标题<br />disabled：禁止选择该组                |
| `<label>`    | 输入元素的标注，当点击 label 元素时，也会触发 该元素。       | for：绑定的 from 元素（input、button等）                     |
| `<fieldset>` | 将表单内的相关元素分组。<br />当一组表单元素放到 `<fieldset>` 标签内时，浏览器会以特殊方式来显示(特殊的边界、3D 效果等）。 | disabled、value：fieldset的名称                              |
| `<legend>`   | fieldset 元素的标题                                          |                                                              |
| `<output>`   | 浏览器的输出                                                 | for：输出域的 n 个元素，空格隔开。<br />from：该元素所属的 n 个表单。<br />name：唯一，提交时的 key。 |



#### from 标签

method 属性：规定如何发送表单数据。有两种值：get / post

-   get：安全性低，把参数数据附加到提交表单的 URL 中，传递给服务器。在 URL 中用户可以看到数据。
-   post：安全性高，通过 HTTP post 机制，将表单内容放在 HTML 头部结构中，提交到 URL。对用户透明。

另：在 HTTP 中，get、post、put、delete 对应着资源的查、改、增、删 4 个操作。



target 属性：规定如何打开指定的 URL 地址。

-   `_blank`：在新窗口中打开。
-   `_self`：默认。在当前框架中打开。
-   `_parent`：在父框架集中打开。清除父框架中的所有子框架。
-   `_top`：在整个窗口中打开。目标将会清除所有框架并将文档载入整个浏览器窗口。
-   framename：在指定的框架名内打开。



表单中的控件有两个属性是非常重要的：name 和 value 属性。

作为一个键值对，这两个属性的数值最终会提交到 action 所定义的 URL 进行处理。



#### input 标签

常用属性：

type：input 元素的类型 `button、checkbox、file、hidden、password、image、radio、reset、submit、text`

name：input 元素的名称，作为 `key` 传到指定地址中。

value：input 元素的值，作为 `value` 传到指定地址中。

placeholder：预先在输入框中显示提示文字。

checked：值为 `checked`，页面加载时预先被选定的元素。比如，自动给一个 checkbox 先打上勾。

required：该字段必须输入。

readonly：输入字符为只读，用户不可更改（JavaScript可操作），可选中、可复制。

disabled：禁用此元素，用户不可选中（JavaScript可操作），不可复制。

size：输入字段框的宽度。

maxlength：输入字段中的字符的最大长度。

max / min：输入字段的最大 / 最小值，数字或日期。两个属性常配合使用。

autocomplete：输入字段的能否自动填写（历史记录中保存），默认 `on`，禁用 `off`。

autofocus：自动聚焦。

height：定义 input 字段的高度。（适用于 type="image"）

width：定义 input 字段的宽度。（适用于 type="image"）

src：提交按钮显示的图像的 URL。（适用于 type="image"）



## 5 框架

| 标签       | 基本使用         | 常用属性 |
| ---------- | ---------------- | -------- |
| `<iframe>` | 创建一个内联框架 |          |

HTML 5 中已 **不支持** / **非常不赞成** 的标签：`<frame>`、`<frameset>`、`<noframes>`

事实上，`<iframe>` 目前也很少用到

`<iframe>` 常用属性：

-   height/width：框架的宽高；

-   src：在框架中显示的文档的 URL；
-   name：唯一，框架名称；
-   sandbox：对框架增添额外限制。
    -   ""：应用以下所有的限制。
    -   allow-same-origin：允许 iframe 内容被视为与包含文档有相同的来源。
    -   allow-top-navigation：允许 iframe 内容从包含文档导航（加载）内容。
    -   allow-forms：允许表单提交。
    -   allow-scripts：允许脚本执行。
-   scrolling：`yes, no, auto` 是否显示滚动条。
-   srcdoc：框架中显示的 HTML 页面内容，在此直接传入 HTML 代码。



## 6 图像/音频/视频

| 标签           | 基本使用                                                     | 常用属性                                                     |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `<img>`        | 插入图像                                                     | alt：图像的替代文本；<br />src：显示图像的URL；<br />height/width：图像尺寸；<br />srcset、sizes 多个图像源和尺寸匹配 |
| `<picture>`    | 容器，放入 source + img 可以提供不同的图片源                 | srcset、media 图片的源 、尺寸                                |
| `<canvas>`     | 矢量图形。<br />引申：区分 cavas、SVG                        | height/width：图像尺寸；                                     |
| `<svg>`        | SVG 图形的容器                                               |                                                              |
| `<figure>`     | 一个包裹容器。把媒体（图片、图表）和它的解释内容（标题、注释）放在一块儿。 |                                                              |
| `<figcaption>` | figure 独立流中的标题                                        |                                                              |
| `<audio>`      | 插入声音内容                                                 | autoplay 加载后自动播放；<br />controls 显示控件；<br />loop：自动循环；<br />muted：静音播放；<br />preload：页面加载时加载音频，不播放。autoplay设置后忽略该属性。<br />src：播放的音频 URL。 |
| `<video>`      | 视频                                                         | 与 audio 相比，多了：<br />height /width：播放器的尺寸；     |
| `<source>`     | 媒介源，同一个资源的不同格式，可以排放在 source 中，以提高兼容性。 | media 资源类型；<br />src 资源的 URL；<br />type：资源的 MIME 类型。 |

-   浏览器兼容性差：`<track>` ，video 中的文本轨道。

## 7 链接

| 标签       | 基本使用                                                     | 常用属性                                                     |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `<a>`      | 锚。<br />可以是超链接，也可以是本页锚点                     | type：文档的MIME类型；<br />target：何处打开链接文档（`_blank`, ` _parent`, `_self`, `_top`, `framename`）；<br />href：指向的 URL；<br />rel：链接文档与当前文档的关系；<br />download：URL，为一个下载链接； |
| `<link>`   | 常用于链接外部 CSS 样式表、icon等，功能非常多。<br />只存在于 head 标签。 | rel="stylesheet" 关系：CSS 样式表<br />type="text/css"  类型：CSS 样式表<br />href：URL |
| `<map>`    | 带有可点击区域的图像映射，配合 area 标签一起使用。           | 注：area + map 用在一张图片中部分区域需要做跳转时的情况。    |
| *`<area>`* | 定义图像映射中的区域。多个 area 嵌套在一个父 map 标签中。    | 必须和 map + img 一起使用。                                  |



## 8 列表

| 标签   | 基本使用                               | 常用属性                                            | 语义化 |
| ------ | -------------------------------------- | --------------------------------------------------- | ------ |
| `<ul>` | 无序列表                               |                                                     | ✅      |
| `<ol>` | 有序列表                               | start：初始数字；<br />type：1，A，a，I，i 标记类型 | ✅      |
| `<li>` | 列表的项目                             |                                                     | ✅      |
| `<dl>` | 列表容器，包裹 dt、dd                  |                                                     | ✅      |
| `<dt>` | 列表中的项目，相当于 title             |                                                     | ✅      |
| `<dd>` | 列表中项目的描述，相当于 describe 正文 |                                                     | ✅      |

HTML 5 中已 **不支持** / **非常不赞成** 的标签：`<dir>`

浏览器 **兼容性差** 的标签：`<menu>`、`<menuitem>`、`<command>`



## 9 表格

| 标签         | 基本使用                           | 常用属性                                                     |
| ------------ | ---------------------------------- | ------------------------------------------------------------ |
| `<table>`    | 表格容器                           | width、border、剩下都不常用<br />cellpadding、cellspacing、frame、rules |
| `<caption>`  | 表格标题                           |                                                              |
| `<tr>`       | 表格中的行                         | align：左右对齐方式<br />valign：上下对齐方式                |
| `<th>`       | 列，表头单元格，包裹在第一对 tr 中 | align、valign、colspan（跨列数）                             |
| `<td>`       | 列，标准单元格，包裹在其余的 tr 中 | align、valign、colspan（跨列数）                             |
| `<col>`      | 可定义表格中一个或多个列的属性值   | align、valign、width、span（跨列数）                         |
| `<colgroup>` | 表格中供格式化的列组               | align、valign、width、span（跨列数）                         |

一个表格的常见结构：

```html
<table class="一个表格" width="100%" border="1">
  <tr class="表头第一行">
    <th class="表头1">姓名</th>
    <th class="表头2">年龄</th>
    <th class="表头3" colspan="2">基本信息</th>
  </tr>
  <tr>
    <td>Moxy</td>
    <td>10</td>
    <td>5年级</td>
    <td>3班</td>
  </tr>
  <tr>
    <td>Ninjee</td>
    <td>11</td>
    <td>6年级</td>
    <td>1班</td>
  </tr>
</table>
```

 ![截屏2021-07-28 上午10.48.02](images/%E6%9C%AA%E5%91%BD%E5%90%8D.assets/%E6%88%AA%E5%B1%8F2021-07-28%20%E4%B8%8A%E5%8D%8810.48.02.png)



**不常用** 的标签：`<thead>`、`<tfoot>`、`<tbody>`

他们分别是：表头内容区、脚注内容区、主体内容区。严格按照该次序，包裹在同一个 table 中（位置相当于 tr）



`<table>` 的常用属性：

-   cellpadding：每一个单元格内，content 内容和边沿之间的空白。
-   cellspacing：每一个单元格之间的空白。
-   frame：外侧边框的可见性（比如做成类似物理的 “开表”，两侧外边框隐藏）
-   rules：内侧边框的可见性（比如让内侧边框都不可见）
-   border：表边框的宽度
-   width：表的宽度



`<tr>` 的常用属性：

align：左右对齐方式。left （默认）、right、center、justify （宽度伸展至单元格尺寸）；

valign：上下对齐方式。middle（默认）、top、bottom、baseline（基线对齐）。



## 10 元信息

| 标签      | 基本使用                           | 常用属性                  |
| --------- | ---------------------------------- | ------------------------- |
| `<head>`  | 关于文档的信息                     |                           |
| `<title>` | 关于文档的标题                     |                           |
| `<meta>`  | 关于 HTML 文档的元信息             | content、name、http-equiv |
| `<base>`  | 页面中所有链接的默认地址或默认目标 | href（基准 URL）、target  |

HTML 5 中已 **不支持** / **非常不赞成** 的标签：`<basefont>`



## 11 编程

| 标签         | 基本使用                             | 常用属性                                                     |
| ------------ | ------------------------------------ | ------------------------------------------------------------ |
| `<script>`   | 客户端脚本                           | 必选：type="text/javascript"<br />可选：<br />charset：字符编码。<br />src：外部脚本URL，<br />async：外部脚本异步执行，<br />defer：外部脚本推迟加载。 |
| `<noscript>` | 不支持 script 的环境，会显示替代文本 |                                                              |
| `<embed>`    | 外部应用程序（非 HTML）的容器        | type：嵌入类型；src：嵌入内容URL<br />height 容器高；width 容器宽； |
| `<object>`   | 嵌入对象：音频、视频、图像、PDF等    | 众多，用到再添加。                                           |
| `<param>`    | object 嵌入对象的参数。              | 用到再添加。                                                 |

HTML 5 中已 **不支持** / **非常不赞成** 的标签：`<applet>`




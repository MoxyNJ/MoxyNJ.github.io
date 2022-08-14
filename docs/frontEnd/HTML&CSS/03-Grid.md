---
title: 3. Grid
sidebar_position: 3
date: 2022-01-11
tags: [CSS]
---

# CSS Grid Layout

Grid layout：网格布局 / 网格排版。是第三代排版技术。

网格排版可以像表格一样，按照行、列来对齐元素。 flex 排版是一维排版方式，只能在轴线上对齐元素。grid 排版则可以将容器划分为行和列，定义单元格，然后指定元素到单元格中。因为有了行和列的概念，它是一种二维布局。

# 1. 名词

**grid container**

- 网格容器。
- 定义：`display: grid` 的盒子，就被称之为一个 grid 容器，其直系子元素都是 grid 元素，参与 grid 排版。

**grid items / grid elements**

- grid container 的直系子元素，被称之为 grid 项目、grid 元素。

**grid areas**

- 网格区域。一个单元格就是一个网格区域。



**grid row / grid column**

- 网格行 / 网格列
- grid container 容器中的水平方向，被称之为 行；垂直方向，被称之为 列。



![img](images/03.Grid.assets/17389591885783ddtplv-t2oaga2asx-watermark.awebp)



# 2. CSS 属性

暂时弃坑。。。 Grid 版本过新，后面再学。

> 参考：
>
> 1. 先看这个：[最强大的 CSS 布局 —— Grid 布局 - 掘金 (juejin.cn)](https://juejin.cn/post/6854573220306255880)
> 2. [CSS Grid Layout Module Level 2 (w3.org)](https://www.w3.org/TR/css-grid-2/)
> 3. [CSS Grid 网格布局教程 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
> 4. [网格布局 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
> 5. [grid - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)



# 最新 3.5 代排版技术：Houdini


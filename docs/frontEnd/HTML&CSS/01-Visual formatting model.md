---
title: 1. 视觉格式化模型
sidebar_position: 1
date: 2022-01-01
tags: [CSS]
---

# 视觉格式化模型 - CSS 2.2


视觉格式化模型 Visual formatting model：浏览器对于DOM树的可视化处理方式。

本文基于 CSS 2.2 的模型概念，不涉及 CSS 3 相关的知识（比如，flex排版，grid排版）。

## 1. 简介

在视觉格式化模型中，DOM树中的每个元素，基于盒模型，会生成一个或多个盒。然后根据排版规则，形成页面。

排版规则的基本参考因素：

- box dimensions and type. 
  - 盒子尺寸（content, padding, border, margin)、盒子类型（各种 block ）。
- position scheme (normal flow, float, and absolute position). 
  - 盒子的定位方式，即受 position 属性影响。
- relationships between elements in the document tree. 
  - DOM 中，元素之间的结构。
- external information (e.g., viewport size, intrinsic dimensions of images, etc.). 
  - 外部信息（例如，视口大小、图像的固有尺寸等）。



### 1.1 基本概念

#### 1.1.1 引入

1. leyout
   - 排版。有翻译为布局的，但称之为 'CSS排版' 更为合适。
2. Tag
   - 标签。代表源代码中一对尖括号 `<>`，在HTML的代码中书写的都是 <标签>。
3. element
   - 元素。通过一对标签表示出来的，添加了 HTML 语义。`<html> </html>` 就是一对标签，形成了一个有意义的 HTML 元素。
4. box
   - 盒。在页面中，所有元素都被渲染成一个或多个矩形盒子。是排版和渲染的基本单位。

####  1.1.2 flow

**flow**：流，是页面排版的基本规则。

基本的定位方案有：

1. normal flow： 正常流。格式化上下文的方式排版内容（块级、行内级）。即通常来讲，默认从左至右铺满盒子，再由上至下排列。
2. flow：浮动。当一个元素被定位浮动时，它会先按照正常流来摆放，然后向该行的左/右 “挪动”，会脱离正常流。
3. absolute：广义的绝对定位（absolute + fixed），当一个元素被绝对定位时，会脱离正常流。



**in flow**：流内。处在当前正常流中的元素，被称之为流内。

**out of flow**：流外。脱离当前正常流中的元素，被称之为流外。

1. 当一个元素的定位方案是 **浮动**、**绝对定位(absolute & fixed)** 或 **根元素**，那它会在当前正常流（标准文档流）之外，此时该元素可视为流外元素。
   - 注1：根元素（`<HTML>`元素），是一个最大的流外元素。在通常情况下，标准文档流的概念被定义为`<html>`元素下的正常流。“脱离标准文档流” 就是脱离了根元素下的正常流。
   - 注2：流外、流内是相对而言的。如果 A 元素处在正常流区域 X 中。以区域 X 为参考环境下，A 元素是流内元素；以区域 Y 为参考环境下，A 元素是流外元素。

2. 每一个流外元素的内部，都会产生一个新的流。

3. 如果 A 元素内部的正常流中，有一个 B 元素脱离 A 内部的正常流，则 B 元素被当成流外元素，B 元素内正常流下的内容已不属于 A 元素的流。B 元素属于 A 元素的流。



#### 1.1.3 定位

**CSS Flow Layout**

- CSS 流式排版。就是'正常流'。

**Normal Flow**

- 正常流。元素在页面中的基本排版规则。
- 是CSS中对于元素的排版方式。元素渲染成众多盒子，然后通过流式排版，排版到页面中。
- 当一个盒子，不浮动 (float: none)，不是绝对定位 (position: static / relative) 时，排版为正常流。
  - 在正常流的块级格式化上下文中，盒子会垂直依次排列；
  - 在正常流的行内级格式化上下文中，盒子会水平依次排列。

**float** 属性

- 浮动。在浮动定位中，浮动盒子会浮动到 **当前行** 的开始或尾部位置。
- 当一个盒子，浮动 (float: left / right)，且不是绝对定位 (position: static / relative) 时，为浮动定位。此时所在行的行盒 (inline box)，会自动缩小，以 “让开” 浮动盒子的位置。

**clear** 属性

- 指定一个元素是否必须移动 (清除浮动后) 到在它之前的浮动元素下面。适用于浮动和非浮动元素。
  - 针对 float 元素：可以让该 float元素不是按照 **平移** 的方式排到其他浮动元素后，而是另起一行，拍到第一个。
  - 针对 非 float 元素：可以让该元素的文本 / 内联元素，不是环绕 float 元素。而是将该元素的边框边界，全部移到 float元素的下方。同时会发生外边距折叠。

- none：不清除浮动
- left / right：清除左/右浮动，向下移动。
- both：左右浮动全部清除，向下移动。 

**absolute** 属性

- 泛指：绝对定位。是 position 中的两个属性：absolute，fixed。
- 在绝对定位中，盒子会完全从当前流中移除，并且不会再与其有任何联系（注：此处仅指定位和位置计算，而绝对定位的元素在文档树中仍然与其他元素有父子或兄弟等关系），其位置会使用 top、bottom、left 和 right 相对其 **包含块**（后文有解释）进行计算。
- 绝对定位是一个泛指，其实细分下来，有两个定位方式：
  - position: absolute，绝对定位。是相对于直系父元素（非 static的元素）来定位，把这个父元素当成包含块。
  - position: fixed，固定定位。是相对于 **视口** 的定位方式，也就是说该元素的包含块是 **视口** 大小。

**The stacking context**

- 层叠上下文。
- 通过 z-index修改的，位于z轴视角下的上下文。

**viewport** 

- 视口。
- 浏览器会通过视口将页面内容呈现给用户。换句话说，视口通常可以理解为浏览器窗口大小（或可视区域）。
- 视口会涉及到 <u>intial containing block 初始包含块</u> 相关概念。

**convas**

- 画布。
- 画布是文档最终呈现的页面（比如，一个word文档的实际页面大小就是 convas（画布），显示屏的大小就是 viewprot（视口）。
- 如果视口比画布尺寸要小，浏览器会提供滚动机制 / 缩放机制。

**containing block**

- 包含块（后文会有一节详解）。
- 此概念是针对 position 属性而来的。浏览器通过 position 属性的参照物（包含块），决定该元素生成盒的位置。
- 元素的 position 值是 'relative' or 'static'：包含块是最近的 block container box 的边界。
- 元素的 position 值是 'fixed'：包含块是初始包含块，即视口大小。
- 元素的 position 值是 'absolute'：包含块是最近的、非static的、block container box 的边界。

包含块简单来说，就是可以包含其他盒子的块。而问题讨论的核心是以 **一个子盒子自身** 为视角，确定它的直接的父包含块是哪一个，以此为参考来渲染子盒子。

盒子会根据它的包含块的边界，来定位自己的位置。但是盒子不会被包含块的范围限制，如果盒子跑到包含块的外面，称为溢出（overflow）。

**initial containing block**

- 初始包含块
- 根元素所在的包含块。，小和视口的大小相当。



## 2. 盒类型

浏览器会通过语义，把HTML标签识别为一个个元素（elements）。然后浏览器又会把元素渲染成各种类型的盒子，最后，根据盒类型盒排版规则，把它们渲染到页面中，呈现给用户。下面会介绍 CSS 2.2 中，所有类型的盒子。

- 包含块类型，是通过 position 属性确定的；
- 盒类型，是通过 display 属性确定的。

### 2.1 盒模型

#### 外部显示类型

盒模型中，外部显示类型，决定了该盒子是块级盒子，还是内联盒子（block box，inline box）

#### 内部显示类型

决定盒子内部是如何布局的。

- 默认：正常流。
- display: flex 弹性。外部显示类型为block，内部显示类型为 flex。该盒子的所有直接子元素都会成为flex元素，会根据 弹性盒子（Flexbox）规则进行布局。
- display: grid 网格。外部和特性基本同上，只是内部换成 grid盒子。



### 2.1 名词总结

为达成认知统一，以下英文为 CSS 官方标准中出现的名词，中文为本文中对应的翻译。

- block-level elements  块级元素
- inline-level elements  内联元素
- block-level box  块级盒子
- inline-level box  内联级盒子
- block box  块盒子
- inline box  行盒子
- block container box  块级容器盒子
- anonymous box  匿名盒子
- anonymous block box  匿名块级盒子
- anonymous inline box 匿名内联盒子

- element  元素
- principal box  主体盒
- principal block-level box 主体块级盒
- principal inline-level box 主体内联级盒
- replaced element  可替换元素
- non-replaced element  不可替换元素

### 2.2 盒的生成

开头讲过，浏览器根据元素的特性，来生成对应类型的盒。具体过程如下：

通常情况下，浏览器根据某元素的 **display** 属性，生成一个 **主体盒**（principal box），这里是一对一关系，一个元素会生成一个主体盒。这个主体盒中包括了元素中的内容以及它的其他子盒。

-   **list-item** 元素例外。浏览器在生成它的 **主体盒** 的同时，还会生成一个 **标记盒**（marker box），类似列表项前的数字 / 小圆圈 / 小点点。标记盒的定位方案与主体盒有关。

所以，不是所有的元素都只生成一个主体盒，有可能会生成多个盒（比如生成标记盒）。

结论，与主体盒相关的元素，比如标记盒、子元素生成的盒子、主体盒中的内容等，其定位都与主体盒有关。

![image](images/01-Visual%20formatting%20model.assets/image-20201117220655806.png)

### 2.3 Block & Inline

盒的生成，从大的范围来讲，有两大类盒子： 块（block），内联（inline）。

上文提到过：浏览器根据某元素的 display 属性，生成主体盒（principal box）。根据排版规则的不同，又划分为两种主体盒：

- 块类型的元素（block-level element），生成主体块级盒（principal block-level box）。
- 内联类型的元素（inline-level element），生成主体内联盒（principal block-level box）。

### 2.4 Block 系列

在文档中有四个概念与 **块（block）** 相关：block-level element、block box、block-level box 和 block container box。这四个概念不是单纯的相交或互斥，也不是单纯的 A 是 B 的子集，下面会分别介绍这四个概念。

涉及到的名词有：

- block-level element 块级元素
- block box 块盒
- block-level box  块级盒
  - principal block-level box  主体块级盒
- block container box 块级容器盒

先说结论：**block box = block-level box + block container box**
即，一个块盒：既要满足块级盒的特性，又要满足块级容器盒的特性。

#### 2.3.1 Block-level element

块级元素，是在 HTML 层面来讲述的。即把标签 “语义” 化为一个有意义的 “元素”。然后可以被 CSS 选择器所识别。在 CSS 的视角看来，HTML代码中的 “标签” 都被识别为了 “元素”。而块级元素，就是元素中那些被划分为块级的元素。

如何把元素划分为块级？

- 通过 display 属性设置为 'block'、'list-item'、'table' 的元素都是块级元素。

块级元素不直接用于格式化上下文或排版，这只是一个针对元素本身的属性概念。

**一个块级元素会被格式化成一个块级盒（例如文章的一个段落），然后会参与排版，默认按照垂直方向依次排列。**

#### 2.3.2 Block-level box

块级盒的定义：

- 从来源上：块级盒是由块级元素生成而来的盒子；
- 从自身定位：块级盒是参与块级格式化上下文（block formatting context）的盒子；
- 从结果上：它最终的排版位置，是被一个 BFC 环境所影响的。

一个块级元素，至少会生成一个块级盒，但是有时候会生成多个（list-item列表元素，上文提到）。

**principal block-level box**

定义：每个块级盒子都会参与到块格式化上下文（block formatting context）的创建，而每个块级元素都会至少生成一个块级盒子，即主块级盒子（principal block-level box）。列表项元素会额外生成标示盒，放置项目符号。

主块级盒是由块级元素生成的盒。定义这样一个概念的目的是在于，当涉及到定位方案时（position 属性相关）确定子元素生成盒的定位位置，通常会与主体块级盒相关。也就是会涉及到上文 containing block（包含块）的概念。（个人认为，包含块和主体块级盒的概念是重复的）

简单来说，主体块级盒和包含块的概念，就是为 position 定位方案服务的。

#### 2.3.3 Block container box

粗略来看，块容器盒顾名思义，它可以容纳块级概念的元素。认清这个概念的定义，或者说区分这个概念的方法，就是要先判断一个盒子包含的东西是否是块级的，它是不是一个 **容器** 。

块容器盒这个概念，不是为了参与当前块的排版和定位而定义的，只是为了描述当前盒和其后代子盒之间的关系，为了确定后代盒的排版和定位。从这一点上，block container box 概念，和 containing block 相同。

块容器盒的定义：

- 从盒子包含物的内容上看：盒子里面可以有正常流，它就是块容器盒（block container box）。
- 从盒子包含物的类型上看：块容器盒只包含 block-level box 或者只包含 inline-level box。
  - 如果是只包含 inline-level box，则该块容器盒内部，是一个 IFC 内联格式上下文。
- 从自身角度：块容器盒可以容纳正常流（块容器盒里面可以是 BFC）。

**判断：什么类型的盒子，是 block container box？**

一个粗略的判断依据：这个盒子中，可不可以放下一个正常流？如果可以放下一个正常流，那就是 block container box，同时这个盒子会创建一个 BFC（后文会讲）；如果不可以放置正常流（替换元素、类似 table-row 只能放特殊盒子），就不是 block container box。

-  **display** 属性的值是以下参数时，该元素均是 block container（以下均必须是 non-relpaced element 不可替换元素）：
   - block：块
   - inline-block：内联块
   - list-item：列表
   - table-cells：表格子项
   - table-captions：表格标题
   - flex item：（CSS 3）flex 盒子项
   - grid cells：（CSS 3）grid 盒子项
-  **display** 属性的值是以下参数时，该元素不是 block container：
   - table-row：这里面要存放 table-cell，不能放正常流。
   - flex：这里面要存放 flex子项，不能放正常流。（CSS 3）
   - grid：这里面要存放 grid子项，不能放正常流。（CSS 3）
   - ...
-  元素类型是 replace element，即替换元素，均不是 block container box。replaced element 的内容不归 CSS 渲染，这些内容最后是要被其他内容物替换的，该元素本身就是一个空元素，没有内容。所以自然不是一个可以放块级盒子的 “容器”。 替换元素不可以理解为一个 “容器”，而是应当理解为一个 **标记位**。

#### 2.3.4 Block box

既满足了（block-level box）的要求，又满足了（block container）的要求的盒子，是块盒（block box）。

![image](images/01-Visual%20formatting%20model.assets/image-20201118100112004.png)

- 块级盒 block-level box：描述了元素与其父元素和兄弟元素之间的行为。
- 块容器盒 block container box：描述了元素跟其后代之间的行为。

也就是说，这个盒子既能放得下 BFC，也可以放在一个BFC中。

- 从外部显示来讲，这个盒子是一个 block-level box：它能参与到一个 BFC 中。
- 从内部显示来讲，这个盒子是一个 block container box：它的后代盒子可以是块级的，可以放 BFC 。

- 有些块级盒不是块容器盒：表格 table；
- 有些块容器盒不是块级盒：非替换的行内块 non-replaced inline-block、非替换的表格单元格 non-replaced table-cell。

#### 2.3.5 Anonymous block box

匿名块盒。

如果一个块容器盒（block container box 代码的 div）里面有一个块级盒子（block-level box 代码的 p），那么这个快容器盒中的其他元素，就会都被强制渲染为块级盒子（代码 Some text 生成了一个匿名块盒）。

```html
<div>
	Some text
  <p>More text</p>
</div>
```

引申：**Anonymous inline box**

**匿名行内盒**

如果一个块容器盒（block container box）：里面没有块级盒（block-level box），但是里面有行内盒（inline box），那么这个快容器盒中的其他元素（只剩text文本元素了），就会都被强制渲染为行内级盒子（  text 生成了一个匿名行内盒）。

```html
<p>Some <em>emphasized</em> text.</p>
```

**总结**

匿名盒子（Anonymous box）分为：Anonymous block box 和 Anonymous inline box。

直接暴露在一个 block container 中的文本，不是被包装成匿名块盒子，就是被包装成匿名行内盒子。

同时指出，CSS 无法直接选中匿名盒子。对匿名盒子的渲染通常会参考父元素的样式。也就是说，此时所有可继承的 CSS 属性值都为 `inherit` 继承，而所有不可继承的 CSS 属性值都为 `initial` 初始。



#### 2.3.6 Q & A

1. 关于 block-level box 和 block container box：

这两个盒子不是互斥的，即这两个盒子是有交集的。这个交集就是 block box。

2. 什么情况下，一个 block-level box，不是 block container box：

   - 这个问题换句话说：一个块级盒子，在什么情况下，它不能包含其他块级。
   - 答：如果这个盒子是替换元素时，不能作为 block container box，不能作为 '容器'。
   - 原因：replaced element 其内容不归 CSS 渲染，最后是要被其他内容物替换的。所以自然不是一个可以放块级盒子的'容器'。 替换元素不是'容器'。

3. 举例：阐明 block box、block-level box 和 anonymous block-level box 的关系（MDN）

   - 'div' 和 'p' 元素，都是默认的 display = 'block'。

   ```html
   <div>Some inline text <p>followed by a paragraph</p> followed by more inline text.</div>
   ```

   ![image](images/01-Visual%20formatting%20model.assets/=anonymous_block-level_boxes-1605794985475.png)

   - CSS无法获取两个匿名块级盒所在的元素，所以这两个的样式，是通过继承 'div'而来。如果没有为他们指定 'background-color'，他们就具有默认的 **透明背景**。

### 2.4 Inline 系列

以下翻译中，‘行内’ 可以等效替换为 ‘内联’。

#### 2.4.1 Inline-level element

定义：display属性设置为 'inline', 'inline-block', 'inline-table'，这些元素都是行内级元素。

行内级元素不直接用于格式化上下文或排版，这只是一个针对元素本身的属性概念。行内级元素的内容可以分布在多行显示。

#### 2.4.2 Inline-level box

行内级盒的定义：

- 从来源上：行内级盒是由行内级元素生成而来的盒子；
- 从结果上：行内级是参与行内级格式化上下文（inline formatting context）的盒子。

#### 2.4.3 Inline box

行内盒。

行内盒是行内级盒子中，由不可替换元素 (non-replaced element) 生成的、且 dislpay 值是 'inline' 的盒子。它参与行内格式化上下文。是 Inline-level box 的一个子集。一个行内盒的内部，是一个 IFC 环境，即行内盒可以容纳内联级盒子。

以下生成的盒子，是 Inline-level box，但不是 Inline box，他们都是 atomic inline-level box：

- 替换的内联级元素（replaced inline-level elements）：比如内联的 img。其内部无法放任何盒子。
- 内联块元素（inline-block element）：其内部是一个 BFC，而不是 IFC。
- 内联表格元素（inline-table element）：里面是表格的特殊格式。

#### 2.4.4 **atomic inline-level box**

原子行内级盒。

是行内级盒子的子集。它不是不参与行内级格式化上下文，而是更特殊：因为原子行内级盒的内容不会被拆分成多行显示。所以如果遇到 atomic inlne-level box，并不会像传统的 IFC 处理方式一样，从左到右自然的 “挤满” 一整行，再重新开启下一行。而是会作为一个不可分割的整体，如果本行所剩空间放不下它时，便会 “提前” 排放到下一行，本行剩余空间的会闲置不用。

![image](images/01-Visual%20formatting%20model.assets/%E6%88%AA%E5%B1%8F2021-07-31%20%E4%B8%8B%E5%8D%882.20.48.png)

可以看到，上图粉色框内是一个 IFC 环境。而中间蓝色框被设置为："display : inline-block" 所以内部会形成一个 BFC。这个盒子作为一个不透明的整体，参与到所处的 IFC 环境中，上下和右边，都被蓝色盒子的 width 和 height 的设置而挤开了。

**问题：**既然 inline-level box 和 inline box 都表示参与行内级格式化上下文的行内级盒子，为什么要区分出两个概念？

- 两者区别：
  - inline-level box 是站在这个盒子自身的角度，判断这个盒子是不是可以参与行内级格式化上下文。
  - inline box 是站在盒子后代的角度，判断这个盒子的后代可否参与行内级格式化上下文，类似 'block container box' 是 '容器' 的这个思路，inline box 也是一个行内级的 '容器'，它可以把一个 IFC 放在其中（inline-level box 和 text）。
- 从这个角度来讲： inline-block element 属性创建的盒子，就属于 inline-level box 因为他可以参与行内格式化上下文；而它不属于 inline box 因为它的后代不可以是行内级的（内部是 BFC），或者说可能就没有后代（可替换元素，比如一个 img）。



>   An inline box is one that is both inline-level and whose contents participate in its containing inline formatting context. A non-replaced element with a 'display' value of 'inline' generates an inline box. Inline-level boxes that are not inline boxes (such as replaced inline-level elements, inline-block elements, and inline-table elements) are called atomic inline-level boxes because they participate in their inline formatting context as a single opaque box.

从这里可以看到，atomic inline-level box 是一个 inline-level box。也就是说， inline-level box 由两种 box 组成：atomic inline-level box 和 inline box。

-   atomic inline-level box：作为内部 “不透明” 盒子参与内联格式化上下文。
    -   由三种元素组成：可替换的 inline-level element、inlne-block element、inline-table element。
-   inline box：参与内联格式化上下文。是由一个内联的、不可替换的元素构成。

**所以，Inline box 和 atomic inline-level box 的概念是互斥的。**



> #### 9.2.2 Inline-level elements and inline boxes
>
> **Inline-level elements** are those elements of the source document that do not form new blocks of content; the content is distributed in lines (e.g., emphasized pieces of text within a paragraph, inline images, etc.). The following values of the ['display'](https://www.w3.org/TR/CSS22/visuren.html#propdef-display) property make an element inline-level: 'inline', 'inline-table', and 'inline-block'. Inline-level elements generate **inline-level boxes**, which are boxes that participate in an inline formatting context.
>
> An **inline box** is one that is both inline-level and whose contents participate in its containing inline formatting context. A non-replaced element with a 'display' value of 'inline' generates an inline box. Inline-level boxes that are not inline boxes (such as replaced inline-level elements, inline-block elements, and inline-table elements) are called atomic inline-level boxes because they participate in their inline formatting context as a single opaque box.
>
> https://www.w3.org/TR/CSS22/visuren.html#box-gen



#### 2.4.5 line box

行盒。

包含来自同一行所有盒的矩形区域叫做行盒(line box)。所有行内级元素会从左至右依次排列，遇到包含块的边界，则再下一行继续排列。渲染的结果中，每一行就是一个 line box。

line box 的概念和 block box 相当。

inline box 主要是为了看其内部是不是一个 IFC 环境而定义的。

**区分： line box 和 Inline box**

- line box：
  - 行盒。一个排版的概念，不会参与实际渲染。同一行的所有行内盒，会被一个行盒包括。无法通过 HTML 标签，或者 CSS 去定义。是一个在最终排版结果上看到的盒。
- Inline box：
  - 行内盒。行内盒是行内级盒子中，由不可替换元素(non-replaced element) 生成的，且 dislpay 值是 'inline'的盒子。它参与行内格式化上下文。是 Inline-level box 的一个子集。

从结果上看，在一个行内格式化上下文中（水平书写模式）：

- 所有 line box **垂直排列**；
- 同一个 line box 中，所有的行内级元素**水平排列**。



![image](images/01-Visual%20formatting%20model.assets/image-20201118152123045.png)

> 参考
>
> 1. W3C：https://www.w3.org/TR/CSS22/visuren.html



## 3. 元素的替换性

（Empty elements / Void elements）不是所有的元素都有开始和结束标签。有些元素只有一个标签，在这个元素位置上，浏览器会嵌入一些额外的内容。这些元素如果没有被正确的替换，则不会在网页中显示任何东西。

-   比如 `<img>` 标签，最终该位置会被一个图片（或一段文字）替换。
-   比如 `<input>` 标签，根据它不同的 type 属性值，所在位置会被替换为不同的元素：输入框、单选 / 多选 等等。

**可替换元素** 可以任意设置 width height margin padding 等的值。改变替换后元素的尺寸。

**不可替换元素** 不可以随意修改，而是要通过 CSS 中 block 和 inline 性质来判断。

### 3.1 non-replaced element

不可替换元素。

可以理解为正常的元素。绝大多数元素都是不可替换的：元素的内容通过CSS渲染，然后在网页中展示，而不是被替换成其他内容。

### 3.2 replaced element

替换元素。

在CSS中，有些元素的展现效果不是由 CSS 来控制，它们是外部对象。通过浏览器识别元素类型，来替换该元素内容，而不是通过 CSS 来渲染。换句话说，该元素原本是一个空元素，没有内容。浏览器根据标签含义，替换成一个相应内容。

进一步解释，CSS 只可以调整替换元素的位置，而不能修改元素内容的样式。

- HTML 规范上，替换元素有：

  ```css
  img, input, iframe, select, textarea, object, video, audio, canvas, embed
  ```

- MDN 上典型的替换元素有：

  - `<iframe>`、`<video>`、`<embed>`、`<img>` （最常见）

- MDN 上特定情况下，是替换元素的有：
  - `<option>`、`<audio>`、`<canvas>`、`<object> `、`<applet>` （不推荐使用）



此外，通过 CSS 属性值 content 生成的对象，成为 匿名替换元素 anonymous replaced element。这就是一个替换元素。

```css
h1 {
  contnet: url(logo.png)
}
```

content 生成的替换元素：

-   生成的文本无法选中、无法复制、无法被屏幕阅读设备读取、无法被搜索引擎抓取；
-   原本的文字信息没有被替换、替换的只是视觉层。

### 3.3 Intrinsic dimensions

固有尺寸。

所有替换元素，都是具有固定尺寸的，即该元素的宽高由其自身标签类型定义，不受周围元素影响。

通常情况下，行内元素（Inline-level element）是无法设置width height 属性的，但是可替换的行内级元素（replaced inline-level element)，是可以修改 width height 属性。如果不做修改，其默认值是元素的固有尺寸。

- 比如：display 属性值为 'inline' 的 `<img>` 可以设置宽高，但是 `<span>` 不可以设置宽高。

## 4. containing block

包含块。

### 4.1 定义

定义一个 '包含块' 概念的目的：确定一个元素的尺寸和位置，有时候会需要一个参照物，而这个参照物是就是它的包含块。

### 4.2 确定包含块

确定一个元素的包含块的过程完全依赖于这个元素自身的 `position` 属性（与 position 知识重合）：

- 'static', 'relative', 'sticky'(CSS 3)：包含块是该元素的直系祖先块元素的内容区的边缘组成。
  - 直系祖先块元素（inline-block, block, list-item elements）
  - 内容区（盒的 content）
- 'absolute'：包含块是由它的直系的、非`static`的祖先元素的内边距区的边缘组成。
  - 非'static'的祖先元素（position: fixed, absolute, relative, sticky）
  - 内边距区（padding）
- 'fixed'：通常情况直接理解为是视口，下面是详细情况。
  - 连续媒体(continuous media)的情况下：包含块是适口viewport；
  - 分页媒体(paged media)下的情况下：包含块是分页区域(page area)。
- （太细了先不管）'absolute', 'fixed'：如果满足以下条件，会是直系父元素的内边距区的边缘组成。
  -  `transform` 或 `perspective` 的值不是 `none`
  -  `will-change`的值是 `transform` 或 `perspective`
  -  `filter`的值不是 `none` 或 `will-change` 的值是 `filter`(只在 Firefox 下生效).
  -  `contain` 的值是 `paint` (例如: `contain: paint;`)

 ### 4.3 包含块参与计算

宽度：如果某元素的 width, left, right, padding, margin 属性，赋值为百分比值，那么这个数值是通过它的包含块的 width 属性值来计算。

高度：如果某元素的 height, top, bottom 属性，赋值为百分比值，那么这个数值是通过：

- 当它的包含块 height 值确定，则通过它的包含块的 height 属性值计算。
- 当它的包含块的 height 值会根据自身内容变化，而且包含块的 `position` 属性的值被赋予 `relative` 或 `static`。那么这个数值是 'auto'。

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block



## 4. float 属性 | CSS 2.2

float CSS 属性指定一个元素应沿其容器的左侧或右侧放置，允许 **文本** 和 **内联元素** 环绕它。该元素从网页的正常流动 (文档流) 中移除。

- 判定为浮动元素的标准：float 属性不是 none 的元素。float 通常会受 display 的影响。
- 浮动的定位方式：元素浮动后，会被移除正常流，然后向左/向右**平移（在该行内块中移动）**，一直平移到触碰容器边框 / 另一个浮动元素。

#### clear

**`clear`** 让一个元素移动到在它前面的那个浮动元素的下面。适用于自身是浮动的，或非浮动的元素。

- 针对 float 元素：可以让该 float元素不是按照 **平移** 的方式排到其他浮动元素后，而是另起一行，拍到第一个。
- 针对 非float 元素：可以让该元素的文本 / 内联元素，不是环绕 float元素。而是将该元素的边框边界，全部移到 float元素的下方。同时会发生外边距折叠。

- none：不清除浮动
- left：清除左浮动，向下移动。
- right：清除右浮动，向下移动。
- both：左右浮动全部清除，向下移动。 



## 5. display 属性 ｜ CSS 2.2

display 属性，通常有两对值，块级 / 行内级，两种都有对应关系。

![image](images/01-Visual%20formatting%20model.assets/Block-level%20Box.png)

### 5.1 作用

`display` 属性可以设置元素的内部和外部显示类型 **display types**。

#### 5.1.1 outer display types

外部显示类型，决定了该元素处在正常流中的表现：是块级元素，还是内联级元素。

#### 5.1.2 inner display types

内部显示类型，决定该元素的后代元素排版 / 布局方式：flow layout、grid、flex。

- display: static。默认：正常流 flow layout。遵循 CSS 2 系列的排版规则，是一个 BFC / IFC。
- display: flex。外部显示类型为block，内部显示类型为 flex。
  - 该盒子的所有直接子元素都会成为 flex 元素，会根据弹性盒子（Flexbox）规则进行布局。
- display: grid。同上，内部会变成 grid 盒子。

### 5.2 取值

display 属性，可以改变该元素的显示类型，可取值如下（只列出较为通用的取值）

- block

  - 元素变成：块级元素 block-level element

- inline

  - 元素变成：行内级元素 inline-level element

- inline-block

  - 元素变成：行内块级元素 inline-block element

  - 元素创建为盒子后，会变为原子行内级盒 atomic inline-level box，也就是说如果该行放不下该盒，就会空出剩余空间，该盒另起一行放置。

  - 性质：内部显示类型为块级元素 block-level element，外部显示类型为行内级元素 inline-level element。

    - 拥有部分 block 的性质：
      - width、height 有效，可以设置盒子内容 content 的大小；
      - padding、margin、border 会推开其他盒子。

    - 拥有部分 inline 的性质：
      - 盒子不会主动换行，多个内联块盒子会并排排放，和正常流一样，只有达到边界才会 “被迫” 换行；

    - 问题：
      - 如果设置了 width 内容宽度：则该盒子内的文本内容，会在盒内换行，不会横向溢出盒子。一但文本内容过多，就会纵向溢出盒子。
      - 如果没有设置 width 内容宽度：则该盒子的宽度，会随着文本内容的增多而撑开。但是如果盒子边界达到容器宽度，文本内容会在盒子中换行。
    - 总结：` inline-block` 内联块盒，也就是说，是盒子之间内联关系的，内部块级的盒子。

- list-item

  - 元素变成：特殊的块级元素 block-level element

  - 元素创建为盒子后：一个主块盒 + 一个标记盒。

- none

  - 会将元素从 可访问性树 *accessibility tree* 中移除，导致该元素及其所有子代元素不再被屏幕阅读技术 *screen reading technology* 访问。换句话说，它不仅仅是视觉隐藏，连屏幕阅读也无法读取了。
  - 该元素不在格式化结构（formatting structure）中出现，即在视觉媒体中，元素和它的后代，均不会生成盒也不会影响排版。

- flex 相关， grid相关，是 CSS3以后的属性值，在此不列出。

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/display



## 6. position 属性 ｜ CSS 2.2

### 6.1 定义

CSS **`position`** 属性用于指定一个元素在文档中的定位方式。通过 position 确定定位方式，通过 top, right, bottom, left 属性确定偏移量。

偏移量的计算，是依照包含块，或自身原本位置为原始参考位置，然后盒偏移量（top, right, bottom, left 属性）参与计算得出。

position 来确定元素的定位位置，是依照 containing block 包含块决定的。

### 6.2 取值

- static
  - 默认定位。
  - 元素按照正常流的方式排版，此时盒偏移量（top, right, bottom, left 属性）无效。
- relative
  - 相对定位。
  - 元素的位置会先按照正常流方式排版，然后相对其在常规流中的位置进行偏移。
  - 相对定位的盒子并不脱离正常流，它仍在常规流中保持占位。
- absolute
  - 绝对定位。
  - 按照相对于直系非 static 定位的父元素为参考，通过盒偏移量来确定位置。
  - 绝对定位会脱离正常流。
- fixed
  - 固定定位。
  - 通常情况直接理解为相对于 **视口** 参考，通过盒偏移量来确定位置，下面是详细情况。
    - 连续媒体 (continuous media) 的情况下：参考是适口 viewport；
    - 分页媒体 (paged media) 下的情况下：参考是分页区域 (page area)。
  - 固定定位会脱离正常流。
- sticky（CSS 3）
  - 粘性定位。
  - 是 **相对定位** 和 **固定定位** 的混合。元素在跨越特定阈值（盒偏移量）前为相对定位，之后为固定定位。
  - 元素根据正常文档流进行定位，然后相对它的 *最近滚动祖先（nearest scrolling ancestor）*和 containing block (最近块级祖先 nearest block-level ancestor)，包括 table-related 元素。
  - 基于盒偏移量值进行偏移。

如果引入包含块的概念：

- static：默认，按照正常流方式排版。
- relative：相对定位，先按照正常流方式排版，然后按照 包含块为基、盒偏移量为距离进行定位。
- absolute：绝对定位，先脱离正常流， 然后按照 包含块为基、盒偏移量为距离进行定位。
- fixed：固定定位，先脱离正常流，然后按照 包含块为基、盒偏移量为距离进行定位。
  - 绝大多数情况下， fixed的包含块是视口。



> 参考：
>
> 1. 视觉格式化模型：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model



## 7. 格式化上下文

名词：

- Formatting context：格式化上下文
- Block formatting context：块级格式化上下文，简称 BFC。
- Inline formatting context：行内级格式化上下文，简称 IFC。
- Table formatting context：表格格式化上下文，简称 TFC。

Block-level boxes participate in a BFC.   块级盒子参与 BFC。

Inline-level boxes participate in an IFC.  行内级盒参与 IFC。

- line box 行盒：文字，或 inline-box 内联盒排出来的一整行盒，就是 line-box。

### 7.1 Block formatting context

块级格式化上下文，简称 BFC。

BFC 的概念，包括了它的元素内部的所有内容。BFC简单来讲，就是一套排版 / 渲染规则，它规定了块级元素的渲染方式：即：在一个BFC中，所有块级元素，会从包含块的内容块(content)顶部开始，在 **垂直方向** 依次排版。

**BFC 对 float / clear 的影响：**

- **浮动定位** 和 **清除浮动** 时只会应用于同一个 BFC 内的元素。
- **浮动** 不会影响其它 BFC 中元素的布局，而 **清除浮动** 只能清除同一 BFC 中在它 **前面的元素** 的浮动。
- 计算 BFC 的高度时，内部的浮动元素也要参与计算（解决 float 高度坍塌）。

**BFC 对 外边距折叠的影响：**

- 外边距折叠（Margin collapsing）只会发生在属于同一 BFC 的块级元素之间。

**注意：IFC、flex、grid都不会发生 Margin Collapse。**因为边距折叠只会发生在一个BFC中，如果创建了新的BFC，就不会发生边距折叠。

#### 7.1.1 BFC 的生成条件：

**判断依据：如果该元素是一个 block-level element，且这个元素的内部可以放一个正常流，就会生成一个 BFC。**

- 这句话拆分理解：
  - 该元素必须是一个 block-level element：因为只有块级元素，才会生成块级格式化上下文 BFC。
  - 该元素的内部可以放正常流：反情况理解，如果内部不能防止正常流（比如，替换元素内部不受 CSS 样式影响，table-row 内部必须放置 table-cell 等），那该元素的内部就不会生成一个 BFC，而是会放置特定的内容物。

具体的条件（5）：

- `<html>` 根元素。
- `float` 元素。
- `position` absolute 元素。：fixed、absolute 固定定位、绝对定位的元素。
- `display` block cintainers box：inline-block、list-item、table-cells、table-captions、fiex item、grid cells。
- `overflow` 非 visible 元素。overflow：hidden、scroll、auto、inherit。
  - overflow 属性是当内容移除元素边框时的处理方式。




#### 7.1.2 BFC & margin callapse

如果没有 BFC：

如果两个盒子 A 和 B 在同一个 BFC 中，它们内部不存在新的 BFC，则 A 和 B 盒子内部会发生穿透：

```html
<div id=container>
    <div id="A">
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div id="B">
      <div class="box"></div>
      <div class="box"></div>
    </div>
</div>

<style>
#A {
    background-color: pink;
}
#B {
    background-color: purple;
}
.box {
    width: 100px;
    height:100px;
    margin: 20px 0px;
    border: 1px solid black;
    background-color: aqua;
}
</style>
```

效果：

![image-20220814204740487](images/01-Visual%20formatting%20model.assets/image-20220814204740487.png)![image-20220814204748223](images/01-Visual%20formatting%20model.assets/image-20220814204748223.png)![image-20220814204802053](images/01-Visual%20formatting%20model.assets/image-20220814204802053.png)

   

图一：因为在粉色的 A 盒、紫色的 B 盒内部都不是 BFC，所以它们各自内部的 4 个 小盒子，即使不属于同一个父盒中，也互相发生了 margin callapse。

图二：而如果在 A 和 B 盒中建立各自的 BFC。通过分别为 A 和 B 添加 CSS 属性 `overflow:auto` 各自内部生成 BFC。此时它们互相之间便不再发生 margin callapse。A 和 B 两个盒子相互独立，内部不再相互受到干扰。

图三：形成对比的是，如果 A 盒不是 BFC，B 盒是一个BFC，则情况会如图3：A 盒内部没有被正确 “撑开”，发生了margin callapse，并且会穿透 A 盒与外界发生影响。而 B 盒是一个 BFC，在内部与外界线相互隔离，不受影响。



### 7.2 Inline formatting context

行内格式化上下文，就是网页中行内级元素 Inline-level element，会按照先后顺序，依次**水平排列**。如果遇到包含块的边界，就会另起一行，继续水平排列，直到排列结束。只要在这个包含块（上文）内，就是一个 IFC 行内格式化上下文。包含块通常是一个 Block container box。

#### 7.2.1 line box

行盒。

上文介绍过，包含来自同一行所有盒的矩形区域叫做行盒 (line box)。所有行内级元素会从左至右依次排列，遇到包含块则再下一行继续排列。渲染的结果中，每一行就是一个 line box。

**区分： line box 和 Inline box**

- line box：
  - 行盒。一个排版的概念，不会参与实际渲染。同一行的所有行内盒，会被一个行盒包括。无法通过 HTML 标签，或者 CSS 去定义。是一个在最终排版结果上看到的盒。
- Inline box：
  - 行内盒。行内盒是行内级盒子中，由不可替换元素(non-replaced element) 生成的，且 dislpay 值是 'inline'的盒子。它参与行内格式化上下文。是 Inline-level box 的一个子集。

从结果上看，在一个行内格式化上下文中（水平书写模式）：

- 所有 line box **垂直排列**；
- 同一个 line box 中，所有的行内级元素**水平排列**。

如果是垂直书写模式，则对应 line box是水平排列；同一个 line box 中，所有行内级元素垂直排列。

#### 7.2.3  细节

> 一个行内盒（inline box）被分割到多行中时， margins, borders, 以及 padding 的设定均不会在断裂处生效。 下例中有一个 `<span>` 元素，它包裹了一系列单词，占据了两行。可以看见在断裂处，`<span>` 的 border 同样发生了断裂。

![image](images/01-Visual%20formatting%20model.assets/image-20201119215210536.png)

### 7.3 其他补充

#### 7.3.1 flow

前文介绍了 流内(in folw)、流外(out of flow)的知识。

> **in flow**：流内。处在当前正常流中的元素，被称之为流内。
>
> **out of flow**：流外。脱离当前正常流中的元素，被称之为流外。

在生成一个 FBC 时，

- 如果是 浮动元素、绝对定位元素，会脱离当前正常流，即发生流外。

- 如果是 block cintainers box，或者是 overflow 非默认的 visible 元素，便不会脱离当前正常流，依然在流内。

#### 7.3.2 实例

直接摘录了 MDN 中的图片，如图，从元素结构上讲，浮动盒子是紫色盒子的子元素。当浮动盒子向左浮动时，出现了脱流紫盒子的正常流的情况（浮动盒子没有被紫盒子包裹 / 紫盒子没有被浮动盒子“上下撑开”）。

![image](images/01-Visual%20formatting%20model.assets/image-20201119204847403.png)

解决办法1：

- 因为float元素会生成新的BFC，同时它也会脱离正常流，浮动到它的包含块的左边。所以要把紫盒子定义为浮动盒子的“包含块”。常规做法是设置紫盒子为 `overflow: auto`，只要可以令紫盒子变成浮动盒子的包含块，都可以。

> 使用 `overflow` 来创建一个新的 BFC，是因为 `overflow` 属性告诉浏览器你想要怎样处理溢出的内容。当你使用这个属性只是为了创建 BFC 的时候，你可能会发现一些不想要的问题，比如滚动条或者一些剪切的阴影，需要注意。  —— MDN

解决办法2：

- CSS 3 中，在父级块中使用 `display: flow-root` 可以创建新的 BFC。同时，它规定该父级块内的所有子元素，都必须参与 BFC，即使是浮动元素。此时浮动元素的包含块就是这个父级块。

> 关于值 `flow-root`的这个名字，当你明白你实际上是在创建一个行为类似于根元素 （浏览器中的`<html>`元素） 的东西时，就能发现这个名字的意义了——即创建一个上下文，里面将进行 flow layout。   —— MDN

![image](images/01-Visual%20formatting%20model.assets/image-20201119210103098.png)



> 参考
>
> 1. W3C：https://www.w3.org/TR/CSS22/visuren.html#normal-flow
> 2. MDN：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
> 3. MDN：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Inline_formatting_context


---
title: Document、事件
sidebar_position: 1
date: 2022-07-01
tags: [DOM]
---

# 1 Document

## 1.1 浏览器环境，规格

### 1.1.1 整体结构

下图为JavaScript 在浏览器中运行时的结构图，`Window` 作为根对象，承担的两个角色：

-   `window` 是JavaScript的全局对象；
-   `window`是“浏览器窗口”，控制浏览器窗口的各种方法都绑定在`window`上。

 ![截屏2021-06-21 下午5.07.40](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%885.07.40.png)

### 1.1.2 Document Object Model

DOM是文档对象模型。利用DOM的概念，把网页中所有的内容都被表示为可以修改的对象。DOM规范解释了文档的结构，提供了操作文档的对象和方法，不仅支持浏览器，也对其他设备提供支持。

其中，`Document`对象是页面的主要“入口点”，可以使用它来更改或创建页面上的任何内容。

也就是说，

-   JavaScript利用DOM操作页面的内容，不恰当的说，就是操作“HTML”部分；
-   JavaScript利用CSSOM（CSS Object Model）操作页面的样式，也就是“CSS”部分，但是不常用。



### 1.1.3 Browser Object Model

BOM是浏览器对象模型。BOM的概念规定了主机环境（浏览器）除处理document（归BOM管）以外，所有内容以及这些内容的对象。

例如：

-   [navigator](https://developer.mozilla.org/zh/docs/Web/API/Window/navigator) 对象提供了有关浏览器和操作系统的背景信息。
-   [location](https://developer.mozilla.org/zh/docs/Web/API/Window/navigator) 对象允许我们读取当前 URL，并且可以将浏览器重定向到新的 URL。



### 1.1.4 总结

以下是各个标准：

-   DOM规范：描述文档的结构、操作和事件，详见 [https://dom.spec.whatwg.org](https://dom.spec.whatwg.org/)。
-   CSSOM规范：描述样式表和样式规则，对它们进行的操作，以及它们与文档的绑定，详见 https://www.w3.org/TR/cssom-1/。
-   HTML规范：描述 HTML 语言（例如标签）以及 BOM（浏览器对象模型）— 各种浏览器函数：`setTimeout`，`alert`，`location` 等，详见 [https://html.spec.whatwg.org](https://html.spec.whatwg.org/)。它采用了 DOM 规范，并使用了许多其他属性和方法对其进行了扩展。

此外，某些类被分别描述在 https://spec.whatwg.org/。

-   当你想要了解某个属性或方法时，使用[Mozilla 手册](https://developer.mozilla.org/en-US/search) 。

-   要查找某些内容时，可以使用互联网搜索 “WHATWG [term]” 或 “MDN [term]”，

    例如 [https://google.com?q=whatwg+localstorage](https://google.com/?q=whatwg+localstorage)，[https://google.com?q=mdn+localstorage](https://google.com/?q=mdn+localstorage)。



## 1.2 DOM树

在DOM文档对象模型中，HTML文档的主干是由一个个标签（tag）组成的，每个标签都声明为一个对象，这些标签对象和其他对象共同构成了一个DOM树结构。用JavaScript对对象进行修改，通过修改DOM文档，最终修改页面内容。

### 1.2.1 举例

一个简单的document，用HTML代码则表示如下结构。

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
```

如果用DOM模型的树形结构表示，可以想象为如下结构：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%888.04.59.png)

在HTML中的“标签(tag)”和其他元素，在DOM模型中则表示为“对象”，在树形结构中则称之为“节点”。



### 1.2.2 节点类型

**HTML 中的所有内容,都会成为 DOM 的一部分。**DOM中含有的节点类型，一共有[12种]([DOM Standard (whatwg.org)](https://dom.spec.whatwg.org/#node))：

```js
// 摘录12种节点类型
const unsigned short ELEMENT_NODE = 1;								// 元素节点(常见)
const unsigned short ATTRIBUTE_NODE = 2;							// 属性节点(常见)
const unsigned short TEXT_NODE = 3;										// 文本节点(常见)
const unsigned short CDATA_SECTION_NODE = 4;					// CDATASection节点
const unsigned short ENTITY_REFERENCE_NODE = 5; // legacy EntityReference节点(历史)
const unsigned short ENTITY_NODE = 6; // legacy 				 Entity节点(历史)
const unsigned short PROCESSING_INSTRUCTION_NODE = 7;	// ProcessingInstruction节点
const unsigned short COMMENT_NODE = 8;								// 注释节点(常见)
const unsigned short DOCUMENT_NODE = 9;								// 文档节点(常见)
const unsigned short DOCUMENT_TYPE_NODE = 10;					// DocumentType节点
const unsigned short DOCUMENT_FRAGMENT_NODE = 11;			// 文档片段节点
const unsigned short NOTATION_NODE = 12; // legacy			 Notation节点(历史)
```

常见的节点类型为：

1.  `#document`：Document node 文档节点，代表整个网页，是网页内容的入口，也是DOM树的根节点。
2.  `#元素名`：标签被称为 Element node **元素节点**。`<html>`是根元素，也称为“顶级标签”，除此之外，还有子节点、父节点、兄弟节点等概念；
3.  `#text`：文本被称为 Text node**文本节点**，它一定被某个元素节点包含；
4.  `#comment`：Comment node **注释节点**，即HTML代码中的注释部分，会被创建为一个注释节点；
5.  ``：Attributes node 属性节点。对每一个元素设置的属性，都在创建的属性节点中保存。

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%888.45.02.png)

### 1.2.3 特征

**自动修正**

和HTML的灵活性对应，当浏览器遇到不正确的HTML，会在形成DOM时自动更正它：

-   如果HTML中，没有顶级标签或`<body>`标签，则形成DOM时自动创建`<html>`对象或`<body>`对象。
-   如果HTML中，有没有闭合的标签，则会自动闭合。`<p>xxx</p>`



**与控制台交互**

在我们处理 DOM 时，我们可能还希望对其应用 JavaScript。例如：获取一个节点并运行一些代码来修改它，以查看结果。以下是在元素（Elements）选项卡和控制台（Console）之间切换的一些技巧。

首先，打开 [elks.html](https://zh.javascript.info/article/dom-nodes/elks.html)：

-   在元素（Elements）选项卡中选择第一个 `<li>`。
-   按下 Esc — 它将在元素（Elements）选项卡下方打开控制台（Console）。

现在最后选中的元素可以通过 `$0` 来进行操作，先前选择的是 `$1`，等。

我们可以对它们执行一些命令。例如，`$0.style.background = 'red'` 使选定的列表项（list item）变成红色，像这样：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%889.06.47.png)



## 1.3 遍历DOM

修改页面内容，就是通过对DOM进行操作；对 DOM 的所有操作，要先获取对应的DOM对象；获取DOM对象，都是以 `document` 对象开始。它是 DOM 的主“入口点”，从它我们可以访问任何节点。

对象之前存在一定的关系，就像上文提到的，有父节点、子节点、前驱节点、后继节点、第一个子节点、最后一个子节点等等。

![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%889.11.28.png" alt="截屏2021-06-21 下午9.11.28" style="zoom:50%;" /> 



### 1.3.1 顶层节点：document

以网站 [elks.html](https://zh.javascript.info/article/dom-nodes/elks.html)为例，在控制台中，键入：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-21%20%E4%B8%8B%E5%8D%889.18.14.png)

可以看到，`document`对象是一个是最顶层节点。同时为了方便起见，把一些主要的元素节点地址，直接绑定在 `document`对象的属性中：

-   `document.documentElement`：指向`<html>`节点；
-   `document.body`：指向`<body>`节点；
-   `document.head`：指向`<head>`节点。



注：

-   `document.body`可能出现值为 null 的时候。出现这种情况是因为当要执行某段JavaScript代码，去读取`document.body`的时候，浏览器还尚未读取到 `<body>`元素，所以只能返回“节点不存在”。
-   在 DOM 中，`null` 值就意味着“不存在”或者“没有这个节点”。



### 1.3.2 子节点

术语：

-   子节点：表示某节点的直系的子元素。
-   子孙元素：表示某节点下嵌套的所有元素，包括子元素，以及子元素的子元素等。



经常使用到的属性和方法：

-   `childNodes` 集合：列出了所有子节点，包括文本节点。
-   `firstChild` 属性：访问第一个子元素。
-   `lastChild` 属性：访问最后一个子元素。
-   `elem.hasChildNodes()`方法：检查节点是否有子节点。



### 1.3.3 DOM 集合

DOM 集合是一个类数组的可迭代对象，不是一个数组。其特点：

1.  可迭代性。可以用`for...of`迭代；
2.  不是数组。不可使用未继承的数组方法。（使用转换为数组、绑定数组方法变通）
3.  只读。DOM 集合都是只读的，无法通过直接修改获取的`childNodes`集合，来修改DOM树中的节点。
4.  实时。除了特例，几乎所有的DOM集合都是实时的，反应了DOM的当前状态。
    -   **整理特例！**

通常不会使用`for...in `遍历，使用该方法，会便利该对象下所有可枚举(enumerable)的属性，会额外遍历出很少用的属性。



### 1.3.4 基本导航(navigation)属性

**兄弟节点（Sibling）** 是指有同一个父节点的节点。



某元素的导航(navigation)属性：

不区分节点类型：

-   访问后继兄弟节点：`elem.nextSibling`

-   访问前驱兄弟节点：`elem.previousSibling`

-   访问父节点：`elem.parentNode`
-   访问第一个子节点：
-   访问最后一个子节点：

只导航元素类型：

-   访问后继兄弟**元素**节点：`nextElementSibling`
-   访问前驱兄弟**元素**节点：`previousElementSibling`
-   访问父**元素**节点：`elem.parentElement`
-   访问第一个**元素**子节点：`elem.firstElementChild`
-   访问最后一个**元素**子节点：`elem.lastElementChild`

![截屏2021-06-22 上午9.21.12](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8A%E5%8D%889.21.12.png)

注：

-   在绝大多数情况下，`elem.parentElement`和`elem.parentNode`都会返回同一个父节点。例外的是，`document.documentELement`。根元素`document.documentElement`指向`<html>`，其父节点就是`document`根节点，但是`#document`不是一个元素节点，所以访问`parentElement`会返回`null`	。

    ```js
    document.documentElement.parentNode         // document
    document.documentElement.parentElement      // null
    ```



#### 1.3.4.1 表格(table)

表格节点拥有额外的导航属性：



`<table>` 拥有额外的属性:

-   `table.rows` ：指向 `<tr>` 元素的集合；
    -   `table.rows[i]`：可访问第 i 个单元格。
-   `table.caption`：指向元素 `<caption>`；
-   `table.tHead`：指向元素`<thead>`；
-   `table.tFoot`：指向元素`<tfoot>`；
-   `table.tBodies`：指向`<tbody>` 元素的集合。



`<thead>`，`<tfoot>`，`<tbody>` 元素提供了 `rows` 属性：

-   `tbody.rows`：表格内部 `<tr>` 元素的集合。
-   `tfoot.rows`
-   `tbody.rows`



`<tr>`：

-   `tr.cells` ：某 `<tr>` 中的 `<td>` 和 `<th>` 单元格的集合。
-   `tr.sectionRowIndex` ：某 `<tr>` 在 `<thead>/<tbody>/<tfoot>` 中的位置（索引）。
-   `tr.rowIndex` ：在整个表格中 `<tr>` 的编号（包括表格的所有行）。



`<td>` 和 `<th>`：

-   `td.cellIndex` ：在封闭的 `<tr>` 中单元格的编号。



#### 1.4.3.2 表单(form)

HTML 表单（form）还有其它导航（navigation）属性，后面再补充。



## 1.4 搜索：`getElement*`, `querySelector*`

DOM不仅提供了导航(navigation)属性，还提供了搜索方法来访问到其他元素：



### 1.4.1 根据 id 搜索

根据元素的 `id` 特性(attribute)，可以通过以下方法获取到：

-   `document.getElementById('SomeId')` 方法：直接搜索到该元素。
-   `window.SomeId` 属性：浏览器把所有 id 名都放置在全局变量中，可以直接访问。
-   `window['Some-Id']` 属性：当某些 id 名称不满足变量名标准时，可以用方括号访问它。



注：

1.  不要使用 `window.SomeId` 通过全局变量访问元素。
2.  不要使 id重名，其具有唯一性。
3.  `document.getElementById('SomeId')` 是绑定在 `document`上的方法，不能在其他元素上调用。



### 1.4.2 根据 CSS 选择器搜索

根据 CSS 选择器，来查找元素：

-   `elem.querySelectorAll('CSS Rule')` ：返回匹配的所有元素的集合；

-   `elem.querySelector('CSS Rule')`：返回匹配的第一个元素；
    -   结果与 `elem.querySelectorAll('CSS Rule')[0]`相同，只是反应更快。

-   `elem.matches('CSS Rule')`：返回布尔值。判断该elem元素是否满足 CSS 选择器规则，满足返回 true。

-   `elem.closest('CSS Rule')` ：获取满足 CSS 选择器的第一个祖先，会先检查自身，所以会包括自己在内。
    -   元素的祖先(ancestor)：是由父级、父级的父级等，直到根节点的一系列节点的父级链。



### 1.4.3 其他搜索方式

-   `elem.getElementsByTagName('tag')` ：返回具有给定标签的元素的集合。可以输入`*`匹配任何标签，如 `<div>`。
-   `elem.getElementsByClassName('className')` ：返回具有给定 CSS 类的元素集合，如 `<img class="hello">`。
-   `document.getElementsByName('name')` ：返回文档范围内满足 `name` 特性的元素，如 `<img name="hello">`。



### 1.4.4 集合的实时性

1.  所有的 `"getElementsBy*"` 方法都会返回一个 **实时的（live）** 集合。这样的集合始终反映的是文档的当前状态，并且在文档发生更改时会“自动更新”。
2.  相反，`querySelectorAll` 返回的是一个 **静态的** 集合。就像元素的固定数组。



| Method                   | Searches by... | Can call on an element? | Live? |
| ------------------------ | -------------- | ----------------------- | ----- |
| `querySelector`          | CSS-selector   | ✔                       | -     |
| `querySelectorAll`       | CSS-selector   | ✔                       | ✘     |
| `getElementById`         | `id`           | ✘ - just document       | -     |
| `getElementsByName`      | `name`         | ✘ - just document       | ✔     |
| `getElementsByTagName`   | `tag` or `'*'` | ✔                       | ✔     |
| `getElementsByClassName` | `class`        | ✔                       | ✔     |



目前，最常用的方法：

-   `elem.querySelector`：获取某个元素；
-   `elem.querySelectorAll`：获取某类元素；
-   `elem.matches`：判断该元素是否与 CSS 选择器匹配；
-   `elem.closest`：查找满足的祖先元素（包括自己）。



## 1.5 节点属性：type, tag, content

每个 DOM 节点都属于相应的内建类。这些类依次继承，构成了一个单一的层次结构(single-hierarchy)。“单一”的一次是所有内建类都是从同一个根节点出发，形成唯一的一个树结构。

层次结构（hierarchy）的根节点是 [EventTarget](https://dom.spec.whatwg.org/#eventtarget)，[Node](http://dom.spec.whatwg.org/#interface-node) 继承自它，其他 DOM 节点继承自 Node。

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8A%E5%8D%8810.54.54.png)

简单介绍这些类：

-   [EventTarget](https://dom.spec.whatwg.org/#eventtarget) ：根的“抽象（abstract）”类。
    -   该类的对象从未被创建。作为基础，它让所有 DOM 节点都支持事件（event）。
-   [Node](http://dom.spec.whatwg.org/#interface-node) ：也是“抽象”类。
    -   `Node` 类的对象从未被创建，用来充当 DOM 节点的基础。其他不同类型的类，都继承自 `Node`。
    -   它提供了DOM树的核心功能：`parentNode`，`nextSibling`，`childNodes` 等基础导航（它们都是 getter）。
-   [Element](http://dom.spec.whatwg.org/#interface-element)：是 DOM 元素的基本类。
    -   它提供了元素级的导航（navigation），如 `nextElementSibling`，`children`，以及 `getElementsByTagName` 和 `querySelector` 这样的搜索方法。
    -   浏览器中不仅有 HTML，还会有 XML 和 SVG，这些特定类都继承自`Element` 类：`SVGElement`, `XMLElement` , `HTMLElement`。
-   [HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement) ：所有 HTML 元素的基本类，所有 HTML 元素均继承自它：
    -   [HTMLInputElement](https://html.spec.whatwg.org/multipage/forms.html#htmlinputelement) ：`<input>` 元素的类，
    -   [HTMLBodyElement](https://html.spec.whatwg.org/multipage/semantics.html#htmlbodyelement) ： `<body>` 元素的类，
    -   [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/semantics.html#htmlanchorelement) ： `<a>` 元素的类，
    -   ……等，每个标签都有自己的类，这些类有包含了自己特有的属性和方法。



举例： `<input>` 元素的 DOM 对象。它属于 HTMLInputElement 类，按照祖先顺序，它依次继承了如下属性和方法：

-   `HTMLInputElement` 类：提供特定于输入的属性；
-   `HTMLElement` 类：提供通用（common）的 HTML 元素方法（以及 getter 和 setter）；
-   `Element` 类：提供通用（generic）元素方法；
-   `Node` 类：提供通用 DOM 节点属性；
-   `EventTarget` ：提供事件相关的支持；
-   ……最后，它继承自 `Object`，因为像 `hasOwnProperty` 这样的“普通对象”方法也是可用的。



### 1.5.1 查看类名

对于页面中某个节点，查看实例化它的类名：

-   `elem.constructor.name` 属性

-   `elem.toString` 方法

-   `instanceof` 运算符

-    `elem.nodeType` 属性，不常用。

    -   元素的属性值是一个数值，代表了该元素的元素类型。

    ```js
    document.body.constructor.name				// "HTMLBodyElement"
    console.log(toString(document.body))	// [object Undefined] why?
    alert( document.body ); 							// [object HTMLBodyElement]
    document.body instanceof HTMLBodyElement		// true
    
    elem.nodeType == 1  // 元素节点
    elem.nodeType == 3	// 文本节点
    elem.nodeType == 9	// document 对象
    ```

    

以下两个方法，对于 JavaScript 对象，结论是相同的；对于 DOM 元素，会得到不同的内容：

-   `console.dir()`：将元素显示为DOM对象。
-   `console.log()`：显示元素的DOM树。

 ![截屏2021-06-22 下午3.01.45](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8B%E5%8D%883.01.45.png)

 ![截屏2021-06-22 下午3.02.13](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8B%E5%8D%883.02.13.png)

注：在规范中，DOM的内置类不是用 JavaScript 来描述的，而是使用 [接口描述语言(Interface description language)](https://en.wikipedia.org/wiki/Interface_description_language)，IDL。



### 1.5.2 查看标签名

-   `elem.nodeName` 属性：可以查看任意类型节点的当前标签名。
-   `elem.tagName` 属性：仅适用于 Element 类型节点，查看它当前的标签名。

```js
document.nodeName		// "#document" 
document.tagName		// undefined（不是元素）
```



### 1.5.3 获取/修改元素的内容

1.  `elem.innerHTML`
2.  `elem.outerHTML`
3.  `elem.textContent`



`elem.innerHTML` 属性，获取**元素内部**的HTML代码的字符串形式。也可以通过该属性修改其内容。

-   通过该属性插入有语法错误的HTML代码时，浏览器会尝试自动更正；
-   通过该属性插入`<script>`标签，同时插入 JavaScript 代码后，会成功插入HTML流中，但不会执行。
-   谨用该属性，会造成HTML的重新加载。
    -   比如使用 `elem.innerHTML += "...."` ，尝试为HTML添加更多内容时，不是对现有内容的直接追加。而是会先清空HTML的全部内容，然后再重新写入新/旧结合后的内容。这样会导致已经加载过的图片、文本的内容，会重载一遍。



`elem.outerHTML` 属性，获取包括**元素自身**在内的HTML代码的字符串形式。

-   与`innerHTML` 相比：
    -   从划定范围上：多了获取元素本身。
    -   从赋值效果上：不会改变元素，

在执行 `div.outerHTML = <p>A new element</p>` 时，发生了如下事情：

1.  `div` 被从文档(document)中移除；

2.  另一个HTML片段`<p>A new element</p>` 被插入到其原有位置上，此时页面会显示为更改后的内容；

3.  `div` 变量仍旧有其旧的值，新的HTML没有被赋值到这个变量上。需要查询 DOM 来获取对新元素的引用。

    ```js
    let li1 = document.querySelector('li')
    li1   	// <li>"Hello Moxy"</li> 
    li1.outerHTML = "<p>outerHTML</p>"     		// 此时页面会发生改变，DOM文档被写入新内容
    li1			// <li>"Hello Moxy"</li>  变量 li1 的值没有发生改变，此时该变量保存了一个DOM文档流中不存在的HTML片段字符串。
    
    // 如果是 innerHTML：
    let li2 = document.querySelector("li")
    li2			// <li>"Hello Moxy"</li> 					
    li2.innerHTML = "<p>123</p>"							// 此时页面会发生改变，DOM文档被写入新内容
    li2			// "<p>123</p>"	 变量 li2 的值发生改变，li2 依然指向了当前DOM文档流中之前的位置。
    ```



`elem.textContent` 属性：获取该**元素节点**内的所有纯文本字符串，剔除所有 `<tags>`。

-   可对该属性赋值，但是会替换其元素节点内部所有内容，包括其他节点。



`textContent` 与 `innerHTML`的区别：

通过`textContent` 属性写入DOM流，是“安全方式”写入文本，通常应用在另用户输入任意字符串。

-   使用 `innerHTML`，DOM会将其“作为 HTML”插入，带有所有 HTML 标签，会改变页面样式。

-   使用 `textContent`，DOM会将其“作为文本”插入，所有符号（symbol）均按字面意义处理，也就是全部处理为文本。

     ![img](source/截屏2021-06-22 下午4.33.02.png)

上图的效果，就是利用 `document.querySelector("li").textContent = "<p>123</p>"` 得来，`"<p>123</p>"`被处理成了一个文本。



### 1.5.4 获取/修改文本、注释节点的内容

-   `nodeValue` 属性
-   `data` 属性

两者差异非常小，不讨论，通常使用 `data`，因为更短。

-   可以对属性值修改，会正确显示修改后的DOM文档流。



### 1.5.5 隐藏/可见

通常有两种方式，一种是DOM属性(property)操作，一种是HTML的标签特性(attribute)。

```js
<div hidden>With the attribute "hidden"</div>				// 使用 HTML 标签特性隐藏

<div id="elem">JavaScript assigned the property "hidden"</div>
<script> elem.hidden = true; </script>		// 使用 DOM 属性隐藏
```



## 1.6 特性 attributes, 属性 properties

当浏览器加载页面时，会解析HTML并从中生成 DOM 对象。对于元素节点，大多数HTML 特性（attributes）会转译为 DOM 对象的属性（properties），两者名称一一对应，但也会存在少数名称不一一对应的情况。

-   DOM节点就是通过 JavaScript 对象，我们可以任意添加/修改这些节点的属性和方法，就像对待 JavaScript 一样对待它们。

-   对于HTML标签，当一个标签 **标准的** 特性(如 `id`)，就会生成对应的 DOM 属性（`elem.id`）。但是非 **标准的** 特性则不会。



对定义的规定：

-   特性（attribute）： 在 HTML 中的内容，`<p href="xxx">`。
-   属性（property）： 在 DOM 对象中的内容 `p.href`。

简略的对比：

|           | 属性                                   | 特性         |
| :-------- | :------------------------------------- | :----------- |
| 类型      | 任何值，标准的属性具有规范中描述的类型 | 字符串       |
| 名字 name | 大小写敏感                             | 大小写不敏感 |



### 1.6.1 访问属性

这里指的是直接访问DOM对象的属性值：

-   `elem.id` 等等



### 1.6.2 访问特性

这里指的是通过“特性”方法来访问特性：

-   `elem.attributes` ：读取所有特性。返回属于内建 [Attr](https://dom.spec.whatwg.org/#attr) 类的对象的集合，具有 `name` 和 `value` 属性。
    -   集合是可迭代对象，可用 `for...of` 遍历。
-   `elem.hasAttribute('name')` ：检查特性是否存在。
-   `elem.getAttribute('name')` ：获取这个特性值。
-   `elem.setAttribute('name', 'value')` ：设置这个特性值。
-   `elem.removeAttribute('name')` ：移除这个特性。



注意，HTML 特性有以下几个特征：

-   它们的名字是大小写不敏感的（`id` 与 `ID` 相同），所以传入的`name` 并不区分大小写。
-   它们的值总是字符串类型的。



DOM 属性有以下几个特征：

-   有些属性，先通过属性改变数值，在通过特性方法获取的这个值，会发现没有被更新，例如对 `input.value` 进行修改。

-   属性值不一定都是字符串类型：

    -   `input.checked` 属性值是布尔型。

    -   `elem.style` 属性值是一个对象；`elem.getAttribute('style')` 特性是字符串。

    -   `elem.href` 属性值可以是相对路径；`elem.getAttribute('href')` 特性是一个完整的路径：

        ```js
        <a href="#Hello_world">Moxy</a>
        
        <script>
          // 特性访问
          alert(a.getAttribute('href')); // #Hello_world
          // 属性访问
          alert(a.href ); 							 // http://site.com/page#Hello_world
        </script>
        ```



### 1.6.3 非标准的特性

使用场景：

1.  通过非标准的特性，将自定义的数据从 HTML 传递到 JavaScript；
2.  用于为 JavaScript “标记” HTML 标签。
    -   为拥有特殊标记的 HTML 标签内，添加特定的内容；
    -   为拥有特殊标记的 HTML 标签，添加特定的 CSS 样式。



为了避免程序员在自定义非标准特性后，DOM中官方引入了这个名称为标准属性，从而与程序员的命名产生冲突。HTML 语言中定义了 "data-*" 特性。所有用 `data-` 开头的特性都被保留给程序员使用，不会冲突。同时，它可以在 `elem.dataset` 属性中被找到

-   `elem.dataset` ：返回所有自定义特性的集合，保存了所有自定义属性名。

```js
// HTML 代码
<head data-moxy-hello-world="Hello_world">
<body data-moxy="Hello">

document.head.dataset									// DOMStringMap {moxyHelloWorld: "hello_world"} - 一个集合
document.head.dataset.moxyHelloWorld	// "hello_world"

document.body.dataset.about;      // "Hello"
documemt.body[data-moxy]          // noe defined - data-*开头的特性没有直接保存在body对象中，而是存储在dataset属性内。
```



## 1.7 修改文档 document

### 1.7.1 创建 DOM 节点

-   `document.createElement('tag')` ：创建元素节点
-   `document.createTextNode('some text')`：创建文本节点



### 1.7.2 插入 DOM 节点

-   `node.append(...nodes or strings)` —— 在 `node` 中，**末尾** 插入节点或字符串；插入后， `node` 与其是**父子**关系。
-   `node.prepend(...nodes or strings)` —— 在 `node` 中，**开头** 插入节点或字符串；插入后， `node` 与其是**父子**关系。
-   `node.before(...nodes or strings)` —— 在 `node` 外，**前面** 插入节点或字符串；插入后， `node` 与其是**兄弟**关系。
-   `node.after(...nodes or strings)` —— 在 `node` 外，**后面** 插入节点或字符串；插入后， `node` 与其是**兄弟**关系。
-   `node.replaceWith(...nodes or strings)` —— 将 `node` 替换为给定的节点或字符串。

其中，

-   参数可以是要插入的任意类型 DOM 节点，或者字符串（会被转换成一个文本节点，然后插入）
-   可以一次插入多个节点，参数可传递多个。
-   安全插入。插入字符串时，字符都被 “作为文本” 插入，而不是“作为 HTML 代码”，例如`div.before('<p>HEllo</p>')` 是作为文本插入，特殊符号都会被自动转译处理。



举例如下，将一个由于 ol 和 li 标签组成的 HTML 结构中，插入某个元素：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8B%E5%8D%888.22.54.png)

### 1.7.3 通用插入方式

-   `elem.insertAdjacentHTML("where", "htmlCode")`：在指定位置插入 HTML 代码；
-   `elem.insertAdjacentText(where, text)` ：在指定位置插入 Text 文本；
-   `elem.insertAdjacentElement(where, elem)` ：在指定位置插入 Element 元素。



举例，`elem.insertAdjacentHTML("where", "htmlCode")`：

-   参数1：代码字（code word），指定相对于 elem 的插入位置，从下择其一而填之。
    -   `"beforebegin"` — 将 `"htmlCode"` 插入到 `elem` 的前面；插入后， `elem` 与其是**兄弟**关系。
    -   `"afterend"` — 将 `"htmlCode"` 插入到 `elem` 的后面；插入后， `elem` 与其是**兄弟**关系。
    -   `"afterbegin"` — 将 `"htmlCode"` 插入到 `elem` 内的开头；插入后， `elem` 与其是**父子**关系。
    -   `"beforeend"` — 将 `"htmlCode"` 插入到 `elem` 内的末尾；插入后， `elem` 与其是**父子**关系。
-   参数2：要插入的 HTML 代码字符串，会作为代码插入。

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-22%20%E4%B8%8B%E5%8D%888.37.07.png)

注：

-   `elem.insertAdjacentHTML()` 更为常用，因为它可以把 **内容** 作为代码插入；
-   如果要插入 text 或 element，通常会使用更简洁的`elem.append()`等四个方法，它们把 内容 作为文本插入，或作为元素插入。



### 1.7.4 移除/移动节点

移除节点： `node.remove()`

移动节点：把某个位置的节点，移动到新的位置，使用上文介绍的插入节点方式。

-   比如 `node.append`，会自动把 `node` 该节点从原有位置删掉，然后插入到新指定的位置去。



### 1.7.5 克隆节点

-   `elem.cloneNode(true)`：深拷贝。返回一个新元素，具有 `elem` 的全部特性（attribute）和子元素。

-   `elem.cloneNode(false)` ：浅拷贝。返回一个新元素，只有 `elem` 的全部特性，没有子元素。



### 1.7.6 DocumentFragment 节点

如果有许多字节点要整理后再添加到 DOM 流中。可以先把各种子节点添加到一个 DocumentFragment 中，全部添加完毕后，再把这些子节点一起添加到 DOM 流中。DocumentFragment 节点相当于一个用来传递节点列表的包装器(wrapper)。

注意，在把 DocumentFragment 节点添加到 DOM 流中时，不会添加 DocumentFragment 节点本身，只是把其内容添加到 DOM 流的指定位置。

例子：

```js
<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();
  
  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }
  return fragment;
}

ul.append(getListContent()); 
</script>
```

最终文档结构：

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

这种用法其实并不常见，可以用一个数组来包含所有子节点：

```js
<ul id="ul"></ul>

<script>
function getListContent() {
  let result = [];			// 利用数组代替 DocumentFragment 节点

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }
  return result;
}

ul.append(...getListContent());  // ...运算符，把数组展开
</script>
```



### 1.7.7 过时用法

对节点的添加、删除、移动：

`elem.appendChild(node)`：将 node 附加为 elem 的最后一个子节点。

`elem.insertBefore(node, nextSibling)`：将 node 插入到 elem 的 nextSibling 上（后继兄弟节点）。

`elem.replaceChild(node, oldChild)`：把 `elem` 子元素中的 `oldChild` 替换为 `node`。

`elem.removeChild(node)`：从 `elem` 的子节点中，删除 `node`。



对页面内容的添加：

`document.write`

-   调用该方法，只在页面加载时工作，在“加载完成”阶段是不可用的。

    -   如果稍后调用它，则已经加载的文档内容将被擦除，载入插入的内容。

-   通常使用在 HTML 代码流中，插入一段 HTML 代码。

-   调用 `document.write(html)` 意味着将 `html` “就地马上”写入页面。`html` 字符串可以是动态生成的。

    ```HTML
    <p>Somewhere in the page...</p>
    <script>
      document.write('<b>Hello from JS</b>');   // "就地马上"的写入页面
    </script>
    <p>The end</p>
    ```

    

-   优点：写入页面的速度非常快。因为不涉及 DOM 修改，而是直接在加载时把内容写入页面。对于浏览器来说，这些插入的内容会像本来就在 HTML 文本中那样顺利依次加载。



## 1.8 样式和类

### 1.8.1 class

HTML中，标签中的 `class` 特性，对于DOM操作中的：

-    `elem.className` 属性：获取 elem 节点的所有 class 名称。
-   `elem.classList` 属性：是一个类，支持三种方法，对 class 名称进行单个操作。
    -    `elem.classList.add(name)` 方法：添加；
    -    `elem.classList.remove(name)` 方法：删除；
    -    `elem.classList.toggle(name)` 方法：不存在就添加，存在就删除；
    -   `elem.classList.contains(name)` 方法：检查是否存在，返回 布尔值。



### 1.8.2 style

`elem.style` 属性是一个对象，它对应于HTML标签中的 `"style"` 特性（attribute）中所写的内容。

注：不是针对 CSS 联级，而只是在 HTML标签中的 style 特性。



-   设置属性：`elem.style.backgroundColor="100px"    // background-color`
    -   对于多词（multi-word）属性，使用驼峰式 camelCase。
-   删除属性：`elem.style.display = ""    // 把样式置为空`

-   获取 CSS 特性，包括联级在内，应用在该 HTML 标签上的所有 CSS 特性：
    -   `getComputedStyle(element, [pseudo])`



## 1.9 元素大小与滚动

下图为某元素在 CSS（左）和 DOM（右） 中对应的属性名称：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-24%20%E4%B8%8B%E5%8D%882.17.55.png)

 

-   `elem.offsetParent`，`elem.offsetLeft`，`elem.offsetRight`：获取元素相对于父 container 的偏移值；
-   `elem.offsetWidth`，`elem.offsetHeight`：获取元素包括 content、padding、（scrollbar）、border 在内的总宽度/高度；
-   `elem.clientWidth`，`elem.clientHeight`：获取元素 content、padding 在内的宽度/高度。不包括滚动轴区域；
-   `elem.clientLeft`，`elem.clientTop`：获取元素的 border；
-   `scrollWidth`，`scrollHeight`：相比 `clientWidth / Height` 属性，多了隐藏的、滚动尚未显示的内容，但不包括滚动轴区域；
-   `scrollLeft`，`scrollTop`：从元素的左上角开始，滚动出元素的上半部分的 width/height。
    -   换句话说，`scrollTop` 就是“已经滚动了多少”，见下图。

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-24%20%E4%B8%8B%E5%8D%882.27.18-4516080.png)



通常，利用 JavaScript 获取元素 CSS 的尺寸，不会直接获取 `width / height` 而是像上面的方法获取最终的解析值，也就是最终页面呈现出来的比例数值。利用 `getComputedStyle` 获取的 width 值，有可能得到 "auto"，也有可能该值会受 CSS 的 `box-sizing` 影响。	



## 1.10 Window 尺寸与滚动

 `document.documentElement`：保存了与 HTML 相关的尺寸信息，浏览器页面的尺寸信息。

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-24%20%E4%B8%8B%E5%8D%882.58.58.png)

-   `document.documentElement.clientWidth/clientHeight`：获取窗口（window）的宽度和高度，不包括滚动条的尺寸。
-   `window.innerWidth/innerHeight` ：获取了整个窗口的宽度，包活了滚动条的尺寸。
-   `documentElement.scrollWidth/scrollHeight` ：文档的完整大小，也就是不用滚动条隐藏，完全展开的尺寸，**时会有bug**。
-   `document.documentElement.scrollLeft/scrollTop`：文档滚动过的部分。
    -   `document.body.scrollLeft/scrollTop`：部分浏览器（如Safari，使用这种方法）。
    -   `window.pageYOffset` ，`window.scrollY`：效果相同，优先使用。这三个方法的具体不同点，暂不细讨论。



### 1.10.1 滚动

`scrollTop/scrollLef`：对元素进行常规的滚动操作

-   `document.documentElement.scrollTop/scrollLeft`： 对页面进行滚动操作。
    -    `document.body.scrollTop/Left` ：部分浏览器（如Safari，使用这种方法）。

-   `window.scrollBy(x, y)`：将页面滚动至**相对于当前位置的 `(x, y)` 位置**；
-   `window.scrollTo(pageX, pageY)`：将页面滚动至 **绝对坐标**；

-   `elem.scrollIntoView(top)`：滚动页面以使 `elem` 在窗口顶部、底部可见。
    -   top参数为 true：默认，窗口滚动到 elem 正好在窗口的顶端；
    -   top参数为 false：窗口滚动到 elem 正好在窗口的底端；

-   禁止滚动： `document.body.style.overflow = "hidden"`
-   恢复滚动： `document.body.style.overflow = ""`

 

## 1.11 坐标

### 1.11.1 两种坐标的属性 

JavaScript 有以下两种坐标系：

1.  相对于窗口：`position:fixed`，从窗口的顶部/左侧边缘计算得出。
    -   这些坐标表示为 `clientX/clientY`，该名称与事件属性有关。
2.  相对于文档： `position:absolute`，从文档根（document root）的顶部/左侧边缘计算得出。 
    -   表示为 `pageX/pageY`。

不论文档是否滚动，某个文字的 `pageX/pageY` 都不会发生改变。因为这个属性是相对于文档而言的位置；但如果页面滚动（文档滚动），`clientX/clientY` 的数值就会发生改变。

![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-24%20%E4%B8%8B%E5%8D%883.20.50.png)



### 1.11.2 元素的相对位置

`elem.getBoundingClientRect()` 方法：返回元素的大小及其相对于视口的位置。

-   如果是标准盒子模型，元素的尺寸等于`width/height` + `padding` + `border-width`的总和。
-   如果是 `box-sizing: border-box`，元素的的尺寸等于 `width/height`。

-   返回值是一个 DOMRect 对象，其属性值。
    -   `y/x`：相对于窗口`(0, 0)`的坐标；
    -   `width/height`：相当于 CSS 的 `width/height` 属性；	
    -   `left`：相当于`x`；
    -   `top`：相当于`y`；
    -   `right`：相当于  `x + width`；
    -   `bottom`：相当于 `y + height`。

注：如果 width 和 height 的属性值是负数（矩形框没有体积），则 left/top 和 x/y 的值不相等。

 ![截屏2021-06-24 下午3.34.49](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/%E6%88%AA%E5%B1%8F2021-06-24%20%E4%B8%8B%E5%8D%883.34.49.png)

返回值是一个 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象，这个对象是由该元素的 [`getClientRects()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getClientRects) 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。



### 1.11.3 获取某处元素

 `document.elementFromPoint(x, y)` ：返回在窗口坐标 `(x, y)` 处嵌套最多（the most nested）的元素。

-   也就是说，取得输入坐标位置附近“最深、最子孙”的元素。

-   对于在窗口之外的坐标，`elementFromPoint` 返回 `null`



### 1.11.4 文档的坐标

文档相对坐标从文档的左上角开始计算，而不是窗口。

上文提到过的这两个坐标系统通过以下公式相连接：

-   `pageY` = `clientY`  +  `window.pageYOffset`（文档的垂直滚动出的部分的高度）。
-   `pageX` = `clientX`  + `window.pageXOffset` （文档的水平滚动出的部分的宽度）。

```js
// 通过视口坐标，获取某元素的文档坐标
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
```



# 2 事件

## 2.1 浏览器事件简介

**事件** 是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。

这是最有用的 DOM 事件的列表，你可以浏览一下：

**鼠标事件：**

-   `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
-   `contextmenu` —— 当鼠标右键点击一个元素时。
-   `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时。
-   `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时。
-   `mousemove` —— 当鼠标移动时。

**键盘事件**：

-   `keydown` 和 `keyup` —— 当按下和松开一个按键时。

**表单（form）元素事件**：

-   `submit` —— 当访问者提交了一个 `<form>` 时。
-   `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`。

**Document 事件**：

-   `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

**CSS 事件**：

-   `transitionend` —— 当一个 CSS 动画完成时。



### 2.1.1 事件处理器

为了对事件作出响应，我们可以分配一个 **处理程序（handler）/或称“回调函数”**—— 一个在事件发生时运行的函数。

处理程序是在发生用户行为（action）时运行 JavaScript 代码的一种方式。

下面是几种分配处理程序的方法：

1.  **attribute**。HTML 特性：处理程序可以设置在 HTML 中名为 `on<event>` 的特性（attribute）中，如 `onclick`。
2.  **property**。DOM 属性：可以在 JavaScript 代码中为对应的 DOM 属性（property）添加事件回调函数，如`onclick`。
3.  **method**。使用添加事件函数：`elem.addEventListener()`



-   回调函数的括号问题：
    -   通过 DOM 操作，对属性值添加事件回调函数，不加括号：`elem.onclick = SaySomething`

    -   通过 HTML 操作，需要添加括号。这是因为 浏览器会将特性中的内容全部添加到一个新创建的回调函数中：

        ```js
        <input type="button" onclick="SaySomething()">
        
        // 浏览器对上面的 onclick 属性，会解析为这样：
          button.onclick = function(event){
          SaySomething();
        }
        // 参数：event 事件对象，自动保存了事件触发时的相关信息，这个在2.1.2会讲到。
        ```

        

`element.addEventListener(event, handler[, options]);`：添加一个事件监听。

-   对应的参数分别表示：事件名称、回调函数、附加对象
    -   附加对象可选的属性值：
    -   `once`：如果为 `true`，只监听一次，被事件触发后自动删除该监听器。
    -   `capture`：事件处理的阶段，冒泡 false 默认 **/** 捕获 true。
        -   由于历史原因，`options` 也可以是 `false/true`，与 `{capture: false/true}` 相同。
    -   `passive`：如果为 `true`，那么处理程序将不会调用 `preventDefault()`，我们稍后将在 [浏览器默认行为](https://zh.javascript.info/default-browser-action) 一章中介绍。
-   同一元素的同一阶段的监听器，按其设置顺序运行。



`element.removeEventListener(event, handler[, options]) `：移除一个事件监听。

-   参数要移除的回调函数，必须与添加时的回调函数相同（通过变量，指向同一个回调函数）。
-   需要在与设置事件监听时的统一阶段（冒泡、捕获），来移除事件监听。



### 2.1.2 事件对象

在触发设定好的事件监听时，会自动调用事件回调函数。此时，对被触发元素的相关信息 ，如鼠标指针坐标、指针是否被点击等等信息，会存储在一个对象中，作为第一个参数传入回调函数。这个对象通常命名为 `event`。

`elem.onclick = function(event) { ... }`

-   `event.type`：事件类型，这里是 `"click"`。
-   `event.currentTarget`：处理事件的元素，与 `this` 相同。
    -   如果回调函数是箭头函数，或者它的 `this` 被绑定到了其他东西上，就从 `event.currentTarget` 获取元素。
-   `event.clientX / event.clientY`：指针事件（pointer event）的指针的窗口相对坐标。
-   等等其他属性，根据事件类型的不同，也会有事件独有的 `event` 属性。



## 2.2 冒泡和捕获

冒泡和捕获的最大差别，就是触发事件监听的顺序不同。

-   冒泡：会首先在“最直接、最底层、最子孙”的元素触发，然后依次向上，直到祖先。
-   捕获：会首先出发祖先元素，然后逐层向下，直到子孙。

换句话说，从 `<div>` 标签的逐层嵌套来考虑触发顺序：**冒泡会从最内层逐渐向外；捕获会从最外层逐渐向内。**



[DOM 事件](http://www.w3.org/TR/DOM-Level-3-Events/) 标准描述了事件传播的 3 个阶段：

1. 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。
2. 目标阶段（Target phase）—— 事件到达目标元素。
3. 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡。

下面是在表格中点击 `<td>` 的图片，摘自规范：

 ![img](images/1%20Document%20&%20%E4%BA%8B%E4%BB%B6.assets/image-20210630152652129.png)

需要说明的是，在第二个“目标阶段”，只是一个概念，并没有“显式的”表现这个阶段，而是包含在了冒泡和捕获这两个阶段中。

- 换句话说，如果对一个目标元素（比如上图的 `<tr>` ），既设置了捕获，又设置了冒泡。如果事件被触发，这个目标元素会在冒泡阶段和捕获阶段触发两次事件监听。





### 2.2.1 冒泡

冒泡（bubbling）：当事件发生在某元素上，会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。

冒泡事件从目标元素开始向上冒泡。通常，它会一直上升到 `<html>`，然后再到 `document` 对象，有些事件甚至会到达 `window`，它们会调用路径上所有的事件回调函数。

-   这个过程被称为“冒泡（bubbling）”，因为事件从内部元素“冒泡”到所有父级，就像在水里的气泡一样。

-   “几乎”，而不是所有事件都会发生冒泡：`focus` 等事件就不会冒泡。



### 2.2.2 event.target

目标元素：父元素上的事件监听（它的回调函数），始终可以获取事件实际发生位置的详细信息。

引发事件的那个嵌套层级最深的元素被称为**目标元素**,可以通过 `event.target` 访问。

注意区别：

-   `event.target` ：引发事件的“目标”元素，它在冒泡过程中不会发生变化。
-   `event.currentTarget`：表示“当前”元素，即目前正在运行的回调函数。
-   `this`： 除非有其他指定，否则和`event.currentTarget` 相同。



### 2.2.3 停止冒泡

 `event.stopPropagation()`：执行该方法后，该事件会停止向上冒泡。

如果所有对象都设置了事件监听，冒泡事件从目标元素开始向上冒泡，会一直上升到 `<html>` 节点，然后到 `document` 对象，最后到 `window` 对象，同时会调用路径上所有的回调函数。

在这个过程中，任何一个回调函数，都可以通过调用停止冒泡方法，停止事件的冒泡。

- 某回调函数执行该方法，只会停止事件向上冒泡。这个回调函数中的各种操作，依然会被触发且执行。受影响的是当前回调函数的全部上层事件监听。

- 从经验上讲，除非特殊需要，不会频繁的使用停止冒泡功能。



### 2.2.4 捕获

capturing，捕获阶段通常在开发中使用较少，默认的`addEventListener(event, handler)` 事件监听，通常被设置为默认的冒泡阶段，需要手动设置`capture:ture` 才调整为捕获阶段：

```javascript
elem.addEventListener(..., {capture: true})
elem.addEventListener(..., true) 	// 或，用 {capture: true} 的别名 "true"
```



## 2.3 事件委托

是一种编程思维，见这里：[事件委托]([事件委托 (javascript.info)](https://zh.javascript.info/event-delegation))。

该思维是这样的：当需要为一套体系内的每个元素设定事件监听，整体来完成一个任务时，可以考虑不必为每一个元素都设置一个事件监听，这样监听数量过多，不仅编程复杂，而且影响浏览器性能。

可以只在整体框架上设置一个监听，用事件的 `event.target` 属性来区分每一个被触发的元素，然后定义元素各自不同的行为，这样就相当于为每一个元素定义了一个自己的事件监听。

### 

### 2.3.1 行为模式

利用事件委托，将“行为（behavior）”以 **声明方式** 添加到具有特殊特性（attribute）和类的元素中。

行为模式分为两个部分：

1. 我们将自定义特性添加到描述其行为的元素。
2. 用文档范围级的处理程序追踪事件，如果事件发生在具有特定特性的元素上 —— 则执行行为（action）。



例如如下形式：

```html
<input type="button" value="1" data-counter>    // data-counter：一个 “自定义特性”，一个“特定声明”

<script>
document.addEventListener('click', function(event) {      // 文档范围级的事件监听

    if (event.target.dataset.counter != undefined) {      // 如果这个特性存在，则执行“特定行为”
      // ...
    }
});
</script>
```



### 2.3.2 总结

事件委托是 DOM 事件最有用的模式之一。它通常用于为许多相似的元素添加相同的处理，但不仅限于此。

算法：

1. 在容器（container）上放一个处理程序。
2. 在处理程序中 —— 检查源元素 `event.target`。
3. 如果事件发生在我们感兴趣的元素内，那么处理该事件。

好处：

- 简化初始化并节省内存：无需添加许多处理程序。
- 更少的代码：添加或移除元素时，无需添加/移除处理程序。
- DOM 修改 ：我们可以使用 `innerHTML` 等，来批量添加/移除元素。

局限性：

- 事件必须冒泡。有些事件不会冒泡，谨慎使用 `event.stopPropagation()`。
- 增加 CPU 负载。因为容器级别的事件监听，会对容器中任意位置的事件做出反应，而不管我们是否对该事件感兴趣。但是，通常负载可以忽略不计，所以我们不考虑它。



## 2.4 浏览器默认行为

- 点击一个链接 —— 触发导航（navigation）到该 URL。
- 点击表单的提交按钮 —— 触发提交到服务器的行为。
- 在文本上按下鼠标按钮并移动 —— 选中文本。

这些都是浏览器提前设置好的事件监听，也就是所谓“浏览器默认行为”。



### 2.4.1 阻止默认行为

以下两种方式可以阻止浏览器执行默认行为。

- 主流方式：使用 `event` 对象。有一个 `event.preventDefault()` 方法。
- 使用 `on<event>`设定事件：`return false` 。事件的设置不是 `addEventListener`。



例：点击链接不会触发导航（navigation），浏览器不会执行任何操作：

```html
<a href="/" onclick="event.preventDefault()">here</a>		// 主流方法
<a href="/" onclick="return false">Click here</a>			// 利用 return false
```

注：事件处理程序返回的值，除了`false`，都会被忽略。

- 唯一的例外是从使用 `on<event>` 分配的处理程序中返回的 `return false`。

- 在所有其他情况下，`return` 值都会被忽略。并且，返回 `true` 没有意义。



### 2.4.2 passive - 告知不会阻止

当被触发的事件，需要执行浏览器默认行为的时候，则事件监听被被触发后，会先执行所有用户定义的事件回调函数，然后再判断是否有 `event.preventDefault()`来阻止浏览器默认行为。这样导致的结果是，浏览器默认行为的执行，可能会有些许“延迟”和“卡顿” 。

所以，`addEventListener` 的可选项 `passive: true` 参数，告知了浏览器 **一定** 会执行浏览器默认行为，那么这样浏览器就不会一直等待，确认没有 `event.preventDefault()`来阻止浏览器默认行为，才能执行默认行为了。



比如：再移动设备上的用户手指滚动行为 `touchmove` ，浏览器默认行为会导致屏幕滚动。当浏览器检测到 `touchmove` 时，它必须首先执行事件回调函数内的代码，然后如果没有任何地方调用 `preventDefault`，则页面可以继续滚动。这可能会导致 UI 中不必要的延迟和“抖动”。

`passive: true`  选项告诉浏览器，处理程序不会取消滚动。然后浏览器立即滚动页面以提供最大程度的流畅体验，并通过某种方式处理事件。



### 2.4.3 defaultPrevented - 告知已阻止

如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 `true`，否则为 `false`。

程序员可以通过该属性判断是否已阻止浏览器默认行为。



常见用法：

之前提到过，利用 `event.stopPropagation()` 来阻止事件冒泡，很有很多负面效果。此时可以用 `event.defaultPrevented` 代替。

用 `event.defaultPrevented` 来通知其他事件监听，该事件已经被处理过。



## 2.5 创建自定义事件

内建事件类形成一个层次结构（hierarchy），类似于 DOM 元素类。根是内建的 [Event](http://www.w3.org/TR/dom/#event) 类。

创建 `Event` 对象，：

```javascript
let event = new Event(type[, options]);
```

参数：

- **type** —— 事件类型，可以是像这样 `"click"` 的字符串，或者我们自己的像这样 `"my-event"` 的参数。

- **options** —— 具有两个可选属性的对象：

  - `bubbles: true/false` —— 如果为 `true`，那么事件会冒泡。
  - `cancelable: true/false` —— 如果为 `true`，那么“默认行为”就会被阻止。如果不是 `true`，`preventDefault` 将不起作用。

  默认情况下，以上两者都为 false：`{bubbles: false, cancelable: false}`。



### 2.5.1 派发事件

`addEventListener(type,event)` 是设置监听一个事件，当触发事件时，会执行回调函数。

`elem.dispatchEvent(event)` 当被执行时，事件监听就会监听到，然后该事件就会被触发。

- `elem.dispatchEvent(event)`：把事件在某个元素上“运行”。

参数

- `event` ：要被派发的事件对象。
- `elem` ：被用来初始化 事件 和 决定将会触发 目标.

返回值

- 如果该事件是可取消的 (`cancelable:true`)，该事件的事件处理方法曾经调用了 `Event.preventDefault()`，则：

  返回值为`false`；否则返回`true`。

举例：

```html
<button id="elem" onclick="alert('Click!');">Autoclick</button>

<script>
  // ... get "elem" element
  let event = new Event("click");
  elem.dispatchEvent(event);
</script>
```



### 2.5.2 自定义

这是一个摘自于 [UI 事件规范](https://www.w3.org/TR/uievents) 的一个简短的 UI 事件类列表：

- `UIEvent`
- `FocusEvent`
- `MouseEvent`
- `WheelEvent`
- `KeyboardEvent`
- …

如果想创建这样的事件，应该使用它们的名称创建，而不是 `new Event`。例如，`new MouseEvent("click")`。

- 正确的构造器允许为该类型的事件指定**标准属性**，而 `new Event` 不允许这样做。
- 比如：鼠标事件的 `clientX/clientY` ：

```javascript
let event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); // 100
```



### 2.5.3 自定义事件

自定义事件类型，使用 `new CustomEvent`。从技术上讲，[CustomEvent](https://dom.spec.whatwg.org/#customevent) 和 `Event` 基本一样，除了：

- 在第二个参数（是一个对象）中，`new CustomEvent` 可以添加一个附加的属性 `detail`，用来给事件传递信息额外的信息。

例如：

```html
<h1 id="elem">Hello for John!</h1>

<script>
  // 事件附带给处理程序的其他详细信息
  elem.addEventListener("hello", function(event) {
    alert(event.detail.name);
  });

  elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "John" }
  }));
</script>
```



### 2.5.4 取消默认行为

`event.preventDefault()` 会取消事件的默认行为。在自定义事件中，如果执行了该函数，则`dispatchEvent(event)`事件派发会返回 `false`，然后程序员可以根据返回的 `false` 或者 `true` 来决定接下来的行为是否应该继续。



许多浏览器事件都有“默认行为”，例如，导航到链接，开始一个选择，等。

对于新的，自定义的事件，绝对没有默认的浏览器行为，但是分派（dispatch）此类事件的代码可能有自己的计划，触发该事件之后应该做什么。

通过调用 `event.preventDefault()`，事件处理程序可以发出一个信号，指出这些行为应该被取消。

在这种情况下，`elem.dispatchEvent(event)` 的调用会返回 `false`。那么分派（dispatch）该事件的代码就会知道不应该再继续。

让我们看一个实际的例子 —— 一只隐藏的兔子（可以是关闭菜单或者其他）。

在下面，你可以看到一个在其上分派了 `"hide"` 事件的 `#rabbit` 和 `hide()` 函数，以使所有感兴趣的各方面都知道这只兔子要隐藏起来。

任何处理程序都可以使用 `rabbit.addEventListener('hide',...)` 来监听该事件，并在需要时使用 `event.preventDefault()` 来取消该行为。然后兔子就不会藏起来了：

```html
<pre id="rabbit">
  |\   /|
   \|_|/
   /. .\
  =\_Y_/=
   {>o<}
</pre>
<button onclick="hide()">Hide()</button>

<script>
  function hide() {
    let event = new CustomEvent("hide", {
      cancelable: true // 没有这个标志，preventDefault 将不起作用
    });
    if (!rabbit.dispatchEvent(event)) {
      alert('The action was prevented by a handler');
    } else {
      rabbit.hidden = true;
    }
  }

  rabbit.addEventListener('hide', function(event) {
    if (confirm("Call preventDefault?")) {
      event.preventDefault();
    }
  });
</script>
```

这代码的执行顺序是这样的：

1. 为 button 绑定一个click事件，当button被click时，执行hide方法
2. 为 rabbit 绑定一个hide事件，当rabbit收到hide事件时，弹出confirm
3. 初始化程序执行完毕

此后进入事件循环等待各个绑定的事件被触发

用户点击了button，触发了hide事件，依次执行了

1. 定义了一个自定义事件，事件名为 hide
2. 发布该事件
3. 绑定了hide事件的ribbit接收到了该事件，进入之前预设的逻辑，弹出confirm



### 2.5.5 事件的同步

通常事件是在队列中处理的。

也就是说，如果浏览器正在处理某个 `onclick`，这时发生了一个新的事件（例如鼠标移动了），那么它的处理程序会被排入队列，相应的 `mousemove` 处理程序将在 `onclick` 事件处理完成后被调用。

例外：一个事件是在另一个事件中发起的。

- 例如，在某个事件中使用 `dispatchEvent`，这类事件将会被立即处理。在新的事件处理程序被调用之后，才会恢复到先前尚未执行完的事件处理程序中。
- 下面例子的执行顺序： 1 -> nested -> 2

```html
<button id="menu">Menu (click me)</button>

<script>
  // 在 1 和 2 之间触发
  document.addEventListener('menu-open', () => alert('nested'));  //先为Menu按钮添加一个 menu-open 事件触发
   
  menu.onclick = function() {
    alert(1);

    menu.dispatchEvent(new CustomEvent("menu-open", {  //派发（触发）刚自定义的 menu-open 事件
      bubbles: true
    }));

    alert(2);
  };
</script>
```

- 如果希望让 `onclick` 不受 `menu-open` 或者其它嵌套事件的影响，优先被处理完毕。

  那么，我们就可以将 `dispatchEvent`（或另一个触发事件的调用）放在 `onclick` 末尾，或者最好将其包装到零延迟的 `setTimeout` 中：

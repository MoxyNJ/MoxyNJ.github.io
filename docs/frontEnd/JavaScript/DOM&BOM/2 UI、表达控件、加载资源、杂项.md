---
title: UI、表达控件、加载资源、杂项
sidebar_position: 2
date: 2022-07-01
tags: [DOM、BOM]
---



# 3 UI 事件

## 3.1 鼠标事件

该事件不仅来自鼠标，也可能是其他兼容性设备模拟鼠标操作（平板、手机）。

### 3.1.1 常见鼠标事件

鼠标：

- `mousedown/mouseup` : 在元素上点击 / 释放。

- `mouseover/mouseout` : 从一个元素上移入 / 移出。

- `mousemove` : 在元素上的移动就会触发。

- `click` : 鼠标左键触发。在发生 `mousedown` 及 `mouseup` 这两个事件后，会触发该事件。

- `dblclick` : 在短时间内双击同一元素后触发，很少使用。

- `contextmenu` : 鼠标右键按下时触发。
  - 还有其他打开菜单的方式。比如特定的键盘按键也会触发，因此它不完全是鼠标事件。

### 3.1.2 事件顺序

鼠标事件的触发之间是有先后顺序的，比如：

- 一次左键单击事件：`mousedown` --> `mouseup` --> `click`
- 一次左键双击事件：`mousedown` --> `mouseup` --> `click` --> `mousedown` --> `mouseup` --> `click` --> `dblclick`



### 3.1.3 事件属性 - 鼠标按钮

点击事件（`mousedown`, `mouseup`, `click`, `dblclick`, `contextmenu`）都会拥有一个 `event.button` 属性，用来保存触发事件的鼠标按键状态：

| 鼠标按键状态     | `event.button` |
| :--------------- | :------------- |
| 左键 (主要按键)  | 0 （常见）     |
| 中键 (辅助按键)  | 1              |
| 右键 (次要按键)  | 2 （常见）     |
| X1 键 (后退按键) | 3              |
| X2 键 (前进按键) | 4              |

### 

### 3.1.4 事件属性 - 组合键

鼠标事件包含了组合键信息，以下是事件属性。如果在事件时，按下了相应的按键，则对应会置为 `true`。

- `event.shiftKey`：Shift；
- `event.altKey`：Alt（或对于 Mac 是 Opt）；
- `event.ctrlKey`：Ctrl；
- `event.metaKey`：对于 Mac 是 Cmd。



注意：在 Mac 上，通常使用 cmd 代替 ctrl。所以，在判断用户是否按下 ctrl 组合键时，要这样检查：

- `if (event.ctrlkey || event.metakey)`



### 3.1.5 事件属性 - 坐标

所有的鼠标事件都提供了两种形式的坐标：

1. 相对于视口的坐标：`clientX` 和 `clientY`。
2. 相对于文档的坐标：`pageX` 和 `pageY`。



### 3.1.6 干扰

鼠标事件有事会有副作用，在某些界面中可能会出现干扰：

- 双击事件：比如双击一个文本，除了会触发我们设定的 `dblclick` 事件外，还会选择文本。
- 按下鼠标：在按下鼠标左键，不松开的情况下拖动鼠标，也会触发选中文本。



解决方案，阻止 `mousedown` 事件中，浏览器的默认行为：

- 使用 `return false`：`<b ondblclick="alert('Click!')" onmousedown="return false">XXXX</b>`



#### 3.1.6.1 防止复制

额外的tips，如何防止浏览器中，用户的复制行为，保护文本不被复制：

```html
<div oncopy="alert('不允许复制!'); return false">
    这里是不允许复制的文本内容。
</div>
```

使用 `oncopy` 特性，返回 `false`，在用户尝试右键点击复制的时候，就会触发 `oncopy` 中的代码，弹出提示框，最终会失败。



## 3.2 移动鼠标

- `mousedown/mouseup` : 在元素上点击 / 释放。

- `mouseover/mouseout` : 从一个元素上移入 / 移出。



### 3.2.1 事件属性 - event.relatedTarget

-  `relatedTarget` 属性是对 `target` 的补充。
-  `relatedTarget` 的值可以为 `null` ，表明可能是鼠标从另一个窗口过来（over）、或移动到了另一个窗口上（out）。

当鼠标从 A 元素离开，已经移动到了 B 元素时：

-  **对于`mouseover`：**
  - **`event.target` ：鼠标移到的当前元素 —— B 元素。**
  - `event.relatedTarget`：鼠标之前所处的元素 —— A 元素。

- 对于`mouseout` ，与 over 相反，记住 over 就行：
  - `event.target` ：鼠标之前所处的元素 —— A元素。
  - `event.relatedTarget` ：鼠标移到的当前元素 —— B 元素。



记： `target` 属性是我们的主要目的，`relatedTarget` 属性是我们为了方便而增添的附加信息。

- 所以，对于 `mouseover`  我们主要关注的是也就是当前鼠标所处的位置（over），这个值自然是保存到 `target` 中。



### 3.2.3 元素的跳过

`mousemove`事件，是随着鼠标的移动而触发。浏览器会间隔很小的周期，不断的重复检查鼠标的坐标位置，用以确定是否触发 `mousemove` 事件。

- 通过`mousemove` 事件，浏览器就可以计算出 `mouseover` 事件；通过 `mouseover` 事件，浏览器就可以监听到 `mouseout` 事件。



这意味着，当鼠标移动的速度非常快，可能在这个“小的周期”中，鼠标一下划过过了多个元素，这就会导致浏览器没有及时检测到鼠标具体划过了哪几个元素，造成了元素的跳过。

 ![image-20210703091117594](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210703091117594.png)

- 如果鼠标从上图所示的 `#FROM` 快速移动到 `#TO` 元素，则中间的 `<div>`元素可能会被跳过。`mouseout` 事件可能会在 `#FROM` 上被触发，然后立即在 `#TO` 上触发 `mouseover`。

- 如果 `mouseover` 被触发了，则 `mouseout` 也一定会触发，这两者是一一对应的。
  - 如果鼠标指针“正式地”进入了一个元素（生成了 `mouseover` 事件），那么一旦它离开，我们就会得到 `mouseout`。



### 3.2.4 mouseover 的细节

先说原则：

- 鼠标指针移动到嵌套最多的那个元素上，也就是视觉上最突出的那个元素上（z-index最大的那个），就会触发 `mouseover` 事件。
- 可以非常笼统的说，在视觉上分割出的区域（子元素和父元素在视觉上是两个区域），鼠标在这两个区域移动，就会触发 over，out

以下分两种情况讨论：

#### 3.2.4.1 父元素 ==> 子元素

 ![image-20210703092122398](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210703092122398.png)

当鼠标从父元素移动到子元素时，在父元素上就会触发 `mouseout` 事件，在子元素上就会触发 `mouseover` 事件。

- 如果设置了事件会发生捕获，则子元素上如果设置了`mouseover`事件，也会被触发。



#### 3.2.4.2 子元素 ==> 父元素

 ![image-20210703092132071](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210703092132071.png)

当鼠标从子元素移动到父元素是，在子元素上就会触发 `mouseout` 事件，在父元素上就会触发 `mouseover` 事件。

- 与此同时，由于默认情况下事件会**冒泡**。因此，如果父元素上设置了 `mouseout`的事件处理程序，也会触发 `mouseout` 的回调。
  - 注意：此时触发的 `mouseout` 是归属于子元素的，所以虽然因冒泡在父元素上也触发了该事件，但其属性 `event.target` 的值，依然同子元素上完全相同。

因此，如果要判断鼠标是否离开了父元素和其嵌套的子元素，不能单单判断父元素上是否触发了 `mouseout`，而是要具体判断：

- `event.target` 的值是不是父元素。如果是，才能证明触发事件的元素，就是父元素本身。
- 或，`event.relatedTarget` 的值是不是子元素。如果是，证明鼠标是从子元素移动到父元素上，而不是从外部移动到父元素。

- 或，`mouseenter` 和 `mouseleave` 事件。



### 3.2.5 `mouseenter` 和 `mouseleave`

事件 `mouseenter/mouseleave` 类似于 `mouseover/mouseout`。它们在鼠标指针进入/离开元素时触发。

但是有两个重要的区别：

1. enter 和 leave 事件，元素内部与后代之间的转换不会产生影响。
2. 同时，事件 `mouseenter/mouseleave` 不会冒泡。



当鼠标指针进入一个元素时，会触发 `mouseenter`，当鼠标指针离开该元素时，事件 `mouseleave` 才会触发。

- 与 over/out 的显著区别，就是没有了子元素嵌套的概念。只要还处在父元素中，即便是进入了更深的子元素，也依然不会触发 `mouseleave` 直到完全离开的父元素，才会触发。



### 3.2.6 事件委托

利用 `mouseover` 和 `mouseout` 可以建立事件委托，简单的例子如下：

在列表的 `<ul>` 上设置 `mouseover` 监听，利用对 `event.target`  属性值，可以判断出当前鼠标在其子元素中的哪一个位置。

```html
<ul id="test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<script>
let ul = document.querySelector('#test');
ul.onmouseover = function(event) {
    let text = event.target.firstChild;	 // 获取li标签中包含的文本值
    console.log(text);	// 当鼠标移动到某个li中，就会监听到，然后在控制台输出文本值："1", "2"或"3"。
}
</script>
```

相反，`mouseenter` 和 `mouseleave` 由于忽略了父子元素的关系，不可以使用事件委托来监听。

## 3.3 拖放鼠标

### 3.3.1 算法

鼠标的拖放，简单来说就是三个步骤：鼠标按下、鼠标拖动、鼠标释放，对应了三个事件监听：`mousedown`, `mousemove`, `mouseup`。



基础的拖放算法，在触发相关事件时，通常要做出如下行为：

1.  `mousedown` ： 设置好准备移动的元素，可能是创建一个副本，也可能是设置他的`position: absolute`。
2.  `mousemove` ：通过更改 `position:absolute` 情况下的 `left/top` 来移动它。
3.  `mouseup` ：执行与完成的拖放相关的所有行为。



有好几个应用，值得[反复记忆]([鼠标拖放事件 (javascript.info)](https://zh.javascript.info/mouse-drag-and-drop))。



## 3.4 指针事件

### 3.4.1 历史

- 很早以前，只有鼠标事件。

- 引入了触摸事件。有了手机和平板电脑，触摸设备比鼠标具有更多的功能。例如，多点触控。鼠标事件并没有相关属性来处理这种多点触控。

  例如 `touchstart`、`touchend` 和 `touchmove`，它们具有特定于触摸的属性（这里不再赘述这些特性，因为指针事件更加完善）。

  不过这还是不够完美。很多输入设备（如触控笔）都有自己的特性。而且同时维护鼠标事件和触摸事件的代码，非常笨重。

- 引入了全新的规范「指针事件」。为各种指针输入设备提供了一套统一的事件。

注： IE 10 或 Safari 12 或更低的版本不兼容指针事件。



### 3.4.2 指针事件类型

指针事件的命名方式和鼠标事件类似：

| 指针事件             | 类似的鼠标事件 |
| :------------------- | :------------- |
| `pointerdown`        | `mousedown`    |
| `pointerup`          | `mouseup`      |
| `pointermove`        | `mousemove`    |
| `pointerover`        | `mouseover`    |
| `pointerout`         | `mouseout`     |
| `pointerenter`       | `mouseenter`   |
| `pointerleave`       | `mouseleave`   |
| `pointercancel`      | -              |
| `gotpointercapture`  | -              |
| `lostpointercapture` | -              |



### 3.4.3 指针事件属性

指针事件具备和鼠标事件完全相同的属性，包括 `clientX/Y` 和 `target` 等。

以及一些其他属性：

- `pointerId` ：触发当前事件的指针唯一标识符。浏览器生成的，解决多指针同时触发的问题。
- `pointerType` ：指针的设备类型，必须为字符串。可以是：“mouse”、“pen” 或 “touch”。
  - 我们可以针对不同类型的指针输入做出不同响应。
- `isPrimary` ：当指针为首要指针（多点触控时按下的第一根手指）时为 `true`。



有些指针设备会测量接触面积和点按压力（指压在触屏上），有**很少使用的属性**配合：

- `width` ：指针（例如手指）接触设备的区域的宽度。对于不支持的设备（如鼠标），这个值总是 `1`。
- `height` ：指针（例如手指）接触设备的区域的长度。对于不支持的设备，这个值总是 `1`。
- `pressure` ：触摸压力，一个介于 0 到 1 之间的浮点数。对于不支持的设备，这个值总是 `0.5`（按下时）或 `0`（未按下时）。
- `tangentialPressure` ：归一化后的切向压力（tangential pressure）。
- `tiltX`, `tiltY`, `twist` ：针对触摸笔的几个属性，用于描述笔和屏幕表面的相对位置。



### 3.4.4 多点触控

我们可以通过 `pointerId` 和 `isPrimary` 属性的帮助，处理多点触控。

当用户用一根手指触摸在触摸屏的某个位置，然后将另一根手指放在该触摸屏的其他位置时，会发生以下情况：

1. 第一个手指触摸：
   - `pointerdown` 事件触发，`isPrimary=true`，并且被指派了一个 `pointerId`。
2. 第二个和后续的更多个手指触摸（假设第一个手指仍在触摸）：
   - `pointerdown` 事件触发，`isPrimary=false`，并且每一个触摸都被指派了不同的 `pointerId`。

最终，如果有五个手指放在了屏幕上，我们会得到 5 个`pointerdown` 事件，和 5 个`pointerId`。





### 3.4.1 指针中断 - pointercancel

`pointercancel` 事件在触发后，会取消当前处在活跃状态的指针。该事件常常用在主动中断指针，使被中断的指针不会继续触发其他指针事件：

导致指针中断的可能原因如下：

-   指针设备硬件在物理层面上被禁用。
-   设备方向旋转（例如给平板转了个方向）。
-   浏览器开始处理这一交互。比如将其看作是一个专门的鼠标手势或缩放操作等。
    -   通常，一个对物体的拖拽操作，浏览器就会接管，主动触发 `pointercancel` 事件。
    -   我们可以通过阻止浏览器默认行为，来防止 `pointercancel` 事件的触发。 



如何阻止阻止浏览器默认行为，来防止 `pointercancel` 事件的触发：

-   阻止原生的拖放操作发生：
    -   JS 中设置： `someElement.ondragstart = () => false` ，也适用于鼠标事件。
-   阻止其他触摸相关的浏览器默认操作：
    -   CSS 中设置： `#someElement { touch-action: none }` 来阻止它们。



### 1.1.2 指针捕获 - setPointerCapture()

指针捕获允许一个特定的指针事件([`PointerEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/PointerEvent)) 事件从一个事件触发时候的目标重定位到另一个目标上。这个功能可以确保一个元素可以持续的接收到一个pointer事件，即使这个事件的触发点已经移出了这个元素（比如，在滚动的时候）。

比如，在设置拖动一个小方块（box）的时候，指针事件在 document 上监听，一旦监听到指针处在 box 上时，可以使用指针捕获 (`setPointerCapture`) 把 `event.target` 重定向（指向）到 box 上，这样的好处有：

-   其他元素将不能再作为该 pointer 事件的目标了，其他元素的 `pointerover`, `pointerout` `pointerenter`, 和`pointerleave` 事件将不会被触发。接下来所有的指针事件，都会被重定向到 box 上。
-   确保 box 可以持续的接收到一个pointer事件，即使这个事件的触发点已经移出了这个元素。
    比如在拖动划动条，鼠标经常会离开划动块儿的区域。利用指针捕获可以确保指向 box 的 pointer 事件一直在活跃状态。
-   即使用户在整个文档上移动指针，事件处理程序也将仅在 `thumb` 上被调用。
    此外，事件对象的坐标属性，例如 `clientX/clientY` 仍将是正确的，捕获仅影响 `target/currentTarget`。



语法：

`elem.setPointerCapture(pointerId)` ：指针捕获。

-   将给定的 `pointerId` 绑定到 `elem`。
    在调用之后，所有具有相同 `pointerId` 的指针事件，都将 `elem` 作为目标（就像事件发生在 `elem` 上一样），无论 `elem` 在文档中的实际位置是什么。

`elem.releasePointerCapture(pointerId)`：取消指针捕获。



绑定会在以下情况下被移除：

-   当 `pointerup` 或 `pointercancel` 事件出现时；
-   当 `elem` 被从文档中移除后；
-   当 `elem.releasePointerCapture(pointerId)` 被调用后。



## 3.5 键盘事件

`keydown` 事件：当一个按键被按下时触发；

`keyup` 事件：当一个按键被释放时触发。



### 3.5.1 事件对象

`event.key` 属性：获取当前按键的字符，会受大小写 (shift) 的影响而保存不同字母。

`event.code` 属性：获取当前按键的“物理按键代码”。和按键一一对应，不会改变。

-   区分，
    -   `event.code` 准确地标明了哪个键被按下。如两个 Shift 键，会区分`"ShiftRight"`， `"ShiftLeft"`。
    -   `event.key` 只标明按键的“含义”，即它是什么（一个 `“Shift”`），随着OS不同会因此改变：`cmd`。



比如，按键 “Z” 的效果：

| Key     | `event.key` | `event.code` |
| :------ | :---------- | :----------- |
| Z       | `z`（小写） | `KeyZ`       |
| Shift+Z | `Z`（大写） | `KeyZ`       |

更多举例：

| Key       | `event.key` | `event.code`                |
| :-------- | :---------- | :-------------------------- |
| F1        | `F1`        | `F1`                        |
| Backspace | `Backspace` | `Backspace`                 |
| Shift     | `Shift`     | `ShiftRight` 或 `ShiftLeft` |

`event.code` 按键代码：

-   字符键： `"Key<letter>"`：`"KeyA"`，`"KeyB"` 等。
-   数字键：`"Digit<number>"`：`"Digit0"`，`"Digit1"` 等。
    -   特殊按键，为按键的名字：`"Enter"`，`"Backspace"`，`"Tab"`，`"ShiftLeft"` 等。

-   更多：[UI 事件代码规范](https://www.w3.org/TR/uievents-code/) 。



### 3.5.2 兼容性问题

`event.key` 会受到不同OS平台的影响，而呈现不同的效果。例如在使用“撤销”组合按下时：

-   MacOS：是 `Cmd + Z`。
-   Windows：是 `Ctrl + Z`。



`event.code` 会受到不同键盘布局的影响，相同的按键位置却收到不同的结果，同样在“撤销”组合按下时：

-   美式布局 (QWERTY)：是正常的，按下 Z 时，`event.code` 等于 `KeyZ`。
-   德式布局 (QWERTZ)：按下 Y 时，`event.code` 也等于 `KeyZ`。

 ![img](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210704115239674.png)

因此，`event.code` 可能由于特殊键盘布局，会错误的匹配字符。幸运的是，这种情况只发生在几个代码上，例如 `keyA`，`keyQ`，`keyZ`，可以在 [规范](https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system) 中找到该列表。

总结：

-   如果频繁切换语言（德式键盘、美式键盘），使用 `event.key` 更好；

-   如果想兼容更多操作系统（MacOS、Win），使用 `event.code` 更好。



### 3.5.3 自动重复

触发自动重复， `event.repeat` 属性会被设置为 ` true`。

如果按下一个键足够长的时间，它就会开始“自动重复”：

-   `keydown` 会被一次又一次地触发；
-   当按键被释放时，最终会得到 `keyup`。因此，有很多 `keydown` 却只有一个 `keyup` 是很正常的。

-   同时，对于由自动重复触发的事件，`event` 对象的 `event.repeat` 属性被设置为 `true`。



### 3.5.6 浏览器默认行为

不同的按键，会对应不同的浏览器默认行为，例如：

-   出现在屏幕上的一个字符（最明显的结果）。
-   一个字符被删除（Delete 键）。
-   滚动页面（PageDown 键）。
-   浏览器打开“保存页面”对话框（Ctrl+S）
-   ……。



阻止对 `keydown` 的默认行为可以取消大多数的行为，但基于 OS 的特殊按键除外。

-   例如，在 Windows 中，Alt+F4 会关闭当前浏览器窗口。同时，这无法通过在 JavaScript 中阻止默认行为来阻止它。



备注：过去曾经有一个 `keypress` 事件，还有事件对象的 `keyCode`、`charCode` 和 `which` 属性。这些目前都不再使用，放在这里是为了完备性。



## 3.6 滚动事件

`scroll` 事件：监听对页面或元素的滚动，例如：

-   根据用户在文档中的位置显示/隐藏其他控件或信息。
-   当用户向下滚动到页面末端时加载更多数据。



防止滚动：

在导致滚动的事件上，例如在 pageUp 和 pageDown 的 `keydown` 事件上，使用 `event.preventDefault()` 。



# 4 表单和控件

## 4.1 表单

### 4.1.1 navigation - 导航属性

这些导航（navigation）属性用于获取文档 document 中的所有表格和其成员。其并不依赖于标签的结构。

-   所有的表单，无论在文档中的什么位置，都可以通过 `document.forms` 直接获取到。
-   所有的控件元素，无论在表单中有多深，都可以通过 `form.elements` 直接获取到。



`document.forms`：保存了文档中的所有表单，是一个特殊的集合。

该集合是**有序的**、**被命名的**，其具体的文档访问，可以：

-   按名称访问：`document.forms.someElem`，访问名称为 someElem 的表单。
-   按下标访问：`document.forms[3]`，访问文档中第四个表单。



`form.elements`：保存了 form 表单中的所有元素/成员，是一个特殊的集合。其具体的成员访问，可以“

-   按名称访问：`form.elements.one`，访问名称为 one 的控件。
    -   如果元素的名称有重复的，会返回一个集合，这很常见。
-   缩写名称访问：`form.one` ，访问名称为 one 的控件。
-   缩写下标访问：`form[1]`，访问第二个控件。



`element.form`：保存了该成员/元素所属的表单，即可以通过该属性反向引用表单。

```html
<form name="someOne">
  <input name="one" value="1">
  <input name="two" value="2">
  <input name="two" value="2">
</form>

<script>
  let form = document.forms.my		// 获取 my表单
  let elem = form.elements.one		// 获取 one元素
  let elems = form.elements.two		// 获取的元素是一个集合，保存了两个 two元素
  
  console.log(form === elem.form) // true 可以通过元素反向访问表单
</script>
```



### 4.1.2 表单元素

#### 4.1.2.1 input 和 textarea

`input.value`：获取`<input>`标签的对应内容值，字符串。

`textarea.value`：获取`<textarea>`标签的对应内容值，字符串。

`input.checked`：获取`<checked>`标签（复选框）的选中状态，布尔值（true、false）。



#### 4.1.2.2 select 和 option

HTML `<select>` 标签，是一个提供选项菜单的控件：

 `<select>` 元素有 3 个重要的属性：

1.  `select.options`：`<option>` 的子元素的集合，即菜单的可选项；
2.  `select.value`：当前所选择的 `<option>` 的 `value` 值，也就是已选择的 `<option>`；
3.  `select.selectedIndex` ：当前所选择的 `<option>` 的编号。

它们提供了三种为 `<select>` 设置 `value` 的不同方式：

1.  找到对应的 `<option>` 元素，并将 `option.selected` 设置为 `true`。
2.  将 `select.value` 设置为对应的 `value`。
3.  将 `select.selectedIndex` 设置为对应 `<option>` 的编号。

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  // 所有这三行做的是同一件事
  select.options[2].selected = true;
  select.value = 'banana';
  select.selectedIndex = 2;
</script>
```

 ![img](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210704161729986.png)

图片可以看到，默认的 `<option>` 是 Banana。



快速创建 `<option>` 元素：

-    `<option>` 元素就是在`<select>`, `<optgroup>`, `<datalist>` 元素中包含的项。 

`option = new Option(text, value, defaultSelected, selected);`

参数：

-   `text`：`<option>` 中的文本，
-   `value` ：`<option>` 的 `value`，
-   `defaultSelected` ：如果为 `true`，那么 `selected` HTML-特性（attribute）就会被创建，
-   `selected` ：如果为 `true`，那么这个 `<option>` 就会被选中。
    -   通常，这后两个值都设置为 `true`，或者都不设置（与设置为 `false` 是一样的）。

`<option>` 元素具有以下属性：

-   `option.selected`：`<option>` 是否被选择。
-   `option.index`：`<option>` 在其所属的 `<select>` 中的编号。
-   `option.text`：`<option>` 的文本内容（可以被访问者看到）。



## 4.2 聚焦

focus：为聚焦。当聚焦到一个元素的时候，通常隐含了 “正准备在此处接受数据”，此时常运行代码，用以初始化来接受数据。

blur：为失去焦点。当一个元素失去焦点的时候，通常隐含了 “此处的数据已经输入完成”，此时运行代码检查到该状态，可以把数据保存起来。



获得焦点：

-   `autofocus`：一个 HTML 特性（attribute），可以让焦点在网页加载时默认落在一个元素上。
-   鼠标：当用户点击某个元素时，该元素将会获得聚焦（focus）。
-   键盘：当用户使用键盘上的 `Tab` 键选中时，该元素将会获得聚焦（focus）。
-   JS代码：`elem.focus()` 和 `elem.blur()` 设置和移除元素上的焦点。
-   ....



失去焦点：

-   鼠标：用户点击了其它位置。
-   键盘：用户按下 `Tab`。
-   JavaScript：一个 `alert` 会将焦点移至自身，因此会导致元素失去焦点（触发 `blur` 事件）。
    -   当 `alert` 对话框被取消时，焦点又回重新回到原元素上（触发 `focus` 事件）。
-   JavaScript：聚焦的元素被从 DOM 中移除，会导致焦点丢失（触发 `blur` 事件）。
    -   如果稍后它被重新插入到 DOM，焦点也不会回到它身上（**不**触发 `focus` 事件）。

同时，当元素聚焦时，会触发 `focus` 事件，当元素失去焦点时，会触发 `blur` 事件。



### 4.2.1 focus / blur 事件

举例，当需要用户输入邮箱时，可以使用：

-   `blur` 事件的处理程序，检查用户是否输入正确的电子邮箱，如果不是，就给用户一个提示；
-   `focus`事件的处理程序，当用户聚焦到输入框（`<input>`）时，就隐藏用户提示。

```html
<style>
  .invalid { border-color: red; }
  #error { color: red }
</style>

Your email please: <input type="email" id="input">
<div id="error"></div>

<script>
input.onblur = function() {
  if (!input.value.includes('@')) {       // 非常简陋的验证，是不是一个邮箱
    input.classList.add('invalid');				// input标签添加 无效属性，CSS代码中有，变为红色框。
    error.innerHTML = 'Please enter a correct email.'  // 提示用户
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');			// 移除 "error" 指示，因为用户想要重新输入一些内容
    error.innerHTML = "";									// 删除提示
  }
};
</script>
```

输入正确：

 ![img](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210704163956084.png)

输入错误：

 ![img](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210704164018124.png)



`elem.focus()` 和 `elem.blur()` 方法可以设置和移除元素上的焦点。

-   注意，无法通过在 `onblur` 事件处理程序中调用 `event.preventDefault()` 来“阻止失去焦点”，
    因为元素先失去焦点，然后才触发 `onblur` 事件。`onblur` 事件处理程序是在元素失去焦点 **之后** 运行的。



### 4.2.2 允许在任何元素上聚焦：tabindex

许多元素浏览器默认是不允许聚焦的，使用 `tabindex` 则让这些不支持聚焦的元素，变得可以聚焦。

-   ` <div>`，`<span>` 和 `<table>` ，默认是不能被聚焦的。但是可以通过该 HTML 元素特性改变。



该特性的要点是点击 `tab` 切换聚焦的顺序问题，按照一下优点级依次切换：

1.  `tabindex ≥ 1` ：数值为正数的为第一等级，数字越小，越排在前面；
2.  `tabindex = 0`  + 默认有聚焦的元素（如`<input>`）：为第二等级，按照文档先后顺序决定切换次序。
3.  `tabindex = -1`：只允许以编程的方式聚焦（如`elem.focus()`），用户鼠标也可以，但`tab` 无法聚焦。

举例：

```html
<ul>
  <li tabindex="1">One</li>
  <li tabindex="0">Zero</li>
  <li tabindex="2">Two</li>
  <li tabindex="-1">Minus one</li>
</ul>

<style>
  li { cursor: pointer; }
  :focus { outline: 1px dashed green; }
</style>
```

-   顺序就像这样：`1 - 2 - 0`。
-   `Minus one`  不可以被 `tab` 聚焦，但是可以被
-   通常 `<li>` 不支持聚焦，但 `tabindex` 可以使它能聚焦，并且还带有事件以及 `:focus` 样式。



## focus/blur 委托

`focus` 和 `blur` 事件不会向上冒泡。

这里有两个解决方案。

-   方案一：遗留下来的有趣的特性（feature）：`focus/blur` 不会向上冒泡，但会在捕获阶段向下传播。

-   方案二：使用 `focusin` 和 `focusout` 事件 ，与 `focus/blur` 事件完全一样，只是它们会冒泡。
    -   必须使用 `elem.addEventListener` 来分配它们，而不是 `on<event>`。



## 4.3 数据更新的相关事件

可以参考文章的例子来记忆：[事件：change，input，cut，copy，paste (javascript.info)](https://zh.javascript.info/events-change-input)

数据更改事件:

| 事件             | 描述                 | 特点                                                         |
| :--------------- | :------------------- | :----------------------------------------------------------- |
| `change`         | 值被改变。           | 对于文本输入，当失去焦点时触发。                             |
| `input`          | 文本输入的每次更改。 | 立即触发，与 `change` 不同。                                 |
| `cut/copy/paste` | 剪贴/拷贝/粘贴行为。 | 行为可以被阻止。<br />`event.clipboardData` 属性可以用于读/写剪贴板。 |

### 4.3.1 change 事件

当元素更改完成时，将触发 `change` 事件。

-   对于文本输入框，当其失去焦点时，就会触发 `change` 事件。
-   其它元素：`select`，`input type=checkbox/radio`，在选项更改后立即触发 `change` 事件。



### 4.3.2 input 事件

当用户对输入值进行修改后，就会触发 `input` 事件。

-   与键盘事件不同，只要值发生改变，`input` 事件就会触发。使用鼠标粘贴，或者使用语音识别来输入文本也会改变。
-   比如键盘输入："123"，每输入一个字母，就触发一次。一共会触发三次 `input` 事件。
-   如果不更改文本内容，不会出发 `change` 事件，比如按方向键进行光标移动。



### 4.3.3 cut，copy，paste 事件

这些事件发生于剪切 / 拷贝 / 粘贴一个值的时候。

它们属于 [ClipboardEvent](https://www.w3.org/TR/clipboard-apis/#clipboard-event-interfaces) 类，并提供了对拷贝/粘贴的数据的访问方法。

-   可以使用 `event.preventDefault()` 来中止行为，然后什么都不会被复制/粘贴。

-   不仅可以对文本操作，复制 / 粘贴所有内柔都有效果：图片、OS文件管理器中的文件等。
-   [在规范中](https://www.w3.org/TR/clipboard-apis/#dfn-datatransfer) 有一系列方法，这些方法可用于不同的数据类型，包括文件，对剪贴板（clipboard）进行读/写。
-   但是请注意，剪贴板是“全局”操作系统级别的。安全起见，大多数浏览器仅在特定的用户行为下，才允许对剪贴板进行读/写，例如在 `onclick` 事件处理程序中。



## 4.4 表单的提交 submit

 `submit` 事件：在提交表单时被触发。

-   用于在将表单发送到服务器之前对表单进行校验，或者中止提交，并使用 JavaScript 来处理表单。



`form.submit()` 方法：允许从 JavaScript 启动表单发送。

-   使用此方法动态地创建表单，并将其发送到服务器。



提交表单，也就是触发表单的 `submit` 事件。主要有两种方式：

1.  点击 `<input type="submit">` 或 `<input type="image">`。
2.  在 `input` 字段中，（文本输入完毕后）按下 `Enter` 键。
3.  调用 `form.submit()`。手动将表单提交到服务器。
    -   有时该方法被用来手动创建和发送表单。



-   处理程序可以检查数据，如果有错误，就显示出来，并调用 `event.preventDefault()`，这样表单就不会被发送到服务器了。
-   注：点击  `<input type="submit">` 和 `<input type="image">`。
-   注：在输入框中使用 Enter 发送表单时，会在 `<input type="submit">` 上触发一次 `click` 事件。



# 5 加载文档和其他资源

## 5.1  页面生命周期

HTML 页面的生命周期包含三个重要事件：

- `DOMContentLoaded`：浏览器已完全加载 HTML，并构建了 DOM 树。
- `load`：浏览加载完成了所有外部资源：图片，样式等。
- `beforeunload/unload`：当用户正在离开页面时。



每个事件都是有用的，依时间顺序：

- `DOMContentLoaded` 事件 ：DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。
- `load` 事件 ：外部资源已加载完成，样式已被应用，图片大小也已知了。
- `unload` 事件 ：用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。
- `beforeunload` 事件 ： 用户正在离开，可以检查用户是否保存了更改，并询问他是否真的要离开。



### 5.1.1 DOMContentLoaded 事件

`DOMContentLoaded` 事件发生在 `document` 对象上。

必须使用 `addEventListener` 来捕获它：

```javascript
document.addEventListener("DOMContentLoaded", ready);
// 不是 "document.onDOMContentLoaded = ..."
```



#### 5.1.1.1 `<script>` 脚本的阻塞

当浏览器处理一个 HTML 文档时，会优先把所有 `script` 标签内的 Js 代码全部运行完毕，然后 DOM 才全部构建完毕，最后触发 `DOMContentLoaded` 事件。

- 执行流程：浏览器顺次处理 HTML 文档中的代码，同时在构建 DOM。每当遇到一个 `<script>` 标签，就停止构建 DOM，运行处理标签内的 JavaScript 代码。运行完毕后，继续构建 DOM。当 DOM 全部构建完毕（此时所有 `<script>` 也都执行完毕）后，才触发 `DOMContentLoaded` 事件。
- 原因：为什么会先执行 `<script>` 内的代码，暂停 DOM 构建？
  - 一种防范措施。脚本（JavaScript 代码）可能想要修改 DOM，甚至对其执行 `document.write` 操作。



 `DOMContentLoaded` 事件的阻塞：不论 `<script>` 标签在 HTML 文档的什么位置（开头 / 结尾），都会优先被执行完毕，才触发 `DOMContentLoaded` 事件。以下两种情况不会阻塞 `DOMContentLoaded` 事件：

- 具有 `async` 特性（attribute）的脚本（JavaScript）不会阻塞；
- 使用 `document.createElement('script')` 动态生成，并添加到网页的脚本也不会阻塞 。



一个 CSS 样式表的陷阱：

外部样式表不会影响 DOM，因此 `DOMContentLoaded` 不会等待它们。但是，如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成：

```html
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // 在样式表加载完成之前，该脚本都不会执行,
  alert(getComputedStyle(document.body).marginTop);
</script>
```

原因是，脚本可能想要获取元素的坐标和其他与样式相关的属性，如上例所示。因此，它必须等待样式加载完成。

当 `DOMContentLoaded` 等待该脚本时，它现在也在等待该脚本前面的样式。



总结：可以阻塞 `DOMContentLoaded` 事件的 2 种情况，实质上就是发生了对 DOM 流构建的阻塞：

- HTML 文档流中，有 `<script>` 脚本，需要优先执行所有脚本，最后触发 `DOMContentLoaded` 事件。
- HTML 文档流中，CSS样式表后，紧跟一个 `<script>` 脚本，需要优先执行 CSS样式表，然后执行脚本，最近在触发  `DOMContentLoaded` 事件。



#### 5.1.1.2 浏览器的自动填充

Firefox，Chrome 和 Opera 都会在 `DOMContentLoaded` 事件中，自动填充表单。

也就是说，如果页面有一个带有登录名和密码的表单、并且浏览器记住了这些值、同时得到了用户允许，那么在 `DOMContentLoaded` 事件触发时，浏览器会尝试自动填充它们。

- 有些网页 DOM 流构建需要很长时间，所以会导致 `DOMContentLoaded` 触发会有明显的延迟感，那么自动填充也会等待许久。



### 5.1.2 load 事件

当整个页面，包括样式、图片和其他资源被加载完成时，会触发 `window` 对象上的 `load` 事件。

- `window.onload` 设置监听。
- `window.addEventListener('load', (event) => { .... };` 方法设置监听。



### 5.1.3  beforeunload 、unload 事件

#### 5.1.3.1  触发的时机

以下情况均会触发这两个事件：

1. 在浏览器地址栏输入地址，然后点击跳转；
2. 点击页面的链接实现跳转；
3. 关闭或刷新当前页面;
4. 操作当前页面的 `Location` 对象，修改当前页面地址;
5. 调用 `window.navigate` 实现跳转;
6. 调用 `window.open` 或 `document.open` 方法在当前页面加载其他页面或重新打开输入流。

#### 5.1.3.2  触发的顺序

1. 先 `beforeunload`；
2. 后 `unload`。

#### 5.1.3.3 触发时环境

**`beforeunload` 事件**

1. 页面所有资源均未释放，且页面可视区域效果**没有变化**；
2. UI 人机交互失效 (`window.open`, `alert`, `confirm`全部失效)；
3. 最后一个可以阻止 `unload` 过程执行的时机。`beforeunload` 事件的 `Cancelable` 属性值为 `Yes`。

**`unload` 事件**

1. 页面所有资源均未被释放，但是页面可视区域**一片空白**；
2. UI 人机交互失效 (`window.open`, `alert`, `confirm`全部失效)；
3. 没有任何操作可以阻止 `unload` 过程的执行。(unload事件的 `Cancelable `属性值为 `No`。



### 5.1.4 unload 事件

当访问者离开页面时，`window` 对象上的 `unload` 事件就会被触发。

- 可以在那里做一些不涉及延迟的操作，例如关闭相关的弹出窗口。

- 可以收集有关页面使用情况的数据：鼠标点击，滚动，被查看的页面区域等。当用户要离开时，通过 `unload` 事件将数据保存到服务器上。

  -  `navigator.sendBeacon(url, data)` 使用该方法，异步（后台）发送数据。即使要跳转另一个页面也不会有延迟：浏览器离开页面，但仍然在执行 `sendBeacon`。使用方法：

    ```js
    let analyticsData = { /* 带有收集的数据的对象 */ };
    
    window.addEventListener("unload", function() {
      navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
    });
    ```

  - 请求以 POST 方式发送，数据大小限制在 64kb。

  - 允许发送字符串、表单、其他格式的数据，在 [Fetch](https://zh.javascript.info/fetch) 一章有详细讲解。但通常它是一个字符串化的对象。

### 

### 5.1.5 beforeunload 事件

如果访问者触发了页面跳转，或试图关闭窗口，就会触发 `beforeunload` 事件。

当用户想切换页面，可以在此事件中询问用户是否确定要关闭网页。

 ![image-20210705174939737](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210705174939737.png)

```js
window.onbeforeunload = function() {
  return false;
};
```



### 5.1.6 document.readyState 属性

**`Document.readyState`** 属性描述了 document 的加载状态（DOM构建完毕了吗？）。

当该属性值发生变化时，会在 [`document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 对象上触发  `readystatechange` 事件。

它有 3 个可能值：

- `loading`：文档正在被加载。
- `interactive`：文档被全解析，但诸如图像、样式表和框架之类的子资源仍在加载。
- `complete`：文档和所有子资源已完成加载。 `load` 事件即将被触发。



可以在状态发生改变时，通过触发  `readystatechange` 事件，查看当前 `readyState` 属性值：

```js
// 当前状态
console.log(document.readyState);

// 状态改变时打印它
document.addEventListener('readystatechange', () => console.log(document.readyState));
```



`readystatechange` 事件是跟踪文档加载状态的另一种机制，现在很少被使用。

为了完整起见，让我们看看完整的事件流。这是一个带有 `<iframe>`，`<img>` 和记录事件的处理程序的文档：

```html
<script>
  log('initial readyState:' + document.readyState);

  document.addEventListener('readystatechange', () => 
                            log('readyState:' + document.readyState));
  document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));

  window.onload = () => log('window onload');
</script>

<iframe src="iframe.html" onload="log('iframe onload')"></iframe>

![img](http://en.js.cx/clipart/train.gif" id="img">
<script>
  img.onload = () => log('img onload');
</script>
```

此示例运行 [在 sandbox 中](https://plnkr.co/edit/ct5SNvrHCA75b2KZ?p=preview)。

典型输出：

1. [1] initial readyState:**loading**
2. [2] readyState:**interactive**
3. [2] DOMContentLoaded
4. [3] iframe onload
5. [4] img onload
6. [4] readyState:**complete**
7. [4] window onload    // window.onload 在所有 onload 最后运行

方括号中的数字表示发生这种情况的大致时间。标有相同数字的事件几乎是同时发生的（± 几毫秒）。

- 在 `DOMContentLoaded` 之前，`document.readyState` 会立即变成 `interactive`。
  - 它们俩的意义实际上是相同的。
- 当所有资源（`iframe` 和 `img`）都加载完成后，`document.readyState` 变成 `complete`。
  - 这里可以发现，它与 `img.onload`（`img` 是最后一个资源）和 `window.onload` 几乎同时发生。转换到 `complete` 状态的意义与 `window.onload` 相同。**区别在于 `window.onload` 始终在所有其他 `load` 处理程序之后运行。**



### 5.1.7 总结

页面生命周期事件：

- 当 DOM 准备就绪时，`document` 上的 `DOMContentLoaded` 事件就会被触发。
  - 在这个阶段，我们可以将 JavaScript 应用于元素。
  - 诸如 `<script>...</script>` 或 `<script src="..."></script>` 之类的脚本会阻塞。 
  - 图片和其他资源仍然可以继续被加载。
- 当页面和所有资源都加载完成时，`window` 上的 `load` 事件就会被触发。
  - 很少使用，因为通常无需等待那么长时间。
- 当用户想要离开页面时，`window` 上的 `beforeunload` 事件就会被触发。
  - 如果取消这个事件（`return false`），浏览器就会询问我们是否真的要离开。
- 当用户最终离开时，`window` 上的 `unload` 事件就会被触发。
  - 在处理程序中，只能执行不涉及延迟或询问用户的简单操作。正是由于这个限制，很少被使用。
  - 通常使用 `navigator.sendBeacon` 来发送网络请求。



## 5.2 加载脚本 - defer / async  / 动态 

上文提到过，当浏览器加载 HTML，构建 DOM 的时候，遇到  `<script>...</script> ` 标签，浏览器就需要暂停 DOM 构建，而优先处理脚本中的 JavaScript 代码，

这样会造成两个问题：

- 脚本在运行时，无法访问位于它们下方的 DOM 元素，也无法对这些元素进行操作（设置监听、修改内容等）
- 如果 HTML 文档中间，有一个量很大的脚本，就会发生严重的 “页面阻塞”，脚本在没有下载、解析完之前， DOM 无法构建完毕，用户无法看到文档内容。



解决方案：

- 一个常规性的动作，就是把脚本放置在页面的底部，`</body>` 的上边，这样它可以顺利的访问所有 DOM 元素，切不会影响 DOM 构建。
- 利用两个 `<script>` 特性（attribute）也可以解决这个问题：`defer` 和 `async`。 
- 最后，利用动态方式加载脚本，也是方案之一。



把总结放在开头：

`async` 和 `defer` 有一个共同点：加载这样的脚本都不会阻塞页面的渲染。

不同点是：

|         | 顺序                                                         | `DOMContentLoaded`                                           |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `async` | **加载优先顺序**。脚本在文档中的顺序不重要 —— 先加载完成的先执行 | 不相关。可能在文档加载完成前加载并执行完毕。如果脚本很小或者来自于缓存，同时文档足够长，就会发生这种情况。 |
| `defer` | **文档顺序**（它们在文档中的顺序）                           | 在文档加载和解析完成之后（如果需要，则会等待），即在 `DOMContentLoaded` 之前执行。 |

在实际开发中，

- `defer` 用于需要查看完整 DOM 的脚本，或需要严格脚本执行顺序的时候。
- `async` 用于独立脚本，例如计数器或广告，这些脚本的相对执行顺序无关紧要。



注意：

没有脚本的页面应该先给用户一定的提示，例如 “正在加载” 的提示。同时禁用尚不可用的按钮。
以让用户可以清楚地看到，他现在可以在页面上做什么、还有什么是正在准备中的。





### 5.2.1 defer

`defer`  -- **推迟**。

`<script defer src="https://xxxxx"> </script>`

特性告诉浏览器遇到脚本不会等待，而是继续处理后面的 HTML 结构，构建 DOM。脚本会异步（后台） 下载，等 DOM 构建完成后，脚本才会执行。

具有 `defer` 特性的脚本：

- 不会阻塞页面。
-  DOM 解析完毕后、 `DOMContentLoaded` 事件之前执行。
- 依次执行。多个 `defer` 脚本，保持相对顺序，就像常规脚本一样(按正常的次序，依次执行)。
  - 如果遇到了两个脚本，按 HTML 中的次序依次是：`large.js` 和 `small.js`。当浏览器依次扫描到这两个脚本时，把它们丢到异步下载。或许排在后面的 `small.js` 先下载完成，但是也会等待 `large.js` 下载完毕并且执行后，才会执行。
- 仅用于外部脚本。如果 `<script>` 脚本没有 `src`，则会忽略 `defer` 特性。



### 5.2.2 async

`async` -- **异步**。

`<script async src="https://xxxxx"> </script>`

`async` 特性与 `defer` 相同的时，它也能够让脚本不阻塞页面。

不同的是，`async` 特性意味着脚本是完全独立的，和其他脚本、HTML 文档流是异步关系。



具有 `async` 特性的脚本：

- 不会阻塞页面。
- 一旦异步下载完毕，立即执行。这意味着：
  - 先来先执行。多个 `async` 脚本之间没有执行顺序，先下载完成先执行。
  - DOM 构建和脚本异步。一旦 DOM 构建完毕，就会触发  `DOMContentLoaded` 事件，不会等待脚本。
    - `DOMContentLoaded` 可能发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
    - `DOMContentLoaded` 可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）



应用：当我们将独立的第三方脚本集成到页面时，采用异步加载方式是非常棒的：计数器，广告等，因为它们不依赖于我们的脚本，我们的脚本也不应该等待它们。



### 5.2.3 动态加载

使用 JavaScript 动态地创建一个脚本，并将其附加（append）到文档（document）中：

```js
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // 添加脚本
```

默认情况下，动态脚本的行为是 **“异步”** 的，采用 `async` 方式加载，也就是说：

- 不会等待其他结构，执行到该代码，就会丢到异步去加载。
- 先来先执行。先加载完成的脚本先执行。



可以调整为 `defer` 方式加载动态脚本，通过显式地设置 `script.async=false`，此时：

- 脚本将按照在文档中的顺序执行。

```js
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;   // 采用 defer 执行
  document.body.append(script);
}

loadScript("long.js");    // long.js 先执行，因为代码中设置了 async=false
loadScript("small.js");
```



## 5.3 资源加载 - onload / onerror

浏览器允许我们跟踪外部资源的加载 —— 脚本，iframe，图片等。基本上适用于具有 `src` 特性的所有资源，有两个事件：

- `onload` ：成功加载；
- `onerror` ：出现错误。



### 5.3.1 onload / onerror

上文提到过，可以利用创建一个 `<script>` 标签，然后添加到 HTML 结构中，来动态的加载脚本。

但需要注意的是，只有当该脚本成功的下载、加载完成，才可以在其他脚本中使用该脚本创建的函数。



`script.onload` 事件，会在脚本加载、并执行完成时触发。

`script.onerror` 事件，会在脚本加载期间出现 error 时触发。

- 比如请求一个不存在的脚本，加载 404 都会发生加载错误。



```js
let script = document.createElement('script');
script.src = "my.js";
document.head.append(script);		// 动态加载脚本

script.onload = function(){
    console.log("脚本加载成功");
}

script.onerror = function(){
    console.log("脚本加载出现错误");
}
```

- `onload` / `onerror` 事件仅跟踪加载本身，即只监听当前资源是否出现加载错误。
- `window.onerror` 全局监听，可以监听脚本中，是否出现编程错误。



### 5.3.2 跨源策略

更多跨源问题，会在 fetch 中讲解，这里主要是为了解释脚本 error 报错追踪的问题。



一条规则：来自一个网站的脚本无法访问其他网站的内容。

- 例如，`https://facebook.com` 的脚本无法读取位于 `https://gmail.com` 的用户邮箱。

更确切地说，一个源（域 / 端口 / 协议）无法获取另一个源（origin）的内容。因此，即使我们有一个子域，或另一个端口，这都是不同的源，彼此无法相互访问。

- 所以，如果网页使用的是来自其他域的脚本，并且该脚本中存在 error，那么网页就无法获取 error 的详细信息。



为什么我们需要 error 的详细信息？

- 有很多服务使用 `window.onerror` 监听全局 error，同时保存 error 信息，并提供访问和分析 error 的接口。这样程序员就可以看到由用户触发的实际中的 error。但是，如果一个脚本来自于另一个源（origin），就无法准确获取更多的 error 的信息。



解决方案：

- CORS： 一个W3C标准，全程跨域资源共享 (Cross-Origin Resource Sharing)。

要允许跨源访问，`<script>` 标签需要具有 `crossorigin` 特性（attribute），并且远程服务器必须提供特殊的 header。

这里有三个级别的跨源访问，具体内容参考 fetch 章节。





# 6 杂项

## 6.1 MutationObserver

`MutationObserver` 是 DOM 变动观察器，一个内建对象，它可以随时监听 DOM 元素，并在检测到更改时触发回调。



1. 创建一个带有回调函数的观察器：

   ```js
   let observer = new MutationObserver(callback);
   ```

2. 然后将其附加到一个 DOM 节点：

   ```js
   elem.observe(node, config);
   ```

- `config` 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：
  - `childList` ：监听 `node` 的直接子节点的更改；
  - `subtree` ：监听 `node` 的所有后代的更改；
  - `attributes` ：监听 `node` 的特性（attribute）；
  - `attributeFilter` ：特性名称数组，只监听选定的特性；
  - `characterData` ：是否监听 `node.data`（文本内容）；
  - `attributeOldValue` ：如果为 `true`，则将特性的旧值和新值都传递给回调，否则只传新值（需要 `attributes` ）。
  - `characterDataOldValue` ：如果为 `true`，则将 `node.data` 的旧、新值都传递给回调，否则只传新值（需要 `characterData` 

3. 在发生任何更改后，将执行“回调”：
   - 记录的内容，包装为一个  [MutationRecord](https://dom.spec.whatwg.org/#mutationrecord) 对象列表传入第一个参数，而观察器自身作为第二个参数。
   - MutationRecord 对象具有以下属性：
     - type ：变动类型，以下类型之一：
       - `"attributes"`：特性被修改了；
       - `"characterData"`：数据被修改了，用于文本节点；
       - `"childList"`：添加/删除了子元素。
     - `target`：更改发生在何处：
       - `"attributes"` 所在的元素，
       - `"characterData"` 所在的文本节点，
       - `"childList"` 变动所在的元素，
     - `addedNodes/removedNodes` ：添加/删除的节点，
     - `previousSibling/nextSibling` ：添加/删除的节点的上一个/下一个兄弟节点，
     - `attributeName/attributeNamespace` ：被更改的特性的名称/命名空间（用于 XML），
     - `oldValue` ：旧值，仅适用于特性或文本更改，如果设置了相应选项 `attributeOldValue`/`characterDataOldValue`。

```js
let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords);      // 发生变化，就会打印。
});

// 观察除了特性之外的所有变动
observer.observe(elem, {
  childList: true, 					// 监听直接子节点
  subtree: true, 					// 监听其更低的后代节点
  characterDataOldValue: true 		// 将旧的数据传递给回调
});
```



**其他方法：**

`observer.disconnect()` ：停止观察。

`observer.takeRecords()` ：获取尚未处理的变动记录列表，表中记录的是已经发生，但回调暂未处理的变动。

- 当我们停止观察时，观察器可能尚未处理某些更改，使用该方法可以获取这些信息。

```js
// 如果你关心可能未处理的近期的变动
// 那么，应该在 disconnect 前调用获取未处理的变动列表
let mutationRecords = observer.takeRecords();

// 停止跟踪变动
observer.disconnect();
...
```

### 6.1.1 应用方法：

#### .1 用于集成 

1. 如果要在网页中添加一个第三方脚本，该脚本可能会执行一些负面操作，例如显示广告 `<div class="ads">ads</div>`。我们可以使用 `MutationObserver`，监测到我们不需要的元素何时出现在我们的 DOM 中，并将其删除。

2. 还有一些其他情况，例如第三方脚本会将某些内容添加到我们的文档中，并且我们希望检测出这种情况何时发生，以调整页面，动态调整某些内容的大小等。`MutationObserver` 使我们能够实现这种需求。

#### .2 用于架构

假设我们正在建立一个有关编程的网站。自然地，文章中可能包含一些源代码段，我们通常会对源代码段进行一定的美化工作。如果文章是我们直接加载好的，那很简单，直接利用 JavaScript 脚本对源代码内容进行修改即可。

但有可能是动态加载的文章，此时可以用 `MutationObserver` 监测何时在页面中插入了新的代码段，然后运行相应的美化代码。



## 6.2 Selection / Range

这里将介绍文档中的**选择**，以及在表单字段（如 `<input>`）中的**选择**。

JavaScript 可以获取现有选择，也可以 选择 / 取消全部 或 部分选择，从文档中删除所选部分，将其包装到一个标签（tag）中，等等操作。



总体来说，根据要选择的内容，可划分为以下两种选择方式：

1. 对于文档：`Selection` 和 `Range` 对象。
2. 对于 `input`，`textarea`：其他方法和属性。



### 6.2.1 范围 Range

选择的基本概念是 [Range](https://dom.spec.whatwg.org/#ranges)：本质上是一对“边界点”：范围起点和范围终点。

```js
let range = new Range();
```



利用相对于起点（父节点）的相对偏移（offset）值，确定每个点的位置：

```js
range.setStart(parentNode, offset);		// 包括 offset
range.setEnd(parentNode, offset);		// 不包括 offset
```

- 我们不必在 `setStart` 和 `setEnd` 中使用相同的 node 节点。一个范围可能跨越许多不相关的节点。唯一要注意的是终点要在起点之后。



举例1：

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
```

 ![image-20210706105421537](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210706105421537.png)

1. 选择 `"Example: <i>italic</i>"`。它是 `<p>` 的前两个子节点（文本节点也算在内）：

 ![image-20210706105458968](source/image-20210706105458968.png)

```js
let range = new Range();
range.setStart(p, 0);	// 设置起点，从下标 0 开始
range.setEnd(p, 2);		// 设置终点，到下标 2 截止，不包括 2.

alert(range); // Example: italic  ,range的 toString形式直接输出文本内容。
document.getSelection().addRange(range);  
```



举例2，范围跨越不同的 node 节点：

 ![image-20210706134329671](source/image-20210706134329671.png)

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<script>
  let range = new Range();

  range.setStart(p.firstChild, 2);
  range.setEnd(p.querySelector('b').firstChild, 3);

  alert(range); // ample: italic and bol
  window.getSelection().addRange(range); // 将范围应用于文档选择
</script>
```

 

#### 6.2.1.1 `range` 的属性

 ![image-20210706134550343](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210706134550343.png)

- `startContainer`，`startOffset`：起始节点和偏移量，
  - 在上例中：分别是 `<p>` 中的第一个文本节点和 `2`。
- `endContainer`，`endOffset`：结束节点和偏移量，
  - 在上例中：分别是 `<b>` 中的第一个文本节点和 `3`。
- `collapsed`：布尔值。如果范围在同一点上开始和结束（ range 内没有内容）则为`true`，
  - 在上例中：`false`
- `commonAncestorContainer`：在范围内的所有节点中最近的共同祖先节点。
  - 在上例中：`<p>`



#### 6.2.1.2 `range` 的方法

设置范围的起点：

- `setStart(node, offset)` 将起点设置在：`node` 中的位置 `offset`
- `setStartBefore(node)` 将起点设置在：`node` 前面
- `setStartAfter(node)` 将起点设置在：`node` 后面

设置范围的终点：

- `setEnd(node, offset)` 将终点设置为：`node` 中的位置 `offset`
- `setEndBefore(node)` 将终点设置为：`node` 前面
- `setEndAfter(node)` 将终点设置为：`node` 后面

`node` 既可以是文本节点，也可以是元素节点：

- 对于文本节点，`offset` 偏移的是字符数，
- 对于元素节点，`offset` 偏移是子节点数。



其他：

- `selectNode(node)` ：设置一个选择整个 `node`的 range
- `selectNodeContents(node)` ：设置一个选择整个 `node` 内容的 range。
- `collapse(toStart)` ：折叠 range。如果 `toStart=true` 则设置 end=start，否则设置 start=end。
- `cloneRange()` 创建一个具有相同起点/终点的新 range。

如要操纵范围内的内容：

- `deleteContents()`：从文档中删除范围内容。
- `extractContents()`：从文档中删除范围内容，并将删除的内容作为 [DocumentFragment](https://zh.javascript.info/modifying-document#document-fragment) 返回。
- `cloneContents()`：复制范围内容，并将复制的内容作为 [DocumentFragment](https://zh.javascript.info/modifying-document#document-fragment) 返回。
- `insertNode(node)`：在范围的起始处将 `node` 插入文档。
- `surroundContents(node)` ：使用 `node` 将所选范围内容包裹起来。
  - 要使此操作有效，则该范围必须包含其中所有元素的开始和结束标签：不能像 `<i>abc` 这样的部分范围。



### 6.2.2 选择 selection

`Range` 是用于管理选择范围的对象。文档选择就是由 `Selection` 对象表示的，

-  `window.getSelection()`  或 `document.getSelection()` 来获取对象中的文档选择。



用户有许多种选择内容的方式。可能是用鼠标、热键、手机上的点击+拖动等等。



一个  selection 可以包括零个或多个 range 。实际上，只有 Firefox 允许用户使用 Ctrl+click (Mac 上用 Cmd+click) 在文档中选择多个范围。其他浏览器最多支持 1 个范围。

- 某些 `Selection` 方法暗示可能有多个范围，但是在除 Firefox 之外的所有浏览器中，范围最多是 1。



#### 6.2.2.1 `selection` 的属性

与范围相似，选择的起点称为“锚点（anchor）”，终点称为“焦点（focus）”。

主要的选择属性有：

- `anchorNode`：起始节点，
- `anchorOffset` ：相对于起始节点  `anchorNode` 的偏移量，
- `focusNode` ：结束节点，
- `focusOffset` ：相对于结束节点 `focusNode` 的偏移量，
- `isCollapsed` ：是否为空。如果未选择任何内容（空范围）或不存在，则为 `true` 。
- `rangeCount` ：保存该 selection 对象中的范围数。除 Firefox 外，其他浏览器最多为 `1`。



**在文档中，`selection`的终点可能在起点之前，而 `Range` 的起点必须在开头。**

- 例如鼠标，允许从两个方向创建相同的选择：“从左到右”和“从右到左”。

- “===>”  forward。选择的起点（anchor）在终点（focus）之前，则称此选择具有 “forward” 方向。

- “===>” backward。相反，终点在前面，在成为 backward 方向。

   ![image-20210706140830253](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210706140830253.png)

  上图为 forward 方向，下图为 backward 方向。

   ![image-20210706140908304](images/2%20UI%E3%80%81%E8%A1%A8%E8%BE%BE%E6%8E%A7%E4%BB%B6%E3%80%81%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E3%80%81%E6%9D%82%E9%A1%B9.assets/image-20210706140908304.png)

### 

#### 6.3.2.2  `selection` 的事件

可以追踪发生 selection 的事件：

- `elem.onselectstart` ：当用户从 `elem` 上开始选择时，触发该事件。
  - 例如，用户在 elem 元素上，按下鼠标键并开始移动鼠标。
  - 阻止默认行为会使选择无法开始。
- `document.onselectionchange`：当选择的区域发生变动时（重新选择、刚开始选择），触发该事件。
  - 注：此处理程序只能在 `document` 上设置。
  - 事实上，第二个事件的第一次触发，就相当于第一个事件被触发。



#### 6.3.2.3  `selection` 的方法

添加/移除范围的选择方法：

- `getRangeAt(i)` ：获取从 `0` 开始到第 i 个的全部 range 。
  - 在除 Firefox 之外的所有浏览器中，仅使用 `0`。
- `addRange(range)` ：将 `range` 添加到 selection 中。
  - 如果选择已有关联的范围，则除 Firefox 外的所有浏览器都将忽略该调用。
- `removeRange(range)` ：从 selection  中删除 `range`。
- `removeAllRanges()` ：删除所有 range。
- `empty()` ：`removeAllRanges` 的别名。



直接选择范围，而无需使用 `Range`：

- `collapse(node, offset)` ：用一个新的范围替换选定的范围，从 `node` 处开始，到偏移 `offset` 处结束。
- `setPosition(node, offset)` ：`collapse` 的别名。
- `collapseToStart()` ：折叠（替换为空范围）到选择起点，
- `collapseToEnd()` ：折叠到选择终点，
- `extend(node, offset)` ：将选择的焦点（focus）移到给定的 `node`，位置偏移 `oofset`，
- `setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)` ：用给定的起点 `anchorNode/anchorOffset` 和终点 `focusNode/focusOffset` 来替换选择范围。选中它们之间的所有内容。
- `selectAllChildren(node)` ：选择 `node` 的所有子节点。
- `deleteFromDocument()` ：从文档中删除所选择的内容。
- `containsNode(node, allowPartialContainment = false)` ：检查选择中是否包含 `node`（特别是如果第二个参数是 `true` 的话）



### 6.3.3 表单控件中的选择

诸如 `input` 和 `textarea` 等表单元素提供了 [专用的选择 API](https://html.spec.whatwg.org/#textFieldSelection)，没有 `Selection` 或 `Range` 对象。

由于输入值是纯文本而不是 HTML，因此也不需要此类对象，直接利用属性和方法即可：



属性：

- `input.selectionStart` ：选择的起始位置（可修改），
- `input.selectionEnd` ：选择的结束位置（可修改），
- `input.selectionDirection` ：选择方向：“forward”，“backward” 或 “none”。
  - 例如使用鼠标双击进行的选择时，要朝哪个方向。



事件：

- `input.onselect` ：当发生选择时，触发该事件。



方法：

- `input.select()` ：选择文本控件中的所有内容，

- `input.setSelectionRange(start, end, [direction])` ：在给定方向上（可选），从 `start` 一直选择到 `end`。

- `input.setRangeText(replacement, [start], [end], [selectionMode])` ：用新文本替换范围中的文本。

  可选参数 `start` 和 `end`，如果提供的话，则设置范围的起点和终点，否则使用用户的选择。

  最后一个参数 `selectionMode` 决定替换文本后如何设置选择。可能的值为：

  - `"select"` ：将选择新插入的文本。
  - `"start"` ：选择范围将在插入的文本之前折叠（光标将在其之前）。
  - `"end"` ：选择范围将在插入的文本之后折叠（光标将紧随其后）。
  - `"preserve"` ：尝试保留选择。这是默认值。



有许多实例，在 [示例：跟踪选择](https://zh.javascript.info/selection-range#shi-li-gen-zong-xuan-ze) 。



### 6.3.4 使不可选择

要使某些内容不可选，有三种方式：

1. 使用 CSS 属性阻止元素的可被选择： `user-select: none`。
   - 这样不允许选择从 `elem` 开始。但用户可以在其他地方开始选择，并可以把  `elem` 包含在内。
   - 然后 `elem` 将成为 `document.getSelection()` 的一部分，因此选择实际发生了，但是在复制粘贴中，其内容通常会被忽略。
2. 阻止 `onselectstart` 或 `mousedown` 事件中的默认行为。
   - ` elem.onselectstart = ()=>false` 和上面一样，用户也可通过从其他元素开始选择，而扩展到这里。
3. 使用 `document.getSelection().empty()` 来在选择发生后清除选择。
   - 很少使用这种方法，因为这会在选择项消失时导致不必要的闪烁。



## 6.3 事件循环：微任务、宏任务

宏任务：

1. 引擎执行任务时（完成一次整体循环），永远不会进行渲染（render）。即使任务事件非常长，也只在完成后才绘制对 DOM 的更改。
2. 如果一项任务执行花费的时间过长，浏览器将无法执行其他任务，例如处理用户事件。
   因此，在一定时间后，浏览器会抛出一个如“页面未响应”之类的警报，建议任务。



微任务：

1. 微任务仅来自于我们的代码。它们通常是由 promise 创建的：
   对 `.then/catch/finally` 处理程序的执行会成为微任务。微任务也被用于 `await` 的“幕后”，因为它是 promise 处理的另一种形式。

还有一个特殊的函数 `queueMicrotask(func)`，它对 `func` 进行排队，以在微任务队列中执行。

- 宏任务 --> 微任务 --> 渲染 --> 宏任务 ...。它确保了在同一个宏任务后的多个微任务，应用程序环境基本相同（没有鼠标坐标更改，没有新的网络数据等）。





事件循环算法（这是 [规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model) 的简化版本）：

1. 任务从 **宏任务** 队列（例如 “script”）中出队（dequeue）并执行最早的任务。
2. 执行所有 **微任务** ，依次出队后，执行。
3. 执行 **渲染**，如果有的话。
4. 如果宏任务队列为空，则休眠直到出现宏任务。
   - 否则，转到步骤 1。



添加一个新的 **宏任务**：

1. 使用零延迟的 `setTimeout(f)`。
   - 用于将繁重的计算任务拆分成多个部分，以使浏览器能够对用户事件及时作出反应、或在任务的各部分之间显示任务进度。
2. 也用于在事件处理程序中，将一个行为（action）添加在事件被完全处理（冒泡完成）后。



添加一个新的 **微任务**：

1. promise 的相关方法 `.then/catch/finally`，以及衍生方法 `generator/async/await`。
2. 使用 `queueMicrotask(f)`。
   - 微任务之间，没有 UI 或网络事件的处理：它们一个接一个地立即执行。
   - 所以常用 `queueMicrotask` 来在保持 **环境状态一致** 的情况下，**异步** 地执行一个函数。
































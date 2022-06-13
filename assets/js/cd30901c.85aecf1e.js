"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[1123],{4137:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?l.createElement(k,i(i({ref:n},o),{},{components:t})):l.createElement(k,i({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},986:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var l=t(7462),a=t(3366),r=(t(7294),t(4137)),i=["components"],u={title:"2. \u94fe\u8868",sidebar_position:2,date:new Date("2022-03-09T00:00:00.000Z"),tags:["algorithm"]},p=void 0,s={unversionedId:"code/algorithm/\u94fe\u8868",id:"code/algorithm/\u94fe\u8868",title:"2. \u94fe\u8868",description:"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20",source:"@site/docs/code/algorithm/\u94fe\u8868.md",sourceDirName:"code/algorithm",slug:"/code/algorithm/\u94fe\u8868",permalink:"/docs/code/algorithm/\u94fe\u8868",tags:[{label:"algorithm",permalink:"/docs/tags/algorithm"}],version:"current",sidebarPosition:2,frontMatter:{title:"2. \u94fe\u8868",sidebar_position:2,date:"2022-03-09T00:00:00.000Z",tags:["algorithm"]},sidebar:"algorithm",previous:{title:"1. \u6570\u7ec4",permalink:"/docs/code/algorithm/\u6570\u7ec4"},next:{title:"3. \u54c8\u5e0c\u8868",permalink:"/docs/code/algorithm/\u54c8\u5e0c\u8868"}},o={},c=[{value:"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20",id:"203-\u79fb\u9664\u94fe\u8868\u5143\u7d20",level:2},{value:"707. \u8bbe\u8ba1\u94fe\u8868",id:"707-\u8bbe\u8ba1\u94fe\u8868",level:2},{value:"206. \u53cd\u8f6c\u94fe\u8868",id:"206-\u53cd\u8f6c\u94fe\u8868",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488",level:4},{value:"\u65b9\u6cd5\u4e8c\uff1a\u8fed\u4ee3",id:"\u65b9\u6cd5\u4e8c\u8fed\u4ee3",level:4},{value:"\u65b9\u6cd5\u4e09\uff1a\u6808",id:"\u65b9\u6cd5\u4e09\u6808",level:4},{value:"24. \u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9",id:"24-\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u4e09\u6307\u9488",id:"\u65b9\u6cd5\u4e00\u4e09\u6307\u9488",level:4},{value:"\u65b9\u6cd5\u4e8c\uff1a\u8fed\u4ee3",id:"\u65b9\u6cd5\u4e8c\u8fed\u4ee3-1",level:4},{value:"19. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u7ed3\u70b9",id:"19-\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c-n-\u4e2a\u7ed3\u70b9",level:2},{value:"\u9762\u8bd5\u9898 02.07. \u94fe\u8868\u76f8\u4ea4",id:"\u9762\u8bd5\u9898-0207-\u94fe\u8868\u76f8\u4ea4",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488\uff5c\u6c42\u957f\u5ea6",id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488\u6c42\u957f\u5ea6",level:4},{value:"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488\uff5c\u6570\u5b66\u601d\u7ef4",id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488\u6570\u5b66\u601d\u7ef4",level:4},{value:"\u65b9\u6cd5\u4e09\uff1aSet\uff5c\u54c8\u5e0c\u96c6\u5408",id:"\u65b9\u6cd5\u4e09set\u54c8\u5e0c\u96c6\u5408",level:4},{value:"142. \u73af\u5f62\u94fe\u8868 II",id:"142-\u73af\u5f62\u94fe\u8868-ii",level:2},{value:"\u65b9\u6cd5\u4e00\uff1aSet\uff5c\u54c8\u5e0c\u96c6\u5408",id:"\u65b9\u6cd5\u4e00set\u54c8\u5e0c\u96c6\u5408",level:4},{value:"\u65b9\u6cd5\u4e8c\uff1a\u5feb\u6162\u6307\u9488",id:"\u65b9\u6cd5\u4e8c\u5feb\u6162\u6307\u9488",level:4},{value:"2. \u4e24\u6570\u76f8\u52a0",id:"2-\u4e24\u6570\u76f8\u52a0",level:2}],d={toc:c};function m(e){var n=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"203-\u79fb\u9664\u94fe\u8868\u5143\u7d20"},"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-linked-list-elements/"},"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0ceasy\uff0canswer")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4e00\u4e2a\u865a\u62df\u5934\u6307\u9488\uff0c\u7528\u6765\u89e3\u51b3\u5982\u679c head \u7ed3\u70b9\u8981\u5220\u9664\u65f6\uff0c\u9700\u8981\u79fb\u52a8 head \u7684\u7279\u6b8a\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var removeElements = function (head, val) {\n  // \u865a\u62df\u5934\u8282\u70b9\n  const res = new ListNode(0, head);\n  let cur = res;\n  while(cur.next) {\n    if (cur.next.val === val) cur.next = cur.next.next;\n    else cur = cur.next;\n  }\n  return res.next;  // \u8fd4\u56de\u865a\u62df\u5934\u8282\u70b9\u6307\u5411\u7684\u4e0b\u4e00\u4e2a\u6307\u9488\u3002\n};\n")),(0,r.kt)("h2",{id:"707-\u8bbe\u8ba1\u94fe\u8868"},"707. \u8bbe\u8ba1\u94fe\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/design-linked-list/"},"707. \u8bbe\u8ba1\u94fe\u8868")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0cmid\uff0canswer"),(0,r.kt)("li",{parentName:"ul"},"\u94fe\u8868\u7684\u5b9a\u4e49\uff0c\u94fe\u8868\u7684\u5904\u7406")),(0,r.kt)("p",null,"\u9519\u8bef\uff1a\u627e\u4e86\u5f88\u4e45\u7684\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u2757\ufe0f\u62fc\u5199\u9519\u8bef\u8981\u6ce8\u610f\nthis._tail  // \u5199\u6210\u4e86 this.tail\nthis._head  // \u5199\u6210\u4e86 this_head \n\n// \u8981\u6ce8\u610f\u8fb9\u754c\u95ee\u9898\uff0c\u6bcf\u4e00\u4e2a\u51fd\u6570\u5728\u5f00\u59cb\u662f\uff0c\u90fd\u8981\u8003\u8651\u5230\u73b0\u5904\u7406\u8fb9\u754c\u60c5\u51b5\u3002\n")),(0,r.kt)("p",null,"\u9700\u8981\u5148\u81ea\u5b9a\u4e49\u4e09\u4e2a\u65b9\u6cd5\uff08\u5bf9\u8c61\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u516c\u5171\u65b9\u6cd5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u4e00\u4e2a\u5355\u94fe\u8868\u7684\u7ed3\u70b9\nclass LinkNode {\n  constructor(val, next) {\n    this.val = val;\n    this.next = next || null;\n  }\n}\n\n// \u94fe\u8868\u5b58\u50a8\uff1a\u957f\u5ea6\u3001\u5934\u6307\u9488\u3001\u5c3e\u6307\u9488\nvar MyLinkedList = function () {\n  this._size = 0;\n  this._head = null;\n  this._tail = null;\n};\n\n// \u6839\u636e index \u83b7\u53d6\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\nMyLinkedList.prototype.getNode = function (index) {\n  if (index < 0 || index >= this._size) return null;\n  // \u5982\u679c\u8981\u6700\u540e\u4e00\u4e2a\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u4e00\u4e0b\uff0c\u7701\u53bb for \u5faa\u73af\n  if (index === this._size - 1) return this._tail;\n  let cur = this._head;\n  for (let i = 0; i < index; i++) {\n    cur = cur.next;\n  }\n  return cur;\n}\n")),(0,r.kt)("p",null,"\u7b54\u6848 (\u9700\u8981\u52a0\u4e0a\u4e0a\u9762\u7684\u4e09\u4e2a\u65b9\u6cd5)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u6839\u636e index \u83b7\u53d6\u94fe\u8868\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\nMyLinkedList.prototype.getNode = function (index) {\n  if (index < 0 || index >= this._size) return null;\n  // \u5982\u679c\u8981\u6700\u540e\u4e00\u4e2a\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u4e00\u4e0b\uff0c\u7701\u53bb for \u5faa\u73af\n  if (index === this._size - 1) return this._tail;\n  let cur = this._head;\n  for (let i = 0; i < index; i++) {\n    cur = cur.next;\n  }\n  return cur;\n}\n\n/** \n * @param {number} index\n * @return {number}\n */\nMyLinkedList.prototype.get = function (index) {\n  if (index < 0 || index >= this._size) return -1;\n  // \u83b7\u53d6\u8282\u70b9\u503c\n  return this.getNode(index).val;\n};\n\n/** \n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtHead = function (val) {\n  const node = new LinkNode(val, this._head);\n  this._size += 1;\n  this._head = node;\n  // \u5982\u679c\u94fe\u8868\u4e2d\u8fd8\u6ca1\u7ed3\u70b9\n  if (this._size === 1)  this._tail = node;\n};\n\n/** \n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtTail = function (val) {\n  const node = new LinkNode(val, null);\n  this._size += 1;\n  // \u5982\u679c\u94fe\u8868\u4e2d\u8fd8\u6ca1\u7ed3\u70b9\n  if (this._size === 1) {\n    this._head = node;\n    this._tail = node;\n    return\n  }\n  this._tail.next = node;\n  this._tail = node;\n};\n\n/** \n * @param {number} index \n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtIndex = function (index, val) {\n  if (index > this._size) return;\n  // \u5934\u63d2\u5165\n  if (index <= 0) this.addAtHead(val);\n  // \u5c3e\u63d2\u5165\n  else if (index === this._size) this.addAtTail(val);\n  // \u6b63\u5e38\u63d2\u5165\n  else {\n    const pre = this.getNode(index - 1);   // \u627e\u5230\u8981\u63d2\u5165\u7684index\u7684\u524d\u4e00\u4e2a\u7ed3\u70b9\n    pre.next = new LinkNode(val, pre.next);\n    this._size += 1;\n  }\n};\n\n/** \n * @param {number} index\n * @return {void}\n */\nMyLinkedList.prototype.deleteAtIndex = function (index) {\n  if (index < 0 || index >= this._size) return;\n  // \u5904\u7406\u5934\u8282\u70b9\n  if (index === 0) {\n    this._head = this._head.next;\n    this._size -= 1;\n    // \u5982\u679c\u94fe\u8868\u4e2d\u6ca1\u6709\u7ed3\u70b9\u4e86\uff0c\u989d\u5916\u5904\u7406\u5c3e\u7ed3\u70b9\n    if (this._size === 0) this._tail = null;\n    return;\n  }\n  // \u6309\u7167 index \u67e5\u627e\u524d\u4e00\u4e2a\u7ed3\u70b9\n  const pre = this.getNode(index - 1);\n  pre.next = pre.next.next;\n  // \u5904\u7406\u5c3e\u7ed3\u70b9\n  if (index === this._size - 1) this._tail = pre;\n  this._size -= 1;\n};\n")),(0,r.kt)("h2",{id:"206-\u53cd\u8f6c\u94fe\u8868"},"206. \u53cd\u8f6c\u94fe\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-linked-list/"},"206. \u53cd\u8f6c\u94fe\u8868")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0ceasy\uff0cquick")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pre \u6307\u5411\u524d\u4e00\u4e2a\u7ed3\u70b9\uff0ccur \u6307\u5411\u5f53\u524d\u8981\u4fee\u6539\u7684\u7ed3\u70b9\uff0ctemp \u4f5c\u4e3a\u4e34\u65f6\u7ed3\u70b9\uff0c\u6307\u5411 cur.next\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"a",src:t(8996).Z,width:"610",height:"436"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var reverseList = function (head) {\n  let [pre, cur] = [null, head];\n  while (cur) {\n    const temp = cur.next;\n    cur.next = pre;\n    // pre\u3001cur \u5f80\u524d\u79fb\u52a8\n    [pre, cur] = [cur, temp];\n  }\n  return pre;\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u8fed\u4ee3"},"\u65b9\u6cd5\u4e8c\uff1a\u8fed\u4ee3"),(0,r.kt)("p",null,"\u903b\u8f91\u548c\u53cc\u6307\u9488\u662f\u4e00\u6837\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var reverseList = function (head) {\n  return reverse(null, head);\n\n  function reverse(pre, cur) {\n    // \u7ed3\u675f\u9012\u5f52\n    if (!cur) return pre;\n    const temp = cur.next;\n    cur.next = pre;\n    return reverse(cur, temp);\n  }\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e09\u6808"},"\u65b9\u6cd5\u4e09\uff1a\u6808"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u6c42\u4e0d\u539f\u5730\u4fee\u6539\uff0c\u800c\u662f\u91cd\u65b0\u6784\u5efa\u4e00\u4e2a nodeList \u5219\u4f7f\u7528\u6808\u7ed3\u6784\u6765\u590d\u5236\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var reverseList = function (head) {\n  const stack = [];\n  const resList = new ListNode();\n  // \u539f\u94fe\u8868\u7684 val \u5168\u90e8\u5165\u6808\uff1a\n  for (let cur = head; cur !== null; cur = cur.next) {\n    stack.push(cur.val);\n  }\n  // \u5c06\u6808\u4e2d\u7684 val \u5199\u5165\u65b0\u94fe\u8868\u4e2d:\n  for (let cur = resList; stack.length; cur = cur.next) {\n    cur.next = new ListNode(stack.pop());\n  }\n  return resList.next;\n};\n")),(0,r.kt)("h2",{id:"24-\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9"},"24. \u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/"},"24. \u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0cmid\uff0cquick")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e00\u4e09\u6307\u9488"},"\u65b9\u6cd5\u4e00\uff1a\u4e09\u6307\u9488"),(0,r.kt)("p",null,"\u4ea4\u6362\u94fe\u8868\uff0c\u9700\u8981\u6539\u52a8 3 \u5904\u7ed3\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".next")," \u5173\u7cfb\uff0c\u4e5f\u5c31\u662f\u8bf4\u9700\u8981\u4e09\u4e2a\u6307\u9488\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u865a\u62df\u5934\u6307\u9488\uff0c\u4ee5\u89e3\u51b3 head \u7ed3\u70b9\u4e5f\u9700\u8981\u79fb\u52a8\u7684\u95ee\u9898\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u81ea\u5df1\u753b\u4e2a\u56fe\uff0c\u5c31\u660e\u767d\u903b\u8f91\u4e86\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"p"},"O(1)"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"b",src:t(4063).Z,width:"1456",height:"456"})),(0,r.kt)("p",null,"\u4e00\u5171\u6709\u4e09\u6b65\uff0c\u4f46\u987a\u5e8f\u53ef\u4ee5\u53cd\u8fc7\u6765\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var swapPairs = function (head) {\n  if (!head || !head.next) return head;\n  // \u865a\u62df\u5934\u8282\u70b9\n  const res = new ListNode('', head);\n  \n  // cur \u6307\u5411\u4e24\u4e2a\u88ab\u4ea4\u6362\u8282\u70b9\u524d\u7684\u4e00\u4e2a\u7ed3\u70b9\n  // \u4ea4\u6362\u4e24\u4e2a\u7ed3\u70b9\uff1achange \u548c change.next (\u4e5f\u5c31\u662ftemp).\n  let [cur, change] = [res, head];\n  \n  while (change && change.next) {\n    const temp = change.next;\n    change.next = temp.next;    // \u6b65\u9aa4\u4e09\n    temp.next = change;     // \u6b65\u9aa4\u4e8c\n    cur.next = temp;        // \u6b65\u9aa4\u4e00\n    // \u6307\u9488\u5f80\u524d\u79fb\u52a8\n    cur = change;\n    change = change.next;\n  }\n  return res.next;\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u8fed\u4ee3-1"},"\u65b9\u6cd5\u4e8c\uff1a\u8fed\u4ee3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fd4\u56de\uff0chead \u548c head.next \u5b8c\u6210\u4ea4\u6362\u7684\u94fe\u8868\nvar swapPairs = function (head) {\n  if (!head || !head.next) return head;\n\n  // newNode \u662f\u540e\u9762\u4ea4\u6362\u597d\u7684\u94fe\u8868\n  const newNode = swapPairs(head.next.next);\n\n  // head \u548c head.next(temp) \u4ea4\u6362\u4f4d\u7f6e\uff0c\u4ea4\u6362\u540e\u94fe\u8868\u5934\u5c31\u662ftamp\u4e86\uff0c\u6240\u4ee5return temp\u3002\n  const temp = head.next;\n  temp.next = head;\n  head.next = newNode;\n  return temp;\n};\n")),(0,r.kt)("h2",{id:"19-\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c-n-\u4e2a\u7ed3\u70b9"},"19. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u7ed3\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/"},"19. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u7ed3\u70b9")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0cmid\uff0cquick")),(0,r.kt)("p",null,"\u53cc\u6307\u9488 / \u5feb\u6162\u6307\u9488\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"left \u548c right\u3002right \u5728 left \u7684\u53f3\u8fb9\uff0c\u4e0e left \u4e00\u76f4\u4fdd\u6301 n \u7684\u8ddd\u79bb\u3002"),(0,r.kt)("li",{parentName:"ul"},"right \u4ece index = n \u5f00\u59cb\u5411\u540e\u904d\u5386\uff0c\u76f4\u5230\u904d\u5386\u5230\u94fe\u8868\u7684\u7ed3\u5c3e\u4e3a\u6b62\uff0c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6b64\u65f6 right \u5219\u6307\u5411\u4e86\u5f85\u5220\u9664\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u7ed3\u70b9\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,r.kt)("inlineCode",{parentName:"li"},"left.next")," \u7ed3\u70b9\u5373\u5c06\u88ab\u5220\u9664\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u6808\u7ed3\u6784\u4e5f\u53ef\u4ee5\uff0c\u5148\u628a\u6240\u6709\u8282\u70b9\u653e\u5165\u6808\u4e2d\uff0c\u7136\u540e\u5411\u5916\u53d6 n \u4e2a\u8282\u70b9\uff0c\u5219\u6b63\u597d\u53d6\u51fa\u5e26\u5220\u9664\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u8282\u70b9\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var removeNthFromEnd = function (head, n) {\n  res = new ListNode('', head);  // \u865a\u62df\u5934\n  let [left, right] = [res, res];\n\n  // right \u6307\u9488\u5148\u8d70 n \u4e2a\u8ddd\u79bb\n  for (let i = 0; i < n; i++)  right = right.next;\n  \n  // left \u548c right \u4e00\u8d77\u8d70\uff0c\u76f4\u5230 right \u6307\u5411\u94fe\u8868\u5c3e\n  while (right.next) {\n    [left, right] = [left.next, right.next];\n  }\n\n  // \u6b64\u65f6 left \u6307\u5411\u5e26\u5220\u9664\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u7ed3\u70b9\n  left.next = left.next.next;\n\n  return res.next;\n};\n")),(0,r.kt)("h2",{id:"\u9762\u8bd5\u9898-0207-\u94fe\u8868\u76f8\u4ea4"},"\u9762\u8bd5\u9898 02.07. \u94fe\u8868\u76f8\u4ea4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/"},"\u9762\u8bd5\u9898 02.07. \u94fe\u8868\u76f8\u4ea4")),(0,r.kt)("li",{parentName:"ul"},"0505\uff0ceasy\uff0canswer"),(0,r.kt)("li",{parentName:"ul"},"\u53cc\u6307\u9488")),(0,r.kt)("p",null,"\u9519\u8bef\u539f\u56e0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6d89\u53ca\u5230\u5f53\u53d8\u91cf\u6709\u70b9\u591a\uff1a\u6709\u4e24\u4e2a\u94fe\u8868\u3001\u4e24\u4e2a\u6307\u9488\u3001\u4e24\u4e2a\u957f\u5ea6\u3002\u6240\u4ee5\u9700\u8981\u5bf9\u6bcf\u4e00\u4e2a\u64cd\u4f5c\u6b65\u9aa4\u4ed4\u7ec6\u6838\u5bf9\u3002\u6211\u5c31\u662f\u5728\u5176\u4e2d\u6709\u5f88\u591a\u5c0f\u9519\u8bef\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u6ca1\u6709\u5b9a\u4e49\u76f4\u63a5\u4f7f\u7528\uff1b"),(0,r.kt)("li",{parentName:"ul"},"while \u5faa\u73af\u65f6\uff0c\u53ea\u79fb\u52a8\u4e86\u53d8\u91cf a\uff0c\u6ca1\u6709\u79fb\u52a8\u53d8\u91cf b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53d8\u91cf curL\uff0c\u518d\u540e\u9762\u628a curL \u6539\u540d\u65f6\uff0c\u6ca1\u6709\u5bf9\u6240\u6709\u7684 curL \u5168\u90e8\u66f4\u6362\u540d\u5b57\u3002")))),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488\u6c42\u957f\u5ea6"},"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488\uff5c\u6c42\u957f\u5ea6"),(0,r.kt)("p",null,"\u6c42\u4e24\u4e2a\u94fe\u8868\u4ea4\u70b9\u8282\u70b9\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6307\u9488"),"\u3002 \u4ea4\u70b9\u4e0d\u662f\u6570\u503c\u76f8\u7b49\uff0c\u800c\u662f\u6307\u9488\u76f8\u7b49\u3002\u6240\u4ee5\u5728\u4e00\u4e2a\u94fe\u8868\u4e0a\uff0c\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u76f8\u540c\u503c\u7684\u8282\u70b9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5148\u6c42\u51fa\u4e24\u4e2a\u94fe\u8868\u5404\u81ea\u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u957f\u5ea6"),"\uff0c\u5e76\u6c42\u51fa\u4e24\u4e2a\u94fe\u8868\u957f\u5ea6\u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u5dee\u503c")," ",(0,r.kt)("inlineCode",{parentName:"li"},"gap"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4e2d\uff0c curA \u6c38\u8fdc\u6307\u5411\u66f4\u957f\u7684\u4e00\u4e2a\u94fe\u8868\uff0c\u6b64\u65f6\u8ba9 curA \u79fb\u52a8\u5230\uff0c\u548c curB \u672b\u5c3e\u5bf9\u9f50\u7684\u4f4d\u7f6e\uff0c\u4e5f\u5c31\u662f\u5411\u540e\u79fb\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"gap")," \u4e2a\u8ddd\u79bb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7136\u540e\u5c31\u53ef\u4ee5\u7528 while \u5faa\u73af\uff0c\u540c\u65f6\u904d\u5386 curA \u548c curB \u4e86\uff0c\u5f53\u4ed6\u4eec\u4e24\u4e2a\u76f8\u7b49\u65f6\uff0c\u5219\u8868\u660e\u6307\u5411\u4e86\u540c\u4e00\u4e2a\u8282\u70b9\uff0c\u8fd4\u56de\u5373\u53ef\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"d",src:t(2095).Z,width:"880",height:"588"})),(0,r.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u4e24\u6b21\u83b7\u5f97\u94fe\u8868\u7684\u957f\u5ea6\uff1a",(0,r.kt)("em",{parentName:"p"},"O(m+n)"),"\uff0c\u7136\u540e\u4ece\u5934\u904d\u5386\u4e00\u6b21\u94fe\u8868\uff1a",(0,r.kt)("em",{parentName:"p"},"O(m)")," ==> ",(0,r.kt)("em",{parentName:"p"},"O(m + 2n)")," \u5047\u8bbe n \u4e3a \u66f4\u77ed\u7684\u4e00\u8fb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var getIntersectionNode = function (headA, headB) {\n  // \u62ff\u5230\u66f4\u77ed\u7684\u4e00\u4e2a, lenA is longer\n  let [lenA, lenB] = [getLen(headA), getLen(headB)];\n  if (lenA < lenB) {\n    [lenA, lenB] = [lenB, lenA];\n    [headA, headB] = [headB, headA];\n  }\n  let gap = lenA - lenB;\n\n  // \u5bf9\u957f\u94fe\u8868\u8fdb\u884c\u79fb\u52a8\n  let [curA, curB] = [headA, headB];\n  while (gap-- > 0) curA = curA.next;\n\n  while (curA) {\n    if (curA === curB) return curA;\n    curA = curA.next;\n    curB = curB.next;\n  }\n  return null;\n\n  // \u83b7\u53d6\u94fe\u8868\u7684\u957f\u5ea6\uff1a\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\n  function getLen(list) {\n    let len = 0, cur = list;\n    while (cur) {\n      cur = cur.next;\n      len++;\n    }\n    return len;\n  }\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488\u6570\u5b66\u601d\u7ef4"},"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488\uff5c\u6570\u5b66\u601d\u7ef4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u603b\u7ed3\u6570\u5b66\u89c4\u5f8b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/mian-shi-ti-0207-lian-biao-xiang-jiao-sh-b8hn/"},"\ud83d\udd17"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aa",src:t(8880).Z,width:"1097",height:"1303"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"li"},"O(a+b)"),"\n\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"li"},"O(1)"),"\u3002 \u8282\u70b9\u6307\u9488 A , B \u4f7f\u7528\u5e38\u6570\u5927\u5c0f\u7684\u989d\u5916\u7a7a\u95f4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var getIntersectionNode = function(headA, headB) {\n    if (headA === null || headB === null) {\n        return null;\n    }\n    let pA = headA, pB = headB;\n    while (pA !== pB) {\n        pA = pA === null ? headB : pA.next;\n        pB = pB === null ? headA : pB.next;\n        console.log(pA, pB);\n    }\n    return pA;\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e09set\u54c8\u5e0c\u96c6\u5408"},"\u65b9\u6cd5\u4e09\uff1aSet\uff5c\u54c8\u5e0c\u96c6\u5408"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," \u53ea\u80fd\u4fdd\u5b58 ",(0,r.kt)("strong",{parentName:"p"},"\u552f\u4e00")," ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," \uff0c\u4e14 ",(0,r.kt)("strong",{parentName:"p"},"\u6709\u5e8f")," \u6765\u786e\u5b9a\u662f\u5426\u6307\u5411\u540c\u4e00\u8282\u70b9\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d41\u7a0b\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"headA")," \u4e2d\u6240\u6709\u8282\u70b9\u653e\u5165 set \u4e2d\uff08",(0,r.kt)("em",{parentName:"li"},"O(n)"),"\uff09\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u628a\u4ece\u5934\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"li"},"headB"),"\uff0c\u76f4\u5230\u53d1\u73b0 cur \u548c set \u5df2\u7ecf\u4fdd\u5b58\u7684\u67d0\u4e2a\u6307\u9488\u6307\u5411\u540c\u4e00\u4e2a\u8282\u70b9\uff0c\u8bc1\u660e\u4ece\u8fd9\u4e2a\u8282\u70b9\u5f00\u59cb\u540e\u9762\u90fd\u662f\u91cd\u590d\u7684\u3002",(0,r.kt)("em",{parentName:"li"},"O(m)")),(0,r.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u627e\u5230\u7684\u8282\u70b9\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"p"},"O(m+n)"),"\uff0c\u5176\u4e2d m \u548c n \u662f\u5206\u522b\u662f\u94fe\u8868 head \u548c headB \u7684\u957f\u5ea6\u3002\u9700\u8981\u904d\u5386\u4e24\u4e2a\u94fe\u8868\u5404\u4e00\u6b21\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("em",{parentName:"p"},"O(m)"),"\uff0c\u5176\u4e2d m \u662f\u94fe\u8868 headA \u7684\u957f\u5ea6\u3002\u9700\u8981\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\u94fe\u8868 headA \u4e2d\u7684\u5168\u90e8\u8282\u70b9\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var getIntersectionNode = function(headA, headB) {\n    const set = new Set();\n    let cur = headA;\n    while (cur !== null) {\n        cur.add(cur);\n        cur = cur.next;\n    }\n    cur = headB;\n    while (cur !== null) {\n        if (cur.has(cur)) {\n            return cur;\n        }\n        cur = cur.next;\n    }\n    return null;\n};\n")),(0,r.kt)("h2",{id:"142-\u73af\u5f62\u94fe\u8868-ii"},"142. \u73af\u5f62\u94fe\u8868 II"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle-ii/"},"142. \u73af\u5f62\u94fe\u8868 II")),(0,r.kt)("li",{parentName:"ul"},"0506\uff0cmid\uff0cquick")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e00set\u54c8\u5e0c\u96c6\u5408"},"\u65b9\u6cd5\u4e00\uff1aSet\uff5c\u54c8\u5e0c\u96c6\u5408"),(0,r.kt)("p",null,"\u548c\u4e0a\u9898\uff08\u9762\u8bd5\u9898 02.07.\uff09\u7684\u65b9\u6cd5\u4e09\u4e00\u6837\uff0c\u4f7f\u7528 set \u54c8\u5e0c\u96c6\u5408\u6765\u89e3\u51b3\u627e\u591a\u6307\u9488\u6307\u5411\u540c\u4e00\u8282\u70b9\u7684\u95ee\u9898\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set \u5177\u6709\u4e24\u4e2a\u7279\u70b9\uff1a\u6210\u5458\u4ec5\u6709 value \u4e14\u552f\u4e00\uff1b\u6210\u5458\u6709\u5e8f\u4e14\u6309\u7167\u52a0\u5165\u65f6\u95f4\u6392\u5e8f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var detectCycle = function (head) {\n  const set = new Set();\n  let cur = head;\n  while (cur) {\n    if (set.has(cur)) return cur;\n    set.add(cur);\n    cur = cur.next;\n  }\n  return null\n};\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u5feb\u6162\u6307\u9488"},"\u65b9\u6cd5\u4e8c\uff1a\u5feb\u6162\u6307\u9488"),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%9D%E8%B7%AF"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("p",null,"\u7b80\u5355\u8bf4\uff0c\u5c31\u662f fast \u4e00\u6b21\u4e24\u6b65\uff0cslow \u4e00\u6b21\u4e00\u6b65\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u6709\u73af\uff08\u56fe\u4e00\uff09\uff1a\u5982\u679c fast \u548c slow \u76f8\u9047\uff0c\u5c31\u662f\u6709\u73af\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u73af\u7684\u5165\u53e3\uff08\u56fe\u4e8c\uff09\uff1a\u4ece\u5934\u7ed3\u70b9\u51fa\u53d1\u4e00\u4e2a\u6307\u9488\uff0c\u4ece\u76f8\u9047\u8282\u70b9 \u4e5f\u51fa\u53d1\u4e00\u4e2a\u6307\u9488\uff0c\u8fd9\u4e24\u4e2a\u6307\u9488\u6bcf\u6b21\u53ea\u8d70\u4e00\u4e2a\u8282\u70b9\uff0c \u90a3\u4e48\u5f53\u8fd9\u4e24\u4e2a\u6307\u9488\u76f8\u9047\u7684\u65f6\u5019\u5c31\u662f \u73af\u5f62\u5165\u53e3\u7684\u8282\u70b9\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"av",src:t(2756).Z,width:"568",height:"402"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ae",src:t(7555).Z,width:"572",height:"414"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var detectCycle = function (head) {\n  if (!head || !head.next || !head.next.next) return null;\n\n  // \u5224\u65ad\u73af\u5f62\n  let [slow, fast] = [head.next, head.next.next];  // \u2757\ufe0f\u6ce8\u610f\uff0c\u8fd9\u91cc\u5148\u8d70\u4e00\u6b65\uff0c\u4e0d\u80fd [head, head.next] \u8fd9\u6837\u4e0d\u7b97\u5b8c\u6574\u7684\u4e00\u6b65\n  while (slow !== fast) { \n    if (!fast.next || !fast.next.next) return null;  // \u904d\u5386\u5230\u94fe\u5c3e\uff0c\u5f53\u524d\u73af\u5f62\u4e0d\u5b58\u5728\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n\n  // \u5224\u65ad\u5165\u53e3 slow \u4ece\u5934\u8d70\uff0c fast \u4ece\u4ea4\u70b9\u5f80\u540e\u8d70\n  slow = head;\n  while (slow !== fast) {\n    slow = slow.next;\n    fast = fast.next;\n  }\n  return slow;\n};\n")),(0,r.kt)("p",null,"======= experience ============================================="),(0,r.kt)("p",null,"\u94fe\u8868\u3001\u5e26\u6709 index \u64cd\u4f5c\u7684\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 iPad \u4e0a\u7b80\u5355\u7684\u7ed8\u5236\u6d41\u7a0b\u56fe\uff0c\u548c code\uff0c\u53ef\u4ee5\u4f7f\u8c03\u7406\u66f4\u6e05\u6670\u3002")),(0,r.kt)("p",null,"======= summary 1 ============================================="),(0,r.kt)("p",null,"Map \u548c Set \u7684\u533a\u522b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set \u548c Array \u7c7b\u4f3c\uff0c\u6ca1\u6709 key\uff0c\u53ea\u6709 value\u3002\u4e0e array \u4e0d\u540c\u7684\u662f\uff0cSet \u7684 key \u662f\u552f\u4e00\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"Map \u548c Object \u7c7b\u4f3c\uff0c\u6709 key \u548c value\u3002\u4e0e Object \u4e0d\u540c\u7684\u662f\uff0cMap \u7684 key \u4e0d\u4ec5\u4ec5\u662f string\u3001symbol\uff0c\u8fd8\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e Set\u3001Map \u7684\u64cd\u4f5c API \u548c \u8fed\u4ee3\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"},"MDN: Set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map"},"MDN: Map")))),(0,r.kt)("p",null,"\u8bb0\u5f55\u51e0\u4e2a\u7279\u6b8a\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u901a\u5e38\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"for ... of"),"\uff0cMap \u548c Set \u4f7f\u7528\u65b9\u6cd5\u76f8\u540c\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"for (const key of myMap.keys()"),"\u3001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"for (const value of myMap.values()"),"\u3001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"for (const [key, value] of myMap.entries())"),"\u3001"))),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e00\u4e2a\u6210\u5458\u6709\u4e0d\u540c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Map.set()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Set.add()"),";")),(0,r.kt)("p",null,"\u95ee\uff1ajs \u91cc\u9762 Map \u548c Set \u5b58 / \u53d6\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff1f"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," \u4ec5\u4ec5\u4f5c\u4e3a JS \u4e2d\u7684\u7c7b\u578b\u51fa\u73b0\uff0c\u5e76\u6ca1\u6709\u6240\u8c13\u7684\u89c4\u8303\u6e90\u7801\uff0c\u5176\u5b9e\u73b0\u5b8c\u5168\u53d6\u51b3\u4e8e\u5404\u5bb6\u6d4f\u89c8\u5668\u7684 JS \u5f15\u64ce\u600e\u4e48\u505a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u867d\u7136\u6d4f\u89c8\u5668\u7684\u5b9e\u73b0\u6ca1\u6709\u7ea6\u675f\uff0c\u4f46\u662f\u54c8\u5e0c\u8868\u53ef\u4ee5\u5b9e\u73b0O(1)\u5b58\u53d6\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u6d4f\u89c8\u5668\u6ca1\u7406\u7531\u5b9e\u73b0\u5f97\u66f4\u5dee\u5427\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Chrome \u7684 V8 \u5f15\u64ce\u4e3a\u4f8b\uff0c\u5176\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u7684\u6e90\u7801\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://link.segmentfault.com/?enc=VOONZO9qcluZT1Ws4xxVAg%3D%3D.oFaUjZbdWQT0MtBl9RVkX8NJZBe1wytP%2F7l7Qxyl7b9cImun9GrHIo2cghVzOHavnLx0N6uYIrWOKsTYoG4%2Bnw%3D%3D"},"https://github.com/v8/v8/blob...")," \u4e2d\uff0c\u611f\u5174\u8da3\u53ef\u4ee5\u81ea\u5df1\u53bb\u9605\u8bfb\u3002\u4e3b\u8981\u8fd0\u7528\u7684\u662f Hash Table\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(1)\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7efc\u4e0a\uff0c\u53ef\u4ee5\u8ba4\u4e3a map \u548c set \u7684\u5b58\u53d6\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f O(1)\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u9047\u5230\u4e86\u8981\u5feb\u901f\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u51fa\u73b0\u96c6\u5408\u91cc\u7684\u65f6\u5019\uff0c\u5c31\u8981\u8003\u8651\u54c8\u5e0c\u6cd5"),"\u3002"),(0,r.kt)("p",null,"Set \u5c31\u662f\u4e00\u4e2a hash table\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u968f\u60f3\u5f55\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%93%88%E5%B8%8C%E8%A1%A8"},"\u54c8\u5e0c\u8868"),"\u3002")),(0,r.kt)("h2",{id:"2-\u4e24\u6570\u76f8\u52a0"},"2. \u4e24\u6570\u76f8\u52a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.cn/problems/add-two-numbers/"},"2. \u4e24\u6570\u76f8\u52a0")),(0,r.kt)("li",{parentName:"ul"},"0613\uff0cmid\uff0canswer"),(0,r.kt)("li",{parentName:"ul"},"\u94fe\u8868\u57fa\u7840")),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6ca1\u505a\u51fa\u6765\uff1f"),(0,r.kt)("p",null,"p1\u3001p2 \u4e24\u4e2a\u6307\u9488\u5206\u522b\u6307\u5411\u4e24\u4e2a\u5f85\u76f8\u52a0\u7684\u94fe\u8868\uff0c\u5f53\u8f83\u77ed\u7684\u5df2\u7ecf\u904d\u5386\u5b8c\uff0c\u8fd8\u9700\u8981\u904d\u5386\u8f83\u957f\u7684\u94fe\u8868\u65f6\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u7684\u5904\u7406\u65b9\u6848\uff1a\u628a\u8f83\u957f\u7684\u94fe\u8868\u540e\u7eed\u8282\u70b9\u76f4\u63a5\u63a5\u5230\u7ed3\u679c p3 \u4e0a\uff0c\u7136\u540e\u5224\u65ad\u662f\u5426\u9700\u8981\u8fdb\u4f4d\u3002\u5982\u679c\u8981\u8fdb\u4f4d\uff0c\u5219\u518d\u5411\u540e\u904d\u5386\u6bcf\u4e2a\u8282\u70b9\uff0c\u6539\u53d8\u8282\u70b9\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5904\u7406\u65b9\u6848\uff1a\u4e0d\u4f1a\u628a\u8f83\u957f\u94fe\u8868\u7684\u540e\u7eed\u8282\u70b9\u76f4\u63a5\u63a5\u5728\u7ed3\u679c\u94fe\u8868\u4e2d\uff0c\u800c\u662f\u4ee4\u8f83\u77ed\u94fe\u8868\u7684\u503c\u5f53\u4f5c 0\uff0c\u5f53\u4f5c\u4e24\u4e2a\u94fe\u8868\u90fd\u6709\u503c\uff0c\u6b63\u5e38\u7684\u76f8\u52a0\u548c\u8fdb\u4f4d\u3002\u5f53\u4e24\u4e2a\u94fe\u8868\u90fd\u904d\u5386\u5b8c\uff0c\u5224\u65ad\u662f\u5426\u8fd8\u6709\u8fdb\u4f4d\uff0c\u6709\u7684\u8bdd\u521b\u5efa\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u8d4b\u503c\u4e3a 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var addTwoNumbers = function (l1, l2) {\n  // \u662f\u5426\u8fdb\u4f4d\n  let nextVal = 0;\n  const root = new ListNode(0, null);\n  let p1 = l1, p2 = l2, p3 = root;\n\n  while (p1 || p2) {\n    // console.log(p1.val, p2.val, nextVal);\n    // \u5982\u679c\u6709\u5176\u4e2d\u4e00\u4e2a\u4e3a\u7a7a\uff0c\u5219\u8df3\u8fc7\u6dfb\u52a0\u8be5\u4f4d\n    const p1Val = p1 ? p1.val : 0;\n    const p2Val = p2 ? p2.val : 0;\n    const sum = p1Val + p2Val + nextVal;\n    nextVal = sum >= 10 ? 1 : 0;\n    p3.next = new ListNode(sum % 10); // \u521b\u5efa\u5f53\u524d\u8282\u70b9\u5e76\u6dfb\u52a0\u503c\n\n    // \u91cd\u7f6e\u6307\u9488\n    p1 = p1?.next;\n    p2 = p2?.next;\n    p3 = p3.next;\n  }\n  // \u6b64\u65f6l1\uff0cl2\u4e24\u4e2a\u8282\u70b9\u90fd\u4e3a\u7a7a\uff0c\u5224\u65ad\u5982\u679c\u6709\u8fdb\u4f4d\uff0c\u5219\u521b\u5efa\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u8d4b\u503c\u4e3a1\uff1b\n  if (nextVal) p3.next = new ListNode(1);\n\n  return root.next;\n};\n")))}m.isMDXComponent=!0},8996:function(e,n,t){n.Z=t.p+"assets/images/008eGmZEly1gnrf1oboupg30gy0c44qp-4e70de3022dd0a42a9c1f88e635eafea.gif"},2756:function(e,n,t){n.Z=t.p+"assets/images/008eGmZEly1goo4xglk9yg30fs0b6u0x-8f90cc10d2a13e45734688b63add3c32.gif"},7555:function(e,n,t){n.Z=t.p+"assets/images/008eGmZEly1goo58gauidg30fw0bi4qr-f5b1a704022b205786f38d8a31fba592.gif"},2095:function(e,n,t){n.Z=t.p+"assets/images/2-86cd410decf59d42fde249a4f89dfa30.png"},4063:function(e,n,t){n.Z=t.p+"assets/images/24.temp-c57063a03306df5a1588f59e76b63025.png"},8880:function(e,n,t){n.Z=t.p+"assets/images/\u622a\u5c4f2022-05-05 \u4e0b\u53489.03.35-2f4c247529f817ee511c592c34a6416c.png"}}]);
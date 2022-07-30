"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[2590],{4137:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,s=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(s,l(l({ref:t},f),{},{components:n})):r.createElement(s,l({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),l=["components"],p={title:"10. \u7c7b\uff08ES6\uff09",sidebar_position:10,date:new Date("2022-07-26T00:00:00.000Z"),tags:["JavaScript"]},i=void 0,u={unversionedId:"frontEnd/JavaScript/z\u6a21\u5757",id:"frontEnd/JavaScript/z\u6a21\u5757",title:"10. \u7c7b\uff08ES6\uff09",description:"2 Module \u6a21\u5757",source:"@site/docs/frontEnd/JavaScript/z\u6a21\u5757.md",sourceDirName:"frontEnd/JavaScript",slug:"/frontEnd/JavaScript/z\u6a21\u5757",permalink:"/docs/frontEnd/JavaScript/z\u6a21\u5757",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:10,frontMatter:{title:"10. \u7c7b\uff08ES6\uff09",sidebar_position:10,date:"2022-07-26T00:00:00.000Z",tags:["JavaScript"]},sidebar:"JavaScript",previous:{title:"10. ES6+ \u57fa\u7840",permalink:"/docs/frontEnd/JavaScript/ES6+\u57fa\u7840"},next:{title:"11-Symbol, Set, Map",permalink:"/docs/frontEnd/JavaScript/Symbol, Set, Map"}},f={},c=[{value:"2 Module \u6a21\u5757",id:"2-module-\u6a21\u5757",level:2},{value:"2.1 export \u5bfc\u51fa",id:"21-export-\u5bfc\u51fa",level:3},{value:"1 \u547d\u540d\u5bfc\u51fa",id:"1-\u547d\u540d\u5bfc\u51fa",level:4},{value:"2 \u9ed8\u8ba4\u5bfc\u51fa",id:"2-\u9ed8\u8ba4\u5bfc\u51fa",level:4},{value:"3 \u8fde\u7eed\u5bfc\u51fa",id:"3-\u8fde\u7eed\u5bfc\u51fa",level:4},{value:"2.2 import \u5bfc\u5165",id:"22-import-\u5bfc\u5165",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2-module-\u6a21\u5757"},"2 Module \u6a21\u5757"),(0,a.kt)("p",null,"\u5373 ES Module\u3002\u5176\u5305\u542b\u7684\u4e24\u4e2a\u5173\u952e\u8bcd",(0,a.kt)("inlineCode",{parentName:"p"},"export")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"import "),"\u5747\u53ea\u80fd\u7528\u5728\u6700\u9876\u5c42\u7684\u4f5c\u7528\u57df\u4e2d\u3002"),(0,a.kt)("h3",{id:"21-export-\u5bfc\u51fa"},"2.1 export \u5bfc\u51fa"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export")," \u5173\u952e\u5b57\u653e\u5728\u58f0\u660e\u7684\u524d\u9762\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"default export")," \u5bfc\u51fa\u7684\u662f\u8fd9\u4e9b\u53d8\u91cf / \u51fd\u6570\u7684\u5730\u5740\uff08\u7c7b\u4f3c\u6307\u9488\uff09\uff0c\u800c\u4e0d\u662f\u5b83\u4eec\u7684\u503c\u3002\u6240\u4ee5\uff0c\u5728\u4e00\u4e2a\u51fd\u6570 / \u53d8\u91cf\u88ab\u5bfc\u51fa\u540e\uff0c\u8fd9\u4e2a\u51fd\u6570 / \u53d8\u91cf\u7684\u7ed3\u6784\u6216\u503c\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u5916\u90e8\u4e5f\u4f1a\u5f97\u5230\u5bf9\u5e94\u7684\u66f4\u65b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"export")," \u5bfc\u51fa\u7684\u662f\u53d8\u91cf\u540d\u79f0\uff08\u6807\u8bc6\u7b26\uff09\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u8fd9\u4e2a\u53d8\u91cf\u6307\u5411\u4e86\u65b0\u7684\u51fd\u6570\uff0c\u5c31\u4f1a\u5bfc\u51fa\u65b0\u7684\u51fd\u6570\u3002"))),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301\u53cc\u5411\u7ed1\u5b9a"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u652f\u6301\u5bf9\u4e00\u4e2a\u5bfc\u5165\u7684\u6a21\u5757\u8fdb\u884c\u4fee\u6539\uff0c\u53ea\u80fd\u8bfb\u53d6\u548c\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u6a21\u5757\u5185\u6ca1\u6709\u5168\u5c40\u4f5c\u7528\u57df\u3002\u5728\u6a21\u5757\u5185\u662f\u4e00\u4e2a\u6a21\u5757\u7684\u4f5c\u7528\u57df\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6a21\u5757\u5185\u6ca1\u6709\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"export")," \u6807\u8bc6\u7684\u53d8\u91cf / \u51fd\u6570\u90fd\u5728\u83ab\u5757\u4f5c\u7528\u57df\u5185\u90e8\u4fdd\u6301\u79c1\u6709\uff0c\u88ab\u6807\u8bc6\u7684\u5219\u4f1a\u88ab\u5bfc\u51fa\u3002")),(0,a.kt)("h4",{id:"1-\u547d\u540d\u5bfc\u51fa"},"1 \u547d\u540d\u5bfc\u51fa"),(0,a.kt)("p",null,"\u547d\u540d\u5bfc\u51fa\uff1a\u5bfc\u51fa\u53d8\u91cf / \u51fd\u6570\u65f6\uff0c\u628a\u6807\u8bc6\u7b26\u540d\u79f0\u5bfc\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u65b9\u5f0f\u4e00\nexport function foo() {...}\nexport let arr = [1,2,3]\nexport let a = 42\n\n// \u65b9\u5f0f\u4e8c\nfunction foo() {...}\nlet arr = [1, 2, 3]\nlet a = 42\nexport {foo, arr, a}\n")),(0,a.kt)("p",null,"\u5bfc\u51fa\u65f6\u53ef\u4ee5\u91cd\u547d\u540d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {...}\nexport {foo as bar}\n")),(0,a.kt)("h4",{id:"2-\u9ed8\u8ba4\u5bfc\u51fa"},"2 \u9ed8\u8ba4\u5bfc\u51fa"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5bfc\u51fa\uff0c\u628a\u4e00\u4e2a\u7279\u5b9a\u5bfc\u51fa\uff0c\u7ed1\u5b9a\u8bbe\u7f6e\u4e3a\u5bfc\u5165\u6a21\u5757\u65f6\u7684\u9ed8\u8ba4\u5bfc\u51fa\u3002\u7ed1\u5b9a\u7684\u540d\u79f0\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u6a21\u5757\u5b9a\u4e49\u53ea\u80fd\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"default"),"  \u9ed8\u8ba4\u5bfc\u51fa\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"strong"},"export default")," \u5bfc\u51fa\u7684\u662f\u5177\u4f53\u51fd\u6570\u5730\u5740\uff0c\u5176\u4f59 export \u90fd\u662f\u5bfc\u51fa\u6807\u8bc6\u7b26\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u60c5\u51b5\u4e00: \u5bfc\u51fa\u7684\u662f\u5177\u4f53\u51fd\u6570\nfunction foo() {...}\nexport default foo\n                \n// \u60c5\u51b5\u4e8c: \u5bfc\u51fa\u7684\u662f\u5177\u4f53\u51fd\u6570\nexport default function foo() {...}\n\n// \u60c5\u51b5\u4e09: \u5bfc\u51fa\u7684\u662ffoo\u6807\u8bc6\u7b26\nfunction foo() {...}\nexport { foo as default }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export default ..")," \u63a5\u6536\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5bfc\u51fa\u7684\u662f\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u8fd4\u56de\u5730\u5740\u503c\u3002"),(0,a.kt)("p",null,"\u60c5\u51b5\u4e00 \u548c \u60c5\u51b5\u4e8c\uff1a\u9ed8\u8ba4\u5bfc\u51fa\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7ed1\u5b9a\u7684\u90a3\u4e2a\u8868\u8fbe\u5f0f\u5730\u5740\uff0c\u800c\u4e0d\u662f\u6807\u8bc6\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u540e\u7eed\u4ee3\u7801\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u4fee\u6539\u5f15\u7528\u4e86\u5176\u4ed6\u51fd\u6570 / \u53d8\u91cf\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u7684\u4f9d\u7136\u662f\u6700\u521d\u7684\u90a3\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e00\u548c\u60c5\u51b5\u4e8c\uff0c\u662f\u4e24\u79cd\u4e0d\u540c\u7684\u8868\u8fbe\u65b9\u5f0f\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528\u66f4\u7b80\u6d01\u7684\u60c5\u51b5\u4e8c\u3002")),(0,a.kt)("p",null,"\u60c5\u51b5\u4e09\uff1a\u9ed8\u8ba4\u5bfc\u51fa\u7684\u662f\u6807\u8bc6\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u540e\u7eed\u5982\u679c\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u6807\u8bc6\u7b26\u5f15\u7528\u522b\u7684\u51fd\u6570 / \u53d8\u91cf\uff0c\u5bfc\u51fa\u7684\u503c\u4e5f\u5c31\u8ddf\u7740\u53d1\u751f\u6539\u53d8\uff0c"),(0,a.kt)("h4",{id:"3-\u8fde\u7eed\u5bfc\u51fa"},"3 \u8fde\u7eed\u5bfc\u51fa"),(0,a.kt)("p",null,"\u8fde\u7eed\u5bfc\u51fa\uff0c\u5f53\u4ece\u4e00\u4e2a\u6a21\u5757\u5bfc\u5165\u4e00\u4e9b\u51fd\u6570 / \u53d8\u91cf\u540e\uff0c\u53ef\u4ee5\u9009\u62e9\u518d\u6b21\u5c06\u5b83\u4eec\u5bfc\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export {foo, bar} from "baz";\nexport {foo as f, bar as b} from "baz";\nexport * from "baz";\n')),(0,a.kt)("h3",{id:"22-import-\u5bfc\u5165"},"2.2 import \u5bfc\u5165"),(0,a.kt)("p",null,"\u5bfc\u5165\u4e00\u4e2a\u6a21\u5757 API \u7684\u67d0\u4e2a\u7279\u5b9a\u6210\u5458\u5230\u5f53\u524d\u6a21\u5757\u7684\u9876\u5c42\u4f5c\u7528\u57df\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {foo, bar, baz} from "foo";\n\n// \u652f\u6301\u91cd\u547d\u540d\nimport {foo as f} from "foo";\n\n// \u53ea\u6709\u4e00\u4e2a\u5bfc\u5165\u6a21\u5757\u65f6\uff0c\u7701\u7565\u62ec\u53f7\nimport foo from "foo";\n\n// \u628afoo.js \u9ed8\u8ba4\u5bfc\u51fa \u548c \u547d\u540d\u5bfc\u51fa \u7684\u6210\u5458\uff0c\u5168\u90e8\u4e00\u8d77\u5bfc\u5165\uff1a\nimport defaultFoo, {bar, baz as b} from "foo";\n// defaultFoo \u5c31\u662f\u9ed8\u8ba4\u5bfc\u51fa\u7684\u6210\u5458\uff0c\u6b64\u4e3a\u5bf9\u8fd9\u4e2a\u6210\u5458\u8fdb\u884c\u547d\u540d\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u5bfc\u5165 namespace import")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as foo from "foo"\n\n// \u8be5\u65b9\u5f0f\u5fc5\u987b\u7528\u901a\u914d\u7b26\uff0c\u4e0d\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u53ea\u5bfc\u5165\u4e00\u90e8\u5206\uff1a\nimport {bar,baz} as foo from "foo"\n')),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u601d\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"foo.js")," \u6587\u4ef6\u4e2d\uff0c\u5bfc\u51fa\u7684\u6210\u5458\u5168\u90e8\u5bfc\u5165\u5230\u5f53\u524d\u6a21\u5757\u4e2d\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u628a\u8fd9\u4e9b\u6210\u5458\u5168\u90e8\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"foo")," \u5bf9\u8c61\u540d\u4e0b\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u5168\u90e8\u5bfc\u5165\u4e2d\uff0c\u6709\u9ed8\u8ba4\u6210\u5458\uff0c\u5219\u8fd9\u4e2a\u9ed8\u8ba4\u6210\u5458\u7684\u540d\u79f0\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\u3002\u6bd4\u5982\u4e0a\u4f8b\u4e2d\uff0c\u8be5\u6a21\u5757\u4e2d\u5bfc\u5165\u7684\u9ed8\u8ba4\u6210\u5458\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.default"),"\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u5bfc\u5165\u7684\u6210\u5458\u662f\u53ea\u8bfb\u7684\uff0c\u4e0d\u53ef\u4fee\u6539\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError!")))}d.isMDXComponent=!0}}]);
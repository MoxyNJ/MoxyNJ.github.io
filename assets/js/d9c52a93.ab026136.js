"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[3030],{4137:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,s=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),c=p(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return t?a.createElement(k,o(o({ref:e},m),{},{components:t})):a.createElement(k,o({ref:e},m))}));function d(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},510:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(7462),l=t(3366),r=(t(7294),t(4137)),o=["components"],i={title:"10. ES6+ \u57fa\u7840",sidebar_position:10,date:new Date("2022-07-27T00:00:00.000Z"),tags:["JavaScript"]},s=void 0,p={unversionedId:"frontEnd/JavaScript/ES6+\u57fa\u7840",id:"frontEnd/JavaScript/ES6+\u57fa\u7840",title:"10. ES6+ \u57fa\u7840",description:"1 ES6 \u57fa\u7840",source:"@site/docs/frontEnd/JavaScript/10-ES6+\u57fa\u7840.md",sourceDirName:"frontEnd/JavaScript",slug:"/frontEnd/JavaScript/ES6+\u57fa\u7840",permalink:"/docs/frontEnd/JavaScript/ES6+\u57fa\u7840",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:10,frontMatter:{title:"10. ES6+ \u57fa\u7840",sidebar_position:10,date:"2022-07-27T00:00:00.000Z",tags:["JavaScript"]},sidebar:"JavaScript",previous:{title:"9. \u7ee7\u627f\u548c\u7c7b",permalink:"/docs/frontEnd/JavaScript/\u7ee7\u627f\u548c\u7c7b"},next:{title:"10. \u7c7b\uff08ES6\uff09",permalink:"/docs/frontEnd/JavaScript/z\u6a21\u5757"}},m={},u=[{value:"1 ES6 \u57fa\u7840",id:"1-es6-\u57fa\u7840",level:2},{value:"1.1 \u5b57\u9762\u91cf\u589e\u5f3a",id:"11-\u5b57\u9762\u91cf\u589e\u5f3a",level:3},{value:"1.2 \u89e3\u6784 Destructuring",id:"12-\u89e3\u6784-destructuring",level:3},{value:"1.3 \u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32",id:"13-\u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32",level:3},{value:"1.4 \u51fd\u6570\u7684\u9ed8\u8ba4\u53c2\u6570",id:"14-\u51fd\u6570\u7684\u9ed8\u8ba4\u53c2\u6570",level:3},{value:"1.5 \u51fd\u6570\u7684\u5269\u4f59\u53c2\u6570",id:"15-\u51fd\u6570\u7684\u5269\u4f59\u53c2\u6570",level:3},{value:"1.6 \u5c55\u5f00\u8bed\u6cd5",id:"16-\u5c55\u5f00\u8bed\u6cd5",level:3},{value:"1.7 \u6570\u503c\u7684\u8868\u793a",id:"17-\u6570\u503c\u7684\u8868\u793a",level:3},{value:"2 ES7 \u57fa\u7840",id:"2-es7-\u57fa\u7840",level:2},{value:"2.1 Array.includes",id:"21-arrayincludes",level:3},{value:"2.2 \u6307\u6570(\u4e58\u65b9)",id:"22-\u6307\u6570\u4e58\u65b9",level:3},{value:"3 ES8 \u57fa\u7840",id:"3-es8-\u57fa\u7840",level:2},{value:"3.1 Object API",id:"31-object-api",level:3},{value:"3.2 String Padding",id:"32-string-padding",level:3},{value:"4 ES10 \u57fa\u7840",id:"4-es10-\u57fa\u7840",level:2},{value:"4.1 flat, flatMap",id:"41-flat-flatmap",level:3},{value:"4.2 Object.fromEntries",id:"42-objectfromentries",level:3},{value:"4.3 trimStart, trimEnd",id:"43-trimstart-trimend",level:3},{value:"5 ES11 \u57fa\u7840",id:"5-es11-\u57fa\u7840",level:2},{value:"5.1 BigInt",id:"51-bigint",level:3},{value:"5.2 <code>??</code>",id:"52-",level:3},{value:"5.3 <code>?.</code>",id:"53-",level:3},{value:"5.4 Global This",id:"54-global-this",level:3},{value:"5.5 for..in \u6807\u51c6\u5316",id:"55-forin-\u6807\u51c6\u5316",level:3}],c={toc:u};function d(n){var e=n.components,t=(0,l.Z)(n,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-es6-\u57fa\u7840"},"1 ES6 \u57fa\u7840"),(0,r.kt)("h3",{id:"11-\u5b57\u9762\u91cf\u589e\u5f3a"},"1.1 \u5b57\u9762\u91cf\u589e\u5f3a"),(0,r.kt)("p",null,"\u5c5e\u6027\u7684\u7b80\u5199\u3001\u65b9\u6cd5\u7684\u7b80\u5199\u3001\u8ba1\u7b97\u5c5e\u6027\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const name = \"why\";\nconst age = 18;\n\nconst obj = {\n  // 1.property shorthand(\u5c5e\u6027\u7684\u7b80\u5199)\n  name,\n  age,\n\n  // 2.method shorthand(\u65b9\u6cd5\u7684\u7b80\u5199)\n  foo: function() {\n    console.log(this);\n  },\n  bar() {\n    console.log(this);\n  },\n  baz: () => {\n    console.log(this);\n  },\n\n  // 3.computed property name(\u8ba1\u7b97\u5c5e\u6027\u540d)\n  [name + 123]: 'hehe'\n}\n\nobj.baz();  // window\nobj.bar();  // obj: {name: 'why', age: 18, foo: \u0192, bar: \u0192,\xa0\u2026}\nobj.foo();  // obj: {name: 'why', age: 18, foo: \u0192, bar: \u0192,\xa0\u2026}\n\n// obj[name + 123] = \"hehe\"\nconsole.log(obj) // obj: {name:'why', age:18, why123:\"hehe\",\xa0\u2026}\n")),(0,r.kt)("h3",{id:"12-\u89e3\u6784-destructuring"},"1.2 \u89e3\u6784 Destructuring"),(0,r.kt)("p",null,"\u6570\u7ec4\u7684\u89e3\u6784\u3001\u5bf9\u8c61\u7684\u89e3\u6784\u3002"),(0,r.kt)("p",null,"\u6570\u7ec4\u7684\u89e3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const names = ["abc", "cba", "nba"]\n\n// \u5bf9\u6570\u7ec4\u7684\u89e3\u6784: []\nconst [item1, item2, item3] = names;\nconsole.log(item1, item2, item3);\n\n// \u89e3\u6784\u540e\u9762\u7684\u5143\u7d20\nconst [, , itemz] = names;\nconsole.log(itemz);\n\n// \u89e3\u6784\u51fa\u4e00\u4e2a\u5143\u7d20,\u540e\u9762\u7684\u5143\u7d20\u653e\u5230\u4e00\u4e2a\u65b0\u6570\u7ec4\u4e2d\nconst [itemx, ...newNames] = names;\nconsole.log(itemx, newNames);\n\n// \u89e3\u6784\u7684\u9ed8\u8ba4\u503c\nconst [itema, itemb, itemc, itemd = "aaa"] = names;\nconsole.log(itemd);\n')),(0,r.kt)("p",null,"\u5bf9\u8c61\u7684\u89e3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var obj = {\n  name: "why",\n  age: 18,\n  height: 1.88\n}\n\n// \u5bf9\u8c61\u7684\u89e3\u6784: {}\nconst { name, age, height } = obj;\nconsole.log(name, age, height);\n\n// \u53ea\u89e3\u6784\u4e00\u4e2a\nconst { age } = obj\nconsole.log(age);\n\n// \u89e3\u6784\u540e\u91cd\u547d\u540d\nconst { name: newName } = obj;\nconsole.log(newName);\n\n// \u91cd\u547d\u540d + \u8d4b\u9ed8\u8ba4\u503c\nconst { address: newAddress = "\u5e7f\u5dde\u5e02" } = obj;\nconsole.log(newAddress);\n\n\n// \u5728\u51fd\u6570\u5165\u53c2\u65f6\u89e3\u6784\nfunction bar({name, age}) {\n  console.log(name, age);\n}\n\nbar(obj);\n')),(0,r.kt)("h3",{id:"13-\u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32"},"1.3 \u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"\u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32\uff08Tagged Template Literals\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u540e\u7684\u53c2\u6570\uff1a\u4f20\u5165\u7684\u5165\u53c2")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4f7f\u7528\u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u5728\u8c03\u7528\u7684\u65f6\u5019\u63d2\u5165\u5176\u4ed6\u7684\u53d8\u91cf\uff1a "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u677f\u5b57\u7b26\u4e32\u88ab\u62c6\u5206\u4e86\uff1b "),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u6570\u7ec4\uff0c\u662f\u88ab\u6a21\u5757\u5b57\u7b26\u4e32\u62c6\u5206\u7684\u5b57\u7b26\u4e32\u7ec4\u5408\uff1b "),(0,r.kt)("li",{parentName:"ul"},"\u540e\u9762\u7684\u5143\u7d20\u662f\u4e00\u4e2a\u4e2a\u6a21\u5757\u5b57\u7b26\u4e32\u4f20\u5165\u7684\u5185\u5bb9\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\u6807\u7b7e\u6a21\u7248\u5b57\u7b26\u4e32\uff1afoo``\n\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u4f9d\u7136\u662f\u6a21\u5757\u5b57\u7b26\u4e32\u4e2d\u6574\u4e2a\u5b57\u7b26\u4e32, \u53ea\u662f\u88ab\u5207\u6210\u591a\u5757,\u653e\u5230\u4e86\u4e00\u4e2a\u6570\u7ec4\u4e2d\n// \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6a21\u5757\u5b57\u7b26\u4e32\u4e2d, \u7b2c\u4e00\u4e2a ${}\nfunction foo(m, n, x) {\n  console.log(m, n, x, '----');\n}\n\nfoo(\"Hello\", \"World\", \"!\");  \n// Hello World ! ----\n\n// \u2757\ufe0f\u6807\u7b7e\u6a21\u5757\u5b57\u7b26\u4e32\nfoo``;\n// [''] undefined undefined '----'\n\nfoo`Hello World \uff01` ;\n// ['Hello World \uff01'] undefined undefined '----'\n\n\nconst name = \"why\";\nconst age = 18;\nfoo`Hello${name}Wo${age}rld`\n// ['Hello', 'Wo', 'rld'] 'why' 18 '----'\n")),(0,r.kt)("p",null,"\u4f7f\u7528\uff1a styled-components \u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const BannerWrapper = styled.div`\n    background : url(${props => props.bgImages}) center center;\n    \n    .banner {\n        height: 270px;\n        display: flex;\n        position: relative;\n    }\n`\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styled.div")," \u4e2d\uff0cdiv \u5176\u5b9e\u662f\u4e00\u4e2a\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u7684 div \u5c31\u4f7f\u7528\u4e86\u6807\u7b7e\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u53cd\u5f15\u53f7\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"${}")," \u4f20\u9012\u4e86\u53d8\u91cf\uff0cstyled-components \u5e93\u5c31\u901a\u8fc7\u8fd9\u4e2a\u65ad\u70b9\u8fdb\u884c\u5207\u5206\uff0c\u7136\u540e\u8f6c\u8bd1\u4e3a css \u6587\u4ef6\u3002")),(0,r.kt)("h3",{id:"14-\u51fd\u6570\u7684\u9ed8\u8ba4\u53c2\u6570"},"1.4 \u51fd\u6570\u7684\u9ed8\u8ba4\u53c2\u6570"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// es5 \u7684\u53c2\u6570\u9ed8\u8ba4\u503c\uff1a\n// \u5982\u679c\u4f20\u5165\uff1a0 \u6216 "" \u7a7a\u5b57\u7b26\u4e32\uff0c\u4f1a\u88ab\u8ba4\u4e3a false\uff0c\n// \u9700\u8981\u5b8c\u5584\u8fb9\u754c\u95ee\u9898\uff0c\u7528 arguments \u5224\u65ad\u662f\u5426\u6709\u8db3\u591f\u7684\u5165\u53c2\nfunction sum(m, n) {\n  m = m || 10;\n  n = n || 20;\n  return m + n;\n}\n\n// es6 \u7684\u53c2\u6570\u9ed8\u8ba4\u503c\uff1a\nfunction sum(m = 10, n = 20) {\n  return m + n;\n}\n\n// \u6709\u9ed8\u8ba4\u503c\u7684\u5f62\u53c2\u6700\u597d\u653e\u5230\u6700\u540e\uff08\u5f71\u54cdlength\u7684\u7edf\u8ba1\uff09\nfunction bar(x, y, z = 30) {\n  console.log(x, y, z)\n}\n')),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53c2\u6570 + \u89e3\u6784\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u89e3\u6784 = \u9ed8\u8ba4\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b49\u53f7\u53f3\u8fb9\u662f\u9ed8\u8ba4\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b49\u53f7\u5de6\u8fb9\u662f\u89e3\u6784"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function printInfo({name, age} = {name: "why", age: 18}) {\n  console.log(name, age);\n}\n\nprintInfo(); // why 18\nprintInfo({name: "kobe", age: 40}); // kobe 40\n\n// \u53e6\u5916\u4e00\u79cd\u5199\u6cd5\nfunction printInfo1({name = "why", age = 18} = {}) {\n  console.log(name, age);\n}\n\nprintInfo1(); // why 18\nprintInfo1({name: "kobe", age: 40}); // kobe 40\n')),(0,r.kt)("p",null,"\u6709\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\uff0c\u51fd\u6570\u7684 length \u5c5e\u6027\u4e0d\u505a\u7edf\u8ba1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\uff0c\u5176\u540e\u9762\u4f4d\u7f6e\u7684\u5176\u4f59\u53c2\u6570\u90fd\u4e0d\u505a\u7edf\u8ba1\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction baz(x, y, z, m, n = 30) {\n  console.log(x, y, z, m, n)\n}\n\nconsole.log(baz.length); // 4\n\n// \u9ed8\u8ba4\u503c\u5728\u7b2c2\u4e2a\u4f4d\u7f6e\uff0clength\u53ea\u67091\u3002\nfunction bar(x, y = 10, z, m, n) {\n  console.log(x, y, z, m, n)\n}\n\nconsole.log(bar.length); // 1\n")),(0,r.kt)("h3",{id:"15-\u51fd\u6570\u7684\u5269\u4f59\u53c2\u6570"},"1.5 \u51fd\u6570\u7684\u5269\u4f59\u53c2\u6570"),(0,r.kt)("p",null,"ES6\u4e2d\u5f15\u7528\u4e86rest parameter\uff0c\u53ef\u4ee5\u5c06\u4e0d\u5b9a\u6570\u91cf\u7684\u53c2\u6570\u653e\u5165\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff1a "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"...")," \u4e3a\u524d\u7f00\u7684\uff0c\u90a3\u4e48\u5b83\u4f1a\u5c06\u5269\u4f59\u7684\u53c2\u6570\u653e\u5230\u8be5\u53c2\u6570\u4e2d\uff0c\u5e76\u4e14\u4f5c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff1b"),(0,r.kt)("li",{parentName:"ul"},"rest paramaters \u5fc5\u987b\u653e\u5230\u6700\u540e\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function foo(m, n, ...args) {\n  console.log(m, n);  // 20 30\n  console.log(args);    // [40, 50, 60]\n  console.log(arguments);\n    // Arguments: [20, 30, 40, 50, 60, callee: (...), Symbol(Symbol.iterator): \u0192]\n}\n\nfoo(20, 30, 40, 50, 60);\n")),(0,r.kt)("p",null,"\u5269\u4f59\u53c2\u6570 \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments")," \u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5305\u542b\u8303\u56f4"),"\u3002rest \u53c2\u6570 \u53ea\u5305\u542b\u90a3\u4e9b\u6ca1\u6709\u5bf9\u5e94\u5f62\u53c2\u7684\u5b9e\u53c2\uff0c\narguments \u5bf9\u8c61\u5305\u542b\u4e86\u4f20\u7ed9\u51fd\u6570\u7684\u6240\u6709\u5b9e\u53c2\uff1b "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6570\u7ec4/\u7c7b\u6570\u7ec4"),"\u3002rest \u53c2\u6570\u662f\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u8fdb\u884c\u6570\u7ec4\u7684\u6240\u6709\u64cd\u4f5c\uff0c\narguments \u5bf9\u8c61\u662f\u7c7b\u6570\u7ec4\uff08\u4e0d\u662f\u6570\u7ec4\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ES6 \u7248\u672c"),"\u3002rest \u53c2\u6570\u662f ES6\u4e2d \u63d0\u4f9b\uff0c\u4e14\u66ff\u4ee3 arguments \u7684\u6570\u7ec4\uff0c\narguments \u662f js \u65e9\u671f\u7248\u672c\u4e2d\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4e3a\u4e86\u65b9\u4fbf\u53bb\u83b7\u53d6\u6240\u6709\u7684\u53c2\u6570\u3002")),(0,r.kt)("h3",{id:"16-\u5c55\u5f00\u8bed\u6cd5"},"1.6 \u5c55\u5f00\u8bed\u6cd5"),(0,r.kt)("p",null,"\u5c55\u5f00\u8bed\u6cd5(Spread syntax)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u8c03\u7528\u51fd\u6570")," / ",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u6570\u7ec4")," \u65f6\uff0c\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u8868\u8fbe\u5f0f")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"string")," \u5728\u8bed\u6cd5\u5c42\u9762\u5c55\u5f00\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd8\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5bf9\u8c61")," \u65f6, \u5c06 ",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u8868\u8fbe\u5f0f")," \u6309 key-value \u7684\u65b9\u5f0f\u5c55\u5f00\uff1b"))),(0,r.kt)("p",null,"\u5c55\u5f00\u8bed\u6cd5\u7684\u573a\u666f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u8c03\u7528\u51fd\u6570\u65f6\u4f7f\u7528\uff1b "),(0,r.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efa\u6570\u7ec4\u65f6\u4f7f\u7528\uff1b "),(0,r.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efa\u5bf9\u8c61\u65f6\u4f7f\u7528\uff0c\u662f ES2018\uff08ES9\uff09\u4e2d\u6dfb\u52a0\u7684\u65b0\u7279\u6027\uff1b")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5c55\u5f00\u8fd0\u7b97\u7b26\u5176\u5b9e\u662f\u4e00\u79cd ",(0,r.kt)("strong",{parentName:"p"},"\u6d45\u62f7\u8d1d"),"\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const names = [\"abc\", \"cba\", \"nba\"];\nconst name = \"ninjee\";\nconst info = {name: \"ninjee\", age: 18};\n\nfunction foo(x, y, z) {\n  console.log(x, y, z);\n}\n// 1.\u51fd\u6570\u8c03\u7528\u65f6\n// abc cba nba \nfoo.apply(null, names); // (es5)\u5229\u7528apply\u7684\u7b2c2\u4e2a\u53c2\u6570\u81ea\u52a8\u5c55\u5f00\nfoo(...names);  // abc cba nba\uff1a\u5c55\u5f00names\u6570\u7ec4\u5e76\u4f20\u5165\nfoo(...name);   // n i n\uff1a\u5c55\u5f00name\u5b57\u7b26\u4e32\u5e76\u4f20\u5165\n\n\n// 2.\u6784\u9020\u6570\u7ec4\u65f6\nconst newNames = [...names, ...name];\nconsole.log(newNames);\n// ['abc', 'cba', 'nba', 'n', 'i', 'n', 'j', 'e', 'e'];\n\n\n// 3.\u6784\u5efa\u5bf9\u8c61\u5b57\u9762\u91cf\u65f6 ES2018(ES9)\nconst obj = { ...info, address: \"\u5e7f\u5dde\u5e02\", ...names };\nconsole.log(obj);\n// {0: 'abc', 1: 'cba', 2: 'nba', name: 'ninjee', age: 18, address: '\u5e7f\u5dde\u5e02'}\n")),(0,r.kt)("h3",{id:"17-\u6570\u503c\u7684\u8868\u793a"},"1.7 \u6570\u503c\u7684\u8868\u793a"),(0,r.kt)("p",null,"\u5728ES6\u4e2d\u89c4\u8303\u4e86\u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u7684\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const num1 = 100 // \u5341\u8fdb\u5236\n\n// b -> binary\nconst num2 = 0b100; // \u4e8c\u8fdb\u5236\n// o -> octal\nconst num3 = 0o100; // \u516b\u8fdb\u5236\n// x -> hexadecimal\nconst num4 = 0x100; // \u5341\u516d\u8fdb\u5236\n\nconsole.log(num1, num2, num3, num4);  // 100 4 64 256\n")),(0,r.kt)("p",null,"ES2021\u65b0\u7279\u6027\uff1a\u6570\u5b57\u8fc7\u957f\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," \u4f5c\u4e3a\u8fde\u63a5\u7b26\uff0c\u89c2\u770b\u66f4\u6e05\u6670\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5927\u7684\u6570\u503c\u7684\u8fde\u63a5\u7b26(ES2021 ES12)\nconst num = 10_000_000_000_000_000;\nconsole.log(num);  // 10000000000000000\n")),(0,r.kt)("h2",{id:"2-es7-\u57fa\u7840"},"2 ES7 \u57fa\u7840"),(0,r.kt)("h3",{id:"21-arrayincludes"},"2.1 Array.includes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u5904\uff1a\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u6210\u5458\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u67e5\u627e\u7684\u6210\u5458\u503c\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4ece\u7b2c x \u4e2a\u7d22\u5f15\u5904\uff08\u542b\uff09\u5f00\u59cb\u67e5\u627e\u3002\u5982\u679c\u4e3a\u8d1f\u6570\uff0c\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"array.length + \u8d1f\u6570")," \u5f00\u59cb\u627e\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"-3")," \u5c31\u662f\u4ece\u5012\u6570\u7b2c\u4e09\u4e2a\u5f00\u59cb\uff08\u542b\uff09\uff0c\u4ece\u5012\u6570\u7b2c 1 \u4e2a\u5f00\u59cb\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," \u5c31\u662f\u4ece\u7b2c\u4e8c\u4e2a\u5f00\u59cb\uff08\u542b\uff09\u4ece\u7b2c 0 \u4e2a\u5f00\u59cb\u6570\u3002"))))),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1aboolean")),(0,r.kt)("p",null,"es5 \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexOf")," \u5bfb\u627e\u4e0b\u6807\uff0c\u5982\u679c\u8fd4\u56de -1 \u8868\u660e\u4e0d\u5b58\u5728\uff0c\u5426\u5219\u5c31\u662f\u5b58\u5728\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// es5\nconst names = ["abc", "cba", "nba", "mba", NaN];\n\nif (names.indexOf("cba") !== -1) {\n  console.log("\u5305\u542babc\u5143\u7d20");\n}\n\n// ES7 ES2016\nif (names.includes("cba", 2)) {\n  console.log("\u5305\u542babc\u5143\u7d20");\n}\n\nif (names.indexOf(NaN) !== -1) {\n  console.log("\u5305\u542bNaN");\n}\n\nif (names.includes(NaN)) {\n  console.log("\u5305\u542bNaN");\n}\n')),(0,r.kt)("h3",{id:"22-\u6307\u6570\u4e58\u65b9"},"2.2 \u6307\u6570(\u4e58\u65b9)"),(0,r.kt)("p",null,"exponentiation\u8fd0\u7b97\u7b26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728ES7\u4e4b\u524d\uff0c\u8ba1\u7b97\u6570\u5b57\u7684\u4e58\u65b9\u9700\u8981\u901a\u8fc7 Math.pow \u65b9\u6cd5\u6765\u5b8c\u6210\u3002 "),(0,r.kt)("li",{parentName:"ul"},"\u5728ES7\u4e2d\uff0c\u589e\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"**")," \u8fd0\u7b97\u7b26\uff0c\u53ef\u4ee5\u5bf9\u6570\u5b57\u6765\u8ba1\u7b97\u4e58\u65b9\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// es5\nconst result1 = Math.pow(3, 3)\n\n// ES7: **\nconst result2 = 3 ** 3\nconsole.log(result1, result2);  // 9 9\n")),(0,r.kt)("h2",{id:"3-es8-\u57fa\u7840"},"3 ES8 \u57fa\u7840"),(0,r.kt)("h3",{id:"31-object-api"},"3.1 Object API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ES5\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.keys")," \u83b7\u53d6\u4e00\u4e2a\u5bf9\u8c61\u6240\u6709\u7684 key\uff1b"),(0,r.kt)("li",{parentName:"ul"},"ES8\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Object.values")," \u6765\u83b7\u53d6\u6240\u6709\u7684 value \u503c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"ES8\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Object.entries")," \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},"[K, V]")," \u5bf9\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  name: \"why\",\n  age: 18\n}\n\nObject.keys(obj);       // [ 'name', 'age' ]\nObject.values(obj); // [ 'why', 18 ]\n\n// \u7528\u7684\u975e\u5e38\u5c11\nObject.values([\"abc\", \"cba\", \"nba\"]);  // [ 'abc', 'cba', 'nba' ]\nObject.values(\"abc\");  // \u5c55\u5f00\uff1a[ 'a', 'b', 'c' ]\n\n\nObject.entries(obj);    // [['name', 'why'], ['age', 18]]\nconst objEntries = Object.entries(obj);\n\n// \u53ef\u8fed\u4ee3\nobjEntries.forEach(item => {\n  console.log(item[0], item[1]);\n  // name why\n  // age 18\n})\n\nObject.entries([\"abc\", \"cba\", \"nba\"]);  // [['0', 'abc'], ['1', 'cba'], ['2', 'nba']]\nObject.entries(\"abc\");  // [['0', 'a'], ['1', 'b'], ['2', 'c']]\n")),(0,r.kt)("h3",{id:"32-string-padding"},"3.2 String Padding"),(0,r.kt)("p",null,"ES8\u4e2d\u589e\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"padStart")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"padEnd")," \u65b9\u6cd5\uff0c\u53ef\u5bf9\u5b57\u7b26\u4e32\u9996\u4f4d\u8fdb\u884c\u586b\u5145\uff0c\u6765\u5b9e\u73b0\u67d0\u79cd\u683c\u5f0f\u5316\u6548\u679c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u65701\uff0c\u586b\u5145\u7684\u4e2a\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u65702\uff0c\u586b\u5145\u7684\u5b57\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1a\u586b\u5145\u597d\u7684\u65b0\u5b57\u7b26\u4e32")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const message = "Hello World";\n\nconst newMessage = message.padStart(15, "*").padEnd(20, "-");\nconsole.log(newMessage);  // ****Hello World-----\n')),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u5bf9\u4f20\u5165\u7684\u8eab\u4efd\u8bc1\u6570\u5b57\u8fdb\u884c\u52a0\u5bc6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u6848\u4f8b\nconst cardNumber = "321324234242342342341312";\nconst lastFourCard = cardNumber.slice(-4);\nconst finalCard = lastFourCard.padStart(cardNumber.length, "*");\nconsole.log(finalCard); // ********************1312\n')),(0,r.kt)("h2",{id:"4-es10-\u57fa\u7840"},"4 ES10 \u57fa\u7840"),(0,r.kt)("h3",{id:"41-flat-flatmap"},"4.1 flat, flatMap"),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e86\u6570\u7ec4\u5c55\u5f00\uff0c\u4e5f\u5c31\u662f\u6570\u7ec4\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6241\u5e73\u5316"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flat()")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e2a\u6570\u7ec4\u6309\u7167\u5165\u53c2\u7684\u6df1\u5ea6\u5c55\u5f00"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1anumber\uff0c\u8868\u660e\u5c55\u5f00\u7684\u6df1\u5ea6\uff0c\u9ed8\u8ba4\u5c55\u5f00 1 \u5c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1a\u5c55\u5f00\u540e\u7684\u6570\u7ec4\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"flatMap()")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\uff1a\u5148 map\uff0c\u540e flat \u5c55\u5f00\uff0c\u53ea\u5c55\u5f00 1 \u5c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a\u56de\u8c03\u51fd\u6570\uff0c\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a map \u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1a\u5c55\u5f00\u540e\u7684\u6570\u7ec4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//\u30101\u3011 flat\nconst arr = [1, 2, [3, 4, [5, 6]]];\narr.flat();  // [1, 2, 3, 4, [5, 6]] \u9ed8\u8ba41\u5c42\narr.flat(2);  // [1, 2, 3, 4, 5, 6]\n\n//\u4f7f\u7528 Infinity\uff0c\u53ef\u5c55\u5f00\u4efb\u610f\u6df1\u5ea6\u7684\u5d4c\u5957\u6570\u7ec4\nvar arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];\narr2.flat(Infinity);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n\n//\u30102\u3011flatMap\n// map() \u4e0e flatMap()\nconst arr1 = [1, 2, 3, 4];\narr1.map(x => [x * 2]);   // [[2], [4], [6], [8]]\narr1.flatMap(x => [x * 2]);   // [2, 4, 6, 8] \u8fdb\u884c\u4e86\u4e00\u5c42\u5c55\u5f00\n\n// \u5e94\u7528: \u5bf9\u4e00\u4e2a\u6570\u7ec4\u4e2d\u7684\u5355\u8bcd\u8fdb\u884c\u62c6\u5206\uff0c\u7136\u540e\u7ec4\u6210\u65b0\u6570\u7ec4\u3002\nconst arr2 = ["it\'s Sunny in", "", "California"];\narr2.map(x => x.split(" "));        // [["it\'s","Sunny","in"],[""],["California"]]\narr2.flatMap(x => x.split(" "));    // ["it\'s","Sunny","in", "", "California"]\n')),(0,r.kt)("h3",{id:"42-objectfromentries"},"4.2 Object.fromEntries"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Object.fromEntries()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u628a\u952e\u503c\u5bf9\u5217\u8868\uff08entries\uff09\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.entries")," \u6b63\u597d\u76f8\u53cd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 1.\u57fa\u672c\u4f7f\u7528\nconst obj = {\n  name: \"why\",\n  age: 18,\n  height: 1.88,\n};\n\n// object \u8f6c\u5316\u4e3a entries\nconst entries = Object.entries(obj); // [['name', 'why'], ['age', 18], ['height', 1.88]]\n// entries \u8f6c\u5316\u4e3a object\nconst obj2 = Object.fromEntries(entries);  // {name: 'why', age: 18, height: 1.88}\n\n// 2.Polyfill\nconst newObj = {};\nfor (const [key, value] of entries) {\n  newObj[key] = value;\n}\n// {name: 'why', age: 18, height: 1.88}\n")),(0,r.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a"),(0,r.kt)("p",null,"\u5f53 web \u62ff\u5230\u5730\u5740\u680f\u7684\u53c2\u6570\u65f6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u89e3\u6790\uff08URLSearchParams\uff09\uff0c\u5e76\u751f\u6210\u5bf9\u8c61\uff08fromEntries\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," \u63a5\u53e3\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5b9e\u7528\u7684\u65b9\u6cd5\u6765\u5904\u7406 URL \u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ef\u8fed\u4ee3\uff0c\u53ef\u4ee5\u628a\u7b26\u5408 URL \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u62c6\u5206\u6210 entries\uff08\u952e\u503c\u5bf9\u5217\u8868\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u77e5\u8bc6\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams#%E6%96%B9%E6%B3%95"},"MDN"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const queryString = \"name=why&age=18&height=1.88\";\nconst queryParams = new URLSearchParams(queryString);\nfor (const param of queryParams) {\n  console.log(param); \n  // ['name', 'why']\n    // ['age', '18']\n}\n\nconst paramObj = Object.fromEntries(queryParams);\nconsole.log(paramObj); \n// \u751f\u6210\u4e86\u4e00\u4e2a\u65b9\u4fbf\u4f7f\u7528\u7684\u5bf9\u8c61\uff1a{name: 'why', age: '18', height: '1.88'}\n")),(0,r.kt)("h3",{id:"43-trimstart-trimend"},"4.3 trimStart, trimEnd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trim"),"\uff1a\u53bb\u9664\u5b57\u7b26\u4e32\u7684\u9996\u5c3e\u7a7a\u683c\uff0c\u4e00\u6b21\u6027\u628a\u5f00\u5934\u7ed3\u5c3e\u5168\u90e8\u53bb\u9664\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trimStart"),"\uff1a\u53ea\u53bb\u9664\u5f00\u5934"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trimEnd"),"\uff1a\u53ea\u53bb\u9664\u7ed3\u5c3e")),(0,r.kt)("p",null,"\u8fd4\u56de\uff1a\u539f\u5730\u53bb\u9664\uff0c\u8fd4\u56de\u53d6\u9664\u540e\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const message = "    Hello World    ";\n\nconsole.log(message.trim());            // "Hello World"\nconsole.log(message.trimStart());   // "Hello World    "\nconsole.log(message.trimEnd());         // "    Hello World"\n')),(0,r.kt)("h2",{id:"5-es11-\u57fa\u7840"},"5 ES11 \u57fa\u7840"),(0,r.kt)("h3",{id:"51-bigint"},"5.1 BigInt"),(0,r.kt)("p",null,"\u5728\u65e9\u671f\u7684 JavaScript \u4e2d\uff0c\u6211\u4eec\u4e0d\u80fd\u6b63\u786e\u7684\u8868\u793a\u8fc7\u5927\u7684\u6570\u5b57\uff1a "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"MAX_SAFE_INTEGER")," \u7684\u6570\u503c\uff0c\u5b58\u5728\u7cbe\u5ea6\u95ee\u9898\uff0c\u8868\u793a\u7684\u53ef\u80fd\u662f\u4e0d\u6b63\u786e\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6570\u5b57\u540e\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," \u5219\u4fee\u6539\u4e3a BigInt \u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BigInt(num)")," \u53ef\u4ee5\u5c06\u4e00\u4e2a number \u8f6c\u5316\u4e3a BigInt\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4e4b\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Number(bigint)")," \u53ef\u628a BigInt \u8f6c\u5316\u4e3a number\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ES11\u4e4b\u524d max_safe_integer\nconst maxInt = Number.MAX_SAFE_INTEGER;\nconsole.log(maxInt);            // 9007199254740991\nconsole.log(maxInt + 1);    // 9007199254740992\nconsole.log(maxInt + 2);    // 9007199254740992 \u9519\u8bef\n\n// ES11\u4e4b\u540e: BigInt\nconst bigInt = 900719925474099100n;\nconsole.log(bigInt + 10n);  // 900719925474099110n\n\nconst num = 100;\nconsole.log(bigInt + BigInt(num)); // 900719925474099200n\n\nconst smallNum = Number(bigInt);\nconsole.log(smallNum);\n\n")),(0,r.kt)("h3",{id:"52-"},"5.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"??")),(0,r.kt)("p",null,"\u7a7a\u503c\u5408\u5e76\u64cd\u4f5c\u7b26\uff1aNullish Coalescing Operator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528\uff0c\u7ed9\u4e00\u4e2a\u672a\u5b9a\u4e49\u7684\u7a7a\u503c\uff0c\u9644\u4e00\u4e2a\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u672a\u5b9a\u4e49\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u548c  ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const code = undefined;\nconst res = code ?? "1008";\nconsole.log(res);   // 1008\n')),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u4e0d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"||"),"  \uff1f"),(0,r.kt)("p",null,"\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"??")," \u9650\u5b9a\u4e86\u53ea\u80fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"  / ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u7684\u503c\u624d\u53ef\u4ee5\u6dfb\u52a0\u9ed8\u8ba4\u503c\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," \u662f\u89c4\u5b9a\u53ea\u8981\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u5c31\u4f1a\u8d4b\u7b2c\u4e8c\u4e2a\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const code = 0;\nconst res1 = code ?? "1008";   // 0\nconst res2 = code || "1008";   // 1008\n\n// polyfill\nconst res = code !== undefined || null ? code : "1008";  // 0\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u91cc res1 \u6ca1\u6709\u88ab\u6dfb\u52a0\u9ed8\u8ba4\u503c\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u5b58\u5728\u6709\u610f\u4e49\u7684\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"es5 \u65f6\uff0c\u5e38\u7528\u4e09\u5143\u8fd0\u7b97\u7b26\u6765\u5224\u65ad\u3002")),(0,r.kt)("h3",{id:"53-"},"5.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"?.")),(0,r.kt)("p",null,"\u53ef\u9009\u94fe\uff1aOptional Chaining"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528\uff0c\u548c\u4e0a\u9762\u7684\u4e00\u6837\uff0c\u4e5f\u662f\u7528\u6765\u5224\u65ad\u5f53\u524d\u53d8\u91cf\u662f\u5426\u4e3a\u672a\u5b9a\u4e49\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u5982\u679c\u540e\u7aef\u8fd4\u56de\u8fd9\u6837\u4e00\u4e2a\u7ed3\u679c\uff0c\u6211\u4eec\u60f3\u8bfb\u53d6 description \u4e2d\u7684\u5185\u5bb9\uff0c\u9700\u8981\u7528\u5230\u53ef\u9009\u94fe\u9632\u6b62\u62a5\u9519\nconst res = {\n  code: 200,\n  ans: {\n    codeName: {\n      name: "ninjee",\n      id: "10086",\n      description : undefined\n    },\n  },\n};\n\n// \u6ca1\u6709\u62a5\u9519\uff0c\u56e0\u4e3a\u5728\u8bfb\u53d6 description \u65f6\u5c31\u4e2d\u65ad\u540e\u7eed\u7684\u8bfb\u53d6\u4e86\u3002\nconst age = res?.ans?.description?.age  // undefined\n\n// \u5982\u679c\u4e0d\u5224\u65ad\u662f\u5426\u5b58\u5728\uff0c\u5c31\u4f1a\u62a5\u9519\uff1a\nconst age = res.ans.description.age;\n// Uncaught TypeError: Cannot read properties of undefined (reading \'age\')\n\n// es5\u65f6\u7684\u5224\u65ad\uff1a\nconst age = res && res.ans && res.ans.description && res.ans.description.age;\n// undefined\n')),(0,r.kt)("h3",{id:"54-global-this"},"5.4 Global This"),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u6211\u4eec\u5e0c\u671b\u83b7\u53d6 JavaScript \u73af\u5883\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u4e0d\u540c\u7684\u73af\u5883\u83b7\u53d6\u7684\u65b9\u5f0f\u662f\u4e0d\u4e00\u6837\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"this"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"window")," \u6765\u83b7\u53d6\uff1b "),(0,r.kt)("li",{parentName:"ul"},"\u5728 Node \u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"global")," \u6765\u83b7\u53d6\uff1b")),(0,r.kt)("p",null,"\u5728 ES11 \u4e2d\u5bf9\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\u8fdb\u884c\u4e86\u7edf\u4e00\u7684\u89c4\u8303\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"globalThis")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6\u67d0\u4e00\u4e2a\u73af\u5883\u4e0b\u7684\u5168\u5c40\u5bf9\u8c61(Global Object)\n\n// \u5728\u6d4f\u89c8\u5668\u4e0b\nconsole.log(window);  // \u5728\u6d4f\u89c8\u5668\u4e0b\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\uff0c\u5728node\u4e0b\u62a5\u9519\uff08\u672a\u5b9a\u4e49\uff09\nconsole.log(this);      // \u5728\u6d4f\u89c8\u5668\u4e0b\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\uff0c\u5728node\u4e0b\u8fd4\u56de\u7a7a\u5bf9\u8c61: {}\n\n// \u5728node\u4e0b\nconsole.log(global);    // \u5728\u6d4f\u89c8\u5668\u4e0b\u62a5\u9519\uff08\u672a\u5b9a\u4e49\uff09\uff0c\u5728node\u4e0b\u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\n\n// ES11\nconsole.log(globalThis);  // \u83b7\u53d6\u5168\u5c40\u5bf9\u8c61\n")),(0,r.kt)("h3",{id:"55-forin-\u6807\u51c6\u5316"},"5.5 for..in \u6807\u51c6\u5316"),(0,r.kt)("p",null,"\u5728 ES11 \u4e4b\u524d\uff0c\u867d\u7136\u5f88\u591a\u6d4f\u89c8\u5668\u652f\u6301 for...in \u6765\u904d\u5386\u5bf9\u8c61\u7c7b\u578b\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u88ab ECMA \u6807\u51c6\u5316\u3002"),(0,r.kt)("p",null,"\u5728 ES11 \u4e2d\uff0c\u5bf9\u5176\u8fdb\u884c\u4e86\u6807\u51c6\u5316\uff0cfor...in \u662f\u7528\u4e8e\u904d\u5386\u5bf9\u8c61\u7684 key \u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff0c\u4e0d\u5305\u62ec Symbol\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u60f3\u770b\u81ea\u8eab\u5c5e\u6027\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"hasOwnProperty()"),"\u65b9\u6cd5\u53ef\u4ee5\u5224\u65ad\u67d0\u5c5e\u6027\u662f\u4e0d\u662f\u8be5\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6309\u5e8f\u904d\u5386\u3002")),(0,r.kt)("p",null,"for of\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7528\u6765\u904d\u5386\u6570\u7ec4\uff0c\u6216\u5176\u4ed6\u53ef\u8fed\u4ee3\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u904d\u5386\u5bf9\u8c61\uff0c\u5fc5\u987b\u81ea\u5b9a\u4e49\u4e00\u4e2a iterator \u8fed\u4ee3\u5668\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// for...in \u6807\u51c6\u5316: ECMA\nconst obj = {\n  name: "why",\n  age: 18\n}\n\nfor (const item in obj) {\n  console.log(item) // name age\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u662f\u6570\u7ec4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for in \u904d\u5386\u6570\u7ec4\u7684\u7d22\u5f15\uff08index\uff09\uff0cfor of \u904d\u5386\u6570\u7ec4\u7684\u4e0b\u6807\uff08value\uff09"),(0,r.kt)("li",{parentName:"ul"},"for in \u901a\u5e38\u7528\u6765\u904d\u5386\u5bf9\u8c61\uff0c\u4e0d\u8981\u904d\u5386\u6570\u7ec4\u3002")))}d.isMDXComponent=!0}}]);
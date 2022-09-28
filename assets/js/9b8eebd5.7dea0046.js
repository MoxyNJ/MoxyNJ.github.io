"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[4826],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,f=m["".concat(o,".").concat(c)]||m[c]||g[c]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],p={title:"git",sidebar_position:6,date:new Date("2022-02-01T00:00:00.000Z"),keywords:["git"]},o=void 0,s={unversionedId:"interview/summary/git",id:"interview/summary/git",title:"git",description:"1. git \u6574\u4f53\u7ed3\u6784",source:"@site/docs/interview/summary/git.md",sourceDirName:"interview/summary",slug:"/interview/summary/git",permalink:"/docs/interview/summary/git",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"git",sidebar_position:6,date:"2022-02-01T00:00:00.000Z",keywords:["git"]},sidebar:"\u524d\u7aef",previous:{title:"HTML&CSS",permalink:"/docs/interview/summary/HTML&CSS"},next:{title:"React",permalink:"/docs/interview/summary/React"}},u={},g=[{value:"1. git \u6574\u4f53\u7ed3\u6784",id:"1-git-\u6574\u4f53\u7ed3\u6784",level:2},{value:"2. \u5e38\u7528\u6307\u4ee4",id:"2-\u5e38\u7528\u6307\u4ee4",level:2},{value:"branch \u65b0\u5efa/\u67e5\u770b/\u5220\u9664\u5206\u652f",id:"branch-\u65b0\u5efa\u67e5\u770b\u5220\u9664\u5206\u652f",level:3},{value:"checkout \u5207\u6362",id:"checkout-\u5207\u6362",level:3},{value:"push \u4e0a\u4f20 / \u5220\u9664\u8fdc\u7a0b",id:"push-\u4e0a\u4f20--\u5220\u9664\u8fdc\u7a0b",level:3},{value:"diff \u6bd4\u8f83",id:"diff-\u6bd4\u8f83",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:3},{value:"merge",id:"merge",level:3},{value:"rebase \u53d8\u57fa",id:"rebase-\u53d8\u57fa",level:3},{value:"\u64a4\u9500\u66f4\u6539",id:"\u64a4\u9500\u66f4\u6539",level:3},{value:"alias \u522b\u79f0",id:"alias-\u522b\u79f0",level:3},{value:"3. \u95ee\u9898",id:"3-\u95ee\u9898",level:2},{value:"\u95ee\u9898\uff1amerge \u548c rebase \u533a\u522b",id:"\u95ee\u9898merge-\u548c-rebase-\u533a\u522b",level:3},{value:"\u95ee\u9898\uff1a\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",id:"\u95ee\u9898\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",level:3},{value:"\u95ee\u9898\uff1agit fetch\uff0c git pull\uff0cgit pull --rebase \u4e4b\u95f4\u7684\u533a\u522b",id:"\u95ee\u9898git-fetch-git-pullgit-pull---rebase-\u4e4b\u95f4\u7684\u533a\u522b",level:3}],m={toc:g};function c(e){var t=e.components,p=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-git-\u6574\u4f53\u7ed3\u6784"},"1. git \u6574\u4f53\u7ed3\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1",src:n(87500).Z,width:"1280",height:"720"})),(0,r.kt)("p",null,"git \u7684\u6574\u4f53\u7ed3\u6784\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"remote \u8fdc\u7a0b\uff1a\u8fdc\u7a0b\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ol"},"local \u672c\u5730\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5de5\u4f5c working\uff1a\u5f53\u524d\u6572\u4ee3\u7801\u7684\u5730\u65b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6682\u5b58\u533a staging area\uff1a\u5c06\u672c\u5730\u4fee\u6539\u7684\u4ee3\u7801\uff0c\u5148\u6682\u5b58\u5230 \u6682\u5b58\u533a\uff0c\u4e5f\u5c31\u662f\u4e0b\u56fe\u7684 index\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u4ed3\u5e93 repository\uff1a\u63d0\u4ea4\u4ee3\u7801\uff0c\u4f46\u5c1a\u672a push \u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002")))),(0,r.kt)("p",null,"git \u7684\u5de5\u4f5c\u6d41\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(48642).Z,width:"800",height:"227"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u5de5\u4f5c\u6d41")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5f00\u53d1\u524d\ngit pull # \u62c9\u8fdc\u7a0b\u4ee3\u7801\n# \u672c\u5730\u5f00\u53d1\u4e2d...\n\ngit status          # \u67e5\u770b\uff1a\u5f53\u524d\u6539\u52a8\u7684\u6587\u4ef6\ngit add .           # \u6682\u5b58\uff1a\u8ddf\u8e2a\u6539\u52a8\u7684\u6587\u4ef6\ngit commit -m "feat: javascript document had pushed" # \u63d0\u4ea4\uff1a\u628a\u4fee\u6539\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\uff0c\u540c\u65f6\u6dfb\u52a0\u63cf\u8ff0\ngit push                # \u4e0a\u4f20\uff1a\u5c06\u4fee\u6539\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u4e24\u4eba\u5f00\u53d1\uff0c\u9700\u8981 rebase")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# \u5f00\u53d1\u524d\uff1a\u62c9\u53d6\u522b\u4eba\u66f4\u65b0\uff1a<\u8fdc\u7a0b\u4e3b\u673a\u540d> <\u8fdc\u7a0b\u5206\u652f\u540d>:<\u672c\u5730\u5206\u652f\u540d>\ngit pull origin feat-equipment:feat-equpiment-point-0414\n# \u8fd9\u76f8\u5f53\u4e8e git fetch + git merge\n# \u672c\u5730\u5f00\u53d1\u4e2d...\n\n# \u63d0\u4ea4\u524d\uff1a\u5fc5\u987b rebase \u522b\u4eba\u4ee3\u7801\uff0c\u5e76\u89e3\u51b3\u51b2\u7a81\ngit pull --rebase origin feat-equipment  # \u5982\u679c\u8981pull\u5230\u5f53\u524d\u5206\u652f\uff0c\u53ef\u7701\u7565\u4e0d\u5199\n# \u89e3\u51b3\u51b2\u7a81\uff1a\u7528\u672c\u5730\u5206\u652f\u7684\u4ee3\u7801\u3001\u7528\u8fdc\u7aef\u5206\u652f\u7684\u4ee3\u7801\u3001\u4e24\u8005\u7684\u4ee3\u7801\u90fd\u7528\n... ... \n# \u672c\u5730\u5206\u652f\u66f4\u6539\u540e\uff0c\u628a\u66f4\u6539\u7684\u4ee3\u7801\u63d0\u4ea4\ngst\ngit add .\ngit commit -m "feat: \u89e3\u51b3\u51b2\u7a81"\ngit push --set-upstream origin feat-equpiment-point-0414\n\n# \u53d1\u73b0 \u672c\u5730\u5bf9\u5e94\u7684\u8fdc\u7aef\u5206\u652f\u53d1\u751f\u51b2\u7a81\uff0c\u6b64\u65f6\u8986\u76d6\u8fdc\u7aef\uff0c\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\u66f4\u4fdd\u9669\uff1a\ngit checkout -b feat-equpiment-point-0418\ngit push --set-upstream origin feat-equpiment-point-0418\n# \u5982\u679c\u662f\u8986\u76d6\ngit push -f\n\n# \u51b2\u7a81\u89e3\u51b3\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u63d0mr\u5230feat-equipment\u4e2d\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u6682\u5b58\u5f53\u524d\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"\u573a\u666f\uff1a\u6b63\u5728\u5f00\u53d1\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u7a81\u7136\u8981 fix hot bug\uff0c\u6b64\u65f6\u8981\u6682\u5b58\u73b0\u573a\uff0c\u8fd8\u539f\u4e0a\u4e00\u6b21\u63d0\u4ea4\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6682\u5b58\ngit stash\ngit stash save "message"   # \u6267\u884c\u5b58\u50a8\u65f6\uff0c\u6dfb\u52a0\u5907\u6ce8\uff0c\u65b9\u4fbf\u67e5\u627e\u3002\n\n# \u67e5\u770b / \u6e05\u7a7a\ngit stash list\ngit stash clear\n\n# \u6062\u590d\ngit stash pop       # \u5e94\u7528\u6700\u8fd1\u4e00\u6b21\u6682\u5b58\u7684\u4fee\u6539\uff0c\u5e76\u5220\u9664\u6682\u5b58\u7684\u8bb0\u5f55\ngit stash apply     # \u5e94\u7528\u67d0\u4e2a\u5b58\u50a8\uff0c\u4e0d\u5220\u9664\u8bb0\u5f55\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7b2c\u4e00\u4e2a\uff0cstash@{0}\ngit stash apply stash@{$num}    # \u70b9\u540d\u5e94\u7528\u67d0\u4e2a\u8bb0\u5f55\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u65b0\u5f00\u53d1\u4e00\u4e2a\u529f\u80fd\uff0c\u9700\u8981\u521b\u5efa\u65b0\u5206\u652f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5207\u6362\u5230\u4e3b\u5206\u652f\ngit checkout feat-equipment\n# \u521b\u5efa + \u5207\u6362 \u65b0\u5206\u652f\ngit branch feat-equipment-0817\ngit checkout feat-equipment-0817\n# \u5f00\u53d1\u4e2d...\n\n# \u6682\u5b58\ngst\ngit add .\n\n# \u63d0\u4ea4\ngit push --set-upstream origin feat-equipment-0817\n")),(0,r.kt)("h2",{id:"2-\u5e38\u7528\u6307\u4ee4"},"2. \u5e38\u7528\u6307\u4ee4"),(0,r.kt)("h3",{id:"branch-\u65b0\u5efa\u67e5\u770b\u5220\u9664\u5206\u652f"},"branch \u65b0\u5efa/\u67e5\u770b/\u5220\u9664\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u65b0\u5efa\u672c\u5730\u5206\u652f\uff0c\u4f46\u4e0d\u5207\u6362\ngit branch <branch-name>\n# \u67e5\u770b\u672c\u5730\u5206\u652f\ngit branch\n# \u67e5\u770b\u8fdc\u7a0b\u5206\u652f\ngit branch -r\n# \u67e5\u770b\u672c\u5730\u548c\u8fdc\u7a0b\u5206\u652f\ngit branch -a\n# \u5220\u9664\u672c\u5730\u5206\u652f\ngit branch -d <branch-nane>     # \u8be5\u5206\u652f\u5fc5\u987b\u5b8c\u5168\u548c\u5b83\u7684\u4e0a\u6e38\u5206\u652f merge \u5b8c\u6210\ngit branch -D <branch-nane>     # \u786c\u5220\u9664\uff0c\u76f4\u63a5\u672c\u5730\u5220\u9664\u4e0d\u68c0\u67e5 merge\n# \u91cd\u65b0\u547d\u540d\u5206\u652f\ngit branch -m <old-branch-name> <new-branch-name>\n")),(0,r.kt)("h3",{id:"checkout-\u5207\u6362"},"checkout \u5207\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5207\u6362\u5230\u65b0\u5206\u652f\ngit checkout \u65b0\u5206\u652f\u540d\n# \u521b\u5efa+\u5207\u6362\ngit checkout -b \u65b0\u5206\u652f\u540d\n")),(0,r.kt)("h3",{id:"push-\u4e0a\u4f20--\u5220\u9664\u8fdc\u7a0b"},"push \u4e0a\u4f20 / \u5220\u9664\u8fdc\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u521b\u5efa\u7684\u65b0\u672c\u5730\u5206\u652f\u4e0a\u4f20\u5230\u670d\u52a1\u5668\ngit push origin fix-houlinjie-0222\n\n# \u5220\u9664\u670d\u52a1\u5668\u4e0a\u7684\u5206\u652f\ngit push origin fix-houlinjie-0222 --delete\n")),(0,r.kt)("h3",{id:"diff-\u6bd4\u8f83"},"diff \u6bd4\u8f83"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u6bd4\u8f83\u6682\u5b58\u533a\uff08index\uff09\u548c\u5de5\u4f5c\u533a\uff08workspace\uff09\u4e4b\u95f4\u7684\u5dee\u5f02\ngit diff\n\n# \u6bd4\u8f83\u672c\u5730\u4ed3\u5e93\uff08Repository\uff09\u548c\u5de5\u4f5c\u533a\uff08workspace\uff09\u4e4b\u95f4\u7684\u5dee\u5f02\ngit diff <someCommit>\ngit diff HEAD      # \u548c HEAD \u8fdb\u884c\u6bd4\u8f83\ngit diff 3f0c1b    # \u548c\u5386\u53f2\u4e2d\u67d0\u4e2a\u8282\u70b9\u6bd4\u8f83\n\n# \u6bd4\u8f83\u672c\u5730\u4ed3\u5e93\uff08Repository\uff09\u548c\u6682\u5b58\u533a\uff08index\uff09\u4e4b\u95f4\u7684\u5dee\u5f02\ngit diff --cached <someCommit>\n\n# \u4e24\u4e2a\u6bd4\u8f83\u4ed3\u5e93\uff08Repository\uff09\u8fdb\u884c\u6bd4\u8f83\ngit diff <someCommit1> \u548c <someCommit2>\n")),(0,r.kt)("h3",{id:"\u5220\u9664"},"\u5220\u9664"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5220\u9664\u672c\u5730\u672a\u8ddf\u8e2a\u7684\u6587\u4ef6\ngit clean -df\n-d   # \u5220\u9664\u672a\u8ddf\u8e2a\u76ee\u5f55\u4ee5\u53ca\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff0c\u5982\u679c\u76ee\u5f55\u4e0b\u5305\u542b\u5176\u4ed6git\u4ed3\u5e93\u6587\u4ef6\uff0c\u5e76\u4e0d\u4f1a\u5220\u9664\uff08-dff\u53ef\u4ee5\u5220\u9664\uff09\u3002\n-f   # \u5982\u679c git cofig \u4e0b\u7684 clean.requireForce \u4e3atrue\uff0c\u90a3\u4e48clean\u64cd\u4f5c\u9700\u8981-f(--force)\u6765\u5f3a\u5236\u6267\u884c\u3002\n-i   # \u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\n-n   # \u67e5\u770b\u5c06\u8981\u88ab\u5220\u9664\u7684\u6587\u4ef6\uff0c\u5e76\u4e0d\u5b9e\u9645\u5220\u9664\u6587\u4ef6\n")),(0,r.kt)("h3",{id:"merge"},"merge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728\u89e3\u51b3\u51b2\u7a81\u65f6\uff0c\u60f3\u653e\u5f03\u5408\u5e76\uff0c\u5c31\u91c7\u7528 abort \u5219\u5728\u672c\u9636\u6bb5\u5df2\u7ecf\u89e3\u51b3\u7684\u51b2\u7a81\u5c06\u5168\u90e8\u56de\u6eda\uff0c\u5230\u5408\u5e76\u4e4b\u524d\u7684\u72b6\u6001\ngit merge  --abort\n")),(0,r.kt)("h3",{id:"rebase-\u53d8\u57fa"},"rebase \u53d8\u57fa"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"WechatIMG2.png",src:n(28221).Z,width:"2370",height:"580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5206\u652f rebase \u5230\u4e3b\u5206\u652f\u4e0a\uff0c\u76f8\u5f53\u4e8e\u5728\u4e3b\u5206\u652f\u7684\u6700\u65b0\u4f4d\u7f6e\uff0c\u989d\u5916\u589e\u52a0\u4e86\u65b0\u5206\u652f\u63d0\u4ea4\u7684 log\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u597d\u5904\uff1a\u66f4\u6e05\u6670\u7684\u770b\u5230\u4e3b\u5206\u652f log \u5386\u53f2\uff0c\u4e25\u683c\u6309\u5148\u540e\u987a\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u89e3\u51b3\u6bcf\u6b21 commit \u7684\u51b2\u7a81\uff0c\u6700\u540e\u63d0\u4ea4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase master\n# \u89e3\u51b3\u51b2\u7a81\n# feature\uff1a\u5f85\u53d8\u57fa\u5206\u652f\u3001\u5f53\u524d\u5206\u652f\n# master\uff1a\u57fa\u5206\u652f\u3001\u76ee\u6807\u5206\u652f\n\n# \u624b\u52a8\u89e3\u51b3\u51b2\u7a81\uff1a\u5e94\u7528\u5f53\u524d\u5206\u652f\u3001\u5e94\u7528\u76ee\u6807\u5206\u652f\u3001\u90fd\u5e94\u7528\ngit add\ngit rebase --continue   # \u7ee7\u7eed\u68c0\u67e5\u51b2\u7a81\ngit rebase --abort          # \u653e\u5f03\u672c\u6b21reabse\uff0c\u56de\u9000\n\n# \u89e3\u51b3\u5b8c\u6bd5\u540e\uff0c\u5408\u5e76\u63d0\u4ea4\ngit push --set-upstream master\n")),(0,r.kt)("h3",{id:"\u64a4\u9500\u66f4\u6539"},"\u64a4\u9500\u66f4\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u672c\u5730\u5de5\u4f5c\u533a\u64a4\u9500\u66f4\u6539\uff0c\u6b64\u65f6\u8fd8\u6ca1\u6709 add\n# add \u548c checkout \u662f\u53cd\u4e49\u8bcd\ngit checkout -- <filename>\ngit checkout .          # \u5168\u90e8\n\n# \u672c\u5730\u6682\u5b58\u533a\u64a4\u9500\u66f4\u6539,\u6b64\u65f6\u5df2\u7ecfadd\uff0c\u8fd8\u6ca1commit\ngit reset   # \u9000\u56de\u5230 add\uff0c\u4f46\u4fee\u6539\u8fd8\u5728\ngit checkout .      # \u6e05\u7a7a\u5de5\u4f5c\u533a\n# \u6216\u8005\ngit reset --hard\n\n# \u672c\u5730\u4ed3\u5e93\uff0c\u64a4\u9500\u66f4\u6539\uff0c\u6b64\u65f6 add + commit\ngit reset --hard origin/master  # \u4ece\u8fdc\u7a0b\u91cd\u65b0\u62c9\u53d6\n")),(0,r.kt)("h3",{id:"alias-\u522b\u79f0"},"alias \u522b\u79f0"),(0,r.kt)("p",null,"\u901a\u5e38\u4f1a\u4f7f\u7528\u522b\u79f0\uff0c\u6765\u63d0\u5347\u6548\u7387\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8bed\u6cd5\ngit config --global alias.<\u7b80\u5316\u7684\u5b57\u7b26> \u539f\u59cb\u547d\u4ee4\n\n# \u5e38\u7528\ngit config --global alias.gst git status        # gst\ngit config --global alias.gco git checkout      # gco\n\n# \u6dfb\u52a0\u5feb\u6377\u6307\u4ee4\nalias gp='git push'\nalias gts='git status'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u547d\u4ee4\u5176\u5b9e\u662f\u66f4\u65b0\u5168\u5c40\u7684 .gitconfig \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u7528\u6765\u4fdd\u5b58\u5168\u5c40\u7684 git \u914d\u7f6e\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"vim ~/.gitconfig"),"\uff0c\u6267\u884c\u8fd9\u6bb5\u547d\u4ee4\u540e\uff0c\u5c55\u793a\u4e86\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"git config --global alias")," \u6dfb\u52a0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"alias"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 .gitconfig \u6587\u4ef6\u4e2d alias \u4fee\u6539\u522b\u79f0\u3002")),(0,r.kt)("h2",{id:"3-\u95ee\u9898"},"3. \u95ee\u9898"),(0,r.kt)("h3",{id:"\u95ee\u9898merge-\u548c-rebase-\u533a\u522b"},"\u95ee\u9898\uff1amerge \u548c rebase \u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7123826435357147166"},"https://juejin.cn/post/7123826435357147166"))),(0,r.kt)("p",null,"\u5f53\u524d\u72b6\u51b5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u672a\u547d\u540d\u6587\u4ef6 (3).png",src:n(77580).Z,width:"429",height:"372"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"git merge"),"\uff1a\u4f1a\u8ba9 2 \u4e2a\u5206\u652f\u7684\u63d0\u4ea4\u6309\u7167\u63d0\u4ea4\u65f6\u95f4\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u4e14\u4f1a\u628a\u6700\u65b0\u76842\u4e2acommit\u5408\u5e76\u6210\u4e00\u4e2acommit\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u7684\u5206\u652f\u6811\u5448\u73b0\u975e\u7ebf\u6027\u7684\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u5206\u652f\u7684 log\uff0c\u4f1a\u6309\u7167\u65f6\u95f4\u987a\u5e8f\u5408\u5e76\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684 merge commit\u3002")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u672a\u547d\u540d\u6587\u4ef6 (4).png",src:n(18470).Z,width:"605",height:"377"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"git rebase"),"\uff1a\u5c06 dev \u7684\u5f53\u524d\u63d0\u4ea4\u590d\u5236\u5230 master \u7684\u6700\u65b0\u63d0\u4ea4\u4e4b\u540e\uff0c\u4f1a\u5f62\u6210\u4e00\u4e2a\u7ebf\u6027\u7684\u5206\u652f\u6811\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5bf9\u5206\u652f\u7684\u6bcf\u6b21 commit\uff0c\u90fd\u8fdb\u884c rebase\uff1a\u4fee\u6539\u6bcf\u6b21 commit \u7684\u4ee3\u7801\uff0c\u5e76\u91cd\u65b0\u63d0\u4ea4\u751f\u6210\u4e00\u4e2a\u65b0\u7684 commit\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u7684\uff0c\u88ab rebase \u7684\u65e7 commit \u4f1a\u88ab\u5220\u9664\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a dev \u5206\u652f\u6240\u6709\u7684\u63d0\u4ea4\uff0c\u90fd\u7ebf\u6027\u653e\u5728 master \u4e0a\u6700\u65b0\u7684 commit \u4e4b\u540e\u3002")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u672a\u547d\u540d\u6587\u4ef6 (5).png",src:n(19731).Z,width:"722",height:"246"})),(0,r.kt)("h3",{id:"\u95ee\u9898\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"},"\u95ee\u9898\uff1a\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5207\u6362\u5230\u76ee\u5f55 cd..."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git log --pretty=online \u6587\u4ef6\u540d"),"  \u5217\u51fa\u5f53\u524d\u6587\u4ef6\u7684\u6240\u6709\u6539\u52a8\u5386\u53f2"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git show hash\u503c")," \u663e\u793a\u5177\u4f53\u7684\u67d0\u6b21\u6539\u52a8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://m.php.cn/tool/git/487194.html"},"\ud83d\udd17")),(0,r.kt)("p",null,"\u5176\u4ed6\u65b9\u6cd5\uff1asourcetree \u53ef\u89c6\u5316\u67e5\u627e\u3001\u7f51\u9875\u7684 gitee \u53ef\u89c6\u5316\u67e5\u627e\u3002"),(0,r.kt)("h3",{id:"\u95ee\u9898git-fetch-git-pullgit-pull---rebase-\u4e4b\u95f4\u7684\u533a\u522b"},"\u95ee\u9898\uff1agit fetch\uff0c git pull\uff0cgit pull --rebase \u4e4b\u95f4\u7684\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git fetch")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"git pull")," \u7684\u533a\u522b")),(0,r.kt)("p",null,"\u5728\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," \u540e\uff0c\u4ee3\u7801\u4f1a\u81ea\u52a8 merge \u5230\u672c\u5730\u7684\u5206\u652f\u4e2d\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch")," \u4f1a\u5ffd\u7565\u6389\u8fd9\u4e2a merge \u64cd\u4f5c\uff0c\u56e0\u6b64\u7b80\u5355\u6765\u8bf4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"git pull = git fetch + git merge\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git pull")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"git pull --rebase")," \u533a\u522b")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," \u547d\u4ee4\u9ed8\u8ba4\u5305\u542b\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"--merge")," \u53c2\u6570\uff0c\u56e0\u6b64\u4e8c\u8005\u7684\u533a\u522b\u5176\u5b9e\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase")," \u7684\u533a\u522b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"merge")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"merge")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 commit\uff0c\u5982\u679c\u5408\u5e76\u65f6\u9047\u5230\u4e86\u51b2\u7a81\uff0c\u9700\u8981\u89e3\u51b3\u51b2\u7a81\u540e\u91cd\u65b0 commit\u3002 ",(0,r.kt)("img",{parentName:"p",src:"https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/175befc2f02f4d1f909ad5fd541cebff~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"rebase")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https:////p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec7db69f93ee440a8a5b9b62dd68668c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})," ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase")," \u4f1a\u5c06\u4e24\u4e2a\u5206\u652f\u8fdb\u884c\u5408\u5e76\uff0c\u540c\u65f6\u5408\u5e76\u4e4b\u524d\u7684 commit \u5386\u53f2\u3002\u5982\u679c\u51fa\u73b0\u51b2\u7a81\uff0c\u89e3\u51b3\u51b2\u7a81\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git add\ngit rebase --continue\n")))}c.isMDXComponent=!0},87500:function(e,t,n){t.Z=n.p+"assets/images/1-577ffdfd96b286a2256bfcdb1963165b.png"},77580:function(e,t){t.Z="data:;base64,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"},19731:function(e,t,n){t.Z=n.p+"assets/images/716730b4b1cb45b48e84f4b01c8e000d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0-4de1de6510ebed283017afa0cb01cf35.awebp"},18470:function(e,t,n){t.Z=n.p+"assets/images/9ec0bdda85904eada018d424468a0217~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0-f4af902b9fc56b27c674ab6d086d3018.awebp"},48642:function(e,t,n){t.Z=n.p+"assets/images/Untitled-97c0c4011e1c2980d3e02eea068f52e0.png"},28221:function(e,t,n){t.Z=n.p+"assets/images/b169721a6bfc42a7b4754f7c5d65672d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0-32117d65a890fc44404e2fa6b96983ff.awebp"}}]);
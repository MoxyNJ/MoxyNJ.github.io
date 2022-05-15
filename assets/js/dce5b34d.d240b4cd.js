"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[6019],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Pinia",date:new Date("2020-10-23T00:00:00.000Z"),authors:"kuizuo",tags:["vue"]},l=void 0,p={unversionedId:"code/skill/vue/Pinia",id:"code/skill/vue/Pinia",title:"Pinia",description:"\u5b98\u65b9\u6587\u6863\uff1aIntroduction | Pinia (vuejs.org)",source:"@site/docs/code/skill/vue/Pinia.md",sourceDirName:"code/skill/vue",slug:"/code/skill/vue/Pinia",permalink:"/docs/code/skill/vue/Pinia",tags:[{label:"vue",permalink:"/docs/tags/vue"}],version:"current",frontMatter:{title:"Pinia",date:"2020-10-23T00:00:00.000Z",authors:"kuizuo",tags:["vue"]},sidebar:"skill",previous:{title:"Vue\u7ec4\u4ef6",permalink:"/docs/code/skill/vue/Vue-component"},next:{title:"React",permalink:"/docs/category/react"}},u={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521b\u5efa Store",id:"\u521b\u5efa-store",level:2},{value:"\u521b\u5efa modules",id:"\u521b\u5efa-modules",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u83b7\u53d6state",id:"\u83b7\u53d6state",level:3},{value:"\u4fee\u6539state",id:"\u4fee\u6539state",level:3},{value:"\u4e0evuex\u5bf9\u6bd4",id:"\u4e0evuex\u5bf9\u6bd4",level:2},{value:"\u6570\u636e\u6301\u4e45\u5316",id:"\u6570\u636e\u6301\u4e45\u5316",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9\u6587\u6863\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://pinia.vuejs.org/introduction.html"},"Introduction | Pinia (vuejs.org)"))),(0,s.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install pinia\n")),(0,s.kt)("h2",{id:"\u521b\u5efa-store"},"\u521b\u5efa Store"),(0,s.kt)("p",null,"\u5728 src/store \u4e2d\u521b\u5efa index.ts\uff0c\u5e76\u5bfc\u51fa store"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/store/index.ts"',title:'"src/store/index.ts"'},"import { createPinia } from 'pinia'\n\nconst store = createPinia()\n\nexport default store \n")),(0,s.kt)("p",null,"\u5728 main.ts \u4e2d\u5f15\u5165\u5e76\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import { createApp } from 'vue'\nimport App from './App.vue'\nimport store from './store'\n\nconst app = createApp(App)\napp.use(store)\n")),(0,s.kt)("h2",{id:"\u521b\u5efa-modules"},"\u521b\u5efa modules"),(0,s.kt)("p",null,"\u5728 src/store \u76ee\u5f55\u4e0b\u521b\u5efa modules \u76ee\u5f55\uff0c\u91cc\u9762\u5b58\u653e\u9879\u76ee\u4e2d\u6240\u9700\u8981\u4f7f\u7528\u5230\u7684\u72b6\u6001\u3002\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="store/modules/user.ts"',title:'"store/modules/user.ts"'},"import { defineStore } from 'pinia'\n\ninterface UserState {\n    name: string\n}\n\nexport const useUserStore = defineStore({\n    id: 'user',\n    state: (): UserState => {\n        return {\n            name: 'kuizuo'\n        }\n    },\n    getters: {\n        getName(): string {\n            return this.name\n        }\n    },\n    actions: {\n        setName(name: string) {\n            this.name = name\n        }\n    }\n})\n")),(0,s.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,s.kt)("h3",{id:"\u83b7\u53d6state"},"\u83b7\u53d6state"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <div>{{ userStore.name }}</div>\n</template>\n\n<script lang=\"ts\" setup>\nimport { useUserStore } from '/@/store/modules/user'\n\nconst userStore = useUserStore()\n<\/script>\n")),(0,s.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u5199\u6cd5\u4e0d\u4f18\u96c5\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 computed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const name = computed(() => userStore.getName) // \u524d\u63d0\u5b9a\u4e49\u4e86getters\nconst name = computed(() => userStore.name)\n")),(0,s.kt)("p",null,"state \u4e5f\u53ef\u4ee5\u4f7f\u7528\u89e3\u6784\uff0c\u4f46\u4f7f\u7528\u89e3\u6784\u4f1a\u4f7f\u5176\u5931\u53bb\u54cd\u5e94\u5f0f\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u7528 pinia \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"storeToRefs"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { storeToRefs } from 'pinia'\nconst { name } = storeToRefs(userStore)\n")),(0,s.kt)("h3",{id:"\u4fee\u6539state"},"\u4fee\u6539state"),(0,s.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},'userStore.name = "xxx"')," \u6765\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u4e0d\u5efa\u8bae\uff0c\u800c\u662f\u4f7f\u7528actions\u6765\u4fee\u6539\uff0c\u5728\u4e0a\u9762\u5df2\u7ecf\u5b9a\u4e49\u4e00\u4e2asetName\u65b9\u6cd5\u7528\u6765\u4fee\u6539state"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"userStore.setName('xxx')\n")),(0,s.kt)("h2",{id:"\u4e0evuex\u5bf9\u6bd4"},"\u4e0evuex\u5bf9\u6bd4"),(0,s.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0cpinia\u6bd4vuex\u5c11\u4e86\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"mutations"),"\uff0c\u4e5f\u5c31\u662f\u53d8\u66f4\u72b6\u6001\u7684\u51fd\u6570\uff0c\u800cpinia\u5219\u662f\u5c06\u5176\u4e0eaction\u5408\u5e76\u5728\u4e00\u8d77\u3002"),(0,s.kt)("p",null,"\u5728Vuex\u4e2dmutation\u662f\u65e0\u6cd5\u5f02\u6b65\u64cd\u4f5c\u7684\uff0c\u800cAction\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u5f02\u6b65\u64cd\u4f5c\u3002\u50cf\u4e0a\u9762\u8981\u5199\u5f02\u6b65\u64cd\u4f5c\u7684\u53ea\u9700\u8981\u5728actions\u4e2d\u6b63\u5e38\u7684\u7f16\u5199async await\u8bed\u6cd5\u7684\u5f02\u6b65\u51fd\u6570\u5373\u53ef\u3002\u5982"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const useUserStore = defineStore({\n  id: 'user',\n  actions: {\n    async login(user) {\n      const { data } = await api.login(user)\n      return data\n    }\n  }\n})\n")),(0,s.kt)("p",null,"\u800cvuex\u4e2d\u5199\u6cd5\u4e0e\u8c03\u7528\u5c31\u4e0d\u582a\u5165\u76ee\u4e86\ud83d\ude02"),(0,s.kt)("h2",{id:"\u6570\u636e\u6301\u4e45\u5316"},"\u6570\u636e\u6301\u4e45\u5316"),(0,s.kt)("p",null,"\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm i pinia-plugin-persist\n")),(0,s.kt)("p",null,"\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import { createPinia } from 'pinia'\nimport piniaPluginPersist from 'pinia-plugin-persist'\n\nconst store = createPinia()\nstore.use(piniaPluginPersist)\n\nexport default store\n")),(0,s.kt)("p",null,"\u5728\u5bf9\u5e94\u7684store\u4e2d\u5f00\u542fpersist\u5373\u53ef\uff0c",(0,s.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6570\u636e\u662f\u5b58\u653e\u5728sessionStorage(\u4f1a\u8bdd\u5b58\u50a8)\uff0c\u5e76\u4ee5store\u4e2d\u7684id\u4f5c\u4e3akey")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{8-10}","{8-10}":!0},"export const useUserStore = defineStore({\n    id: 'user',\n    state: (): UserState => {\n        return {\n            name: 'kuizuo'\n        }\n    },\n    persist: {\n        enabled: true\n    }\n})\n")),(0,s.kt)("p",null,"persist\u8fd8\u6709\u5176\u4ed6\u914d\u7f6e\uff0c\u4f8b\u5982\u81ea\u5b9a\u4e49key\uff0c\u5b58\u653e\u4f4d\u7f6e\u6539\u4e3alocalStorage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{3-8}","{3-8}":!0},"persist: {\n    enabled: true,\n    strategies: [\n        {\n            key: 'my_user',\n            storage: localStorage\n        }\n    ]\n}\n")),(0,s.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528paths\u6765\u6307\u5b9a\u90a3\u4e9bstate\u6301\u4e45\u5316\uff0c\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{5}","{5}":!0},"persist: {\n  enabled: true,\n  strategies: [\n    {\n      paths: ['name']\n    }\n  ]\n}\n")))}d.isMDXComponent=!0}}]);
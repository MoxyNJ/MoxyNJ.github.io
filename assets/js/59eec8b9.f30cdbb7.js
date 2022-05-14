"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[9e3],{3905:function(n,t,e){e.d(t,{Zo:function(){return c},kt:function(){return m}});var o=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=o.createContext({}),d=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=d(n.components);return o.createElement(l.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),g=d(e),m=a,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||r;return e?o.createElement(h,i(i({ref:t},c),{},{components:e})):o.createElement(h,i({ref:t},c))}));function m(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var d=2;d<r;d++)i[d]=e[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}g.displayName="MDXCreateElement"},59939:function(n,t,e){e.r(t),e.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=e(87462),a=e(63366),r=(e(67294),e(3905)),i=["components"],s={title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",date:new Date("2021-02-10T00:00:00.000Z"),authors:"kuizuo",tags:["frida","app","hook"]},l=void 0,d={unversionedId:"skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",id:"skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",description:"\u4ee3\u7801",source:"@site/docs/skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5.md",sourceDirName:"skill/reverse/android/frida",slug:"/skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",permalink:"/docs/skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",tags:[{label:"frida",permalink:"/docs/tags/frida"},{label:"app",permalink:"/docs/tags/app"},{label:"hook",permalink:"/docs/tags/hook"}],version:"current",frontMatter:{title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",date:"2021-02-10T00:00:00.000Z",authors:"kuizuo",tags:["frida","app","hook"]},sidebar:"skill",previous:{title:"Frida Python\u5e93\u4f7f\u7528",permalink:"/docs/skill/reverse/android/frida/Frida Python\u5e93\u4f7f\u7528"},next:{title:"Frida so\u5c42\u4e2d\u7684hook",permalink:"/docs/skill/reverse/android/frida/Frida so\u5c42\u4e2d\u7684hook"}},c={},u=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}],g={toc:u};function m(n){var t=n.components,e=(0,a.Z)(n,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("p",null,"\u9488\u5bf9java\u5c42\u52a0\u5bc6\u7b97\u6cd5\uff0c\u80fdhook\u5230java\u81ea\u5e26\u7684\u52a0\u5bc6\u51fd\u6570\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const config = {\n  showStacks: false,\n  showDivider: true,\n};\n\nJava.perform(function () {\n  // console.log('frida \u5df2\u542f\u52a8');\n  function showStacks(name = '') {\n    if (config.showStacks) {\n      console.log(Java.use('android.util.Log').getStackTraceString(Java.use('java.lang.Throwable').$new(name)));\n    }\n  }\n\n  function showDivider(name = '') {\n    if (config.showDivider) {\n      console.log(`==============================${name}==============================`);\n    }\n  }\n\n  function showArguments() {\n    console.log('arguments: ', ...arguments);\n  }\n\n  const ByteString = Java.use('com.android.okhttp.okio.ByteString');\n  const Encode = {\n    toBase64(tag, data) {\n      console.log(tag + ' Base64: ', ByteString.of(data).base64());\n      // console.log(tag + ' Base64: ', bytesToBase64(data));\n    },\n    toHex(tag, data) {\n      console.log(tag + ' Hex: ', ByteString.of(data).hex());\n      // console.log(tag + ' Hex: ', bytesToHex(data));\n    },\n    toUtf8(tag, data) {\n      console.log(tag + ' Utf8: ', ByteString.of(data).utf8());\n      // console.log(tag + ' Utf8: ', bytesToString(data));\n    },\n    toAll(tag, data) {\n      Encode.toUtf8(tag, data);\n      Encode.toHex(tag, data);\n      Encode.toBase64(tag, data);\n    },\n    toResult(tag, data) {\n      Encode.toHex(tag, data);\n      Encode.toBase64(tag, data);\n    },\n  };\n\n  const MessageDigest = Java.use('java.security.MessageDigest');\n  {\n    let overloads_update = MessageDigest.update.overloads;\n    for (const overload of overloads_update) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        Encode.toAll(`${algorithm} update data`, arguments[0]);\n        return this.update(...arguments);\n      };\n    }\n\n    let overloads_digest = MessageDigest.digest.overloads;\n    for (const overload of overloads_digest) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        const result = this.digest(...arguments);\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        }\n\n        Encode.toResult(`${algorithm} digest result`, result);\n        return result;\n      };\n    }\n  }\n\n  const Mac = Java.use('javax.crypto.Mac');\n  {\n    Mac.init.overload('java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (key, AlgorithmParameterSpec) {\n      return this.init(key, AlgorithmParameterSpec);\n    };\n    Mac.init.overload('java.security.Key').implementation = function (key) {\n      const algorithm = this.getAlgorithm();\n      showDivider(algorithm);\n      showStacks(algorithm);\n      const keyBytes = key.getEncoded();\n      Encode.toAll(`${algorithm} init Key`, keyBytes);\n      return this.init(...arguments);\n    };\n\n    // let overloads_update = Mac.update.overloads;\n    // for (const overload of overloads_update) {\n    //   overload.implementation = function () {\n    //     const algorithm = this.getAlgorithm();\n    //     showDivider(algorithm);\n    //     showStacks(algorithm);\n    //     Encode.toAll(`${algorithm} update data`, arguments[0]);\n    //     return this.update(...arguments);\n    //   };\n    // }\n\n    let overloads_doFinal = Mac.doFinal.overloads;\n    for (const overload of overloads_doFinal) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        const result = this.doFinal(...arguments);\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        }\n\n        Encode.toResult(`${algorithm} doFinal result`, result);\n        return result;\n      };\n    }\n  }\n\n  const Cipher = Java.use('javax.crypto.Cipher');\n  {\n    let overloads_init = Cipher.init.overloads;\n    for (const overload of overloads_init) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n\n        if (arguments[0]) {\n          const mode = arguments[0];\n          console.log(`${algorithm} init mode`, mode);\n        }\n\n        if (arguments[1]) {\n          const className = JSON.stringify(arguments[1]);\n          // \u5b89\u535310\u4ee5\u4e0a\u79c1\u94a5\u662f\u6709\u53ef\u80fd\u8f93\u51fa\u4e0d\u4e86\u7684\n          if (className.includes('OpenSSLRSAPrivateKey')) {\n            // const keyBytes = arguments[1];\n            // console.log(`${algorithm} init key`, keyBytes);\n          } else {\n            const keyBytes = arguments[1].getEncoded();\n            Encode.toAll(`${algorithm} init key`, keyBytes);\n          }\n        }\n\n        if (arguments[2]) {\n          const className = JSON.stringify(arguments[2]);\n          if (className.includes('javax.crypto.spec.IvParameterSpec')) {\n            const iv = Java.cast(arguments[2], Java.use('javax.crypto.spec.IvParameterSpec'));\n            const ivBytes = iv.getIV();\n            Encode.toAll(`${algorithm} init iv`, ivBytes);\n          } else if (className.includes('java.security.SecureRandom')) {\n          }\n        }\n\n        return this.init(...arguments);\n      };\n    }\n\n    // let overloads_update = Cipher.update.overloads;\n    // for (const overload of overloads_update) {\n    //   overload.implementation = function () {\n    //     const algorithm = this.getAlgorithm();\n    //     showDivider(algorithm);\n    //     showStacks(algorithm);\n    //     Encode.toAll(`${algorithm} update data`, arguments[0]);\n    //     return this.update(...arguments);\n    //   };\n    // }\n\n    let overloads_doFinal = Cipher.doFinal.overloads;\n    for (const overload of overloads_doFinal) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        const result = this.doFinal(...arguments);\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0]);\n        }\n\n        Encode.toResult(`${algorithm} doFinal result`, result);\n        return result;\n      };\n    }\n  }\n\n  const Signature = Java.use('java.security.Signature');\n  {\n    let overloads_update = Signature.update.overloads;\n    for (const overload of overloads_update) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        Encode.toAll(`${algorithm} update data`, arguments[0]);\n        return this.update(...arguments);\n      };\n    }\n\n    let overloads_sign = Signature.sign.overloads;\n    for (const overload of overloads_sign) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm();\n        showDivider(algorithm);\n        showStacks(algorithm);\n        const result = this.sign();\n        Encode.toResult(`${algorithm} sign result`, result);\n        return this.sign(...arguments);\n      };\n    }\n  }\n});\n\n")))}m.isMDXComponent=!0}}]);
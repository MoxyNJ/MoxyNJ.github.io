"use strict";(self.webpackChunkkuizuo_cn=self.webpackChunkkuizuo_cn||[]).push([[3085],{58032:function(n,e,t){t.d(e,{Z:function(){return h}});var a=t(63366),i=(t(67294),t(86010)),r=t(97325),s=t(24949),l="anchorWithStickyNavbar_mojV",c="anchorWithHideOnScrollNavbar_R0VQ",o=t(35944),u=["as","id"],d=["as"];function m(n){var e=n.as,t=n.id,d=(0,a.Z)(n,u),m=(0,s.LU)().navbar.hideOnScroll;return t?(0,o.BX)(e,Object.assign({},d,{className:(0,i.Z)("anchor",m?c:l),id:t,children:[d.children,(0,o.tZ)("a",{className:"hash-link",href:"#"+t,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"}),children:"\u200b"})]})):(0,o.tZ)(e,Object.assign({},d))}function h(n){var e=n.as,t=(0,a.Z)(n,d);return"h1"===e?(0,o.tZ)("h1",Object.assign({},t,{id:void 0,children:t.children})):(0,o.tZ)(m,Object.assign({as:e},t))}},64198:function(n,e,t){t.d(e,{Z:function(){return Z}});var a=t(67294),i=t(63366),r=t(31514),s=t(35944),l=["mdxType","originalType"];var c=t(56831);var o=t(83699);var u=t(86010),d=t(24949),m="details_BAp3";function h(n){var e=Object.assign({},n);return(0,s.tZ)(d.PO,Object.assign({},e,{className:(0,u.Z)("alert alert--info",m,e.className)}))}var g=t(58032);function v(n){return(0,s.tZ)(g.Z,Object.assign({},n))}var f="img_E7b_";var Z={head:function(n){var e=a.Children.map(n.children,(function(n){return function(n){var e,t;if(null!=n&&null!=(e=n.props)&&e.mdxType&&null!=n&&null!=(t=n.props)&&t.originalType){var r=n.props,s=(r.mdxType,r.originalType,(0,i.Z)(r,l));return a.createElement(n.props.originalType,s)}return n}(n)}));return(0,s.tZ)(r.Z,Object.assign({},n,{children:e}))},code:function(n){var e=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(n.children).every((function(n){return"string"==typeof n&&!n.includes("\n")||(0,a.isValidElement)(n)&&e.includes(n.props.mdxType)}))?(0,s.tZ)("code",Object.assign({},n)):(0,s.tZ)(c.Z,Object.assign({},n))},a:function(n){return(0,s.tZ)(o.Z,Object.assign({},n))},pre:function(n){var e;return(0,s.tZ)(c.Z,Object.assign({},(0,a.isValidElement)(n.children)&&"code"===n.children.props.originalType?null==(e=n.children)?void 0:e.props:Object.assign({},n)))},details:function(n){var e=a.Children.toArray(n.children),t=e.find((function(n){var e;return"summary"===(null==n||null==(e=n.props)?void 0:e.mdxType)})),i=(0,s.tZ)(s.HY,{children:e.filter((function(n){return n!==t}))});return(0,s.tZ)(h,Object.assign({},n,{summary:t,children:i}))},ul:function(n){return(0,s.tZ)("ul",Object.assign({},n,{className:(e=n.className,(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var e},img:function(n){return(0,s.tZ)("img",Object.assign({loading:"lazy"},n,{className:(e=n.className,(0,u.Z)(e,f))}));var e},h1:function(n){return(0,s.tZ)(v,Object.assign({as:"h1"},n))},h2:function(n){return(0,s.tZ)(v,Object.assign({as:"h2"},n))},h3:function(n){return(0,s.tZ)(v,Object.assign({as:"h3"},n))},h4:function(n){return(0,s.tZ)(v,Object.assign({as:"h4"},n))},h5:function(n){return(0,s.tZ)(v,Object.assign({as:"h5"},n))},h6:function(n){return(0,s.tZ)(v,Object.assign({as:"h6"},n))}}},9260:function(n,e,t){t.d(e,{Z:function(){return o}});var a=t(63366),i=(t(67294),t(86010)),r=t(14202),s="tableOfContents_cNA8",l=t(35944),c=["className"];function o(n){var e=n.className,t=(0,a.Z)(n,c);return(0,l.tZ)("div",{className:(0,i.Z)(s,"thin-scrollbar",e),children:(0,l.tZ)(r.Z,Object.assign({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"}))})}},14202:function(n,e,t){t.d(e,{Z:function(){return o}});var a=t(63366),i=t(67294),r=t(24949),s=t(35944),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(n){var e=n.toc,t=n.className,a=n.linkClassName,i=n.isChild;return e.length?(0,s.tZ)("ul",{className:i?void 0:t,children:e.map((function(n){return(0,s.BX)("li",{children:[(0,s.tZ)("a",{href:"#"+n.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,s.tZ)(c,{isChild:!0,toc:n.children,className:t,linkClassName:a})]},n.id)}))}):null}function o(n){var e=n.toc,t=n.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,u=n.linkClassName,d=void 0===u?"table-of-contents__link":u,m=n.linkActiveClassName,h=void 0===m?void 0:m,g=n.minHeadingLevel,v=n.maxHeadingLevel,f=(0,a.Z)(n,l),Z=(0,r.LU)(),p=null!=g?g:Z.tableOfContents.minHeadingLevel,b=null!=v?v:Z.tableOfContents.maxHeadingLevel,N=(0,r.b9)({toc:e,minHeadingLevel:p,maxHeadingLevel:b}),k=(0,i.useMemo)((function(){if(d&&h)return{linkClassName:d,linkActiveClassName:h,minHeadingLevel:p,maxHeadingLevel:b}}),[d,h,p,b]);return(0,r.Si)(k),(0,s.tZ)(c,Object.assign({toc:N,className:o,linkClassName:d},f))}},84269:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});t(67294);var a=t(86010),i=t(91834),r=t(3905),s=t(64198),l=t(9260),c=t(24949),o="mdxPageWrapper_yV3F",u="content_ptg7",d=t(35944);var m=function(n){var e=n.content,t=e.frontMatter,m=e.metadata,h=t.title,g=t.description,v=t.wrapperClassName,f=t.hide_table_of_contents,Z=m.permalink;return(0,d.tZ)(i.Z,{title:h,description:g,permalink:Z,wrapperClassName:null!=v?v:c.kM.wrapper.mdxPages,pageClassName:c.kM.page.mdxPage,children:(0,d.tZ)("main",{className:"container container--fluid margin-vert--lg",children:(0,d.BX)("div",{className:(0,a.Z)("row",o),children:[(0,d.tZ)("div",{className:(0,a.Z)("col","col--8",u),children:(0,d.tZ)(r.Zo,{components:s.Z,children:(0,d.tZ)(e,{})})}),!f&&e.toc&&(0,d.tZ)("div",{className:"col col--2",children:(0,d.tZ)(l.Z,{toc:e.toc})})]})})})}},71095:function(n,e,t){t.d(e,{Z:function(){return o}});var a={};t.r(a),t.d(a,{ButtonExample:function(){return c}});var i=t(67294),r=t(37337),s=t(70917),l=t(35944);function c(n){return(0,l.tZ)("button",Object.assign({type:"button"},n,{style:Object.assign({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},n.style)}))}var o=Object.assign({React:i},i,{styled:r.Z,css:s.iv},a)}}]);
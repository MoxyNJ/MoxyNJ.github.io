"use strict";(self.webpackChunkninjee=self.webpackChunkninjee||[]).push([[4013],{65943:function(e,t,i){i.d(t,{Z:function(){return h}});i(67294);var r=i(86010),a=i(83699),n="sidebar_a9qW",s="sidebarItemTitle_uKok",l="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",o="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",m=i(97325),u=i(35944);function h(e){var t=e.sidebar;return 0===t.items.length?null:(0,u.BX)("nav",{className:(0,r.Z)(n,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.tZ)("div",{className:(0,r.Z)(s,"margin-bottom--md"),children:t.title}),(0,u.tZ)("ul",{className:l,children:t.items.map((function(e){return(0,u.tZ)("li",{className:c,children:(0,u.tZ)(a.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d,children:e.title})},e.permalink)}))})]})}},61727:function(e,t,i){i.d(t,{Z:function(){return o}});var r=i(63366),a=(i(67294),i(86010)),n=i(91834),s=i(65943),l=i(35944),c=["sidebar","toc","children"];function o(e){var t=e.sidebar,i=e.toc,o=e.children,d=(0,r.Z)(e,c),m=t&&t.items.length>0;return(0,l.tZ)(n.Z,Object.assign({},d,{children:(0,l.tZ)("div",{className:"container margin-vert--lg",children:(0,l.BX)("div",{className:"row",style:{flexDirection:"row-reverse"},children:[m&&(0,l.tZ)("aside",{className:"col col--3",children:(0,l.tZ)(s.Z,{sidebar:t})}),(0,l.tZ)("main",{className:(0,a.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog",children:o}),i&&(0,l.tZ)("div",{className:"col col--2",children:i})]})})}))}},19588:function(e,t,i){i.r(t);var r=i(61727),a=i(83699),n=i(24949),s=i(10537),l=i(86010),c=i(35944);t.default=function(e){var t=e.tags,i=e.sidebar,o=(e.items,(0,n.MA)()),d={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);d[t]=d[t]||[],d[t].push(e)}));var m=Object.entries(d).sort((function(e,t){var i=e[0],r=t[0];return i.localeCompare(r)}));return(0,c.BX)(n.FG,{className:(0,l.Z)(n.kM.wrapper.blogPages,n.kM.page.blogTagsListPage),children:[(0,c.tZ)(n.d,{title:o}),(0,c.tZ)(s.Z,{tag:"blog_tags_list"}),(0,c.BX)(r.Z,{sidebar:i,children:[(0,c.tZ)("h1",{children:o}),(0,c.tZ)((function(){return(0,c.tZ)("div",{className:"row",children:m.map((function(e){var i=e[0],r=e[1];return(0,c.tZ)("div",{style:{display:"flex",flexWrap:"wrap"},children:r.map((function(e,i){return(0,c.BX)(a.Z,{className:"post__tags margin-horiz--sm margin-bottom--sm",href:t[e].permalink,children:[t[e].name," (",t[e].count,")"]},e)}))},i)})).filter((function(e){return null!=e}))})}),{})]})]})}}}]);
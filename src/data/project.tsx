import { sortBy } from "@site/src/utils/jsUtils";

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "javascript"
  | "typescript"
  | "react"
  | "html";

export type Project = {
  title: string;
  description: string;
  preview?: any;
  website: string;
  source?: string | null;
  tags: TagType[];
};

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: "Favorite",
    // description:"Our favorite Docusaurus sites that you must absolutely check-out!",
    description: "",
    color: "#e9669e",
  },
  opensource: {
    label: "开源",
    // description: "Open-Source Docusaurus sites can be useful for inspiration!",
    description: "",
    color: "#39ca30",
  },
  product: {
    label: "产品",
    // description: "Docusaurus sites associated to a commercial product!",
    description: "",
    color: "#dfd545",
  },
  design: {
    label: "设计",
    // description: "Beautiful Docusaurus sites, polished and standing out from the initial template!",
    description: "",
    color: "#a44fb7",
  },
  javascript: {
    label: "JavaScript",
    // description: "JavaScript project",
    description: "",
    color: "#dfd545",
  },
  typescript: {
    label: "TypeScript",
    // description: "JavaScript project",
    description: "",
    color: "#007acc",
  },
  react: {
    label: "React",
    // description: "React project",
    description: "",
    color: "#39ca30",
  },
  html: {
    label: "Html",
    // description: "React project",
    description: "",
    color: "#fe00ef",
  },
};

const Projects: Project[] = [
  {
    title: "网易云音乐",
    description:
      "一个基于 React + React Router + Redux + Ant Design + Axios + Styled-Components + ImmutableJs 深度还原网易云音乐web端的网页",
    preview: require("./showcase/reactmusic.jpeg"),
    website: "http://ninjee.top/",
    source: "https://github.com/MoxyNJ/ReactMusic",
    tags: ["opensource", "javascript", "react"],
  },
  {
    title: "Toy Browser",
    description:
      "浏览器实现。根据浏览器的实现原理，模拟了页面加载的解析 URL 、下载 HTML 代码、解析 DOM &CSSOM、计算 CSS 属性、排版、渲染等一系列过程。",
    preview: require("./showcase/toy-browser.png"),
    website: "https://github.com/MoxyNJ/Toy-Browser",
    source: "https://github.com/MoxyNJ/Toy-Browser",
    tags: ["opensource", "javascript"],
  },
  {
    title: "鲜花图书馆",
    description:
      "设计并实现了一个花朵绿植知识分享、用户讨论和购买的“鲜花图书馆”网站。基于一套 HTML 代码适配手机、平板和电脑等不同端口，风格统一，排版美观。",
    preview: require("./showcase/flowerlibrary.png"),
    website: "http://ninjee.top:880/",
    source: "https://github.com/MoxyNJ/FlowerLibrary",
    tags: ["design", "product", "html"],
  },
  {
    title: "ninjee的前端篮子",
    description: "基于Docusaurus v2 静态网站生成器实现个人博客",
    preview: require("./showcase/blog.png"),
    website: "https://https://moxynj.github.io/",
    source: "https://github.com/MoxyNJ/MoxyNJ.github.io",
    tags: ["opensource", "design"],
  },
];

export const TagList = Object.keys(Tags) as TagType[];
function sortProject() {
  let result = Projects;
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  // result = sortBy(result, (user) => !user.tags.includes('javascript'));
  return result;
}

export const sortedProjects = sortProject();

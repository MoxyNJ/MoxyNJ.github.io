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
  | "nodejs";

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
    description:
      "Our favorite Docusaurus sites that you must absolutely check-out!",
    color: "#e9669e",
  },
  opensource: {
    label: "开源",
    description: "Open-Source Docusaurus sites can be useful for inspiration!",
    color: "#39ca30",
  },
  product: {
    label: "产品",
    description: "Docusaurus sites associated to a commercial product!",
    color: "#dfd545",
  },
  design: {
    label: "设计",
    description:
      "Beautiful Docusaurus sites, polished and standing out from the initial template!",
    color: "#a44fb7",
  },
  javascript: {
    label: "JavaScript",
    description: "JavaScript project",
    color: "#dfd545",
  },
  typescript: {
    label: "TypeScript",
    description: "JavaScript project",
    color: "#007acc",
  },
  nodejs: {
    label: "NodeJS",
    description: "NodeJS project",
    color: "#39ca30",
  },
};

const Projects: Project[] = [
  {
    title: "ninjee的小站",
    description: "基于Docusaurus v2 静态网站生成器实现个人博客",
    preview: require("./showcase/blog.png"),
    website: "https://ku/izuo.cn",
    source: "https://github.com/ku/izuo/blog",
    tags: ["opensource", "design"],
  },
  {
    title: "测试测试",
    description:
      "基于NestJs + TypeScript + TypeORM + Redis + MySql + Vben Admin编写的一款前后端分离的权限管理系统",
    preview: require("./showcase/ninjee-icon.png"),
    website: "https://admin.kui/zuo.cn",
    source: "https://github.com/k/uizuo/kz-nest-admin",
    tags: ["opensource", "typescript"],
  },
  {
    title: "测试测试",
    description: "学习编程中遇到的资源整合网站",
    preview: require("./showcase/nav.png"),
    website: "https://nav.kuiz/uo.cn",
    source: "https://github.com/kui/zuo/code-nav",
    tags: ["opensource", "javascript"],
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

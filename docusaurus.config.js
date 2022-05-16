// @ts-check
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ninjee的前端篮子",
  titleDelimiter: "-",
  // tagline: "📖 吾日三省吾身，思否、码否、饭否", // 标题下的文字
  url: "https://moxynj.github.io/", // 当前页面的URL
  baseUrl: "/", // 默认的主页地址
  organizationName: "Ninjee", // GitHub user name.
  projectName: "MoxyNJ.github.io", // repo name.
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ninjee.jpeg",
      // announcementBar: {
      //   id: "announcementBar-1", // Any value that will identify this message.
      //   content: `新增 <a href='https://admin.temp.cn'>在最顶部有一个小提示</a>`,
      // },
      metadata: [
        {
          name: "keywords",
          content:
            "Moxy, Ninjee, blog, javascript, typescript, python ,node, react, vue, web, 前端, 后端",
        },
      ],
      hideableSidebar: true,
      navbar: {
        title: "Ninjee",
        logo: {
          alt: "ninjee",
          src: "img/ninjee-icon.png",
          srcDark: "img/ninjee-icon.png",
        },
        items: [
          {
            label: "归档",
            position: "right",
            items: [
              {
                label: "标签",
                to: "tags",
              },
              {
                label: "最近...",
                to: "archive",
              },
            ],
          },
          {
            label: "前端知识",
            position: "right",
            items: [
              {
                label: "JavaScript",
                to: "docs/frontEnd/javascript",
              },
              {
                label: "HTML & CSS",
                to: "docs/frontEnd/htmlcss",
              },
              {
                label: "React",
                to: "docs/frontEnd/react",
              },
            ],
          },
          {
            label: "敲代码",
            position: "right",
            items: [
              {
                label: "算法",
                to: "docs/code/algorithm",
              },
              {
                label: "手写Js",
                to: "docs/code/writtenJs",
              },
              {
                label: "技巧",
                to: "docs/code/skill",
              },
            ],
          },
          {
            label: "面试",
            position: "right",
            items: [
              {
                label: "计算机网络",
                to: "docs/interview/internet/",
              },
              {
                label: "操作系统",
                to: "docs/interview/os/",
              },
              {
                label: "面经",
                to: "docs/interview/experience/",
              },
              {
                label: "总结",
                to: "docs/interview/summary/",
              },
            ],
          },
          {
            label: "我的项目",
            position: "right",
            to: "/project",
          },
        ],
      },
      //TODO: algolia支持
      algolia: {
        apiKey: "87223cb5a5ff37c4dbbb616812c65a59",
        appId: "2NBW5YNFON",
        indexName: "kuizuo",
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "学习",
            items: [
              {
                label: "技术博客",
                to: "/#homepage_blogs",
              },
              {
                label: "技术笔记",
                to: "docs/skill",
              },
              {
                label: "实战项目",
                to: "project",
              },
            ],
          },
          {
            title: "社交媒体",
            items: [
              {
                label: "首页",
                to: "/",
              },
              {
                label: "关于我",
                to: "/about",
              },
              {
                label: "GitHub",
                href: "https://github.com/moxyNJ",
              },
              {
                label: "掘金",
                href: "https://juejin.cn/user/1565318510545901",
              },
            ],
          },
          {
            title: "友情链接",
            items: [
              {
                label: "峰华前端工程师",
                to: "https://zxuqian.cn/",
              },
            ],
          },
        ],
        copyright: `<p>Copyright © ${new Date().getFullYear()} Ninjee Built with Docusaurus.</p>`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        additionalLanguages: ["javascript", "python"],
        defaultLanguage: "typescript",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      zoomSelector: ".markdown :not(em) > img",
      liveCodeBlock: {
        playgroundPosition: "top",
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        blog: {
          path: "blog",
          routeBasePath: "/",
          blogSidebarTitle: "最近...",
          blogSidebarCount: 5,
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: "all",
            title: "ninjee",
            copyright: `<p>Copyright © ${new Date().getFullYear()} ninjee Built with Docusaurus.</p>`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    "@docusaurus/plugin-ideal-image",
    path.resolve(__dirname, "./src/plugin/plugin-image-zoom"),
    path.resolve(__dirname, "./src/plugin/plugin-latest-docs"),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/ninjee.jpeg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // 您的 PWA Manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(51 139 255)",
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
};

module.exports = config;

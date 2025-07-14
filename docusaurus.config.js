// @ts-check
const path = require("path");
const record = "晋ICP备2021017941号-2";
const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Ninjee的前端篮子",
    titleDelimiter: "-",
    // tagline: "📖 吾日三省吾身，思否、码否、饭否", // 标题下的文字
    url: "https://ninjee.netlify.app", // 当前页面的URL
    baseUrl: "/", // 默认的主页地址
    organizationName: "Ninjee", // GitHub user name.
    projectName: "MoxyNJ.github.io", // repo name.
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "ignore",
    onBrokenAnchors: "ignore",
    favicon: "img/favicon.ico",
    
    // 自定义字段
    customFields: {
        mdx1Compat: true, // 尝试兼容 MDX 1 语法
    },

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
                    content: "Moxy, Ninjee, blog, javascript, typescript, python ,node, react, vue, web, 前端, 后端",
                },
            ],
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            navbar: {
                title: "Ninjee",
                logo: {
                    alt: "ninjee",
                    src: "img/ninjee-icon.png",
                    srcDark: "img/ninjee-icon.png",
                },
                items: [
                    {
                        label: "前端知识",
                        position: "right",
                        items: [
                            {
                                label: "JavaScript",
                                to: "docs/frontEnd/JavaScript",
                            },
                            {
                                label: "HTML & CSS",
                                to: "docs/frontEnd/HTML&CSS",
                            },
                            {
                                label: "React",
                                to: "docs/frontEnd/React",
                            },
                            {
                                label: "浏览器原理",
                                to: "docs/frontEnd/浏览器原理",
                            },
                            {
                                label: "other",
                                to: "docs/frontEnd/other",
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
                            // {
                            //   label: "技巧",
                            //   to: "docs/code/skill",
                            // },
                        ],
                    },
                    {
                        label: "面试",
                        position: "right",
                        items: [
                            {
                                label: "总结",
                                to: "docs/interview/summary",
                            },
                            // {
                            //   label: "计算机网络",
                            //   to: "docs/interview/internet",
                            // },
                            // {
                            //   label: "操作系统",
                            //   to: "docs/interview/os",
                            // },
                            {
                                label: "物联网",
                                to: "docs/interview/iot",
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
            footer: {
                style: "dark",
                links: [
                    {
                        title: "分享",
                        items: [
                            {
                                label: "前端",
                                to: "docs/frontEnd/JavaScript",
                            },
                            {
                                label: "算法笔记",
                                to: "docs/code/algorithm",
                            },
                            {
                                label: "我的项目",
                                to: "project",
                            },
                        ],
                    },
                    {
                        title: "社交媒体",
                        items: [
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
                                href: "https://juejin.cn/user/2005151873514024",
                            },
                        ],
                    },
                    {
                        title: "Blog",
                        items: [
                            {
                                label: "Ninjee 的前端篮子",
                                to: "https://www.ninjee.top",
                            },
                        ],
                    },
                ],
                copyright: `<p>Copyright © ${new Date().getFullYear()} Ninjee Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" >${record}</a></p>`,
            },
            prism: {
                theme: themes.github,
                darkTheme: themes.vsDark,
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
                blog: false,
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
        "@docusaurus/plugin-ideal-image",
        path.resolve(__dirname, "./src/plugin/plugin-image-zoom"),
        path.resolve(__dirname, "./src/plugin/plugin-latest-docs"),
        [
            "@docusaurus/plugin-pwa",
            {
                debug: true,
                offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
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
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true, // 默认 true，开启索引文件指纹
                language: ["en", "zh"], // 指定多语言分词
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],
    stylesheets: [],
    i18n: {
        defaultLocale: "zh",
        locales: ["zh"],
    },
    markdown: {
        mdx1Compat: {
            comments: true,
            admonitions: true,
            headingIds: true,
        },
        format: 'detect',
        mermaid: false,
    },
};

module.exports = config;

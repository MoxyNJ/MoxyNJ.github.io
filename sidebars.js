/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // code
    前端: [
        {
            label: "JavaScript",
            type: "category",
            link: {
                type: "generated-index",
            },
            items: [
                {
                    type: "autogenerated",
                    dirName: "frontEnd/JavaScript",
                },
            ],
        },
        {
            label: "HTML、CSS",
            type: "category",
            link: {
                type: "generated-index",
            },
            items: [
                {
                    type: "autogenerated",
                    dirName: "frontEnd/HTML&CSS",
                },
            ],
        },
        // {
        //     label: "React",
        //     type: "category",
        //     link: {
        //         type: "generated-index",
        //     },
        //     items: [
        //         {
        //             type: "autogenerated",
        //             dirName: "frontEnd/React",
        //         },
        //     ],
        // },
        {
            label: "手写 JS",
            type: "category",
            link: {
                type: "generated-index",
            },
            items: [
                {
                    type: "autogenerated",
                    dirName: "code/writtenJs",
                },
            ],
        },
        {
            label: "other",
            type: "category",
            link: {
                type: "generated-index",
            },
            items: [
                {
                    label: "浏览器原理",
                    type: "category",
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "frontEnd/浏览器原理",
                        },
                    ],
                },
                {
                    label: "algorithm",
                    type: "category",
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "code/algorithm",
                        },
                    ],
                },
                {
                    type: "autogenerated",
                    dirName: "frontEnd/other",
                },
            ],
        },
        {
            label: "总结",
            type: "category",
            link: {
                type: "generated-index",
            },
            items: [
                {
                    type: "autogenerated",
                    dirName: "interview/summary",
                },
                // {
                //     label: "Iot",
                //     type: "category",
                //     link: {
                //         type: "generated-index",
                //     },
                //     items: [
                //         {
                //             type: "autogenerated",
                //             dirName: "interview/iot",
                //         },
                //     ],
                // },
            ],
        },
    ],
    // algorithm: [
    //   {
    //     type: "autogenerated",
    //     dirName: "code/algorithm",
    //   },
    // ],
    // writtenJs: [
    //   {
    //     type: "autogenerated",
    //     dirName: "code/writtenJs",
    //   }
    // ],
    // // frontEnd
    // JavaScript: [
    //   {
    //     type: "autogenerated",
    //     dirName: "frontEnd/JavaScript",
    //   },
    // ],
    // "HTML&CSS": [
    //   {
    //     type: "autogenerated",
    //     dirName: "frontEnd/HTML&CSS",
    //   },
    // ],
    // "React": [
    //   {
    //     type: "autogenerated",
    //     dirName: "frontEnd/React",
    //   },
    // ],
    // "浏览器原理": [
    //   {
    //     type: "autogenerated",
    //     dirName: "frontEnd/浏览器原理",
    //   },
    // ],
    // "other":[
    //   {
    //     type: "autogenerated",
    //     dirName: "frontEnd/other"
    //   },
    // ],
    // // interview
    // iot: [
    //   {
    //     type: "autogenerated",
    //     dirName: "interview/iot",
    //   },
    // ],
    // summary: [
    //   {
    //     type: "autogenerated",
    //     dirName: "interview/summary",
    //   },
    // ],
    // skill: [
    //   "code/skill/introduction",
    //   {
    //     label: "Vue",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       "code/skill/vue/Vue响应式数据之Object",
    //       "code/skill/vue/Vue-component",
    //       "code/skill/vue/Pinia",
    //     ],
    //   },
    //   {
    //     label: "React",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       {
    //         type: "autogenerated",
    //         dirName: "code/skill/react",
    //       },
    //     ],
    //   },
    //   {
    //     label: "Web",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       {
    //         type: "autogenerated",
    //         dirName: "code/skill/web",
    //       },
    //     ],
    //   },
    //   {
    //     label: "JavaScript",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       {
    //         type: "autogenerated",
    //         dirName: "code/skill/js",
    //       },
    //     ],
    //   },
    //   {
    //     label: "Node",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       {
    //         type: "autogenerated",
    //         dirName: "code/skill/node",
    //       },
    //     ],
    //   },
    //   {
    //     label: "Css",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       "code/skill/css/记Tailwind CSS使用",
    //       "code/skill/css/有趣且实用的CSS小技巧",
    //     ],
    //   },
    //   {
    //     label: "逆向",
    //     type: "category",
    //     link: {
    //       title: "逆向笔记",
    //       description: "Web逆向与安卓逆向笔记",
    //       type: "generated-index",
    //       keywords: ["reverse", "web", "android", "frida"],
    //     },
    //     items: [
    //       {
    //         label: "安卓",
    //         type: "category",
    //         link: {
    //           type: "generated-index",
    //         },
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/reverse/android",
    //           },
    //         ],
    //       },
    //       {
    //         label: "Web",
    //         type: "category",
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/reverse/web",
    //           },
    //         ],
    //       },
    //       {
    //         label: "密码学",
    //         type: "category",
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/reverse/crypto",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     label: "后端",
    //     type: "category",
    //     link: {
    //       type: "generated-index",
    //     },
    //     items: [
    //       {
    //         type: "autogenerated",
    //         dirName: "code/skill/backend",
    //       },
    //     ],
    //   },
    //   {
    //     label: "数据库",
    //     type: "category",
    //     link: {
    //       // title: '',
    //       // description: '',
    //       type: "generated-index",
    //       keywords: ["database", "mysql", "mongodb", "redis", "elasticsearch"],
    //     },
    //     items: [
    //       {
    //         label: "Mysql",
    //         type: "category",
    //         link: {
    //           type: "doc",
    //           id: "code/skill/database/mysql/index",
    //         },
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/database/mysql",
    //           },
    //         ],
    //       },
    //       {
    //         label: "MongoDB",
    //         type: "category",
    //         link: {
    //           type: "doc",
    //           id: "code/skill/database/mongo/index",
    //         },
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/database/mongo",
    //           },
    //         ],
    //       },
    //       {
    //         label: "Redis",
    //         type: "category",
    //         link: {
    //           type: "doc",
    //           id: "code/skill/database/redis/index",
    //         },
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/database/redis",
    //           },
    //         ],
    //       },
    //       {
    //         label: "Elasticsearch",
    //         type: "category",
    //         link: {
    //           type: "doc",
    //           id: "code/skill/database/elasticsearch/index",
    //         },
    //         items: [
    //           {
    //             type: "autogenerated",
    //             dirName: "code/skill/database/elasticsearch",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
};

module.exports = sidebars;

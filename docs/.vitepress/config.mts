import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base:'/AlanBlog/',
    title: "Alan's blog",
    description: ".net|.net core|大前端 笔记",
    lang: 'zh-Hans',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { light: "/logo_black.png", dark: "/logo_white.png" },
        darkModeSwitchLabel: '切换主题色',
        lightModeSwitchTitle: '切换为亮色主题',
        darkModeSwitchTitle: '切换为暗黑主题',
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            },
        },
        // 配置导航栏
        nav: [
            {
                text: '.NET', items: [
                    { text: '.NET Core', link: '/net/asp-net-core/' },
                ]
            },
            {
                text: 'Unity', items: [
                    { text: '勇士传说', link: '/unity/legend-of-the-warrior/' },
                ]
            },
            {
                text: 'Web前端', items: [
                    { text: 'Vue全家桶', link: '/frontend/vue/' },
                ]
            },
            {
                text: '系统架构设计师', link: '/exam/introduction'
            },
            {
                text: '随笔', link: '/memo/'
            },
            {
                text: '关于', link: '/about'
            }
        ],
        sidebarMenuLabel: '菜单',
        // 配置侧边栏
        sidebar: {
            '/frontend/vue/': [
                {
                    text: 'vue',
                    items: [
                        { text: '认识vue', link: '/frontend/vue/' }
                    ]
                }
            ],
            '/memo/': [
                {
                    text: '一些随笔',
                }
            ],
            '/net/asp-net-core/': [
                {
                    text: '.Net Core',
                    items: [
                        { text: '开始', link: '/net/asp-net-core/' },
                        { text: '异步编程', link: '/net/asp-net-core/async' },
                        { text: '异步编程', link: '/net/asp-net-core/async' },
                    ]
                }
            ],
            '/exam/': [
                {
                    text: '软考高级-系统架构设计师',
                    items: [
                        { text: '系统结构概述', link: '/exam/introduction' },
                        { text: '计算机系统基础知识', link: '/exam/computer-systems-fundamentals' },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yhyo-Alan' },
            {
                icon: {
                    svg: '<svg t="1717484425297" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6859" width="256" height="256"><path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z" p-id="6860"></path></svg>'
                }, link: 'mailto:nan-dream@hotmail.com'
            }
        ],
        search: {
            provider: 'local'
        },
        outline: {
            label: '本页目录'
        },
        externalLinkIcon: true,
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            copyright: 'Copyright © 2024-present Alan Xu Powered by VitePress'
        }
    },
})

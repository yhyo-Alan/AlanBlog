import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base:'/AlanBlog/',
    title: "Alan‘s blog",
    description: ".net|.net core|大前端 笔记",
    lastUpdated: true,
    lang: 'zh-cn',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { light: "/logo_black.png", dark: "/logo_white.png" },
        darkModeSwitchLabel:'切换主题色',
        lightModeSwitchTitle:'切换为亮色主题',
        darkModeSwitchTitle:'切换为暗黑主题',
        // 配置导航栏
        nav: [
            {
                text: '.NET', items: [
                    { text: 'ASP.NET Core', link: '/net/asp-net-core/' },
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
                text: '杂记', link: '/memo/'
            },
            {
                text: '关于', link: '/introduce'
            }
        ],
        // 配置侧边栏
        sidebar: {
            '/frontend/vue/': [
                {
                    text: 'vue',
                    items: [
                        { text: '认识vue', link: '/frontend/vue/' },
                        { text: '生命周期', link: '/frontend/vue/lifecycle' }
                    ]
                }
            ],
            '/memo/': [
                {
                    text: '一些随笔',
                    items: [
                        { text: '水星记', link: '/memo/water' },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yhyo-Alan' }
        ],
        search: {
            provider: 'local'
        },
        footer: {
            copyright: 'Copyright © 2024-present Alan Xu'
        }
    },
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base:'/AlanBlog/',
    title: "Alan's blog",
    description: ".net|.net core|大前端 笔记",
    lastUpdated: true,
    lang: 'zh-cn',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { light: "/logo_black.png", dark: "/logo_white.png" },
        darkModeSwitchLabel: '切换主题色',
        lightModeSwitchTitle: '切换为亮色主题',
        darkModeSwitchTitle: '切换为暗黑主题',
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
                text: '随笔', link: '/memo/'
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
        footer: {
            copyright: 'Copyright © 2024-present Alan Xu'
        }
    },
})

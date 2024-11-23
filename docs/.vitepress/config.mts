import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "2024 Zhejiang Sci-Tech University technical writing",
  description: "This site is the showcase for Zhejiang Sci-Tech University technical writing assignments in 2024.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://tech.amber-moe.io' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Xiangyang', link: '/202131202042-xiangyang' },

        ]
      },
      {
        text: 'For loop',
        collapsed: true,
        items: [
          { text: 'Sample Work', link: '/for-loop/sample-work' },
          { text: '2023221402023', link: '/for-loop/2023221402023' },

        ]
      },
      {
        text: 'Final work',
        collapsed: true,
        items: [
          { text: 'Test Sync', link: '/final/test-sync' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})

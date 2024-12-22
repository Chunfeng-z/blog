import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chunfeng-z Blog",
  // description是用于SEO的，会显示在meta标签中
  description: "这里是 Chunfeng-z 的博客，我将在这里记录一些前端开发的心得和技术分享。",
  head: [['link', { rel: 'icon', href: '/blog/blogger.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/blog/',
  markdown: { 
    config(md) { 
      md.use(vitepressDemoPlugin); 
    }, 
  }, 
})

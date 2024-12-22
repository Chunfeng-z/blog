import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chunfeng-z Project",
  // description是用于SEO的，会显示在meta标签中
  description: "A VitePress Site Test",
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
  markdown: { 
    config(md) { 
      md.use(vitepressDemoPlugin); 
    }, 
  }, 
})

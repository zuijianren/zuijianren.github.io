import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "zuijianren's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Blog",
    logo: "/logo.ico",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JAVA', link: '/java/' },
      {
        text: 'JAVA', items: [
          {
            items: [
              { text: '多态', link: '/java/多态' },
              { text: '反射', link: '/java/反射' },
            ]
          },
          {
            items: [
              { text: '多态', link: '/java/多态' },
              { text: '反射', link: '/java/反射' },
            ]
          }
        ]
      },
    ],

    sidebar: {
      '/java/': [
        {
          text: 'Java',
          collapsed: true,
          items: [
            { text: '多态', link: '/java/多态' },
            { text: '反射', link: '/java/反射' },
          ]
        },
        {
          text: 'Java',
          collapsed: false,
          items: [
            { text: '多态', link: '/java/多态' },
            { text: '反射', link: '/java/反射' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuijianren' }
    ]
  }
})

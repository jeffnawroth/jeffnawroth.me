import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jeff Nawroth",
  description: "My personal website",
  lang: 'en-US',
  appearance: "dark",

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  themeConfig: {
    logo: '/favicon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Projects', link: '/projects' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeffnawroth/' },
    ],
    footer: {
      copyright: 'Copyright © 2024-present Jeff Nawroth',
      message: 'Released under the MIT License.',
    },
  }
})

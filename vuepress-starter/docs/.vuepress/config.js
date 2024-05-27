import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Medusza Docs',
  description: 'Welcome to Medusza Docs!',

  theme: defaultTheme({
    logo: "/images/logo.png",

    navbar: ['/', '/get-started'],

    sidebar: {
      '/': [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: "Introduction",
          children: [
            {
              text: "Gherkin ",
              link: "/introduction/gherkin",
              children: [
                {
                  text: "Approach",
                  link: "/introduction/gherkin"
                },
                {
                  text: "Keywords",
                  link: "/introduction/gherkin-keywords"
                },
                {
                  text: "E2E",
                  link: "/introduction/e2e"
                }
              ],
            },

          ]
        },
        {
          text: "Installation",
          children: [{
            text: "Windows",
            link: "/installation/windows"
          }, {
            text: "Linux",
            link: "/installation/linux"
          }, {
            text: "Mac",
            link: "/installation/mac"
          }]
        },
        {
          text: "CI/CD",
          link: "/ci-cd/build-package.md",
        },
        {
          text: 'Reports',
          link: '/report/generate-report.md',
        },
      ],
    },
  }),

  bundler: viteBundler(),
})

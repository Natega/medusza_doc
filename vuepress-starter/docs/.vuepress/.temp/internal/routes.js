export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/ci-cd/build-package.html", { loader: () => import(/* webpackChunkName: "ci-cd_build-package.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/ci-cd/build-package.html.js"), meta: {"title":"Integrating Medusza Tests with Your CI/CD Pipeline"} }],
  ["/installation/linux.html", { loader: () => import(/* webpackChunkName: "installation_linux.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/installation/linux.html.js"), meta: {"title":"Medusza Installation Guide for Linux"} }],
  ["/installation/mac.html", { loader: () => import(/* webpackChunkName: "installation_mac.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/installation/mac.html.js"), meta: {"title":"Medusza Desktop Application Installation Guide (macOS)"} }],
  ["/installation/windows.html", { loader: () => import(/* webpackChunkName: "installation_windows.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/installation/windows.html.js"), meta: {"title":"Medusza Installation Guide for Windows"} }],
  ["/introduction/e2e.html", { loader: () => import(/* webpackChunkName: "introduction_e2e.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/introduction/e2e.html.js"), meta: {"title":"End-to-End (E2E) Testing Approach"} }],
  ["/introduction/gherkin-keywords.html", { loader: () => import(/* webpackChunkName: "introduction_gherkin-keywords.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/introduction/gherkin-keywords.html.js"), meta: {"title":"Gherkin Keywords"} }],
  ["/introduction/gherkin.html", { loader: () => import(/* webpackChunkName: "introduction_gherkin.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/introduction/gherkin.html.js"), meta: {"title":"Gherkin Approach"} }],
  ["/report/generate-report.html", { loader: () => import(/* webpackChunkName: "report_generate-report.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/report/generate-report.html.js"), meta: {"title":"Report Generation"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

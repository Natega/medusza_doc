import comp from "/home/gdesmet/TOcloud/medusza-doc/vuepress-starter/docs/.vuepress/.temp/pages/introduction/keywords.html.vue"
const data = JSON.parse("{\"path\":\"/introduction/keywords.html\",\"title\":\"Gherkin Keywords\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Feature\",\"slug\":\"feature\",\"link\":\"#feature\",\"children\":[]},{\"level\":2,\"title\":\"Scenario\",\"slug\":\"scenario\",\"link\":\"#scenario\",\"children\":[]},{\"level\":2,\"title\":\"Given\",\"slug\":\"given\",\"link\":\"#given\",\"children\":[]},{\"level\":2,\"title\":\"When\",\"slug\":\"when\",\"link\":\"#when\",\"children\":[]},{\"level\":2,\"title\":\"Then\",\"slug\":\"then\",\"link\":\"#then\",\"children\":[]},{\"level\":2,\"title\":\"And/But\",\"slug\":\"and-but\",\"link\":\"#and-but\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"introduction/keywords.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

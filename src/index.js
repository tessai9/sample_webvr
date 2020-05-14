import Vue from "vue"
import App from "./vue-components/App.vue"
import { router } from "./router.js"

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-asset-item",
  "a-camera",
  "a-entity",
  "a-sky",
  "a-link",
  "a-ocean",
]

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    router,
    render: h => h(App),
  }).$mount("#app")
})

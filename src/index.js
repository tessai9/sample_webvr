import Vue from "vue"
import App from "./vue-components/App.vue"

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-camera",
  "a-entity",
]

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    render: h => h(App),
  }).$mount("#app")
})

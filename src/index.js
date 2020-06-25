import Vue from "vue"
import App from "./vue-components/App.vue"
import VrHomePage from "./vue-components/VrHomePage.vue"
import { router } from "./router.js"
import store from "./store/store.js"
import { checkEnvironment } from "./utils/device-utils.js"

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
    store: store,
    render: h => h(checkEnvironment() ? VrHomePage : App),
  }).$mount("#app")
})

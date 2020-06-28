import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./vue-components/Home.vue"
import Labyrinth from "./vue-components/Labyrinth.vue"
import WarZone from "./vue-components/WarZone.vue"
import Train from "./vue-components/Train.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/labyrinth", component: Labyrinth },
    { path: "/warzone", component: WarZone },
    { path: "/train", component: Train },
  ]
})

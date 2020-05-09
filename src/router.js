import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./vue-components/Home.vue"
import Labyrinth from "./vue-components/Labyrinth.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/labyrinth", component: Labyrinth },
  ]
})

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player_movable: false,
  },
  getters: {
    getPlayerMovableState(state) {
      return state.player_movable
    },
  },
  mutations: {
    switchPlayerMovable(state, payload) {
      state.player_movable = payload
    },
  },
  actions: {
    updatePlayerMovable({commit}, movable) {
      commit("switchPlayerMovable", movable)
    }
  }
})

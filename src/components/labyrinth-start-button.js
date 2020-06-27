import store from "../store/store/js"

AFRAME.registerComponent("labyrinth-start-button", {
  init: function() {
    this.clickable = false
    this.el.addEventListener('raycaster-intersected', (e) => {
      this.clickable = true
    })
    this.el.addEventListener('raycaster-intersected-cleared', (e) => {
      this.clickable = false
    })
  }
})

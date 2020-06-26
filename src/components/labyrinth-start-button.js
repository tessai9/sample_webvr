AFRAME.registerComponent("labyrinth-start-button", {
  init: function() {
    this.el.addEventListener('raycaster-intersected', (e) => {})
    this.el.addEventListener('raycaster-intersected-cleared', (e) => {})
  }
})

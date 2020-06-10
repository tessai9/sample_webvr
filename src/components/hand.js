AFRAME.registerComponent('hand', {
  dependencies: ["raycaster"],
  init() {
    this.startButtonIntersected = false
    this.el.addEventListener('raycaster-intersection', (e) => {})
    this.el.addEventListener('raycaster-intersection-cleared', (e) => {})
  },
})

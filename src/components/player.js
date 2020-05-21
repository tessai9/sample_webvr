// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  dependencies: ["raycaster"],
  multiple: true,

  init: function () {
    // current position
    this.currentPosition = { x: 0, y: 0, z: 0 }
    // normal vector
    this.normalVec = null

    this.el.addEventListener("raycaster-intersection", (e) => {
      this.normalVec = e.detail.intersections[0].face.normal
    })
    this.el.addEventListener("raycaster-intersection-cleared", () => {
      this.normalVec = null
    })
  },
  tick: function() {
    if(!this.normalVec){
      Object.assign(this.currentPosition, this.el.object3D.position)
      return
    }
    // 側面の衝突
    if (this.normalVec.x < 0 || this.normalVec.x > 0) {
      this.el.object3D.position.x = this.currentPosition.x
    // 正面、背後の衝突
    }else if (this.normalVec.z > 0 || this.normalVec.z < 0) {
      this.el.object3D.position.z = this.currentPosition.z
    }
  },
});

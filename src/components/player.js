// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  dependencies: ["raycaster"],
  multiple: true,

  schema: {},
  init: function () {
    // current position
    this.currentPosition = { x: 0, y: 0, z: 0 }
    // normal vector
    this.normalVec = null

    this.el.addEventListener("raycaster-intersection", (e) => {
      console.log("intersection!")
      this.normalVec = e.detail.intersections[0].face.normal
    })
    this.el.addEventListener("raycaster-intersection-cleared", () => {
      console.log("intersect cleard!")
      this.normalVec = null
    })
  },
  tick: function() {
    if(!this.normalVec){
      Object.assign(this.currentPosition, this.el.object3D.position)
      return
    }
    // 右側面の衝突
    if (this.normalVec.x < 0) {
      this.el.object3D.position.x = this.currentPosition.x
    // 左側面の衝突
    }else if (this.normalVec.x > 0) {
      this.el.object3D.position.x = this.currentPosition.x
    // 正面の衝突
    }else if (this.normalVec.z > 0) {
      this.el.object3D.position.z = this.currentPosition.z
    // 背面の衝突
    }else if (this.normalVec.z < 0) {
      this.el.object3D.position.z = this.currentPosition.z
    }
  },
  update: function() {}
});

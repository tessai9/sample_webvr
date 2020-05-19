const RAYCASTER_DEF = {
  objects: ".wall",
  far: 1,
  direction: {
    x: 0,
    y: 0,
    z: -1
  },
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  dependencies: ["raycaster"],
  // multiple: true,

  // schema: {
  //   direction: {type: "vec3"}
  // },
  init: function () {
    this.el.setAttribute("raycaster", RAYCASTER_DEF)
    this.el.addEventListener("raycaster-intersection", (e) => {
      console.log("intersection!")
      console.log(e.detail)
    })
    this.el.addEventListener("raycaster-intersection-cleared", () => {
      console.log("intersect cleard!");
    })
  },
  tick: function() {},
});

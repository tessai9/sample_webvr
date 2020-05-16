// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  dependencies: ["raycaster"],
  // multiple: true,

  // schema: {
  //   direction: {type: "vec3"}
  // },
  init: function () {
    // this.el.setAttribute("direction", "0 0 -1")
  },
  tick: function() {
    const el = this.el
    this.el.addEventListener("raycaster-intersection", function () {
      console.log("Player hit something!");
      el.setAttribute("movement-controls", { enabled: false })
    });
    this.el.addEventListener("raycaster-intersection-cleared", function () {
      console.log("cleared!");
      el.setAttribute("movement-controls", { enabled: true })
    });
  },

  update: function () {
    // var el = this.el;
    // var data = this.data;
  }
});

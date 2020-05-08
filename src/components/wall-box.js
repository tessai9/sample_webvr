const WALL_BOX_SIZE = {
  width: 5,
  height: 5
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent("wall-box", {
  init: function() {
    this.el.setAttribute("width", WALL_BOX_SIZE.width)
    this.el.setAttribute("height", WALL_BOX_SIZE.height)
    console.log("wall box initialize");
  },
})

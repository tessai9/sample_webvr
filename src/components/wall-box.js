import { WALL_BOX_SIZE } from "../utils/component-utils.js"

AFRAME.registerComponent("wall-box", {
  init: function() {
    this.el.setAttribute("geometry", WALL_BOX_SIZE)
  },
})

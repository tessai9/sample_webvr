import { WALL_BOX_SIZE } from "../utils/component-utils.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("wall-box", {
  init: function() {
    this.el.setAttribute("geometry", WALL_BOX_SIZE)
  },
})

<template lang="html">
  <a-scene physics="debug: true" vr-mode-ui="enabled: true">
    <!-- assets -->
    <a-assets>
      <img id="wall" src="/assets/wall.jpg" />
    </a-assets>
    <!-- player -->
    <a-entity
      id="rig"
      movement-controls="speed: 0.4;"
      position="0 0 7"
      raycaster="objects: .wall; far: 1; direction: 0 0 -1;"
      raycaster__back="objects: .wall; far: 1; direction: 0 0 1;"
      raycaster__left="objects: .wall; far: 1; direction: 1 0 0;"
      raycaster__right="objects: .wall; far: 1; direction: -1 0 0;"
      player
    >
      <a-entity
        camera
        look-controls="pointerLockEnabled: true"
        position="0 1.6 0"
      ></a-entity>
    </a-entity>

    <!-- sky -->
    <a-sky color="#6EBAA7"></a-sky>

    <!-- wall map -->
    <a-entity
      :key="row_index"
      v-for="(map_array, row_index) in map_data"
      :position="rowPosition(row_index)"
    >
      <a-entity
        :key="column_index"
        v-for="(isRoad, column_index) in map_array"
        v-if="!isRoad"
        :position="columnPosition(column_index)"
        geometry="primitive: box;"
        material="src: #wall"
        class="wall"
        wall-box
      ></a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
import { WALL_MAP } from "../WallMap.js"

const WALL_INTERVAL = 5

export default {
  name: "Labyrinth",
  data() {
    return {
      map_data: WALL_MAP,
    }
  },
  methods: {
    rowPosition(row) {
      return {
        x: 0,
        y: 0,
        z: WALL_INTERVAL * row * -1
      }
    },
    columnPosition(column) {
      return {
        x: WALL_INTERVAL * column,
        y: 0,
        z: 0
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>

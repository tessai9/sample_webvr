<template lang="html">
  <a-scene physics="debug: true">
    <!-- player -->
    <a-entity
      id="rig"
      movement-controls="speed: 0.2;"
      position="0 0 7"
    >
      <a-entity
        camera
        player
        look-controls
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
        v-for="(value, column_index) in map_array"
        v-if="value == 0"
        :position="columnPosition(column_index)"
        geometry="primitive: box; width: 5; height: 5; depth: 5;"
        material="color: gray;"
        static-body
      ></a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
import { WALL_MAP } from "../WallMap.js"

const WALL_INTERVAL = 5

export default {
  name: "App",
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

<template lang="html">
  <a-scene physics="debug: true" vr-mode-ui="enabled: true">
    <!-- assets -->
    <a-assets>
      <img id="wall" src="/assets/wall.jpg" />
    </a-assets>

    <!-- Title -->
    <a-entity
      id="start_button"
      v-if="!playerMovable"
      geometry="primitive: plane; width: 2; height: 1;"
      position="5 0 2"
    >
      <a-entity
        text="value: Start; align: center;"
        scale="10 10 1"
      ></a-entity>
    </a-entity>

    <!-- text -->
    <a-entity
      geometory="primitive: text;"
      position="5 0 -2.5"
      :text="debugValue"
    ></a-entity>

    <!-- player -->
    <a-entity
      id="rig"
      ref="player"
      :movement-controls="playerMoveControles"
      position="5 0 7"
      raycaster="objects: .wall; far: 1; direction: 0 0 -1;"
      raycaster__back="objects: .wall; far: 1; direction: 0 0 1;"
      raycaster__left="objects: .wall; far: 1; direction: 1 0 0;"
      raycaster__right="objects: .wall; far: 1; direction: -1 0 0;"
      labyrinth-player
    >
      <!-- camera -->
      <a-entity
        camera
        look-controls="pointerLockEnabled: true"
        position="0 1.6 0"
      ></a-entity>
      <!-- player hands -->
      <a-entity
        id="left-hand"
        hand-controls="hand: left;"
        gltf-model="/assets/obj/hands/leftHandLow.glb"
        raycaster="objects: #start_button; showLine: true; far: 5;"
        hand
      ></a-entity>
      <a-entity
        id="right-hand"
        hand-controls="hand: right;"
        gltf-model="/assets/obj/hands/rightHandLow.glb"
        raycaster="objects: #start_button; showLine: true; far: 5;"
        hand
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
  computed: {
    playerMoveControles() {
      const moveControlProperty = {
        enabled: this.$store.getters.getPlayerMovableState,
        speed: 0.4,
      }
      console.log(moveControlProperty)
      return moveControlProperty
    },
    playerMovable() {
      return this.$store.getters.getPlayerMovableState
    },
    debugValue() {
      return {
        value: this.$store.getters.getPlayerMovableState,
        width: 5
      }
    },
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

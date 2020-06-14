<template lang="html">
  <a-scene>
    <a-sky color="#20b2aa"></a-sky>
    <a-link href="/labyrinth" title="Go to Labyrinth!" position="2 1.3 -3"></a-link>
    <a-link href="/warzone" title="Go to War Zone!" position="-2 1.3 -3"></a-link>
    <a-link href="/train" title="Go to War Zone!" position="-2 1.3 -3"></a-link>

    <a-entity
      id="rig"
      movement-controls="speed: 0.5;"
    >
      <a-entity
        camera
        universal-controls
        look-controls
      ></a-entity>
      <a-entity hand-controls="hand: right"></a-entity>
      <a-entity hand-controls="hand: left"></a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
<!-- <a-scene>
  <a-sky color="#20b2aa"></a-sky>
  <a-link href="/labyrinth" title="Go to Labyrinth!" position="2 1.3 -3"></a-link>
  <a-link href="/warzone" title="Go to War Zone!" position="-2 1.3 -3"></a-link>

  <a-entity
    id="rig"
    movement-controls="speed: 0.5;"
  >
    <a-entity
      camera
      universal-controls
      look-controls
    ></a-entity>
    <a-entity hand-control="right"></a-entity>
  </a-entity>
</a-scene> -->
<div class="">
  <router-link to="Labyrinth">go to labyrinth</router-link>
  <router-link to="WarZone">go to war zone</router-link>
  <router-link to="Train">go to train</router-link>
</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
}
</script>

<style lang="css" scoped>
</style>

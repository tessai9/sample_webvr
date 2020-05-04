<template lang="html" functional>
  <a-scene>
    <!-- player -->
    <a-entity
      id="rig"
      movement-controls
    >
      <a-camera
        position="0 1.6 0"
        player
        look-controls
      ></a-camera>
    </a-entity>

    <!-- sky -->
    <a-sky color="#6EBAA7"></a-sky>

    <!-- a box -->
    <a-entity geometry="primitive: box;" position="0 2 -5"></a-entity>
  </a-scene>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="css" scoped>
</style>

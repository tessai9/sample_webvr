<template lang="html" functional>
  <a-scene physics="debug: true">
    <!-- player -->
    <a-entity
      id="rig"
      movement-controls="speed: 0.2; constrainToNavMesh: true;"
    >
      <a-entity
        camera
        position="0 1.6 0"
        player
        look-controls
      ></a-entity>
    </a-entity>

    <!-- sky -->
    <a-sky color="#6EBAA7"></a-sky>

    <!-- a box -->
    <a-entity
      geometry="primitive: box;"
      position="0 2 -5"
      static-body
    ></a-entity>
  </a-scene>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="css" scoped>
</style>

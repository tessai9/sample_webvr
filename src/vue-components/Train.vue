<template lang="html">
  <a-scene>
    <a-assets></a-assets>

    <!-- sky -->
    <a-sky
      scale="3 3 3"
      position="0 0 -600"
      color="#222222"
    ></a-sky>

    <!-- Train -->
    <a-entity
      gltf-model="/assets/obj/subway_train/scene.gltf"
    ></a-entity>

    <!-- Player -->
    <a-entity
      camera
      wasd-controls="acceleration: 3000"
      position="0 191 -140"
      look-controls="pointerLockEnabled: true"
    ></a-entity>

  </a-scene>
</template>

<script>
export default {
  name: "Train"
}
</script>

<style lang="css" scoped>
</style>

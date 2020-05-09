<template lang="html">
  <a-scene physics="debug: true">
    <a-assets>
      <a-asset-item id="temple-obj" src="/assets/obj/temple-of-eshmoun/source/model.obj"></a-asset-item>
      <a-asset-item id="temple-mtl" src="/assets/obj/temple-of-eshmoun/source/model.mtl"></a-asset-item>
    </a-assets>

    <a-entity
      obj-model="obj: #temple-obj; mtl: #temple-mtl;"
      position="39.821 -16.500 -8.433"
      static-body
    ></a-entity>

    <a-entity
      id="rig"
      movement-controls="speed: 0.4;"
      position="1.988 1.535 -5.499"
      dynamic-body
    >
      <a-entity
        camera
        player
        look-controls="pointerLockEnabled: true"
        position="0 1.6 0"
      ></a-entity>
    </a-entity>

  </a-scene>
</template>

<script>
export default {
  name: "WarZone",
}
</script>

<style lang="css" scoped>
</style>

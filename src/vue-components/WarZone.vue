<template lang="html">
  <a-scene physics="debug: true">
    <!-- Assets -->
    <a-assets>
      <a-asset-item id="temple-obj" src="/assets/obj/temple-of-eshmoun/source/model.obj"></a-asset-item>
      <a-asset-item id="temple-mtl" src="/assets/obj/temple-of-eshmoun/source/model.mtl"></a-asset-item>
      <a-asset-item id="hand-obj" src="/assets/obj/hands/hand.OBJ"></a-asset-item>
      <a-asset-item id="hand-mtl" src="/assets/obj/hands/Hand.mtl"></a-asset-item>
    </a-assets>

    <!-- War Zone Base Area -->
    <a-entity
      obj-model="obj: #temple-obj; mtl: #temple-mtl;"
      position="39.821 -16.500 -8.433"
    ></a-entity>

    <a-ocean position="35 -11.5 -37" scale="30 18 1"></a-ocean>

    <!-- Player Camera -->
    <a-entity
      id="rig"
      movement-controls="speed: 0.4;"
      position="1.988 1.535 -5.499"
    >
      <a-entity
        camera
        player
        look-controls="pointerLockEnabled: true"
        position="0 3 0"
      ></a-entity>
      <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
      <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
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

<template lang="html">
  <a-scene physics="debug: true" vr-mode-ui="enabled: true">
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
      static-body
    ></a-entity>

    <a-entity
      geometry="primitive: box;"
      position="1.988 20 -10"
      dynamic-body
    ></a-entity>

    <!-- Player Camera -->
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

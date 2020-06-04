<template lang="html">
  <a-scene>
    <a-assets>
      <img id="ghost" src="/assets/ghost_woman.png" />
      <audio id="train_running" src="/assets/sounds/on_a_train1.mp3" preload="auto" />
    </a-assets>

    <!-- sky -->
    <a-sky
      scale="3 3 3"
      position="0 0 -600"
      color="#222222"
      sound="src: #train_running; loop: true; volume: 6; autoplay: true;"
    ></a-sky>

    <!-- Train -->
    <a-entity
      gltf-model="/assets/obj/subway_train/scene.gltf"
      material="transparent: true;"
    ></a-entity>

    <!-- Player -->
    <a-entity
      camera
      wasd-controls="acceleration: 4000"
      position="0 191 -140"
      look-controls="pointerLockEnabled: true"
      train-player
    ></a-entity>

    <!-- Ghost -->
    <a-entity
      position="380 130 -515"
      geometry="primitive: plane; width: 200; height: 300;"
      material="src: #ghost; transparent: true;"
      rotation="0 -90 0"
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

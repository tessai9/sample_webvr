<template lang="html">
  <a-scene v-show="allModelsLoaded">
    <!-- Assets -->
    <a-assets>
      <img id="sunset" src="/assets/sunset.jpg" />
      <a-asset-item id="temple-obj" src="/assets/obj/temple-of-eshmoun/source/model.obj"></a-asset-item>
      <a-asset-item id="temple-mtl" src="/assets/obj/temple-of-eshmoun/source/model.mtl"></a-asset-item>
      <audio id="world-battle-sound" src="/assets/sounds/world-sound.mp3" preload="auto" />
      <audio id="running-tank" src="/assets/sounds/running-tank.mp3" preload="auto" />
      <audio id="cannon-firing" src="/assets/sounds/cannon-firing.mp3" preload="auto" />
    </a-assets>

    <!-- War Zone Base Area -->
    <a-entity
      obj-model="obj: #temple-obj; mtl: #temple-mtl;"
      position="39.821 -16.500 -8.433"
      sound="src: #world-battle-sound; loop: true; volume: 4; autoplay: true;"
      sound__tank="src: #running-tank; loop: true; volume: 4; autoplay: true;"
      sound__cannon="src: #cannon-firing; loop: true; volume: 4; autoplay: true;"
    ></a-entity>

    <!-- Sky -->
    <a-sky src="#sunset"></a-sky>

    <!-- Player Camera -->
    <a-entity
      id="rig"
      movement-controls="speed: 1;"
      position="1.988 1.535 -5.499"
    >
      <a-entity
        camera
        player
        look-controls="pointerLockEnabled: true"
        position="0 3 0"
      ></a-entity>
    </a-entity>

    <!-- Tanks -->
    <!-- Elefant -->
    <!-- <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="125.163 -3.746 -90.186"
      rotation="6.443 22.151 3.383"
    ></a-entity> -->
    <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="128 -4 -83"
      rotation="4.070 22.046 -0.710"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="132.5 -4.5 -75"
      rotation="-2 25.5 4"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- Panzer IV -->
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="87.5 -1.5 -47"
      rotation="-8.5 -65 -0.5"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="97.5 -2.5 -50"
      rotation="-5.5 -99 0"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="107.5 -3 -49"
      rotation="-6 -92 -1"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="117.5 -3.5 -49"
      rotation="-2.5 -91.5 0.5"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="127.5 -4 -49"
      rotation="-2 -91 -4"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- Panther -->
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="84.5 -4 -70"
      rotation="-0.5 -50 -4"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="80 -3 -76"
      rotation="-1.5 -50 -3.5"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="76.5 -2.5 -83"
      rotation="4.5 -50 -2"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- Tiger -->
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="112 -5.5 -23"
      rotation="-1 -61.5 -4"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="132.5 -6.5 -11"
      rotation="0.5 -86 -2.5"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="112.5 -5 -36.5"
      rotation="-3.5 -54 -4"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- Maus -->
    <!-- <a-entity
      gltf-model="/assets/obj/tank/maus/scene.gltf"
      scale="7 7 7"
      position="74.274 -2.678 -40.378"
      rotation="0 -59.070 0"
    ></a-entity> -->
    <!-- jadgpanther -->
    <a-entity
      gltf-model="/assets/obj/tank/jadgpanther/scene.gltf"
      scale="2.5 2.5 2.5"
      position="127 -5 -60"
      rotation="0 -164.5 0"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/jadgpanther/scene.gltf"
      scale="2.5 2.5 2.5"
      position="138.5 -4.5 -63.5"
      rotation="0 -164.5 0"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- Aircrafts -->
    <!-- messerschmitt bf-109 -->
    <a-entity
      gltf-model="/assets/obj/aircraft/bf-109/scene.gltf"
      scale="1.5 1.5 1.5"
      position="182 51 -7"
      rotation="5.5 72 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/aircraft/bf-109/scene.gltf"
      scale="1.5 1.5 1.5"
      position="202 51 -16"
      rotation="5.5 72 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/aircraft/bf-109/scene.gltf"
      scale="1.5 1.5 1.5"
      position="190 51 15"
      rotation="5.5 72 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <!-- ju-87 -->
    <a-entity
      gltf-model="/assets/obj/aircraft/ju-87/scene.gltf"
      scale="1.8 1.8 1.8"
      position="141 58 -65"
      rotation="5.5 -96 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/aircraft/ju-87/scene.gltf"
      scale="1.8 1.8 1.8"
      position="111 58 -95"
      rotation="5.5 -96 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/aircraft/ju-87/scene.gltf"
      scale="1.8 1.8 1.8"
      position="132 58 -107"
      rotation="5.5 -96 29"
      @model-loaded="loadedEvent()"
    ></a-entity>
  </a-scene>
</template>

<script>
const NumberOfModels = 21

export default {
  name: "WarZone",
  data() {
    return {
      loaded_model_number: 0,
    }
  },
  computed: {
    allModelsLoaded() {
      return NumberOfModels == this.loaded_model_number
    }
  },
  methods: {
    loadedEvent(){
      console.log(this.loaded_model_number)
      this.loaded_model_number++
    }
  }
}
</script>

<style lang="css" scoped>
</style>

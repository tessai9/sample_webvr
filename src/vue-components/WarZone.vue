<template lang="html">
  <a-scene>
    <!-- Assets -->
    <a-assets>
      <img id="sunset" src="/assets/sunset.jpg" />
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

    <!-- Sky -->
    <a-sky src="#sunset"></a-sky>

    <!-- Tanks -->
    <!-- Elefant -->
    <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="125.163 -3.746 -90.186"
      rotation="6.443 22.151 3.383"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="127.954 -4.062 -82.973"
      rotation="4.070 22.046 -0.710"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/elefant/scene.gltf"
      scale="0.3 0.3 0.3"
      position="132.476 -4.533 -74.777"
      rotation="-1.993 25.482 4.277"
    ></a-entity>
    <!-- Panzer IV -->
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="87.561 -1.429 -47.208"
      rotation="-8.468 -65.608 -0.502"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="97.571 -2.514 -49.944"
      rotation="-5.457 -99.095 0.362"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="107.571 -3.229 -49.373"
      rotation="-6.015 -91.745 -0.856"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="117.571 -3.483 -49.373"
      rotation="-2.667 -91.642 0.553"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panzer_iv/scene.gltf"
      scale="3.5 3.5 3.5"
      position="127.571 -3.794 -49.373"
      rotation="-1.999 -91.434 -3.838"
    ></a-entity>
    <!-- Panther -->
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="84.645 -3.720 -70.123"
      rotation="-0.489 -50.114 -4.168"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="80.211 -3.345 -76.700"
      rotation="-1.597 -50.145 -3.600"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/panther/scene.gltf"
      scale="1.5 1.5 1.5"
      position="76.703 -2.511 -83.147"
      rotation="4.669 -49.961 -2.293"
    ></a-entity>
    <!-- Tiger -->
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="112.068 -5.448 -23.287"
      rotation="-0.995 -61.604 -3.898"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="132.574 -6.539 -11.029"
      rotation="0.696 -86.378 -2.569"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/tiger/scene.gltf"
      scale="1.3 1.3 1.3"
      position="112.496 -5.119 -36.585"
      rotation="-3.495 -53.832 -4.326"
    ></a-entity>
    <!-- Maus -->
    <a-entity
      gltf-model="/assets/obj/tank/maus/scene.gltf"
      scale="7 7 7"
      position="74.274 -2.678 -40.378"
      rotation="0 -59.070 0"
    ></a-entity>
    <!-- jadgpanther -->
    <a-entity
      gltf-model="/assets/obj/tank/jadgpanther/scene.gltf"
      scale="2.5 2.5 2.5"
      position="126.986 -5.140 -60.362"
      rotation="0 -164.655 0"
    ></a-entity>
    <a-entity
      gltf-model="/assets/obj/tank/jadgpanther/scene.gltf"
      scale="2.5 2.5 2.5"
      position="138.600 -4.440 -63.459"
      rotation="0 -164.655 0"
    ></a-entity>

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

<template lang="html">
<div class="">
  <router-link to="Labyrinth">Go to labyrinth</router-link>
</div>
<!-- VR空間内でのワールド移動を定義できるようにしたい・・・・ -->
<!-- <a-scene>
  <a-sky color="#20b2aa"></a-sky>
  <router-link id="to-labyrinth" tag="a-link" to="Labyrinth"></router-link>
</a-scene> -->
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$el)
  },
}
</script>

<style lang="css" scoped>
</style>

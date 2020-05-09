<template lang="html">
<!-- <div class="">
  <router-link to="Labyrinth">Go to labyrinth</router-link>
</div> -->
<!-- VR空間内でのワールド移動を定義できるようにしたい・・・・ -->
<a-scene>
  <a-sky color="#20b2aa"></a-sky>
  <a-link href="/labyrinth" title="Go to Labyrinth!" position="0 1.3 -3"></a-link>
</a-scene>
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

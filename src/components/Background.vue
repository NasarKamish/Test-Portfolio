<template>
  <div id="background">
    <BgContainer v-for="container in containers" :key="container" />
  </div>
</template>
<script>
import BgContainer from "./tags/BgContainer.vue";

export default {
  components: {
    BgContainer,
  },
  data() {
    return { containers: 3 };
  },
  updated() {
    document.querySelector(".circle").style.animationDelay = `${Math.floor(
      Math.random() * 21
    )}s`;
  },
};
</script>
<style scoped>
#background {
  width: 100vw;
  height: 100vh;
  background-color: #000000ee;
  border: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}
</style>

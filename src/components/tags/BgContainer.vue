<template>
  <div class="container">
    <bg-circle v-for="circle in circles" :key="circle" />
  </div>
</template>
<script>
import BgCircle from "./BgCircle.vue";

export default {
  components: {
    BgCircle,
  },
  data() {
    return {
      circles: 10,
    };
  },
  mounted() {
    console.log("HI");
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.style.animationDelay = `${Math.floor(Math.random() * 21)}s`;
    });
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  overflow-y: hidden;
  position: absolute;
}
</style>

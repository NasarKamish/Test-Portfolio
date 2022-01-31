<template>
  <div class="about-me">
    <p class="about-me-pre">I am a</p>
    <p class="about-me-head">{{ header }}</p>
    <p class="about-me-position"></p>
    <p class="about-me-content">{{ content }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      positionIndex: 0,
    };
  },
  props: ["header", "Positions", "context"],
  methods: {
    positionChange() {
      let position = document.querySelector(".about-me-position");
      console.log(position);
    },
  },
  mounted() {},
};
</script>
<style scoped></style>

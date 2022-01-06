<template>
  <div class="container">
    <i class="material-icons">{{ icon }}</i>
    <div class="text">{{ iconContext }}</div>
  </div>
</template>
<script>
export default {
  props: ["iconContext", "icon"],
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  background-color: var(--background1);
  transition: all 0.3s linear;
  font-size: 30px;
}

.container:hover {
  color: var(--detail);
  background-color: var(--background2);
}
</style>

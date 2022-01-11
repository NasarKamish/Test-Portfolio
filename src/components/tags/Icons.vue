<template>
  <div class="container">
    <i class="material-icons">{{ icon }}</i>
    <div class="text">{{ iconContext }}</div>
    <span class="tooltip" :class="direction">{{ tip }}</span>
  </div>
</template>
<script>
export default {
  props: ["iconContext", "icon", "tip", "direction"],
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
  background-color: var(--text-color);
}

.tooltip {
  opacity: 0;
  font-size: 24px;
  padding: 5px;
  background-color: #000000aa;
  color: var(--text-color);
  text-align: center;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  transition: all 0.3s linear;
}

.tooltip.up {
  top: 150%;
  left: 50%;
}

.tooltip.down {
  bottom: 150%;
  left: 50%;
}

.tooltip.left {
  top: 0;
  right: 110%;
}

.tooltip.right {
  top: 0;
  left: 110%;
}

.container:hover .tooltip {
  opacity: 1;
}
</style>

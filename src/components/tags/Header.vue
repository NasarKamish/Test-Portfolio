<template>
  <h2 class="page-header">{{ context }}</h2>
</template>
<script>
export default {
  props: ["context"],
};
</script>
<style scoped>
.page-header {
  color: var(--detail);
  font-size: 35px;
  transition: all 0.3s linear;
  padding: 1%;
}
</style>

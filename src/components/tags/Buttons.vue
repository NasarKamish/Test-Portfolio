<template>
  <button class="btn">
    <span class="sp-1">{{ btnContext }}</span>
    <span class="sp-2">{{ btnContext }}</span>
  </button>
</template>
<script>
export default {
  props: ["btnContext"],
};
</script>
<style scoped>
.btn {
  font-size: 30px;
  background: none;
  border: none;
  padding: 5px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
}

.btn:hover {
  color: var(--text-color);
}

.btn > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 5px;
  background-color: var(--detail);
  transition: all 0.3s linear;
}

.btn:hover > .sp-1 {
  margin-top: 10px;
  padding-bottom: 10px;

  margin-right: 10px;
  padding-left: 10px;
  background-color: var(--detail-t);
}

.btn:hover > .sp-2 {
  margin-bottom: 10px;
  padding-top: 10px;

  margin-left: 10px;
  padding-right: 10px;
  background-color: var(--detail-t);
}
</style>

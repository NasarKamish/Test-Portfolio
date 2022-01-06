<template>
  <ul class="nav-links">
    <router-link
      class="nav-link"
      v-for="page in this.$store.state.pages"
      :key="page.id"
      :to="page.link"
      @click="showNav"
    >
      <span>{{ page.name }}</span>
      {{ page.name }}
    </router-link>
  </ul>
</template>
<script>
import App from "@/App.vue";
export default {
  methods: {
    showNav() {
      App.methods.showNav();
    },
  },
};
</script>
<style scoped>
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 0%;
  padding: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: all 0.7s linear;
}

.nav-link {
  font-size: 30px;
  padding: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link:hover span {
  width: 20ex;
  padding: 0.5%;
}

#nav a.router-link-exact-active > span {
  color: var(--text-color);
  background-color: var(--detail);
  transition: all 0.3s linear;
}

.nav-link > span {
  padding: 0%;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 0px;
  height: auto;
  color: var(--detail);
  overflow: hidden;
  background-color: var(--text-color);
  border-radius: 20px;
  transition: all 0.3s linear;
}
</style>

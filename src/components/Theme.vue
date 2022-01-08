<!-- <template>
   <div class="theme-colors">
    <div class="color">1</div>
    <div class="color">2</div>
    <div class="color">3</div>
  </div> 
</template> -->
<!-- <script>
export default {};
</script> -->
<!-- <style scoped>
.theme {
  width: 0;
  height: 0;
  top: 0;
  right: 0;
  z-index: 3;
}

.theme-colors {
  opacity: 0;
  pointer-events: none;
}

.theme.active {
  width: 70vw;
  height: 70vh;
}

.theme.active > .theme-colors {
  opacity: 1;
  pointer-events: auto;
}
</style> -->

<template>
  <ul class="theme-colors">
    <p
      class="theme-color"
      v-for="color in this.$store.state.colors"
      :key="color.id"
      @click="toggleTheme(color.id)"
    >
      <span class="theme-span" :class="color.hex">{{ color.name }}</span>
      {{ color.name }}
    </p>
  </ul>
</template>
<script>
import App from "@/App.vue";
export default {
  methods: {
    showTheme() {
      App.methods.showTheme();
    },
    toggleTheme(id) {
      let colors = this.$store.state.colors;
      if (colors[id].active != true) {
        colors.forEach((color) => {
          if (color.active == true) {
            color.active = false;
          }
        });
        document.documentElement.style.setProperty(
          "--detail",
          `#${colors[id].hex}`
        );
        colors[id].active = true;
        this.themeUpdate();
      }
      this.showTheme();
    },
    themeUpdate() {
      let themeColors = document.querySelector(".theme-colors");
      let colors = this.$store.state.colors;
      for (let i = 0; i < themeColors.childElementCount; i++) {
        if (colors[i].active == true) {
          themeColors.children[
            i
          ].children[0].style.background = `#${colors[i].hex}`;
          themeColors.children[i].children[0].style.color = "var(--text-color)";
        } else {
          themeColors.children[i].children[0].style.color = `#${colors[i].hex}`;
          themeColors.children[i].children[0].style.background =
            "var(--text-color)";
        }
      }
    },
  },
  mounted() {
    this.themeUpdate();
  },
};
</script>
<style scoped>
.theme-colors {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 0%;
  padding: 0%;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: all 0.7s linear;
}

.theme-color {
  font-size: 30px;
  padding: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme-color:hover span {
  width: 20ex;
  padding: 0.5%;
}

/* #nav a.router-link-exact-active > span {
  color: var(--text-color);
  background-color: var(--detail);
  transition: all 0.3s linear;
} */

.theme-span {
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

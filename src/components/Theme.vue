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
export default {
  methods: {
    showTheme() {
      let activeTab = this.$store.state.activeTab;
      if (activeTab == "none") {
        activeTab = "theme";
      } else if (activeTab == "nav") {
        document.querySelector("#nav").classList.toggle("show");
        activeTab = "theme";
      } else if (activeTab == "theme") {
        activeTab = "none";
      }
      document.querySelector("#theme").classList.toggle("show");
      this.$store.state.activeTab = activeTab;
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
  overflow: hidden;
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

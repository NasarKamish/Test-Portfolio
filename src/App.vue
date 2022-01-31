<template>
  <Background />
  <Icons @click="showNav" class="icon nav" icon="menu" />
  <Icons @click="showTheme" class="icon theme" icon="settings" />
  <router-view class="rounter" />
  <div id="nav">
    <Nav />
  </div>
  <div id="theme">
    <Theme />
  </div>
</template>
<script>
import Buttons from "@/components/tags/Buttons.vue";
import Icons from "@/components/tags/Icons.vue";
import Nav from "@/components/Nav.vue";
import Background from "@/components/Background.vue";
import Theme from "@/components/Theme.vue";

export default {
  components: {
    Nav,
    Icons,
    Buttons,
    Background,
    Theme,
  },
  methods: {
    showNav() {
      let activeTab = this.$store.state.activeTab;
      if (activeTab == "none") {
        activeTab = "nav";
      } else if (activeTab == "theme") {
        document.querySelector("#theme").classList.toggle("show");
        activeTab = "nav";
      } else if (activeTab == "nav") {
        activeTab = "none";
      }
      document.querySelector("#nav").classList.toggle("show");
      this.$store.state.activeTab = activeTab;
    },
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
  },
};
</script>
<style>
:root {
  --background1: black;
  --background2: #3b0010;
  --neg-background2: #fcb9b2;
  --text-color: #ffffff;
  --detail: #ff0000;
  --detail-t: #ff000099;
  --neg-text-color: #b80217;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

/* Router */

.rounter {
  width: 90vw;
  height: 90vh;
  position: relative;
  z-index: 2;
  background: #000000aa;
  border-radius: 100px;
}

/* Nav Bar style */

#nav {
  border-radius: 50px;
  width: 0;
  height: 0;
  background-color: var(--background1);
  position: fixed;
  z-index: 3;
  top: 1vh;
  left: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s linear;
}

#nav.show {
  top: -25%;
  left: -25%;
  width: 150vw;
  height: 150vh;
  border-radius: 500px;
}

#nav.show > .nav-links {
  opacity: 1;
  pointer-events: auto;
  width: 150vw;
  height: 150vh;
}

#nav a {
  font-weight: bold;
  color: var(--text-color);
  transition: all 0.3s linear;
}

#nav a.router-link-exact-active {
  color: var(--detail);
  transition: all 0.3s linear;
}

/* Theme Style */

#theme {
  border-radius: 50px;
  width: 0;
  height: 0;
  background-color: var(--background1);
  position: fixed;
  z-index: 3;
  top: 1vh;
  right: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s linear;
}

#theme.show {
  top: -25%;
  right: -25%;
  width: 150vw;
  height: 150vh;
  border-radius: 500px;
}

#theme.show > .theme-colors {
  opacity: 1;
  pointer-events: auto;
  width: 150vw;
  height: 150vh;
}

#theme p {
  font-weight: bold;
  color: var(--text-color);
  transition: all 0.3s linear;
}

/* icon Style */

.icon {
  padding: 1%;
  position: fixed;
  top: 1vw;
  z-index: 10;
  border-radius: 50px;
}

.icon.nav {
  left: 1vw;
}

.icon.theme {
  right: 1vw;
}
</style>

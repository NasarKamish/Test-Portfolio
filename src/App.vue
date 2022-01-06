<template>
  <Background />
  <Icons @click="showNav" class="icon" icon="menu" />
  <router-view style="position: relative; z-index: 2" />
  <div id="nav">
    <Nav />
  </div>
</template>
<script>
import Buttons from "@/components/tags/Buttons.vue";
import Icons from "@/components/tags/Icons.vue";
import Nav from "@/components/Nav.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    Nav,
    Icons,
    Buttons,
    Background,
  },
  methods: {
    showNav() {
      document.querySelector("#nav").classList.toggle("show");
      // console.log(this.$store.state.navActive);
      // this.$store.state.navActive = !this.$store.state.navActive;
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

/* icon Style */

.icon {
  padding: 1%;
  position: fixed;
  top: 1vw;
  left: 1vw;
  z-index: 10;
  /* font-size: 20px; */
  border-radius: 50px;
}
</style>

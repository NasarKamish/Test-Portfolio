<template>
  <div id="home">
    <img
      class="home-img"
      alt="Nasar Kamish"
      src="../assets/Nasar_Kamish_full_bg.jpg"
    />
    <div class="home-overly">
      <h2 class="home-text">Welcome, I am</h2>
      <h1 class="home-name">Nasar Kamish</h1>
      <h2 class="home-text">Junior Full Stack Developer</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
#home {
  width: 90vw;
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-img {
  width: inherit;
}

.home-overly {
  position: absolute;
  width: inherit;
  height: inherit;
  background: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home-text {
  color: var(--text-color);
  font-size: 35px;
  padding: 10px;
}

.home-name {
  font-size: 70px;
  color: var(--detail);
}
</style>

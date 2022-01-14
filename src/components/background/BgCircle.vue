<template>
  <div class="circle"></div>
</template>
<script>
export default {
  data() {
    return {
      delay: Math.floor(Math.random() * 21),
    };
  },

  // computed() {
  //   console.log("HI");
  //   document.querySelector(".circle").style.animationDelay = `${Math.floor(
  //     Math.random() * 21
  //   )}s`;
  // },
};

// document.querySelector(".circle").style.animationDelay = `${Math.floor(
//   Math.random() * 21
// )}s`;
</script>
<style scoped>
.circle {
  position: relative;
  top: -10vw;
  background: var(--detail);
  box-shadow: 0 0 32px 0 var(--detail);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  opacity: 0.37;
  border-radius: 100%;
  width: 5vw;
  height: 5vw;
  animation: topDown 10s infinite linear;
  transition: all 0.3s linear;
}

@keyframes topDown {
  0% {
    top: -10vw;
  }
  100% {
    top: 100%;
  }
}
</style>

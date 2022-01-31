<template>
  <div class="about">
    <Header context="About Me" />
    <div class="about-content">
      <div class="about-me">
        <p class="about-me-head">I am a Junior Full Stack Developer</p>
        <p class="about-me-content">{{ aboutMeContent }}</p>
      </div>
      <div class="about-more">
        <div class="about-passions"></div>
        <div class="about-details"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/tags/Header.vue";

export default {
  data() {
    return {
      aboutMeContent: `I am a hard worker that is passionate about technology and coding. I am an eager person who strives to improve my skills and increase my knowledge. I am an introverted person who enjoys helping others where I can and communicating with others. I have gained passion for coding in grade 9, I saw some of its endless possibilities that coding had.`,
    };
  },
  components: {
    Header,
  },
};
</script>
<style scoped>
.about {
  overflow: hidden;
}
.about-content {
  width: 90%;
  margin-left: 5%;
  overflow-y: auto;
}

/* About ME */

.about-me-head {
  color: var(--detail);
  padding: 5px;
}

.about-me-content {
  color: var(--text-color);
}
</style>

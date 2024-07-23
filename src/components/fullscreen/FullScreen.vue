<template>
  <section id="fullscreen" :class="fadeOut">
    <div class="full-img" @click="handleClick">
      <img src="../../assets/img/nav/nav-icon.png" alt="nav-icon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/assets/scss/fullscreen/fullscreen.scss";

const emits = defineEmits(["home-Animation"]);

const styleSet = ref(false);

const fadeOut = computed(() => {
  return styleSet.value ? "fullscreenout" : "";
});

const handleClick = () => {
  styleSet.value = true;
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.requestFullscreen) {
    /* Firefox */
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.requestFullscreen) {
    /* Chrome, Safari and Opera */
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.requestFullscreen) {
    /* IE/Edge */
    document.documentElement.requestFullscreen();
  }
  emits("home-Animation");
};
</script>

<style scoped></style>

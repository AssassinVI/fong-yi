<template>
  <section id="fullscreen" ref="full">
    <div class="full-img" @click="handleClick">
      <img src="../../assets/img/home/home-icon.svg" alt="home-icon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/assets/scss/fullscreen/fullscreen.scss";

const emits = defineEmits(["home-Animation"]);

const full = ref();
// const styleSet = ref(false);

// const fadeOut = computed(() => {
//   return styleSet.value ? "fullscreenout" : "";
// });

const handleClick = () => {
  // styleSet.value = true;
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

defineExpose({
  full,
});
</script>

<style scoped></style>

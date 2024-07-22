<template>
  <router-link :to="{ name: props.nav }" class="home-link-item">
    <span class="home-link-span" ref="homeNavChild"
      ><p>{{ props.zh }}</p>
      <p>|</p>
      <p>{{ props.en }}</p></span
    >
  </router-link>
</template>

<script setup lang="ts">
import "@/assets/scss/home/homeLink.scss";

const props = defineProps(["nav", "zh", "en"]);

const emits = defineEmits(["child-to"]);

const homeNavChild = ref<HTMLElement | null>(null);

const navPush = (val: HTMLElement) => {
  emits("child-to", val);
};

onMounted(() => {
  if (homeNavChild.value) {
    navPush(homeNavChild.value);
  }
});
</script>

<style scoped></style>

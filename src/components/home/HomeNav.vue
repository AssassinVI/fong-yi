<template>
  <router-link :to="{ name: props.nav }" class="home-link-item">
    <span class="home-link-span">
      <p>{{ props.zh }}</p>
    </span>
  </router-link>
</template>

<script setup lang="ts">
import "@/assets/scss/home/homeLink.scss";

const props = defineProps(["nav", "zh", "en"]);
</script>

<style scoped></style>

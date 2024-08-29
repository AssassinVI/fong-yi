<template>
  <article
    :id="props.title"
    style="display: flex; flex-direction: column; height: 100vh"
  >
    <Nav />
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
import Nav from "../nav/Nav.vue";
const props = defineProps(["title"]);
</script>

<style scoped></style>

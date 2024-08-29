<template>
  <div id="space-page">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue";
</script>

<style scoped>
#space-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

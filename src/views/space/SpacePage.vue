<template>
  <div id="space-page">
    <Nav />
    <router-view></router-view>
    
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue";
import "@/assets/scss/space/list.scss";
</script>

<style scoped>
</style>

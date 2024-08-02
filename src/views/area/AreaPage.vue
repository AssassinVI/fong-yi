<template>
  <div id="area-Page">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue";
import "@/assets/scss/area/area.scss";
</script>

<style scoped></style>

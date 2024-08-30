<template>
  <router-link :to="{ name: props.pathName }" class="nav-child-link">{{props.zhName}}</router-link>
</template>

<script setup lang="ts">
const props = defineProps(["zhName", "pathName"]);
</script>

<style></style>

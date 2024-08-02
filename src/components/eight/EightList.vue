<template>
  <ul class="eight-ul">
    <!-- <div class="eight-line-item eight-line-dot"></div>
    <div class="eight-line-item eight-line-line-1"></div>
    <div class="eight-line-item eight-line-line-2"></div> -->
    <div class="eight-ul-line-img">
      <img :src="props.lineImg" alt="lineImg" />
    </div>
    <div class="eight-line-item eight-line-dot"></div>
    <h2>{{ props.mainTitle }}</h2>
    <li v-for="item in props.content" :key="item.enName">
      <span>{{ item.zhName }}</span
      ><span>{{ item.enName }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightList.scss";
const props = defineProps(["id", "mainTitle", "lineImg", "content"]);
</script>

<style scoped></style>

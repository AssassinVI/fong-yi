<template>
  <ul class="eight-ul">
    <div class="eight-ul-line-img">
      <img :src="props.lineImg" alt="lineImg" />
    </div>
    <div class="eight-line-item eight-line-dot"></div>
    <h2>{{ props.mainTitle }}</h2>
    <li
      v-for="item in props.content"
      :key="item.enName"
      @mouseover="() => handleChildOver(item.tag)"
      @mouseout="handleChildOut"
      @click="() => handelClick(item.tag)"
    >
      <span :class="[item.tag === props.hoverTag ? 'eight-list-active' : '']">{{
        item.zhName
      }}</span
      ><span>{{ item.enName }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightList.scss";

const props = defineProps([
  "bigTag",
  "hoverTag",
  "mainTitle",
  "lineImg",
  "content",
]);

const emits = defineEmits(["handle-over", "handle-out", "toggle-box"]);

//滑鼠進入
const handleChildOver = (val: number) => {
  emits("handle-over", val);
};
//滑鼠離開
const handleChildOut = () => {
  emits("handle-out");
};

const handelClick = (val: number) => {
  emits("toggle-box", val);
};
</script>

<style scoped></style>

<template>
  <div className="glow">
    <div
      v-for="item in dot"
      :key="nanoid()"
      className="glow-dot"
      :style="[item]"
    ></div>
    <img src="../../assets/img/other/001-glowing-area.webp" />
  </div>
</template>

<script setup lang="ts">
interface DOT {
  left: string;
  scale: number;
  animationDuration: string;
  animationDelay: string;
}

import { nanoid } from "nanoid";

const length = ref(20);

const dot = ref<DOT[]>([]);

onMounted(() => {
  for (let i = 0; i < length.value; i++) {
    dot.value.push({
      left: Math.floor(Math.random() * 100) + "%",
      scale: Math.random() * 1.5 + 0.3,
      animationDuration: Math.random() * 7 + 3 + "s",
      animationDelay: Math.random() * 6 + "s",
    });
  }
});
</script>

<style scoped>
.glow {
  position: absolute;
  transform-origin: center bottom;
  overflow: hidden;
  width: 3vw;
  height: 4vw;
  top: 11vw;
  left: 6.25vw;
  opacity: 0.3;
}
.dot {
  position: absolute;
  width: 0.2vw;
  height: 0.2vw;
  border-radius: 50%;
  background-color: color;
  box-shadow: 0 0 10px 2.5px;
  animation-name: glow;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  bottom: -20px;
}
.glow-dot {
  position: absolute;
  width: 0.2vw;
  height: 0.2vw;
  border-radius: 50%;
  background-color: #ffe80a;
  box-shadow: rgb(255, 255, 255) 0px 0px 10px 2.5px;
  animation-name: glow;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  bottom: -20px;
  z-index: 10;
}
@keyframes glow {
  0% {
    bottom: 0%;
  }
  100% {
    bottom: 100%;
  }
}
img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>

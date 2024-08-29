<template>
  <div class="windowClose" @click="handleClose">
    <div class="window-line">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClose = () => {
  //W3C
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};
</script>

<style lang="scss" scoped>
.windowClose {
  position: absolute;
  left: 2%;
  bottom: 2%;
  cursor: pointer;
  pointer-events: auto;
  font-size: 20px;
  letter-spacing: 2px;
  z-index: 200;
  border-radius: 50%;
  background-color: rgba(161, 161, 161, 0.671);
  .window-line {
    position: relative;
    width: 2vw;
    height: 2vw;
    .line {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.75vw;
      height: 2px;
      background-color: white;
      transform-origin: 50% 50%;
    }
    .line-1 {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    .line-2 {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }
}
</style>

<template>
  <div class="windowClose" @click="handleClose">EXIT</div>
</template>

<script setup lang="ts">
const handleClose = () => {
  window.close();
};
</script>

<style scoped>
.windowClose {
  position: absolute;
  left: 2%;
  bottom: 2%;
  cursor: pointer;
  pointer-events: auto;
  font-size: 20px;
  letter-spacing: 2px;
  z-index: 200;
}
</style>

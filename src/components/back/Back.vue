<template>
  <div
    class="back"
    style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
    @click.stop="handleClick"
  ></div>
</template>

<script setup lang="ts">
const emits = defineEmits(["toggle"]);

const handleClick = () => {
  emits("toggle");
};
</script>

<style scoped></style>

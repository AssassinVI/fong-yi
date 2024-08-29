<template>
  <div
    class="eight-title"
    :class="[props.maskClass === props.class ? 'eight-title-active' : '']"
    @click="transClass"
  >
    <p>{{ props.name }}</p>
    <p>|</p>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightTitle.scss";
const props = defineProps(["name", "tag", "class", "maskClass"]);
const emits = defineEmits(["show-mask"]);

const transClass = () => {
  emits("show-mask", props.class);
};
</script>

<style scoped></style>

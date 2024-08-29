<template>
  <div
    class="eight-mask"
    :class="[
      props.class,
      props.maskClass === props.class ? 'eight-mask-background-active' : '',
    ]"
  >
    <!-- <div class="eight-mask-close" @click="maskClose">
      <img src="../../assets/img/eight/mask-close.svg" alt="mask-close" />
    </div> -->
    <img class="eight-mask-mask" :src="props.maskImg" />
    <div class="eight-mask-background"></div>
    <div class="eight-mask-text">
      <img :src="props.textImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightMask.scss";

const props = defineProps(["textImg", "class", "maskClass", "maskImg"]);

const emits = defineEmits(["show-mask"]);
</script>

<style scoped></style>

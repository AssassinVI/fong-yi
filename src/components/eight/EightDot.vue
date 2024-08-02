<template>
  <div
    class="eightTag"
    :class="[props.className, highlight]"
    @mouseover="() => handleChildOver(props.tag)"
    @mouseout="handleChildOut"
    @click="() => handelClick(props.tag)"
  >
    {{ props.tag }}
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightDot.scss";

const props = defineProps(["tag", "className", "hoverTag"]);

const emits = defineEmits(["handle-over", "handle-out", "toggle-box"]);

const tagCheck = ref(false);

const highlight = computed(() => {
  return tagCheck.value ? "eight-dot-active " : "";
});

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

watch(
  () => props.hoverTag,
  () => {
    if (props.hoverTag === props.tag) {
      tagCheck.value = true;
    } else {
      tagCheck.value = false;
    }
  }
);
</script>

<style scoped></style>

<template>
  <div
    class="eightTag"
    :class="[props.className, highlight]"
    @mouseover="() => handleChildOver(props.tag)"
    @mouseout="handleChildOut"
    @click="() => handelClick(props.tag)"
  >
    <div class="eightTag-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.26 44.65">
        <g>
          <path
            d="M30.26,15.13C30.26,6.77,23.49,0,15.13,0S0,6.77,0,15.13c0,7.37,5.27,13.5,12.24,14.85l3.15,14.67,2.78-14.7c6.89-1.41,12.08-7.51,12.08-14.82Z"
          />
        </g>
      </svg>
      <div class="eightTag-tagImg">
        <img :src="props.tagImg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/eight/eightDot.scss";

const props = defineProps(["tag", "tagImg", "className", "hoverTag"]);

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

<template>
  <div class="floor-point" :class="props.className">
    <div class="floor-green-point" v-if="props.name">
      <p>{{ props.name }}</p>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
    <div
      class="floor-red-point"
      :class="[
        props.tag === props.listTag ? 'floor-red-start' : 'floor-red-stop',
      ]"
      @mouseenter="hoverFn"
      @mouseleave="outFn"
      v-else
    >
      <div class="floor-red-point-img">
        <img src="../../assets/img/floor-plan/point.svg" />
      </div>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/floor-plan/floor-points.scss";

const props = defineProps(["className", "name", "tag", "listTag"]);

const emits = defineEmits(["hover-list-handle", "out-list-handle"]);

const hoverFn = () => {
  emits("hover-list-handle", props.tag);
};

const outFn = () => {
  emits("out-list-handle");
};
</script>

<style scoped></style>

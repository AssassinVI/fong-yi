<template>
  <div class="swiper-container">
    <div class="swiper-main">
      <swiper
        :speed="1000"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="[Navigation, Pagination]"
      >
        <swiper-slide
          ><img
            src="../../assets/img/example/test-swiper-1.png"
            alt="test-swiper-1"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../assets/img/example/test-swiper-1.png"
            alt="test-swiper-1"
        /></swiper-slide>
      </swiper>
      <div class="swiper-para">
        <p v-for="item in textSplit" :key="nanoid()">{{ item }}</p>
      </div>
    </div>
    <div
      class="back"
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      @click.stop="handleClick"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "@/assets/scss/swiper/fancySwiper.scss";

const props = defineProps(["boxContent"]);

const emits = defineEmits(["toggle"]);

const handleClick = () => {
  emits("toggle");
};

const textSplit = computed(() => {
  return props.boxContent.bigTitle.split("");
});
</script>

<style scoped></style>

<template>
  <div class="water-proof-swiper-container">
    <div class="swiper-main">
      <swiper
        :speed="500"
        :effect="'fade'"
        :slides-per-view="1"
        :loop="true"
        :navigation="{
          nextEl: '.water-proof-swiper-next',
          prevEl: '.water-proof-swiper-prev',
        }"
        :pagination="{ clickable: true }"
        :modules="[Navigation, EffectFade, Pagination]"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in props.boxContent.content">
          <img :src="item.image" />
        </swiper-slide>
      </swiper>
      <div class="swiper-para">
        <h2 class="swiper-para-h2">
          {{ props.boxContent.title }}
        </h2>
        <div></div>
        <div
          class="swiper-para-p"
          v-for="item in props.boxContent.content"
          :key="item.id"
          v-show="item.txt.length !== 0"
        >
          <span class="swiper-para-dot"></span><span>{{ item.txt }}</span>
          <div
            class="swiper-para-p-bg"
            :class="[
              activeIndex === item.number ? 'swiper-para-p-bg-active' : '',
            ]"
          ></div>
        </div>
      </div>
      <button class="swiper-button-next water-proof-swiper-next"></button>
      <button class="swiper-button-prev water-proof-swiper-prev"></button>
    </div>
    <Back />
    <!-- <div
      class="back"
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      @click.stop="handleClick"
    ></div> -->
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { nanoid } from "nanoid";
import Back from "../back/Back.vue";
import "swiper/css/bundle";
import "@/assets/scss/water-proof/water-proof-fancybox.scss";

const props = defineProps(["boxContent"]);

const emits = defineEmits(["toggle"]);

const activeIndex = ref(0);

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped></style>

<template>
  <div class="swiper-container" :class="[zIndexComputed]">
    <div class="swiper-main">
      <swiper
        :speed="1000"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="[Navigation, Pagination, Autoplay]"
      >
        <swiper-slide v-for="item in props.boxContent.carouselImg"
          ><img :src="item.img" />
          <p
            style="
              position: absolute;
              right: 1.5vw;
              bottom: 1vw;
              font-size: 0.8vw;
              color: white;
            "
          >
            {{ item.txt }}
          </p></swiper-slide
        >
      </swiper>
      <div class="swiper-para">
        <h1>{{ props.boxContent.bigTitle }}</h1>
        <p class="swiper-para-p-en">ENVIRONMENTAL AREA MAP</p>
        <h2>
          <span>{{ props.boxContent.zhTitle }}</span
          ><span
            class="area-eight-play"
            v-if="props.boxContent?.play"
            @click="handlePlay"
            ><img
              src="../../assets/img/area-eight/eight-video-play.png"
              alt="eight-video-play"
          /></span>
        </h2>
        <p class="swiper-para-p-zh swiper-para-p-zh-1">
          {{ props.boxContent.content }}
        </p>
        <p class="swiper-para-p-zh">峻工期程:{{ props.boxContent.endTime }}</p>
      </div>
    </div>
    <div class="area-eight-bottom">
      <img
        src="../../assets/img/area-eight/area-eight-bottom.png"
        alt="area-eight-bottom"
      />
    </div>
    <FadeIn>
      <div v-if="playVideo" class="video">
        <video controls autoplay :src="props.boxContent?.video"></video>
        <img
          @click="handleClose"
          src="../../assets/img/other/close.svg"
          alt="close"
        />
      </div>
    </FadeIn>
    <div
      class="back"
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      @click.stop="handleClick"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FadeIn from "../transition/FadeIn.vue";
import "swiper/css/bundle";
import "@/assets/scss/swiper/areaFancySwiper.scss";

const props = defineProps(["boxContent"]);

const emits = defineEmits(["toggle"]);

const toggle = inject<(val?: string) => void | undefined>("toggle");

const playVideo = ref(false);

const handleClick = () => {
  if (toggle) {
    toggle();
  }
};

//影片播放時，調整其他tag的z-index
const zIndexComputed = computed(() => {
  return playVideo.value ? "fancy-top-video" : "";
});

const handlePlay = () => {
  playVideo.value = true;
};

const handleClose = () => {
  playVideo.value = false;
};
</script>

<style scoped></style>

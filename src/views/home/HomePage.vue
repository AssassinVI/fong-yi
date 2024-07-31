<template>
  <article id="home">
    <video
      src="../../assets/video/video.mp4"
      autoplay
      loop
      muted
      playsinline
    ></video>
    <FullScreen
      :animationStart="animationStart"
      @home-Animation="homeAnimation"
    />
    <div class="home-in" :class="{ show }" ref="homebgRef">
      <div class="home-bg">
        <img src="../../assets/img/home/home-bg-03.png" alt="home-bg" />
      </div>
      <div class="home-fluid">
        <img src="../../assets/img/home/home-fluid-03.png" alt="home-fluid" />
      </div>
      <div class="home-house" ref="houseRef">
        <img
          src="../../assets/img/home/home-house-02.png"
          alt="home-house"
          ref="houseInRef"
        />
      </div>
      <div class="home-green">
        <div class="home-green-in">
          <div class="light"></div>
        </div>
      </div>
      <div class="home-title">
        <div class="home-title-text home-title-1" ref="titleIcon">
          <img src="../../assets/img/home/icon.svg" alt="icon" />
        </div>
        <div class="home-title-text home-title-2" ref="titleZh">
          <div class="light"></div>
        </div>
        <div class="home-title-text home-title-3" ref="titleEn">
          <img src="../../assets/img/home/home-2.png" alt="home-2" />
        </div>
      </div>
      <div class="home-menu">
        <div class="home-menu-dot" @click="toggleBar">
          <img src="../../assets/img/nav/nav-dot.svg" alt="nav-dot" />
        </div>
        <RightToLeft>
          <div class="home-link" v-show="barShow">
            <HomeNav
              v-for="item in homeLink"
              :key="nanoid()"
              :nav="item.name"
              :zh="item.zh"
              :en="item.en"
            />
          </div>
        </RightToLeft>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { nanoid } from "nanoid";
import { homeLink } from "./homeLink";
import FullScreen from "@/components/fullscreen/FullScreen.vue";
import HomeNav from "@/components/home/HomeNav.vue";
import RightToLeft from "@/components/transition/RightToLeft.vue";
import "@/assets/scss/home/home.scss";

//背景
const homebgRef = ref(null);

//城市
const houseRef = ref(null);
const houseInRef = ref(null);

//標題
const titleZh = ref(null);
const titleEn = ref(null);
const titleIcon = ref(null);

//navBar切換
const barShow = ref(false);

const toggleBar = () => {
  barShow.value = !barShow.value;
};

const animationStart = ref(false);

const show = computed(() => {
  return animationStart.value ? "show" : "";
});

const homeAnimation = () => {
  const homeTl = gsap.timeline();

  homeTl
    .to(homebgRef.value, {
      maskPosition: "-27vw 40%",
      duration: 5,
    })
    .from(houseRef.value, { maskPosition: "50% 65%", duration: 3 }, "<+1")
    .fromTo(
      houseRef.value,
      { opacity: 0, filter: "blur(15px) brightness(3)" },
      { opacity: 1, filter: "blur(0px) brightness(1)", duration: 3 },
      "<+1"
    )
    .from(
      houseInRef.value,
      {
        scale: 1.5,
        duration: 1.5,
      },
      "<"
    )
    .from(
      titleZh.value,
      {
        x: "-5%",
        opacity: 0,
        duration: 1.5,
      },
      "<+1"
    )
    .from(
      titleEn.value,
      {
        x: "5%",
        opacity: 0,
        duration: 1.5,
      },
      "<+0.25"
    )
    .from(
      titleIcon.value,
      {
        opacity: 0,
        duration: 1.5,
      },
      "<+0.5"
    );
};
</script>

<style scoped></style>

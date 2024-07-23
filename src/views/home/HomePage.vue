<template>
  <article id="home">
    <FullScreen
      :animationStart="animationStart"
      @home-Animation="homeAnimation"
    />
    <div class="home-in" :class="{ show }">
      <div class="home-half-circle">
        <div class="home-half-circle-line" ref="circleLine">
          <img
            src="../../assets/img/home/home-circle-line.png"
            alt="home-circle-line"
          />
        </div>
        <div class="home-half-circle-full" ref="circleFull">
          <img
            src="../../assets/img/home/home-circle-full.png"
            alt="home-circle-full"
          />
        </div>
      </div>
      <div class="home-icon">
        <img src="../../assets/img/home/icon.svg" alt="icon" />
      </div>
      <div class="home-title">
        <div class="home-title-text home-forest" ref="forest">
          <div class="light"></div>
        </div>
        <div class="home-title-text home-text-1" ref="text1">
          <img src="../../assets/img/home/home-text-1.webp" alt="home-text-1" />
        </div>
        <div class="home-title-text home-text-2" ref="text2">
          <img src="../../assets/img/home/home-text-2.webp" alt="home-text-2" />
        </div>
        <div class="home-title-text home-house" ref="house">
          <div class="light"></div>
        </div>
        <div class="home-title-text home-text-3" ref="text3">
          <img src="../../assets/img/home/home-text-3.webp" alt="home-text-3" />
        </div>
      </div>
      <div class="home-link">
        <HomeNav
          v-for="item in homeLink"
          :key="nanoid()"
          :nav="item.name"
          :zh="item.zh"
          :en="item.en"
          @child-to="childTo"
        />
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
import "@/assets/scss/home/home.scss";

//背景圓圈
const circleLine = ref(null);
const circleFull = ref(null);

//英文字
const forest = ref(null);
const house = ref(null);
const text3 = ref(null);

//中文字
const text1 = ref(null);
const text2 = ref(null);

const homeNavRefs = ref<HTMLElement[]>([]);

const childTo = (val: HTMLElement) => {
  homeNavRefs.value.push(val);
};

const animationStart = ref(false);
const show = computed(() => {
  return animationStart.value ? "show" : "";
});
const homeAnimation = () => {
  const homeTl = gsap.timeline();
  //背景圓圈陣列
  const circleArr = gsap.utils.toArray([circleLine.value, circleFull.value]);
  //中文字陣列
  const textArr = gsap.utils.toArray([text1.value, text2.value]);

  homeTl
    .from(forest.value, {
      filter: "blur(10px)",
      x: "10%",
      opacity: 0,
      duration: 1.5,
    })
    .from(
      house.value,
      {
        filter: "blur(10px)",
        x: "-10%",
        opacity: 0,
        duration: 1.5,
      },
      "<+0.5"
    )
    .from(
      textArr,
      {
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.5,
      },
      "<+0.5"
    )
    .from(
      text3.value,
      {
        filter: "blur(10px)",
        x: "10%",
        opacity: 0,
        duration: 1.5,
      },
      "<+0.5"
    )
    .from(
      homeNavRefs.value,
      {
        filter: "blur(10px)",
        x: "50%",
        stagger: 0.25,
        opacity: 0,
        duration: 1.5,
      },
      "<+0.5"
    )
    .to(
      circleArr,
      {
        maskPosition: "-13vw -40vw",
        stagger: 0.25,
        duration: 3,
      },
      "<+0.25"
    );
};
</script>

<style scoped></style>

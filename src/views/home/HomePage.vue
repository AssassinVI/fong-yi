<template>
  <article id="home">
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
      <div class="home-title-text home-forest">
        <img
          src="../../assets/img/home/home-forest.webp"
          alt="home-forest"
          ref="forest"
        />
      </div>
      <div class="home-title-text home-text-1" ref="text1">
        <img src="../../assets/img/home/home-text-1.webp" alt="home-text-1" />
      </div>
      <div class="home-title-text home-text-2" ref="text2">
        <img src="../../assets/img/home/home-text-2.webp" alt="home-text-2" />
      </div>
      <div class="home-title-text home-house">
        <img
          src="../../assets/img/home/home-house.webp"
          alt="home-house"
          ref="house"
        />
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
  </article>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { nanoid } from "nanoid";
import HomeNav from "@/components/home/HomeNav.vue";
import { homeLink } from "./homeLink";
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

const homeNav = ref<HTMLElement[]>([]);

const childTo = (val: HTMLElement) => {
  homeNav.value.push(val);
};

onMounted(() => {
  const homeTl = gsap.timeline();
  //背景圓圈陣列
  const circleArr = gsap.utils.toArray([circleLine.value, circleFull.value]);

  //中文字陣列
  const textArr = gsap.utils.toArray([text1.value, text2.value]);

  homeTl
    .to(circleArr, {
      maskPosition: "-13vw -40vw",
      stagger: 0.25,
      duration: 3,
    })
    .from(
      forest.value,
      {
        filter: "blur(10px)",
        x: "10%",
        opacity: 0,
        duration: 1.5,
      },
      "<+1.5"
    )
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
      homeNav.value,
      {
        filter: "blur(10px)",
        x: "50%",
        stagger: 0.25,
        opacity: 0,
        duration: 1.5,
      },
      "<+0.5"
    );
});
</script>

<style scoped></style>

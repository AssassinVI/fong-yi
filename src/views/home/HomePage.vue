<template>
  <article id="home">
    <div class="home-half-circle">
      <div class="home-half-circle-line">
        <img
          src="../../assets/img/home/home-circle-line.png"
          alt="home-circle-line"
        />
      </div>
      <div class="home-half-circle-full">
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
        <img src="../../assets/img/home/home-forest.webp" alt="home-forest" />
      </div>
      <div class="home-title-text home-text-1">
        <img src="../../assets/img/home/home-text-1.webp" alt="home-text-1" />
      </div>
      <div class="home-title-text home-text-2">
        <img src="../../assets/img/home/home-text-2.webp" alt="home-text-2" />
      </div>
      <div class="home-title-text home-house">
        <img src="../../assets/img/home/home-house.webp" alt="home-house" />
      </div>
      <div class="home-title-text home-text-3">
        <img src="../../assets/img/home/home-text-3.webp" alt="home-text-3" />
      </div>
    </div>
    <div class="home-link">
      <HomeNav
        v-for="item in link"
        :key="nanoid()"
        :nav="item.name"
        :zh="item.zh"
        :en="item.en"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import HomeNav from "@/components/home/HomeNav.vue";
import "@/assets/scss/home/home.scss";

const link = [
  {
    name: "area",
    zh: "首選地段",
    en: "THE AREA",
  },
  {
    name: "area",
    zh: "首景地標",
    en: "THE LANDMARK",
  },
  {
    name: "area",
    zh: "首席團隊",
    en: "THE TEAM",
  },
  {
    name: "area",
    zh: "首席建築",
    en: "THE BUILDING",
  },
  {
    name: "area",
    zh: "首席配備",
    en: "THE FACILITIES",
  },
];
</script>

<style scoped></style>

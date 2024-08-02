<template>
  <div id="area-eight">
    <div class="area-eight-map">
      <ScaleDrag :maxRatio="2" :init="{ x: 100, y: 100 }">
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <img
                class="imgBox"
                src="../../../assets/img/eight/eight-map.png"
                alt="eight-map"
              />
              <svg
                id="_圖層_2"
                data-name="圖層 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.62 870.38"
              >
                <rect
                  x="0"
                  y="-10"
                  width="188.9"
                  height="134.26"
                  fill="#231815"
                >
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    path="M.44,.23S169.16,326.03,182.5,357.79c13.34,31.75,26.04,83.05,26.04,113.92s14.4,398.18,14.4,398.18h238.68"
                  />
                  <animate
                    attributeName="opacity"
                    repeatDur="indefinite"
                    values="1;1;0"
                    keyTimes="0;0.9;1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
            <EightDot
              v-for="item in test"
              :key="item.key"
              :tag="item.tag"
              :className="item.class"
              :hoverTag="hoverTag"
              @handle-over="handleOver"
              @handle-out="handleOut"
              @toggle-box="toggleBox"
            />
          </div>
        </div>
      </ScaleDrag>
    </div>
    <div class="area-eight-left">
      <EightList
        v-for="item in EightListContet"
        :key="item.tag"
        :id="item.tag"
        :mainTitle="item.mainTitle"
        :lineImg="item.lineImg"
        :content="item.content"
      />
      <!-- <ul>
        <li
          v-for="item in test"
          :key="item.key"
          :class="hoverTag === item.tag ? 'li-active' : ''"
          @mouseover="() => handleOver(item.tag)"
          @mouseout="handleOut"
          @click="() => toggleBox(item.tag)"
        >
          {{ item.name }}
        </li>
      </ul> -->
    </div>
    <Teleport to="body">
      <FadeIn
        ><AreaEightFancyBox
          v-if="showbox"
          :boxContent="boxContent"
          @toggle="toggleBox"
      /></FadeIn>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import ScaleDrag from "@/components/scaledrag/ScaleDrag.vue";
import EightDot from "@/components/eight/EightDot.vue";
import FadeIn from "@/components/transition/FadeIn.vue";
import AreaEightFancyBox from "@/components/fancybox/AreaEightFancyBox.vue";
import EightList from "@/components/eight/EightList.vue";
import { EightContent, EightListContet } from "./EightContent";
import "@/assets/scss/eight/areaEight.scss";

const test = [
  {
    tag: 1,
    name: "水湳轉運中心",
    class: "eight-dot-1",
    key: nanoid(),
  },
  {
    tag: 2,
    name: "台中國際會展中心",
    class: "eight-dot-2",
    key: nanoid(),
  },
  {
    tag: 3,
    name: "台中綠美圖",
    class: "eight-dot-3",
    key: nanoid(),
  },
];

const hoverTag = ref(0);

const showbox = ref(false);

const boxContent = ref({});

//滑鼠移入
const handleOver = (val: number) => {
  hoverTag.value = val;
};
//滑鼠移出
const handleOut = () => {
  hoverTag.value = 0;
};

const toggleBox = (val?: number) => {
  if (val) {
    const filterContent = EightContent.filter((item) => item.id === val);
    boxContent.value = filterContent[0];
  }
  showbox.value = !showbox.value;
};
</script>

<style scoped></style>

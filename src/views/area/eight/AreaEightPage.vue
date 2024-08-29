<template>
  <div id="area-eight">
    <div class="area-eight-map">
      <FadeIn> <EightLeft v-show="showText" /></FadeIn>
      <FadeInItem>
        <div
          class="eight-mask-close"
          v-show="maskClass.length !== 0"
          @click="
            () => {
              showMask('');
            }
          "
        >
          <img
            src="../../../assets/img/eight/mask-close.svg"
            alt="mask-close"
          /></div
      ></FadeInItem>
      <ScaleDrag
        :maxRatio="2"
        :init="{ x: 100, y: 100 }"
        :showText="showText"
        @show-text="showLeftText"
        @hide-text="hideLeftText"
      >
        <div class="container">
          <FadeInItem>
            <EightMask
              v-for="item in EightTitleContent"
              :key="item.className"
              :textImg="item.textImg"
              :class="item.className"
              :maskClass="maskClass"
              :maskImg="item.maskImg"
              @show-mask="showMask"
              v-show="item.className === maskClass"
          /></FadeInItem>
          <div class="anchor-area">
            <div class="anchor-area-map">
              <!-- <video
                class="video-test"
                src="../../../assets/video/img2024041709370816.mp4"
                autoplay
                loop
                muted
              ></video> -->
              <!-- <img
                class="lighter"
                src="../../../assets/img/other/light.png"
                alt="light"
              /> -->
              <img
                class="imgBox"
                src="../../../assets/img/eight/eight-map.png"
                alt="eight-map"
              />
              <Glow />
              <EightTrain />
            </div>

            <EightDot
              v-for="item in EightDotContent"
              :key="item.key"
              :tag="item.tag"
              :tagImg="item.tagImg"
              :className="item.class"
              :hoverTag="hoverTag"
              @handle-over="handleOver"
              @handle-out="handleOut"
              @toggle-box="toggleBox"
            />
          </div>
        </div>
      </ScaleDrag>
      <FadeIn>
        <div class="area-eight-map-bottom" v-show="showText">
          <img
            src="../../../assets/img/eight/eight-bottom-left.png"
            alt="eight-bottom-left"
          /></div
      ></FadeIn>
    </div>
    <div class="area-eight-left">
      <div class="area-eight-left-top">
        <EightTitle
          v-for="item in EightTitleContent"
          :key="item.tag"
          :tag="item.tag"
          :name="item.zhName"
          :class="item.className"
          :maskClass="maskClass"
          :maskImg="item.maskImg"
          @show-mask="showMask"
        />
      </div>
      <div class="area-eight-left-bottom">
        <EightList
          v-for="item in EightListContet"
          :key="item.key"
          :tag="item.bigTag"
          :mainTitle="item.mainTitle"
          :lineImg="item.lineImg"
          :content="item.content"
          :hoverTag="hoverTag"
          @handle-over="handleOver"
          @handle-out="handleOut"
          @toggle-box="toggleBox"
        />
      </div>
    </div>

    <FadeIn
      ><AreaEightFancyBox
        v-if="showbox"
        :boxContent="boxContent"
        @toggle="toggleBox"
    /></FadeIn>
  </div>
</template>

<script setup lang="ts">
import ScaleDrag from "@/components/scaledrag/ScaleDrag.vue";
import EightDot from "@/components/eight/EightDot.vue";
import FadeIn from "@/components/transition/FadeIn.vue";
import FadeInItem from "@/components/transition/FadeInItem.vue";
import AreaEightFancyBox from "@/components/fancybox/AreaEightFancyBox.vue";
import EightList from "@/components/eight/EightList.vue";
import EightTitle from "@/components/eight/EightTitle.vue";
import EightLeft from "@/components/eight/EightLeft.vue";
import EightMask from "@/components/eight/EightMask.vue";
import EightTrain from "@/components/eight/EightTrain.vue";
import Glow from "@/components/glow/Glow.vue";
import {
  EightContent,
  EightListContet,
  EightTitleContent,
  EightDotContent,
} from "./EightContent";
import { useAnimationTimeStore } from "@/store/animationStore";
import "@/assets/scss/eight/areaEight.scss";

const route = useRoute();

const store = useAnimationTimeStore();

//網址
const position = ref();

//地圖座標與清單的連動
const hoverTag = ref(0);

//顯示fancybox
const showbox = ref(false);
//fancybox內容物
const boxContent = ref({});
//左邊裝飾
const showText = ref(true);
//mask顯示
const maskClass = ref("");

//滑鼠移入
const handleOver = (val: number) => {
  hoverTag.value = val;
};
//滑鼠移出
const handleOut = () => {
  hoverTag.value = 0;
};

//顯示左邊裝飾
const showLeftText = () => {
  showText.value = true;
};

//隱藏左邊裝飾
const hideLeftText = () => {
  showText.value = false;
};

const toggleBox = (val?: number) => {
  if (val) {
    const filterContent = EightContent.filter((item) => item.id === val);
    boxContent.value = filterContent[0];
  }
  showbox.value = !showbox.value;
};

//遮罩顯示
const showMask = (val: string) => {
  maskClass.value = val;
};

onMounted(() => {
  position.value = route.name;

  store.setHomeEnd(position.value);
});
provide("toggle", toggleBox);
</script>

<style scoped>
.third-page-bg {
  position: relative;
  width: 100%;
}
.third-page-bg .glowing {
  position: absolute;
  width: 2vw;
  height: 36vw;
  left: 35.52vw;
  top: 25vw;
  z-index: 5;
  overflow: hidden;
}
@media all and (max-width: 820px) {
  .third-page-bg .glowing {
    width: 4vw;
    height: 62vw;
    left: 74.4vw;
    top: 59vw;
  }
  .third-page-bg .glowing .phone {
    display: block !important;
  }
  .third-page-bg .glowing .computer {
    display: none !important;
  }
}
@media all and (max-width: 500px) {
  .third-page-bg .glowing {
    left: 102vw;
    width: 5vw;
    top: 69vw;
    height: 108vw;
  }
}

@keyframes glow {
  to {
    transform: translateY(-110vh) rotate(360deg);
  }
}
</style>

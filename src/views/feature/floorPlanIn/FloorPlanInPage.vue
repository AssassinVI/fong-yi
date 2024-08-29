<template>
  <div id="floor-plan-inner">
    <div class="floor-plan-inner-left">
      <h1>{{ mainItem?.floor }}</h1>
      <div class="floor-plan-inner-left-item-1">
        <div>平面設計圖</div>
        <div class="floor-plan-inner-left-item-1-line"></div>
      </div>
      <div class="floor-plan-inner-left-item-2">AESTHETICS FLOOR PLAN</div>
      <ul class="floor-plan-inner-left-ul" v-if="mainItem?.list">
        <li
          v-for="item in mainItem?.list"
          :key="item.id"
          :class="[item.id === listTag ? 'floor-plan-inner-left-hover' : '']"
        >
          <div
            class="floor-plan-inner-left-li-top"
            @mouseenter="hoverListHandle(item.id)"
            @mouseleave="outListHandle"
          >
            <div class="floor-plan-inner-left-li-squre"></div>
            <div class="floor-plan-inner-left-li-text">{{ item.name }}</div>
          </div>
          <div class="floor-plan-inner-left-li-line"></div>
        </li>
      </ul>
    </div>
    <div class="floor-plan-inner-right">
      <ScaleDrag :max-ratio="2" :init="{ x: 100, y: 100 }">
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <img class="imgBoxMap" :src="mainItem?.image" />
              <FloorPoints
                v-for="item in mainItem?.points"
                :key="item?.className"
                :className="item?.className"
                :name="item?.name"
                :tag="item?.tag"
                :listTag="listTag"
                @hover-list-handle="hoverListHandle"
                @out-list-handle="outListHandle"
              />
            </div>
          </div>
        </div>
      </ScaleDrag>
    </div>
    <div class="floor-plan-inner-left-bottom">
      <img src="../../../assets/img/floor-plan/floor-plan-left-bottom.png" />
    </div>
    <Back />
  </div>
</template>

<script setup lang="ts">
import ScaleDrag from "@/components/scaledrag/ScaleDrag.vue";
import Back from "@/components/back/Back.vue";
import FloorPoints from "@/components/floorPlan/FloorPoints.vue";
import { FloorPlanAest } from "../floorPlanData";
import "@/assets/scss/floor-plan/floor-plan-in-page.scss";

const route = useRoute();

const router = useRouter();

//根據網址的q來渲染資料
const tag = ref("");

//1F的列表tag
const listTag = ref("");

const mainItem = ref();

const backToFloor = () => {
  router.push({
    name: "floorPlan",
  });
};

const hoverListHandle = (val: string) => {
  listTag.value = val;
};

const outListHandle = () => {
  listTag.value = "";
};

// watch(
//   () => route.query.q,
//   () => {
//     if (route.query.q) {
//       tag.value = route.query.q as string;
//     }
//     const findItem = FloorPlanAest.find((item) => item.tag === tag.value);
//     mainItem.value = findItem;
//   }
// );

onMounted(() => {
  if (route.query.q) {
    tag.value = route.query.q as string;
  }
  console.log(route.query.q);
  const findItem = FloorPlanAest.find((item) => item.tag === tag.value);
  mainItem.value = findItem;
});

provide("toggle", backToFloor);
</script>

<style scoped></style>

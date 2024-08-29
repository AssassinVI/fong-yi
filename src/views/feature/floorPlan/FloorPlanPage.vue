<template>
  <div id="floor-plan">
    <div class="floor-plan-left">
      <ScaleDrag :max-ratio="2" :init="{ x: 100, y: 100 }">
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <img
                class="imgBoxMap"
                src="../../../assets/img/eight/eight-map.png"
              />
            </div>
          </div>
        </div>
      </ScaleDrag>
    </div>
    <div class="floor-plan-right">
      <h1 class="floor-plan-right-h1">FLOOR PLAN</h1>
      <ul class="floor-plan-right-ul">
        <li
          v-for="item in FloorPlanList"
          :key="item.id"
          :class="[liTag === item.tag ? 'hover-li' : '']"
          @mouseover="addTag(item.tag)"
          @mouseout="removeTag()"
        >
          <router-link :to="{ name: 'floorInner', query: { q: item.tag } }">
            <div>{{ item.floor }}</div>
            <div class="floor-plan-right-ul-line"></div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="floor-plan-right-bottom">
      <img src="../../../assets/img/floor-plan/floor-plan-rigt-bottom.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScaleDrag from "@/components/scaledrag/ScaleDrag.vue";
import { FloorPlanList } from "../floorPlanData";
import "@/assets/scss/floor-plan/floor-plan-page.scss";

const liTag = ref("");

const addTag = (val: string) => {
  liTag.value = val;
};

const removeTag = () => {
  liTag.value = "";
};
</script>

<style scoped></style>

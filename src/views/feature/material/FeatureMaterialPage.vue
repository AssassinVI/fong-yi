<template>
  <div id="featureMaterialPage">
    <div class="feature-material-title">
      <h1>CONSTRUCTION<br />EQUIPMENT</h1>
      <div class="feature-material-line"></div>
    </div>
    <div class="imgBox">
      <MaterialBox
        v-for="(item, index) in materialBoxData"
        :key="item.id"
        :index="index"
        :tag="item.tag"
        :boxImg="item.boxImg"
      />
    </div>
    <div class="material-left-bottom-img">
      <img src="../../../assets/img/materials/left-bottom.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialBox from "@/components/material/MaterialBox.vue";
import { materialBoxData } from "../materialData";
import "@/assets/scss/feature/featureMaterials.scss";
</script>

<style scoped></style>

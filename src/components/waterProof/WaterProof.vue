<template>
  <div id="water-proof">
    <div class="water-proof-left">
      <div
        class="water-proof-left-img"
        v-for="(item, index) in waterProofContent[0].image"
        :class="`water-proof-left-img-` + index"
        :key="nanoid()"
      >
        <img :src="item" />
      </div>
    </div>
    <div class="water-proof-right"></div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { waterProofContent } from "./waterproof";
import "@/assets/scss/water-proof/water-proof.scss";
</script>

<style scoped></style>

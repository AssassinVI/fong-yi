<template>
  <div id="water-proof-page">
    <div class="water-proof-button-container">
      <div class="water-proof-button" @click="showWaterProof('bathroom')">
        結構工法
      </div>
      <div class="water-proof-button" @click="showWaterProof('topRoof')">
        防水工法
      </div>
      <div class="water-proof-button" @click="showWaterProof('window')">
        貼心工法
      </div>
    </div>
    <FadeIn>
      <WaterProofFancyBox
        v-if="showbox"
        :boxContent="boxContent"
        @toggle="showWaterProof"
      />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import FadeIn from "@/components/transition/FadeIn.vue";
import WaterProofFancyBox from "@/components/fancybox/WaterProofFancyBox.vue";
import { waterProofContent } from "./waterproof";
import "@/assets/scss/water-proof/water-proof-page.scss";

//顯示fancybox
const showbox = ref(false);

const boxContent = ref();

const showWaterProof = (val?: string) => {
  if (val) {
    const filterContent = waterProofContent.filter((item) => item.tag === val);
    console.log(filterContent);
    boxContent.value = filterContent[0];
  }
  showbox.value = !showbox.value;
};

onMounted(() => {});

provide("toggle", showWaterProof);
</script>

<style scoped></style>

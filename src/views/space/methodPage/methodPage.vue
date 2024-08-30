<template>
  <div id="methodPage-page">
    

    <!-- 公法MENU -->
    <a class="menuBtn" href="javascript:;" @click="menuShow">
      <img src="../../../assets/img/space/right_icon.svg" alt="">
    </a>
    
    <div class="methodMenu" :class="{show : is_show_menu}"  @mouseleave="menuClose">
      <div class="list">
        <div class="title">
          <h2>結構設計</h2>
          <p>STRUCTURE</p>
        </div>
        <ul>
          <li><a href="javascript:;">結構工法</a></li>
          <li><a href="javascript:;">DECK樓板</a></li>
          <li><a href="javascript:;">1F主筋不搭接</a></li>
          <li><a href="javascript:;">鋼模柱</a></li>
          <li><a href="javascript:;">ALC板隔層</a></li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>防水設計</h2>
          <p>WATERPROOF</p>
        </div>
        <ul>
          <li><a href="javascript:;" @click="showWaterProof('bathroom')">浴室防水</a></li>
          <li><a href="javascript:;" @click="showWaterProof('window')">窗框防水</a></li>
          <li><a href="javascript:;" @click="showWaterProof('topRoof')">屋頂防水 </a></li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h2>貼心設計</h2>
          <p>INTIMAE</p>
        </div>
        <ul>
          <li><a href="javascript:;">上配管工法</a></li>
          <li><a href="javascript:;">當層排風</a></li>
          <li><a href="javascript:;">八大管線</a></li>
          <li><a href="javascript:;">車道感應</a></li>
          <li><a href="javascript:;">電動車充電</a></li>
          <li><a href="javascript:;">FTTH光纖</a></li>
          <li><a href="javascript:;">全網型對講系統</a></li>
        </ul>
      </div>
    </div>
    <!-- 公法MENU END -->

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
import { waterProofContent } from "../waterProof/waterproof";
import "@/assets/scss/space/methodMenu.scss";

//顯示fancybox
const showbox = ref(false);

const boxContent = ref();

let is_show_menu= ref(false);

const showWaterProof = (val?: string) => {
  if (val) {
    const filterContent = waterProofContent.filter((item) => item.tag === val);
    console.log(filterContent);
    boxContent.value = filterContent[0];
  }
  showbox.value = !showbox.value;
};

//-- 開啟MENU --
function menuShow(){
  is_show_menu.value=true;
}
//-- 關閉MENU --
function menuClose() {
  is_show_menu.value=false;
}



onMounted(() => {});

provide("toggle", showWaterProof);
</script>

<style scoped>
#methodPage-page{
  position: relative;
  height: 92vh;
}
</style>

<template>
  <div id="FeatureMaterialInPage">
    <div class="material-in-container">
      <div class="material-in-bath-container" v-if="tag === 'bathroom'">
        <div class="material-in-bath-left">
          <h1 class="material-in-bath-left-title">百年工藝 打造優雅生活</h1>
          <p class="material-in-bath-left-para">
            KOHLER，自1873年創立以來，始終以精湛工藝和創新設計，引領全球衛浴產業。<br />
            作為百年經典品牌，KOHLER將藝術與功能完美結合，每一件產品都是對品質的承諾。<br />
            從傳統的馬桶、面盆到現代的智能衛浴系統，不斷拓展產品線，滿足消費者對高品質生活的追求。<br />
            同時，積極響應環保議題，致力於開發節水、節能的產品，為永續發展貢獻心力。<br />
            選擇KOHLER，即選擇了百年工藝的保證與對未來生活的憧憬。
          </p>
          <div class="material-in-bath-left-content">
            <div class="material-in-bath-primary" @click="toFancy('primary')">
              <div class="material-in-bath-name"><p>主浴</p></div>
              <div class="material-in-bath-img">
                <img
                  src="../../../assets/img/materials/bathroom/bath-nav-first.png"
                />
              </div>
            </div>
            <div
              class="material-in-bath-secondary"
              @click="toFancy('secondary')"
            >
              <div class="material-in-bath-name"><p>次浴</p></div>
              <div class="material-in-bath-img">
                <img
                  src="../../../assets/img/materials/bathroom/bath-nav-second.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="material-in-bath-right">
          <img
            src="../../../assets/img/materials/bathroom/bath-right-pic.png"
          />
        </div>

        <FadeIn>
          <div
            v-if="materialTag"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              background-color: white;
              height: 100%;
              z-index: 7;
            "
          >
            <MaterialFancyBox
              :content="KBContent"
              :materialTag="materialTag"
              @to-fancy="toFancy"
            /></div
        ></FadeIn>
      </div>
      <div class="material-in-fancy-container" v-else-if="tag === 'kitchen'">
        <MaterialFancyBox :content="KBContent" materialTag="kitchen" />
      </div>
      <div v-else>ss</div>
    </div>
    <div class="material-in-left-bottom">
      <img src="../../../assets/img/other/left-bottom.png" />
    </div>
    <div
      class="back"
      style="
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
      "
      @click="backHandler"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { materialInData, materialKBData } from "../materialData";
import MaterialFancyBox from "@/components/fancybox/MaterialFancyBox.vue";
import { BOXCONTENT, KBCONTENT } from "@/types/type";
import MaterialKBBox from "@/components/material/MaterialKB-Box.vue";
import "@/assets/scss/feature/materialInPage.scss";
import FadeIn from "@/components/transition/FadeIn.vue";

const route = useRoute();

const router = useRouter();

const showBox = ref(false);

const tag = ref("");

const materialTag = ref("");

const boxContent = ref<BOXCONTENT>({
  id: "",
  tag: "",
  title: "",
  zhTitle: "",
  content: "",
  box: true,
  carouselImg: [
    {
      id: "",
      img: "",
      txt: "",
    },
  ],
});

const KBContent = ref<KBCONTENT>({
  tag: "",
  items: [
    {
      title: "",
      rightImg: "",
      secondTag: "",
      listImg: "",
      listItems: [
        {
          id: "",
          name: "",
          img: "",
          leftImg: "",
          rightImg: "",
        },
      ],
    },
  ],
});

const toFancy = (val: string) => {
  if (val) {
    materialTag.value = val;
  } else {
    materialTag.value = "";
  }
};

const backHandler = () => {
  router.push({ name: "featureMaterials" });
};

onMounted(() => {
  const { q } = route.query;
  if (q) {
    tag.value = q as string;
  }

  if (tag.value === "bathroom" || tag.value === "kitchen") {
    const KBItem = materialKBData.find((item) => item.tag === tag.value);
    if (KBItem) {
      KBContent.value = KBItem;
    }
  } else {
    const item = materialInData.find((item) => item.tag === tag.value);
    if (item) {
      boxContent.value = item;
    }
  }
});
</script>

<style lang="scss" scoped></style>

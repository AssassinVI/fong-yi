<template>
  <div class="material-fancyBox">
    <div class="material-fancyBox-left">
      <h1 class="material-fancyBox-title">{{ materialBox?.title }}</h1>
      <div
        class="material-fancyBox-box-container"
        :class="`${materialBox?.secondTag}`"
      >
        <div class="material-fancyBox-box-list-img">
          <img :src="materialBox?.listImg" />
        </div>
        <div
          class="material-fancyBox-box"
          v-for="item in materialBox?.listItems"
          :key="item.id"
          @click="clickHandler(item.id)"
        ></div>
      </div>
    </div>
    <div class="material-fancyBox-right">
      <img :src="materialBox?.rightImg" />
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
    <Teleport to="body">
      <FadeInItem>
        <div
          class="material-fancyBox-jump-box"
          v-for="item in materialBox?.listItems"
          :key="item.id"
          v-show="materialInnerTag === item.id"
        >
          <div class="material-fancyBox-jump-box-left">
            <img :src="item?.leftImg" />
          </div>
          <div class="material-fancyBox-jump-box-right">
            <img :src="item?.rightImg" />
          </div>
          <Back />
        </div>
      </FadeInItem>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { KBCONTENT } from "@/types/type";
import FadeInItem from "../transition/FadeInItem.vue";
import Back from "../back/Back.vue";
import "@/assets/scss/feature/materialFancyBox.scss";

const props = defineProps(["content", "materialTag"]);

const emits = defineEmits(["to-fancy"]);

const router = useRouter();

const materialBox = ref();

const materialInnerTag = ref("");

const clickHandler = (val: string) => {
  materialInnerTag.value = val;
};

const clearTag = () => {
  materialInnerTag.value = "";
};

const backHandler = () => {
  if (materialBox.value.secondTag === "kitchen") {
    router.push({ name: "featureMaterials" });
  } else {
    emits("to-fancy");
  }
};

onMounted(() => {
  const item = props.content as KBCONTENT;
  const findItem = item.items.find(
    (item) => item.secondTag === props.materialTag
  );
  materialBox.value = findItem;
  console.log(materialBox.value);
});

provide("toggle", clearTag);
</script>

<style scoped></style>

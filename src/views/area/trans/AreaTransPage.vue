<template>
  <div id="area-trans">
    <div class="area-trans-map">
      <div class="trans-mask trans-mask-1">
        <img
          src="../../../assets/img/example/trans-map-mask.png"
          alt="trans-map-mask"
        />
      </div>
    </div>
    <div class="area-trans-right">
      <ul>
        <li>測試1</li>
        <li>測試2</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/trans/areaTrans.scss";

const transTag = ref(0);

const handleClick = (val: number) => {
  transTag.value = val;
};
</script>

<style scoped></style>

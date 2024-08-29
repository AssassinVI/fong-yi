<template>
  <div class="material-img-box" :class="`material-img-box-${props.index}`">
    <router-link :to="{ name: 'featureMaterialsIn', query: { q: props.tag } }">
      <div class="material-img-thumb-box">
        <img :src="props.boxImg" />
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/feature/featurMaterialBox.scss";

const props = defineProps(["index", "boxImg", "tag"]);

const router = useRouter();
</script>

<style scoped></style>

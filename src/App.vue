<template>
  <router-view v-slot="{ Component, route }">
    <FadeIn><component :is="Component" :key="route.path"></component></FadeIn>
  </router-view>
  <WindowClose v-if="useStore.position !== 'home'" />
</template>

<script setup lang="ts">
import { useAnimationTimeStore } from "./store/animationStore";
import FadeIn from "@/components/transition/FadeIn.vue";
import WindowClose from "./components/close/WindowClose.vue";

const route = useRoute();

const position = ref();

const useStore = useAnimationTimeStore();

onMounted(() => {
  position.value = route.name;
  useStore.position;
});
</script>

<style lang="scss"></style>

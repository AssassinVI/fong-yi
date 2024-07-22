<template>
  <div id="area-Page">
    <Nav />
    <div class="example">
      <img src="../../assets/img/example/example.png" alt="example" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue";
import { RouteRecordNameGeneric } from "vue-router";
import { useNavNameStore } from "@/store/navStore";
import "@/assets/scss/area/area.scss";

const route = useRoute();

const routeName = ref<RouteRecordNameGeneric>("");

const navStore = useNavNameStore();
</script>

<style scoped></style>

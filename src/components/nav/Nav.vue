<template>
  <nav id="nav">
    <div class="nav-container">
      <div class="nav-left">
        <div class="nav-left-dot">
          <img src="../../assets/img/nav/nav-dot.png" alt="nav-dot" />
        </div>
        <div class="nav-left-text">
          <div class="nav-left-text-item" v-for="item in navLink" :key="nanoid">
            <span class="nav-link-span">
              <router-link v-if="item.pathName!=undefined" :to="{ name: item.pathName }">{{item.zhName}}</router-link>
              <p v-else>{{ item.zhName }}</p> 
            </span>
            <span class="nav-left-text-item-line"></span>
            <div class="nav-child">
              <NavChild
                v-for="child in item.child"
                :key="nanoid"
                :zhName="child.zhName"
                :pathName="child.pathName"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="nav-right">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/img/nav/nav-icon.png" alt="nav-icon" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { navLink } from "./navLink";
import "@/assets/scss/nav/nav.scss";
</script>

<style></style>

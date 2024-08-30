<template>
    <div id="list-page">
      
      <div class="c_method">
        <div class="center_box">
          <div class="txt">
            <h1>CONSTRUCTION</h1>
            <span>STRUCTURE ENGINEERING</span>
            <h2>獨家工法</h2>
            <hr/>
          </div>
        </div>
        <div class="top_box">
          <div class="box1">
            <a href="#">
              <p>結構工法</p>
              <img src="../../../assets/img/space/bg1@2x.jpg" alt="">
            </a>
          </div>
          <div class="box2">
            <img src="../../../assets/img/space/bg2@2x.jpg" alt="">
          </div>
        </div>
        <div class="down_box">
          <div class="box1">
            <router-link :to="{name:'methodPage'}">
              <p>防水工法</p>
              <img src="../../../assets/img/space/bg3@2x.jpg" alt="">
            </router-link>
          </div>
          <div class="box2">
            <a href="#">
              <p>貼心工法</p>
              <img src="../../../assets/img/space/bg4@2x.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import "@/assets/scss/space/list.scss";
  </script>
  
  <style scoped>
  #list-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 0;
  }
  </style>
  
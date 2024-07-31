<template>
  <Transition name="rightToLeft" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
.rightToLeft-enter-from,
.rightToLeft-leave-to {
  opacity: 0;
  transform: translateX(3%);
}

.rightToLeft-enter-to,
.rightToLeft-leave-from {
  opacity: 1;
  transform: translateX(0%);
}

.rightToLeft-enter-active,
.rightToLeft-leave-active {
  transition: all 0.5s;
}
</style>

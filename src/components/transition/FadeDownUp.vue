<template>
  <Transition name="donw-up">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
.donw-up-enter-from,
.donw-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.donw-up-enter-to,
.donw-up-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

.donw-up-enter-active,
.donw-up-leave-active {
  transition: all 0.75s;
}
</style>

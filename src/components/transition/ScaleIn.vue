<template>
  <Transition name="scale-in">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
.scale-in-enter-from .eight-mask-background,
.scale-in-leave-to .eight-mask-background {
  transform: scale(1.5);
  /* opacity: 0; */
}

.scale-in-enter-to .eight-mask-background,
.scale-in-leave-from .eight-mask-background {
  transform: scale(1);
  /* opacity: 1; */
}

.scale-in-enter-active .eight-mask-background,
.scale-in-leave-active .eight-mask-background {
  transition: all 0.75s;
}
</style>

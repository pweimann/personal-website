<template>
  <div class="mouse-cursor" :style="cursorPoint" />
</template>
<script setup lang='ts'>
import { computed, ref } from '#imports'

const xCursor = ref(0)
const yCursor = ref(0)

const moveCursor = (event: MouseEvent) => {
  requestAnimationFrame(() => {
    xCursor.value = event.clientX
    yCursor.value = event.clientY
  })
}

const cursorPoint = computed(() => {
  return `transform: translateX(${xCursor.value}px) translateY(${yCursor.value}px) translateZ(0) translate3d(0, 0, 0)`
})

addEventListener('mousemove', moveCursor)
</script>
<style lang='css'>
@media (hover: hover) {
  .mouse-cursor {
    height: 0.5rem;
    width: 0.5rem;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -10;
    pointer-events: none;
    color: #fff;
    will-change: transform;
    background-color: #fff;
    box-shadow: 0 0 0.8rem 0.4rem rgba(255, 255, 255, 0.4), 0 0 4rem 2rem rgba(255, 255, 255, 0.3), 0 0 10rem 5rem rgba(255, 255, 255, 0.2);
  }
}

@media (hover: none) {
  .mouse-cursor {
    display: none;
  }
}
</style>

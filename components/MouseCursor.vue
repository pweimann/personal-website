<template>
  <div ref="cursor" class="mouse-cursor" :style="cursorPoint" />
</template>
<script setup lang='ts'>
import { computed, ref } from '#imports'

const cursor = ref<HTMLInputElement | null>(null)
const xCursor = ref(0)
const yCursor = ref(0)

const moveCursor = (event: MouseEvent) => {
  xCursor.value = event.clientX
  yCursor.value = event.clientY
}

const cursorPoint = computed(() => {
  return `transform: translateX(${xCursor.value - 2}px) translateY(${yCursor.value - 2}px) translateZ(0) translate3d(0, 0, 0)`
})

addEventListener('mousemove', moveCursor)
</script>
<style lang='css'>
.mouse-cursor {
  height: 0.5rem;
  width: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 100%;
  pointer-events: none;
  color: #fff;
  will-change: opacity, transform;

  background-color: #fff;
  opacity: 1;
}
</style>

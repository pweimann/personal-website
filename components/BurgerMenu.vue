<template>
  <div class="menu-wrapper" :class="menuWrapperClasses">
    <div class="menu-btn" :class="{'hidden-cursor': isMenuToggled}">
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { useState } from '#app'
import { computed } from '#imports'

const isMenuToggled = useState('showFullHeaderMenuState')

const menuWrapperClasses = computed(() => {
  return isMenuToggled.value ? 'active' : ''
})
</script>
<style scoped lang='css'>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.active .line {
  transition: all 0.5s ease;
  background-color: #262626;
}

.active .line:nth-of-type(1) {
  transform: rotate(45deg) translate(0rem, 0.5rem);
}

.active .line:nth-of-type(2) {
  transform: rotate(135deg) translate(0rem, 0.5rem);
}

.menu-btn {
  position: relative;
  cursor: pointer;
  padding: 4rem 2rem;
}

.hidden-cursor {
  cursor: none;
}

.line {
  transition: all 0.5s ease;
  background-color: black;
  height: 0.2rem;
  width: 4rem;
}

.line + .line {
  margin-top: 0.5rem;
}

.line:nth-of-type(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (hover: hover) and (pointer: fine) {
  .active .menu-btn:hover .line {
    background-color: #fff;
    opacity: 1;
    box-shadow: -0.5px 0 var(--highlight-bg-color), 0 0.5px var(--highlight-bg-color), 0.5px 0 var(--highlight-bg-color), 0 -0.5px var(--highlight-bg-color),
    0 0 3.5px #fff,
    0 0 5px #fff,
    0 0 10.5px #fff,
    0 0 21px var(--highlight-bg-color),
    0 0 41px var(--highlight-bg-color),
    0 0 46px var(--highlight-bg-color),
    0 0 51px var(--highlight-bg-color),
    0 0 75.5px var(--highlight-bg-color);
  }
}
</style>

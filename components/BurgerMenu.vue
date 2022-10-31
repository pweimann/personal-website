<template>
  <div class="menu-wrapper" :class="menuWrapperClasses" @click="onClick">
    <div class="menu-btn">
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { computed, ref } from '#imports'

const isMenuToggled = ref(false)

const onClick = () => {
  isMenuToggled.value = !isMenuToggled.value
}

const menuWrapperClasses = computed(() => {
  return isMenuToggled.value ? 'active-menu' : ''
})
</script>
<style scoped lang='css'>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.active-menu .line {
  transition: all 0.5s ease;
  background-color: #262626;
}

.active-menu .menu-btn:hover .line {
  background-color: white;
}

.active-menu .line:nth-of-type(1) {
  transform: rotate(45deg) translate(0px, 6px);
}

.active-menu .line:nth-of-type(2) {
  transform: rotate(135deg) translate(0px, 6px);
}

.menu-btn {
  position: relative;
  cursor: pointer;
  padding: 4rem 2rem;
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
</style>

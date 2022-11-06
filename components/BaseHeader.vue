<!--suppress CssUnusedSymbol -->
<template>
  <header>
    <BurgerMenu class="burger-menu" @click="toggleBurgerMenu" />
    <BaseHeaderItem title="Contact" class="ml-auto">
      <NuxtLink href="https://twitter.com/paul__weimann" target="_blank">
        <img src="/icons/icon-awesome-twitter.svg" alt="twitter">
      </NuxtLink>
      <NuxtLink href="https://github.com/pweimann" target="_blank">
        <img src="/icons/icon-awesome-github.svg" alt="github">
      </NuxtLink>
      <NuxtLink href="https://www.instagram.com/bluubsen/" target="_blank">
        <img src="/icons/icon-awesome-instagram.svg" alt="instagram">
      </NuxtLink>
      <NuxtLink href="https://www.linkedin.com/in/paul-weimann-7b9852207/" target="_blank">
        <img src="/icons/icon-awesome-linkedin.svg" alt="linkedin">
      </NuxtLink>
    </BaseHeaderItem>
    <Transition>
      <div v-if="showFullHeaderMenuState" class="menu-overlay">
        <NuxtLink to="/" class="full-header-menu-link glow-effect" @click="clickFullHeaderMenuLink">
          About Me
        </NuxtLink>
        <NuxtLink to="/projects" class="full-header-menu-link glow-effect" @click="clickFullHeaderMenuLink">
          Projects
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
<script lang='ts' setup>
import { useState } from '#app'
import BaseHeaderItem from '~/components/BaseHeaderItem.vue'
import BurgerMenu from '~/components/BurgerMenu.vue'

const showFullHeaderMenuState = useState<boolean>('showFullHeaderMenuState', () => false)

const toggleBurgerMenu = () => {
  showFullHeaderMenuState.value = !showFullHeaderMenuState.value
}

const clickFullHeaderMenuLink = () => {
  showFullHeaderMenuState.value = false
}
</script>
<style scoped lang='css'>
.burger-menu {
  z-index: 20;
}

header {
  display: flex;
}

.ml-auto {
  margin-left: auto;
}

.full-header-menu-link {
  color: rgba(255, 255, 255);
  text-decoration: none;
  font-size: calc(7rem + 1vw);
}

.glow-effect:hover {
  color: #fff;
  opacity: 1;
  text-shadow: -0.5px 0 #0fa, 0 0.5px #0fa, 0.5px 0 #0fa, 0 -0.5px #0fa,
  0 0 3.5px #fff,
  0 0 5px #fff,
  0 0 10.5px #fff,
  0 0 21px #0fa,
  0 0 41px #0fa,
  0 0 46px #0fa,
  0 0 51px #0fa,
  0 0 75.5px #0fa;
}

.menu-overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: black;
  color: rgba(255, 255, 255, 0.15);
  height: 100vh;
  width: 100vw;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.router-link-exact-active {
  color: white;
  opacity: 0.5;
}
</style>

<template>
  <div v-bind="$attrs" ref="container" class="container">
    <div class="vertical-line" />
    <h3 ref="titleContainer" class="title">
      {{ title }}
    </h3>
    <div class="links">
      <slot />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from '#imports'

defineProps({ title: { type: String, default: '' } })
const titleContainer = ref(null)
const container = ref(null)

onMounted(() => {
  if (titleContainer) {
    const titleWidth = titleContainer.value.clientWidth
    const containerWidth = container.value.clientWidth
    const calcWidth = titleWidth > containerWidth ? titleWidth : containerWidth
    container.value.style.width = calcWidth + 'px'
  }
})
</script>
<style lang='css'>
.container {
  display: flex;
}

.vertical-line {
  width: 1px;
  height: 100%;
  background-color: black;
}

.title {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.5rem;
  background-color: white;
  position: absolute;
  top: 10px;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-left: 0.5rem;
}

a {
  opacity: 0.15;
}

a:hover {
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

.links a,
.links p,
.links span,
.links img {
  height: 1.4rem;
  width: 1.4rem;
}

.links > a + a {
  margin-top: 0.5rem;
}
</style>

<template>
  <div v-bind="$attrs" ref="container" class="container">
    <div class="vertical-line" />
    <h3 ref="titleTag" class="title">
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
const titleTag = ref(null)
const container = ref(null)

onMounted(() => {
  adaptContainerWidthToTitleWidth()
  addEventListener('resize', adaptContainerWidthToTitleWidth)
})

const adaptContainerWidthToTitleWidth = () => {
  const titleWidth = titleTag.value.clientWidth
  const containerWidth = container.value.clientWidth
  const calcWidth = titleWidth > containerWidth ? titleWidth : containerWidth
  container.value.style.width = calcWidth + 'px'
  // trigger rerender of the title tag
  // (safari will not update title position otherwise)
  titleTag.value.style.position = 'absolute'
  container.value.style.visibility = 'visible'
}
</script>
<style lang='css'>
.container {
  display: flex;
  visibility: hidden;
  transition: visibility 0.5s ease-in-out;
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
  position: fixed;
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

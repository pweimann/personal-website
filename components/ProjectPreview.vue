<template>
  <div class="project-preview">
    <div class="project-thumbnail-container">
      <NuxtLink
        :href="props.link"
        target="_blank"
        class="project-link"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
      >
        <img
          class="project-thumbnail"
          :alt="'Thumbnail image of the website - ' + props.title"
          :src="props.thumbnail ? props.thumbnail : '/placeholder.gif'"
        >
        <Transition>
          <div v-show="isMouseOver" class="project-thumbnail-overlay">
            <p>Visit</p>
          </div>
        </Transition>
      </NuxtLink>
    </div>
    <div class="project-text">
      <NuxtLink
        :href="props.link"
        target="_blank"
        class="project-link"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
      >
        <h3>{{ props.title }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from '#imports'

interface ProjectPreviewItem {
  title: string
  link?: string
  thumbnail?: string
}

const isMouseOver = ref(false)

const onMouseOver = () => {
  isMouseOver.value = true
}

const onMouseLeave = () => {
  isMouseOver.value = false
}

const props = defineProps<ProjectPreviewItem>()
</script>
<style lang='css'>
.project-link {
  display: block;
  opacity: 1;
  text-decoration: none;
  color: black;
}

.project-thumbnail-container {
  position: relative;
  width: 70%;
  margin-right: 2rem;
  margin-bottom: 2rem;
}

.project-preview {
  display: flex;
  flex-basis: 50%;
  width: 100%;
  height: 30rem;
}

.project-thumbnail {
  filter: grayscale(100%);
  max-width: 100%;
  aspect-ratio: 16/9;
}

.project-thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-dark-bg-color);
  opacity: 0.7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.project-text {
  width: 100%;
}

</style>

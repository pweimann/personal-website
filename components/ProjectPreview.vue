<template>
  <div class="project-preview">
    <div class="project-thumbnail-container">
      <NuxtLink :href="props.link" target="_blank" class="project-link">
        <img
          class="project-thumbnail"
          :alt="'Thumbnail image of the website - ' + props.title"
          :src="props.thumbnail ? props.thumbnail : '/placeholder.gif'"
        >
      </NuxtLink>
    </div>
    <div class="project-text">
      <NuxtLink :href="props.link" target="_blank" class="project-link">
        <h3>{{ props.title }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang='ts'>
interface ProjectPreviewItem {
  title: string
  link?: string
  thumbnail?: string
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

.project-text {
  width: 100%;
}

</style>

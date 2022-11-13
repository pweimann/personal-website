<template>
  <NuxtLink v-bind="$attrs" :href="props.link" target="_blank" class="preview-card">
    <h2>{{ props.title }}</h2>
  </NuxtLink>
</template>
<script setup lang='ts'>
interface ProjectPreviewItem {
  title: string
  link?: string
}

const props = defineProps<ProjectPreviewItem>()
</script>
<style lang='css'>
a {
  display: block;
  opacity: 1;
  text-decoration: none;
  color: black;
}

.preview-card {
  opacity: 1;
  width: 100%;
  height: 30rem;
  color: white;
  background-color: black;
}

</style>

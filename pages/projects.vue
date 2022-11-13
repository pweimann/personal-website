<template>
  <div class="projects">
    <ContentList v-slot="{ list }" :query="query">
      <ProjectPreview v-for="project in list" :key="project._path" v-bind="project" />
    </ContentList>
  </div>
</template>
<script setup lang='ts'>
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/projects', limit: 5 }
</script>
<style scoped lang='css'>
.projects {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
}
</style>

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
  display: flex;
  flex-direction: column;
}
</style>

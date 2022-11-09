<template>
  <div class="projects">
    <ContentList v-slot="{ list }" :query="query">
      <NuxtLink v-for="project in list" :key="project._path" :to="project.link" target="_blank">
        <h2>{{ project.title }}</h2>
      </NuxtLink>
    </ContentList>
  </div>
</template>
<script setup lang='ts'>
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/projects', limit: 5 }
</script>
<style scoped lang='css'>
</style>

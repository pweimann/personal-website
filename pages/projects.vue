<template>
  <div class="projects">
    <ContentList v-slot="{ list }" :query="query">
      <NuxtLink v-for="project in list" :key="project._path" :to="project._path">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
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

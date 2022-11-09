<template>
  <div>
    <h1>Blog</h1>
    <ContentList v-slot="{ list }" :query="query">
      <NuxtLink v-for="blog in list" :key="blog._path" :to="blog._path">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>
<script setup lang='ts'>
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/blog', limit: 5 }
</script>
<style scoped lang='css'>
</style>

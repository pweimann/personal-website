<template>
  <NuxtLayout name="default">
    <template #header>
      <BaseHeader />
    </template>
    <NuxtPage />
    <template #footer>
      <BaseFooter />
    </template>
  </NuxtLayout>
</template>
<script lang='ts' setup>
import { useHead } from '#head'
import BaseFooter from '@/components/BaseFooter'
import BaseHeader from '@/components/BaseHeader'
import '@/theme.css'

useHead({
  title: 'Personal website of Paul Weimann',
  meta: [
    {
      name: 'description',
      content: 'I am a frontend developer with a love for pixels, currently based in Berlin. ' +
        'This personal website was created to share my work, my journey as a developer, and my personal development.'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

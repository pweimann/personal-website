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
<style lang='css'>
html {
  font-size: calc(10px + 0.15vw);
  font-family: Roboto, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  font-size: 1.6rem;
}

h1 {
  font-size: calc(7rem + 1vw);
}

h2 {
  font-size: calc(3rem + 1vw);
}

p {
  margin-top: 1rem;
}

@media screen and (min-width: 800px) {
  p {
    font-size: 1.8rem;
  }
}
</style>

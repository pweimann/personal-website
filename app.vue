<template>
  <NuxtLayout name='default'>
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
import BaseFooter from '@/components/BaseFooter'
import BaseHeader from '@/components/BaseHeader'</script>
<style lang='css'>
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
}

p {
  font-size: 1.8rem;
}

h1 {
  font-size: 7rem;
}

h2 {
  font-size: 3.5rem;
}

p {
  margin-top: 1rem;
}
</style>

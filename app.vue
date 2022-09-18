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
html {
  font-size: 10px;
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

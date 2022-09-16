<template>
  <div>
    <BaseHeader></BaseHeader>
    <NuxtPage />
    <BaseFooter></BaseFooter>
  </div>
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

</style>

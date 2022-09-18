<template>
  <header>
    <BaseHeaderItem title='Contact' class='ml-auto'>
      <span>dummy</span>
      <span>dummy</span>
      <span>dummy</span>
    </BaseHeaderItem>
  </header>
</template>
<script lang='ts' setup>
import BaseHeaderItem from '~/components/BaseHeaderItem.vue'</script>
<style lang='css'>
header {
  display: flex;
  height: 10vh;
}

.ml-auto {
  margin-left: auto;
}
</style>

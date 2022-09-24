<template>
  <header>
    <BaseHeaderItem title='Contact' class='ml-auto'>
      <a href='https://twitter.com/paul__weimann'>
        <img src='/public/icon-awesome-twitter.svg' alt='twitter' />
      </a>
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

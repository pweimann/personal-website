<template>
  <header>
    <BaseHeaderItem title="Contact" class="ml-auto">
      <a href="https://twitter.com/paul__weimann">
        <img src="/icon-awesome-twitter.svg" alt="twitter">
      </a>
      <a href="https://github.com/pweimann">
        <img src="/icon-awesome-github.svg" alt="github">
      </a>
      <a href="https://www.instagram.com/bluubsen/">
        <img src="/icon-awesome-instagram.svg" alt="instagram">
      </a>
      <a href="https://www.linkedin.com/in/paul-weimann-7b9852207/">
        <img src="/icon-awesome-linkedin.svg" alt="linkedin">
      </a>
    </BaseHeaderItem>
  </header>
</template>
<script lang='ts' setup>
import BaseHeaderItem from '~/components/BaseHeaderItem.vue'</script>
<style lang='css'>
header {
  display: flex;
}

.ml-auto {
  margin-left: auto;
}
</style>

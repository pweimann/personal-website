<template>
  <div class="menu-wrapper">
    <div class="menu-btn">
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</template>
<script setup lang='ts'></script>
<style lang='css'>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.menu-btn {
  cursor: pointer;
  padding: 2rem;
}

.line {
  background-color: black;
  height: 0.2rem;
  width: 4rem;
}

.line + .line {
  margin-top: 0.5rem;
}
</style>

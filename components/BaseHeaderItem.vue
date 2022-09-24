<template>
  <div class='container' v-bind='$attrs'>
    <div class='vertical-line'></div>
    <h3 class='title'>{{ title }}</h3>
    <div class='links'>
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts' setup>
defineProps({ title: String })
</script>
<style lang='css'>
.container {
  display: flex;
  height: 100%;
  width: 15rem;
}

.vertical-line {
  width: 1px;
  height: 100%;
  background-color: black;
}

.title {
  font-size: 1.5rem;
  font-weight: lighter;
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.5rem;
  background-color: white;
  position: absolute;
  top: 10px;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-left: 0.5rem;
}

.links a,
.links p,
.links span,
.links img {
  height: 1.4rem;
  width: 1.4rem;
}
</style>

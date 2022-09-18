<template>
  <div class='wrapper'>
    <slot name='header'>
      Default header content
    </slot>
    <main>
      <slot />
    </main>
    <footer>
      <slot name='footer'>
        Default footer content
      </slot>
    </footer>
  </div>
</template>
<style scoped lang='css'>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>

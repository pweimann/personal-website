<template>
  <div>
    <div class="header-wrapper">
      <slot name="header">
        Default header content
      </slot>
    </div>
    <div class="wrapper">
      <main>
        <slot />
      </main>
      <footer>
        <slot name="footer">
          Default footer content
        </slot>
      </footer>
    </div>
  </div>
</template>
<style scoped lang='css'>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media screen and (min-width: 1200px) {
  .header-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>

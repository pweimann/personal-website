<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projects-overview">
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400" class="project-thumbnail">
        <h2>title of the project</h2>
        <p>This could be short description</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang='css'>
.projects-overview {
  display: grid;
  grid-row-gap: 1rem;
  overflow: hidden;
  grid-column-gap: 3rem;
}

.projects-overview div:nth-child(3n) {
  grid-column: 1/2;
}

.project-thumbnail {
  max-width: 100%;
}
</style>

<template>
  <div class="about-me">
    <h1>Hello.</h1>
    <h2>My name is Paul Weimann.</h2>
    <p>
      I am a frontend developer with a love for pixels, currently based in Berlin. This personal website was created to
      share my work, my journey as a developer, and my personal development.
    </p>
    <p>
      You can follow me on Twitter where I mostly tweet about my life and what currently impresses me. If you want to
      get in touch with me, you can write me on my social accounts. I'm looking forward to hearing from you! :)
    </p>
    <p>
      Outside of programming, I enjoy reading, learning new stuff, watching UFC, cooking new dishes, and doing a lot of
      sports. Especially I like boxing, squash, running, snowboarding, wakeboarding, and surfing. Doing sport gives me
      the perfect balance and a calm mind.
    </p>
  </div>
</template>
<style scoped lang='css'>
.about-me > p:first-of-type {
  margin-top: 3rem;
}

.about-me > h2:first-of-type {
  margin-top: 1rem;
}

@media screen and (min-width: 800px) {
  .about-me {
    max-width: 60%;
  }
}
</style>

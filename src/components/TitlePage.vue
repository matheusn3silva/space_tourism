<template>
  <div class="container">
    <span class="number__page">{{ number }}</span>
    <h1 class="title__page">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    number: String,
    title: String
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 28px;
  margin: 76px 0 0 166.5px;

  span,
  h1 {
    font-size: 1.8em;
    text-transform: uppercase;
    letter-spacing: 4.72px;
  }

  span {
    font-weight: bold;
    opacity: 0.25;
  }

  h1 {
    font-weight: normal;
  }
}

@media screen and (max-width: 988px) {
  .container {
    margin: 40px 0 60px 38px;

    span,
    h1 {
      font-size: 1.25rem;
      letter-spacing: 3.375px;
    }
  }
}

@media screen and (max-width: 508px) {
  .container {
    margin: 32px 0;
    justify-content: center;

    span,
    h1 {
      font-size: 1.25rem;
      letter-spacing: 3.375px;
    }
  }
}
</style>

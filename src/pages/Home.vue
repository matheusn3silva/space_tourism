<template>
  <main>
    <div class="container">
      <div class="legend__home">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="btn__home">
        <div @click="exploreDestination" class="button">Explore</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  props: {
    currentPage: String
  },
  methods: {
    exploreDestination() {
      this.$emit('explorePage')
    }
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
}

.container {
  padding: 251px 165px 131px;
  display: flex;
  gap: 25%;
  justify-content: center;
  align-content: center;
}

.legend__home {
  width: 100%;
  max-width: 450px;

  h2,
  h1,
  p {
    font-weight: normal;
  }

  h2 {
    font-size: 28px;
    letter-spacing: 4.72px;
    text-transform: uppercase;
  }

  h1 {
    font-family: 'Bellefair', serif;
    font-size: 150px;
    margin: 24px 0 65px;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.1em;
    line-height: 32px;
  }
}

.btn__home {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &::before {
    content: '';
    width: 274px;
    height: 274px;
    position: absolute;
    background-color: #ffffff1b;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover::before {
    width: 450px;
    height: 450px;
    opacity: 1;
  }

  .button {
    width: 274px;
    height: 274px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: 'Bellefair', serif;
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    color: #0b0d17;
    cursor: pointer;
  }
}

@media screen and (max-width: 888px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .legend__home {
    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 1.25rem;
      letter-spacing: 3.375px;
    }

    p {
      font-size: 1em;
      line-height: 28px;
    }
  }

  .btn__home {
    &::before {
      display: none;
    }

    .button {
      width: 242px;
      height: 242px;
    }
  }
}

@media screen and (max-width: 508px) {
  .container {
    flex-direction: column;
    gap: 156px;
  }

  .legend__home {
    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 1rem;
      letter-spacing: 3.375px;
    }

    h1 {
      font-size: 5rem;
      text-align: center;
      margin: 16px 0 36px;
    }

    p {
      width: 327px;
      font-size: 0.93em;
      line-height: 25px;
    }
  }

  .btn__home {
    &::before {
      display: none;
    }

    .button {
      width: 150px;
      height: 150px;
      font-size: 1.25rem;
      letter-spacing: 1.25px;
    }
  }
}
</style>

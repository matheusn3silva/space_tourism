<template>
  <section
    :class="[
      'crew__container',
      { first: crews[count].name === 'Douglas Hurley' }
    ]"
  >
    <div class="crew__description">
      <h3>{{ crews[count].job }}</h3>
      <h2>{{ crews[count].name }}</h2>
      <p>{{ crews[count].description }}</p>
      <div class="navigation__button">
        <div
          :class="['buttons', { active: count === 0 }]"
          @click="count = 0"
        ></div>
        <div
          :class="['buttons', { active: count === 1 }]"
          @click="count = 1"
        ></div>
        <div
          :class="['buttons', { active: count === 2 }]"
          @click="count = 2"
        ></div>
        <div
          :class="['buttons', { active: count === 3 }]"
          @click="count = 3"
        ></div>
      </div>
    </div>
    <div class="photo__crew">
      <img :src="crews[count].srcImg" :alt="`Photo ${crews[count].name}`" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      crews: [
        {
          name: 'Douglas Hurley',
          job: 'Commander',
          description:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
          srcImg: require('../../public/images/crew/image-douglas-hurley.webp')
        },
        {
          name: 'Mark ShuttleWorth',
          job: 'Mission Specialist',
          description:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
          srcImg: require('../../public/images/crew/image-mark-shuttleworth.webp')
        },
        {
          name: 'Victor Glover',
          job: 'PILOT',
          description:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
          srcImg: require('../../public/images/crew/image-victor-glover.webp')
        },
        {
          name: 'Anousheh Ansari',
          job: 'Flight Engineer',
          description:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
          srcImg: require('../../public/images/crew/image-anousheh-ansari.webp')
        }
      ],
      count: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.nextImage()
    }, 10000)
  },
  watch: {},
  methods: {
    nextImage() {
      this.count++
      if (this.count > 3) this.count = 0
    }
  }
})
</script>

<style lang="scss" scoped>
.crew__container {
  padding: 0 121px 0 165px;
  display: flex;
  justify-content: space-between;

  .crew__description {
    margin-top: 154px;

    h3,
    h2 {
      font-family: 'Bellefair', serif;
      font-weight: normal;
      text-transform: uppercase;
    }

    h3 {
      font-size: 2rem;
      opacity: 0.5;
    }

    h2 {
      margin: 15px 0 40px;
      font-size: 3.5rem;
    }

    p {
      max-width: 390px;
      margin-bottom: 120px;
      font-family: 'Barlow', sans-serif;
      font-family: 1.2rem;
      line-height: 32px;
      color: #d0d6f9;
    }

    .navigation__button {
      width: 132px;
      display: flex;
      gap: 24px;

      .buttons {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.17;
        cursor: pointer;
        transition: opacity 0.5s;

        &:hover {
          opacity: 0.5;
        }

        &.active {
          opacity: 1;
        }
      }
    }
  }

  .photo__crew {
    img {
      position: relative;
    }
  }
}

@media screen and (max-width: 988px) {
  .crew__container {
    flex-direction: column;
    gap: 90px;
    padding: 0;

    .crew__description {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3,
      h2,
      p {
        text-align: center;
      }

      h3 {
        font-size: 1.5rem;
      }

      h2 {
        margin: 8px 0 28px;
        font-size: 2.5rem;
      }

      p {
        max-width: 458px;
        margin-bottom: 40px;
        font-family: 1rem;
        line-height: 28px;
      }

      .navigation__button {
        width: 88px;
        gap: 16px;
        margin: 0 auto;

        .buttons {
          width: 10px;
          height: 10px;
        }
      }
    }

    .photo__crew {
      width: 90%;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 508px) {
  .crew__container {
    .crew__description {
      order: 2;

      h3 {
        font-size: 1rem;
        order: 1;
        margin-top: 32px;
      }

      h2 {
        margin: 8px 0 16px;
        font-size: 1.5rem;
        order: 2;
      }

      p {
        max-width: 327px;
        margin-bottom: 0 auto;
        font-family: 0.93rem;
        line-height: 25px;
        order: 3;
      }

      .navigation__button {
        order: 0;
        width: 88px;
        gap: 16px;
        margin: 0 auto;

        .buttons {
          width: 10px;
          height: 10px;
        }
      }
    }

    .photo__crew {
      border-bottom: 1px solid #ffffff9f;
      margin: 0 auto;
      img {
        width: 327px;
      }
    }
  }
}
</style>

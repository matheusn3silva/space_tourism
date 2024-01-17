<template>
  <section class="destination__container">
    <div class="destiny__img">
      <img
        :src="destinations[number].src"
        :alt="`Travel destination - ${destinations[number].title}`"
      />
    </div>
    <div class="destiny__description">
      <ul class="destiny__navigation">
        <li
          v-for="destiny in destinations"
          :key="destiny.id"
          :class="{ active: currentDestiny === destiny.title }"
          @click="changeDestiny($event)"
        >
          {{ destiny.title }}
        </li>
      </ul>
      <h2 class="title__name">{{ destinations[number].title }}</h2>
      <p class="paragraph__description">
        {{ destinations[number].paragraph }}
      </p>
      <hr />
      <div class="flex__container">
        <div>
          <div class="subtitle">AVG. DISTANCE</div>
          <div class="km__days">{{ destinations[number].distance }} KM</div>
        </div>
        <div>
          <div class="subtitle">Est. travel time</div>
          <div class="km__days">{{ destinations[number].time }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      number: 0,
      currentDestiny: 'Moon',
      destinations: [
        {
          src: require(`../../public/images/destination/image-moon.webp`),
          title: 'Moon',
          distance: '384,400',
          time: '3 DAYS',
          paragraph:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
          id: 0
        },
        {
          src: require(`../../public/images/destination/image-mars.webp`),
          title: 'Mars',
          distance: '225 MIL.',
          time: '9 MONTHS',
          paragraph:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          id: 1
        },
        {
          src: require(`../../public/images/destination/image-europa.webp`),
          title: 'Europa',
          distance: '628 MIL.',
          time: '3 YEARS',
          paragraph:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          id: 2
        },
        {
          src: require(`../../public/images/destination/image-titan.webp`),
          title: 'Titan',
          distance: '1.6 BIL',
          time: '7 YEARS',
          paragraph:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          id: 3
        }
      ]
    }
  },
  methods: {
    changeDestiny(event: MouseEvent) {
      const destineTarget = event.target as HTMLLIElement

      const name = this.capitalize(destineTarget.innerText)
      this.currentDestiny = name

      switch (name) {
        case 'Moon':
          this.number = 0
          break
        case 'Mars':
          this.number = 1
          break
        case 'Europa':
          this.number = 2
          break
        case 'Titan':
          this.number = 3
      }
    },
    capitalize(name: string) {
      return name.charAt(0) + name.slice(1).toLocaleLowerCase()
    }
  }
})
</script>

<style lang="scss" scoped>
.destination__container {
  margin-top: 64px;
  padding: 0 163px 118px 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 157px;
}

.destiny__img {
  align-self: flex-end;
  margin-top: 97px;

  img {
    width: 445px;
  }
}

.destiny__description {
  min-width: 445px;
  transition: 0.5s;

  li,
  .title__name,
  .subtitle,
  .km__days {
    text-transform: uppercase;
  }
  .destiny__navigation {
    display: flex;
    gap: 35px;

    li {
      position: relative;
      padding-bottom: 12px;
      color: #d0d6f9;
      letter-spacing: 2.7px;
      list-style: none;
      cursor: pointer;

      &::before {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 3px solid #fff;
        opacity: 0;
        transition: 0.5s;
      }

      &:hover::before {
        opacity: 0.5;
      }

      &.active,
      &.active::before {
        color: #fff;
        opacity: 1;
      }
    }
  }

  .title__name {
    font-family: 'Bellefair', serif;
    font-size: 100px;
    font-weight: normal;
    margin: 37px 0 42px;
  }

  .paragraph__description {
    max-width: 444px;
    margin-bottom: 54px;
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
  }

  hr {
    margin-bottom: 28px;
    border: none;
    border-bottom: 1px solid #383b4b;
  }

  .flex__container {
    display: flex;
    gap: 79px;

    .subtitle {
      font-size: 14px;
      letter-spacing: 2.36px;
      color: #d0d6f9;
    }

    .km__days {
      margin-top: 12px;
      font-family: 'Bellefair', serif;
      font-size: 28px;
    }
  }
}

@media screen and (max-width: 988px) {
  .destination__container {
    margin-top: 0;
    flex-direction: column;
    gap: 53px;
  }

  .destiny__img {
    align-self: center;
    img {
      width: 300px;
    }
  }

  .destiny__description {
    min-width: 285.5px;
    .destiny__navigation {
      max-width: 285.5px;
      margin: 0 auto;
      justify-content: space-between;
      li {
        position: relative;
        padding-bottom: 12px;
        font-size: 1rem;
      }
    }

    .title__name {
      font-size: 5rem;
      margin: 32px 0 29px;
      text-align: center;
    }

    .paragraph__description {
      min-width: 573px;
      margin-bottom: 49px;
      font-size: 1rem;
      line-height: 28px;
      text-align: center;
    }

    .flex__container {
      justify-content: center;

      .subtitle {
        font-size: 0.875rem;
      }
    }
  }
}

@media screen and (max-width: 508px) {
  .destination__container {
    gap: 26px;
    padding: 0;
  }

  .destiny__img {
    img {
      width: clamp(170px, 250px, 300px);
    }
  }

  .destiny__description {
    min-width: 0;
    .destiny__navigation {
      li {
        position: relative;
        padding-bottom: 8px;
        font-size: 0.875rem;
      }
    }

    .title__name {
      font-size: 3.5rem;
      margin: 20px 0 12px;
    }

    .paragraph__description {
      min-width: 327px;
      margin-bottom: 32px;
      font-size: 0.93rem;
      line-height: 25px;
    }

    .flex__container {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 20px;
      gap: 24px;

      .subtitle {
        font-size: 0.875rem;
        text-align: center;
      }

      .km__days {
        font-size: 1.75rem;
        text-align: center;
      }
    }
  }
}
</style>

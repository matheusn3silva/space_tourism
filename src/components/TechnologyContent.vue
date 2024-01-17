<template>
  <section class="container">
    <div class="buttons__container">
      <button :class="['btn', { active: number === 0 }]" @click="number = 0">
        1
      </button>
      <button :class="['btn', { active: number === 1 }]" @click="number = 1">
        2
      </button>
      <button :class="['btn', { active: number === 2 }]" @click="number = 2">
        3
      </button>
    </div>
    <div class="launch__description">
      <h3>THE TERMINOLOGY…</h3>
      <h2>{{ launchInformation[number].subtitle }}</h2>
      <p>{{ launchInformation[number].paragraph }}</p>
    </div>
    <div class="img__container">
      <img
        :src="launchInformation[number].src"
        :alt="launchInformation[number].alt"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      number: 0,
      buttons: [1, 2, 3],
      launchInformation: [
        {
          subtitle: 'LAUNCH VEHICLE',
          paragraph:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          src: require('../../public/images/technology/image-launch-vehicle-portrait.jpg'),
          alt: 'Image launch vehicle'
        },
        {
          subtitle: 'SPACEPORT',
          paragraph:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
          src: require('../../public/images/technology/image-spaceport-portrait.jpg'),
          alt: 'Image spaceport'
        },
        {
          subtitle: 'SPACE CAPSULE',
          paragraph:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          src: require('../../public/images/technology/image-space-capsule-portrait.jpg'),
          alt: 'Image space capsule'
        }
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.number++
      if (this.number > 2) this.number = 0
    }, 10000)

    window.addEventListener('resize', this.updateResize)
  },
  methods: {
    updateResize() {
      if (window.innerWidth < 888) {
        this.launchInformation.forEach((info) => {
          switch (info.subtitle) {
            case 'LAUNCH VEHICLE':
              info.src = require('../../public/images/technology/image-launch-vehicle-landscape.jpg')
              break
            case 'SPACEPORT':
              info.src = require('../../public/images/technology/image-spaceport-landscape.jpg')
              break
            case 'SPACE CAPSULE':
              info.src = require('../../public/images/technology/image-space-capsule-landscape.jpg')
              break
          }
        })
      }

      if (window.innerWidth > 988) {
        this.launchInformation.forEach((info) => {
          switch (info.subtitle) {
            case 'LAUNCH VEHICLE':
              info.src = require('../../public/images/technology/image-launch-vehicle-portrait.jpg')
              break
            case 'SPACEPORT':
              info.src = require('../../public/images/technology/image-spaceport-portrait.jpg')
              break
            case 'SPACE CAPSULE':
              info.src = require('../../public/images/technology/image-space-capsule-portrait.jpg')
              break
          }
        })
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateResize)
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 101px;
  gap: 30px;
}

.buttons__container,
.launch__description {
  margin-top: 159px;
}
.buttons__container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: clamp(5%, 7%, 10%);

  button {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #ffffff40;
    font-family: 'Bellefair', serif;
    font-size: 2rem;
    font-size: normal;
    color: #fff;
    cursor: pointer;
    transition: 0.5;

    &:hover {
      border-color: #fff;
    }

    &.active {
      background-color: #fff;
      color: #0b0d17;
    }
  }
}

.launch__description {
  max-width: 470px;

  h3,
  h2 {
    text-transform: uppercase;
    font-weight: normal;
  }

  h3,
  p {
    color: #d0d6f9;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 2.7px;
  }

  h2 {
    margin: 11px 0 30px;
    font-family: 'Bellefair', serif;
    font-size: 3.5rem;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.1rem;
    line-height: 32px;
  }
}

.img__container {
  width: 515px;
  height: 527px;
  margin-top: 26px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
}

@media screen and (max-width: 988px) {
  .container {
    flex-direction: column;
  }
  .buttons__container {
    order: 2;
    gap: 16px;
    flex-direction: row;
    justify-content: center;
    margin: 56px 0 44px 0;

    button {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
  }

  .launch__description {
    max-width: 458px;
    margin: 0 auto;
    order: 3;

    h3,
    h2,
    p {
      text-align: center;
    }

    h2 {
      margin: 16px 0;
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 28px;
    }
  }

  .img__container {
    order: 1;
    width: 100%;
    max-height: 310px;
    margin-top: 26px;

    img {
      width: 100%;
      max-height: 310px;
    }
  }
}

@media screen and (max-width: 508px) {
  .buttons__container {
    flex-direction: row;
    justify-content: center;
    margin: 34px 0 26px;

    button {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }

  .launch__description {
    max-width: 327px;
    margin: 0 auto;

    h3 {
      font-size: 0.8rem;
    }

    h2 {
      margin: 9px 0;
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 25px;
    }
  }

  .img__container {
    order: 1;
    margin-top: 0;
  }
}
</style>

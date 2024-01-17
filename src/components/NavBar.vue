<template>
  <header class="header__container">
    <div class="logo">
      <img src="../../public/images/shared/logo.svg" alt="Image logo page" />
    </div>

    <nav class="menu__desktop">
      <ul>
        <li
          :class="[{ active: currentPage === 'Home' }]"
          @click="updateView('Home')"
        >
          <span>00</span> Home
        </li>
        <li
          :class="[{ active: currentPage === 'Destination' }]"
          @click="updateView('Destination')"
        >
          <span>01</span> Destination
        </li>
        <li
          :class="[{ active: currentPage === 'Crew' }]"
          @click="updateView('Crew')"
        >
          <span>02</span> Crew
        </li>
        <li
          :class="[{ active: currentPage === 'Technology' }]"
          @click="updateView('Technology')"
        >
          <span>03</span> Technology
        </li>
      </ul>
    </nav>

    <div @click="openMenu" class="btn__open__menu">
      <i class="fa-solid fa-bars fa-2xl"></i>
    </div>
    <div @click="closeMenu" class="menu__mobile">
      <div @click="closeMenu" class="btn__close">
        <i class="fa-solid fa-xmark fa-2xl"></i>
      </div>

      <nav>
        <ul>
          <li @click="updateView('Home')"><span>00</span> Home</li>
          <li @click="updateView('Destination')">
            <span>01</span> Destination
          </li>
          <li @click="updateView('Crew')"><span>02</span> Crew</li>
          <li @click="updateView('Technology')"><span>03</span> Technology</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    currentPage: String
  },
  methods: {
    updateView(view: string) {
      this.$emit('changeView', view)
    },
    openMenu() {
      const menuMobile = document.querySelector('.menu__mobile') as HTMLElement
      menuMobile.classList.add('open__menu')
    },
    closeMenu() {
      const menuMobile = document.querySelector('.menu__mobile') as HTMLElement
      menuMobile.classList.remove('open__menu')
    }
  }
})
</script>

<style lang="scss" scoped>
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 55px;
}
.menu__desktop {
  display: block;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.77px);

  li {
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: background 0.5s;
    }

    &:hover::before {
      background: #ffffff80;
    }

    &.active::before {
      background: #fff;
    }
  }
}

.logo {
  max-width: 48px;
  max-height: 48px;
  min-width: 40px;
  min-height: 40px;

  img {
    width: 100%;
  }
}

nav {
  padding: 0 163px 0 123px;

  ul {
    display: flex;
    gap: 50px;
    list-style: none;

    li {
      padding: 39px 0;
      letter-spacing: 2.7px;
      text-transform: uppercase;
      cursor: pointer;

      span {
        font-weight: bold;
        margin-right: 11px;
      }
    }
  }
}

.btn__open__menu {
  display: none;
}

.menu__mobile {
  display: none;
}

/* MEDIA QUERIES */
@media screen and (max-width: 988px) {
  .menu__desktop {
    width: clamp(50%, 70%, 100%);
  }

  .header__container {
    margin: 0;
  }
  .menu__desktop {
    display: none;
  }

  .logo {
    max-width: 40px;
    max-height: 40px;
    margin: 24px 0 0 24px;
  }

  nav {
    padding: 0;

    ul {
      flex-direction: column;
    }
  }

  .btn__open__menu {
    display: block;
    margin: 33px 24px 0 0;
  }

  .menu__mobile {
    width: 0%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.77px);
    z-index: 99;
    overflow: hidden;
    transition: 0.3s;

    .btn__close {
      width: 100%;
      text-align: end;
      padding: 36px 26px 0 0;
    }

    nav {
      background-color: transparent;
      ul {
        margin-top: 54px;
        gap: 0;
        background-color: transparent;

        li {
          background-color: transparent;
          padding: 16px 0 16px 30px;
        }
      }
    }
  }

  .menu__mobile.open__menu {
    width: 70%;
  }
}
</style>

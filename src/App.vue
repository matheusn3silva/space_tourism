<template>
  <NavBar :currentPage="currentView" @changeView="changeView" />
  <component :is="currentView" @explorePage="exploreDestination" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Home from '@/pages/Home.vue'
import Destination from '@/pages/Destination.vue'
import Crew from '@/pages/Crew.vue'
import Technology from '@/pages/Technology.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar, Home, Destination, Crew, Technology },
  data() {
    return {
      currentView: 'Home'
    }
  },
  methods: {
    changeView(view: string) {
      this.currentView = view
      this.backgroundChange(view)
    },
    backgroundChange(view: string) {
      const pages = ['Home', 'Destination', 'Crew', 'Technology']
      const body = document.body

      pages.forEach((page) => {
        body.classList.remove(`${page}-bg`)

        if (page === view) {
          body.classList.add(`${page}-bg`)
        }
      })
    },
    exploreDestination() {
      this.currentView = 'Destination'
      this.backgroundChange('Destination')
    }
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Barlow:wght@200;300;400&family=Bellefair&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  color: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.Home-bg {
  background-image: url('../public/images/home/background-home-desktop.jpg');
}
.Destination-bg {
  background-image: url('../public/images/destination/background-destination-desktop.jpg');
}
.Crew-bg {
  background-image: url('../public/images/crew/background-crew-desktop.jpg');
}
.Technology-bg {
  background-image: url('../public/images/technology/background-technology-desktop.jpg');
}

/* SCROLL STYLE */

body {
  --sb-track-color: #20282b;
  --sb-thumb-color: #7a7b7b;
  --sb-size: 13px;

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 10px;
}

@media screen and (max-width: 988px) {
  .Home-bg {
    background-image: url('../public/images/home/background-home-tablet.jpg');
  }
  .Destination-bg {
    background-image: url('../public/images/destination/background-destination-tablet.jpg');
  }
  .Crew-bg {
    background-image: url('../public/images/crew/background-crew-tablet.jpg');
  }
  .Technology-bg {
    background-image: url('../public/images/technology/background-technology-tablet.jpg');
  }
}

@media screen and (max-width: 508px) {
  .Home-bg {
    background-image: url('../public/images/home/background-home-mobile.jpg');
  }
  .Destination-bg {
    background-image: url('../public/images/destination/background-destination-mobile.jpg');
  }
  .Crew-bg {
    background-image: url('../public/images/crew/background-crew-mobile.jpg');
  }
  .Technology-bg {
    background-image: url('../public/images/technology/background-technology-mobile.jpg');
  }
}
</style>

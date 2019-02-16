<template>
  <div id="app">
    <MainHeader @toggleNavigation="showNav = !showNav" />
    <MainNavigation v-if="showNav"/>

    <transition appear @enter="fadeIn" @leave="fadeOut">
      <router-view />
    </transition>

    <transition appear @enter="fadeIn" @leave="fadeOut">
      <div v-if="$router.pageLoading" class="loader"></div>
    </transition>
  </div>
</template>

<script>
  import MainHeader     from './components/MainHeader';
  import MainNavigation from './components/MainNavigation';
  import { TweenMax }   from 'gsap';

  export default {
    name: 'app',
    components: { MainHeader, MainNavigation },
    data() {
      return { showNav : false }
    },
    methods : {
      fadeIn(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 0 }, { autoAlpha : 1 });
      },
      fadeOut(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 1 }, { autoAlpha : 0 });
      }
    }
  }
</script>

<style>
  @import './styles/main.css';

  #app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>

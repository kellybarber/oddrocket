<template>
  <div id="app">
    <MainHeader />

    <transition appear @enter="fadeIn" @leave="fadeOut">
      <router-view />
    </transition>

    <transition appear @enter="slideIn" @leave="slideOut">
      <FilmOverlay v-if="filmOverlayOpen" />
    </transition>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader';
  import FilmOverlay from './components/FilmOverlay';
  import { mapState } from 'vuex'
  import { TweenMax } from 'gsap';

  export default {
    name: 'App',
    components: { MainHeader, FilmOverlay },
    data() {
      return {}
    },
    computed : {
      ...mapState({
        filmOverlayOpen : state => state.filmOverlay.filmOverlayOpen
      })
    },
    methods : {
      fadeIn(el) {
        TweenMax.fromTo(el, 1, { autoAlpha : 0 }, { autoAlpha : 1 });
      },
      fadeOut(el) {
        TweenMax.fromTo(el, 1, { autoAlpha : 1 }, { autoAlpha : 0 });
      },
      slideIn(el) {
        TweenMax.fromTo(el, 1, { yPercent: 100 }, { yPercent: 0, ease: Expo.easeOut });
      },
      slideOut(el) {
        TweenMax.fromTo(el, 1, { yPercent: 0 }, { yPercent: 100, autoAlpha : 0, ease: Expo.easeOut });
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

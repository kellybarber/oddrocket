<template>
  <div id="app">
    <MainHeader />

    <transition appear @enter="fadeIn" @leave="fadeOut">
      <router-view />
    </transition>

    <div
      v-if="$router.pageLoading"
      class="loader"
    ></div>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader';
  import { TweenMax } from 'gsap';

  export default {
    components: { MainHeader },
    methods : {
      fadeIn(el) {
        TweenMax.fromTo(el, 1, { autoAlpha : 0 }, { autoAlpha : 1 });
      },
      fadeOut(el) {
        TweenMax.fromTo(el, 1, { autoAlpha : 1 }, { autoAlpha : 0 });
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

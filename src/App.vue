<template>
  <div id="app">
    <MainHeader />
    <transition
      appear
      @enter="sectionEnter"
      @leave="sectionLeave"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader';
  import { TweenMax } from 'gsap';

  export default {
    name: 'App',
    components: { MainHeader },
    data() {
      return {}
    },
    methods : {
      sectionEnter(el, done) {
        TweenMax.fromTo(el, 1, { autoAlpha : 0 }, { autoAlpha : 1 });
      },
      sectionLeave(el, done) {
        TweenMax.fromTo(el, 1, { autoAlpha : 1 }, { autoAlpha : 0 });
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

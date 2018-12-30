<template>
  <div id="app">
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
  import { TweenMax } from 'gsap'

  export default {
    name: 'App',
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

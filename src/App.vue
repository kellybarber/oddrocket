<template>
  <div id="app">
    <!--<MainHeader @toggleNavigation="showNav = !showNav" />-->
    <!--<MainNavigation v-if="showNav"/>-->

    <transition appear @enter="sectionEnterTransition" @leave="sectionLeaveTransition">
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
      return {
        showNav : false,
        sectionEnterTransition : this.fadeIn,
        sectionLeaveTransition : this.fadeOut
      }
    },
    watch : {
      $route(to) {
        switch(to.name) {
          case 'film' :
            this.sectionEnterTransition = this.slideIn;
            this.sectionLeaveTransition = this.slideOut;
            break;
          default :
            this.sectionEnterTransition = this.fadeIn;
            this.sectionLeaveTransition = this.fadeOut;
            break;
        }
      }
    },
    methods : {
      fadeIn(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 0 }, { autoAlpha : 1 });
      },
      fadeOut(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 1 }, { autoAlpha : 0 });
      },
      slideIn(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 0, yPercent : 30 }, {
          autoAlpha : 1,
          yPercent  : 0,
          ease      : Expo.easeOut
        });
      },
      slideOut(el) {
        TweenMax.fromTo(el, 1.5, { autoAlpha : 0, yPercent : 0 }, {
          autoAlpha : 1,
          yPercent  : 30,
          ease      : Expo.easeOut
        });
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

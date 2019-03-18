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
  import { fadeIn, fadeOut, slideUpIn, slideUpOut } from "./helpers/animations";

  export default {
    name: 'app',
    components: { MainHeader, MainNavigation },
    data() {
      return {
        showNav : false,
        sectionEnterTransition : fadeIn,
        sectionLeaveTransition : fadeOut,
        fadeIn,
        fadeOut
      }
    },
    watch : {
      $route(to) {
        switch(to.name) {
          case 'film' :
            this.sectionEnterTransition = slideUpIn;
            this.sectionLeaveTransition = slideUpOut;
            break;
          default :
            this.sectionEnterTransition = fadeIn;
            this.sectionLeaveTransition = fadeOut;
            break;
        }
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

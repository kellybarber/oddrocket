<template>
  <div id="app">
    <transition appear @enter="slideInNav" @leave="slideOutNav">
      <MainNavigation v-if="showNavigation"/>
    </transition>

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
  import { EventBus }   from "./utils/EventBus";
  import {
    fadeIn, fadeOut, slideUpIn, slideUpOut, slideInNav, slideOutNav
  } from "./helpers/animations";

  export default {
    name: 'app',
    components: { MainHeader, MainNavigation },
    data() {
      return {
        showNavigation : false,
        sectionEnterTransition : fadeIn,
        sectionLeaveTransition : fadeOut,
        fadeIn,
        fadeOut,
        slideInNav,
        slideOutNav
      }
    },
    mounted() {
      EventBus.$on('toggleNavigation', () => {
        this.showNavigation = !this.showNavigation;
      });
    },
    watch : {
      $route(to) {
        this.showNavigation = false;

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

        this.showNavigation = false;
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

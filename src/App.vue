<template>
  <div id="app">
    <NavigationToggle v-if="showNavToggle" v-model="showNavigation" />

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
  import NavigationToggle from './components/NavigationToggle';
  import MainHeader       from './components/MainHeader';
  import MainNavigation   from './components/MainNavigation';
  import {
    fadeIn, fadeOut, slideUpIn, slideUpOut, slideInNav, slideOutNav
  } from "./helpers/animations";

  export default {
    name: 'app',
    components: { NavigationToggle, MainHeader, MainNavigation },
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
      }
    },
    computed : {
      showNavToggle() {
        return this.$route.name !== 'home'
      }
    }
  }
</script>

<style>
  @import './styles/main.css';
</style>

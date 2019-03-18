<template>
  <div class="main-navigation">
    <button
      class="nav-toggle"
      @click="toggleNavigation"
    >&times;</button>
    <router-link
      v-for="(link, index) in routes"
      :key="index"
      :to="link.route"
      class="nav-link"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script>
  import { EventBus } from "../utils/EventBus";

  export default {
    props: {},
    data() {
      return { }
    },
    created() {
      this.routes = [
        { title : 'Home', route : '/' },
        { title : 'Work', route : '/work' },
        { title : 'About', route : '/about' },
        { title : 'Contact', route : '/contact' }
      ];
    },
    methods : {
      toggleNavigation() {
        EventBus.$emit('toggleNavigation');
      }
    }
  }
</script>

<style scoped>

  .main-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    padding: 0 5rem 0 5rem;
    background-color: var(--white);
    z-index: 3;
  }

  .nav-toggle {
    height: 5rem;
    width: 5rem;
    margin: 2rem 0 10rem;
    font-size: 5rem;
    font-weight: 200;
    border: none;
    outline: none;
  }

  .nav-link {
    text-decoration: none;
  }

</style>

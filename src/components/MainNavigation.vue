<template>
  <div class="main-navigation">
    <div class="nav-divider"></div>
    <router-link
      v-for="(link, index) in routes"
      :key="index"
      :to="link.route"
      class="nav-link"
    >
      <span class="link-index">{{ formatIndex(index) }}</span>
      <span class="link-title btn-standard">{{ link.title }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    created() {
      this.routes = [
        { title : 'Home', route : '/' },
        { title : 'Work', route : '/work' },
        { title : 'About', route : '/about' },
        { title : 'Contact', route : '/contact' }
      ];
    },
    methods : {
      formatIndex(index) {
        const paddedIndex = index < 10 ? `0${index}` : index;
        return `.${paddedIndex}`;
      }
    }
  }
</script>

<style scoped>

  .main-navigation {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 30rem;
    padding: 20rem 5rem 0 5rem;
    background-color: #E6ECF2;
    z-index: 3;
  }

  .nav-divider {
    position: absolute;
    top: 15rem;
    left: 12rem;
    height: 60%;
    width: 1px;
    background-color: var(--black);
  }

  .nav-link {
    display: inline-block;
    float: left;
    clear: both;
    font-size: 1.6em;
    font-weight: 200;
    color: var(--black);
    text-decoration: none;
  }
  .nav-link:not(:last-child) {
    margin-bottom: 2rem;
  }

  .link-index {
    margin-right: 10rem;
  }

</style>

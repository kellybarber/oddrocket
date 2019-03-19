<template>
  <div class="main-navigation">
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
  export default {
    created() {
      this.routes = [
        { title : 'Home', route : '/' },
        { title : 'Work', route : '/work' },
        { title : 'About', route : '/about' },
        { title : 'Contact', route : '/contact' }
      ];
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
    padding: 20rem 5rem 0 5rem;
    background-color: var(--white);
    z-index: 3;
  }

  .nav-link {
    text-decoration: none;
  }

</style>

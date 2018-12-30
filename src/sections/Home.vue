<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
  export default {
    name       : 'Home',
    components : {},
    data() {
      return {}
    },
    computed : {
      homeData() {
        return this.$cms.getPageData('home');
      }
    },
    mounted() {
      console.log('Home Loaded', this.homeData);
    }
  }
</script>

<style>

</style>

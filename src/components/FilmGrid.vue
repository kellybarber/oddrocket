<template>
  <div class="film-grid">
    <div class="grid-header"></div>
    <div class="grid-container"></div>
  </div>
</template>

<script>
  export default {
    name       : 'FilmGrid',
    components : {},
    props : {
      films : { type : Array, default : [] }
    },
    data() {
      return {}
    },
    computed : {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>

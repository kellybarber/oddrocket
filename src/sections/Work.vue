<template>
  <div class="section work">
    <FilmGrid :films="content.films" />
  </div>
</template>

<script>
  import FilmGrid from '../components/FilmGrid';

  export default {
    components : { FilmGrid },
    created() {
      this.content = this.$cms.data.work;
    }
  }
</script>

<style scoped>

</style>

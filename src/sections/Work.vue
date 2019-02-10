<template>
  <div class="work">
    <FilmGrid :films="content.films" />
  </div>
</template>

<script>
  import FilmGrid from '../components/FilmGrid';

  export default {
    components : { FilmGrid },
    created() {
      this.content = this.$cms.data.work;
      console.log(this.$cms.data);
    }
  }
</script>

<style scoped>

</style>

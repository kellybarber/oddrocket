<template>
  <div class="work">
    <FilmGrid :films="workData.films" />
  </div>
</template>

<script>
  import FilmGrid from '../components/FilmGrid';

  export default {
    name       : 'Work',
    components : { FilmGrid },
    data() {
      return {}
    },
    created() {
      this.workData = this.$cms.getPageData('work');
    },
  }
</script>

<style scoped>

</style>

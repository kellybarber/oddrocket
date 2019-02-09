<template>
  <div class="work">
    <FilmGrid :films="workData.films" />
  </div>
</template>

<script>
  import FilmGrid from '../components/FilmGrid';

  export default {
    components : { FilmGrid },
    created() {
      this.workData = this.$cms.getPageData('work');
    },
    async beforeRouteEnter(to, from, next) {
      await setTimeout(next, 5000);
    }
  }
</script>

<style scoped>

</style>

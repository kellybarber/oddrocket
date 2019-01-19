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
    computed : {
      workData() { return this.$cms.getPageData('work'); }
    },
    mounted() {
      console.log('Work Loaded', this.workData);
    }
  }
</script>

<style scoped>

</style>

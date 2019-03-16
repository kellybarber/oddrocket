<template>
  <SectionWrapper>
    <FilmGrid :films="content.films" />
  </SectionWrapper>
</template>

<script>
  import SectionWrapper from '../wrappers/SectionWrapper';
  import FilmGrid from '../components/FilmGrid';

  export default {
    components : {SectionWrapper, FilmGrid },
    created() {
      this.content = this.$cms.data.work;
    }
  }
</script>

<style scoped>

</style>

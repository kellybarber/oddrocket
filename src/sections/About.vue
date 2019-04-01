<template>
  <SectionWrapper>

  </SectionWrapper>
</template>

<script>
  import SectionWrapper from '../wrappers/SectionWrapper';
  import AboutSlice     from '../components/AboutSlice';

  export default {
    components : { SectionWrapper },
    created() {
      this.content = this.$cms.data.about;
      console.log(this.content);
    }
  }
</script>

<style scoped>

</style>
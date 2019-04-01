<template>
  <SectionWrapper>
    <AboutSlice
      v-for="(entry, index) in content"
      :key="index"
      :entry="entry"
      :position="index % 2 === 0 ? 'left' : 'right'"
      class="about-slice"
    />
  </SectionWrapper>
</template>

<script>
  import SectionWrapper from 'Wrappers/SectionWrapper';
  import AboutSlice     from 'Components/AboutSlice';

  export default {
    components : { SectionWrapper, AboutSlice },
    created() {
      this.content = this.$cms.data.about;
    }
  }
</script>

<style scoped>
  .about-slice:first-child {
    margin-top: 10rem;
  }
</style>
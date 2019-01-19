<template>
  <div class="work">
    <h1>Work</h1>
  </div>
</template>

<script>
  export default {
    name       : 'Work',
    components : {},
    data() {
      return {}
    },
    computed : {
      workData() {
        return this.$cms.getPageData('work');
      }
    },
    mounted() {
      console.log('Work Loaded', this.workData);
    }
  }
</script>

<style scoped>

</style>

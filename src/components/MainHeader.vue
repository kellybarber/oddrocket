<template>
  <div class="main-header">
    <h1>Main Header</h1>
  </div>
</template>

<script>
  export default {
    name       : 'MainHeader',
    components : {},
    data() {
      return {}
    },
    computed : {
      headerData() {
        return this.$cms.getEntryByType('mainHeader')
      }
    },
    mounted() {
      console.log('Header Loaded', this.headerData);
    }
  }
</script>

<style>

</style>

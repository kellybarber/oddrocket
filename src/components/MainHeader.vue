<template>
  <div class="main-header">
    <button>Nav</button>
    <ImageLoader
      :src-prop="logo"
      class-prop="header-logo"
    />
  </div>
</template>

<script>
  import ImageLoader from './ImageLoader';

  export default {
    name       : 'MainHeader',
    components : { ImageLoader },
    data() {
      return {}
    },
    computed : {
      headerData() {
        return this.$cms.getEntryByType('mainHeader')
      },
      logo() {
        const { logo } = this.headerData;
        return logo ? logo.fields.file.url : '';
      }
    },
    mounted() {
      console.log('Header Loaded', this.headerData);
    }
  }
</script>

<style scoped>
  .header-logo {
    width: 100px;
  }
</style>

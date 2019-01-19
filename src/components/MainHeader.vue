<template>
  <div class="main-header">
    <button
      class="nav-toggle"
    >Nav</button>
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
      // console.log('Header Loaded', this.headerData);
    }
  }
</script>

<style scoped>
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
  }
  .nav-toggle {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  .header-logo {
    width: 16rem;
  }
</style>

<template>
  <div class="main-header">
    <button
      class="nav-toggle"
    >
      Nav
    </button>
    <router-link to="/">
      <ImageLoader
        :src-prop="logo"
        class-prop="header-logo"
      />
    </router-link>
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
      logo() {
        const { logoLight } = this.content;
        return logoLight ? logoLight.file.url : '';
      }
    },
    created() {
      this.content = this.$cms.data.mainHeader;
    }
  }
</script>

<style scoped>
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 3rem 1.6rem 5rem;
    background-color: var(--off-black);
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

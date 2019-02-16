<template>
  <div :class="['main-header', `${$route.name}`]">
    <button
      class="nav-toggle"
      @click="$emit('toggleNavigation')"
    >
      Nav
    </button>
    <router-link to="/">
      <ImageLoader
        :src-prop="content.logoLight.file.url"
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
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    width: 100%;
    background-color: var(--off-black);
  }
  .home {
    background: none;
  }

  .nav-toggle {
    height: 5rem;
    width: 5rem;
    margin-left: 5rem;
    border-radius: 50%;
    z-index: 6;
  }
  .header-logo {
    width: 16rem;
    margin-right: 5rem;
  }
</style>

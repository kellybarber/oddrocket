<template>
  <header :class="['main-header', $route.name, { 'nav-mini' : isScrolled }]">
    <button
      class="nav-toggle"
      @click="$emit('toggleNavigation')"
    >
      Nav
    </button>
    <router-link to="/" class="nav-link">
      <ImageLoader
        :src-prop="content.logoDark.file.url"
        class="header-logo"
      />
    </router-link>
  </header>
</template>

<script>
  import ImageLoader from './ImageLoader';

  export default {
    name       : 'MainHeader',
    components : { ImageLoader },
    props      : {
      isScrolled : {
        type     : Boolean,
        required : true
      }
    },
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
    position: fixed;
    height: var(--header-height);
    width: 100%;
  }

  .home {
    display: none;
    background-color: transparent;
  }

  .nav-toggle {
    height: 5rem;
    width: 5rem;
    margin: 2rem 0 0 5rem;
    border-radius: 50%;
    outline: none;
    z-index: 6;
  }

  .nav-link {
    z-index: 6;
  }
  .header-logo {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 40rem;
    transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
    /*transition: right .8s, top .8s, width .8s, height .8s;*/
  }

  .nav-mini > .nav-link > .header-logo {
    top: 1rem;
    right: 2rem;
    width: 12rem;
    height: 6rem;
    transform: none;
    /*transition: right 1s, top 1s, width 1.4s;*/
  }

</style>

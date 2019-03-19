<template>
  <header :class="['main-header', $route.name, { 'nav-mini' : isNavMini }]">
    <router-link to="/" class="nav-link">
      <ImageLoader
        :src-prop="content.logoDark.file.url"
        class="header-logo"
      />
    </router-link>
  </header>
</template>

<script>
  import ImageLoader  from './ImageLoader';
  import { EventBus } from "../utils/EventBus";

  export default {
    name       : 'MainHeader',
    components : { ImageLoader },
    props      : {
      isNavMini : {
        type     : Boolean,
        required : true
      }
    },
    created() {
      this.content = this.$cms.data.mainHeader;
    },
    computed : {
      logo() {
        const { logoLight } = this.content;
        return logoLight ? logoLight.file.url : '';
      }
    },
    methods : {
      toggleNavigation() {
        EventBus.$emit('toggleNavigation');
      }
    }
  }
</script>

<style scoped>
  .main-header {
    position: fixed;
    height: var(--header-height);
    width: 100%;
  }
  .film {
    position: absolute;
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
    transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .nav-mini {
    height: var(--header-collapsed);
    transition: height 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .nav-mini > .nav-link > .header-logo {
    top: 1rem;
    right: 2rem;
    width: 12rem;
    height: 6rem;
    transform: none;
  }

</style>

<template>
  <div class="section-wrapper">
    <MainHeader :is-nav-mini="isNavMini"/>
    <slot name="nav-extension"></slot>
    <section :class="['section', { 'section__scrolled' : isNavMini }]">
      <slot></slot>
    </section>
  </div>
</template>

<script>
  import MainHeader from '../components/MainHeader';

  export default {
    components : { MainHeader },
    data() {
      return {
        isScrolled : false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    computed : {
      isNavMini() {
        const miniNavRoute = this.$route.name === 'film';
        if (this.$route.name === 'contact') return false;
        return this.isScrolled || miniNavRoute;
      }
    },
    methods : {
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      }
    }
  }
</script>

<style scoped>
  .section-wrapper {
    min-height: 110vh;
  }

  .section {
    padding-top: var(--header-height);
    transition: padding 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .section__scrolled {
    padding-top: var(--header-collapsed);
  }
</style>
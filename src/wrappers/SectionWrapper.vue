<template>
  <div class="section-wrapper">
    <MainHeader :isScrolled="isScrolled"/>
    <slot name="nav-extension"></slot>
    <section :class="['section', { 'section__scrolled' : isScrolled }]">
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
    methods : {
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      }
    }
  }
</script>

<style scoped>
  .section-wrapper {
    height: 120vh;
  }

  .section {
    padding-top: var(--header-height);
    transition: padding 0.6s ease-in;
  }
  .section__scrolled {
    padding-top: var(--header-collapsed);
    transition: padding 0.6s ease-in;
  }
</style>
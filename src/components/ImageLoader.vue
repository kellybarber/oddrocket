<template>
  <transition name='fade'>
    <img
      v-show="isLoaded"
      :src="srcProp"
      :class="['image', classProp]"
      @load="onImageLoad"
    >
  </transition>
</template>

<script>
  export default {
    name       : 'Home',
    components : {},
    props : {
      srcProp   : { type : String, default : '' },
      classProp : { type : String, default : '' }
    },
    data() {
      return { isLoaded: false }
    },
    methods : {
      onImageLoad() { this.isLoaded = true; }
    }
  }
</script>

<style scoped>
  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 1s ease-in-out;
  }
</style>

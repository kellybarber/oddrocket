<template>
  <div :class="classProp">
    <transition name='fade'>
      <img
        v-show="isLoaded"
        :src="srcProp"
        :style="{ 'object-fit' : size }"
        class="image"
        @load="onImageLoad"
      >
    </transition>
  </div>
</template>

<script>
  export default {
    name       : 'Home',
    components : {},
    props : {
      srcProp   : { type : String, default : '' },
      classProp : { type : String, default : '' },
      size      : { type : String, default : 'contain' }
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
    height: 100%;
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

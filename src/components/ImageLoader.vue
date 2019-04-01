<template>
  <transition appear name='fade'>
    <img
      v-show="isLoaded"
      :src="srcProp"
      :style="{ 'object-fit' : size }"
      class="image"
      @load="onImageLoad"
    >
  </transition>
</template>

<script>
  export default {
    props : {
      srcProp : { type : String, default : '' },
      size    : { type : String, default : 'contain' }
    },
    data() {
      return { isLoaded: false }
    },
    methods : {
      onImageLoad() {
        this.isLoaded = true;
      }
    }
  }
</script>

<style scoped>
  .image {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

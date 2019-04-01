<template>
  <div class="form-wrapper">
    <slot></slot>
    <ImageLoader
      :src-prop="image.file.url"
      class="form-image"
    />
  </div>
</template>

<script>
  import ImageLoader from 'Components/ImageLoader';

  export default {
    components : { ImageLoader },
    created() {
      this.image = this.$cms.data.contact.formImage;
    }
  }
</script>

<style scoped>
  .form-wrapper {
    display: flex;
  }
  .form-image {
    width: 50%;
  }
</style>
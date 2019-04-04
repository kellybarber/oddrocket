<template>
  <div class="form-wrapper">
    <slot></slot>
    <div class="image-container">
      <ImageLoader
        :src-prop="image.file.url"
        size="cover"
        class="form-image"
      />
    </div>
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
    flex-wrap: wrap;
  }
  .image-container {
    flex: 1 1 40rem;
  }
  .form-image {
    width: 100%;
  }
</style>
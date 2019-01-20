<template>
  <div class="film-grid__card">
    <ImageLoader
      :src-prop="hero"
      size="cover"
      class-prop="card-image"
    />
  </div>
</template>

<script>
  import ImageLoader from './ImageLoader';

  export default {
    name       : 'FilmGridCard',
    components : { ImageLoader },
    props : {
      film : { type: Object, default: {} }
    },
    data() {
      return {}
    },
    computed : {
      hero() {
        const { heroImage } = this.film;
        return heroImage ? heroImage.fields.file.url : '';
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

  .film-grid__card {
    height: 100%;
    max-width: 50rem;
  }
  .card-image {
    height: 100%;
  }

</style>

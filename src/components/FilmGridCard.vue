<template>
  <div class="film-grid__card">
    <ImageLoader
      :src-prop="hero"
      size="cover"
      class-prop="card-image"
    />
    <div class="card-overlay">

    </div>
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
      console.log(this.film);
    }
  }
</script>

<style scoped>

  .film-grid__card {
    position: relative;
    height: 100%;
    /*max-width: 80rem;*/
    overflow: hidden;
    cursor: pointer;
  }
  .card-image {
    height: 100%;
  }
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--black-rgba), 0.6);
    z-index: var(--film-card-overlay);

    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .film-grid__card:hover > .card-overlay {
    transform: translateY(0px);
  }

</style>

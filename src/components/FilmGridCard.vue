<template>
  <div class="film-grid__card">
    <ImageLoader
      :src-prop="hero"
      size="cover"
      class-prop="card-image"
    />
    <div class="card-overlay">
      <h2 class="btn-standard">{{ film.title }}</h2>
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

  .film-grid__card:hover > .card-overlay {
    transform: translateY(0px);
  }
  .film-grid__card:hover > .card-overlay > h2 {
    opacity: 1;
    transition: opacity 0.2s ease 0.3s;
  }
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--black-rgba), 0.6);
    z-index: var(--film-card-overlay);

    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .card-overlay > h2 {
    font-size: 2rem;
    color: var(--white);
    opacity: 0;
    transition: opacity 0.2s ease;
  }



</style>

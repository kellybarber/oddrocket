<template>
  <div class="film-grid__card">
    <ImageLoader
      :src-prop="hero"
      size="cover"
      class="card-image"
    />
    <router-link :to="{ name: 'film', params: { id: film.id }}" class="card-overlay">
      <span class="card-title btn-standard">
        {{ film.title }}
      </span>
    </router-link>
  </div>
</template>

<script>
  import ImageLoader from './ImageLoader';
  import { mapMutations } from 'vuex';

  export default {
    name       : 'FilmGridCard',
    components : { ImageLoader },
    props : {
      film : { type: Object, default: {} }
    },
    computed : {
      hero() {
        const { heroImage } = this.film;
        return heroImage ? heroImage.fields.file.url : '';
      }
    },
    methods : {
      ...mapMutations([
        'setOverlay'
      ]),
    }
  }
</script>

<style scoped>

  .film-grid__card {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .card-image {
    height: 100%;
  }

  .film-grid__card:hover > .card-overlay {
    transform: translateY(0px);
  }
  .film-grid__card:hover > .card-overlay > .card-title {
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
    padding: 0;
    background-color: rgba(var(--black-rgba), 0.6);
    border: none;
    text-decoration: none;
    z-index: var(--film-card-overlay);
    cursor: pointer;

    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .card-overlay:hover > .card-title::after {
    width: 100%;
    background-color: var(--white);
  }

  .card-title {
    font-size: 2rem;
    color: var(--white);
    opacity: 0;
    transition: opacity 0.2s ease;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }



</style>

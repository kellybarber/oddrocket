<template>
  <div class="film-overlay">
    <ImageLoader
      :src-prop="filmData.heroImage.fields.file.url"
      size="fill"
      class-prop="film-overlay__image"
    />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import ImageLoader from './ImageLoader';

  export default {
    name       : 'FilmOverlay',
    components : { ImageLoader },
    data() {
      return {}
    },
    computed : {
      ...mapState({
        filmData : state => state.filmOverlay.filmData
      })
    },
    mounted() {
    },
    methods : {
      ...mapMutations([
        'unsetOverlay'
      ])
    }
  }
</script>

<style scoped>

  .film-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
  }
  .film-overlay__image {
    height: 60vh;
  }

</style>

<template>
  <div class="film-overlay">
    <VideoPlayer
      :video-url="filmData.videoLink"
    />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import VideoPlayer from "./VideoPlayer";
  import ImageLoader from './ImageLoader';

  export default {
    name       : 'FilmOverlay',
    components : {VideoPlayer, ImageLoader },
    data() {
      return {}
    },
    computed : {
      ...mapState({
        filmData : state => state.filmOverlay.filmData
      })
    },
    mounted() {
      // console.log(this.filmData);
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

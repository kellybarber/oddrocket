<template>
  <div class="film-overlay">
    <h1>Overlay</h1>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name       : 'FilmOverlay',
    components : {},
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

</style>

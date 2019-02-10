<template>
  <div class="film">
    <VideoPlayer :video-url="filmData.videoLink" />
    <div ref="filmCopy" class="film-copy">
      <h1>{{ filmData.title }}</h1>
      <h2>{{ filmData.description }}</h2>
      <h3>Director: {{ filmData.directors }}</h3>
      <h3>Writers: {{ filmData.writers }}</h3>
      <p>{{ filmData.mainText }}</p>
    </div>
  </div>
</template>

<script>
  import VideoPlayer from "../components/VideoPlayer";
  import observer from '../helpers/observer';

  export default {
    components : { VideoPlayer },
    computed : {
      filmData() {
        return this.$cms.getData('film').filter(film => (
          film.id === this.$route.params.id
        ))[0];
      }
    },
    mounted() {
      const { children : { length, ...nodes }} = this.$refs.filmCopy;
      observer(nodes);
    }
  }
</script>

<style scoped>

  .film-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 10%;

    height: 500px;
    justify-content: space-around;
  }

  p {
    columns: 2;
  }

</style>

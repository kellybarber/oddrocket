<template>
  <div class="film">
    <div class="video-wrapper">
      <VideoPlayer :video-url="filmData.videoLink" />
    </div>
    <div ref="filmCopy" class="copy-wrapper">
      <h1 class="title">{{ filmData.title }}</h1>
      <h2 class="description">{{ filmData.description }}</h2>
      <h3 class="directors">Director: {{ filmData.directors }}</h3>
      <h3 class="writers">Writers: {{ filmData.writers }}</h3>
      <p class="copy">{{ filmData.mainText }}</p>
      <div class="sidebar"></div>
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

  .video-wrapper {
    padding: 0 12%;
    background-color: var(--black);
  }

  .copy-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 10%;

    height: 500px;
    justify-content: space-around;
  }

  .title {
    font-size: 12rem;
    font-weight: 100;
    text-align: center;
    margin-bottom: 5rem;
  }

  .description {
    margin-bottom: 0;
  }

  .copy {
    columns: 2;
  }

  .sidebar{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 12%;
    background-color: var(--light-blue);
  }

</style>

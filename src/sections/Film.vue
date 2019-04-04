<template>
  <SectionWrapper class="film">
    <div ref="videoWrapper" class="video-wrapper">
      <VideoPlayer :video-url="filmData.videoLink" />
    </div>

      <div ref="copyContainer" class="copy-container">
        <h1 class="title">{{ filmData.title }}</h1>
        <h2 class="description">{{ filmData.description }}</h2>
        <h3 class="directors">Director: {{ filmData.directors }}</h3>
        <!--<h3 class="writers">Writers: {{ filmData.writers }}</h3>-->
        <p class="main-copy">{{ filmData.mainText }}</p>
      </div>

      <div class="sidebar"></div>
      <div class="footer"></div>

  </SectionWrapper>
</template>

<script>
  import SectionWrapper from '../wrappers/SectionWrapper';
  import VideoPlayer from "../components/VideoPlayer";
  import observer from '../helpers/observer';
  import { slideUpInText } from "../helpers/animations";

  export default {
    components : { SectionWrapper, VideoPlayer },
    mounted() {
      const nodes = Object.values(this.$refs.copyContainer.children);
      observer(nodes, slideUpInText);
    },
    computed : {
      filmData() {
        return this.$cms.getData('film').filter(film => (
          film.id === this.$route.params.id
        ))[0];
      }
    },
    methods : {
    }
  }
</script>

<style scoped>

  .video-wrapper {
    padding: 0 10%;
    background-color: var(--black);
  }

  .copy-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10% 4%;
    background-color: var(--white);
  }

  .title {
    text-align: center;
    margin: 18rem 0 8rem;
  }
  .description {
    margin-bottom: 1rem;
  }
  .main-copy {
    columns: 10rem 2;
    column-gap: 16%;
    column-rule: 1px solid lightgray;
    width: 80%;
    margin: 17rem 0 24rem;
  }

</style>

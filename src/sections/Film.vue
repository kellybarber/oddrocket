<template>
  <div class="film">
    <div class="video-wrapper">
      <VideoPlayer :video-url="filmData.videoLink" />
    </div>
    <div class="content-wrapper">
      <div class="copy-container">
        <h1 class="title copy">{{ filmData.title }}</h1>
        <h2 class="description copy">{{ filmData.description }}</h2>
        <h3 class="directors, copy">Director: {{ filmData.directors }}</h3>
        <!--<h3 class="writers">Writers: {{ filmData.writers }}</h3>-->
        <p class="main-copy copy">{{ filmData.mainText }}</p>
      </div>

      <div class="sidebar"></div>
      <div class="footer"></div>
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
      const nodes = document.getElementsByClassName('copy');
      observer(nodes);
    }
  }
</script>

<style scoped>

  .video-wrapper {
    padding: 0 12%;
    background-color: var(--black);
  }

  .content-wrapper {
    padding: 0 12% 4%;
    background-color: var(--black);
  }
  .copy-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
  }

  .title {
    text-align: center;
    margin: 18rem 0 10rem;
  }
  .description {
    margin-bottom: 1rem;
  }
  .main-copy {
    columns: 10rem 2;
    column-gap: 16%;
    column-rule: 1px solid lightgray;
    width: 80%;
    margin: 18rem 0 28rem;
  }

  .copy {
    opacity: 0;
  }
  .slide-in {
    opacity: 1;
    animation: slideIn 0.8s ease-out;
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(8rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /*.sidebar{*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*height: 100%;*/
    /*width: 12%;*/
    /*background-color: var(--light-blue);*/
    /*z-index: 2;*/
  /*}*/
  /*.footer {*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*height: 0;*/
    /*width: 100%;*/
    /*padding-top: 4%;*/
    /*background-color: var(--light-blue);*/
  /*}*/

</style>

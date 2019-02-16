<template>
  <div class="video-player">
    <transition appear name='fade'>
      <iframe
        v-show="isLoaded"
        :src="videoLink"
        @load="onVideoLoad"
      ></iframe>
    </transition>
  </div>
</template>

<script>
  export default {
    props : {
      videoUrl : {
        type     : String,
        required : true
      }
    },
    data() {
      return {
        videoLink : '',
        isLoaded  : false
      }
    },
    async mounted() {
      this.videoLink = await this.getVideoLink();
      console.log(this.videoUrl);
    },
    methods : {
      async getVideoLink() {
        if ((/vimeo/g).test(this.videoUrl)) {
          const response = await fetch(`https://vimeo.com/api/oembed.json?url=${this.videoUrl}`);
          const data     = await response.json();
          return data.html.match(/src="(.*?)"(?:.*)/)[1];
        }
        if ((/youtube/g).test(this.videoUrl)) {
          const videoId = this.videoUrl.match(/v=(.*)/)[1];
          return `http://www.youtube.com/embed/${videoId}`;
        }
      },
      onVideoLoad() {
        this.isLoaded = true;
      },
    }
  }
</script>

<style scoped>

  .video-player {
    position: relative;
    padding-top: 56.25%; /* 16:9 */
    overflow: hidden;
  }
  .video-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

</style>

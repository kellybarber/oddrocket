<template>
  <div class="video-player">
    <transition name='fade'>
      <iframe
        v-show="isLoaded"
        :src="videoLink"
        frameborder="0"
        allowfullscreen
        @load="onImageLoad"
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
        videoLink: '',
        isLoaded : false
      }
    },
    async mounted() {
      this.videoLink = await this.getVideoLink();
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
      onImageLoad() { this.isLoaded = true }
    }
  }
</script>

<style scoped>

</style>

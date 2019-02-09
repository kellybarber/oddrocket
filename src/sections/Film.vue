<template>
  <div class="film">
  </div>
</template>

<script>
  import VideoPlayer from "../components/VideoPlayer";

  export default {
    components : { VideoPlayer },
    data() {
      return {}
    },
    mounted() {
      console.log(this.$route);
    }
  }
</script>

<style scoped>

</style>

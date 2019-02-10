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
      console.log(this.$cms.getData('film'));
    }
  }
</script>

<style scoped>

</style>

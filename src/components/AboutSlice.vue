<template>
  <div ref="aboutWrapper" :class="['about-wrapper', position]">
    <ImageLoader
      :src-prop="entry.headshot.file.url"
      size="cover"
      class="headshot"
    />
    <div class="text-wrapper">
      <h2 class="name">{{ entry.name }}</h2>
      <p class="bio">{{ entry.bio }}</p>
    </div>
  </div>
</template>

<script>
  import ImageLoader     from "./ImageLoader";
  import { observer }    from 'Helpers/observer';
  import { TimelineMax } from 'gsap';

  export default {
    components : { ImageLoader },
    props : {
      entry    : { type : Object, required : true },
      position : { type : String, required : true }
    },
    mounted() {
      observer(this.$refs.aboutWrapper);
    },
    methods : {

    }
  }
</script>

<style scoped>
  .about-wrapper {
    display: flex;
    height: 45vw;
    width: 60vw;
    margin: 0 auto 20rem;
  }
  .right {
    flex-direction: row-reverse;
  }
  .right > .text-wrapper {
    padding-left: 0;
  }
  .left > .text-wrapper{
    padding-right: 0;
  }

  .headshot {
    width: 50%;
  }

  .text-wrapper {
    padding: 4rem 5rem 0;
  }
  .name {
    margin-bottom: 5rem;
    font-weight: 100;
    font-size: 4rem;
  }
  .bio {
    width: 65%;
  }


</style>
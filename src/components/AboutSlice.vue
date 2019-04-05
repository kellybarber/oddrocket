<template>
  <div ref="aboutWrapper" :class="['about-wrapper', position]">
    <div class="image-wrapper">
      <ImageLoader
        ref="aboutImage"
        :src-prop="entry.headshot.file.url"
        size="cover"
        class="headshot"
      />
    </div>
    <div class="text-wrapper">
      <h2 ref="aboutName" class="name">{{ entry.name }}</h2>
      <p ref="aboutBio" class="bio">{{ entry.bio }}</p>
    </div>
  </div>
</template>

<script>
  import ImageLoader     from "./ImageLoader";
  import { observer }    from 'Helpers/observer';
  import { TimelineMax } from 'gsap';
  import {
    slideUpIn
  } from 'Helpers/animations';

  export default {
    components : { ImageLoader },
    props : {
      entry    : { type : Object, required : true },
      position : { type : String, required : true }
    },
    mounted() {
      this.timeline = new TimelineMax({ paused : true });
      this.loadTimeline();
      observer(this.$refs.aboutWrapper, this.animateInSlice);
    },
    methods : {
      animateInSlice() {
        this.timeline.play()
      },
      loadTimeline() {
        const { aboutImage, aboutName, aboutBio } = this.$refs;

        this.timeline
          .fromTo(aboutImage.$el, 1.8, { autoAlpha : 0, yPercent : 30 }, {
            autoAlpha : 1,
            yPercent  : 0,
            ease      : Expo.easeOut
          })
          .fromTo(aboutName, 1.5, { autoAlpha : 0, xPercent : -30 }, {
            autoAlpha : 1,
            xPercent  : 0,
            ease      : Expo.easeOut
          }, '-=1')
          .fromTo(aboutBio, 1.5, { autoAlpha : 0, xPercent : -30 }, {
            autoAlpha : 1,
            xPercent  : 0,
            ease      : Expo.easeOut
          }, '-=0.8')
      }
    }
  }
</script>

<style scoped>
  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    min-height: 45vw;
    width: 60%;
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

  .image-wrapper {
    flex: 1 1 28rem;
  }
  .headshot {
    width: 100%;
  }

  .text-wrapper {
    flex: 1 1 28rem;
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
<template>
  <div id="home" class="section home">
    <div class="content-wrapper">
      <div ref="content" class="content-container">
        <ImageLoader
          :src-prop="content.logo.file.url"
          class="logo"
        />
        <!--<router-link-->
          <!--to="work"-->
          <!--id="our-work-button"-->
          <!--class="nav-button"-->
        <!--&gt;-->
          <!--Our Work-->
        <!--</router-link>-->
        <button
          id="our-work-button"
          class="nav-button"
          @click="goToPage"
        >
          Our Work
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { starField } from "../sketches";
  import { TweenMax }  from 'gsap';
  import ImageLoader   from '../components/ImageLoader';

  export default {
    components : { ImageLoader },
    created() {
      this.content = this.$cms.data.home;
    },
    mounted() {
      this.p5 = new window.p5(starField);
      this.animateIn();

    },
    destroyed() {
      this.p5.remove();
    },
    methods : {
      goToPage() {
        this.animateOut();
        setTimeout(() => this.$router.push({ name : 'work' }), 1400);
      },
      animateIn() {
        const { content } = this.$refs;

        TweenMax.fromTo(content, 1.6, { autoAlpha : 0, scale : 0.75 }, {
          autoAlpha : 1,
          scale     : 1,
        })
      },
      animateOut() {
        const { content } = this.$refs;

        TweenMax.to(content, 1.3, {
          scale     : 2,
          autoAlpha : 0,
          ease      : Expo.easeIn
        })
      }
    }
  }
</script>

<style scoped>

  .home {
    height: 100%;
    width: 100%;
    padding: 0;
    background-color: var(--black);
  }

  .content-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    text-align: center;
  }

  .logo {
    margin: 0 auto 6rem;
  }
  .heading {
    margin: 0 auto 4rem;
    font-size: 1.8rem;
  }

  .nav-button {
    position: relative;
    width: 20rem;
    font-size: 1.6rem;
    text-align: center;
    padding: 2rem 4rem;
    text-decoration: none;
    color: var(--white);
    border: 1px solid var(--white);
    cursor: pointer;
    outline: none;
    background-color: transparent;

    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, transparent 50%, white 50%);
    background-repeat: no-repeat;
    transition: background-position 0.3s cubic-bezier(0.86, 0, 0.07, 1), color 0.4s 0.1s;
  }

  .nav-button:hover {
    background-position: 0 100%;
    color: black;
  }


</style>

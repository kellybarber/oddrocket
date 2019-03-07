<template>
  <div id="home" class="section home">
    <div class="content-wrapper">
      <div class="content-container">
        <ImageLoader
          :src-prop="content.logo.file.url"
          class="logo"
        />
        <!--<h1 class="heading">{{ content.heading }}</h1>-->
        <router-link
          to="work"
          id="our-work-button"
          class="nav-button"
        >
          Our Work
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { starField } from "../sketches";
  import ImageLoader from '../components/ImageLoader';

  export default {
    components : { ImageLoader },
    created() {
      this.content = this.$cms.data.home;
    },
    mounted() {
      this.p5 = new window.p5(starField);
    },
    destroyed() {
      this.p5.remove();
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
    max-width: 10rem;
    font-size: 1.6rem;
    text-align: center;
    padding: 2rem 6rem;
    text-decoration: none;
    color: var(--white);
    border: 1px solid var(--white);

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

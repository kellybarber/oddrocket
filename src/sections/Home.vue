<template>
  <div id="home" class="section home">
    <div class="content-wrapper">
      <h1 class="heading">{{ content.heading }}</h1>
      <h3 class="subheading">{{ content.subheading }}</h3>
      <router-link
        to="work"
        class="nav-button"
      >Our Work</router-link>
    </div>
  </div>
</template>

<script>
  import { starField } from "../sketches";

  export default {
    created() {
      this.content = this.$cms.data.home;
    },
    mounted() {
      this.p5 = new window.p5(starField);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 56%;
    color: var(--white);
  }
  .heading {
    font-size: 6.4rem;
    margin-bottom: 3rem;
  }
  .subheading {
    font-size: 1.6rem;
    width: 80%;
    margin-bottom: 3rem;
  }
  .nav-button {
    width: 10%;
    font-size: 1.6rem;
    text-align: center;
    padding: 1rem 3rem;
    background-color: var(--white);
    border-radius: 40px;
    text-decoration: none;
    color: var(--black);
  }

</style>

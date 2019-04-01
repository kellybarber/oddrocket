<template>
  <div class="form-container">
    <h2 class="heading">{{ content.heading }}</h2>
    <p class="subheading">{{ content.subheading }}</p>
    <form class="form">
      <input class="form-input" v-model="name">
      <input class="form-input" v-model="email">
      <textarea class="form-textarea" v-model="message"/>
    </form>
  </div>
</template>

<script>
  export default {
    props : {
      content : { type : Object, required : true }
    },
    data() {
      return {
        name    : '',
        email   : '',
        message : ''
      }
    }
  }
</script>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-top: 4rem;
  }
  .heading {
    font-weight: 200;
  }
  .subheading {

  }

  .form {

  }
  .form-input {

  }
  .form-textarea {

  }
</style>
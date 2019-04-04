<template>
  <div class="form-container">
    <h2 class="heading">{{ content.heading }}</h2>
    <p class="subheading">{{ content.subheading }}</p>
    <form class="form" @submit="onSubmit">
      <input class="form-input" placeholder="Name" v-model="name">
      <input class="form-input" placeholder="Email" v-model="email">
      <textarea class="form-textarea" placeholder="Message" v-model="message"/>
      <button class="form-submit" type="submit"></button>
    </form>
  </div>
</template>

<script>
  import { post } from 'Helpers/requests';

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
    },
    methods : {
      async onSubmit(e) {
        e.preventDefault();

        const data = await post('/api/contact', {
          name    : this.name,
          email   : this.email,
          message : this.message
        });

        console.log(data);
      }
    }
  }
</script>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 40rem;
    padding: 5vw 0;
  }
  .heading {
    font-weight: 200;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .subheading {
    width: 30rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 1.5rem;
    border: 1px solid black;
    font-family: inherit;
    color: var(--black);
    font-weight: 400;
    outline: none;
  }
  .form-input {
    margin-bottom: 2rem;
  }
  .form-textarea {
    height: 10rem;
    margin-bottom: 4rem;
  }
  .form-input::placeholder,
  .form-textarea::placeholder {
    font-family: inherit;
    color: var(--black);
    font-weight: 200;
  }

  .form-submit {
    height: 5rem;
    width: 5rem;
    border: 1px solid var(--black);
    border-radius: 50%;
    outline: none;
    background: none;
    cursor: pointer;
  }
</style>
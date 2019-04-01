<template>
  <SectionWrapper>
    <FormWrapper>
      <ContactForm :content="content" />
    </FormWrapper>
  </SectionWrapper>
</template>

<script>
  import SectionWrapper from 'Wrappers/SectionWrapper';
  import FormWrapper    from 'Wrappers/FormWrapper';
  import ContactForm    from 'Components/ContactForm';

  export default {
    components : { SectionWrapper, FormWrapper, ContactForm },
    created() {
      this.content = this.$cms.data.contact;
      console.log(this.content);
    }
  }
</script>

<style scoped>

</style>

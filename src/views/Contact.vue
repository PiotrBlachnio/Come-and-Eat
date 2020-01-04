<template>
  <div class="about">
    <Nav v-bind:current='current' />
    <Introduction />
    <Form />
    <!-- <Footer v-bind:current='current'/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Introduction from '../components/contact/Introduction.vue';
import Form from '../components/contact/Form.vue';

export default {
  name: 'about',
  components: {
    Nav,
    Footer,
    Introduction,
    Form,
  },
  data() {
    return {
      current: 'contact'
    }
  },
};
</script>

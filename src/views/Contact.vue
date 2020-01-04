<template>
  <div class="about">
    <Nav v-bind:current='current' />
    <Introduction />
    <!-- <Footer v-bind:current='current'/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Introduction from '../components/contact/Introduction.vue';

export default {
  name: 'about',
  components: {
    Nav,
    Footer,
    Introduction,
  },
  data() {
    return {
      current: 'contact'
    }
  },
};
</script>

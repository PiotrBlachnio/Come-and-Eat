<template>
  <div>
    <Nav v-bind:current='current' />
    <Footer v-bind:current='current'/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'menu',
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      current: 'gallery'
    }
  },
};
</script>

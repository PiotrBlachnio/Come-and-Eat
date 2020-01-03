<template>
  <div>
    <Nav v-bind:current='current' />
    <Dishes />
    <!-- <Footer v-bind:current='current'/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Dishes from '../components/menu/Dishes.vue';

export default {
  name: 'menu',
  components: {
    Nav,
    Footer,
    Dishes,
  },
  data() {
    return {
      current: 'menu'
    }
  },
};
</script>

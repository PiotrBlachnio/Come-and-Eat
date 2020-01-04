<template>
  <div>
    <Nav v-bind:current='current' />
    <Photos />
    <!-- <Footer v-bind:current='current'/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Photos from '../components/gallery/Photos.vue';

export default {
  name: 'menu',
  components: {
    Nav,
    Footer,
    Photos,
  },
  data() {
    return {
      current: 'gallery'
    }
  },
};
</script>

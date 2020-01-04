<template>
  <div>
    <Nav v-bind:current='current' />
    <Photos />
    <Welcome />
    <Banner />
    <Footer v-bind:current='current'/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Photos from '../components/gallery/Photos.vue';
import Welcome from '../components/Welcome.vue';
import Banner from '../components/gallery/Banner.vue';

export default {
  name: 'menu',
  components: {
    Nav,
    Footer,
    Photos,
    Welcome,
    Banner,
  },
  data() {
    return {
      current: 'gallery'
    }
  },
};
</script>

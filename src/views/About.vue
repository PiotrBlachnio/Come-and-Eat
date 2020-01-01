<template>
  <div class="about">
    <Nav v-bind:current='current' />
    <Description />
    <Counter />
    <!-- <Footer v-bind:current='current'/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Description from '../components/about/Description.vue';
import Counter from '../components/about/Counter.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'about',
  components: {
    Nav,
    Description,
    Footer,
    Counter,
  },
  data() {
    return {
      current: 'about'
    }
  },
};
</script>

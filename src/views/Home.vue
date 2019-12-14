<template>
  <div class="home">
    <Nav v-bind:current='current' />
    <Slider />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Slider from '../components/Slider.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Slider
  },
  data() {
    return {
      current: 'home'
    }
  },
};
</script>

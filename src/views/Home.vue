<template>
  <div class="home">
    <Nav v-bind:current='current' />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'home',
  components: {
    Nav,
  },
  data() {
    return {
      current: 'home'
    }
  },
};
</script>

<template>
  <div class="about">
    <Nav v-bind:current='current' />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'about',
  components: {
    Nav,
  },
  data() {
    return {
      current: 'about'
    }
  },
};
</script>

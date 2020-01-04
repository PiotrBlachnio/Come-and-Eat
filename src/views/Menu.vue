<template>
  <div>
    <Nav v-bind:current='current' />
    <Dishes />
    <SmallMenu />
    <Footer v-bind:current='current'/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Dishes from '../components/menu/Dishes.vue';
import SmallMenu from '../components/menu/SmallMenu.vue';

export default {
  name: 'menu',
  components: {
    Nav,
    Footer,
    Dishes,
    SmallMenu,
  },
  data() {
    return {
      current: 'menu'
    }
  },
};
</script>

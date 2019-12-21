<template>
  <div class="home">
    <Nav v-bind:current='current' />
    <Slider v-bind:current='active_button' v-bind:title='title' v-bind:image = 'image' />
    <Welcome />
    <HomeMenu />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Slider from '../components/Slider.vue';
import Welcome from '../components/Welcome.vue';
import HomeMenu from '../components/HomeMenu.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Slider,
    Welcome,
    HomeMenu,
  },
  data() {
    return {
      current: 'home',
      active_button: '1',
      title: ['Select', 'Delicious', 'Try', 'Special.'],
      image: "url('./background.jpg')",
    }
  },
};
</script>
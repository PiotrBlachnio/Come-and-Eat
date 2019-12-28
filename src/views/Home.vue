<template>
  <div class="home">
    <Nav v-bind:current='current' />
    <Slider v-bind:current='active_button' v-bind:title='title' v-bind:image = 'image' />
    <Introduction />
    <Menu />
    <Gallery />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Slider from '../components/home/Slider.vue';
import Introduction from '../components/home/Introduction.vue';
import Menu from '../components/home/Menu.vue';
import Gallery from '../components/home/Gallery.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Slider,
    Introduction,
    Menu,
    Gallery,
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
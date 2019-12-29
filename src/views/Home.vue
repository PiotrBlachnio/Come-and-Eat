<template>
  <div class="home">
    <Nav v-bind:current='current' />
    <Slider v-bind:current='active_button' v-bind:title='title' v-bind:image = 'image' />
    <Introduction />
    <Menu />
    <Gallery />
    <Reservation />
    <Footer v-bind:current='current_2'/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Slider from '../components/home/Slider.vue';
import Introduction from '../components/home/Introduction.vue';
import Menu from '../components/home/Menu.vue';
import Gallery from '../components/home/Gallery.vue';
import Reservation from '../components/home/Reservation.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Slider,
    Introduction,
    Menu,
    Gallery,
    Reservation,
    Footer,
  },
  data() {
    return {
      current: 'home',
      current_2: 'home',
      active_button: '1',
      title: ['Select', 'Delicious', 'Try', 'Special.'],
      image: "url('./background.jpg')",
    }
  },
};
</script>
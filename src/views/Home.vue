<template>
  <div class="home">
    <Nav v-bind:current='current' />
    <Slider v-bind:current='active_button' v-bind:title='title' v-bind:image = 'image' />
    <Welcome />
    <Menu />
    <Gallery />
    <Reservation />
    <Footer v-bind:current='current'/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Slider from '../components/home/Slider.vue';
import Welcome from '../components/Welcome.vue';
import Menu from '../components/home/Menu.vue';
import Gallery from '../components/home/Gallery.vue';
import Reservation from '../components/home/Reservation.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Slider,
    Welcome,
    Menu,
    Gallery,
    Reservation,
    Footer,
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
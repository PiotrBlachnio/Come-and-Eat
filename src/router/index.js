import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Menu from '../views/Menu.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
  }
];

const router = new VueRouter({
  routes,
});

export default router;

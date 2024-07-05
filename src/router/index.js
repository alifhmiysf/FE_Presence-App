import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutPage from '../views/AboutPage.vue';
import InformaticsDetail from '../views/InformaticsDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/informatic',
    name: 'informatic',
    component: InformaticsDetail
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

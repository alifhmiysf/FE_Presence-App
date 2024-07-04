import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

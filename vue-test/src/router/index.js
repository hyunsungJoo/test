import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import UserLogin from '../components/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

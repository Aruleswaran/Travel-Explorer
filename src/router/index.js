import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import HotelList from '@/views/HotelList.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/hotels', name: 'HotelList', component: HotelList },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

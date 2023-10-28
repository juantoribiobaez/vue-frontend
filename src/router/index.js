// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

/*const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})*/

//console.log(router.currentRoute.value);

export default router
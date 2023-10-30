// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
//import LoginPage from '../views/LoginPage.vue'
//import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  { path: '/home', name: 'home', component: HomePage },
  //{ path: '/login', name: 'login', component: LoginPage },
  //{ path: '/register', name: 'register', component: RegisterPage },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router
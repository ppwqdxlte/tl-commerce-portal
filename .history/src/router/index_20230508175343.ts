/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-06 12:00:11
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-05-08 17:51:27
 * @Description: file content
 */
import { vue } from '@vitejs/plugin-vue';
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TulingMall from '../views/TulingMall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TulingMall
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

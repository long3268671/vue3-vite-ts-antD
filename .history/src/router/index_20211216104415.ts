import { createRouter, createWebHistory } from 'vue-router'
import routers from './config'
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
          path: '/',
          redirect: '/index'
      },
      {
          path: '/index',
          name: 'index',
          component: () => import('../views/Home/index.vue')
      },
    ]
})

export default router
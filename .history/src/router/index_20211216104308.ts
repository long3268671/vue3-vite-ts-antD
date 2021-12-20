import { createRouter, createWebHistory } from 'vue-router'
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
          component: () => import('../views/Home')
      },
    ]
})

export default router

const routers = [
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
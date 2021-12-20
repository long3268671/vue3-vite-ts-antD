import { RouteRecordRaw } from 'vue-router'
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Home/index.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue')
    },
  ]
  export default routers
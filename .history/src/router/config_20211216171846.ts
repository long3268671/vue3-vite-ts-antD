import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/',
        name: 'index',
        component: layout,
        children:[
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/index.vue')
            },
        ]
    },
    
  ]
  export default routers
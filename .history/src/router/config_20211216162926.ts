import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/views/Home/index.vue')
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Home/index.vue'),
        children:[
            {
                path: '',
                name: 'index',
                component: () => import('../views/Home/index.vue'),
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
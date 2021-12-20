import { RouteRecordRaw } from 'vue-router'
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Home/index.vue'),
        children:{
                
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue')
    },
  ]
  export default routers
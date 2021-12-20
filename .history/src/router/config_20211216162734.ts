import { RouteRecordRaw } from 'vue-router'
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Home/index.vue'),
        children:{
            {
                path: '/',
                name: 'index',
                component: () => import('../views/Home/index.vue'),
            },
        }
    },
    
  ]
  export default routers
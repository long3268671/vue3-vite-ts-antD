import { type } from 'os'
import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
type RouterInterface = {
    path:string,
    name:string,
    component:
}
const routers:Array<RouteRecordRaw> = [
   
    {
        path: '/',
        name: 'index',
        component: layout,
        children:[
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/user/index.vue')
            },
        ]
    },
    
  ]
  export default routers
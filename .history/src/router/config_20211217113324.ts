import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
// interface RouterIn {
//     path:string,
//     name:string,
//     component:() => Promise<typeof import("*.vue")>,
//     children?:Array<RouterIn>
// }
 type RouterIn = {
    path:string,
    name:string,
    component:() => Promise<typeof import("*.vue")>,
    children?:Array<RouterIn>
}&RouteRecordRaw
const routers:Array<RouterIn> = [
   
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
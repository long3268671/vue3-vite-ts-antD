import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
// interface RouterIn {
//     path:string,
//     name:string,
//     component:() => Promise<typeof import("*.vue")>,
//     children?:Array<RouterIn>
// }
export type RouterIn = {
    path:string,
    name:string,
    title:string,
    component:() => Promise<>,
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
                title:'首页',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: 'user',
                name: 'user',
                title:'用户',
                component: () => import('@/views/user/index.vue')
            },
        ]
    },
    
  ]
  export default routers
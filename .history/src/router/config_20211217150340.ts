import { RouteRecordRaw } from 'vue-router'
let layout = () => import('@/layout/index.vue')
// interface RouterIn {
//     path:string,
//     name:string,
//     component:() => Promise<typeof import("*.vue")>,
//     children?:Array<RouterIn>
// }
export type RouterIn = {
    title?:string,
}&RouteRecordRaw
const routers:RouterIn[] = [
    {
        path: '/',
        name: 'index',
        component: layout,
        children:[
            {
                path: '/',
                title:'首页',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: 'user',
                title:'首页',
                name: 'user',
                component: () => import('@/views/user/index.vue')
            },
        ]
    },
    
  ]
  export default routers
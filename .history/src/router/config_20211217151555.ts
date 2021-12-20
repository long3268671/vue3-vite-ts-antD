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
} &  RouteRecordRaw 

type type1 = {
    name:string
}
// type type2 =  {
//     age:number
// } & type1
// let result:type2 = {
//     name:'111',
//     age:18
// } 
// console.log(result)
const routers:A = [
    {
        path: '/',
        name: 'index',
        component: layout,
        children:[
            {
                path: '/',
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
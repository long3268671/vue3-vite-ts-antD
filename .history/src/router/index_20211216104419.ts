import { createRouter, createWebHistory } from 'vue-router'
import routers from './config'
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router
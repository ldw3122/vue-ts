import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue')
    }
]
const router = new Router({ mode: 'hash', routes, }); 
export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/about.vue')
    },
    {
        path: '/state',
        name: 'State',
        component: () => import('@/pages/state.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
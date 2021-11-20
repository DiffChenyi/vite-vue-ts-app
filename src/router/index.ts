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
    },
    {
        path: '/style',
        name: 'Style',
        component: () => import('@/pages/style.vue')
    },
    {
        path: '/element',
        name: 'Element',
        component: () => import('@/pages/element.vue')
    },
    {
        path: '/react',
        name: 'React',
        component: () => import('@/pages/react.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
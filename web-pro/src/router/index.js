import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import ProfileUser from '@/view/ProfileUser.vue';
import ProductsPage from '@/view/ProductsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component:  Home
        
    },
    
    {
        path: '/ProfileUser',
        name: 'ProfileUser',
        component: ProfileUser,
        
    },
    {
        path: '/Product',
        name: 'Product',
        component: ProductsPage,
        
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

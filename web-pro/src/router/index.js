import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import ProfileUser from '@/view/ProfileUser.vue';
import ProductsPage from '@/view/ProductsPage.vue';
import SignInPage from '@/view/SignInPage.vue';
import SignUpPage from '@/view/SignUpPage.vue';
import CheckOutPage from '@/view/CheckOutPage.vue';


const routes = [
    {
        path: '/Home',
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
    {
        path: '/',
        name: 'SignIn',
        component: SignInPage,
        
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUpPage,
        
    },
    {
        path: '/CheckOut',
        name: 'CheckOut',
        component: CheckOutPage,
        
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

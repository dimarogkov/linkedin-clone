import {createRouter, createWebHistory} from 'vue-router';
import PostsPage from '../views/PostsPage';

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/posts',
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostsPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

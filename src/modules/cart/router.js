const Module = () => import('@/Navbar.vue')
const Home = () => import('@/views/HomeView.vue')

const moduleRoute = {
    path: '/cart',
    component: Module,
    
    children: [
        {
            path: '/',
            component: Home
        },

    ]
    
};

export default router => {
    router.addRoutes([moduleRoute])
}
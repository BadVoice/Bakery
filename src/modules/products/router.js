const Module = () => import('@/Navbar.vue')
const Home = () => import('@/views/HomeView.vue')
const Product = () => import('@/views/Product.vue') 

const moduleRoute = {
    path: '/products',
    component: Module,
    beforeEnter: (to, from, next) => {
            // SOme logic
    },
    children: [
        {
            path: '/',
            component: Home
        },

        {
            path: ':id',
            component: Product
        },
        {
            path: '/products',
            component: Home
        },

        {
            path: '/products/:id',
            component: Product
        }
    ]
    
};

export default router => {
    router.addRoutes([moduleRoute])
}
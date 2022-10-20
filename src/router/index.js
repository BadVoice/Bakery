import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '@/components/layout/Shop/Shop.vue'
import NavMenu from '@/components/layout/NavMenu/NavMenu.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: "/:cake",
      name: 'NavMenu',
      component: NavMenu
    }
    
    
  ]
})

export default router

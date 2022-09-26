<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '@/components/layout/Navigation/Navbar.vue'
  import DiscountLine from './components/layout/DiscountLine/DiscountLine.vue';
  import NavMenu from "@/components/layout/NavMenu/NavMenu.vue";
</script>

<template>
  <DiscountLine />
    <Navbar >  
      <!-- MobileMenu-->
      
        <NavMenu> 


      </NavMenu>

    </Navbar>
  <RouterView />
</template>

<style lang="scss" scoped>

  @import '@/assets/scss/_normalize.scss';


  
</style>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '@/components/layout/Navigation/Navbar.vue'
  import DiscountLine from './components/layout/DiscountLine/DiscountLine.vue';
</script>

<template>
  <DiscountLine />
  <Navbar />  
  <RouterView />
</template>

<style lang="scss" scoped>

  @import '@/assets/scss/_normalize.scss'


  
</style>

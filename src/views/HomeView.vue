<script setup>
  import Header from '@/components/layout/Header/Header.vue'

import ProductCollection from '../modules/ProductCollection/ProductCollection.vue';
import FavoriteProduct from '../components/layout/FavoriteProducts/FavoriteProduct.vue';
 
</script>

<template>
      <div class="home">
            <Header></Header>
            <ProductCollection></ProductCollection>
            <FavoriteProduct></FavoriteProduct>
      </div>
</template>

<style lang="scss">
      @import "@/assets/scss/normalize/_variables.scss"; 
      // variables
      body {
            margin: $margin-reset; 
            padding: $padding-reset;

      }

      * {
            margin: $margin-reset; 
            padding: $padding-reset; 
      }
</style>

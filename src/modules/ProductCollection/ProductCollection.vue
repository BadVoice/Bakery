<template>
  <div class="shop">
    <div class="container">
      <div class="collection">

        <div 
         class="main-collection"
         v-for="product in productCollection"  :key="product.id"
         >
          
          <img class="collections__img" :src="'/src/modules/ProductCollection/images/' + product.image" :alt="product.imageAlt">
         
          
          <p class="collections__descr">{{ product.name }}</p>
          <RouterLink to="" href="">Shop Now</RouterLink>

        </div>

        

       
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";


const productCollection = reactive([
  {
      id: 1,
      name: 'New Years Treats',
      image: "collectionTreats.png",
      imageAlt: 'collectionTreats',
      href: '#',
    
    },
    {
      id: 2,
      name: 'Special Cakes',
      image: "collectionCakes.png",
      imageAlt: 'collectionCakes',
      href: '#',
    
    },
    {
      id: 3,
      name: 'Festival Collection',
      image: "collectionFestival.png",
      imageAlt: 'collectionFestival',
      href: '#',
    
    },
    ])
    
  

</script>

<style lang="scss" scoped>
@import "./productCollection.scss";

//media
@import "./mediaProductCollection.scss";
</style>

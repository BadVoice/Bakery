<template>
  <div class="shop">
    <div class="container">
      <div class="collection">
          <div  class="main-collection">
           
            <img src="./images/collectionTreats.png">
            <p class="collection__descr">fd fdh</p>
            <RouterLink to="" href="">Shop Now</RouterLink>
           
          </div>
          
          <div class="right-collection">
           
              
                <img src="./images/collectionFestival.png">
                <p class="collection__descr">fd fdh</p>
                <RouterLink to="" href="">Shop Now</RouterLink>
              
              
             
                <img src="./images/collectionFestival.png">
                <p class="collection__descr">fd fdh</p>
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
      imageAlt: 'collectionCakes',
      href: '#',
    
    },
    ])
    
  

</script>

<style lang="scss" scoped>
@import "./productCollection.scss";

//media
@import "./mediaProductCollection.scss";
</style>

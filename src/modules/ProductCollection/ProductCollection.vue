<template>
  <div class="shop">
    <div class="container">
      <div class="collection">
          <div  class="main-collection">
            
           
              <img src="./images/collectionTreats.png">
            
            <p class="collection__descr">New Years Treats</p>
            <RouterLink to="" class="collection__link">Shop Now
              
            </RouterLink>
           
          </div>
          
          <div class="right-collection">
          
                <div class="right-collection__top">
                  <img src="./images/collectionCakes.png">
                  <p class="collection__descr">Special Cakes</p>
                  <RouterLink to="" class="collection__link">Shop Now
                  </RouterLink>
                </div>
                
              <div class="right-collection__bottom">
                <img src="./images/collectionFestival.png">
                <p class="collection__descr">Festival Collection</p>
                <RouterLink to="" class="collection__link">Shop Now
                </RouterLink>
              </div>

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

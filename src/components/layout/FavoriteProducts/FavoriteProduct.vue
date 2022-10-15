<template>  
    <div class="container favorite">
        <div class="favorite-Product"> 
            <div class="favorite-flex">
                <a class="favorite-Title">Our Customers' Favourites</a>
                <span class="favorite-line"></span>
            </div>  

            <div class="productCard">

                <ProductCard> </ProductCard>


                <div class="slider">

                </div>
            </div>
    </div>
    </div>
</template>

<script setup>
    import ProductCard from "@/modules/ProductCard/ProductCard.vue"
    
</script>

<style lang="scss" scoped>
    
    @import "@/components/layout/FavoriteProducts/FavoriteProduct.scss";


</style>
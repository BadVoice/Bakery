<template>
    <div class="navigation">
        <!-- Desktop Nav-->
        <div class="navigation-discount-line">

        </div>

        <nav class="nav navbar container" id="navigation" role="navigation">
            
            <div class="nav__interaction-user">

                <img class="nav__interaction_search-img search_img" src="" alt="">
                <input class="hidden nav__interaction_search-input" type="text">


                <div class="nav__interaction-cart">
                    <img class="nav__interaction_cart-img cart_img" src="" alt="">
                    <span class="interaction-cart__count cart_count">

                    </span>
                </div>

            </div>
        </nav>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    @import "@/assets/scss/normalize/_variables.scss";  // variables
    .navigation {
            width: 100%;
            min-height: 266px
            
    }

    .container {
        max-width: $cont-width;
        height: 100%;
        margin: 0 auto;
    }
    
    body {
        margin: $margin-reset;
        padding: $padding-reset;
        
    }

    .hidden {
        display: none;
    }
    

</style>
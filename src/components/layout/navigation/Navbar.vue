<template>
    <div class="navigation">
        <!-- Desktop Nav-->
        

        <nav class="nav container" id="navigation" role="navigation">

                <div class="nav-menu">
                <div class="nav-shop">  
                    <img class="nav-shop__icon" src="./icons/shopIcon.svg" alt="shopIcon">
                    <a href="#" class="nav-shop__link">  Calicut Shop  </a>
                    <img class="arrow-icon" src="./icons/arrow.svg" alt="shopIcon">
                </div>

                <div class="nav-shop">  
                    <img class="nav-shop__icon" src="./icons/deliveryCarIcon.svg" alt="shopIcon">
                    <a href="#" class="nav-shop__link">  Online Delivery </a>
                    <img class="arrow-icon" src="./icons/arrow.svg" alt="shopIcon">
                </div>
            </div>

            <!-- mobile toggle menu-->
            <div class="mobile__menu">
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                

            </div>

            <div class="nav-logo">
                <img src="./icons/logo.svg" alt="logo">
            </div>


            <div class="nav__interaction-user">
                <input v-model="inp"
                    class=" interaction-user__search-input" type="text">
                {{ inp }}
                <img class="interaction-user__search-img" src="./icons/searchIcon.svg" alt="seacrhIcon">
                

                <div class="nav_interaction-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    
                </div>

                <div class="nav__interaction-cart">
                    <img class="interaction-cart__cart-img" src="./icons/cartIcon.svg" alt="">
                    <span class="interaction-cart__cart-count">
                        01
                    </span>
                </div>
                
            </div>
            
        </nav>
        
    </div>
</template>

<script setup>
    import { ref, } from "@vue/reactivity";
    


</script>

<style lang="scss" scoped>
    //style
    @import "@/components/layout/Navigation/navigation.scss";

    // mobile
    @import "@/components/layout/Navigation/mobileNav.scss";
    

    //media
    @import "@/components/layout/Navigation/mediaNav.scss";

    // fonst
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    
        

</style>
<template>
    
    <div class="navigation">
            <!-- Desktop Nav-->
            <div class="container">
                <nav class="nav" id="navigation" role="navigation">
    
                    <div class="nav-menu">
                    <div class="nav-shop">  
                        <img class="nav-shop__icon" src="./icons/shopIcon.svg" alt="shopIcon">
                        <a 
                        
                        href="#" class="nav-shop__link delivery-link">  Calicut Shop  </a>
                        <img class="arrow-icon" src="./icons/arrow.svg" alt="shopIcon">
                    </div>
    
                    <div class="nav-shop">  
                        <img class="nav-shop__icon" src="./icons/deliveryCarIcon.svg" alt="shopIcon">
                        <a href="#" class="nav-shop__link">  Online Delivery </a>
                        <img class="arrow-icon" src="./icons/arrow.svg" alt="shopIcon">
                    </div>

                </div>
            

                <MobileBtn 
                    :class="{ active: isActive }"
                    @click.prevent="toggleModal" class="max-w-[32px] max-h-[32px]">
                </MobileBtn>
    
                <div class="nav-logo">
                    <RouterLink to="/">
                    
                        <img  src="./icons/logo.svg" alt="logo">
                        
                    </RouterLink>
                </div>

            
                <div class="nav__interaction-user">
                    
                    <div class="search-box">
                        <button class="btn-search">
                            <i class="fas fa-search">
                                <img class="search-icon"   src="./icons/searchIcon.svg" alt="">
                            </i>
                        </button>
                    <input 
                        class=" interaction-user__search-input input-search" type="text" placeholder="Type to Search..">
                    </div>
                    
                    
                    <div class="nav_interaction-profile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
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

            
            <hr class="navLine">

                <!--NavList-->
            <div class="container">
                <div class="bottom-nav">
                    <ul  class="bottom-nav__list">

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Cakes</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Pastries</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Bakery</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Gift Ideas</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Event & Corporates</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Seasonal</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Buffer</RouterLink>
                            <img class="bottom-nav__arrow-img" src="./icons/arrow.svg" alt="">
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">WorkShop </RouterLink>
                            
                        </li>

                        <li class="bottom-nav__item">
                            <RouterLink to="/" class="bottom-nav__link" href="#">Contact </RouterLink>
                            
                        </li>
                    </ul>

                </div>
            </div>    

            <section class="section-nav">
                    <ul class="descr-nav">
                        <li class="descr-nav__item">
                            <a class="descr-nav__link" href="#">Seasonal Products </a>
                            <div  class="descr-nav__vertical-link">
    
                            </div>
                        </li>
    
                        <li class="descr-nav__item descr-nav__vertical-link">
                            <a class="descr-nav__link " href="#">Store Form 10 Am to 8 Pm</a>
                            <div  class="descr-nav__vertical-link">
    
                            </div>
                        </li>
    
                        <li class="descr-nav__item">
                            <a class="descr-nav__link" href="#">Delivery & Shipping Policy</a>
                            <div  class="descr-nav__vertical-link">
    
                            </div>
                        </li>
    
                        <li class="descr-nav__item">
                            <a class="descr-nav__link" href="#">FAQ</a>
                            
                        </li>
                    </ul>
                        
            </section>

            <transition name="slide-fade  mobileNav">
                <NavMenu class="absolute top-0 z-10 flex-col h-screen" 
                
                v-if="isActive">

                </NavMenu>
            </transition>

    </div>
    
</template>

<script setup>
    import { reactive, ref, } from "@vue/reactivity";
    import NavMenu from '@/components/layout/NavMenu/NavMenu.vue';
    import { vOnClickOutside } from '@vueuse/components'
    import MobileBtn from "../MobileBtn/MobileBtn.vue";
    
    const isActive = ref(false)

    function toggleModal() {
        isActive.value = !isActive.value
    }

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
    @import url('https://fonts.googleapis.com/css2?family=Domine&display=swap');
    
   /* ???????????????? ?????????????????? ?? ???????????????????????? ?????????? ??????????    */
/* ?????????????????? ?????????????????????????????????? ?? ?????????????? ??????????????????. */
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }

</style>
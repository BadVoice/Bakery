<template>
    <header class="header">
        <div class="header-overlay" /> 
        <div class="container">
            <div class="header-flex">
                <h1 class="header__title">Happy New Year</h1>
            <h5 class="header__subtitle">Discover Our Festive  Range</h5>

            <div class="w-[175px]">
                <RouterLink to="/shop" class="router">
                    <button class="header-btn bg-white hover:bg-gray-200  duration-300">
                        <p class="header-btn__descr">Shop Now</p>
                        <img class="header-btn__icon" src="./icons/down-arrow.png" alt="arrow-icon">
                    </button>
                </RouterLink>
            </div>
            </div>

        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
    @import "./header.scss";
    @import "./mediaHeader.scss";
    
</style>
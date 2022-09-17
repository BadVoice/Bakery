<template>
    <div class="navigation">
        <!-- Desktop Nav-->
        <div class="navigation-discount-line">

        </div>

        <nav class="nav container" id="navigation" role="navigation">

            <div class="nav-logo">
                <h3 class="nav-logo__title">         The Baker      </h3>
                <h5 class="nav-logo__subtitle">   Family   </h5>
            </div>

            <div class="nav__interaction-user">
                <img class="interaction-user__search-img" src="" alt="">
                <input v-model="inp"
                 class="interaction-user__search-input" type="text">
                {{ inp }}
                <div class="nav__interaction-cart">
                    <img class="interaction-cart__cart-img" src="" alt="">
                    <span class="interaction-cart__cart-count">
                            dfh
                    </span>
                </div>
            </div>
            
        </nav>

    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

    const inp = ref('')
</script>

<style lang="scss" scoped>
    @import "@/components/layout/Navigation/navigation.scss";
    

</style>
<template>
    <div class="navMenu container  max-w-m w-[100%] h-[100vh] bg-white
    bg-gray-100 

    ">

        <div class="px-6 pt-6 bg-gray-700">
            <div class="flex items-center justify-between pb-4">
                
                <div class="bg-white cursor-pointer p-1 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6  text-gray-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>

           
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        
                    </div>
                    <input type="text" class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-xl text-gray-500  bg-white placeholder-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-300 " placeholder="search">
                </div>

                <div class="pt-4">
                    
                </div>
        </div>  

        <div class="px-6 pt-4 ">
            <ul class="flex flex-col space-y-2 ">
                <li class="">
                    <div class="relative flex justify-between text-black bg-gray-700 hover:bg-gray-500 duration-500   rounded">
                        <div class="flex items-center w-full">
                            <div class="pr-0.5 inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>
                                
                            </div>
                            <RouterLink to="/" class="text-white inline-block w-full py-2 pl-2 pr-2 text-xs   focus:outline-none " href="">
                               {{categories.CailcutShop.name}}
                            </RouterLink>
                        </div> 
                        <button 
                        @click.prevent="openAccordion = !openAccordion"
                        class=" flex items-center p-1 text-white">
                                <svg 
                                v-if="!openAccordion"
                                class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                                <svg   v-if="openAccordion"
                                class="inner w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                        
                        </button>
                    </div>

                    
                    
                </li>
            </ul>
        </div>

       
            <div 
                class="px-6 pt-4">
                <transition  :duration="550" name="nested">
                    <ul  v-if="openAccordion"
                    class=" flex flex-col space-y-2 items-center w-full">

                        <li class=" text-xs inner flex
                            text-white duration-300 bg-gray-500 items-center rounded w-full"
                            v-for='cake in categories.CailcutShop.categories.cakes.title' :key='cake'> 
                                <RouterLink  class="w-full p-2"
                                :to="`/:${cake}`" >{{cake}}</RouterLink>
                                <button 
                                @click.prevent="openCakes = !openCakes"
                                class=" flex items-center p-1 text-white">
                                        <svg 
                                        v-if="!openCakes"
                                        class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
        
                                        <svg   v-if="openCakes"
                                        class="inner w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                </button>
                            </li>
                            
                            <div v-if="openAccordion == openCakes"
                            class="w-full">
                        
                            <ul v-if="openCakes"
                                class=" flex flex-col rounded 
                                space-y-2  items-center w-full">
                        
                                    <li class=" text-xs inner flex
                                        text-black duration-300 bg-white items-center rounded w-full"
                                        v-for='cake in categories.CailcutShop.categories.cakes.items' :key='cake'> 
                                            <RouterLink  class="w-full p-2"
                                            :to="`/:${cake}`" >{{cake}}</RouterLink>
                                    </li>
                            </ul>
                
                        </div>
                    </ul>
                </transition>
            </div>

            <div 
            class="px-6 pt-4">
            <transition  :duration="550" name="nested">
                <ul  v-if="openAccordion"
                class=" flex flex-col space-y-2 items-center w-full">

                    <li class=" text-xs inner flex
                        text-white duration-300 bg-gray-500 items-center rounded w-full"
                        v-for='bakery in categories.CailcutShop.categories.bakery.title' :key='bakery'> 
                            <RouterLink  class="w-full p-2"
                            :to="`/:${bakery}`" >{{bakery}}</RouterLink>
                            <button 
                            @click.prevent="openBakery = !openBakery"
                            class=" flex items-center p-1 text-white">
                                    <svg 
                                    v-if="!openBakery"
                                    class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
    
                                    <svg   v-if="openBakery"
                                    class="inner w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                            </button>
                        </li>
                        
                        
                            <div v-if="openAccordion == openBakery"
                                class="w-full ">
                               
                                    <ul v-if="openBakery"
                                    class=" flex flex-col rounded 
                                    space-y-2   items-center w-full">
                                        
                                        <li class=" text-xs inner flex
                                            text-black duration-300 bg-white items-center rounded w-full"
                                            v-for='bakery in categories.CailcutShop.categories.bakery.items' :key='bakery'> 
                                                <RouterLink  class="w-full p-2"
                                                :to="`/:${bakery}`" >{{bakery}}</RouterLink>
                                        </li>
                                    </ul>
                               
                                
                            </div>
                       
                </ul>
            </transition>
        </div>


    </div>
</template>

<script setup>
    import { reactive, toRefs, ref } from "@vue/reactivity";
    

    const openAccordion = ref(true)
    const openCakes = ref(false)
    const openBakery = ref(false)

    const categories = reactive({
        CailcutShop: {
            name: 'CailcutShop',
            
            categories:{

                cakes: {
                    items: [
                    'Brownie Au Chocolo',
                    'Hazel Nut',
                    'Triple Chocolate',
                    'Classic Cheese',
                    'Strawberry Cheese',
                    'Pista berry',
                    'Opera',
                    'Tiramisu',
                    'Fruit Cake',
                    'Signature Black Forest',
                    'Red Velvet',
                    'Carrot Cheese',
                    'Honey Medovik',
                    'Chocladen',
                    'View All Cakes',
                    ],

                    title: ['Cakes']
                    
                }, 

                bakery: {
                    items: [
                    'Brownie Au Chocolo',
                    'Hazel Nut',
                    'Triple Chocolate',
                    'Classic Cheese',
                    'Strawberry Cheese',
                    'Pista berry',
                    'Opera',
                    'Tiramisu',
                    'Fruit Cake',
                    'Signature Black Forest',
                    'Red Velvet',
                    'Carrot Cheese',
                    'Honey Medovik',
                    'Chocladen',
                    'View All Cakes',
                    ],

                    title: ['Bakery']
                    
                }
                

            }
        
    }
    })


        
    
</script>

<style lang="css" scoped>
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(-30px);
  opacity: 0;
}

.nested-enter-active .inner {
    transition-delay: 0.25s;
  }
</style>
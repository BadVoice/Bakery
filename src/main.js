import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/scss/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import store from "./stores/counter";

import cartModule from "./modules/cart";
import productsModule from "./modules/products";

import { registerModules } from "./register-modules";


registerModules({
  products: productsModule,
  cart: cartModule
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
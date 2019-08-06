// main.js
import Vue from 'vue'
import App from './App.vue';
import router from './router.js';
import i18n from "./i18n.js";

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')

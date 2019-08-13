// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("@pages/About.vue")
        },
        {
            path: '/services',
            name: 'services',
            component: () => import("@pages/Services.vue")
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import("@pages/Contact.vue")
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import { createRouter,createWebHistory } from "vue-router";
import HomeView from './views/Home.vue'
import AboutView from './views/About.vue'

var routes= [
    {
        path: "/",
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')

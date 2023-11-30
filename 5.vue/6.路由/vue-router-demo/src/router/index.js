import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
const routes=[
    {
        path:"/",
        component:HomeView
    },
    {
        path:"/about",
        component:AboutView
    }
]
//配置信息中需要页面的相关配置
const router=createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
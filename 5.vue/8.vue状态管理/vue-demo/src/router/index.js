import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    //redirect可以知道默认展示哪个子路由
    redirect: "/about/us",
    children:[
      {
        //二级导航的路径不要加 /
        "path": "us",
        component: () => import('../views/aboutViews/AboutUs.vue')
      },
      {
        //二级导航的路径不要加 /
        "path":"info",
        component: ()=> import('../views/aboutViews/AboutInfo.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewView.vue')
  },
  {
    path: '/newsdetails/:name/:id',
    name: 'newsdetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsDetails.vue')
  }
]

const router = createRouter({
  // createWebHashHistory
  //     home:http://localhost:8080/#/
  //     about:http://localhost:8080/#/about
  // createWebHistory
  //     home:http://localhost:8080/#/
  //     about:http://localhost:8080/#/about
  // 此种方式需要后台配合做重定向，否则会出现404问题
  history: createWebHistory(),
  routes
})

export default router

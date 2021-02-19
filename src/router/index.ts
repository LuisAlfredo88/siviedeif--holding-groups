import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Landing from '../layouts/Landing.vue'
import Home from '../views/landing/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    children:[
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/service',
        name: 'service',
        component: ()=> import('../views/landing/Service.vue')
      }                  
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

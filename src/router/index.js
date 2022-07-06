import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'Default' },
    component: Profile
  },
  {
    path: '/company',
    name: 'company',
    meta: { layout: 'Default' },
    component: () => import('@/views/Company.vue')
  },
  {
    path: '/market-screen',
    name: 'market screen',
    meta: { layout: 'Premium' },
    component: () => import('@/views/MarketScreen')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

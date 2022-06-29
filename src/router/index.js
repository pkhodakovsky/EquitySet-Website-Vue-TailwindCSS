import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Profile
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/Company.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

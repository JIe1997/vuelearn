import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/Pages/Index'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Index
    }
  ]
})

export default router
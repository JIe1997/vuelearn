import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Index from './Views/Index'
import User from './Views/User'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      {
        path: "/",
        component: Index
      },
      {
        path: "/user",
        component: User
      }
    ]
  })
}).$mount('#app')

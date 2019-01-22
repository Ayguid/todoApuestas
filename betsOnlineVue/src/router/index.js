import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Apuestas from '@/components/Apuestas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apuestas',
      name: 'Apuestas',
      component: Apuestas
    },
  ]
})

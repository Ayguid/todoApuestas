import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('access_token')) {
          next('/')
        }
        else{
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('access_token')) {
          next('/')
        }
        else{
          next()
        }
      }
    },
  ]
})

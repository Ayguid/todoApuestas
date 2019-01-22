// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import router from './router'
import 'bulma/css/bulma.css'





Vue.component('navbar', require('./components/nav-bar.vue').default);





Vue.config.productionTip = false

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = 'http://localhost:8000'
Vue.prototype.$http = window.axios





window.eventBus = new Vue()
/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
  return  {
    access_token: localStorage.getItem('access_token') || null,
  }
},
})

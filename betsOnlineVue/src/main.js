// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import router from './router'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.component('navbar', require('./components/nav-bar.vue').default);
Vue.component('event-component', require('./components/EventComponent.vue').default);

import  EventBus  from './event-bus.js';


Vue.config.productionTip = false

// NEW - register the service worker
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
if ('serviceWorker' in navigator) {
  runtime.register();
}

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
  mounted(){
//     if('caches' in window) {
//       console.log('siuppas');
// }

  }
});

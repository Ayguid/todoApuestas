// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//indexedDB
import {openDb, deleteDb } from 'idb';
Vue.prototype.$openDb = openDb;
Vue.prototype.$deleteDb = deleteDb;
// Vue.use(openDb);
// Vue.use(deleteDb);

//  Event Bus
import  EventBus  from './event-bus.js';
window.eventBus = new Vue()


// NEW - register the service worker
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
if ('serviceWorker' in navigator) {
  runtime.register();
}

// axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.baseURL = 'http://localhost:8000'
Vue.prototype.$http = window.axios


// global components
Vue.component('navbar', require('./components/nav-bar.vue').default);
Vue.component('event-component', require('./components/EventComponent.vue').default);


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
    return  {
      access_token: localStorage.getItem('access_token') || null,
      user_data: JSON.parse(localStorage.getItem('user_data')) || null,
    }
  },
  methods:{
    // getUserDatabase: function(){
    //   const dbPromise = this.$openDb('betapp', 1, upgradeDB => {
    //   upgradeDB.createObjectStore('profile_info');
    // });
    //
    // }
  },
  mounted(){
    // this.getUserDatabase();
  }
});

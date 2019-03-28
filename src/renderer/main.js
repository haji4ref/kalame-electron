import Vue from 'vue'
import axios from 'axios'
import App from './App'
import 'reflect-metadata';

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false;


import './assets/css/styles.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/bootstrap.css';

Vue.use(ElementUI);

import VueRouter from 'vue-router'
import routes from './routes';
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

// const app = new Vue({
//   router
// }).$mount('#app')


// /* eslint-disable no-new */
new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
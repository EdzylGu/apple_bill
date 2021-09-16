import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import './plugins/element.js';
import './plugins/bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false


const router = new VueRouter({
  routes,
  mode: 'hash'
});

Vue.use(VueAnalytics, {
  id: 'UA-46828690-2',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
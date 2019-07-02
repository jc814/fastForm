// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import api from './api'
import store from './store' // 引入store

Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})

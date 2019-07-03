import Vue from 'vue'
import Router from 'vue-router'
import index from '@/base/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/designAdd',
      name: 'designAdd',
      component: index
    }
  ]
})

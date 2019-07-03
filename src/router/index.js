import Vue from 'vue'
import Router from 'vue-router'
import index from '@/base/index'
import designAdd from '@/base/designAdd'

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
      component: designAdd
    }
  ]
})

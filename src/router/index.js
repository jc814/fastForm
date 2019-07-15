import Vue from 'vue'
import Router from 'vue-router'
import index from '@/base/index'
import designAdd from '@/base/designAdd'
import designList from '@/base/designList'
import designView from '@/base/designView'
import fieldView from '@/base/fieldView'

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
    },
    {
      path: '/designList',
      name: 'designList',
      component: designList
    },
    {
      path: '/designView',
      name: 'designView',
      component: designView
    },
    {
      path: '/fieldView',
      name: 'fieldView',
      component: fieldView
    }
  ]
})

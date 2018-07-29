import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Section from '@/components/Section'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Section/:filter',
      name: 'Section',
      component: Section
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import broadCast from './components/broad-cast'

Vue.use(Router)

export default new Router({
  routes: [
/*    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }*/
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/broad-cast',
      name: 'broadCast',
      component: broadCast
    }
  ]
})

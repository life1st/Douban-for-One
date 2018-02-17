import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import broadCast from './components/broad-cast'
import note from './components/note'
import subject from './components/subject'
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
      path: '/broadcast',
      name: 'broadCast',
      component: broadCast
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/subject',
      name: 'subject',
      component: subject
    }
  ]
})

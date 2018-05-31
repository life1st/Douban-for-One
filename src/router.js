import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import broadCast from './components/broad-cast'
import noteList from './components/note/noteList'
import poster from './components/note/poster'
import note from './components/note/noteDetail'

import book from './components/book/subject'
import books from './components/book/list'
import newBook from './components/book/newSubject'

import movie from './components/movie/subject'
import movies from './components/movie/list'
import newMovie from './components/movie/newSubject'

import login from './components/login'
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/broadcast',
      name: 'broadCast',
      component: broadCast
    },
    {
      path: '/notes',
      name: 'notes',
      component: noteList
    },
    {
      path: '/note/:id',
      name: 'note',
      component: note
    },
    {
      path: '/poster',
      name: 'poster',
      component: poster
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    },
    {
      path: '/book/new',
      name: 'newBook',
      component: newBook
    },
    {
      path: '/movie/new',
      name: 'newMovie',
      component: newMovie
    },
    {
      path: '/book/:id',
      name: 'book',
      component: book
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: movie
    },
  ]
})

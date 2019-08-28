import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Index from './views/index'
import Literature from './views/literature'
import LevelOne from './views/levelone'
import Details from './views/details'
import Visualization from './views/visualization'
import LevelTow from './views/leveltow'
import LevelThree from './views/levelthree'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/',
    name: 'index',
    component: Index,
    children: [{
        path: '/literature',
        name: 'literature',
        component: Literature
      },
      {
        path: '/author',
        name: 'author',
        component: LevelOne,
      },
      {
        path: '/theme',
        name: 'theme',
        component: LevelOne,
      },
      {
        path: '/mechanism',
        name: 'mechanism',
        component: LevelOne,
      },
      {
        path: '/publication',
        name: 'publication',
        component: LevelOne,
      },
      {
        path: '/visualization',
        name: 'visualization',
        component: Visualization
      },
      {
        path: '/leveltow',
        name: 'leveltow',
        component: LevelTow,
      },
      {
        path: '/levelthree',
        name: 'levelthree',
        component: LevelThree,
      },
      {
        path: '/details',
        name: 'details',
        component: Details,
      }
    ]
  }]
})
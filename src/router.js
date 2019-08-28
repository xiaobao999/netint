import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Index from './views/index'
import Literature from './views/literature'
import LevelOne from './views/levelone'
//import Article from './views/article'
import Visualization from './views/visualization'
import LevelTow from './views/leveltow'
//import Articledetails from './views/articledetails'

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
        path: 'leveltow',
        name: 'leveltow',
        component: LevelTow,
      }
    ]
  }]
})
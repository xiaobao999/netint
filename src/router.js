import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Index from './views/index'
import Literature from './views/literature'
import Author from './views/author'
import Article from './views/article'
import Visualization from './views/visualization'
import Authordetails from './views/authordetails'
import Articledetails from './views/articledetails'

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
    name: 'home',
    component: Index,
    children: [{
        path: '/literature',
        name: 'literature',
        component: Literature
      },
      {
        path: '/author',
        name: 'author',
        component: Author
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/visualization',
        name: 'visualization',
        component: Visualization
      },
      {
        path: '/authordetails',
        name: 'authordetails',
        component: Authordetails
      },
      {
        path: '/articledetails',
        name: 'articledetails',
        component: Articledetails
      }
    ]
  }]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
//views
import HomeView from '../views/Home'
import CreateHistory from '../views/CreateHistory'
import CreateDetails from '../views/CreateDetails'
import SearchHistory from '../views/SearchHistory'
import SearchDetails from '../views/SearchDetails'
import CreateUser from '../views/CreateUser'
import SearchUser from '../views/SearchUser'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/create-history',
    name: 'CreateHistory',
    component: CreateHistory
  },
  {
    path: '/create-details',
    name: 'CreateDetails',
    component: CreateDetails
  },
  {
    path: '/search-history',
    name: 'SearchHistory',
    component: SearchHistory
  },
  {
    path: '/search-details',
    name: 'SearchDetails',
    component: SearchDetails
  },
  {
    path: '/search-user',
    name: 'SearchUser',
    component: SearchUser
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: CreateUser
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
//views
import HomeView from '../views/Home'
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

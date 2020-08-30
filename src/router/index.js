import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import UserTeamsNew from '../views/UserTeamsNew.vue'
import UserTeamsShow from '../views/UserTeamsShow.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/user_teams/new',
    name: 'UserTeamsNew',
    component: UserTeamsNew
  },
  {
    path: '/user_teams/:id',
    name: 'UserTeamsShow',
    component: UserTeamsShow
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

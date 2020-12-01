import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ThreadShow from '../components/ThreadShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,

    // component: () => import(/* webpackChunkName: "threadShow" */ '../components/ThreadShow.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

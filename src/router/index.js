import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "threadShow" */ '../views/ThreadShow.vue'),
    props: true
  },
  {
    path: '/thread/create',
    name: 'ThreadCreate',
    component: () => import(/* webpackChunkName: "threadCreate" */ '../views/ThreadCreate.vue'),
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "forum" */ '../views/Forum.vue'),
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    props: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/*webpackChunckName: "profile " */ '../views/Profile.vue') 
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: () => import(/*webpackChunckName: "profile " */ '../views/Profile.vue'),
    props: {edit:true} 
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '*', redirect: '/login' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/administracion',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/curso/:id',
    name: 'Edition',
    component: () => import('../views/Edition.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (Store.state.currentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

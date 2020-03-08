import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SiteViewer from '../views/SiteViewer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student',
    name: 'student',
    component: SiteViewer,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

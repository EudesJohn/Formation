import { createRouter, createWebHistory } from 'vue-router'
import EbookReader from '../views/EbookReader.vue'
import ActivationView from '../views/ActivationView.vue'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Reader',
    component: EbookReader
  },
  {
    path: '/intro',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/activate',
    name: 'Activation',
    component: ActivationView
  },
  {
    path: '/reader',
    redirect: '/'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

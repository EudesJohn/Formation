import { createRouter, createWebHistory } from 'vue-router'
import EbookReader from '../views/EbookReader.vue'
import ActivationView from '../views/ActivationView.vue'
import LandingPage from '../views/LandingPage.vue'
import QuizView from '../views/QuizView.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/reader',
    name: 'Reader',
    component: EbookReader
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizView
  },
  {
    path: '/activate',
    name: 'Activation',
    component: ActivationView
  },
  {
    path: '/intro',
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

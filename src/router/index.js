import { createRouter, createWebHistory } from 'vue-router'
import AddNominationView from '../views/AddNominationView.vue'
import AddReviewView from '../views/AddReviewView.vue'
import NominationsView from '../views/NominationsView.vue'
import ReviewsView from '../views/ReviewsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/nominations',
  },
  {
    path: '/addnomination',
    name: 'addnomination',
    component: AddNominationView
  },
  {
    path: '/addreview:id/:title',
    name: 'addreview',
    component: AddReviewView,
    props: true
  },
  {
    path: '/nominations',
    name: 'nominations',
    component: NominationsView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AddNominationView from '../views/AddNominationView.vue'
import AddReviewView from '../views/AddReviewView.vue'
import HomeView from '../views/HomeView.vue'
import NominationsView from '../views/NominationsView.vue'
import ReviewsView from '../views/ReviewsView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

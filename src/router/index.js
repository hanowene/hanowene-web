import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  },
  {
    path: '/backgroundStory',
    name: 'backgroundStory',
    // route level code-splitting
    // this generates a separate chunk (backgroundStory.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "visionMission" */ '../views/about/BackgroundStory.vue')
  },
  {
    path: '/visionMission',
    name: 'visionMission',
    // route level code-splitting
    // this generates a separate chunk (visionMission.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "backgroundStory" */ '../views/about/VisionMission.vue')
  },
  {
    path: '/ourTeam',
    name: 'ourTeam',
    // route level code-splitting
    // this generates a separate chunk (ourTeam.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ourTeam" */ '../views/about/OurTeam.vue')
  },
  {
    path: '/library',
    name: 'library',
    // route level code-splitting
    // this generates a separate chunk (library.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "library" */ '../views/project/Library.vue')
  },
  {
    path: '/involved',
    name: 'involved',
    // route level code-splitting
    // this generates a separate chunk (involved.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "involved" */ '../views/involve/Involved.vue')
  },
  {
    path: '/buildLibrary',
    name: 'buildLibrary',
    // route level code-splitting
    // this generates a separate chunk (buildLibrary.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buildLibrary" */ '../views/involve/BuildLibrary.vue')
  },
  {
    path: '/joinTeam',
    name: 'joinTeam',
    // route level code-splitting
    // this generates a separate chunk (joinTeam.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "joinTeam" */ '../views/involve/JoinTeam.vue')
  },
  {
    path: '/bookDonation',
    name: 'bookDonation',
    // route level code-splitting
    // this generates a separate chunk (bookDonation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bookDonation" */ '../views/donation/BookDonation.vue')
  },
  {
    path: '/energyAssistance',
    name: 'energyAssistance',
    // route level code-splitting
    // this generates a separate chunk (energyAssistance.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "energyAssistance" */ '../views/donation/EnergyAssistance.vue')
  },
  {
    path: '/fundDonation',
    name: 'fundDonation',
    // route level code-splitting
    // this generates a separate chunk (fundDonation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fundDonation" */ '../views/donation/FundDonation.vue')
  },
  {
    path: '/ourContact',
    name: 'ourContact',
    // route level code-splitting
    // this generates a separate chunk (ourContact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ourContact" */ '../views/contact/Contact.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/faq/Faq.vue')
  },
  {
    path: '/library',
    name: 'library',
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/project/Library.vue')
  },
  {
    path: '/education-project',
    name: 'EducationProject',
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/project/EducationProject.vue')
  },
  {
    path: '/electric-project',
    name: 'ElectricProject',
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/project/ElectricProject.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

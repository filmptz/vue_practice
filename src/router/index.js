import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'
import CityList from '../components/CityList.vue'
import Info from '../components/Info.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path:'/',
        redirect:'/signin'
    },
    {
        path: '/cities',
        name: 'CityList',
        component: CityList,
        meta: {
          requiresAuth: true
        }
    },
    {
        path: '/info/:city',
        name: 'Info',
        component: Info,
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    ,
    {
        path:'/:catchAll(.*)',
        redirect:'/signin'
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      console.log("You are not authorized to access this area.");
      next('signin')
    } else if (!requiresAuth && currentUser) {
      console.log("You are authorized to access this area.");
      next('cities')
    } else {
      next()
    }
  })

export default router
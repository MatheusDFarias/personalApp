import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import RecorevyPassword from '../views/RecoveryPassword.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { transitionName: 'slide-left' }
  },
  
  {
    path: '/recovery-password',
    name: 'recoveryPassword',
    component: RecorevyPassword,
    meta: { transitionName: 'slide-right' }
  },

  {
    path: '/home',
    name: 'home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  let toDepth = to.path.split('/').length
  let fromDepth = from.path.split('/').length
  
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

  console.log(to.meta.transitionName );
})

export default router

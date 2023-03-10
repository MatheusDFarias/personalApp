import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transitionName: 'slide-left' }
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

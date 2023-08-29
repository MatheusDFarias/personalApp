import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/about',
    meta: { transitionName: 'slide-left' },
    children: [
      {
        path: "/about",
        name: "About",
        component: () => import("@/components/about/index"),
      },
      {
        path: "/index",
        name: "Index",
        component: () => import("@/components/index/index"),
      },      
    ]
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

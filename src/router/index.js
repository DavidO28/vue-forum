import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Forum - Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about page" */ '../views/AboutView.vue'),
      meta: {
        toTop: true,
        smoothScroll:true,
        title: 'Forum - About'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "not found page" */ '../views/NotFoundView.vue'),
      meta: { title: 'Forum - Not found' }
    }
  ],

  scrollBehavior (to) {
    const scroll = {}
    if(to.meta.toTop) scroll.top = 0
    if(to.meta.smoothScroll) scroll.behaviour = 'smooth'
    return scroll
  }
})

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}`
  next()
})

export default router

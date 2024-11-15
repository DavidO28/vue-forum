import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about page" */ '../views/AboutView.vue'),
      meta: {toTop: true, smoothScroll:true}
    }
  ],

  scrollBehavior (to) {
    const scroll = {}
    if(to.meta.toTop) scroll.top = 0
    if(to.meta.smoothScroll) scroll.behaviour = 'smooth'
    return scroll
  }
})

export default router

import { createRouter }
from 'vue-router'
import { createWebHistory }from 'vue-router'
import { useAuthStore } from '../stores/auth'


import LoginView
from '../views/LoginView.vue'

import HomeView
from '../views/HomeView.vue'

const routes = [

  {
    path: '/login',
    component: LoginView
  },

  {
    path: '/',
    component: HomeView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({

  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }

  if (to.path === '/login' && authStore.isAuthenticated) {
    return { path: '/' }
  }
})

export default router
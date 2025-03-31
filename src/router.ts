import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/layouts/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/dashboard/Home.vue')
        },
        {
          path: 'ucs',
          name: 'UCs',
          component: () => import('@/pages/dashboard/UCs.vue')
        }
      ]
    },
    // Error 404/Not found page
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ],
  history: createWebHistory()
});

export default router;
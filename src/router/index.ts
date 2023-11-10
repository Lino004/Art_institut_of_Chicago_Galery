import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFountView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/layout/LayoutAuth.vue'),
      children: [
        {
          path: '',
          name: 'auth.signIn',
          component: () => import('@/views/auth/SignInView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'app',
      component: () => import('@/layout/LayoutApp.vue'),
      children: [
        {
          path: '',
          name: 'app.home',
          component: () => import('@/views/app/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'app.about',
          component: () => import('../views/app/AboutView.vue'),
        },
        {
          path: '/search',
          name: 'app.search',
          component: () => import('../views/app/SearchView.vue'),
        },
      ],
    },
  ]
});

export default router;

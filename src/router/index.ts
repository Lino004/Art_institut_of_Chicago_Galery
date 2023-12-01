import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: { name: 'app.home' },
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
          path: 'about',
          name: 'app.about',
          component: () => import('@/views/app/AboutView.vue'),
        },
        {
          path: 'gallery',
          name: 'app.gallery',
          component: () => import('@/views/app/GalleryView.vue'),
        },
        {
          path: 'sign-in',
          name: 'app.signIn',
          component: () => import('@/views/app/SignInView.vue'),
        },
        {
          path: 'register',
          name: 'app.register',
          component: () => import('@/views/app/RegisterView.vue'),
        },
      ],
    },
  ]
});

export default router;

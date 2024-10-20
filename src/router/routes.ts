import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Register',
        component: () => import('pages/RegisterPage.vue'),
      },
    ],
  },
  {
    path: '/client/:serverId/:channelId',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'Client',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/privacy',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Privacy',
        component: () => import('pages/PrivacyPage.vue'),
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        component: () => import('pages/ContactPage.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('pages/AboutPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'ErrorNotFound',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
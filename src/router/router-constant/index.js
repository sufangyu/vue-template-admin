import Layout from '@/layout';

export default [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          icon: 'home',
          title: '控制台',
          noCache: true,
          auth: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/login'),
    hidden: true,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/account/register'),
    hidden: true,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/401',
    name: 'NoAuth',
    component: () => import('@/views/error-page/401'),
    hidden: true,
  },
];

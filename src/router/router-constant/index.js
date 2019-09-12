import Layout from '@/layout';

export default [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index'),
      },
    ],
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          icon: 'home',
          title: '首页',
          noCache: true,
          auth: true,
          affix: true,
        },
      },
      {
        path: 'iframe',
        name: 'IframeExample',
        component: () => import('@/views/iframe/index.vue'),
        hidden: true,
        meta: {
          title: '网址',
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

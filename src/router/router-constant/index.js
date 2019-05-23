export default [
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

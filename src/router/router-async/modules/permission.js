import Layout from '@/layout';

export default [
  {
    path: '/permission',
    name: 'permission',
    component: Layout,
    redirect: '/permission',
    meta: {
      title: '权限测试',
      icon: 'permission',
    },
    children: [
      {
        path: 'page',
        name: 'permissionPage',
        component: () => import('@/views/permission/page'),
        meta: {
          icon: 'permission',
          title: '页面权限',
          noCache: true,
          auth: true,
        },
      },
      {
        path: 'directive',
        name: 'permissionDirective',
        component: () => import('@/views/permission/directive'),
        meta: {
          icon: 'permission',
          title: '页面权限',
          noCache: true,
          auth: true,
        },
      },
    ],
  },
];

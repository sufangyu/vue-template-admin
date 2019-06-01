import Layout from '@/layout';

export default [
  {
    path: '/labs',
    name: 'labs',
    component: Layout,
    redirect: '/labs/index',
    alwaysShow: true,
    meta: {
      icon: 'labs',
      title: '实验室',
    },
    children: [
      {
        path: 'card',
        name: 'labsCard',
        component: () => import('@/views/labs/card'),
        meta: {
          title: '卡片',
          desc: '卡片内容展示组件',
          // pageHeader: ['breadcrumb'],
        },
      },
    ],
  },
];

import Layout from '@/layout';

export default [
  {
    path: '/labs',
    name: 'labs',
    component: Layout,
    redirect: '/labs/index',
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
      {
        path: 'tabs-page',
        name: 'labsTabsPage',
        component: () => import('@/views/labs/tabs-page'),
        meta: {
          title: '标签页',
          pageHeader: ['breadcrumb'],
        },
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    component: Layout,
    redirect: '/list/table-list',
    meta: {
      title: '列表页面',
    },
    children: [
      {
        path: 'table-list',
        name: 'listTable',
        component: () => import('@/views/list/table-list'),
        meta: {
          icon: 'labs',
          title: '查询表格',
        },
      },
    ],
  },
];

import Layout from '@/layout';

export default [
  // labs
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
        path: 'filter',
        name: 'labsFilter',
        component: () => import('@/views/labs/filter'),
        meta: {
          title: '全局过滤器',
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

  // list
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
          icon: 'list',
          title: '查询表格',
        },
      },
    ],
  },

  // component
  {
    path: '/components',
    name: 'components',
    component: Layout,
    redirect: '/components/status',
    meta: {
      title: '组件',
      icon: 'components',
    },
    children: [
      {
        path: 'status',
        name: 'componentsStatus',
        component: () => import('@/views/components-demo/status.vue'),
        meta: {
          title: '状态标签',
        },
      },
      {
        path: 'sticky',
        name: 'componentsSticky',
        component: () => import('@/views/components-demo/sticky.vue'),
        meta: {
          title: '滚动吸附',
        },
      },
      {
        path: 'count-to',
        name: 'componentsCountTo',
        component: () => import('@/views/components-demo/count-to.vue'),
        meta: {
          title: '计数效果',
        },
      },
    ],
  },
];

const routers = [
  {
    path: '/documentation/index',
    meta: {
      title: '文档',
      icon: 'document',
    },
  },
  {
    path: '/guide',
    meta: {
      title: '引导页',
      icon: 'document',
    },
  },
  {
    path: '/nested',
    meta: {
      title: '多层菜单',
      icon: 'wechat',
    },
    children: [
      {
        path: '/nested/menu1/index',
        meta: {
          title: '二级菜单 1',
        },
        children: [
          {
            path: '/nested/menu1/sub1',
            meta: {
              title: '三级菜单 1-1',
            },
          },
          {
            path: '/nested/menu1/sub2',
            meta: {
              title: '三级菜单 1-2',
            },
          },
        ],
      },
      {
        path: '/nested/menu2/index',
        meta: {
          title: '二级菜单 1',
        },
      },
    ],
  },
  {
    path: '/permission',
    meta: {
      title: '权限测试页',
      icon: '404',
    },
    children: [
      {
        path: '/permission/page',
        meta: {
          title: '页面权限',
        },
      },
      {
        path: '/permission/directive',
        meta: {
          title: '指令权限',
        },
      },
    ],
  },
  {
    path: '/icon',
    meta: {
      title: '图标',
      icon: 'icon',
    },
  },
  {
    path: '/components',
    meta: {
      title: '组件',
      icon: 'components',
    },
  },
  {
    path: '/charts',
    meta: {
      title: '图表',
      icon: 'charts',
    },
    children: [],
  },
  {
    path: 'https://www.github.com',
    meta: {
      title: 'GitHub',
      icon: 'github',
    },
  },
];

export default [
  // messages
  {
    url: 'menus',
    type: 'get',
    response: () => {
      return {
        success: true,
        message: 'success',
        data: routers,
      };
    },
  },
];

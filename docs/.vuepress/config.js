const sidebars = {
  components: [
    '',
    'icon',
    'flex',
    'grid',
    'white-space',
    'wing-blank',
    'exception',
    'breadcrumb',
    'button-confirm',
    'card',
    'page-info',
    'pagination',
    'status',
    'sticky',
  ],
  guide: [
    '',
    'standard',
    'router',
    'proxy',
    'deploy',
  ],
  request: [
    '',
  ],
  filter: [
    '',
  ],
  directive: [
    '',
  ],
};

function genSidebarConfig(...names) {
  return names.map(t => {
    return {
      title: t,
      collapsable: false,
      children: sidebars[t.toLowerCase()]
    }
  });
}

module.exports = {
  title: '项目文档',
  description: '后台项目集成方案文档',
  serviceWorker: true,
  base: '/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/img/favicon-96x96.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/favicon-16x16.png" }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '项目文档',
      description: '后台项目集成方案文档'
    }
  },
  themeConfig: {
    // repo: 'baianat/vee-validate',
    // docsRepo: 'baianat/vee-validate',
    docsDir: 'docs',
    editLinks: true,
    serviceWorker: {
      updatePopup: { message: "有新的内容.", buttonText: "刷新" }
    },
    locales: {
      '/': {
        label: '中文',
        selectText: '语言',
        editLinkText: '帮助改进此页面！',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/components/' },
          { text: '过滤器', link: '/filter/' },
          { text: '指令', link: '/directive/' },
          { text: '网络请求', link: '/request/' },
          { text: '任务', link: '/todo' },
        ],
        sidebarDepth: 3,
        sidebar: {
          '/guide/': genSidebarConfig('Guide'),
          '/request/': genSidebarConfig('Request'),
          '/filter/': genSidebarConfig('Filter'),
          '/directive/': genSidebarConfig('Directive'),
          '/components/': genSidebarConfig('Components'),
        }
      }
    }
  }
};

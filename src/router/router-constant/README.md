```js
{
  path: '/url',
  name: 'Url',
  component: () => import('@/views/*.vue'),
  meta: {
    icon: 'home',
    title: 'title',
    noCache: true,
    auth: true,
    affix: true,
    pageHeader: [],
  }
}
```
### 配置说明
- path: 路径
- name: 路由名称, 
- component: 页面组件路径
- meta: 路由元信息
  - icon: 侧边导航显示的图标
  - auth: 是否需要验证登录. 默认 false
  - title: 页面标题(推荐设置)
  - noCache: 是否缓存页面. 默认是 true
  - affix: 是否一直显示在标签中. 默认是 false
  - breadcrumb: 是否在面包屑中隐藏. 默认是 true
  - activeMenu: 侧边导航高亮显示的路径
# 新增页面

在 `src/views` 对应的模块下新建对应页面文件, 接着在 `src/router/router-async/*` 配置页面的访问路由.

> 注意: 
> - 页面与路由都是按模块组织
> - 页面文件的路径与路由配置的访问路径要一致

## 路由配置

```js
{
  path: '/url',
  name: 'Url',
  component: () => import('@/views/*.vue'),
  meta: {
    title: 'title',
    icon: 'icon',
    desc: 'This is page description',
    noCache: true,
    auth: true,
    pageHeader: ['breadcrumb', 'pageInfo'],
  }
}
```
**配置说明**
- path: 路径
- name: 路由名称, 
- component: 页面组件路径
- meta: 路由元信息
  - title: 页面标题(推荐设置)
  - icon: 导航所用图标
  - desc: 页面描述
  - noCache: 是否缓存页面. 默认: false
  - auth: 是否需要验证登录. 默认: false
  - pageHeader: 页面要显示的信息. 默认['breadcrumb', 'pageInfo']

## 路由命名规范

参考以下示例：
```js
{
  path: '/form-detail',
  name: 'FormDetail',
  component: () => import('@views/demo-components/form-detail'),
  meta: { title: '表单详情' }
}
```

路由的两个命名：
- path: 路径使用 kebab-case(小写短横线)
- name: 路由命名使用 PascalCase(大写驼峰式)

path命名主要遵循以下原则：
- url 中字母全部小写
- 如果有单词拼接，使用中划线 '-'

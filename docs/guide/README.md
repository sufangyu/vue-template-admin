# 项目介绍

## 目录结构

```bash
.
├─docs                      # 文档说明
|
├─config
│  ├─cdn.js                 # 构建 CDN 优化
│  ├─externals.js           # 构建排除第三方组件, 库
│  └─proxy.js               # 请求代理配置
├─mock                      # mock 请求拦截
│  ├─modules                # 各个模块的数据拦截
│  └─index.js               # 请求拦截入口文件
├─src
│  ├─api                    # 请求函数与 API
│  │  └─***
│  ├─assets                 # 项目静态资源
│  ├─components             # 公共组件
│  ├─config                 # 项目配置
│  │  └─index.js            # API_BASE, 多语言, HAS_MOCK, HOME_ROUTE, INIT_ROUTERS,
│  ├─directives             # 全局指令
│  │  ├─*
│  │  └─index.js
│  ├─filters                # 全局过滤器
│  ├─icons                  # icon 图标
│  │  ├─svg                 # svg 资源
│  │  └─index.js            # 引用 svg & 注册 icon-svg 全局组件
│  ├─layout                 # 框架布局
│  │  ├─components          # 业务组件
│  │  ├─empty.vue           # 空 router-view 容器
│  │  ├─main.vue            # 主体框架
│  │  └─index.js            # 布局
│  ├─mixins                 # 全局混入
│  ├─router                 # 路由配置文件. 如果项目大, 可按模块配置路由
│  │  ├─router-async        # 动态路由配置. 为具体业务需求路由
│  │  │  ├─modules          # 各模块路由
│  │  │  └─index.js
│  │  ├─router-constant     # 基础路由配置. 
│  │  ├─router-labs         # 实验性路由配置. 为自定义组件等示例
│  │  ├─path.js             # 路由路径配置
│  │  └─index.js
│  ├─store                  # vuex
│  │  ├─modules             # 各模块的 store
│  │  └─index.js
│  ├─styles                 # 全局样式文件
│  │  ├─functions           # 函数
│  │  ├─mixins              # 混合
│  │  ├─theme               # 主题变量
│  │  ├─animate.scss        # css 运动样式
│  │  ├─color.scss          # 颜色变量
│  │  ├─import.scss         # 对外导出入口
│  │  ├─index.scss          # 样式入口文件
│  │  ├─public.scss         # 公共样式库
│  │  └─normalize.css       # 样式初始化
│  ├─utils                  # 工具库. 建议按模块组织, 例如 number.js, array.js, validate.js 等
│  │  ├─auth.js             # 登录工具类
│  │  ├─number.js           # 数字拓展函数
│  │  ├─request-helper.js   # 请求函数辅助函数
│  │  ├─request.js          # 请求函数
│  │  ├─validator-rules.js  # 业务校验规则
│  │  ├─validator.js        # 自定义校验规则函数
│  │  └─index.js            # 常用工具类
│  ├─views                  # 页面. 建议按模块组织
│  ├─App.vue                # 主页面
│  └─global-components.js   # 注册全局组件配置
│  ├─main.js                # 入口页面
│  └─permission.js          # 登录, 权限控制
├─package.json
└─vue.config.js
```

## 全局配置

在 `src/config` 提供了一下全局配置，例如:

### API_BASE

请求的前缀路径.

### LANGUAGES

语言列表. 默认值:
```js
const LANGUAGES = [
  { name: '中文简体', lang: 'zh' },
  { name: 'English', lang: 'en' },
];
```

### HAS_MOCK

是否开启请求拦截, 默认值: `true`.

### COPYRIGHT

底部版权信息配置.

### PAGE_HEADER

页面信息所展示内容, 默认值: `['breadcrumb', 'pageInfo']`.
- breadcrumb 面包屑
- pageInfo 页面信息. 包含标题和页面描述

### HOME_ROUTE

首页路由信息. 默认值:
```js
const HOME_ROUTE = {
  path: '/dashboard',
  name: 'dashboard',
  meta: {
    title: '首页',
    icon: 'document',
  },
};
```

### INIT_MENUS

初始化路由. 默认值:

- 开发环境 =>> HOME_ROUTE + Labs
- 生产环境 =>> HOME_ROUTE


## UI 框架

- [Element UI](https://element.eleme.cn/#/zh-CN)

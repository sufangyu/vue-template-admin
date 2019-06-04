# vue-template-admin

后台项目通用模板

- 安装即可使用, 无需再配置router、store, 无需封装 http 请求库. 构建设置 CDN、Gzip 压缩.

- 已集成常用的 flex 弹性布局、宫格布局、svg 图标、上下留白、两翼留白等组件.

- 内置 Element UI 框架, 解决小数精准度问题, 更有常用的指令、过滤器等


## 安装与构建

``` bash
# install with npm
npm install

# install with yarn
yarn install

# 启动本地开发
npm run serve

# 启动本地开发 - 设置指定的代理环境. 配置文件 ./config/proxy.js
npm run serve -- --env=local
npm run serve -- --env=dev

# 项目说明文档
npm run docs:dev

# 构建
npm run build

# 分析构建文件体积
npm run analyz
```

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
│  │  └─normalize.css       # 样式初始化
│  ├─utils                  # 工具库. 建议按模块组织, 例如 number.js, array.js, validate.js 等
│  │  ├─auth.js             # 登录工具类
│  │  ├─number.js           # 数字拓展函数
│  │  └─request-helper.js   # 请求函数辅助函数
│  │  └─request.js          # 请求函数
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

## UI 框架

- [Element UI](https://element.eleme.cn/#/zh-CN)

## 部署

- 提交代码，Jenkins 构建

## 推荐规范

### 命名

**目录、文件命名**
全部采用小写方式， 以中划线分隔。
例: scripts, retina-sprites.scss, data.js, actionsheet.vue


**css 变量命名规范**
统一使用kebab-case(小写短横线)命名规范。

```html
<template>
  <div class="app-home-vue">
  </div>
</template>

<style lang='scss'>
.app-home-vue {}
</style>
```

**js 变量命名规范**
统一使用camelCase（小写驼峰式）命名规范。

```js
let myName = 'zhangsanfeng';
```

**路由命名规范**
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


### 组件组织

- 基础 UI 组件统一放在 src/components
- 页面业务组件放在对于页面下的components文件.

### 拓展
- [前端代码规范](https://www.yuque.com/gagwkz/rr9b4y)
- [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)


## 参考资料

- https://cn.vuejs.org/v2/guide/
- https://vuex.vuejs.org/zh/
- https://router.vuejs.org/zh/
- https://cli.vuejs.org/zh/guide/
- https://panjiachen.github.io/vue-element-admin-site/zh/

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/zh/config/).

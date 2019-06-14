# 组件

## 内置组件

通用模板已内置几个常用的组件, 分别如下:

- [Icon 图标](./icon.md)
- [Flex 弹性布局](./flex.md)
- [WhiteSpace 上下留白](./white-space.md)
- [wing-blank 两翼留白](./wing-blank.md)
- [Exception 异常提示](./exception.md)
- [Breadcrumb 面包屑](./breadcrumb.md)
- [ButtonConfirm 操作二次确认](./button-confirm.md)
- [Card 卡片](./card.md)
- [PageInfo 页面信息](./page-info.md)
- [Pagination 分页](./pagination.md)
- [Status 状态](./status.md)
- [Sticky 滚动吸附](./sticky.md)


## 已注册的全局组件

已默认注册了以下全局，可以直接使用，不需要再单独引入.

- Icon 图标
- Flex 弹性布局
- WhiteSpace 上下留白
- wing-blank 两翼留白
- Card 卡片
- Pagination 分页
- ButtonConfirm 操作二次确认

### 注册全局组件

在 `src/global-components.js` 引入组件后再注册. 如:

```js
import Card from '@/components/card';

Vue.component('card', Card);
```
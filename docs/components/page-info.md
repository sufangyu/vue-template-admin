# PageInfo 页面信息

页面信息控件, 用于展示页面信息.


## 使用
```js
<template>
  <page-info></page-info>
</template>

<script>
import PageInfo from '@/components/page-info';
...
</script>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| title | 标题 | String | 否 | '' |
| desc | 页面描述 | String | 否 | '' |
| extra | 额外内容 | String | 否 | '' |


## Slot
| 参数 | 说明 |
| ------ | ------ |
| title | 标题 |
| desc | 描述 |
| extra | 额外内容 |

# Card 卡片

内容展示控件, 将信息聚合在卡片容器中展示。


## 使用
```js
<template>
  <card title="卡片标题" bottom borderDisabled></card>
</template>

<script>
import Card from '@/components/card';
...
</script>
```

## Attributes
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| title | 标题 | String | 否 | '' |
| subtitle | 副标题 | String | 否 | '' |
| gray | 是否使用灰色标题 | Boolean | 否 | false |
| bottom | 是否启用底部边距 | Boolean | 否 | false |
| borderDisabled | 是否隐藏标题边线 | Boolean | 否 | false |


## Slot
| 参数 | 说明 |
| ------ | ------ |
| — | 展示内容 |
| title | 标题 |
| subtitle | 副标题 |
| extra | 额外内容 |
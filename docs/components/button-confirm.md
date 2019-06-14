# ButtonConfirm 操作二次确认

操作二次确认控件, 用于删除等需要二次确认的操作.


## 使用
```js
<template>
  <button-confirm></button-confirm>
</template>

<script>
import ButtonConfirm from '@/components/button-confirm';
...
</script>
```

## Attributes
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| visible | 是否显示 | Boolean | 是 | false |
| title | 标题 | String | 否 | 提示 |
| description | 描述文案 | String | 否 | 确认要删除该条数据 ? |
| buttonLabel | 触发按钮的文案 | String | 否 | 删除 |
| buttonSize | 触发按钮的文案的尺寸. 值可为 `medium` `small` `mini` | String | 否 | mini |
| buttonType | 触发按钮的文案的类型. 值可为 `primary` `success` `warning` `danger` `info` `text` | String | 否 | danger |


## Events
| 事件名称 | 说明 | 回调参数 |
| ------ | ------ | ------ |
| confirm | 确认触发 | — |
| cancel | 取消触发 | — |
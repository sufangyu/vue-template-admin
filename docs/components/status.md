# Status 状态

状态标签, 用于标记状态.


## 使用
```js
<template>
  <status type="tag" type="success" text="已完成"></status>
  <status type="dot" type="error"></status>
</template>

<script>
import Status from '@/components/status';
...
</script>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| type | 显示类型. 值可为`tag`, `dot` | String | 否 | 'tag' |
| size | 尺寸, 只对 `type=tag` 有效. 值可为 `''` `medium` `small` `mini` | String | 否 | '' |
| status | 当前状态. 值可为 `default` `success` `error` `processing` `warning` | String | 否 | 'default' |
| text | 状态描述文字 | String | 否 | '' |
| color | 自定义颜色 | String | 否 | '' |

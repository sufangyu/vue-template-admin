# Sticky 滚动吸附

用于滚动到一定距离固定指定内容.


## 使用
```html
<template>
  <sticky :stickyTop="64">
    <div class="sticky-header">滚动吸附头部</div>
  </sticky>
</template>

<script>
import Sticky from '@/components/sticky';
...
</script>

<style lang="scss">
.sticky-header {
  color: #fff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #007fff;
}
...
</style>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| scrollElement | 监听滚动的元素. | Element | 否 | 'window' |
| stickyTop | 吸附距离顶部的位置. | Number | 否 | 0 |
| zIndex | 层级关系. | Number | 否 | 1 |
| className | 类名. | String | 否 | - |

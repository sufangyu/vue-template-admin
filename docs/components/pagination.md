# Pagination 分页

当数据量过多时，使用分页分解数据.


## 使用
```js
<template>
  <pagination
    :total="total"
    :current-page="page"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script>
import Pagination from '@/components/pagination';
...
</script>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| pagerCount | 页码按钮的数量，当总页数超过该值时会折叠 | Number | 否 | 7 |
| pageSizes | 每页显示条目个数 | Array | 否 | [10, 20, 30, 40] |
| layout | 组件布局，子组件名用逗号分隔 | String | 否 | 'total, sizes, prev, pager, next, jumper' |


## Events
| 事件名称	 | 说明 |
| ------ | ------ |
| size-change | pageSize 改变时会触发 |
| current-change | currentPage 改变时会触发 |
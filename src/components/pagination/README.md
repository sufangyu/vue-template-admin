# Pagination

分页组件. 当数据量过多时，使用分页分解数据

## Props

<!-- @vuese:Pagination:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|size|每页显示条数|`Number`|`false`|10|
|pagerCount|页码按钮的数量，当总页数超过该值时会折叠|`Number`|`false`|7|
|pageSizes|每页显示条目个数|`Array`|`false`|10,20,30,40|
|layout|组件布局，子组件名用逗号分隔|`String`|`false`|'total, sizes, prev, pager, next, jumper'|

<!-- @vuese:Pagination:props:end -->


## Events

<!-- @vuese:Pagination:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|size-change|pageSize 改变时会触发|每页条数|
|current-change|currentPage 改变时会触发|当前页|

<!-- @vuese:Pagination:events:end -->



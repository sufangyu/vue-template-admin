# ButtonConfirm

二次确认 Popover 弹出框

## Props

<!-- @vuese:ButtonConfirm:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|visible|是否显示|`Boolean`|`false`|false|
|title|标题|`String`|`false`|'提示'|
|description|详细描述|`String`|`false`|'确认要删除该条数据 ?'|
|buttonLabel|按钮文案|`String`|`false`|'删除'|
|buttonSize|按钮尺寸|`String`|`false`|'mini'|
|buttonType|按钮类型|`String`|`false`|'danger'|

<!-- @vuese:ButtonConfirm:props:end -->


## Events

<!-- @vuese:ButtonConfirm:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|update:visible|更新是否显示状态|-|
|cancel|取消回调函数|-|
|confirm|确认回调函数|-|

<!-- @vuese:ButtonConfirm:events:end -->


## Slots

<!-- @vuese:ButtonConfirm:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|
|button|按钮区域|`<el-button>删除</el-button>`|

<!-- @vuese:ButtonConfirm:slots:end -->



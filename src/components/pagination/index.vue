<template>
  <el-pagination
    v-bind="$attrs"
    background
    :layout="layout"
    :page-sizes="pageSizes"
    :pager-count="pagerCount"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script>
/**
 * 分页组件.
 * 当数据量过多时，使用分页分解数据
 */
export default {
  name: 'Pagination',
  props: {
    // 每页显示条数
    size: {
      type: Number,
      default: 10,
    },
    // 页码按钮的数量，当总页数超过该值时会折叠
    pagerCount: {
      type: Number,
      default: 7,
    },
    // 每页显示条目个数
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40];
      },
    },
    // 组件布局，子组件名用逗号分隔
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
  },
  methods: {
    handleSizeChange(val) {
      // pageSize 改变时会触发
      // @arg 每页条数
      this.$emit('size-change', val);
    },
    handleCurrentChange(val) {
      // currentPage 改变时会触发
      // @arg 当前页
      this.$emit('current-change', val);
    },
  },
};
</script>

<style>

</style>

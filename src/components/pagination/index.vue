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
export default {
  props: {
    size: {
      type: Number,
      default: 10,
    },
    pagerCount: {
      type: Number,
      default: 7,
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40];
      },
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('size-change', val);
    },
    handleCurrentChange(val) {
      this.$emit('current-change', val);
    },
  },
};
</script>

<style>

</style>

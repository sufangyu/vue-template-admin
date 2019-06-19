<template>
  <div
    class="whitespace"
    :class="sizeClass"
  ></div>
</template>

<script>
/**
 * 上下留白的间距
 */
export default {
  name: 'WhiteSpace',
  props: {
    // 间距大小.
    // 取值: `xs`, `sm`, `md`, `lg`, `xl`
    size: {
      type: String,
      default: 'md',
      validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1,
    },
  },
  computed: {
    sizeClass() {
      return `whitespace-${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.whitespace {
  &.whitespace-xs {
    height: 3px;
  }

  &.whitespace-sm {
    height: 6px;
  }

  &.whitespace-md {
    height: 9px;
  }

  &.whitespace-lg {
    height: 15px;
  }

  &.whitespace-xl {
    height: 21px;
  }
}

</style>

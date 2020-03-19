<template>
  <svg
    class="icon-svg"
    aria-hidden="true"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
/**
 * SVG Icon 图标
 */
export default {
  name: 'IconSvg',
  props: {
    // 图标名称. 对应 svg 文件名称
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style>
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

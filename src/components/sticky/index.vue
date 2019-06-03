<template>
  <div :style="{height: height + 'px', zIndex: zIndex}">
    <div
      :class="className"
      :style="{
        top: stickyTop + 'px',
        zIndex: zIndex,
        position: position,
        width: width,
        height:height + 'px',
      }"
    >
      <slot><div>sticky</div></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticky',
  props: {
    // 监听滚动的元素
    scrollElement: {
      default: () => window,
    },
    // 吸附距离顶部的位置
    stickyTop: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      active: false, // 是否处理吸附状态
      isSticky: false,
      position: '',
      width: undefined,
      height: undefined,
      handleElement: this.scrollElement,
    };
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height;
    // 监听事件
    if (this.handleElement !== window) {
      this.handleElement = document.querySelector(this.handleElement);
    }
    this.handleElement.addEventListener('scroll', this.handleScroll);
    this.handleElement.addEventListener('resize', this.handleReize);
    window.addEventListener('resize', this.handleReize);
  },
  activated() {
    this.handleScroll();
  },
  destroyed() {
    this.handleElement.removeEventListener('scroll', this.handleScroll);
    this.handleElement.removeEventListener('resize', this.handleReize);
    window.removeEventListener('resize', this.handleReize);
  },
  methods: {
    handleScroll() {
      this.width = `${this.$el.getBoundingClientRect().width}`;
      const offsetTop = this.$el.getBoundingClientRect().top;
      if (offsetTop <= this.stickyTop) {
        this.sticky();
        return;
      }
      this.reset();
    },
    handleReize() {
      if (this.isSticky) {
        this.width = `${this.$el.getBoundingClientRect().width}px`;
      }
    },
    sticky() {
      if (this.active) {
        return;
      }
      this.position = 'fixed';
      this.width = `${this.width}px`;
      this.active = true;
      this.isSticky = true;
    },
    reset() {
      if (!this.active) {
        return;
      }
      this.position = '';
      this.width = 'auto';
      this.active = false;
      this.isSticky = false;
    },
  },
};
</script>

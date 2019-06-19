<template>
  <el-card
    v-bind="$attrs"
    :class="classNames"
  >
    <!-- 头部区域 -->
    <template slot="header" v-if="title || this.$slots.title">
      <div class="title">
        <!-- 标题区域 -->
        <slot name="title">
          <!-- `<h3>标题</h3>` -->
          <h3>{{ title }}</h3>
        </slot>
      </div>

      <div class="subtitle" v-if="title || this.$slots.subtitle">
        <!-- 副标题区域 -->
        <slot name="subtitle">
          <!-- `<span>副标题</span>` -->
          <span>{{ subtitle }}</span>
        </slot>
      </div>

      <div class="extra">
        <!-- 额外区域 -->
        <slot name="extra">
          <!-- '' -->
        </slot>
      </div>
    </template>

    <slot>
      <!-- '' -->
    </slot>
  </el-card>
</template>

<script>
/**
 * 卡片
 */
export default {
  name: 'Card',
  props: {
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 副标题
    subtitle: {
      type: String,
      default: '',
    },
    // 是否使用灰色标题
    gray: {
      type: Boolean,
      default: false,
    },
    // 是否启用底部边距
    bottom: {
      type: Boolean,
      default: false,
    },
    // 是否隐藏标题边线
    borderDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      return {
        'card-gray': this.gray,
        'card-bottom': this.bottom,
        'card-header-border-none': this.borderDisabled,
      };
    },
  },
};
</script>

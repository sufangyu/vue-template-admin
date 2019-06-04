<template>
  <el-card
    v-bind="$attrs"
    :class="classNames"
  >
    <template slot="header" v-if="title || this.$slots.title">
      <div class="title">
        <slot name="title">
          <h3>{{ title }}</h3>
        </slot>
      </div>

      <div class="subtitle" v-if="title || this.$slots.subtitle">
        <slot name="subtitle">
          <span>{{ subtitle }}</span>
        </slot>
      </div>

      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </template>

    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    // 是否使用灰色标题
    gray: {
      type: Boolean,
      default: false,
    },
    // 是否启用底部编剧
    bottom: {
      type: Boolean,
      default: false,
    },
    // 是否不显示标题边线
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

<template>
  <el-popover
    v-bind="$attrs"
    placement="top"
    v-model="show"
    :title="title"
    width="200"
    class="button-confirm"
  >
    <slot>
      <div class="button-confirm-content">
        <p>{{ description }}</p>
      </div>
      <div style="text-align: right; margin: 0">
        <el-button
          type="text"
          size="mini"
          @click="handleCancel"
        >取消</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handleConfirm"
        >确定</el-button>
      </div>
    </slot>

    <!-- 按钮区域 -->
    <slot name="button">
      <!-- `<el-button>删除</el-button>` -->
      <el-button
        slot="reference"
        v-bind="$attrs"
        :size="buttonSize"
        :type="buttonType"
      >{{ buttonLabel }}</el-button>
    </slot>
  </el-popover>
</template>

<script>
/**
 * 二次确认 Popover 弹出框
 */
export default {
  name: 'ButtonConfirm',
  props: {
    // 是否显示
    visible: {
      type: Boolean,
      default: false,
    },
    // 标题
    title: {
      type: String,
      default: '提示',
    },
    // 详细描述
    description: {
      type: String,
      default: '确认要删除该条数据 ?',
    },
    // 按钮文案
    buttonLabel: {
      type: String,
      default: '删除',
    },
    // 按钮尺寸
    buttonSize: {
      type: String,
      default: 'mini',
    },
    // 按钮类型
    buttonType: {
      type: String,
      default: 'danger',
    },
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(val) {
        // 更新是否显示状态
        this.$emit('update:visible', val);
      },
    },
  },
  methods: {
    handleCancel() {
      this.hideSelf();
      // 取消回调函数
      this.$emit('cancel');
    },
    handleConfirm() {
      this.hideSelf();
      // 确认回调函数
      this.$emit('confirm');
    },
    hideSelf() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-confirm-content {
  margin-bottom: 10px;
}
</style>

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

    <slot name="button">
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
export default {
  name: 'ButtonConfirm',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '提示',
    },
    description: {
      type: String,
      default: '确认要删除该条数据 ?',
    },
    buttonLabel: {
      type: String,
      default: '删除',
    },
    buttonSize: {
      type: String,
      default: 'mini',
    },
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
        this.$emit('update:visible', val);
      },
    },
  },
  methods: {
    handleCancel() {
      this.hideSelf();
      this.$emit('cancel');
    },
    handleConfirm() {
      this.hideSelf();
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

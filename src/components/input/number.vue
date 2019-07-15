<template>
  <el-input
    v-bind="$attrs"
    v-model.trim="data"
    @blur="handleBlur"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
    },
    point: {
      type: Number,
      default: 2,
    },
    max: {
      type: Number,
      default: 99999,
    },
  },
  computed: {
    data: {
      get() {
        return this.value;
      },
      set(newVal) {
        // 格式化函数
        const formatVal = {
          0: () => {
            return newVal.replace(/[^\d]/g, '') || null;
          },
          1: () => {
            return newVal.match(/^\d*(\.?\d{0,1})/g)[0] || null;
          },
          2: () => {
            return newVal.match(/^\d*(\.?\d{0,2})/g)[0] || null;
          },
        };

        if (formatVal[this.point] > 2) {
          console.warn('Only support 2 point!');
          this.$emit('input', newVal);
        } else {
          const val = formatVal[this.point]();
          this.$emit('input', val);
        }
      },
    },
  },
  methods: {
    handleBlur(e) {
      // 如果是允许输入小数, 并且末位是小数点, 则补全
      if (this.point !== 0) {
        let val = e.target.value;
        if (val.toString().endsWith('.')) {
          val = `${val}0`;
          this.$emit('input', val);
        }
      }
    },
  },
};
</script>

<style>

</style>

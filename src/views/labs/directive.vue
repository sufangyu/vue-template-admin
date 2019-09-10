<template>
  <div class="page-labs">
    <card
      title="限制输入数字（包含小数）"
      shadow="hover"
      borderDisabled
    >
      <el-input
        v-model="numVal1"
        v-number-only:0="numVal1"
        placeholder="只能输入整数"
      ></el-input>

      <white-space></white-space>

      <el-input
        v-model="numVal2"
        v-number-only:1="numVal2"
        placeholder="最多可以输入一位小数"
      ></el-input>

      <white-space></white-space>

      <el-input
        v-model="numVal3"
        v-number-only:2="numVal3"
        placeholder="最多可以输入两位小数"
      ></el-input>

      <white-space></white-space>

      <el-input
        v-model="numVal4"
        v-number-only:0:-1="numVal4"
        data-negative
        placeholder="可以输入负整数"
      ></el-input>

      <white-space></white-space>

      <el-input
        v-model="numVal5"
        v-number-only:2:-1="numVal5"
        data-negative
        placeholder="可以输入负小数"
      ></el-input>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numVal1: null,
      numVal2: null,
      numVal3: null,
      numVal4: null,
      numVal5: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

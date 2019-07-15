<template>
  <div class="decimal-demo">
    <card
      title="输入小数"
      shadow="hover"
      bottom
      borderDisabled
    >
      <input-number
        v-model="num"
        placeholder="只能输入1位小数"
        :point="1"
      ></input-number>

      <white-space />

      <input-number
        v-model="num2"
        placeholder="只能输入2位小数"
      ></input-number>

      <white-space />

      <input-number
        v-model="num3"
        :point="0"
        placeholder="只能输入整数"
      ></input-number>
    </card>
  </div>
</template>

<script>
import { InputNumber } from '@/components/input';

export default {
  components: {
    InputNumber,
  },
  data() {
    return {
      num: null,
      num2: null,
      num3: null,
    };
  },
};
</script>

<style>

</style>

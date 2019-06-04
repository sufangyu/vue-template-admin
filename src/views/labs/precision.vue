<template>
  <div class="page-labs">
    <card
      title="小数精准度"
      shadow="hover"
      borderDisabled
    >
      <p>
        四舍五入：
        <br>
        NP.strip(0.09999999999999998) =>> {{ strip }}</p>
      <p>
        加法：
        <br>
        NP.plus(0.1, 0.2, 0.1, 0.2) =>> {{ plus }}</p>
      <p>
        减法：
        <br>
        NP.minus(1.0, 0.9) =>> {{ minus }}</p>
      <p>
        乘法：
        <br>
        NP.times(0.362, 100) =>> {{ times }}
      </p>
      <p>
        除法：
        <br>
        NP.divide(1.21, 1.1) =>> {{ divide }}
      </p>
      <p>
        使用的库：
        <a
          href="https://www.npmjs.com/package/number-precision"
          target="_blank"
          rel="number-precision"
        >number-precision</a>
      </p>
    </card>
  </div>
</template>

<script>
import NP from 'number-precision';

export default {
  data() {
    return {
      strip: NP.strip(0.09999999999999998),
      plus: NP.plus(0.1, 0.2, 0.1, 0.2),
      minus: NP.minus(1.0, 0.9),
      times: NP.times(0.362, 100),
      divide: NP.divide(1.21, 1.1),
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 8px 0;
  line-height: 1.5;
}
</style>

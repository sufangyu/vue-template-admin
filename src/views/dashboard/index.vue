<template>
  <div class="page-welcome">
    <h2>Welcome !</h2>
    <p>欢迎使用 ~</p>
  </div>
</template>

<script>
import testMixins from '@/mixins/test';

export default {
  name: 'dashboard',
  mixins: [testMixins],
  components: {
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;

  h2 {
    font-size: 24px;
  }

  p {
    opacity: 0.6;
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>

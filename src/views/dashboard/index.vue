<template>
  <div class="page-dashboard">
    <img alt="Vue logo" src="../../assets/logo.png">
    <icon-svg name="qq" />
    <p v-has="{action: 'admin', actions: ['admin', 'edit']}">{{ date | fromNow }}</p>
    <el-button>xxx</el-button>
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

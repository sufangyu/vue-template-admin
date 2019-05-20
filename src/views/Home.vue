<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <icon-svg name="qq" />
    <p v-has="{action: 'admin', actions: ['admin', 'edit']}">{{ date | fromNow }}</p>
  </div>
</template>

<script>
import testMixins from '@/mixins/test';

export default {
  name: 'home',
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

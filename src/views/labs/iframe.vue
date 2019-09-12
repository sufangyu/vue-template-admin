<template>
  <div class="labs-demo">
    <card
      title="第三方网址"
      shadow="hover"
      borderDisabled
    >
      <el-button @click="handleOpenIframe('vue')">Vue 官网</el-button>
    </card>
  </div>
</template>

<script>
import mixinSetTagsViewTitle from '@/mixins/set-tags-view-title';

export default {
  name: 'labsDialog',
  mixins: [mixinSetTagsViewTitle],
  data() {
    return {};
  },
  created() {},
  methods: {
    handleOpenIframe(key) {
      const websites = {
        vue: 'https://cn.vuejs.org/index.html',
      };

      let website = websites[key] || '';
      website = encodeURIComponent(website);
      this.$router.push(`/iframe?website=${website}`);
    },
    handleHideDialog(keyName) {
      this[keyName] = false;
    },
  },
};
</script>

<style>

</style>

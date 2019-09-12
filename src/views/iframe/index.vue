<template>
  <section class="iframe-wrapper">
    <iframe
      :src="iframeSrc"
      ref="inlineFrame"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: '',
    };
  },
  created() {
    const { website } = this.$route.query;
    this.iframeSrc = decodeURIComponent(website);
  },
};
</script>

<style lang="scss">
.iframe-wrapper {
  margin: -24px -24px 0;

  iframe {
    border: none;
    width: 100%;
    height: calc(100vh - 98px - 76px);
  }
}

@media only screen and (max-width: 575px) {
  .iframe-wrapper {
    margin: -24px 0 0;
  }
}
</style>

<template>
  <footer class="app-layout-footer">
    <section class="app-layout-footer-global">
      <div class="footer-copyright">Copyright © 2019 技术体验部出品</div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
.app-layout {
  &-footer {
    color: $color-text-caption;
    font-size: $font-size-base;
    // background: #f0f2f5;

    &-global {
      margin: 30px 0;
      padding: 0 15px;
      text-align: center;
    }
  }
}
</style>

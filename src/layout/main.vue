<template>
  <div class="app-layout">
    <app-sider />
    <section
      class="app-layout-main"
      :class="bodyClassName"
    >
      <app-header />
      <app-body />
      <app-footer />
    </section>
  </div>
</template>

<script>
import {
  AppSider,
  AppHeader,
  AppBody,
  AppFooter,
} from './components/index';

export default {
  name: 'Layout',
  components: {
    AppSider,
    AppHeader,
    AppBody,
    AppFooter,
  },
  computed: {
    bodyClassName() {
      const { sidebar } = this.$store.state.app;
      return sidebar.opened ? '' : 'offset-min';
    },
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: row;

  &-main {
    flex: auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding-left: $app-sider-width;

    &.offset-min {
      padding-left: $app-sider-width-min;
    }

    a {
      color: $color-link;
    }
  }
}
</style>

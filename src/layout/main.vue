<template>
  <div class="app-layout">
    <app-sider />
    <section class="app-layout-main">
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
  }

  &-body {
    flex: auto;
    min-height: 0;
  }
}
</style>

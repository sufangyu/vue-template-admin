<template>
  <div class="app-layout" :class="layoutClassName">
    <div
      v-if="sidebar.opened && screenSize === 'screen-xs'"
      @click="handleClickOutside"
      class="app-layout-sider-mask"
    ></div>
    <app-sider />
    <section class="app-layout-main">
      <app-header />
      <app-body />
      <app-footer />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  AppSider,
  AppHeader,
  AppBody,
  AppFooter,
} from './components/index';
import ResizeMixin from './mixins/resize-handler';

export default {
  name: 'Layout',
  components: {
    AppSider,
    AppHeader,
    AppBody,
    AppFooter,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters({
      sidebar: 'app/sidebar',
      device: 'app/device',
      screenSize: 'app/screenSize',
    }),
    layoutClassName() {
      const { screenSize, sidebar } = this.$store.state.app;
      return {
        [screenSize]: screenSize,
        'sidebar-show': sidebar.opened,
        'sidebar-hide': !sidebar.opened,
        'without-animation': sidebar.withoutAnimation,
      };
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss">
body {
  &.sidebar-show {
    overflow: hidden;
    position: relative;
    width: calc(100% - 17px);
  }
}
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

    a {
      color: $color-link;
    }
  }

  // 侧边栏显示
  &.sidebar-show {
    .app-layout-sider {
      width: $app-sider-width;
    }

    .app-layout-main {
      padding-left: $app-sider-width;
    }

    .app-layout-header.fixed {
      .app-layout-header-inner {
        width: calc(100% - #{$app-sider-width});
      }
    }
  }

  // 侧边栏隐藏
  &.sidebar-hide {
    .app-layout-sider {
      width: $app-sider-width-min;
    }

    .app-layout-main {
      padding-left: $app-sider-width-min;
    }

    .app-layout-header.fixed {
      .app-layout-header-inner {
        width: calc(100% - #{$app-sider-width-min});
      }
    }
  }

  // 超小屏
  &.screen-xs {
    .app-layout-main {
      padding-left: 0;
    }

    .app-layout-header.fixed {
      .app-layout-header-inner {
        width: 100%;
      }
    }

    .app-layout-sider {
      // transition: transform .28s;
      width: $app-sider-width !important;
    }

    // 侧边栏显示
    &.sidebar-show {}

    // 侧边栏隐藏
    &.sidebar-hide {
      .app-layout-sider {
        pointer-events: none;
        transform: translate3d(-$app-sider-width, 0, 0);
      }
    }
  }
}
</style>

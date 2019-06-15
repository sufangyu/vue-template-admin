<template>
  <aside class="app-layout-sider">
    <div class="app-layout-sider-inner">
      <section class="logo">
        <router-link :to="{path: '/'}">
          <img src="@/assets/logo.png" alt="">
          <h1 v-if="sidebar.opened">Admin Template</h1>
        </router-link>
      </section>
      <section class="menu">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :unique-opened="true"
            :collapse-transition="false"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="variables.menuTextActive"
            mode="vertical"
          >
            <sidebar-item
              v-for="menu in menus"
              :key="menu.path"
              :item="menu"
              :base-path="menu.path"
            />
          </el-menu>
        </el-scrollbar>
      </section>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './sidebar-item';

import variables from '@/styles/theme/default.scss';

export default {
  name: 'AppSider',
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters({
      sidebar: 'app/sidebar',
      screenSize: 'app/screenSize',
      menus: 'menu/menus',
    }),
    variables() {
      return variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    this.$store.dispatch('menu/getMenus');
  },
};
</script>

<style lang="scss">
.app-layout {

  &-sider {
    width: $app-sider-width;
    transition: all .2s;
    position: relative;
    z-index: 201;
    min-height: 100vh;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;

    &-mask {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.65);
      transition: opacity .3s linear;
      z-index: 2010;
    }

    &-inner {
      background: $app-sider-menu-fill;
      position: relative;
    }

    &.hide {
      width: $app-sider-width-min;
    }

    .logo {
      position: relative;
      height: $app-header-height;
      line-height: $app-header-height;
      overflow: hidden;
      background: $app-sider-logo-fill;
      transition: all .3s;
      text-align: center;

      img {
        display: inline-block;
        height: $app-header-height / 2;
        vertical-align: middle;
      }

      h1 {
        display: inline-block;
        margin: 0 0 0 12px;
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        vertical-align: middle;
      }
    }

    .menu {
      padding: 16px 0;
      height: calc(100vh - 64px);
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss">
// @TODO: min stauts menu atived

.app-layout-sider {
  .el-scrollbar {
    height: 100%;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;

    &.is-active {
      color: $menu-text-active !important;
      background-color: $menu-bg-active !important;
    }
  }

  .el-submenu.is-active .el-submenu__title {
    color: $menu-text-active !important;
    border-bottom-color: transparent;
  }

  .el-menu {
    border-right: none;

    .el-menu-item,
    .el-submenu__title {
      &:hover {
        color: $menu-text-active !important;
      }

      .icon-svg {
        font-size: 16px;
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }

  .el-submenu .el-menu {
    background-color: $sub-menu-bg !important;

    .el-menu-item,
    .el-submenu__title {
      background-color: $sub-menu-bg !important;

      &.is-active {
        background-color: $menu-bg-active !important;
      }
    }

    .el-menu {
      background-color: $sub-menu-bg !important;
    }
  }

  // min status
  .el-menu--collapse {
    width: $app-sider-width-min;

    .el-menu-item.is-active,
    .el-submenu__title.is-active {
      background-color: transparent !important;
    }

    .el-menu-item,
    .el-submenu__title {
      text-align: center;
    }


    .el-menu-item .icon-svg,
    .el-submenu__title .icon-svg {
      margin-right: 0;
    }

    .el-submenu > .el-submenu__title > span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }

    .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
  }

}
</style>

<template>
  <el-breadcrumb class="breadcrumb-container" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList" :key="item.path"
      >
        <!-- no-redirect || last one -->
        <span
          v-if="item.redirect === 'noRedirect' || index === levelList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp';
import { HOME_ROUTE } from '@/config';

export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [HOME_ROUTE].concat(matched);
      }

      this.levelList = matched.filter((item) => {
        return item.meta && item.meta.title && item.meta.breadcrumb !== false;
      });
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === HOME_ROUTE.name.toLocaleLowerCase();
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      const toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const currentPath = this.$route.path;
      const { redirect, path } = item;

      if (redirect && redirect === currentPath) {
        return;
      }

      if (redirect) {
        this.$router.push(redirect);
        return;
      }

      const url = this.pathCompile(path);
      this.$router.push(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: block;
  font-size: $font-size-base;

  .no-redirect {
    cursor: text;
    color: $breadcrumb-color-text-base
  }

  .el-breadcrumb__inner,
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: $breadcrumb-color-text-base;
    font-weight: 400;
  }

  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    &:hover {
      color: $breadcrumb-color-text-tap;
    }
  }

  .el-breadcrumb__item:last-child span {
    color: $breadcrumb-color-text-last;
  }
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>

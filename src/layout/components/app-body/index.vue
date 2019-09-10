<template>
  <main class="app-layout-body">
    <section class="page-content">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </section>
  </main>
</template>

<script>
// import Breadcrumb from '@/components/breadcrumb';
// import PageInfo from '@/components/page-info';

export default {
  name: 'AppBody',
  components: {
    // Breadcrumb,
    // PageInfo,
  },
  data() {
    return {};
  },
  computed: {
    cachedViews() {
      return this.$store.state['tags-view'] ? this.$store.state['tags-view'].cachedViews : [];
    },
    key() {
      return this.$route.path || +new Date();
    },
  },
  watch: {
    $route() {
    },
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.app-layout-body {
  flex: auto;
  min-height: 0;
  position: relative;

  a {
    color: $color-link;
  }
}
.page-header {
  padding: 16px 32px;
  background: $fill-base;
  border-bottom: 1px solid #e8e8e8;

  .app-breadcrumb {
    + .page-info {
      margin-top: 16px;
    }
  }
}
.page-content {
  margin: 24px 24px 0;
}
</style>

<style lang="scss">
.app-layout-body {
  a {
    color: $color-link;

    &:hover,
    &:active {
      color: $color-link-hover;
    }
  }
}
</style>

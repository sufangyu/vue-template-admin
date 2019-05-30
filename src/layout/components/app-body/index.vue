<template>
  <section class="app-layout-body">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppBody',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView ? this.$store.state.tagsView.cachedViews : [];
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<template>
  <header class="app-layout-body">
    <router-view></router-view>
  </header>
</template>

<script>
export default {
  name: 'AppBody',
};
</script>

<style lang="scss" scoped>
.app-layout-body {
  a {
    color: $color-link;
  }
}
</style>

<template>
  <div
    class="page-info"
    v-if="titleScoped || descScoped || extraScoped"
  >
    <h1
      class="title"
      v-if="titleScoped"
    >{{ titleScoped }}</h1>
    <div
      class="desc"
      v-if="descScoped"
    >
      <!-- 描述区域 -->
      <slot name="desc">
        <!-- `<p>描述内容</p>` -->
        <p>{{ descScoped }}</p>
      </slot>
    </div>
    <div
      class="extra"
      v-if="extraScoped"
    >
      <!-- 额外区域 -->
      <slot name="extra">
        {{ extraScoped }}
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * 页面信息
 */
export default {
  name: 'PageInfo',
  props: {
    // 页面标题
    title: {
      type: String,
      default: '',
    },
    // 页面描述
    desc: {
      type: String,
      default: '',
    },
    // 额外内容
    extra: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      titleScoped: '',
      descScoped: '',
      extraScoped: '',
    };
  },
  watch: {
    $route() {
      this.getPageInfo();
    },
  },
  created() {
    this.getPageInfo();
  },
  methods: {
    getPageInfo() {
      const matched = this.$route.matched.filter(item => item.name);
      const last = matched[matched.length - 1].meta;
      this.titleScoped = last.title || this.title;
      this.descScoped = last.desc || this.desc;
      this.extraScoped = last.extra || this.extra;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-info {
  .title {
    // margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 500;
    color: $page-info-title-color-text;
    line-height: $line-height-paragraph;
  }

  .desc {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.2;
    color: $page-info-desc-color-text;

    p {
      margin: 0;
    }
  }

  .extra {
    color: $page-info-extra-color-text;
    margin-bottom: 16px;
  }
}
</style>

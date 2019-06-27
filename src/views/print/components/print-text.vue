<template>
  <section class="print-wrapper">
    <div ref="html">
      <article
        v-for="(item, index) in list"
        :key="index"
        class="print-item"
      >
        <h2 class="item-title">{{ item.name }}</h2>
        <div class="item-description">{{ item.desc }}</div>
        <div class="item-published">
          <img :src="item.avator">
          <span>{{ item.author }}发布于</span>
          <a :href="item.published">{{ item.published }}</a>
          <span class="item-created">{{ item.created }}</span>
        </div>
        <div class="item-meta">
          <span>收藏：{{ item.statistics.collection }}</span>
          <span>点赞：{{ item.statistics.link }}</span>
          <span>评论：{{ item.statistics.commit }}</span>
        </div>
      </article>
    </div>

    <!-- 打印样式 -->
    <textarea ref="style">
      * {
        margin: 0;
        padding: 0;
      }
      body {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-family: "黑体";
        line-height: 1;
      }
      .print-item {
        page-break-after: always;
        padding: 15px;
        max-width: 980px;
        margin: 0 auto;
      }
      .item-title {
        margin-bottom: 20px;
        font-size: 18px;
      }
      .item-description {
        font-size: 14px;
        margin-bottom: 16px;
        line-height: 1.5;
      }
      .item-published img {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        vertical-align: middle;
        margin-right: 5px;
      }
      .item-published .item-created {
        margin-left: 25px;
      }
      .item-meta {
        margin-top: 16px;
        font-size: 13px;
      }
      .item-meta span:not(:first-child) {
        margin-left: 15px;
      }
    </textarea>
  </section>
</template>

<script>
export default {
  name: 'PrintText',
  components: {},
  mixins: [],
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  directives: {},
  filters: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    print() {
      const win = window.open('about:blank');
      const doc = win.document;
      const style = doc.createElement('style');
      style.innerHTML = this.$refs.style.value;
      const htmlContent = this.$refs.html.outerHTML;
      doc.head.appendChild(style);
      doc.body.innerHTML = htmlContent;
      win.print();
    },
  },
};
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
.print-wrapper {
  display: none;
}
</style>

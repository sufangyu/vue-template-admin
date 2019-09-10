<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag, $event)"
        :class="isActive(tag) ? 'active' : ''"
        class="tags-view-item"
      >
        {{ tag.title }}
        <span
          v-if="!tag.meta.affix"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
          title="关闭"
        />
      </router-link>
    </scroll-pane>

    <!-- 右键菜单 -->
    <ul
      v-show="visible"
      :style="{left:left+'px', top:top+'px'}"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li
        v-if="!(selectedTag.meta && selectedTag.meta.affix)"
        @click="closeSelectedTag(selectedTag)"
      >关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import path from 'path';
import { routerConstantMap } from '@/router';
import ScrollPane from './scroll-pane';

export default {
  components: {
    ScrollPane,
  },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,

      selectedTag: {},
      affixTags: [],
      routerConstantMap,
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state['tags-view'].visitedViews;
    },
    cachedViews() {
      return this.$store.state['tags-view'] ? this.$store.state['tags-view'].cachedViews : [];
    },
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu);
      } else {
        document.body.removeEventListener('click', this.closeMenu);
      }
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    // 是否高亮
    isActive(route) {
      return route.path === this.$route.path;
    },
    // 过滤获取 固定显示的 tags
    filterAffixTags(routes = [], basePath = '/') {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);

          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);

          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const affixTags = this.filterAffixTags(this.routerConstantMap);
      this.affixTags = affixTags;

      // eslint-disable-next-line no-restricted-syntax
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('addVisitedView', tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch('addView', this.$route);
      }
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('updateVisitedView', this.$route);
            }
            break;
          }
        }
      });
    },
    // 刷新当前
    refreshSelectedTag(view) {
      this.$store.dispatch('delCachedView', view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: `/redirect${fullPath}`,
          });
        });
      });
    },
    // 关闭当前
    closeSelectedTag(view) {
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          // 访问其他 tag
          this.toLastView(visitedViews, view);
        }
      });
    },
    // 关闭其他
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag();
      });
    },
    // 关闭所有
    closeAllTags(view) {
      this.$store.dispatch('delAllViews').then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      /* eslint-disable no-lonely-if */
      const [latestView] = visitedViews.slice(-1);
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: `/redirect${view.fullPath}` });
        } else {
          this.$router.push('/');
        }
      }
    },
    // 打开右键菜单
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetTop = this.$el.getBoundingClientRect().top; // container top
      const { offsetWidth } = this.$el; // container width
      const maxLeft = offsetWidth - menuMinWidth; // left boundary
      const left = e.clientX - offsetLeft + 15; // 15: margin right
      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.clientY - offsetTop; // 减去 tab-views 的位置
      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  // border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);

    li {
      margin: 0;
      padding: 8px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      position: relative;
      top: -3px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(.8);
        display: inline-block;
        vertical-align: -3px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>

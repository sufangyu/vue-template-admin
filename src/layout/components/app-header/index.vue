<template>
  <header
    class="app-layout-header fixed"
    :class="{ 'min': !sidebar.opened }"
  >
    <div class="app-layout-header-inner">
      <div class="app-layout-header-left">
        <hamburger
          @toggleClick="handleToggleSideBar"
          :is-actived="sidebar.opened"
          class="hamburger-container"
        />
      </div>

      <div class="app-layout-header-right">
        <el-tooltip
          effect="dark"
          content="使用文档"
          placement="bottom"
          class="hide-in-mobile"
        >
          <a href="https://www.github.com" target="_blank" class="action action-document">
            <icon-svg name="help" />
          </a>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="全屏"
          placement="bottom"
        >
          <span class="action action-fullscreen">
            <fullscreen />
          </span>
        </el-tooltip>

        <!-- 切换语言. 超过2种语言配置才显示 -->
        <div
          v-if="languages.length > 1"
          class="action hide-in-mobile"
        >
          <el-dropdown trigger="hover" placement="top">
            <div class="action-button">
              <icon-svg name="language" />
            </div>
            <el-dropdown-menu slot="dropdown" placement="bottom-end">
              <el-dropdown-item v-for="item in languages" :key="item.lang">
                <span @click="handleSetLang(item.lang)">{{item.name}}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!-- 全局通知信息 -->
        <div class="action">
          <el-popover
            placement="bottom"
            width="350"
            trigger="click"
            @show="handleMessagePopoverShow"
          >
            <!-- message tabs -->
            <messages ref="messages" @syncUnreadCount="handleSyncUnreadCount" />
            <el-badge :hidden="unreadCount === 0" slot="reference" :value="unreadCount" :max="99">
              <icon-svg name="bell" />
            </el-badge>
          </el-popover>
        </div>

        <!-- 账户操作 -->
        <div class="action">
          <el-dropdown class="action-button" trigger="hover" placement="top">
            <div class="action-button-inner">
              <icon-svg v-if="!account.avatar" class="avatar" name="user" />
              <img class="avatar" v-if="account.avatar" :src="account.avatar" alt="">
              <span class="name">{{account ? (account.nickname || '---') : '---'}}</span>
            </div>
            <el-dropdown-menu slot="dropdown" placement="bottom-end">
              <el-dropdown-item>
                <router-link to="/accounts/edit">{{ '基本资料' }}</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/accounts/password">{{ '修改密码' }}</router-link>
              </el-dropdown-item>
              <el-dropdown-item disabled>
                <router-link to="/">{{ '账户设置' }}</router-link>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <a @click="handleLogout" href="javascript:;">{{ '退出登录' }}</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/hamburger';
import Fullscreen from '@/components/fullscreen';
import Messages from './messages/index';
import { LANGUAGES } from '@/config';


export default {
  name: 'AppHeader',
  components: {
    Hamburger,
    Fullscreen,
    Messages,
  },
  data() {
    return {
      unreadCount: 0,
      languages: LANGUAGES,
    };
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'account',
    ]),
  },
  methods: {
    handleToggleSideBar() {
      this.$store.dispatch('toggleSidebar');
    },
    /**
     * 设置 语言
     *
     * @param {string} lang 语言 code
     */
    handleSetLang(lang) {
      console.log('switch language to', lang);
    },
    /**
     * 退出登录
     */
    async handleLogout() {
      await this.$store.dispatch('logout');
      // redirect to login
      this.$router.replace('/login');
    },
    /**
     * 显示全局信息中心
     */
    handleMessagePopoverShow() {
      // 触发加载数据
      this.$refs.messages.getMessages();
    },
    /**
     * 同步未读信息数量
     *
     * @param {number} count 未读数量
     */
    handleSyncUnreadCount(count) {
      this.unreadCount = count;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  // 头部
  &-header {
    height: $app-header-height;
    transition: width .2s;

    &-inner {
      position: relative;
      z-index: 9;
      height: $app-header-height;
      line-height: $app-header-height;
      background-color: $fill-base;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
      transition: width .2s;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-right {
      color: #808080;
      display: flex;
      align-items: center;

      a {
        color: inherit;
      }
    }

    .hamburger-container {
      padding: 0 20px;
      line-height: $app-header-height;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025);
      }
    }

    .action {
      padding: 0 12px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      font-size: 22px;
      transition: background-color 0.25s;

      &-button {
        cursor: pointer;
        position: relative;
        font-size: 22px;
        top: 0;
        color: #808080;
        height: $app-header-height;
        display: flex;
        justify-content: center;
        align-items: center;

        &-inner {
          display: flex;
          align-items: center;
        }
      }

      &:hover {
        background: rgba(0, 0, 0, .025);
      }

      .name {
        font-size: 14px;
        margin-left: 8px;
        vertical-align: middle;
        line-height: 1;
      }

      .avatar {
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, .05);
        line-height: 1;
      }

      .el-badge {
        line-height: normal;
        position: relative;
        top: -3px;
      }
    }

    // 固定头部
    &.fixed {
      .app-layout-header-inner {
        position: fixed;
        top: 0;
        right: 0;
        // left: $app-sider-width;
        width: calc(100% - #{$app-sider-width});
      }
    }
    &.min {
      .app-layout-header-inner {
        width: calc(100% - #{$app-sider-width-min});
      }
    }

  }
}
</style>

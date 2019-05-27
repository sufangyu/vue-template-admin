<template>
  <header class="app-layout-header fixed">
    <div class="app-layout-header-inner">
      <div class="app-layout-header-left">
        <hamburger
          @toggleClick="toggleSideBar"
          :is-actived="opened"
          class="hamburger-container"
        />
      </div>

      <div class="app-layout-header-right">
        <el-tooltip effect="dark" content="使用文档" placement="bottom">
          <a href="https://www.github.com" target="_blank" class="action action-document">
            <icon-svg name="help" />
          </a>
        </el-tooltip>

        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <span class="action action-fullscreen">
            <fullscreen />
          </span>
        </el-tooltip>

        <!-- 切换语言. 超过2种语言配置才显示 -->
        <div class="action" v-if="languages.length > 1">
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
            <div class="account-content">
              <icon-svg class="avatar" name="user" />
              <span class="name">{{account.nickname || account.username || '---'}}</span>
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
      opened: false,
      unreadCount: 0,
      languages: LANGUAGES,
      account: {
        username: '张三疯',
      },
    };
  },
  methods: {
    toggleSideBar() {
      this.opened = !this.opened;
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
      console.log('退出登录');
      // await this.$store.dispatch('logOut');
      // // 退出后, 重新实例化 VUE 路由器对象以避免 bug
      // location.reload();
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
      z-index: $popover-zindex;
      height: $app-header-height;
      line-height: $app-header-height;
      background-color: $fill-base;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);

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
      padding: 20px 20px;
      line-height: 46px;
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
      }

      &:hover {
        background: rgba(0, 0, 0, .025);
      }

      .name {
        font-size: 14px;
        margin-left: 8px;
        vertical-align: middle;
        display: inline-block;
        position: relative;
        top: -1px;
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
        left: 0;
        right: 0;
      }
    }

  }
}
</style>

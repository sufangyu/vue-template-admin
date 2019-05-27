<template>
  <div class="tabs-message" v-loading="loading">
    <el-tabs :stretch="true" v-model="activeName">
      <el-tab-pane
        v-for="(item, i) in messages"
        :key="`message-panel-${i}`"
        :name="item.name"
        :label="`${item.label} ${item.count !== 0 ? `(${item.count})` : ''}`"
      >
        <template v-if="item.list.length > 0">
          <div class="message-list">
            <message-item
              v-for="(message, idx) in item.list"
              :key="idx"
              :data="message"
              @click.native="handleViewMessage(message, item)"
            />
          </div>
          <div class="message-list-bottombar">
            <div @click="handleClearMessage(item)">清空{{ item.label }}</div>
            <div @click="handleViewMore(item)">查看更多</div>
          </div>
        </template>

        <div v-else class="message-list-empty">
          <icon-svg name="message-empty"></icon-svg>
          <div>暂时没有{{ item.label }} ~</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getUnreadMesages } from '@/api/global';
import MessageItem from './item';

export default {
  name: 'Message',
  components: {
    MessageItem,
  },
  data() {
    return {
      loading: false, // 是否加载中
      activeName: 'notices',
      messages: [
        {
          name: 'notices',
          label: '通知',
          list: [],
          count: 0,
        },
        {
          name: 'infos',
          label: '信息',
          list: [],
          count: 0,
        },
        {
          name: 'todos',
          label: '待办',
          list: [],
          count: 10,
        },
      ],
    };
  },
  computed: {
    unreadCount() {
      let count = 0;
      this.messages.forEach((item) => {
        count += item.count;
      });
      return count;
    },
  },
  methods: {
    /**
     * 获取全局信息通知
     */
    async getMessages() {
      console.log('获取全局信息通知');
      if (this.loading) {
        return;
      }

      // 解决打开时, tab 没有高亮第一项
      this.activeName = 'notices';
      this.loading = true;

      try {
        const res = await getUnreadMesages();
        this.loading = false;
        if (!res.success) {
          this.$message.error(res.message || '获取失败，请重试');
        } else {
          res.data.forEach((item, i) => {
            item.list.forEach((message) => {
              message.disabled = false;
            });

            this.messages[i].list = [...item.list];
            this.messages[i].count = item.list.length;
          });

          this.$emit('syncUnreadCount', this.unreadCount);
        }
      } catch (error) {
        console.log('getMessages error =>>', error);
      } finally {
        this.loading = false;
      }
    },
    /**
     * 查看信息详情
     *
     * @param {object} message 信息
     * @param {object} item 信息类别
     */
    handleViewMessage(message, item) {
      if (message.disabled) {
        return;
      }

      this.$message(`查看 ${message.title} 详情`);
      message.disabled = true;
      item.count -= 1;
      this.$emit('syncUnreadCount', this.unreadCount);
    },
    /**
     * 清空信息
     *
     * @param {object} item 信息类别
     */
    handleClearMessage(item) {
      item.list = [];
      item.count = 0;

      this.$emit('syncUnreadCount', this.unreadCount);
    },
    /**
     * 查看更多
     *
     * @param {object} item 信息类别
     */
    handleViewMore(item) {
      this.$message(`查看更多 ${item.label} 信息`);
    },
  },
};
</script>

<style lang="scss">
.tabs-message {
  .el-tabs__header {
    margin-bottom: 0;
  }
}
</style>

<style lang="scss" scoped>
$height : 46px;
$color  : rgba(0,0,0,.65);

.tabs-message {
  margin: -12px;

  .el-tabs__header {
    margin-bottom: 0;
  }

  .message-list-bottombar {
    display: flex;
    align-items: center;
    height: $height;
    line-height: $height;
    color: $color;
    text-align: center;
    border-top: 1px solid #e8e8e8;
    border-radius: 0 0 4px 4px;

    > div {
      flex: 1;
      text-align: center;
      cursor: pointer;
      transition: all .3s;
      user-select: none;

      &:not(:only-child):last-child {
        border-left: 1px solid #e8e8e8;
      }
    }
  }

  .message-list-empty {
    text-align: center;
    padding: 70px 0 80px;
    opacity: 0.5;

    .icon-svg {
      font-size: 32px;
    }

    > div {
      margin-top: 8px;
    }
  }
}
</style>

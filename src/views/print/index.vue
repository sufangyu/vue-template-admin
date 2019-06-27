<template>
  <section class="print-demo">
    <card
      shadow="hover"
    >
      <!-- 操作项 -->
      <div class="list-operator">
        <el-button
          :disabled="selectionCount === 0"
          @click="handlePrint('batch')"
          size="small"
          icon="el-icon-takeaway-box"
          type="primary"
        >批量打印</el-button>

        <el-dropdown placement="bottom">
          <el-button size="small" :disabled="selectionCount === 0">
            更多操作
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>批量拒绝</el-dropdown-item>
            <el-dropdown-item>批量审核</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <!-- 提示项 -->
      <div class="list-alert">
        <el-alert
          type="info"
          show-icon
          :closable="false"
          title=""
        >
          <div class="list-alert-content" slot="title">
            已选择<strong>{{selectionCount}}</strong>项
            <span class="action-line" @click="toggleSelection()">清空</span>
          </div>
        </el-alert>
      </div>

      <!-- 数据 -->
      <div class="table-list">
        <el-table
          style="width: 100%"
          ref="multipleTable"
          stripe
          :data="list"
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="ID"
            prop="id"
            width="70"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="日期"
            min-width="130"
            align="center"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 6px">{{ scope.row.created }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="名称"
            prop="name"
            min-width="120"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="描述"
            prop="desc"
            min-width="250"
          >
          </el-table-column>

          <el-table-column
            label="操作"
            width="70"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handlePrint('one', scope.row)"
              >打印</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="list-footer">
        <div class="list-footer-left">
          <el-button
            :disabled="selectionCount === 0"
            @click="handlePrint('batch')"
            size="small"
            icon="el-icon-takeaway-box"
            type="primary"
          >批量打印</el-button>
        </div>
        <div class="list-footer-right">
          <pagination
            :total="total"
            :current-page="page"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </card>

    <!-- 打印 -->
    <print-text
      ref="printText"
      :list="printList"
    />

  </section>
</template>

<script>
import PrintText from './components/print-text';

// 模拟请求放回数据
const getList = (query = {}) => {
  const data = [
    {
      id: 1001,
      name: 'AliPay',
      desc: '那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      author: '付小小',
      published: 'https://ant.design',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 141,
        link: 180,
        commit: 17,
      },
    },
    {
      id: 1002,
      name: 'Angular',
      desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      author: '曲丽丽',
      published: 'https://angular.io',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 166,
        link: 176,
        commit: 19,
      },
    },
    {
      id: 1003,
      name: 'Ant Design',
      desc: '生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      author: '林东东',
      published: 'https://ant.design',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 104,
        link: 128,
        commit: 13,
      },
    },
    {
      id: 1004,
      name: 'Ant Design Pro',
      desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆。城镇中有那么多的酒馆，她却偏偏走进了我的酒馆。城镇中有那么多的酒馆，她却偏偏走进了我的酒馆。城镇中有那么多的酒馆，她却偏偏走进了我的酒馆。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      author: '周星星',
      published: 'https://pro.ant.design',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 107,
        link: 118,
        commit: 14,
      },
    },
    {
      id: 1005,
      name: 'Bootstrap',
      desc: '那时候我只会想自己想要什么，从不想自己拥有什么。那时候我只会想自己想要什么，从不想自己拥有什么。那时候我只会想自己想要什么，从不想自己拥有什么。那时候我只会想自己想要什么，从不想自己拥有什么。那时候我只会想自己想要什么，从不想自己拥有什么。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      author: '张三丰',
      published: 'https://getbootstrap.com',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 107,
        link: 118,
        commit: 14,
      },
    },
    {
      id: 1006,
      name: 'React',
      desc: '那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      author: '付小小',
      published: 'https://react.docschina.org',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 141,
        link: 180,
        commit: 17,
      },
    },
    {
      id: 1007,
      name: 'Vue',
      desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。希望是一个好东西，也许是最好的，好东西是不会消亡的。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      author: '曲丽丽',
      published: 'https://vuejs.org',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 166,
        link: 176,
        commit: 19,
      },
    },
    {
      id: 1008,
      name: 'Webpack',
      desc: '生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。生命就像一盒巧克力，结果往往出人意料。',
      avator: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      author: '林东东',
      published: 'https://www.webpackjs.com',
      created: '2019-06-26 05:39',
      statistics: {
        collection: 104,
        link: 128,
        commit: 13,
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'success',
        data: {
          list: data,
          page: query.page || 1,
          total: data.length,
        },
      });
    }, 2500);
  });
};

export default {
  name: 'PrintTextDemo',
  components: {
    PrintText,
  },
  mixins: [],
  directives: {},
  filters: {},
  data() {
    return {
      page: 1,
      total: 0,
      loading: false,
      multipleSelection: [],
      list: [],
      printList: [],
    };
  },
  computed: {
    selectionCount() {
      return this.multipleSelection.length;
    },
  },
  watch: {},
  created() {
    this.getList();
  },
  mounted() {},
  destroyed() {},
  methods: {
    /**
     * 获取列表
     */
    async getList() {
      if (this.loading) {
        return;
      }

      const query = {
        ...this.query,
        page: this.page,
      };

      console.log('get list data\'s query =>>', query);
      try {
        this.loading = true;
        const res = await getList(query);
        console.log(res);
        if (res.success) {
          const { list, page, total } = res.data;

          this.list = list;
          this.page = page;
          this.total = total;
        }
      } catch (error) {
        console.log('getList error =>>', error);
      } finally {
        this.loading = false;
      }
    },
    // select data
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 选择指定表格数据
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    /**
     * 打印
     */
    handlePrint(type, item = {}) {
      let printList = [];
      if (type === 'one') {
        printList.push(item);
      } else {
        printList = [...this.multipleSelection];
      }

      this.printList = [...printList];

      this.$nextTick(() => {
        // 调用打印组件的打印方法
        this.$refs.printText.print();
      });
    },
    // 设置 pagination size
    handleSizeChange(val) {
      this.page = 1;
      this.size = val;
      this.getList();
    },
    // 设置 pagination page
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
  },
};
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>

</style>

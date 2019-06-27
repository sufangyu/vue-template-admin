<template>
  <div class="excel-demo">
    <card
      title="导出设置"
      bottom
      borderDisabled
      shadow="hover"
    >
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="setting-item">
            <span class="setting-item-label">文件名称：</span>
            <div class="setting-item-content">
              <el-input
                v-model="filename"
                placeholder="请输入文件名 (默认是file)"
                prefix-icon="el-icon-document"
                class="full-width"
              />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="setting-item">
            <div class="setting-item-content">
              <el-button
                type="primary"
                :loading="downloading"
                @click="handleDownload"
              >导出 Zip</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </card>

    <card
      title="数据"
      borderDisabled
      shadow="hover"
    >
      <!-- 数据 -->
      <div class="table-list">
        <el-table
          style="width: 100%"
          stripe
          :data="list"
          v-loading="loading"
        >
          <el-table-column
            label="ID"
            prop="id"
            width="90"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="日期"
            width="150"
            align="center"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 6px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="姓名"
            prop="name"
            width="120"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="地址"
            prop="address"
            min-width="250"
          >
          </el-table-column>
        </el-table>
      </div>
    </card>
  </div>
</template>

<script>
import { parseTime } from '@/utils';

// 模拟请求放回数据
const getList = (query = {}) => {
  const data = [
    {
      id: '1001',
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1002',
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1003',
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1004',
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1005',
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1006',
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1007',
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1008',
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1009',
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: '1010',
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
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
          total: 100,
        },
      });
    }, 2500);
  });
};

export default {
  data() {
    return {
      downloading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      options: ['xlsx', 'csv', 'txt'],

      loading: false,
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /**
     * 获取列表
     */
    async getList() {
      if (this.loading) {
        return;
      }

      try {
        this.loading = true;
        const res = await getList();
        console.log(res);
        if (res.success) {
          const { list } = res.data;

          this.list = list;
        }
      } catch (error) {
        console.log('getList error =>>', error);
      } finally {
        this.loading = false;
      }
    },
    handleDownload() {
      this.downloading = true;
      import('@/vendor/Export2Zip').then((excel) => {
        const tHeader = ['ID', '日期', '姓名', '地址'];
        const filterVal = ['id', 'date', 'name', 'address'];
        const list = [...this.list];
        const data = this.formatJson(filterVal, list);
        console.log('data =>>', data);

        excel.export_txt_to_zip(tHeader, data, this.filename, this.filename);
        this.downloading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map((j) => {
        if (j === 'timestamp') {
          return parseTime(v[j]);
        }
        return v[j];
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
  height: 50px;

  &-content {
    flex: 1;
  }
}
</style>


<style lang="scss">
.setting-item {
  .el-select {
    width: 100% !important;
  }
}
</style>

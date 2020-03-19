<template>
  <div class="table-list">
    <card
      title="查询条件"
      shadow="hover"
      borderDisabled
      bottom
    >
      <div class="list-query">
        <el-form
          class="list-query-form"
          ref="queryForm"
          :inline="true"
          label-width="70px"
          :model="query"
        >
          <el-form-item
            label="关键词"
            prop="value"
          >
            <el-input
              class="input-with-select"
              placeholder="关键词"
              v-model="query.value"
            >
              <el-select
                placeholder="选择类型"
                slot="prepend"
                v-model="query.type"
              >
                <el-option
                  v-for="item in queryOptions.type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <el-form-item
            label="帐号状态"
            prop="status"
          >
            <el-select
              placeholder="选择状态"
              v-model="query.status"
            >
              <el-option
                v-for="item in queryOptions.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="注册时间"
            prop="date"
          >
            <el-date-picker
              v-model="query.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd HH:mm:ss"
              :default-time="['00:00:00', '23:59:59']"
            ></el-date-picker>
          </el-form-item>

          <el-form-item
            label="审批人"
            prop="approver"
          >
            <el-input
              placeholder="审批人"
              v-model="query.approver"
            ></el-input>
          </el-form-item>

          <el-form-item class="form-buttons">
            <el-button
              type="primary"
              size="small"
              :loading="loading"
              @click="handleSubmitQueryForm('queryForm')"
            >查询</el-button>
            <el-button
              size="small"
              @click="handleResetQueryForm('queryForm')"
            >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </card>

    <card
      title="表格列表"
      shadow="hover"
      borderDisabled
      bottom
    >
      <el-button
        slot="extra"
        style="padding: 3px;"
        type="text"
      >操作按钮</el-button>

      <!-- 操作项 -->
      <div class="list-operator">
        <el-button
          size="small"
          icon="el-icon-plus"
          type="primary"
        >立即创建</el-button>

        <button-confirm
          :visible.sync="visibleDelMulti"
          description="确认要删除所选中的数据 ?"
          buttonLabel="批量删除"
          buttonSize="small"
          buttonType="default"
          :disabled="selectionCount === 0"
          @confirm="handleDelMulti"
        />

        <el-dropdown placement="bottom">
          <el-button
            size="small"
            :disabled="selectionCount === 0"
          >
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
          <div
            class="list-alert-content"
            slot="title"
          >
            已选择<strong>{{selectionCount}}</strong>项
            <span
              class="action-line"
              @click="toggleSelection()"
            >清空</span>
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
            :selectable='handleSelectable'
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
            width="135"
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
            width="100"
            align="center"
          >
          </el-table-column>

          <el-table-column
            label="地址"
            prop="address"
            min-width="250"
          >
          </el-table-column>

          <el-table-column
            label="操作"
            width="220"
            align="center"
          >
            <template slot-scope="scope">
              <button-confirm
                :visible.sync="scope.row.visible"
                @confirm="handleDel(scope.$index, scope.row)"
              />
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDeal(scope.$index, scope.row)"
              >审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="list-footer">
        <div class="list-footer-left">
          <button-confirm
            :visible.sync="visibleDelMulti2"
            description="确认要删除所选中的数据 ?"
            buttonLabel="批量删除"
            buttonSize="small"
            buttonType="default"
            :disabled="selectionCount === 0"
            @confirm="handleDelMulti"
          />
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
  </div>
</template>

<script>
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
      query: {
        type: 'id',
        value: '',
        status: '',
        date: '',
        approver: '',
      },
      queryOptions: {
        type: [
          { label: 'ID', value: 'id' },
          { label: '用户名', value: 'username' },
          { label: '邮箱', value: 'email' },
          { label: '地址', value: 'address' },
        ],
        status: [
          { label: '无效', value: '1' },
          { label: '有效', value: '2' },
        ],
      },
      page: 1,
      total: 0,
      visible: false,
      loading: false,
      multipleSelection: [],
      visibleDelMulti: false,
      visibleDelMulti2: false,
      list: [],
    };
  },
  computed: {
    selectionCount() {
      return this.multipleSelection.length;
    },
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
    handleSelectable(row, index) {
      if (index % 2 === 0) {
        return true;
      }

      return false;
    },
    /**
     * search
     *
     * @param {string} formName form's ref name
     */
    handleSubmitQueryForm() {
      this.page = 1;
      this.getList();
    },
    /**
     * reset search
     *
     * @param {string} formName form's ref name
     */
    handleResetQueryForm(formName) {
      if (!formName) {
        console.warn('handleResetQueryForm func miss formName!');
        return;
      }

      if (this.loading) {
        return;
      }

      this.$refs[formName].resetFields();
      this.page = 1;
      this.getList();
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
    handleDelMulti() {
      console.log('批量删除 =>>', this.multipleSelection);
    },
    handleDel(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDeal(index, row) {
      console.log(index, row);
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

<style>

</style>

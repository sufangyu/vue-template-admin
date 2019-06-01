<template>
  <div class="labs-tabs-page">
    <el-tabs
      v-model="activeName"
      @tab-click="handleTabClick"
      class="demo-tabs-item"
    >
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-tabs
      type="border-card"
      stretch
      @tab-click="handleTabClick"
      class="demo-tabs-item"
    >
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" disabled>配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-tabs
      type="border-card"
      stretch
      @tab-click="handleTabClick"
      class="demo-tabs-item"
    >
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理" disabled>角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-tabs
      type="border-card"
      stretch
      @tab-click="handleTabClick"
      class="tabs-simple demo-tabs-item"
    >
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理" disabled>角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'LabsTabsPage',
  data() {
    return {
      activeName: 'second',
    };
  },
  methods: {
    handleTabClick(tab) {
      const { index, label } = tab;
      console.log(`index: ${index}; label: ${label}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-tabs-item {
  margin-bottom: 25px;
}
</style>

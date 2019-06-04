<template>
  <div class="page-labs">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <!-- 全配置 -->
        <card
          class="box-card"
          shadow="hover"
          bottom
        >
          <h3 slot="title">卡片名称</h3>
          <h4 slot="subtitle">副标题</h4>
          <el-button
            slot="extra"
            size="small"
            type="text"
          >操作按钮</el-button>
          <div
            v-for="o in 4"
            :key="o"
            style="padding: 8px 0;"
          >
            {{'列表内容 ' + o }}
          </div>
        </card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <card
          class="box-card"
          shadow="hover"
          bottom
          borderDisabled
        >
          <h3 slot="title">卡片名称</h3>
          <div
            v-for="o in 4"
            :key="o"
            style="padding: 8px 0;"
          >
            {{'列表内容 ' + o }}
          </div>
        </card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <!-- 全配置 -->
        <card
          class="box-card"
          shadow="hover"
          title="卡片名称"
          subtitle="副标题"
          bottom
          gray
        >
          <div
            v-for="o in 4"
            :key="o"
            style="padding: 8px 0;"
          >
            {{'列表内容 ' + o }}
          </div>
        </card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <card
          class="box-card"
          shadow="hover"
        >
          <div
            v-for="o in 4"
            :key="o"
            style="padding: 8px 0;"
          >
            {{'列表内容 ' + o }}
          </div>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LabsCardDemo',
};
</script>

<style>

</style>

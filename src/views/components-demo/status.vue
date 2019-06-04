<template>
  <div class="status-demo">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <card
          title="标签状态"
          shadow="hover"
          borderDisabled
          bottom
        >
          <div class="demo-item demo-inline">
            <status status="success" text="成功"></status>
            <status status="error" text="失败"></status>
            <status status="default" text="默认"></status>
            <status status="processing" text="处理中"></status>
            <status status="warning" text="警告"></status>
            <status color="#f30" text="自定义颜色"></status>
          </div>

          <div class="demo-item demo-inline">
            <status status="processing" text="默认标签"></status>
            <status status="processing" text="中等标签" size="medium"></status>
            <status status="processing" text="小型标签" size="small"></status>
            <status status="processing" text="超小标签" size="mini"></status>
          </div>
        </card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <card
          title="状态点"
          shadow="hover"
          borderDisabled
          bottom
        >
          <div class="demo-item demo-inline">
            <status type="dot" status="success"></status>
            <status type="dot" status="error"></status>
            <status type="dot" status="default"></status>
            <status type="dot" status="processing"></status>
            <status type="dot" status="warning"></status>
          </div>
          <div class="demo-item demo-block">
            <status type="dot" status="success" text="成功"></status>
            <status type="dot" status="error" text="失败"></status>
            <status type="dot" status="default" text="默认"></status>
            <status type="dot" status="processing" text="处理中"></status>
            <status type="dot" status="warning" text="警告"></status>
            <status type="dot" color="#f30" text="自定义颜色"></status>
          </div>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Status from '@/components/status';

export default {
  components: {
    Status,
  },
};
</script>

<style lang="scss">
.demo-item {
  + .demo-item {
    margin-top: 16px;
  }
}

.demo-inline .status {
  margin-right: 8px;
}
.demo-block .status {
  display: block;
  padding: 3px 0;
}
</style>

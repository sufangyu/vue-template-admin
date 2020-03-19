<template>
  <div class="pdf-demo">
    <card
      title="下载PDF"
      borderDisabled
      bottom
      shadow="hover"
    >
      <el-alert
        type="info"
        :closable="false"
        title="这里使用 window.print() 来实现下载pdf的功能"
      ></el-alert>

      <router-link
        target="_blank"
        to="/pdf/download"
      >
        <el-button type="primary">点击下载 PDF</el-button>
      </router-link>
    </card>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>

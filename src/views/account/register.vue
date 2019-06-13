<template>
<div class="page-account">
  <div class="page-account-content">
    <div class="content-top">
      <h1 class="content-header">Admin Template</h1>
      <div class="content-desc">项目提供后台项目集成方案，以便开箱即用</div>
    </div>
    <div class="content-main">
      <h3><span>注册</span></h3>
      <el-form ref="form" :model="form" label-width="0">
        <el-form-item label="">
          <el-input v-model="form.username" placeholder="邮箱"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-input type="password" v-model="form.password" placeholder="至少6位密码，区分大小写"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-input type="password" v-model="form.repassword" placeholder="确认密码"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-input placeholder="手机号" v-model="form.mobile" class="input-with-select">
            <el-select v-model="form.areaCode" slot="prepend" placeholder="请选择">
              <el-option label="+86" value="86"></el-option>
              <el-option label="+87" value="87"></el-option>
            </el-select>
          </el-input>
        </el-form-item>

        <el-form-item label="">
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="form.captch" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button class="button-block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-button
                class="button-block"
                type="primary"
                @click="onSubmit"
              >注册</el-button>
            </el-col>
            <el-col :span="8">
              <div class="align-right">
                <router-link to="/login">已有账户登录</router-link>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="page-account-footer">
    <div class="footer-links">
      <a title="help" target="_self" href="">帮助</a>
      <a title="privacy" target="_self" href="">隐私</a>
      <a title="terms" target="_self" href="">条款</a>
    </div>
    <div class="footer-copyright">{{ copyright }}</div>
  </div>
</div>
</template>

<script>
import { COPYRIGHT } from '@/config';

export default {
  name: 'Register',
  components: {},
  data() {
    return {
      copyright: COPYRIGHT,
      form: {
        username: '',
        password: '',
        repassword: '',
        areaCode: '86',
        mobile: '',
        captch: '',
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
@import './account.scss';
</style>

<style lang="scss">
.page-account {
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>

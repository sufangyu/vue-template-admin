<template>
  <div class="page-account">
    <div class="page-account-content">
      <div class="content-top">
        <h1 class="content-header">Admin Template</h1>
        <div class="content-desc">旨在提供后台项目集成方案，方便开箱即用</div>
      </div>
      <div class="content-main">
        <el-form
          ref="form"
          :model="form"
          label-width="0"
          status-icon
          :rules="rules"
        >
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="用户名"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-user"
              ></i>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="form.password"
              placeholder="密码"
              @keyup.enter.native="handleSubmit"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-unlock"
              ></i>
            </el-input>
          </el-form-item>

          <el-form-item class="form-item-normal">
            <flex justify="between">
              <div><el-checkbox v-model="form.auto">自定登录</el-checkbox></div>
              <div>
                <router-link to="">忘记密码?</router-link>
              </div>
            </flex>
          </el-form-item>

          <el-form-item>
            <el-button
              class="button-block"
              type="primary"
              @click="handleSubmit"
              :loading="loading"
            >登录</el-button>
          </el-form-item>
        </el-form>
        <flex justify="between">
          <div class="login-other">
            <span>其他登录方式</span>
            <icon-svg name="wechat" />
            <icon-svg name="qq" />
          </div>
          <div>
            <router-link to="/register">注册账户</router-link>
          </div>
        </flex>
      </div>
    </div>
    <div class="page-account-footer">
      <div class="footer-links">
        <a
          title="help"
          target="_self"
          href=""
        >帮助</a>
        <a
          title="privacy"
          target="_self"
          href=""
        >隐私</a>
        <a
          title="terms"
          target="_self"
          href=""
        >条款</a>
      </div>
      <div class="footer-copyright">{{ copyright }}</div>
    </div>
  </div>
</template>

<script>
import { COPYRIGHT } from '@/config';
import Flex from '@/components/flex';
import { validateMin } from '@/utils/validate-rules';

export default {
  name: 'Login',
  components: {
    Flex,
  },
  data() {
    return {
      copyright: COPYRIGHT,
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validate: validateMin, min: 6, message: '密码长度不能小于6位数', trigger: 'blur' },
        ],
      },
      form: {
        username: '',
        password: '',
        auto: true,
      },
      loading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            const data = { ...this.form };
            const res = await this.$store.dispatch('account/loginByUsername', data);
            if (!res.success) {
              this.$message.error(res.message || '登录失败，请重试');
            } else {
              const redirectUrl = this.$route.query.redirect ? decodeURIComponent(this.$route.query.redirect) : '/';
              this.$router.replace(redirectUrl);
            }
          } catch (error) {
            console.error(error);
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './account.scss';
</style>

<template>
  <div class="page-labs">
    <card
      title="表单验证"
      shadow="hover"
      borderDisabled
    >
      <div label-position="right" ref="ruleForm">
        <div class="form-item" prop="val">
          <label class="form-item-label" required>活动名称</label>
          <div class="form-item-content">
            <el-input v-model="ruleForm.val" placeholder="请输入活动名称"></el-input>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item" prop="mobile">
          <label class="form-item-label" required>联系电话</label>
          <div class="form-item-content">
            <el-input v-model="ruleForm.mobile" placeholder="请输入联系电话"></el-input>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item" prop="region">
          <label class="form-item-label" required>活动区域</label>
          <div class="form-item-content">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item">
          <label class="form-item-label">即时配送</label>
          <div class="form-item-content">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item" prop="type">
          <label class="form-item-label">活动性质</label>
          <div class="form-item-content">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item" prop="resource">
          <label class="form-item-label">特殊资源</label>
          <div class="form-item-content">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item" prop="desc">
          <label class="form-item-label">活动形式</label>
          <div class="form-item-content">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </div>
        </div>
        <white-space></white-space>

        <div class="form-item">
          <div class="form-item-content">
            <el-button type="primary" @click="submitForm('ruleForm', 'validate')">立即创建</el-button>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { validateFormData } from '@/utils/validate';

export default {
  data() {
    const validate = (rule, value, callback) => {
      if (value === '13211111111') {
        return callback(new Error('值不能为 13211111111'));
      }
      return callback();
    };

    this.validate = [
      {
        prop: 'val',
        rules: [
          { required: true, message: '活动名称不能空' },
          { min: 3, message: '活动名称长度不能小于3个字' },
          { max: 20, message: '活动名称长度不能超过20个字' },
        ],
      },
      {
        prop: 'mobile',
        rules: [
          { required: true, message: '联系电话不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '联系电话格式不正确' },
          { validator: validate },
        ],
      },
      {
        prop: 'region',
        rules: [
          { required: true, message: '选择活动区域' },
        ],
      },
    ];

    return {
      ruleForm: {
        val: '',
        mobile: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    submitForm(formName, validateName) {
      /* eslint-disable max-len */
      const errorMessages = validateFormData(this.$refs[formName], this.ruleForm, this[validateName]);
      console.log(errorMessages);
      if (errorMessages.length > 0) {
        const { message, validateProp } = errorMessages[0];
        const top = validateProp.el.offsetTop;
        this.$message.warning(message);
        window.scroll(0, top);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  margin-bottom: 15px;

  &-label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #606266;

    &[required]::before {
      content: "*";
      color: #f56c6c;
      margin-right: 4px;
    }
  }
}
[label-position="right"] {
  .form-item {
    display: flex;

    &-label {
      margin-right: 15px;
      margin-bottom: 0;
      min-width: 66px;
      line-height: 40px;
      text-align: right;
    }

    &-content {
      flex: 1;
      line-height: 40px;
    }
  }
}
</style>

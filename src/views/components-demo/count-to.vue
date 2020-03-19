<template>
  <div class="count-to">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <card
          shadow="hover"
          borderDisabled
          bottom
          title="基础示例"
        >
          <count-to
            class="count-to-example"
            ref="example1"
            :startVal='startVal1'
            :endVal='endVal1'
            :duration="4000"
          />
          <div class="count-to-actions">
            <el-button
              type="primary"
              @click="handleStart1"
            >开始</el-button>
            <el-button @click="handleChangeEndVal">改变结束值</el-button>
            <el-button @click="handleIncrementalUpdate">增量更新</el-button>
          </div>
        </card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <card
          shadow="hover"
          borderDisabled
          bottom
          title="递减示例"
        >
          <count-to
            class="count-to-example"
            ref="example2"
            :startVal='2018'
            :endVal='0'
            :duration="4000"
          ></count-to>
          <div class="count-to-actions">
            <el-button
              type="primary"
              @click="handleStart2"
            >开始</el-button>
          </div>
        </card>
      </el-col>
    </el-row>

    <card
      shadow="hover"
      borderDisabled
      bottom
      title="自定义示例"
    >
      <count-to
        ref='example3'
        class='count-to-example count-to-example-custom'
        :start-val='_startVal'
        :end-val='_endVal'
        :duration='_duration'
        :decimals='_decimals'
        :separator='_separator'
        :prefix='_prefix'
        :suffix='_suffix'
        :autoplay="false"
      >
      </count-to>
      <div class="count-to-custom">
        <el-row :gutter="20">
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>开始数值：</label>
              <el-input
                class="flex-1"
                v-model.number="setStartVal"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>结束数值：</label>
              <el-input
                class="flex-1"
                v-model.number="setEndVal"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>持续时间：</label>
              <el-input
                class="flex-1"
                v-model.number="setDuration"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>小数个位：</label>
              <el-input
                class="flex-1"
                v-model.number="setDecimals"
              ></el-input>
            </div>
          </el-col>

          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>分割符号：</label>
              <el-input
                class="flex-1"
                v-model="setSeparator"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>前置符号：</label>
              <el-input
                class="flex-1"
                v-model="setPrefix"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <label>后置符号：</label>
              <el-input
                class="flex-1"
                v-model="setSuffix"
              ></el-input>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <div class="flex flex-align-center">
              <el-button
                type="primary"
                @click='handleStart3'
              >开始</el-button>
              <el-button @click='handlePauseResume'>暂停/恢复</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </card>

  </div>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      startVal1: 0,
      endVal1: 2018,
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: ' rmb',
      setPrefix: '¥ ',
    };
  },
  computed: {
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal;
      }
      return 0;
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal;
      }
      return 0;
    },
    _duration() {
      if (this.setDuration) {
        return this.setDuration;
      }
      return 100;
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          console.error('digits argument must be between 0 and 20');
          return 0;
        }
        return this.setDecimals;
      }
      return 0;
    },
    _separator() {
      return this.setSeparator;
    },
    _suffix() {
      return this.setSuffix;
    },
    _prefix() {
      return this.setPrefix;
    },
  },
  methods: {
    handleStart1() {
      this.$refs.example1.start();
    },
    handleChangeEndVal() {
      this.endVal1 = this.endVal1 + 1000;
    },
    handleIncrementalUpdate() {
      this.startVal1 = this.endVal1;
      this.endVal1 = this.endVal1 + 1000;
    },
    handleStart2() {
      this.$refs.example2.start();
    },
    handleStart3() {
      this.$refs.example3.start();
    },
    handlePauseResume() {
      this.$refs.example3.pauseResume();
    },
  },
};
</script>

<style lang="scss">
.count-to-example {
  font-size: 40px;
  color: #30B08F;
  display: block;
  margin: 10px 0;
}

.count-to-actions,
.count-to-custom {
  margin-top: 25px;
}

.count-to-example-custom {
  text-align: center;
}

.count-to-custom {
   .flex {
    padding: 10px 0;
  }
}
</style>

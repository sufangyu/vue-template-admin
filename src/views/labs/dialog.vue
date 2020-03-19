<template>
  <div class="labs-demo">
    <card
      title="不同尺寸的弹窗"
      shadow="hover"
      borderDisabled
    >
      <el-button @click="handleShowDialog('visible1')">默认弹窗</el-button>
      <el-button @click="handleShowDialog('visible2')">大弹窗</el-button>
      <el-button @click="handleShowDialog('visible3')">中弹窗</el-button>
      <el-button @click="handleShowDialog('visible4')">小弹窗</el-button>
      <el-button @click="handleShowDialog('visible5')">迷你弹窗</el-button>
    </card>

    <el-dialog
      title="默认弹窗"
      :visible.sync="visible1"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible1')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible1')"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="默认弹窗"
      :visible.sync="visible1"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible1')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible1')"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="大弹窗"
      :visible.sync="visible2"
      class="dialog-full-large"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible2')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible2')"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="中弹窗"
      :visible.sync="visible3"
      class="dialog-full-medium"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible3')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible3')"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="小弹窗"
      :visible.sync="visible4"
      class="dialog-full-small"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible4')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible4')"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="迷你弹窗"
      :visible.sync="visible5"
      class="dialog-full-min"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleHideDialog('visible5')">取 消</el-button>
        <el-button
          type="primary"
          @click="handleHideDialog('visible5')"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import mixinSetTagsViewTitle from '@/mixins/set-tags-view-title';
import { setTimeout } from 'timers';

export default {
  name: 'labsDialog',
  mixins: [mixinSetTagsViewTitle],
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    };
  },
  created() {
    setTimeout(() => {
      this.setTagsViewTitle('弹窗尺寸 - 自定义');
    }, 1500);
  },
  methods: {
    handleShowDialog(keyName) {
      this[keyName] = true;
    },
    handleHideDialog(keyName) {
      this[keyName] = false;
    },
  },
};
</script>

<style>

</style>

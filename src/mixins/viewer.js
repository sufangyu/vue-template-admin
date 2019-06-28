/**
 * 弹窗查看大图
 * 基于viewer.js的vue灯箱
 */
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

const viewerMixin = {
  data() {
    return {
      viewer: {},
    };
  },
  destroyed() {
    // 销毁
    Object.values(this.viewer).forEach((viewer) => {
      viewer.destroy();
    });
    this.viewer = {};
  },
  methods: {
    previewImage(refName, options = {}) {
      if (!refName) {
        console.warn('Miss ref name!');
        return;
      }

      if (!this.viewer[refName]) {
        const viewerRef = this.$refs[refName];
        const config = Object.assign({}, options, {
          title: false,
        });
        this.viewer[refName] = new Viewer(viewerRef, config);
      }
    },
  },
};

export default viewerMixin;

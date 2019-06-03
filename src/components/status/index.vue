<script>
export default {
  name: 'Status',
  props: {
    // 显示类型
    type: {
      type: String,
      default: 'tag',
      validator: value => ['tag', 'dot'].includes(value),
    },
    // 尺寸. 只对 type=tag 有效
    size: {
      type: String,
      default: '',
      validator: value => ['', 'medium', 'small', 'mini'].includes(value),
    },
    // 当前状态
    status: {
      type: String,
      default: 'default',
    },
    // 描述文字
    text: {
      type: String,
      default: '',
    },
    // 自定义颜色
    color: {
      type: String,
      default: '',
    },
  },
  methods: {
    // 获取 状态点样式
    getDotStyle() {
      if (this.color !== '') {
        return {
          backgroundColor: this.color,
        };
      }
      return {};
    },
    // 获取 状态标签样式
    getTagStyle() {
      if (this.type === 'dot' || this.color === '') {
        return {};
      }
      return {
        border: `1px solid ${this.color}`,
      };
    },
    // 获取 状态点状态 class
    getDotStatusClass() {
      if (this.color !== '') {
        return '';
      }
      return `status-dot-${this.status}`;
    },
    // 获取 状态标签状态 class
    getTagStatusClass() {
      if (this.color !== '') {
        return '';
      }
      return `status-${this.status}`;
    },
  },
  render() {
    const { type, text, size } = this;
    const typeClass = `status-type-${type}`;
    const sizeClass = size ? `status-${size}` : '';
    const dotStatusClass = this.getDotStatusClass();
    const tagStatusClass = this.getTagStatusClass();
    const dotStyle = this.getDotStyle();
    const getTagStyle = this.getTagStyle();
    return (
      <span class={`status ${typeClass} ${tagStatusClass} ${sizeClass}`} style={getTagStyle}>
        {type === 'dot' ? <span class={`status-dot ${dotStatusClass}`} style={dotStyle}></span> : ''}
        {text ? <span class="status-text">{text}</span> : ''}
      </span>
    );
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>

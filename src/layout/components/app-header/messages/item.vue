<template>
  <div
    :class="{ 'disabled': data.disabled }"
    @click="handleTap(data)"
    class="message-list-item"
  >
    <slot>
      <div class="message-list-item-image" v-if="data.image">
        <img :src="data.image" alt>
      </div>
      <div class="message-list-item-content">
        <div class="title" v-if="data.title">
          <h4>{{ data.title }}</h4>
          <div class="extra" v-if="data.status">
            <slot name="extra">
              <el-tag size="mini" :type="data.type">{{ data.status }}</el-tag>
            </slot>
          </div>
        </div>
        <div class="description" v-if="data.description">{{ data.description }}</div>
        <div class="meta" v-if="data.meta">{{ data.meta }}</div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    handleTap(data) {
      this.$emit('tap', data);
    },
  },
};
</script>

<style lang="scss" scoped>
$image-size : 32px;

.message-list-item {
  display: flex;
  padding: 15px 15px;
  transition: 0.3s all;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &.disabled {
    cursor: default;
    opacity: $opacity-disabled-content;

    &:hover {
      background-color: transparent;
    }
  }

  &-image {
    width: $image-size;
    height: $image-size;
    margin-right: 16px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &-content {
    flex: 1;
    min-width: 1px;
    color: $color-text-caption;

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: $font-size-base;
      line-height: 1.1;

      h4 {
        font-weight: 400;
        flex: 1;
      }
    }

    .description,
    .meta {
      font-size: $font-size-caption-sm;
      line-height: 1.5;
      color: $color-text-auxiliary;
    }

    .meta {
      margin-top: 8px;
    }

  }
}
</style>

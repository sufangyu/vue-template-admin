<template>
  <div class="viewer-demo">
    <card
      title="同一图片"
      shadow="hover"
      borderDisabled
      bottom
    >
      <ul class="galley-fixed" ref="viewer-1">
        <li
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image" @click="handlePreview('viewer-1')" />
        </li>
      </ul>
    </card>

    <card
      title="不同图片"
      shadow="hover"
      borderDisabled
      bottom
    >
      <ul class="galley-fixed" ref="viewer-2">
        <li
          v-for="(image, index) in images2"
          :key="index"
        >
          <img :data-original="image.url" :src="image.thumbs" @click="handlePreview2('viewer-2')" />
        </li>
      </ul>
    </card>

    <card
      title="显示部分图片"
      shadow="hover"
      borderDisabled
      bottom
    >
      <ul class="galley-fixed" ref="viewer-3">
        <li
          v-for="(image, index) in images2"
          :key="index"
          :style="{
            display: index > (limit - 1) ? 'none' : 'inherit',
          }"
        >
          <img
            :data-original="image.url"
            :src="image.thumbs"
            @click="handlePreview2('viewer-3')"
          />
          <!-- 剩余图片数量 -->
          <span v-if="index === limit - 1">{{ images2.length - limit }}</span>
        </li>
      </ul>
      <ul class="galley-fixed" ref="viewer-4">
        <li
          v-for="(image, index) in images2"
          :key="index"
          :style="{
            display: index > (limit2 - 1) ? 'none' : 'inherit',
          }"
        >
          <img
            :data-original="image.url"
            :src="image.thumbs"
            @click="handlePreview2('viewer-4')"
          />
          <!-- 剩余图片数量 -->
          <span v-if="index === limit2 - 1">{{ images2.length - limit2 }}</span>
        </li>
      </ul>
    </card>
  </div>
</template>

<script>
import viewerMixins from '@/mixins/viewer';

export default {
  mixins: [viewerMixins],
  data() {
    return {
      images: [
        'https://fengyuanchen.github.io/viewerjs/images/tibet-1.jpg',
        'https://fengyuanchen.github.io/viewerjs/images/tibet-2.jpg',
        'https://fengyuanchen.github.io/viewerjs/images/tibet-3.jpg',
        'https://fengyuanchen.github.io/viewerjs/images/tibet-7.jpg',
      ],
      images2: [
        {
          url: 'https://fengyuanchen.github.io/viewerjs/images/tibet-1.jpg',
          thumbs: 'https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg',
        },
        {
          url: 'https://fengyuanchen.github.io/viewerjs/images/tibet-2.jpg',
          thumbs: 'https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-2.jpg',
        },
        {
          url: 'https://fengyuanchen.github.io/viewerjs/images/tibet-3.jpg',
          thumbs: 'https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-3.jpg',
        },
        {
          url: 'https://fengyuanchen.github.io/viewerjs/images/tibet-7.jpg',
          thumbs: 'https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-7.jpg',
        },
      ],
      limit: 1,
      limit2: 2,
    };
  },
  methods: {
    handlePreview(refName) {
      this.previewImage(refName);
    },
    handlePreview2(refName) {
      this.previewImage(refName, {
        url: 'data-original',
      });
    },
  },
};
</script>

<style lang="scss">
.galley-fixed {
  overflow: hidden;

  + .galley-fixed {
    margin-top: 15px;
  }

  li {
    float: left;
    margin: 1px;
    width: 125px;
    height: 125px;
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: zoom-in;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    color: #fff;
  }
}
</style>

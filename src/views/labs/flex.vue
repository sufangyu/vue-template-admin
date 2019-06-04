<template>
  <div class="page-labs">
    <card
      title="基本"
      shadow="hover"
      bottom
      borderDisabled
    >
      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>

      <white-space></white-space>

      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>

      <white-space></white-space>

      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>
    </card>

    <card
      title="方向"
      shadow="hover"
      bottom
      borderDisabled
    >
      <flex>
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item class="space-left"><place-holder content="Block 2" /></flex-item>
      </flex>

      <white-space></white-space>

      <flex direction="row-reverse">
        <flex-item class="space-left"><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>

      <white-space></white-space>

      <flex direction="column">
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>

      <white-space></white-space>

      <flex direction="column-reverse">
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>
    </card>

    <card
      title="子元素换行"
      shadow="hover"
      bottom
      borderDisabled
    >
      <flex>
        <place-holder
          v-for="(item, i) in 17"
          :key="i"
          :content="`Block${ i + 1}`"
          class="inline"
        />
      </flex>

      <white-space></white-space>

      <flex wrap="wrap">
        <place-holder
          v-for="(item, i) in 17"
          :key="i"
          :content="`Block${ i + 1}`"
          class="inline"
        />
      </flex>

      <white-space></white-space>

      <flex wrap="wrap-reverse">
        <place-holder
          v-for="(item, i) in 17"
          :key="i"
          :content="`Block${ i + 1}`"
          class="inline"
        />
      </flex>
    </card>

    <card
      title="主轴对齐"
      shadow="hover"
      bottom
      borderDisabled
    >
      <flex>
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex justify="end">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex justify="center">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex justify="between">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex justify="around">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
    </card>

    <card
      title="次轴对齐"
      shadow="hover"
      bottom
      borderDisabled
    >
      <flex align="start">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex align="end">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex align="center">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex align="baseline">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>

      <white-space></white-space>

      <flex align="stretch">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
    </card>

  </div>
</template>

<script>
import PlaceHolder from './components/place-holder';

export default {
  components: {
    PlaceHolder,
  },
};
</script>

<style lang="scss" scoped>
.page-labs {
  min-height: 100vh;
  background-color: #f5f5f9;

  .flexbox-container {
    margin: 0 15px;
  }

  .demo-sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .space-left {
    margin-left: 10px;
  }

  .inline {
    width: 80px !important;
    margin: 9px 9px 9px 0;
    &.small {
      height: 20px!important;
      line-height: 20px!important;
    }
  }

}
</style>

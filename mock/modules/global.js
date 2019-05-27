export default [
  // messages
  {
    url: 'global/messages/unrea',
    type: 'get',
    response: () => {
      const data = [
        {
          list: [
            {
              image: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
              title: '你收到了 14 份新周报',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
            {
              image: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
              title: '你推荐的 曲妮妮 已通过第三轮面试',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
            {
              image: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
              title: '左侧图标用于区分不同的类型',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
          ],
        },
        {
          list: [
            {
              image: 'https://avatars1.githubusercontent.com/u/1852629?s=460&v=4',
              title: '曲丽丽 评论了你',
              description: '这里是描述信息描述信息，描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
            {
              image: 'https://avatars1.githubusercontent.com/u/1852629?s=460&v=4',
              title: '朱偏右 回复了你',
              description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
            {
              image: 'https://avatars1.githubusercontent.com/u/1852629?s=460&v=4',
              title: '信息标题',
              description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
              meta: '2018-05-25 18:25:30',
              disabled: false,
            },
          ],
        },
        {
          list: [
            {
              title: '第三方紧急代码变更',
              description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
              status: '马上到期',
              type: 'success',
              disabled: false,
            },
            {
              title: '信息安全考试',
              description: '指派竹尔于 2017-01-09 前完成更新并发布',
              status: '已延期',
              type: 'warning',
              disabled: false,
            },
            {
              title: 'ABCD 版本发布',
              description: '指派竹尔于 2017-01-09 前完成更新并发布',
              status: '进行中',
              type: '',
              disabled: false,
            },
            {
              title: '任务名称',
              description: '任务需要在 2017-01-12 20:00 前启动',
              status: '未开始',
              type: 'info',
              disabled: false,
            },
          ],
        },
      ];

      return {
        success: true,
        message: 'success',
        data,
      };
    },
  },
];

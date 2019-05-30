const TOKENS = {
  admin: {
    token: 'admin-token',
    password: '123456',
  },
  editor: {
    token: 'editor-token',
    password: '123456',
  },
};

const USERS = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    nickname: '超级管理员',
    token: 'admin-token',
    avatar: 'https://avatars3.githubusercontent.com/u/1852629',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    nickname: '张三疯',
    token: 'editor-token',
    avatar: 'https://avatars3.githubusercontent.com/u/1852629',
  },
};


export default [
  // login
  {
    url: 'account/login',
    type: 'post',
    response: (config) => {
      const { username, password } = config.body;
      const user = TOKENS[username];
      // mock error
      if (!user || (!!user && user.password !== password)) {
        return {
          success: false,
          message: '帐户和密码不正确',
          data: null,
        };
      }

      return {
        success: true,
        message: 'success',
        data: {
          token: user.token,
        },
      };
    },
  },
  // user
  {
    url: 'account/user',
    type: 'get',
    request: (res) => {
      console.log(res);
    },
    response: (config) => {
      const { token } = config.query;
      const user = USERS[token];
      if (!user) {
        return {
          success: false,
          message: '获取用户信息失败',
          data: null,
        };
      }

      return {
        success: true,
        message: 'success',
        data: user,
      };
    },
  },
];

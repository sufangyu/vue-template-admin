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

// const USERS = {
//   'admin-token': {
//     roles: ['admin'],
//     introduction: 'I am a super administrator',
//     name: '超级管理员',
//     password: '123456',
//     token: 'admin-token',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//   },
//   'editor-token': {
//     roles: ['editor'],
//     introduction: 'I am an editor',
//     password: '123456',
//     name: '张三疯',
//     token: 'editor-token',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//   },
// };


export default [
  // login
  {
    url: '/account/login',
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
        data: user.token,
      };
    },
  },
];

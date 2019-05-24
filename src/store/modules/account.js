import { getToken, setToken } from '@/utils/auth';
import { loginByUsername } from '@/api/account';

const user = {
  state: {
    account: {},
    token: getToken(),
  },
  getters: {
    account: state => state.account,
    token: state => state.token,
  },
  actions: {
    // 用户名登录
    loginByUsername({ commit }, account) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await loginByUsername(account);

          if (!res.success) {
            resolve(res);
          } else {
            const { data } = res;
            setToken(data.token);
            commit('SET_TOKEN', data.token);
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      });
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
};

export default user;

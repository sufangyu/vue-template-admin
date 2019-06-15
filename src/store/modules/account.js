import { resetRouter } from '@/router';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { loginByUsername, getUserInfo } from '@/api/account';

const user = {
  namespaced: true,
  state: {
    account: null,
    token: getToken() || '',
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
    // 获取用户信息
    getUserInfo({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const params = {
            token: state.token,
          };
          const res = await getUserInfo(params);
          if (!res.success) {
            resolve(res);
          } else {
            const { data } = res;
            commit('SET_ACCOUNT', data);
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      });
    },
    // 退出登录
    logout({ commit }) {
      console.log('退出登录');
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        commit('SET_ACCOUNT', null);
        removeToken();
        resetRouter();
        resolve();
      });
    },
  },
  mutations: {
    SET_ACCOUNT: (state, account) => {
      state.account = account;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    LOGOUT: (state) => {
      state.account = null;
      state.token = '';
    },
  },
};

export default user;

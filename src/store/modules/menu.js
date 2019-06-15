import { Message } from 'element-ui';
import { getToken } from '@/utils/auth';
import { getMenus } from '@/api/menus';
import { INIT_MENUS, MENU_MODE } from '@/config';
import { routerAsyncMap } from '@/router';

const menu = {
  namespaced: true,
  state: {
    menus: INIT_MENUS,
  },
  getters: {
    menus: state => state.menus,
  },
  actions: {
    async getMenus({ commit }) {
      if (MENU_MODE === 'router') {
        commit('SET_MENUS', routerAsyncMap);
      } else {
        try {
          const params = {
            token: getToken(),
          };

          const res = await getMenus(params);
          if (!res.success) {
            Message({
              type: 'error',
              message: res.message || '获取菜单失败，请重试',
            });
          } else {
            commit('SET_MENUS', res.data);
          }
        } catch (error) {
          console.log('getMenus error', error);
        }
      }
    },
  },
  mutations: {
    /**
     * 设置菜单
     *
     *  @param {array} menus 菜单数据
     */
    SET_MENUS: (state, menus = []) => {
      state.menus = [...INIT_MENUS, ...menus];
    },
  },
};

export default menu;

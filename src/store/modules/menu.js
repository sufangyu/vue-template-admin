import { Message } from 'element-ui';
import { getMenus } from '@/api/menus';

const INIT_MENUS = [
  {
    path: '/dashboard',
    meta: {
      title: '工作台',
      icon: 'document',
    },
  },
];

const menu = {
  state: {
    menus: INIT_MENUS,
  },
  getters: {
    menus: state => state.menus,
  },
  actions: {
    async getMenus({ commit }) {
      try {
        const res = await getMenus();
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

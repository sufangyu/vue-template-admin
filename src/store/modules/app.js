import Cookies from 'js-cookie';

// const LANGUAGE_CODE_KEY = 'language';
const SIDEBAR_IS_CLOSED_KEY = 'sidebar-closed';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get(SIDEBAR_IS_CLOSED_KEY),
      withoutAnimation: false,
    },
  },
  getters: {
    sidebar: state => state.sidebar,
  },
  actions: {
    async toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      // openedCode =>>  1: 隐藏; 0: 显示
      const openedCode = state.sidebar.opened ? '1' : '0';
      Cookies.set(SIDEBAR_IS_CLOSED_KEY, openedCode);
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
  },
};

export default app;

import Cookies from 'js-cookie';

// const LANGUAGE_CODE_KEY = 'language';
const SIDEBAR_IS_CLOSED_KEY = 'sidebar-closed';
const toggleBodyClassName = (state) => {
  if (state.sidebar.opened && state.screenSize === 'screen-xs') {
    document.body.classList.add('sidebar-show');
  } else {
    document.body.classList.remove('sidebar-show');
  }
};

const app = {
  namespaced: true,
  state: {
    sidebar: {
      opened: !+Cookies.get(SIDEBAR_IS_CLOSED_KEY),
      withoutAnimation: false,
    },
    device: 'desktop',
    screenSize: 'screen-xl',
  },
  getters: {
    sidebar: state => state.sidebar,
    device: state => state.device,
    screenSize: state => state.screenSize,
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
    toggleScreenSize({ commit }, size) {
      commit('TOGGLE_SCREEN_SIZE', size);
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      // openedCode =>>  1: 隐藏; 0: 显示
      const openedCode = state.sidebar.opened ? '1' : '0';
      Cookies.set(SIDEBAR_IS_CLOSED_KEY, openedCode);
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
      toggleBodyClassName(state);
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set(SIDEBAR_IS_CLOSED_KEY, 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;

      toggleBodyClassName(state);
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    TOGGLE_SCREEN_SIZE: (state, size) => {
      state.screenSize = size;
    },
  },
};

export default app;

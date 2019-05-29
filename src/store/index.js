import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import menu from './modules/menu';
import account from './modules/account';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    menu,
    account,
  },
});

export default store;

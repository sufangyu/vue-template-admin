import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { HAS_MOCK } from './config';
import App from './App';
import router from './router';
import store from './store';
import './permission';
import './icons';
import * as filters from './filters';
import * as directives from './directives';

// register global filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// register global directives.
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
if (process.env.NODE_ENV === 'development' && HAS_MOCK) {
  // eslint-disable-next-line global-require
  const { mockXHR } = require('../mock');
  mockXHR();
}

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

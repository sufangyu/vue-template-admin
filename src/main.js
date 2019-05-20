import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
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

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

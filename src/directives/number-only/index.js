import NumberOnly from './number-only';

const install = (Vue) => {
  Vue.directive('NumberOnly', NumberOnly);
};

/* eslint-disable no-undef */
if (window.Vue) {
  window.numberOnly = NumberOnly;
  Vue.use(install);
}

NumberOnly.install = install;
export default NumberOnly;

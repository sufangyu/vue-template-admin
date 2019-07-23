/**
 * 只能输入数字指令
 *
 * eg:
 *  v-number-only:{number}="{key}"
 *    number: 最多只能{number}位的小数;
 *    key: v-model 邦定的 key
 */


/**
 * 查找元素
 *
 * @param {*} parent
 * @param {*} type
 * @returns
 */
function findElement(parent, type) {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
}

/**
 * 设置组件中的指定属性的值
 *
 * @param {*} exp
 * @param {*} value
 * @param {*} context
 */
function setValue(exp, value, context) {
  value = Number.isNaN(value) ? '' : value;
  /* eslint-disable no-new-func */
  new Function('context', 'value', `context.${exp} = value`)(context, value);
}

export default {
  inserted(el) {
    const $input = findElement(el, 'input');
    $input.lastValue = $input.value;
  },
  bind(el, options, vnode) {
    const $input = findElement(el, 'input');
    // const isNegative = $input.getAttribute('negative') !== null;
    // console.log('isNegative =>>', isNegative);
    // const regNegative = new RegExp(`^(\\-|\\+)?\\d+(?:\\.\\d{0,${arg}})?$`);
    const { expression, arg } = options;
    const { context } = vnode;
    const reg = arg > 0
      ? new RegExp(`^\\d+(?:\\.\\d{0,${arg}})?$`)
      : new RegExp('^\\d+$');

    // 初始化 lastValue
    el.$input = $input;
    $input.lastValue = $input.value;

    $input.handle = function fn() {
      const val = this.value;
      if (val.length && !reg.test(val)) {
        // 不符合条件, 重置 last value
        const newVal = $input.lastValue;
        setValue(expression, newVal, context);
        $input.value = newVal;
      } else {
        // 符合条件, 直接设值
        setValue(expression, val, context);
        $input.value = val;
      }

      $input.lastValue = $input.value;
    };

    $input.addEventListener('input', $input.handle, false);
  },
  unbind(el) {
    if (el) {
      el.$input.removeEventListener('input', el.$input.handle, false);
    }
  },
};

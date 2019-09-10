/**
 * 只能输入数字指令
 *
 * eg:
 *  v-number-only:{number}:{type}="{key}"
 *    number: 最多只能{number}位的小数
 *    type: 数字类型. -1: 可输入负数; 正数可不传
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
 * @param {*} el 元素
 * @param {*} type 触发的事件类型
 */
const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};


export default {
  inserted(el) {
    const $input = findElement(el, 'input');
    $input.lastValue = $input.value;
  },
  bind(el, options) {
    const $input = findElement(el, 'input');
    const { arg } = options;
    const [dotNum, type] = arg.split(':');
    // 是否可以输入负数
    const canInputNegative = type ? type.startsWith('-') : false;
    const HAS_DOT = dotNum > 0;

    let reg = '';
    if (canInputNegative) {
      // 可输入负数
      reg = HAS_DOT
        ? new RegExp(`^[+-]?\\d*\\.{0,1}\\d{0,${dotNum}}$`)
        : new RegExp('^[+-]?\\d*$');
    } else {
      // 只可输入正数
      reg = HAS_DOT
        ? new RegExp(`^\\d+(?:\\.\\d{0,${dotNum}})?$`)
        : new RegExp('^\\d+$');
    }

    // 初始化 lastValue
    el.$input = $input;
    $input.lastValue = $input.value;

    // 键盘按下事件
    $input.handleKeyup = function fn() {
      const val = this.value;

      if (val.length && !reg.test(val)) {
        // 不符合条件, 重置 last value
        const newVal = $input.lastValue;
        $input.value = newVal;
      } else {
        // 符合条件, 直接设值
        $input.value = val;
      }

      $input.lastValue = $input.value;

      // 触发数据更新
      trigger($input, 'input');
    };

    // 失去焦点事件
    $input.handleBlur = function fn() {
      let val = this.value.replace(!/(\d|.|-|[+])/g, '');

      // 自动补 0
      if (HAS_DOT && val.endsWith('.')) {
        val += '0';
      }

      if (canInputNegative) {
        // 只输入 - 号, 重置空值
        if (['-', '+'].includes(val.trim())) {
          val = '';
        }
        if (HAS_DOT && (val.startsWith('-.') || val.startsWith('+.'))) {
          val = '';
        }
        // 自动补 0
        if (HAS_DOT && val.endsWith('.')) {
          val += '0';
        }
      }

      // // 补全小数的长度
      // if (HAS_DOT && val) {
      //   val = Number(val).toFixed(arg);
      // }

      $input.value = val;
      $input.lastValue = $input.value;
      // 触发数据更新
      trigger($input, 'input');
    };

    $input.addEventListener('keyup', $input.handleKeyup, false);
    $input.addEventListener('blur', $input.handleBlur, false);
  },
  unbind(el) {
    if (el) {
      el.$input.removeEventListener('keyup', el.$input.handleKeyup, false);
      el.$input.removeEventListener('blur', el.$input.handleBlur, false);
    }
  },
};

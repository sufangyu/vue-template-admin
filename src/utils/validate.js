
/**
 * 校验数据
 *
 * @export
 * @param {*} value 值
 * @param {*} [rules=[]] 规则
 * @param {*} [validateProp={}] 校验的对象
 * @returns
 */
export function validateDeal(value, rules = [], validateProp = {}) {
  const errorMsg = [];

  rules.forEach((rule) => {
    const ruleKeys = Object.keys(rule).filter(key => key !== 'message');

    ruleKeys.forEach((key) => {
      let flag = false;
      let message = '';

      switch (key) {
        case 'len':
          flag = value.length !== rule.len;
          break;
        case 'min':
          flag = value.length < rule.min;
          break;
        case 'max':
          flag = value.length > rule.max;
          break;
        case 'pattern':
          flag = !rule.pattern.test(value);
          break;
        case 'validator':
          rule.validator(rule, value, (msg) => {
            try {
              flag = !!msg;
              if (flag) {
                throw msg;
              }
            } catch (error) {
              /* eslint-disable prefer-destructuring */
              message = error.message;
            }
          });
          break;
        case 'required':
          flag = (value === undefined) || (value === null) || (value === '');
          break;
        default:
      }

      if (flag) {
        const msg = message || rule.message;
        errorMsg.push({
          message: msg,
          validateProp,
        });
      }
    });
  });

  return errorMsg;
}


/**
 * 校验表单数据
 *
 * @export
 * @param {*} formEle 表单元素
 * @param {*} formVales 表单值对象
 * @param {*} validateRules 表单校验规则
 * @param {boolean} [isTile=true] 是否平铺结果返回
 * @returns
 */
export function validateFormData(formEle, formVales, validateRules, isTile = true) {
  const validateElements = formEle.querySelectorAll('[prop]');
  const validateProps = [...validateElements].map((el, index) => {
    const key = el.getAttribute('prop');
    return {
      key,
      el,
      index,
    };
  });

  const errorMessages = [];
  validateProps.forEach((validateProp) => {
    // 校验规则
    const validateItem = validateRules.find((item) => {
      return item.prop === validateProp.key;
    });
    if (validateItem) {
      const { prop, rules } = validateItem;
      const errorMsg = validateDeal(formVales[prop], rules, validateProp);
      errorMessages.push(errorMsg);
    }
  });

  if (isTile) {
    // 平铺展开二维数组
    return errorMessages.reduce((prev, next) => prev.concat(next));
  }

  return errorMessages;
}


/** 是否是外部网址
 *
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 去掉前后空格
 *
 * @param {*} str
 * @returns
 */
export function trimVal(str) {
  const reg = /^\s+|\s+$/g;
  return str.replace(reg, '');
}


/**
 * 校验 手机
 *
 * @export
 * @param {*} val
 * @returns
 */
export function isMobile(val) {
  const reg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
  return reg.test(val);
}


/**
 * 校验 邮箱
 *
 * @export
 * @param {*} val
 * @returns
 */
export function isEmail(val) {
  /* eslint-disable no-useless-escape */
  const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(val);
}


/**
 * 校验 QQ
 *
 * @export
 * @param {*} val
 * @returns
 */
export function isQQ(val) {
  const reg = /^[1-9][0-9]{4,9}$/gim;
  return reg.test(val);
}

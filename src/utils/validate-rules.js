import { isMobile, isEmail, isQQ, trimVal } from './validate';


/**
 * 校验 不小于
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validateMin(rule, value, callback) {
  if (!rule.min) {
    console.warn(`validateMin ${rule.field} miss min cinfig in rule`);
    return;
  }

  if (trimVal(value).length < rule.min) {
    callback(new Error(rule.message || `不能小于${rule.min}位数`));
  } else {
    callback();
  }
}


/**
 * 校验 不大于
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validateMax(rule, value, callback) {
  if (!rule.min) {
    console.warn(`validateMax ${rule.field} miss max cinfig in rule`);
    return;
  }

  if (trimVal(value).length < rule.min) {
    callback(new Error(rule.message || `不能大于${rule.min}位数`));
  } else {
    callback();
  }
}


/**
 * 校验 手机号码
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validateMobile(rule, value, callback) {
  if (!isMobile(trimVal(value))) {
    callback(new Error(rule.message || '手机号码格式不正确'));
  } else {
    callback();
  }
}


/**
 * 校验 有限
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validateEmail(rule, value, callback) {
  if (!isEmail(trimVal(value))) {
    callback(new Error(rule.message || '邮箱格式不正确'));
  } else {
    callback();
  }
}


/**
 * 校验 QQ
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validateQQ(rule, value, callback) {
  if (!isQQ(trimVal(value))) {
    callback(new Error(rule.message || 'QQ号码格式不正确'));
  } else {
    callback();
  }
}

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

/**
 *
 * 项目全局配置文件
 */

// 获取 api 前置路径
export const API_ORIGIN = (function fn() {
  if (process.env.NODE_ENV === 'development') {
    return '/api';
  }

  const ORIGIN = window.location.origin;
  return `${ORIGIN}/api`;
}());


// 多语言配置
export const LANGUAGES = [
  { name: '中文简体', lang: 'zh' },
  { name: 'English', lang: 'en' },
];

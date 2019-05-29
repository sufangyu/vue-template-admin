import Mock from 'mockjs';
import { getQueryObject } from '../src/utils';

import globalModal from './modules/global';
import menus from './modules/menus';
import user from './modules/user';

const mocks = [
  ...user,
  ...globalModal,
  ...menus,
];

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function fn(...args) {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...args);
  };

  function XHR2ExpressReqWrap(respond) {
    return function fn(options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: getQueryObject(url),
        });
      } else {
        result = respond;
      }

      // 将返回的测试数据打印到控制台
      console.groupCollapsed(`%c${options.type.toLowerCase()} | ${options.url}`, 'color: green;');
      console.log('%cparams: ', 'color: #38f', options.cparams);
      console.log('%cbody: ', 'color: #38f', JSON.parse(options.body));
      console.log('%cresponseData: ', 'color: #38f', result);
      console.groupEnd();

      return Mock.mock(result);
    };
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response));
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`/mock${url}`),
    type: type || 'get',
    response(req, res) {
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond));
    },
  };
};

export default mocks.map((route) => {
  return responseFake(route.url, route.type, route.response);
});

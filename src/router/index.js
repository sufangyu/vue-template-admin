import Vue from 'vue';
import Router from 'vue-router';
import routerConstantMap from './router-constant';
import routerAsyncMap from './router-async';
import routerLabsMap from './router-labs';

// 开发环境的 labs 路由
if (process.env.NODE_ENV === 'development') {
  routerConstantMap.push(...routerLabsMap);
}

Vue.use(Router);

const routerMap = [...routerConstantMap, ...routerAsyncMap];

// 静态路由. 不需要权限检测
export { routerConstantMap };

// 异步动态路由
export { routerAsyncMap };

export { routerLabsMap };

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: routerMap || [],
});

const router = createRouter();


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

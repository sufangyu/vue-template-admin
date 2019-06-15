import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
import store from '@/store';
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: true });

/* eslint-disable no-lonely-if */
router.beforeEach(async (to, from, next) => {
  NProgress.start();

  if (getToken()) {
    // Has logged in
    if (to.path === '/login') {
      next('/');
      NProgress.done();
    } else {
      if (to.matched.length === 0) {
        // Not match router
        next({ path: '/404' });
      } else {
        if (!store.getters.account) {
          // get user info
          try {
            await store.dispatch('account/getUserInfo');
          } catch (error) {
            console.log('dispatch getUserInfo error =>>', error);
          } finally {
            next({ replace: true });
          }
        } else {
          next();
        }
      }
    }
  } else {
    // Not logged in
    if (to.matched.length === 0) {
      console.warn('no match router');
      next({ path: '/login', replace: true });
      NProgress.done();
    } else {
      // match router
      if (to.meta.auth) {
        const redirectUrl = encodeURIComponent(to.path);
        next({ path: `/login?redirect=${redirectUrl}`, replace: true });
        NProgress.done();
      } else {
        next();
      }
    }
  }
});


router.afterEach(() => {
  NProgress.done();
});

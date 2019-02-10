import Vue       from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

 const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

 router.beforeEach( async (to, from, next) => {
   router.pageLoading = true;
   await router.app.$cms.setPageData(to.name);
   next()
 });

 router.afterEach(() => {
   router.pageLoading = false;
 });

export default router;

import Vue       from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

 const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

 router.beforeEach((to, from, next) => {
   router.loading = true;
   next()
 });

 router.afterEach(() => {
   router.loading = false;
 });

export default router;

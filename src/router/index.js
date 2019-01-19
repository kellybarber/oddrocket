import Vue       from 'vue';
import VueRouter from 'vue-router';

import Home from '../sections/Home';
import Work from '../sections/Work';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path     : '*',
      redirect : '/'
    }
  ]
});

import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store'
import utils  from './utils'

Vue.use(utils);

(async () => {
  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  });

  await app.$cms.init();

  app.$mount();
})();


import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store'
import utils  from './utils'

Vue.use(utils);

(async () => {
  try {
    const app = new Vue({
      router,
      store,
      render: h => h(App),
    });

    await app.$cms.init();

    app.$mount('#app');

  } catch (error) {
    console.error('App Setup Error: ', error);
  }
})();

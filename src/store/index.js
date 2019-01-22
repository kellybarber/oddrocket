import Vue  from 'vue';
import Vuex from 'vuex';

import filmOverlay from './modules/film-overlay';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    filmOverlay
  }
});

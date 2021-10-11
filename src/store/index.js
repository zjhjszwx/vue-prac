import Vue from 'vue';
import Vuex from 'vuex';

import counter from './module/counter';
import userInfo  from './module/user';
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    userInfo
  },
  getters
})

export default store
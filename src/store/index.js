// created by util.you.com@gmail.com
    

import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/user';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getter';


Vue.use(Vuex);

const store = new Vuex.Store(
  {
    modules: {
      app,
      user,
      permission
    },
    getters
  }
);


export default store;

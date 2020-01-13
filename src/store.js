import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userModule = {
  namespaced: true,
  state: {
    user: {
      name: "",
      token: null
    }
  },
  mutations: {
/*     logIn: (state, newUser) => {
      state.user = newUser;
    }, */
  },
  actions: {
/*     logIn: ({ commit }, payload) => {
      commit("logIn", payload);
    }, */
  }
};

const store = new Vuex.Store({
  modules: {
    userModule,
  }
});

export default store;

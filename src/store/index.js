import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rondaActual: "setup",
    ruta: null,
    formatoActual: "fms2020",
    freestyler1: "Freestyler 1",
    freestyler2: "Freestyler 2",
    total: null
  },
  mutations: {
    updatedformatoActual(state, payload) {
      state.formatoActual = payload;
    },

    updatedRuta(state, payload) {
      state.ruta = payload;
    },

    updatedRondaActual(state, payload) {
      state.rondaActual = payload;
    },

    updatedFreestyler1(state, payload) {
      state.freestyler1 = payload;
    },

    updatedFreestyler2(state, payload) {
      state.freestyler2 = payload;
    },

    updatedTotalRuta(state, payload) {
      state.total = payload;
    }
  },
  actions: {},
  modules: {}
});

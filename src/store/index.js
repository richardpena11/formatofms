import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultState = () => {
  return {
    rondaActual: "setup",
    ruta: null,
    formatoActual: "fms2020",
    freestyler1: "Freestyler 1",
    freestyler2: "Freestyler 2",
    total: new Object(),
    readyResultado: false
  };
};

export default new Vuex.Store({
  state: defaultState,
  mutations: {
    resetVotacion(state) {
      Object.assign(state, defaultState());
    },

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
    },

    addPatrones(state, payload) {
      if (!state.total[payload.name]) {
        state.total[payload.name] = new Object();
      }
      if (!state.total[payload.name][payload.ronda]) {
        state.total[payload.name][payload.ronda] = new Object();
      }
      if (!state.total[payload.name][payload.ronda].patrones) {
        state.total[payload.name][payload.ronda].patrones = new Array();
      }
      state.total[payload.name][payload.ronda].patrones.push(payload.value);
    },

    addPatronesTotal(state, payload) {
      const reducer = (acc, cur) => parseInt(acc) + parseInt(cur);
      const patrones = state.total[payload.name][payload.ronda].patrones;
      state.total[payload.name][payload.ronda].total = patrones.reduce(reducer);
      state.total[payload.name][payload.ronda].name = payload.ronda;
    },

    readyRenderResultados(state) {
      state.readyResultado = true;
    }
  },
  actions: {},
  modules: {}
});

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
    patronesDetalles: null,
    total: new Object()
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

    updatedpatronesDetalles(state, payload) {
      state.patronesDetalles = payload;
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
      const reducer = (acc, cur) => parseFloat(acc) + parseFloat(cur);
      const patrones = state.total[payload.name][payload.ronda].patrones;
      state.total[payload.name][payload.ronda].total = patrones.reduce(reducer);
      state.total[payload.name][payload.ronda].name = payload.ronda;
    },

    calculateTotal(state, payload) {
      const totalArr = [];

      for (const ronda of state.ruta) {
        const totalRonda = state.total[payload][ronda];
        if (totalRonda) {
          totalArr.push(totalRonda.total);
        }
      }

      const total = totalArr.reduce((acc, cur) => acc + cur);
      state.total[payload].total = { name: "total", total };
    },

    readyRenderResultados(state) {
      state.readyResultado = true;
    }
  },
  actions: {},
  modules: {}
});

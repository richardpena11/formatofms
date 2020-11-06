// import Vue from "vue";

const defaultState = () => {
  return {
    videoActual: "mNJz5L6wbCg",
    rondaActual: "setup",
    ruta: null,
    formatoActual: "fms2020",
    freestyler1: "Freestyler 1",
    freestyler2: "Freestyler 2",
    patronesDetalles: null,
    replica: null,
    displayResults: false,
    total: new Object(),
    ganador: ""
  };
};

const votacion = {
  namespaced: true,

  state: defaultState,

  mutations: {
    resetVotacion(state) {
      Object.assign(state, defaultState());
    },

    updatedVideoActual(state, payload) {
      console.log(payload);
      if (!payload) {
        state.videoActual = payload;
      }
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

    updatedReplica(state, payload) {
      state.replica = payload;
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

    calculateTotal(state) {
      for (const freestyler in state.total) {
        const totalArr = [];
        for (const ronda of state.ruta) {
          const totalRonda = state.total[freestyler][ronda];
          if (totalRonda) {
            totalArr.push(totalRonda.total);
          }
        }

        const total = totalArr.reduce((acc, cur) => acc + cur);
        state.total[freestyler].total = { name: "total", total };
      }
    },

    selectWinner(state) {
      if (!state.ganador) {
        const freestyler1 = state.freestyler1;
        const freestyler2 = state.freestyler2;
        const totalFreestyler1 = state.total[freestyler1].total.total;
        const totalFreestyler2 = state.total[freestyler2].total.total;
        const replica = state.replica;

        if (totalFreestyler1 > totalFreestyler2 + replica) {
          state.ganador = freestyler1;
        } else if (totalFreestyler2 > totalFreestyler1 + replica) {
          state.ganador = freestyler2;
        } else {
          state.ganador = "Réplica";
        }
      }
    },

    readyRenderResultados(state) {
      state.readyResultado = true;
    },

    displayResults(state) {
      state.displayResults = true;
    }
  },

  actions: {
    displayResultsWait(context) {
      setTimeout(() => {
        context.commit("calculateTotal");
        context.commit("selectWinner");
        context.commit("displayResults");
      }, 500);
    }
  }
};

export default votacion;

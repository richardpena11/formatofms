import Vue from "vue";
import Vuex from "vuex";
import votacion from "./Modules/votacion";
import admin from "./Modules/admin";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    votacion,
    admin
  }
});

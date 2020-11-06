/* eslint-disable no-unused-vars */

import Vue from "vue";
import router from "../../router/index";

const FBAuth = "https://identitytoolkit.googleapis.com/v1/accounts";
const FBApiKey = "AIzaSyAPrHemP-MG33XCIabYw6HTYZwEvh61jpA";

const admin = {
  namespaced: true,

  state: {
    token: null,
    refresh: null,
    authFailed: false
  },

  mutations: {
    authUser(state, payload) {
      state.token = payload.idToken;
      state.refresh = payload.refreshToken;

      if (payload.type === "signin") {
        router.push("/admin/dashboard");
      }
    },

    authFailed(state, payload) {
      if (payload === "reset") {
        state.authFailed = false;
      } else {
        state.authFailed = true;
      }
    },

    logOutUser(state) {
      state.token = null;
      state.refresh = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refresh");

      router.push("/");
    }
  },

  actions: {
    signIn({ commit }, payload) {
      Vue.http
        .post(`${FBAuth}:signInWithPassword?key=${FBApiKey}`, {
          ...payload,
          returnSecureToken: true
        })
        .then(response => response.json())
        .then(data => {
          commit("authUser", {
            ...data,
            type: "signin"
          });
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("refresh", data.refreshToken);
        })
        .catch(error => {
          commit("authFailed");
        });
    },

    refreshToken({ commit }) {
      const refrestToken = localStorage.getItem("refresh");

      if (refrestToken) {
        Vue.http
          .post(`https://securetoken.googleapis.com/v1/token?key=${FBApiKey}`, {
            grant_type: "refresh_token",
            refresh_token: refrestToken
          })
          .then(response => response.json())
          .then(data => {
            commit("authUser", {
              idToken: data.id_token,
              refreshToken: data.refresh_token,
              type: "refresh"
            });
            localStorage.setItem("token", data.id_token);
            localStorage.setItem("refresh", data.refresh_token);
          });
      }
    },

    addLiga({ commit, state }, {title, img, link, value}) {
      Vue.http
        .post(`Contenido/${value}.json?auth=${state.token}`, {title, img, link})
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    }
  }
};

export default admin;

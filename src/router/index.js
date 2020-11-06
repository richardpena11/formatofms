import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Inicio from "../views/Inicio/Inicio.vue";
import Ligas from "../views/Info/Ligas.vue";
import Temporadas from "../views/Info/Temporadas.vue";
import Jornada from "../views/Info/Jornada.vue";
import Votacion from "../views/Votacion/Votacion.vue";
import Admin from "../views/Admin/Admin.vue";
import Dashboard from "../views/Admin/Dashboard.vue";
import addJornada from "../views/Admin/addJornada.vue";
import addLiga from "../views/Admin/addLiga.vue";
import addTemporada from "../views/Admin/addTemporada.vue";

Vue.use(VueRouter);

const authGuard = {
  beforeEnter: (to, from, next) => {
    if (store.state.admin.token) {
      next();
    } else {
      next("/");
    }
  }
};

const routes = [
  {
    path: "/",
    component: Inicio
  },
  {
    path: "/eventos",
    component: Ligas
  },
  {
    path: "/eventos/:pais",
    component: Temporadas
  },
  {
    path: "/eventos/:pais/:temporada/:jornada",
    component: Jornada
  },
  {
    path: "/votar",
    component: Votacion,
    children: [
      {
        path: "/votar/:videoId",
        component: Votacion
      }
    ]
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    ...authGuard
  },
  {
    path: "/admin/add_jornada",
    component: addJornada,
    ...authGuard
  },
  {
    path: "/admin/add_temporada",
    component: addTemporada,
    ...authGuard
  },
  {
    path: "/admin/add_liga",
    component: addLiga,
    ...authGuard
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;

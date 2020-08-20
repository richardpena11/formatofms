import Vue from "vue";
import VueRouter from "vue-router";
import Ligas from "../views/Info/Ligas.vue";
import Temporadas from "../views/Info/Temporadas.vue";
import Jornada from "../views/Info/Jornada.vue";
import Votacion from "../views/Votacion/Votacion.vue";
import Admin from "../views/Admin/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/"
  },
  {
    path: "/eventos",
    name: "Ligas",
    component: Ligas
  },
  {
    path: "/eventos/:pais",
    name: "Temporadas",
    component: Temporadas
  },
  {
    path: "/eventos/:pais/:id",
    name: "Jornada",
    component: Jornada
  },
  {
    path: "/votar",
    name: "Votacion",
    component: Votacion
  },
  {
    path: "/votar/:videoId",
    name: "Votacion",
    component: Votacion
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }
];

const router = new VueRouter({
  routes
});

export default router;

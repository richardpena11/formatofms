import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMicrophone,
  faSquare,
  faCircle,
  faSun,
  faMoon,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueYoutube from "vue-youtube";

library.add(
  faMicrophone,
  faSquare,
  faCircle,
  faSun,
  faMoon,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faSearch
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueYoutube);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
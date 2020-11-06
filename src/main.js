import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMicrophone,
  faEdit,
  faHome,
  faSun,
  faMoon,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faSearch,
  faSignOutAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueYoutube from "vue-youtube";

// FONT AWESOME

library.add(
  faMicrophone,
  faEdit,
  faHome,
  faSun,
  faMoon,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faSearch,
  faSignOutAlt,
  faPlus
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// VUE RESOURCE

Vue.use(VueResource);
Vue.http.options.root = "https://formato-fms-e1513.firebaseio.com/";

// MISC

Vue.use(VueYoutube);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

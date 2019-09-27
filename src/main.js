import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueLazyLoad from 'vue-lazyload';

/* FA */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRocket,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faRocket, faArrowRight, faArrowLeft, faCheck, faTimes, faChevronLeft, faChevronRight);
Vue.component("icon", FontAwesomeIcon);

Vue.use(VueLazyLoad)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
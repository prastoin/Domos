import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from 'vue-lazyload';
import Lightbox from 'vue-my-photos';

Vue.component('lightbox', Lightbox);

Vue.use(VueLazyLoad)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
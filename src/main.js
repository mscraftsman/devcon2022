import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";

import VModal from "vue-js-modal";
Vue.use(VModal);

import VTooltip from "v-tooltip";
Vue.use(VTooltip);

Vue.use(VueMeta);

// import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

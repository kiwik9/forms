import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFirestore from "vue-firestore";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

Vue.use(Buefy);
Vue.use(VueFirestore);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

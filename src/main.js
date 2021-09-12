import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import apis from "./APIs/APIsFromServer";

import { routes } from "./route";

Vue.config.productionTip = true;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.prototype.$apis = apis;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

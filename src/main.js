import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import { GetAccount } from './APIs/APIsFromServer';
import { routes } from "./route";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
Vue.config.productionTip = true
Vue.prototype.$GetAccount = GetAccount

new Vue({
  vuetify,
  router,
  created: function () {
    console.log(this.$data)

  },
  render: h => h(App)
}).$mount('#app')

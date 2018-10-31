import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from './api'

import utils from './utils/index'

Vue.prototype.$api = axios
Vue.prototype.$utils = utils

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

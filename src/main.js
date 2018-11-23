import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css';
import axios from './api'

import utils from './utils/index'

import { Popup } from 'vant';

Vue.use(Popup);

Vue.prototype.$api = axios
Vue.prototype.$utils = utils


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

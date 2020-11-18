import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

// LINK Style
import "reset-css";
import "./styles/common.scss";

// LINK component
import App from "./App.vue";
import Routes from "./router/Routes";
import store from "./store";

// LINK Vue 3rd parties
Vue.use(VueRouter);
Vue.prototype.$http = axios;

const router = new VueRouter({ routes: Routes, mode: "history" });

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store,
});

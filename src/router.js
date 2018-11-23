import Vue from "vue";
import Router from "vue-router";
import Parent from "./views/index/Parent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "parent",
      component: Parent
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/about/Parent.vue")
    },
    {
      path: "/twoway",
      name: "twoway",
      component: () => import("./views/twoway/Parent.vue")
    },
    {
      path: "/eventbus",
      name: "eventbus",
      component: () => import("./views/eventbus/Parent.vue")
    },
    {
      path: "/routing",
      name: "routing",
      component: () => import("./views/routing/index.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("./views/routing/detail.vue")
    },
    {
      path: "/vuex",
      name: "vuex",
      component: () => import("./views/vuex/index.vue")
    },
    {
      path: "/vuex/detail",
      name: "vuexdemo",
      component: () => import("./views/vuex/detail.vue")
    },
    {
      path: "/others",
      name: "others",
      component: () => import("./views/others/Parent.vue")
    },
    {
      path: "/refs",
      name: "refs",
      component: () => import("./views/refs/Parent.vue")
    },
    {
      path: "/smart",
      name: "smart",
      component: () => import("./views/smartscoll/smart.vue")
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () => import("./views/lifecycle/index.vue")
    },
    {
      path: "/lifecycle/detail",
      name: "lifecycle",
      component: () => import("./views/lifecycle/detail.vue")
    }
  ]
});

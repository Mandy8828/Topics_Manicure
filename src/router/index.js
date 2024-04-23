import Vue from "vue";
import Router from "vue-router";
import Nailstyle from "@/components/Nailstyle";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Nailstyle-0",
      name: "Nailstyle",
      component: Nailstyle,
    },
    // 其他路由配置
  ],
});
